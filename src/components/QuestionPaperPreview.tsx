import React, { useState } from 'react';
import { 
  QuestionPaper, 
  PaperSection, 
  QuestionItem, 
  QuestionType 
} from '../types';
import { 
  Plus, 
  Trash2, 
  Edit3, 
  RefreshCw, 
  ArrowUp, 
  ArrowDown, 
  Type, 
  Columns, 
  Layout, 
  Sparkles,
  Printer,
  Check,
  X
} from 'lucide-react';

interface QuestionPaperPreviewProps {
  paper: QuestionPaper;
  onUpdatePaper: (updatedPaper: QuestionPaper) => void;
  onOpenQuestionEditor: (sectionId: string, question?: QuestionItem) => void;
  onRegenerateSingleQuestion: (sectionId: string, question: QuestionItem) => Promise<void>;
  isRegeneratingQuestionId?: string | null;
  language: 'ta' | 'en';
}

export const QuestionPaperPreview: React.FC<QuestionPaperPreviewProps> = ({
  paper,
  onUpdatePaper,
  onOpenQuestionEditor,
  onRegenerateSingleQuestion,
  isRegeneratingQuestionId,
  language,
}) => {
  // Toolbar controls
  const [fontSize, setFontSize] = useState<'normal' | 'large' | 'compact'>('normal');
  const [paperFormat, setPaperFormat] = useState<'with_lines' | 'questions_only'>('with_lines');
  const [fontFamily, setFontFamily] = useState<'noto' | 'mukta' | 'hind'>('noto');
  const [editingTitle, setEditingTitle] = useState(false);
  const [titleText, setTitleText] = useState(paper.title);

  // Helper to re-calculate total marks when sections change
  const recalculateTotalMarks = (sections: PaperSection[]): number => {
    return sections.reduce((acc, sec) => {
      const secTotal = sec.questions.reduce((qAcc, q) => qAcc + (q.marks || 1), 0);
      return acc + secTotal;
    }, 0);
  };

  const handleSaveTitle = () => {
    onUpdatePaper({
      ...paper,
      title: titleText,
      updatedAt: new Date().toISOString(),
    });
    setEditingTitle(false);
  };

  // Section deletion
  const handleDeleteSection = (sectionId: string) => {
    if (paper.sections.length <= 1) {
      alert(language === 'ta' ? 'குறைந்தது ஒரு பகுதி இருக்க வேண்டும்.' : 'Must have at least one section.');
      return;
    }
    const updatedSections = paper.sections.filter((s) => s.id !== sectionId);
    const newTotalMarks = recalculateTotalMarks(updatedSections);
    onUpdatePaper({
      ...paper,
      sections: updatedSections,
      totalMarks: newTotalMarks,
      updatedAt: new Date().toISOString(),
    });
  };

  // Question deletion
  const handleDeleteQuestion = (sectionId: string, questionId: string) => {
    const updatedSections = paper.sections.map((sec) => {
      if (sec.id === sectionId) {
        const filtered = sec.questions.filter((q) => q.id !== questionId);
        return {
          ...sec,
          questions: filtered,
          totalMarks: filtered.reduce((acc, q) => acc + q.marks, 0),
        };
      }
      return sec;
    });

    const newTotalMarks = recalculateTotalMarks(updatedSections);
    onUpdatePaper({
      ...paper,
      sections: updatedSections,
      totalMarks: newTotalMarks,
      updatedAt: new Date().toISOString(),
    });
  };

  // Move Question Up/Down
  const handleMoveQuestion = (sectionId: string, qIndex: number, direction: 'up' | 'down') => {
    const updatedSections = paper.sections.map((sec) => {
      if (sec.id === sectionId) {
        const questions = [...sec.questions];
        const targetIndex = direction === 'up' ? qIndex - 1 : qIndex + 1;
        if (targetIndex >= 0 && targetIndex < questions.length) {
          const temp = questions[qIndex];
          questions[qIndex] = questions[targetIndex];
          questions[targetIndex] = temp;
        }
        return { ...sec, questions };
      }
      return sec;
    });

    onUpdatePaper({
      ...paper,
      sections: updatedSections,
      updatedAt: new Date().toISOString(),
    });
  };

  // Add new blank section
  const handleAddSection = () => {
    const nextSectionNum = `பகுதி - ${String.fromCharCode(65 + paper.sections.length)}`;
    const newSection: PaperSection = {
      id: 'sec_' + Date.now(),
      sectionNumber: nextSectionNum,
      title: 'புதிய பகுதி (New Section)',
      questionType: 'short_answer',
      marksPerQuestion: 2,
      totalMarks: 4,
      questions: [
        {
          id: 'q_' + Date.now(),
          type: 'short_answer',
          questionText: 'புதிய வினாவை உள்ளிடுக (Type question here)',
          correctAnswer: 'விடை',
          marks: 2,
          blankAnswerSpaceLines: 3,
        },
      ],
    };

    const updatedSections = [...paper.sections, newSection];
    onUpdatePaper({
      ...paper,
      sections: updatedSections,
      totalMarks: recalculateTotalMarks(updatedSections),
      updatedAt: new Date().toISOString(),
    });
  };

  // Get font class
  const getFontFamilyClass = () => {
    if (fontFamily === 'mukta') return 'font-tamil-header';
    if (fontFamily === 'hind') return 'font-tamil-body';
    return 'font-sans';
  };

  const getFontSizeClass = () => {
    if (fontSize === 'large') return 'text-[15px] leading-relaxed';
    if (fontSize === 'compact') return 'text-[12.5px] leading-tight';
    return 'text-[13.5px] leading-normal';
  };

  // Calculate question running numbers across all sections
  let runningQuestionNumber = 0;

  return (
    <div className="space-y-4">
      {/* Paper Customization Control Bar (Hidden on print) */}
      <div className="no-print bg-white p-3 sm:p-4 rounded-xl border border-slate-200 shadow-sm flex flex-wrap items-center justify-between gap-3 text-xs">
        <div className="flex flex-wrap items-center gap-2">
          {/* Format mode */}
          <div className="flex items-center space-x-1 bg-slate-100 p-1 rounded-lg border border-slate-200">
            <button
              id="btn-format-lines"
              type="button"
              onClick={() => setPaperFormat('with_lines')}
              className={`px-2.5 py-1 rounded font-medium transition-all ${
                paperFormat === 'with_lines' ? 'bg-white shadow-xs text-slate-900 font-semibold' : 'text-slate-600'
              }`}
              title="விடை எழுதும் வரிகளுடன் (Worksheet Format)"
            >
              {language === 'ta' ? 'விடை வரிகளுடன்' : 'With Answer Lines'}
            </button>
            <button
              id="btn-format-compact"
              type="button"
              onClick={() => setPaperFormat('questions_only')}
              className={`px-2.5 py-1 rounded font-medium transition-all ${
                paperFormat === 'questions_only' ? 'bg-white shadow-xs text-slate-900 font-semibold' : 'text-slate-600'
              }`}
              title="வினாத்தாள் மட்டும் (Question Only - Saves paper)"
            >
              {language === 'ta' ? 'வினாத்தாள் மட்டும்' : 'Question Only'}
            </button>
          </div>

          {/* Font Size */}
          <div className="flex items-center space-x-1 bg-slate-100 p-1 rounded-lg border border-slate-200">
            <span className="text-[11px] text-slate-500 px-1 font-semibold">Font:</span>
            <button
              onClick={() => setFontSize('compact')}
              className={`px-2 py-0.5 rounded ${fontSize === 'compact' ? 'bg-white shadow-xs font-bold text-slate-900' : 'text-slate-600'}`}
            >
              A-
            </button>
            <button
              onClick={() => setFontSize('normal')}
              className={`px-2 py-0.5 rounded ${fontSize === 'normal' ? 'bg-white shadow-xs font-bold text-slate-900' : 'text-slate-600'}`}
            >
              A
            </button>
            <button
              onClick={() => setFontSize('large')}
              className={`px-2 py-0.5 rounded ${fontSize === 'large' ? 'bg-white shadow-xs font-bold text-slate-900' : 'text-slate-600'}`}
            >
              A+
            </button>
          </div>

          {/* Font Family */}
          <select
            value={fontFamily}
            onChange={(e) => setFontFamily(e.target.value as any)}
            className="bg-slate-100 border border-slate-200 rounded-lg px-2.5 py-1 text-xs text-slate-800 font-tamil-body focus:outline-none"
          >
            <option value="noto">Noto Sans Tamil (Standard)</option>
            <option value="mukta">Mukta Malar (Clear Primary)</option>
            <option value="hind">Hind Madurai (Modern)</option>
          </select>
        </div>

        <div className="flex items-center space-x-2">
          <button
            id="btn-add-section"
            type="button"
            onClick={handleAddSection}
            className="flex items-center space-x-1 px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-lg font-semibold border border-slate-200 transition-colors"
          >
            <Plus className="w-3.5 h-3.5 text-blue-600" />
            <span>{language === 'ta' ? 'புதிய பகுதி சேர்க்க' : 'Add Section'}</span>
          </button>
        </div>
      </div>

      {/* A4 PRINTABLE SHEET CONTAINER */}
      <div 
        id="printable-question-paper"
        className={`a4-page-sheet bg-white text-black p-6 sm:p-10 rounded-xl shadow-md border border-slate-200 max-w-4xl mx-auto ${getFontFamilyClass()} ${getFontSizeClass()}`}
        style={{ minHeight: '297mm' }}
      >
        {/* OFFICIAL TN SCHOOL EXAM HEADER */}
        <div className="border-2 border-black rounded-sm p-3 sm:p-4 mb-4 text-center space-y-1.5">
          {/* Government / School Name */}
          <div className="text-center">
            <h1 className="font-extrabold text-base sm:text-lg uppercase tracking-wide">
              {paper.headerConfig.schoolNameTa || paper.headerConfig.schoolName}
            </h1>
            {paper.headerConfig.schoolName && (
              <h2 className="font-bold text-xs sm:text-sm uppercase tracking-wider text-slate-800">
                {paper.headerConfig.schoolName}
              </h2>
            )}
            <p className="text-[11px] font-semibold text-slate-700">
              {paper.headerConfig.subTitle} • {paper.headerConfig.district} {paper.headerConfig.emisCode && `(EMIS: ${paper.headerConfig.emisCode})`}
            </p>
          </div>

          {/* Exam Title */}
          <div className="pt-1 border-t border-black">
            <h3 className="font-extrabold text-sm sm:text-base text-slate-950">
              {paper.headerConfig.examTitle} - {paper.headerConfig.academicYear}
            </h3>
          </div>

          {/* Meta Info Grid (Class, Subject, Time, Marks) */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-1 text-xs font-bold pt-1.5 border-t border-dashed border-slate-800 text-slate-900">
            <div className="text-left">
              வகுப்பு (Class): <span className="font-extrabold underline">{paper.standard}</span>
            </div>
            <div className="text-center sm:text-left">
              பாடம் (Subject): <span className="font-extrabold underline">{paper.subject.toUpperCase()}</span>
            </div>
            <div className="text-left sm:text-right">
              நேரம் (Time): <span className="font-extrabold">{paper.durationMinutes} நிமிடங்கள்</span>
            </div>
            <div className="text-right">
              மதிப்பெண் (Marks): <span className="font-extrabold">{paper.totalMarks}</span>
            </div>
          </div>

          {/* Student Fill-in Box */}
          {paper.headerConfig.includeStudentDetails && (
            <div className="mt-2 pt-2 border-t border-black grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs text-left font-semibold">
              <div>
                மாணவர் பெயர்: <span className="inline-block border-b border-dotted border-black w-32 ml-1"></span>
              </div>
              <div className="sm:text-center">
                பதிவு எண் (Roll No): <span className="inline-block border-b border-dotted border-black w-20 ml-1"></span>
              </div>
              <div className="sm:text-right">
                பிரிவு / நாள்: <span className="inline-block border-b border-dotted border-black w-24 ml-1"></span>
              </div>
            </div>
          )}
        </div>

        {/* INSTRUCTIONS */}
        <div className="text-xs font-bold text-slate-800 mb-3 flex items-center justify-between pb-1 border-b border-slate-300">
          <span>குறிப்பு: அனைத்து வினாக்களுக்கும் தெளிவாக விடையளிக்கவும்.</span>
          <span>மொத்த மதிப்பெண்கள்: {paper.totalMarks}</span>
        </div>

        {/* QUESTION SECTIONS */}
        <div className="space-y-5">
          {paper.sections.map((section, secIdx) => {
            const sectionMarksTotal = section.questions.reduce((sum, q) => sum + (q.marks || 1), 0);

            return (
              <div key={section.id} className="avoid-break-inside space-y-2.5 pb-2">
                {/* Section Heading */}
                <div className="flex items-start justify-between bg-slate-100 p-2 rounded border border-slate-300">
                  <div className="flex-1">
                    <h4 className="font-extrabold text-sm sm:text-[14.5px] text-black">
                      {section.sectionNumber}: {section.title}
                    </h4>
                    {section.choiceNotice && (
                      <p className="text-xs font-semibold text-slate-700 italic">
                        ({section.choiceNotice})
                      </p>
                    )}
                  </div>
                  <div className="flex items-center space-x-2 shrink-0 ml-2">
                    <span className="text-xs font-bold bg-white px-2 py-0.5 rounded border border-slate-300 text-slate-900">
                      {section.questions.length} × {section.marksPerQuestion} = {sectionMarksTotal} மதிப்பெண்கள்
                    </span>
                    {/* Section actions (hidden on print) */}
                    <div className="no-print flex items-center space-x-1">
                      <button
                        type="button"
                        onClick={() => onOpenQuestionEditor(section.id)}
                        className="p-1 hover:bg-slate-200 rounded text-slate-700"
                        title="Add Question to this section"
                      >
                        <Plus className="w-3.5 h-3.5 text-blue-600" />
                      </button>
                      <button
                        type="button"
                        onClick={() => handleDeleteSection(section.id)}
                        className="p-1 hover:bg-rose-100 rounded text-rose-600"
                        title="Delete Section"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Section Questions */}
                <div className="space-y-3 pl-1">
                  {section.questions.map((question, qIdx) => {
                    runningQuestionNumber++;
                    const isRegenerating = isRegeneratingQuestionId === question.id;

                    return (
                      <div
                        key={question.id}
                        className="group relative hover:bg-slate-50/80 p-1.5 rounded transition-all avoid-break-inside"
                      >
                        {/* Question Row */}
                        <div className="flex items-start justify-between">
                          <div className="flex-1 pr-3">
                            <div className="flex items-start space-x-1.5">
                              <span className="font-bold text-sm select-none shrink-0">
                                {runningQuestionNumber}.
                              </span>
                              <div className="flex-1 font-medium text-slate-950">
                                <span>{question.questionText}</span>

                                {/* MCQ Options */}
                                {question.type === 'mcq' && question.options && (
                                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mt-1.5 pl-2 text-xs">
                                    {question.options.map((opt, optIdx) => (
                                      <div key={optIdx} className="font-semibold text-slate-900">
                                        {opt}
                                      </div>
                                    ))}
                                  </div>
                                )}

                                {/* Match The Following */}
                                {question.type === 'match' && question.matchPairs && (
                                  <div className="mt-2 pl-4 pr-4 py-1.5 bg-slate-50 rounded border border-slate-200">
                                    <div className="grid grid-cols-2 gap-6 text-xs font-semibold">
                                      <div className="space-y-1.5">
                                        <div className="font-bold underline text-slate-800">பகுதி - 1 (Column A)</div>
                                        {question.matchPairs.map((pair) => (
                                          <div key={pair.id}>{pair.left}</div>
                                        ))}
                                      </div>
                                      <div className="space-y-1.5">
                                        <div className="font-bold underline text-slate-800">பகுதி - 2 (Column B)</div>
                                        {question.matchPairs.map((pair) => (
                                          <div key={pair.id}>{pair.right}</div>
                                        ))}
                                      </div>
                                    </div>
                                  </div>
                                )}

                                {/* Work lines for students if enabled */}
                                {paperFormat === 'with_lines' &&
                                  (question.type === 'short_answer' ||
                                    question.type === 'detail_answer' ||
                                    question.type === 'math_problems' ||
                                    question.type === 'picture_question') && (
                                    <div className="mt-2 space-y-2">
                                      {Array.from({ length: question.blankAnswerSpaceLines || 3 }).map((_, lineIdx) => (
                                        <div
                                          key={lineIdx}
                                          className="w-full border-b border-dotted border-slate-400 h-4"
                                        />
                                      ))}
                                    </div>
                                  )}
                              </div>
                            </div>
                          </div>

                          {/* Marks Indicator */}
                          <div className="flex items-center space-x-2 shrink-0">
                            <span className="text-xs font-bold text-slate-700 select-none">
                              ({question.marks} {question.marks === 1 ? 'மதிப்பெண்' : 'மதிப்பெண்கள்'})
                            </span>

                            {/* Floating Action Controls (Hidden on print) */}
                            <div className="no-print opacity-0 group-hover:opacity-100 flex items-center space-x-1 bg-white border border-slate-300 shadow-xs rounded px-1 py-0.5 transition-opacity">
                              <button
                                type="button"
                                onClick={() => onOpenQuestionEditor(section.id, question)}
                                className="p-1 hover:bg-slate-100 rounded text-slate-700"
                                title="Edit question"
                              >
                                <Edit3 className="w-3 h-3" />
                              </button>
                              <button
                                type="button"
                                onClick={() => onRegenerateSingleQuestion(section.id, question)}
                                disabled={isRegenerating}
                                className="p-1 hover:bg-blue-50 rounded text-blue-600 disabled:opacity-50"
                                title="AI Regenerate replacement question"
                              >
                                <RefreshCw className={`w-3 h-3 ${isRegenerating ? 'animate-spin' : ''}`} />
                              </button>
                              <button
                                type="button"
                                onClick={() => handleMoveQuestion(section.id, qIdx, 'up')}
                                disabled={qIdx === 0}
                                className="p-1 hover:bg-slate-100 rounded text-slate-700 disabled:opacity-30"
                                title="Move up"
                              >
                                <ArrowUp className="w-3 h-3" />
                              </button>
                              <button
                                type="button"
                                onClick={() => handleMoveQuestion(section.id, qIdx, 'down')}
                                disabled={qIdx === section.questions.length - 1}
                                className="p-1 hover:bg-slate-100 rounded text-slate-700 disabled:opacity-30"
                                title="Move down"
                              >
                                <ArrowDown className="w-3 h-3" />
                              </button>
                              <button
                                type="button"
                                onClick={() => handleDeleteQuestion(section.id, question.id)}
                                className="p-1 hover:bg-rose-100 rounded text-rose-600"
                                title="Delete question"
                              >
                                <Trash2 className="w-3 h-3" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        {/* TEACHER / EVALUATOR BOTTOM BOXES */}
        {paper.headerConfig.includeTeacherSignBox && (
          <div className="avoid-break-inside mt-8 pt-6 border-t-2 border-black grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs text-center font-bold">
            <div className="space-y-8">
              <div>தேர்வு மேற்பார்வையாளர் கையொப்பம்</div>
              <div className="border-t border-dotted border-black w-3/4 mx-auto" />
            </div>
            <div className="space-y-8">
              <div>மதிப்பீட்டாளர் கையொப்பம்</div>
              <div className="border-t border-dotted border-black w-3/4 mx-auto" />
            </div>
            <div className="space-y-8">
              <div>தலைமையாசிரியர் கையொப்பம்</div>
              <div className="border-t border-dotted border-black w-3/4 mx-auto" />
            </div>
            <div className="space-y-8">
              <div>பெற்றோர் கையொப்பம்</div>
              <div className="border-t border-dotted border-black w-3/4 mx-auto" />
            </div>
          </div>
        )}

        {/* Paper End Stamp */}
        <div className="mt-6 text-center text-xs font-bold text-slate-600 tracking-wider">
          *** வினாத்தாள் நிறைவுற்றது (End of Question Paper) ***
        </div>
      </div>
    </div>
  );
};
