import express from 'express';
import path from 'path';
import dotenv from 'dotenv';
import { GoogleGenAI } from '@google/genai';
import { createServer as createViteServer } from 'vite';
import { GeneratePaperRequest, QuestionPaper, QuestionItem, PaperSection } from './src/types';
import { SAMACHEER_SYLLABUS } from './src/data/samacheerSyllabus';

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json({ limit: '10mb' }));

// Lazy initializer for Gemini client
let aiClient: GoogleGenAI | null = null;

function getGeminiClient(): GoogleGenAI | null {
  if (!aiClient) {
    const apiKey = process.env.GEMINI_API_KEY;
    if (apiKey) {
      aiClient = new GoogleGenAI({
        apiKey,
        httpOptions: {
          headers: {
            'User-Agent': 'aistudio-build',
          },
        },
      });
    }
  }
  return aiClient;
}

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    hasGeminiKey: !!process.env.GEMINI_API_KEY,
    appName: 'TN Samacheer Kalvi Question Paper Generator',
  });
});

// Generate complete question paper using Gemini 3.7 Flash
app.post('/api/generate-paper', async (req, res) => {
  try {
    const requestData: GeneratePaperRequest = req.body;
    const {
      standard,
      term,
      subject,
      medium,
      examType,
      totalMarks,
      durationMinutes,
      selectedUnits,
      difficulty,
      questionTypes,
      schoolName,
      district,
      customInstructions,
    } = requestData;

    // Get syllabus units text
    const classSyllabus = SAMACHEER_SYLLABUS[standard]?.find((s) => s.subjectId === subject);
    const termUnits = classSyllabus?.terms[term]?.units || [];
    const relevantUnits = selectedUnits?.length
      ? termUnits.filter((u) => selectedUnits.includes(u.id))
      : termUnits;

    const unitsSummary = relevantUnits
      .map((u) => `Unit ${u.number}: ${u.titleTa} (${u.titleEn}) - Topics: ${u.subTopics.join(', ')}`)
      .join('\n');

    const subjectNameTa = classSyllabus?.subjectNameTa || subject;

    const prompt = `You are a Senior Tamil Nadu State Board (SCERT) Primary School Teacher and Question Paper Setting Specialist.
Generate a complete, standard, formatted Question Paper according to Tamil Nadu Samacheer Kalvi textbooks for:

- Class / Standard: Class ${standard} (வகுப்பு ${standard})
- Academic Term: Term ${term} (பருவம் ${term})
- Subject: ${subjectNameTa} (${subject})
- Medium of Instruction: ${medium === 'tamil' ? 'தமிழ் வழி (Tamil Medium)' : medium === 'english' ? 'English Medium' : 'Bilingual (Tamil + English)'}
- Exam Type: ${examType} (e.g. SA - Summative Assessment / FA - Formative Assessment)
- Total Marks: ${totalMarks} Marks
- Duration: ${durationMinutes} Minutes
- Difficulty Level: ${difficulty}
- Selected Syllabus Chapters / Units:
${unitsSummary || 'All Chapters in Term ' + term}
${customInstructions ? `Additional Teacher Instructions: ${customInstructions}` : ''}

Generate structured JSON adhering to standard TN Samacheer Kalvi question paper blueprint:
Ensure authentic Tamil font / vocabulary used in Tamil Nadu government textbooks (e.g. 'சரியான விடையைத் தேர்வு செய்க', 'கோடிட்ட இடங்களை நிரப்புக', 'பொருத்துக', 'சரியா? தவறா?', 'குறுகிய விடையளி', 'விரிவான விடையளி').
For Math, ensure appropriate grade 1-5 arithmetic and geometry.
For English, ensure standard phonics, rhymes, grammar and comprehension.

Return ONLY a valid JSON object strictly matching this TypeScript structure:
{
  "title": "${standard}-ஆம் வகுப்பு ${subjectNameTa} - பருவம் ${term}",
  "standard": "${standard}",
  "term": "${term}",
  "subject": "${subject}",
  "medium": "${medium}",
  "examType": "${examType}",
  "totalMarks": ${totalMarks},
  "durationMinutes": ${durationMinutes},
  "sections": [
    {
      "id": "sec_1",
      "sectionNumber": "பகுதி - அ",
      "title": "சரியான விடையைத் தேர்ந்தெடுத்து எழுதுக (Choose the Correct Answer)",
      "questionType": "mcq",
      "marksPerQuestion": 1,
      "totalMarks": 5,
      "questions": [
        {
          "id": "q1",
          "type": "mcq",
          "questionText": "Question in Tamil or English based on medium...",
          "options": ["அ) Option 1", "ஆ) Option 2", "இ) Option 3", "ஈ) Option 4"],
          "correctAnswer": "ஆ) Option 2",
          "marks": 1,
          "unitOrChapter": "Unit Name",
          "bloomTaxonomy": "Knowledge"
        }
      ]
    }
  ]
}

Ensure the sum of marks of all sections exactly equals ${totalMarks} marks.
Include correct answers for each question so an automatic Answer Key is provided.`;

    const ai = getGeminiClient();

    if (!ai) {
      return res.status(400).json({
        error: 'GEMINI_API_KEY is not configured in Secrets. Please configure it to use AI generation.',
      });
    }

    const response = await ai.models.generateContent({
      model: 'gemini-3.7-flash',
      contents: prompt,
      config: {
        responseMimeType: 'application/json',
        temperature: 0.7,
      },
    });

    const text = response.text;
    if (!text) {
      throw new Error('Empty response from AI model');
    }

    const parsedData = JSON.parse(text);

    // Formatted QuestionPaper object
    const generatedPaper: QuestionPaper = {
      id: 'paper_' + Date.now(),
      title: parsedData.title || `${standard}-ஆம் வகுப்பு ${subjectNameTa} - பருவம் ${term}`,
      standard,
      term,
      subject,
      medium,
      examType,
      totalMarks: parsedData.totalMarks || totalMarks,
      durationMinutes: parsedData.durationMinutes || durationMinutes,
      headerConfig: {
        schoolName: schoolName || 'PANCHAYAT UNION PRIMARY SCHOOL',
        schoolNameTa: 'ஊராட்சி ஒன்றிய தொடக்கப்பள்ளி',
        subTitle: 'பள்ளிக் கல்வித்துறை - தமிழ்நாடு அரசு',
        district: district ? `${district} மாவட்டம்` : 'தமிழ்நாடு',
        emisCode: '33000000000',
        examTitle:
          examType === 'SA'
            ? `பருவம் - ${term} தொகுத்தறி மதிப்பீடு (Summative Assessment)`
            : `பருவம் - ${term} வளரறி மதிப்பீடு (Formative Assessment)`,
        examTitleEn: `Term - ${term} Assessment Examination`,
        academicYear: '2024 - 2025',
        includeStudentDetails: true,
        includeTeacherSignBox: true,
        includeParentSignBox: true,
      },
      selectedUnits: selectedUnits || [],
      sections: parsedData.sections || [],
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      answerKeyProvided: true,
    };

    return res.json({ success: true, paper: generatedPaper });
  } catch (error: any) {
    console.error('Error generating question paper:', error);
    return res.status(500).json({
      error: error.message || 'Failed to generate question paper. Please try again.',
    });
  }
});

// Single Question Regenerate or Suggest Replacement
app.post('/api/regenerate-question', async (req, res) => {
  try {
    const { standard, term, subject, medium, questionType, unitOrChapter, marks, currentText } = req.body;
    const ai = getGeminiClient();

    if (!ai) {
      return res.status(400).json({ error: 'GEMINI_API_KEY is not configured.' });
    }

    const prompt = `Generate ONE new authentic Tamil Nadu Samacheer Kalvi question for:
- Standard: Class ${standard}
- Term: ${term}
- Subject: ${subject}
- Medium: ${medium}
- Question Type: ${questionType} (e.g. mcq, fill_blanks, match, true_false, short_answer)
- Chapter / Topic: ${unitOrChapter || 'General syllabus'}
- Marks: ${marks || 1}
- Avoid duplicating this previous question: "${currentText || ''}"

Return strictly JSON format:
{
  "id": "q_new_${Date.now()}",
  "type": "${questionType}",
  "questionText": "New question text...",
  "options": ["அ) Option A", "ஆ) Option B", "இ) Option C", "ஈ) Option D"],
  "correctAnswer": "Correct answer with explanation",
  "marks": ${marks || 1},
  "unitOrChapter": "${unitOrChapter || ''}",
  "bloomTaxonomy": "Understanding"
}`;

    const response = await ai.models.generateContent({
      model: 'gemini-3.7-flash',
      contents: prompt,
      config: {
        responseMimeType: 'application/json',
        temperature: 0.8,
      },
    });

    const text = response.text;
    const parsed = JSON.parse(text || '{}');
    return res.json({ success: true, question: parsed });
  } catch (err: any) {
    console.error('Error regenerating question:', err);
    return res.status(500).json({ error: err.message || 'Question regeneration failed' });
  }
});

// Suggest Blueprint Matrix based on SCERT standards
app.post('/api/suggest-blueprint', async (req, res) => {
  try {
    const { standard, term, subject, totalMarks } = req.body;
    const ai = getGeminiClient();

    if (!ai) {
      return res.status(400).json({ error: 'GEMINI_API_KEY is not configured.' });
    }

    const prompt = `Create a standard Tamil Nadu SCERT Question Paper Blueprint Matrix for:
Class: ${standard}, Term: ${term}, Subject: ${subject}, Total Marks: ${totalMarks}
Divide marks across: Knowledge (அறிவுசார்), Understanding (புரிதல்), Application (பயன்பாடு), Skill (செயல்திறன்).

Return JSON format:
{
  "blueprintRows": [
    {
      "unitName": "Unit 1 Name",
      "knowledgeMarks": 4,
      "understandingMarks": 5,
      "applicationMarks": 3,
      "skillMarks": 2,
      "totalMarks": 14
    }
  ],
  "summary": {
    "knowledgeTotal": 15,
    "understandingTotal": 20,
    "applicationTotal": 15,
    "skillTotal": 10,
    "grandTotal": ${totalMarks}
  }
}`;

    const response = await ai.models.generateContent({
      model: 'gemini-3.7-flash',
      contents: prompt,
      config: {
        responseMimeType: 'application/json',
      },
    });

    const text = response.text;
    const parsed = JSON.parse(text || '{}');
    return res.json({ success: true, blueprint: parsed });
  } catch (err: any) {
    console.error('Error creating blueprint:', err);
    return res.status(500).json({ error: err.message || 'Blueprint creation failed' });
  }
});

// Setup Vite or static serving
async function startServer() {
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`TN Question Paper Generator server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
