import React, { useState } from 'react';
import { 
  StandardClass, 
  AcademicTerm, 
  SubjectId, 
  QuestionItem, 
  QuestionPaper 
} from '../types';
import { SAMACHEER_SYLLABUS } from '../data/samacheerSyllabus';
import { SAMPLE_QUESTION_PAPERS } from '../data/sampleQuestionPapers';
import { X, BookOpen, Plus, Search, Check, Layers } from 'lucide-react';

interface QuestionBankModalProps {
  currentPaper: QuestionPaper | null;
  isOpen: boolean;
  onClose: () => void;
  onInsertQuestion: (question: QuestionItem, targetSectionId?: string) => void;
  language: 'ta' | 'en';
}

export const QuestionBankModal: React.FC<QuestionBankModalProps> = ({
  currentPaper,
  isOpen,
  onClose,
  onInsertQuestion,
  language,
}) => {
  if (!isOpen) return null;

  const [selectedStandard, setSelectedStandard] = useState<StandardClass>(currentPaper?.standard || '5');
  const [selectedTerm, setSelectedTerm] = useState<AcademicTerm>(currentPaper?.term || '2');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [insertedIds, setInsertedIds] = useState<string[]>([]);

  // Collect all questions from sample papers
  const allBankQuestions: { question: QuestionItem; standard: string; term: string; subject: string; sectionTitle: string }[] = [];

  SAMPLE_QUESTION_PAPERS.forEach((paper) => {
    paper.sections.forEach((sec) => {
      sec.questions.forEach((q) => {
        allBankQuestions.push({
          question: q,
          standard: paper.standard,
          term: paper.term,
          subject: paper.subject,
          sectionTitle: sec.title,
        });
      });
    });
  });

  // Filter bank questions
  const filteredQuestions = allBankQuestions.filter((item) => {
    if (selectedStandard && item.standard !== selectedStandard) return false;
    if (selectedTerm && item.term !== selectedTerm) return false;
    if (searchQuery) {
      const qText = item.question.questionText.toLowerCase();
      const ansText = (item.question.correctAnswer || '').toLowerCase();
      const sQuery = searchQuery.toLowerCase();
      if (!qText.includes(sQuery) && !ansText.includes(sQuery)) return false;
    }
    if (selectedCategory !== 'all' && item.question.type !== selectedCategory) return false;
    return true;
  });

  const handleInsert = (question: QuestionItem) => {
    const targetSection = currentPaper?.sections[0]?.id;
    onInsertQuestion(question, targetSection);
    setInsertedIds((prev) => [...prev, question.id]);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
      <div className="bg-white rounded-2xl shadow-xl border border-stone-300 w-full max-w-3xl max-h-[85vh] flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-150">
        {/* Header */}
        <div className="px-6 py-4 border-b border-stone-200 flex items-center justify-between bg-stone-50">
          <div className="flex items-center space-x-2">
            <BookOpen className="w-5 h-5 text-amber-600" />
            <div>
              <h3 className="font-bold text-base text-stone-900 font-tamil-header">
                {language === 'ta' ? 'சமச்சீர் கல்வி வினா வங்கி (SCERT Question Bank)' : 'Question Bank'}
              </h3>
              <p className="text-xs text-stone-500">
                {language === 'ta'
                  ? 'வகுப்பு 1-5 முந்தைய மாதிரி வினாக்களிலிருந்து உங்கள் வினாத்தாளில் எளிதாகச் சேர்க்கலாம்.'
                  : 'Select and insert authenticated standard questions into your active question paper.'}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-stone-500 hover:text-stone-900 hover:bg-stone-200 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Filters */}
        <div className="p-4 border-b border-stone-200 bg-stone-50/50 flex flex-wrap gap-2 items-center text-xs">
          {/* Class filter */}
          <div className="flex items-center space-x-1 bg-white border border-stone-300 rounded-lg p-1">
            {(['1', '2', '3', '4', '5'] as StandardClass[]).map((cls) => (
              <button
                key={cls}
                onClick={() => setSelectedStandard(cls)}
                className={`px-2.5 py-1 rounded font-bold transition-all ${
                  selectedStandard === cls
                    ? 'bg-amber-500 text-stone-950 shadow-xs'
                    : 'text-stone-600 hover:bg-stone-100'
                }`}
              >
                வகுப்பு {cls}
              </button>
            ))}
          </div>

          {/* Term filter */}
          <div className="flex items-center space-x-1 bg-white border border-stone-300 rounded-lg p-1">
            {(['1', '2', '3'] as AcademicTerm[]).map((t) => (
              <button
                key={t}
                onClick={() => setSelectedTerm(t)}
                className={`px-2.5 py-1 rounded font-semibold transition-all ${
                  selectedTerm === t
                    ? 'bg-amber-500 text-stone-950 shadow-xs'
                    : 'text-stone-600 hover:bg-stone-100'
                }`}
              >
                பருவம் {t}
              </button>
            ))}
          </div>

          {/* Type filter */}
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="bg-white border border-stone-300 rounded-lg px-2.5 py-1.5 text-stone-700 font-medium"
          >
            <option value="all">அனைத்து வினா வகைகள்</option>
            <option value="mcq">சரியான விடை (MCQ)</option>
            <option value="fill_blanks">கோடிட்ட இடம்</option>
            <option value="match">பொருத்துக</option>
            <option value="true_false">சரியா தவறா</option>
            <option value="short_answer">குறுகிய விடையளி</option>
            <option value="detail_answer">விரிவான விடையளி</option>
          </select>

          {/* Search Input */}
          <div className="flex-1 min-w-[200px] relative">
            <Search className="w-3.5 h-3.5 text-stone-400 absolute left-2.5 top-2.5" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="வினா அல்லது விடை தேடுக..."
              className="w-full bg-white border border-stone-300 rounded-lg pl-8 pr-3 py-1.5 text-xs text-stone-900 focus:outline-none"
            />
          </div>
        </div>

        {/* Question List */}
        <div className="p-6 overflow-y-auto flex-1 divide-y divide-stone-200">
          {filteredQuestions.length === 0 ? (
            <div className="text-center py-12 text-stone-500 text-xs">
              <Layers className="w-8 h-8 text-stone-300 mx-auto mb-2" />
              {language === 'ta'
                ? 'தேர்ந்தெடுத்த வகைக்கு வினாக்கள் கிடைக்கவில்லை.'
                : 'No questions found for the selected filters.'}
            </div>
          ) : (
            filteredQuestions.map((item, idx) => {
              const isAdded = insertedIds.includes(item.question.id);

              return (
                <div key={idx} className="py-3.5 first:pt-0 last:pb-0 flex items-start justify-between gap-4">
                  <div className="space-y-1.5 flex-1">
                    <div className="flex items-center space-x-2 text-[11px]">
                      <span className="bg-stone-100 text-stone-700 px-2 py-0.5 rounded font-semibold">
                        வகுப்பு {item.standard} • பருவம் {item.term}
                      </span>
                      <span className="text-amber-800 font-medium">
                        {item.sectionTitle}
                      </span>
                      <span className="text-stone-400">•</span>
                      <span className="text-stone-600 font-semibold">{item.question.marks} மதிப்பெண்</span>
                    </div>

                    <p className="font-semibold text-stone-900 text-xs sm:text-sm font-tamil-body">
                      {item.question.questionText}
                    </p>

                    {item.question.options && (
                      <div className="grid grid-cols-2 gap-1.5 text-xs text-stone-600 pl-2">
                        {item.question.options.map((opt, oIdx) => (
                          <div key={oIdx}>{opt}</div>
                        ))}
                      </div>
                    )}

                    {item.question.correctAnswer && (
                      <p className="text-xs text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded inline-block">
                        <span className="font-bold">விடை:</span> {item.question.correctAnswer}
                      </p>
                    )}
                  </div>

                  <button
                    type="button"
                    onClick={() => handleInsert(item.question)}
                    disabled={isAdded || !currentPaper}
                    className={`px-3 py-1.5 text-xs font-bold rounded-lg flex items-center space-x-1 shrink-0 transition-all ${
                      isAdded
                        ? 'bg-emerald-100 text-emerald-800'
                        : 'bg-amber-500 hover:bg-amber-400 text-stone-950 shadow-xs'
                    }`}
                  >
                    {isAdded ? (
                      <>
                        <Check className="w-3.5 h-3.5" />
                        <span>சேர்க்கப்பட்டது</span>
                      </>
                    ) : (
                      <>
                        <Plus className="w-3.5 h-3.5" />
                        <span>தாளில் சேர்</span>
                      </>
                    )}
                  </button>
                </div>
              );
            })
          )}
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3 border-t border-stone-200 bg-stone-50 flex items-center justify-between text-xs text-stone-500">
          <span>மொத்தம் {filteredQuestions.length} வினாக்கள் கிடைக்கின்றன</span>
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
