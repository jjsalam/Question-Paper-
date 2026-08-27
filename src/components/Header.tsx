import React from 'react';
import { 
  FileText, 
  Printer, 
  Download, 
  Settings, 
  FolderOpen, 
  Sparkles, 
  BookOpen, 
  CheckSquare, 
  Grid, 
  Languages,
  Plus
} from 'lucide-react';
import { QuestionPaper } from '../types';

interface HeaderProps {
  currentPaper: QuestionPaper | null;
  activeView: 'paper' | 'answer_key' | 'blueprint';
  setActiveView: (view: 'paper' | 'answer_key' | 'blueprint') => void;
  onOpenSettings: () => void;
  onOpenSavedPapers: () => void;
  onOpenQuestionBank: () => void;
  onNewPaper: () => void;
  onPrint: () => void;
  onDownloadPDF: () => void;
  isDownloadingPDF: boolean;
  language: 'ta' | 'en';
  setLanguage: (lang: 'ta' | 'en') => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentPaper,
  activeView,
  setActiveView,
  onOpenSettings,
  onOpenSavedPapers,
  onOpenQuestionBank,
  onNewPaper,
  onPrint,
  onDownloadPDF,
  isDownloadingPDF,
  language,
  setLanguage,
}) => {
  return (
    <header className="no-print sticky top-0 z-40 bg-[#1E293B] text-white border-b border-slate-800 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Brand */}
          <div className="flex items-center space-x-3">
            <div className="w-9 h-9 rounded-lg bg-blue-600 text-white flex items-center justify-center font-bold text-lg shadow-sm">
              <span>த</span>
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="font-tamil-header text-base sm:text-lg font-bold text-white tracking-wide">
                  {language === 'ta' ? 'வினாத்தாள்' : 'Question Paper'} <span className="text-blue-400 font-semibold text-xs sm:text-sm">QP Generator</span>
                </span>
                <span className="bg-slate-800 text-blue-300 text-[11px] px-2 py-0.5 rounded-full border border-slate-700 font-medium">
                  Classes 1 - 5
                </span>
              </div>
              <p className="text-xs text-slate-400 font-tamil-body hidden sm:block">
                {language === 'ta'
                  ? 'தமிழ்நாடு சமச்சீர் கல்வி வினாத்தாள், ப்ளூபிரிண்ட் & விடைக் குறிப்பு'
                  : 'SCERT Samacheer Kalvi Question Paper & Assessment Studio'}
              </p>
            </div>
          </div>

          {/* View Mode Switcher (Paper / Answer Key / Blueprint) */}
          {currentPaper && (
            <div className="hidden md:flex items-center bg-slate-900/90 p-1 rounded-lg border border-slate-700/80">
              <button
                id="tab-paper-view"
                onClick={() => setActiveView('paper')}
                className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-md text-xs font-semibold transition-all ${
                  activeView === 'paper'
                    ? 'bg-blue-600 text-white shadow-xs'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800'
                }`}
              >
                <FileText className="w-3.5 h-3.5" />
                <span>{language === 'ta' ? 'வினாத்தாள்' : 'Question Paper'}</span>
              </button>
              <button
                id="tab-answer-key"
                onClick={() => setActiveView('answer_key')}
                className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-md text-xs font-semibold transition-all ${
                  activeView === 'answer_key'
                    ? 'bg-blue-600 text-white shadow-xs'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800'
                }`}
              >
                <CheckSquare className="w-3.5 h-3.5" />
                <span>{language === 'ta' ? 'விடைக் குறிப்பு' : 'Answer Key'}</span>
              </button>
              <button
                id="tab-blueprint"
                onClick={() => setActiveView('blueprint')}
                className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-md text-xs font-semibold transition-all ${
                  activeView === 'blueprint'
                    ? 'bg-blue-600 text-white shadow-xs'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800'
                }`}
              >
                <Grid className="w-3.5 h-3.5" />
                <span>{language === 'ta' ? 'திட்ட வரைபடம் (Blueprint)' : 'Blueprint'}</span>
              </button>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex items-center space-x-2">
            <button
              id="btn-new-paper"
              onClick={onNewPaper}
              className="flex items-center space-x-1.5 px-3 py-1.5 text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 rounded-lg transition-colors"
              title={language === 'ta' ? 'புதிய வினாத்தாள் உருவாக்கு' : 'Create New Paper'}
            >
              <Plus className="w-3.5 h-3.5 text-blue-400" />
              <span className="hidden sm:inline">{language === 'ta' ? 'புதிய தாள்' : 'New Paper'}</span>
            </button>

            <button
              id="btn-question-bank"
              onClick={onOpenQuestionBank}
              className="flex items-center space-x-1.5 px-2.5 py-1.5 text-xs font-medium bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 rounded-lg transition-colors"
              title={language === 'ta' ? 'சமச்சீர் வினா வங்கி' : 'Question Bank'}
            >
              <BookOpen className="w-3.5 h-3.5 text-blue-400" />
              <span className="hidden lg:inline">{language === 'ta' ? 'வினா வங்கி' : 'Bank'}</span>
            </button>

            <button
              id="btn-saved-papers"
              onClick={onOpenSavedPapers}
              className="flex items-center space-x-1.5 px-2.5 py-1.5 text-xs font-medium bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 rounded-lg transition-colors"
              title={language === 'ta' ? 'சேமிக்கப்பட்ட தாள்கள்' : 'Saved Papers'}
            >
              <FolderOpen className="w-3.5 h-3.5 text-blue-400" />
              <span className="hidden lg:inline">{language === 'ta' ? 'சேமித்தவை' : 'Saved'}</span>
            </button>

            <button
              id="btn-school-settings"
              onClick={onOpenSettings}
              className="p-1.5 text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-lg transition-colors"
              title={language === 'ta' ? 'பள்ளி முகப்பு & EMIS அமைப்புகள்' : 'School Settings'}
            >
              <Settings className="w-4 h-4" />
            </button>

            <div className="h-5 w-px bg-slate-700 mx-1 hidden sm:block" />

            {/* Print & PDF Export */}
            <button
              id="btn-print-paper"
              onClick={onPrint}
              disabled={!currentPaper}
              className="flex items-center space-x-1.5 px-3 py-1.5 text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-slate-100 border border-slate-700 rounded-lg disabled:opacity-40 transition-colors"
              title={language === 'ta' ? 'அச்சிடு / A4 Print' : 'Print / Save as PDF'}
            >
              <Printer className="w-3.5 h-3.5 text-emerald-400" />
              <span>{language === 'ta' ? 'அச்சிடு' : 'Print'}</span>
            </button>

            <button
              id="btn-download-pdf"
              onClick={onDownloadPDF}
              disabled={!currentPaper || isDownloadingPDF}
              className="flex items-center space-x-1.5 px-3.5 py-1.5 text-xs font-semibold bg-blue-600 hover:bg-blue-500 text-white rounded-lg shadow-sm disabled:opacity-50 transition-all"
            >
              <Download className="w-3.5 h-3.5" />
              <span>{isDownloadingPDF ? (language === 'ta' ? 'தயாராகிறது...' : 'Generating...') : 'PDF (பதிவிறக்கம்)'}</span>
            </button>

            {/* Language Switch */}
            <button
              id="btn-lang-toggle"
              onClick={() => setLanguage(language === 'ta' ? 'en' : 'ta')}
              className="px-2 py-1 text-xs font-medium text-slate-400 hover:text-white hover:bg-slate-800 rounded transition-colors"
              title="Switch Language"
            >
              <Languages className="w-3.5 h-3.5 inline mr-1" />
              {language === 'ta' ? 'EN' : 'தமிழ்'}
            </button>
          </div>
        </div>

        {/* Mobile View Mode Tabs */}
        {currentPaper && (
          <div className="flex md:hidden items-center justify-center space-x-2 py-2 border-t border-slate-800">
            <button
              onClick={() => setActiveView('paper')}
              className={`flex-1 flex items-center justify-center space-x-1 py-1.5 rounded-lg text-xs font-semibold ${
                activeView === 'paper' ? 'bg-blue-600 text-white' : 'text-slate-400 bg-slate-800'
              }`}
            >
              <FileText className="w-3 h-3" />
              <span>வினாத்தாள்</span>
            </button>
            <button
              onClick={() => setActiveView('answer_key')}
              className={`flex-1 flex items-center justify-center space-x-1 py-1.5 rounded-lg text-xs font-semibold ${
                activeView === 'answer_key' ? 'bg-blue-600 text-white' : 'text-slate-400 bg-slate-800'
              }`}
            >
              <CheckSquare className="w-3 h-3" />
              <span>விடைக் குறிப்பு</span>
            </button>
            <button
              onClick={() => setActiveView('blueprint')}
              className={`flex-1 flex items-center justify-center space-x-1 py-1.5 rounded-lg text-xs font-semibold ${
                activeView === 'blueprint' ? 'bg-blue-600 text-white' : 'text-slate-400 bg-slate-800'
              }`}
            >
              <Grid className="w-3 h-3" />
              <span>திட்ட வரைபடம்</span>
            </button>
          </div>
        )}
      </div>
    </header>
  );
};
