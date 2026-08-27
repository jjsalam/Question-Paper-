import React from 'react';
import { QuestionPaper } from '../types';
import { X, FolderOpen, Trash2, Copy, FileText, Download, Calendar, Award } from 'lucide-react';

interface SavedPapersModalProps {
  savedPapers: QuestionPaper[];
  onSelectPaper: (paper: QuestionPaper) => void;
  onDeletePaper: (paperId: string) => void;
  onDuplicatePaper: (paper: QuestionPaper) => void;
  isOpen: boolean;
  onClose: () => void;
  language: 'ta' | 'en';
}

export const SavedPapersModal: React.FC<SavedPapersModalProps> = ({
  savedPapers,
  onSelectPaper,
  onDeletePaper,
  onDuplicatePaper,
  isOpen,
  onClose,
  language,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
      <div className="bg-white rounded-2xl shadow-xl border border-stone-300 w-full max-w-2xl max-h-[85vh] flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-150">
        {/* Header */}
        <div className="px-6 py-4 border-b border-stone-200 flex items-center justify-between bg-stone-50">
          <div className="flex items-center space-x-2">
            <FolderOpen className="w-5 h-5 text-amber-600" />
            <h3 className="font-bold text-base text-stone-900 font-tamil-header">
              {language === 'ta' ? 'சேமிக்கப்பட்ட வினாத்தாள்கள் (Saved Question Papers)' : 'Saved Question Papers'}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-stone-500 hover:text-stone-900 hover:bg-stone-200 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto flex-1 space-y-3">
          {savedPapers.length === 0 ? (
            <div className="text-center py-12 text-stone-500 text-xs">
              <FileText className="w-10 h-10 text-stone-300 mx-auto mb-2" />
              <p className="font-semibold text-stone-700">
                {language === 'ta' ? 'சேமிக்கப்பட்ட வினாத்தாள்கள் எதுவும் இல்லை.' : 'No saved question papers yet.'}
              </p>
              <p className="mt-1 text-stone-400">
                {language === 'ta'
                  ? 'நீங்கள் உருவாக்கும் அல்லது திருத்தும் வினாத்தாள்கள் இங்கு தானாகவே சேமிக்கப்படும்.'
                  : 'Papers you create or edit are automatically stored here in your local browser storage.'}
              </p>
            </div>
          ) : (
            savedPapers.map((paper) => (
              <div
                key={paper.id}
                className="border border-stone-200 hover:border-amber-400 bg-white p-4 rounded-xl shadow-xs transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-3"
              >
                <div className="space-y-1">
                  <div className="flex items-center space-x-2">
                    <span className="bg-amber-100 text-amber-900 text-[11px] font-bold px-2 py-0.5 rounded">
                      வகுப்பு {paper.standard} • பருவம் {paper.term}
                    </span>
                    <span className="text-xs font-semibold text-stone-700">
                      {paper.totalMarks} மதிப்பெண்கள்
                    </span>
                  </div>
                  <h4 className="font-bold text-stone-900 text-sm font-tamil-header">
                    {paper.title}
                  </h4>
                  <p className="text-xs text-stone-500">
                    {paper.sections.length} பகுதிகள் • {paper.durationMinutes} நிமிடங்கள் •{' '}
                    <span className="text-stone-400">
                      {new Date(paper.updatedAt || paper.createdAt).toLocaleDateString()}
                    </span>
                  </p>
                </div>

                <div className="flex items-center space-x-2 shrink-0">
                  <button
                    onClick={() => {
                      onSelectPaper(paper);
                      onClose();
                    }}
                    className="px-3.5 py-1.5 bg-amber-500 hover:bg-amber-400 text-stone-950 text-xs font-bold rounded-lg shadow-xs transition-colors"
                  >
                    {language === 'ta' ? 'திறக்க' : 'Open'}
                  </button>

                  <button
                    onClick={() => onDuplicatePaper(paper)}
                    className="p-1.5 text-stone-600 hover:bg-stone-100 rounded-lg"
                    title={language === 'ta' ? 'நகலெடு (Duplicate)' : 'Duplicate'}
                  >
                    <Copy className="w-4 h-4" />
                  </button>

                  <button
                    onClick={() => onDeletePaper(paper.id)}
                    className="p-1.5 text-rose-500 hover:bg-rose-50 rounded-lg"
                    title={language === 'ta' ? 'நீக்கு' : 'Delete'}
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        <div className="px-6 py-3 border-t border-stone-200 bg-stone-50 flex items-center justify-between text-xs text-stone-500">
          <span>{savedPapers.length} தாள்கள் சேமிக்கப்பட்டுள்ளன</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 bg-stone-800 hover:bg-stone-900 text-white rounded-lg font-semibold"
          >
            மூடுக (Close)
          </button>
        </div>
      </div>
    </div>
  );
};
