import React, { useState, useEffect } from 'react';
import { 
  QuestionPaper, 
  GeneratePaperRequest, 
  QuestionItem, 
  SchoolHeaderConfig, 
  PaperSection 
} from './types';
import { SAMPLE_QUESTION_PAPERS } from './data/sampleQuestionPapers';
import { Header } from './components/Header';
import { PaperConfigForm } from './components/PaperConfigForm';
import { QuestionPaperPreview } from './components/QuestionPaperPreview';
import { AnswerKeyView } from './components/AnswerKeyView';
import { BlueprintView } from './components/BlueprintView';
import { QuestionEditorModal } from './components/QuestionEditorModal';
import { SchoolSettingsModal } from './components/SchoolSettingsModal';
import { QuestionBankModal } from './components/QuestionBankModal';
import { SavedPapersModal } from './components/SavedPapersModal';
import { exportElementToPDF } from './utils/pdfGenerator';
import { 
  Sparkles, 
  FileText, 
  BookOpen, 
  Settings, 
  CheckCircle2, 
  AlertCircle, 
  Plus, 
  ChevronRight, 
  Layers, 
  HelpCircle,
  Clock,
  Award
} from 'lucide-react';

const LOCAL_STORAGE_SAVED_PAPERS = 'tn_samacheer_saved_papers_v1';
const LOCAL_STORAGE_CURRENT_PAPER = 'tn_samacheer_active_paper_v1';
const LOCAL_STORAGE_SCHOOL_CONFIG = 'tn_samacheer_school_config_v1';

export default function App() {
  const [language, setLanguage] = useState<'ta' | 'en'>('ta');
  const [activeView, setActiveView] = useState<'paper' | 'answer_key' | 'blueprint'>('paper');
  const [showConfigDrawer, setShowConfigDrawer] = useState<boolean>(false);

  // Active question paper (default to the complete Grade 5 Tamil Term 2 paper)
  const [currentPaper, setCurrentPaper] = useState<QuestionPaper>(() => {
    try {
      const saved = localStorage.getItem(LOCAL_STORAGE_CURRENT_PAPER);
      if (saved) return JSON.parse(saved);
    } catch (e) {
      console.error(e);
    }
    return SAMPLE_QUESTION_PAPERS[0];
  });

  // Saved papers collection
  const [savedPapers, setSavedPapers] = useState<QuestionPaper[]>(() => {
    try {
      const saved = localStorage.getItem(LOCAL_STORAGE_SAVED_PAPERS);
      if (saved) return JSON.parse(saved);
    } catch (e) {
      console.error(e);
    }
    return SAMPLE_QUESTION_PAPERS;
  });

  // School config
  const [schoolConfig, setSchoolConfig] = useState<SchoolHeaderConfig>(() => {
    try {
      const saved = localStorage.getItem(LOCAL_STORAGE_SCHOOL_CONFIG);
      if (saved) return JSON.parse(saved);
    } catch (e) {
      console.error(e);
    }
    return currentPaper.headerConfig;
  });

  // Modals state
  const [isQuestionEditorOpen, setIsQuestionEditorOpen] = useState(false);
  const [editingSectionId, setEditingSectionId] = useState<string>('');
  const [editingQuestion, setEditingQuestion] = useState<QuestionItem | undefined>(undefined);
  const [isSchoolSettingsOpen, setIsSchoolSettingsOpen] = useState(false);
  const [isQuestionBankOpen, setIsQuestionBankOpen] = useState(false);
  const [isSavedPapersOpen, setIsSavedPapersOpen] = useState(false);

  // Status & loaders
  const [isGeneratingAI, setIsGeneratingAI] = useState(false);
  const [isRegeneratingQuestionId, setIsRegeneratingQuestionId] = useState<string | null>(null);
  const [isDownloadingPDF, setIsDownloadingPDF] = useState(false);
  const [toastMessage, setToastMessage] = useState<{ text: string; type: 'success' | 'error' | 'info' } | null>(null);

  // Show auto-dismissing toast
  const showToast = (text: string, type: 'success' | 'error' | 'info' = 'success') => {
    setToastMessage({ text, type });
    setTimeout(() => {
      setToastMessage(null);
    }, 4000);
  };

  // Sync to local storage
  useEffect(() => {
    if (currentPaper) {
      localStorage.setItem(LOCAL_STORAGE_CURRENT_PAPER, JSON.stringify(currentPaper));
    }
  }, [currentPaper]);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_SAVED_PAPERS, JSON.stringify(savedPapers));
  }, [savedPapers]);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_SCHOOL_CONFIG, JSON.stringify(schoolConfig));
  }, [schoolConfig]);

  // Handle AI Paper Generation
  const handleGenerateAI = async (config: GeneratePaperRequest) => {
    setIsGeneratingAI(true);
    try {
      const response = await fetch('/api/generate-paper', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...config,
          schoolName: schoolConfig.schoolName,
          district: schoolConfig.district,
        }),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.error || 'AI வினாத்தாள் உருவாக்குவதில் பிழை ஏற்பட்டது.');
      }

      const newPaper: QuestionPaper = {
        ...data.paper,
        headerConfig: {
          ...schoolConfig,
          examTitle:
            config.examType === 'SA'
              ? `பருவம் - ${config.term} தொகுத்தறி மதிப்பீடு (Summative Assessment)`
              : `பருவம் - ${config.term} வளரறி மதிப்பீடு (Formative Assessment)`,
        },
      };

      setCurrentPaper(newPaper);
      setSavedPapers((prev) => [newPaper, ...prev]);
      setShowConfigDrawer(false);
      setActiveView('paper');
      showToast(
        language === 'ta'
          ? 'சமச்சீர் வினாத்தாள் வெற்றிகரமாக உருவாக்கப்பட்டது!'
          : 'Samacheer Kalvi question paper created successfully!',
        'success'
      );
    } catch (err: any) {
      console.warn('AI generation error, falling back or showing alert:', err);
      showToast(
        err.message || 'AI வினாத்தாள் உருவாக்க முடியவில்லை. தயவுசெய்து மீண்டும் முயற்சிக்கவும்.',
        'error'
      );
    } finally {
      setIsGeneratingAI(false);
    }
  };

  // Handle Single Question Regeneration via AI
  const handleRegenerateSingleQuestion = async (sectionId: string, question: QuestionItem) => {
    setIsRegeneratingQuestionId(question.id);
    try {
      const response = await fetch('/api/regenerate-question', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          standard: currentPaper.standard,
          term: currentPaper.term,
          subject: currentPaper.subject,
          medium: currentPaper.medium,
          questionType: question.type,
          unitOrChapter: question.unitOrChapter,
          marks: question.marks,
          currentText: question.questionText,
        }),
      });

      const data = await response.json();
      if (!response.ok || !data.success) {
        throw new Error(data.error || 'Failed to regenerate question');
      }

      const updatedQuestion: QuestionItem = {
        ...question,
        ...data.question,
        id: question.id,
      };

      const updatedSections = currentPaper.sections.map((sec) => {
        if (sec.id === sectionId) {
          return {
            ...sec,
            questions: sec.questions.map((q) => (q.id === question.id ? updatedQuestion : q)),
          };
        }
        return sec;
      });

      const updatedPaper = {
        ...currentPaper,
        sections: updatedSections,
        updatedAt: new Date().toISOString(),
      };

      setCurrentPaper(updatedPaper);
      showToast(
        language === 'ta' ? 'புதிய வினா மாற்றப்பட்டது!' : 'Question replaced with new one!',
        'success'
      );
    } catch (err: any) {
      showToast(err.message || 'வினாவை மாற்ற முடியவில்லை', 'error');
    } finally {
      setIsRegeneratingQuestionId(null);
    }
  };

  // Handle Loading Preset
  const handleLoadPreset = (presetPaper: QuestionPaper) => {
    const loaded: QuestionPaper = {
      ...presetPaper,
      id: 'paper_' + Date.now(),
      headerConfig: {
        ...presetPaper.headerConfig,
        schoolNameTa: schoolConfig.schoolNameTa || presetPaper.headerConfig.schoolNameTa,
        schoolName: schoolConfig.schoolName || presetPaper.headerConfig.schoolName,
        district: schoolConfig.district || presetPaper.headerConfig.district,
        emisCode: schoolConfig.emisCode || presetPaper.headerConfig.emisCode,
      },
      updatedAt: new Date().toISOString(),
    };
    setCurrentPaper(loaded);
    setShowConfigDrawer(false);
    setActiveView('paper');
    showToast(
      language === 'ta'
        ? `வகுப்பு ${loaded.standard} மாதிரி வினாத்தாள் திறக்கப்பட்டது.`
        : `Class ${loaded.standard} model paper loaded.`,
      'success'
    );
  };

  // Handle Save Question from Editor Modal
  const handleSaveQuestion = (sectionId: string, question: QuestionItem) => {
    let updatedSections: PaperSection[];
    const section = currentPaper.sections.find((s) => s.id === sectionId);

    if (section) {
      const exists = section.questions.some((q) => q.id === question.id);
      if (exists) {
        // Edit existing
        updatedSections = currentPaper.sections.map((s) =>
          s.id === sectionId
            ? {
                ...s,
                questions: s.questions.map((q) => (q.id === question.id ? question : q)),
              }
            : s
        );
      } else {
        // Add new
        updatedSections = currentPaper.sections.map((s) =>
          s.id === sectionId ? { ...s, questions: [...s.questions, question] } : s
        );
      }
    } else {
      // Add to first section
      updatedSections = currentPaper.sections.map((s, idx) =>
        idx === 0 ? { ...s, questions: [...s.questions, question] } : s
      );
    }

    const newTotalMarks = updatedSections.reduce((acc, sec) => {
      return acc + sec.questions.reduce((qAcc, q) => qAcc + (q.marks || 1), 0);
    }, 0);

    setCurrentPaper({
      ...currentPaper,
      sections: updatedSections,
      totalMarks: newTotalMarks,
      updatedAt: new Date().toISOString(),
    });

    showToast(language === 'ta' ? 'வினா சேமிக்கப்பட்டது!' : 'Question saved!', 'success');
  };

  // Insert question from Question Bank
  const handleInsertFromBank = (question: QuestionItem, targetSectionId?: string) => {
    const targetId = targetSectionId || currentPaper.sections[0]?.id;
    if (!targetId) return;

    handleSaveQuestion(targetId, {
      ...question,
      id: 'q_' + Date.now(),
    });
  };

  // Handle School Config Save
  const handleSaveSchoolConfig = (newConfig: SchoolHeaderConfig) => {
    setSchoolConfig(newConfig);
    setCurrentPaper({
      ...currentPaper,
      headerConfig: newConfig,
      updatedAt: new Date().toISOString(),
    });
    showToast(language === 'ta' ? 'பள்ளி முகப்பு விவரங்கள் புதுப்பிக்கப்பட்டன.' : 'School header updated.');
  };

  // Handle Duplicate Paper
  const handleDuplicatePaper = (paperToDup: QuestionPaper) => {
    const copy: QuestionPaper = {
      ...paperToDup,
      id: 'paper_' + Date.now(),
      title: `${paperToDup.title} (நகல் - Copy)`,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    setSavedPapers([copy, ...savedPapers]);
    setCurrentPaper(copy);
    showToast(language === 'ta' ? 'வினாத்தாள் நகலெடுக்கப்பட்டது!' : 'Paper duplicated!');
  };

  // Handle Delete Paper
  const handleDeletePaper = (paperId: string) => {
    const filtered = savedPapers.filter((p) => p.id !== paperId);
    setSavedPapers(filtered);
    showToast(language === 'ta' ? 'வினாத்தாள் நீக்கப்பட்டது.' : 'Paper deleted.', 'info');
  };

  // Handle Print
  const handlePrint = () => {
    window.print();
  };

  // Handle PDF Download
  const handleDownloadPDF = async () => {
    setIsDownloadingPDF(true);
    try {
      let targetElementId = 'printable-question-paper';
      let suffix = 'QuestionPaper';

      if (activeView === 'answer_key') {
        targetElementId = 'printable-answer-key';
        suffix = 'AnswerKey';
      } else if (activeView === 'blueprint') {
        targetElementId = 'printable-blueprint';
        suffix = 'Blueprint';
      }

      const fileName = `Class${currentPaper.standard}_Term${currentPaper.term}_${currentPaper.subject.toUpperCase()}_${suffix}.pdf`;
      await exportElementToPDF({
        elementId: targetElementId,
        fileName,
      });

      showToast(language === 'ta' ? 'PDF கோப்பு பதிவிறக்கம் செய்யப்பட்டது!' : 'PDF downloaded successfully!');
    } catch (err: any) {
      console.error(err);
      showToast(language === 'ta' ? 'PDF பதிவிறக்கத்தில் பிழை ஏற்பட்டது. Print பொத்தானைப் பயன்படுத்தவும்.' : 'PDF export error. Use Print button.', 'error');
    } finally {
      setIsDownloadingPDF(false);
    }
  };

  // Open editor for section / question
  const handleOpenQuestionEditor = (sectionId: string, question?: QuestionItem) => {
    setEditingSectionId(sectionId);
    setEditingQuestion(question);
    setIsQuestionEditorOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex flex-col font-sans text-slate-800 selection:bg-blue-200 selection:text-blue-900">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-5 right-5 z-50 animate-in fade-in slide-in-from-bottom-3 duration-200">
          <div
            className={`px-4 py-3 rounded-xl shadow-lg border text-xs font-semibold flex items-center space-x-2.5 ${
              toastMessage.type === 'success'
                ? 'bg-slate-900 text-white border-slate-700 shadow-slate-900/20'
                : toastMessage.type === 'error'
                ? 'bg-rose-950 text-rose-100 border-rose-800 shadow-rose-950/20'
                : 'bg-slate-900 text-slate-100 border-slate-700'
            }`}
          >
            {toastMessage.type === 'success' ? (
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            ) : (
              <AlertCircle className="w-4 h-4 text-amber-400 shrink-0" />
            )}
            <span>{toastMessage.text}</span>
          </div>
        </div>
      )}

      {/* Main Top Header Bar */}
      <Header
        currentPaper={currentPaper}
        activeView={activeView}
        setActiveView={setActiveView}
        onOpenSettings={() => setIsSchoolSettingsOpen(true)}
        onOpenSavedPapers={() => setIsSavedPapersOpen(true)}
        onOpenQuestionBank={() => setIsQuestionBankOpen(true)}
        onNewPaper={() => setShowConfigDrawer(true)}
        onPrint={handlePrint}
        onDownloadPDF={handleDownloadPDF}
        isDownloadingPDF={isDownloadingPDF}
        language={language}
        setLanguage={setLanguage}
      />

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto p-4 sm:p-6 lg:p-8 space-y-6">
        {/* Top Summary Bar & Quick Toggle (Hidden on print) */}
        <div className="no-print bg-white p-4 sm:p-5 rounded-xl shadow-sm border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center space-x-3.5">
            <div className="w-10 h-10 rounded-lg bg-blue-600 text-white flex items-center justify-center font-bold text-base shadow-sm">
              {currentPaper.standard}
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <h2 className="font-bold text-sm sm:text-base text-slate-900 font-tamil-header">
                  {currentPaper.title}
                </h2>
                <span className="bg-blue-50 text-blue-700 border border-blue-200 text-[11px] font-bold px-2.5 py-0.5 rounded-md">
                  {currentPaper.totalMarks} மதிப்பெண்கள்
                </span>
              </div>
              <p className="text-xs text-slate-500 mt-0.5">
                வகுப்பு {currentPaper.standard} • பருவம் {currentPaper.term} • {currentPaper.subject.toUpperCase()} • {currentPaper.durationMinutes} நிமிடங்கள் • {currentPaper.sections.reduce((acc, s) => acc + s.questions.length, 0)} வினாக்கள்
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <button
              id="btn-open-generator-drawer"
              onClick={() => setShowConfigDrawer(!showConfigDrawer)}
              className="flex-1 sm:flex-initial px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold rounded-lg shadow-sm flex items-center justify-center space-x-2 transition-all"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>{showConfigDrawer ? (language === 'ta' ? 'அமைப்பை மூடு' : 'Close Setup') : (language === 'ta' ? 'வகுப்பு / பருவம் மாற்றுக' : 'Change Class/Term')}</span>
            </button>
          </div>
        </div>

        {/* Accordion / Drawer for Paper Generation Form */}
        {showConfigDrawer && (
          <div className="no-print animate-in fade-in slide-in-from-top-3 duration-200">
            <PaperConfigForm
              onGenerateAI={handleGenerateAI}
              onLoadPreset={handleLoadPreset}
              isGenerating={isGeneratingAI}
              language={language}
            />
          </div>
        )}

        {/* Active View Render */}
        <div className="transition-opacity duration-200">
          {activeView === 'paper' && (
            <QuestionPaperPreview
              paper={currentPaper}
              onUpdatePaper={setCurrentPaper}
              onOpenQuestionEditor={handleOpenQuestionEditor}
              onRegenerateSingleQuestion={handleRegenerateSingleQuestion}
              isRegeneratingQuestionId={isRegeneratingQuestionId}
              language={language}
            />
          )}

          {activeView === 'answer_key' && (
            <AnswerKeyView paper={currentPaper} language={language} />
          )}

          {activeView === 'blueprint' && (
            <BlueprintView paper={currentPaper} language={language} />
          )}
        </div>
      </main>

      {/* Footer (Hidden on print) */}
      <footer className="no-print bg-[#1E293B] text-slate-400 py-6 border-t border-slate-800 text-xs text-center">
        <div className="max-w-7xl mx-auto px-4 space-y-1.5">
          <p className="font-semibold text-slate-200">
            தமிழ்நாடு சமச்சீர் கல்வி வினாத்தாள் மற்றும் மாதிரி தேர்வுத்தாள் உருவாக்கி (வகுப்பு 1 - 5)
          </p>
          <p className="text-[11px] text-slate-500">
            Designed for Tamil Nadu Primary School Teachers according to SCERT syllabus and evaluation blueprints.
          </p>
        </div>
      </footer>

      {/* MODALS */}
      <QuestionEditorModal
        sectionId={editingSectionId}
        question={editingQuestion}
        isOpen={isQuestionEditorOpen}
        onClose={() => {
          setIsQuestionEditorOpen(false);
          setEditingQuestion(undefined);
        }}
        onSave={handleSaveQuestion}
        language={language}
      />

      <SchoolSettingsModal
        currentConfig={schoolConfig}
        isOpen={isSchoolSettingsOpen}
        onClose={() => setIsSchoolSettingsOpen(false)}
        onSave={handleSaveSchoolConfig}
        language={language}
      />

      <QuestionBankModal
        currentPaper={currentPaper}
        isOpen={isQuestionBankOpen}
        onClose={() => setIsQuestionBankOpen(false)}
        onInsertQuestion={handleInsertFromBank}
        language={language}
      />

      <SavedPapersModal
        savedPapers={savedPapers}
        onSelectPaper={(paper) => {
          setCurrentPaper(paper);
          setActiveView('paper');
        }}
        onDeletePaper={handleDeletePaper}
        onDuplicatePaper={handleDuplicatePaper}
        isOpen={isSavedPapersOpen}
        onClose={() => setIsSavedPapersOpen(false)}
        language={language}
      />
    </div>
  );
}
