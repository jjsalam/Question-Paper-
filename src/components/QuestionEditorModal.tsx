import React, { useState } from 'react';
import { QuestionItem, QuestionType } from '../types';
import { X, Check, Plus, Trash2, HelpCircle } from 'lucide-react';

interface QuestionEditorModalProps {
  sectionId: string;
  question?: QuestionItem;
  isOpen: boolean;
  onClose: () => void;
  onSave: (sectionId: string, question: QuestionItem) => void;
  language: 'ta' | 'en';
}

export const QuestionEditorModal: React.FC<QuestionEditorModalProps> = ({
  sectionId,
  question,
  isOpen,
  onClose,
  onSave,
  language,
}) => {
  if (!isOpen) return null;

  const isEditing = !!question;

  const [type, setType] = useState<QuestionType>(question?.type || 'short_answer');
  const [questionText, setQuestionText] = useState(question?.questionText || '');
  const [marks, setMarks] = useState<number>(question?.marks || 2);
  const [correctAnswer, setCorrectAnswer] = useState(question?.correctAnswer || '');
  const [unitOrChapter, setUnitOrChapter] = useState(question?.unitOrChapter || '');
  const [bloomTaxonomy, setBloomTaxonomy] = useState(question?.bloomTaxonomy || 'Understanding');
  const [blankAnswerSpaceLines, setBlankAnswerSpaceLines] = useState(question?.blankAnswerSpaceLines || 3);

  // MCQ Options
  const [options, setOptions] = useState<string[]>(
    question?.options || ['அ) ', 'ஆ) ', 'இ) ', 'ஈ) ']
  );

  // Match Pairs
  const [matchPairs, setMatchPairs] = useState(
    question?.matchPairs || [
      { id: '1', left: '', right: '' },
      { id: '2', left: '', right: '' },
      { id: '3', left: '', right: '' },
      { id: '4', left: '', right: '' },
    ]
  );

  const handleOptionChange = (idx: number, val: string) => {
    const updated = [...options];
    updated[idx] = val;
    setOptions(updated);
  };

  const handleAddOption = () => {
    const prefixes = ['அ) ', 'ஆ) ', 'இ) ', 'ஈ) ', 'உ) ', 'ஊ) '];
    const prefix = prefixes[options.length] || `${options.length + 1}) `;
    setOptions([...options, prefix]);
  };

  const handleRemoveOption = (idx: number) => {
    if (options.length > 2) {
      setOptions(options.filter((_, i) => i !== idx));
    }
  };

  const handleMatchPairChange = (idx: number, field: 'left' | 'right', val: string) => {
    const updated = [...matchPairs];
    updated[idx] = { ...updated[idx], [field]: val };
    setMatchPairs(updated);
  };

  const handleAddMatchPair = () => {
    setMatchPairs([...matchPairs, { id: String(Date.now()), left: '', right: '' }]);
  };

  const handleRemoveMatchPair = (idx: number) => {
    if (matchPairs.length > 2) {
      setMatchPairs(matchPairs.filter((_, i) => i !== idx));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!questionText.trim()) {
      alert(language === 'ta' ? 'வினா உரையை உள்ளிடவும்' : 'Please enter question text');
      return;
    }

    const newQuestion: QuestionItem = {
      id: question?.id || 'q_' + Date.now(),
      type,
      questionText: questionText.trim(),
      marks,
      correctAnswer: correctAnswer.trim(),
      unitOrChapter: unitOrChapter.trim(),
      bloomTaxonomy,
      blankAnswerSpaceLines,
      options: type === 'mcq' ? options : undefined,
      matchPairs: type === 'match' ? matchPairs : undefined,
    };

    onSave(sectionId, newQuestion);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs">
      <div className="bg-white rounded-xl shadow-xl border border-slate-200 w-full max-w-xl max-h-[90vh] flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-150">
        {/* Modal Header */}
        <div className="px-6 py-4 border-b border-slate-200 flex items-center justify-between bg-slate-50">
          <h3 className="font-bold text-base text-slate-900 font-tamil-header">
            {isEditing
              ? language === 'ta'
                ? 'வினாவைத் திருத்து (Edit Question)'
                : 'Edit Question'
              : language === 'ta'
              ? 'புதிய வினா சேர்க்க (Add New Question)'
              : 'Add Question'}
          </h3>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-slate-500 hover:text-slate-900 hover:bg-slate-200 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <form onSubmit={handleSubmit} className="p-6 overflow-y-auto space-y-4 flex-1 text-xs">
          {/* Question Type & Marks */}
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block font-semibold text-slate-700 mb-1">
                {language === 'ta' ? 'வினா வகை (Question Type):' : 'Question Type:'}
              </label>
              <select
                value={type}
                onChange={(e) => setType(e.target.value as QuestionType)}
                className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3 py-2 text-slate-900 font-medium focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none"
              >
                <option value="mcq">சரியான விடை (MCQ)</option>
                <option value="fill_blanks">கோடிட்ட இடம் (Fill blanks)</option>
                <option value="match">பொருத்துக (Match)</option>
                <option value="true_false">சரியா? தவறா? (True/False)</option>
                <option value="missing_letters">விடுபட்ட எழுத்துக்கள்</option>
                <option value="short_answer">குறுகிய விடையளி (Short Answer)</option>
                <option value="detail_answer">விரிவான விடையளி (Detail / Essay)</option>
                <option value="math_problems">கணக்கீடு (Math Sum)</option>
                <option value="picture_question">படம் பார்த்து எழுதுக</option>
              </select>
            </div>

            <div>
              <label className="block font-semibold text-slate-700 mb-1">
                {language === 'ta' ? 'மதிப்பெண் (Marks):' : 'Marks:'}
              </label>
              <div className="flex items-center space-x-1.5">
                {[1, 2, 3, 5].map((m) => (
                  <button
                    key={m}
                    type="button"
                    onClick={() => setMarks(m)}
                    className={`flex-1 py-1.5 font-bold rounded-lg border transition-colors ${
                      marks === m
                        ? 'bg-blue-600 text-white border-blue-600 shadow-xs'
                        : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                    }`}
                  >
                    {m} M
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Question Text */}
          <div>
            <label className="block font-semibold text-slate-700 mb-1">
              {language === 'ta' ? 'வினா உரை (Question Text):' : 'Question Text:'}
            </label>
            <textarea
              rows={3}
              value={questionText}
              onChange={(e) => setQuestionText(e.target.value)}
              placeholder={language === 'ta' ? 'வினாவை உள்ளிடவும்...' : 'Enter question text...'}
              className="w-full bg-slate-50 border border-slate-300 rounded-lg p-3 text-slate-900 font-medium font-tamil-body focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none placeholder:text-slate-400"
              required
            />
          </div>

          {/* MCQ Options input */}
          {type === 'mcq' && (
            <div className="space-y-2 bg-slate-50 p-3.5 rounded-lg border border-slate-200">
              <div className="flex items-center justify-between">
                <span className="font-semibold text-slate-800">
                  {language === 'ta' ? 'விடைக் குறிப்புகள் (Options):' : 'Options:'}
                </span>
                <button
                  type="button"
                  onClick={handleAddOption}
                  className="text-blue-600 hover:text-blue-700 font-semibold flex items-center space-x-1"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>{language === 'ta' ? 'ஆப்ஷன் சேர்க்க' : 'Add Option'}</span>
                </button>
              </div>
              <div className="space-y-1.5">
                {options.map((opt, idx) => (
                  <div key={idx} className="flex items-center space-x-2">
                    <input
                      type="text"
                      value={opt}
                      onChange={(e) => handleOptionChange(idx, e.target.value)}
                      className="flex-1 bg-white border border-slate-300 rounded-lg px-2.5 py-1.5 text-xs focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none"
                    />
                    <button
                      type="button"
                      onClick={() => handleRemoveOption(idx)}
                      className="p-1 text-slate-400 hover:text-rose-600"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Match Pairs Input */}
          {type === 'match' && (
            <div className="space-y-2 bg-slate-50 p-3.5 rounded-lg border border-slate-200">
              <div className="flex items-center justify-between">
                <span className="font-semibold text-slate-800">
                  {language === 'ta' ? 'பொருத்துக இணைகள் (Match Pairs):' : 'Match Pairs:'}
                </span>
                <button
                  type="button"
                  onClick={handleAddMatchPair}
                  className="text-blue-600 hover:text-blue-700 font-semibold flex items-center space-x-1"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>{language === 'ta' ? 'இணை சேர்க்க' : 'Add Pair'}</span>
                </button>
              </div>
              <div className="space-y-1.5">
                {matchPairs.map((pair, idx) => (
                  <div key={pair.id} className="grid grid-cols-12 gap-2 items-center">
                    <input
                      type="text"
                      value={pair.left}
                      onChange={(e) => handleMatchPairChange(idx, 'left', e.target.value)}
                      placeholder="Column A (பகுதி 1)"
                      className="col-span-5 bg-white border border-slate-300 rounded-lg px-2.5 py-1.5 text-xs focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    />
                    <span className="col-span-1 text-center font-bold text-slate-400">↔</span>
                    <input
                      type="text"
                      value={pair.right}
                      onChange={(e) => handleMatchPairChange(idx, 'right', e.target.value)}
                      placeholder="Column B (பகுதி 2)"
                      className="col-span-5 bg-white border border-slate-300 rounded-lg px-2.5 py-1.5 text-xs focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    />
                    <button
                      type="button"
                      onClick={() => handleRemoveMatchPair(idx)}
                      className="col-span-1 text-slate-400 hover:text-rose-600 flex justify-center"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Correct Answer & Answer Key */}
          <div>
            <label className="block font-semibold text-slate-700 mb-1">
              {language === 'ta' ? 'சரியான விடை (Correct Answer / Key):' : 'Correct Answer:'}
            </label>
            <input
              type="text"
              value={correctAnswer}
              onChange={(e) => setCorrectAnswer(e.target.value)}
              placeholder={language === 'ta' ? 'ஆசிரியரின் மதிப்பீட்டுக் குறிப்புக்காக...' : 'Answer key text...'}
              className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3 py-2 text-slate-900 font-medium focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none"
            />
          </div>

          {/* Answer lines count for worksheet */}
          {(type === 'short_answer' || type === 'detail_answer' || type === 'math_problems') && (
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block font-semibold text-slate-700 mb-1">
                  {language === 'ta' ? 'விடை எழுத வரிகள் எண்ணிக்கை:' : 'Answer Lines Count:'}
                </label>
                <input
                  type="number"
                  min={1}
                  max={10}
                  value={blankAnswerSpaceLines}
                  onChange={(e) => setBlankAnswerSpaceLines(Number(e.target.value))}
                  className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none text-slate-900"
                />
              </div>
              <div>
                <label className="block font-semibold text-slate-700 mb-1">
                  {language === 'ta' ? 'கற்பித்தல் களம் (Cognitive Domain):' : 'Cognitive Domain:'}
                </label>
                <select
                  value={bloomTaxonomy}
                  onChange={(e) => setBloomTaxonomy(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none text-slate-900"
                >
                  <option value="Knowledge">அறிவுசார் (Knowledge)</option>
                  <option value="Understanding">புரிதல் (Understanding)</option>
                  <option value="Application">பயன்பாடு (Application)</option>
                  <option value="Skill">செயல்திறன் (Skill)</option>
                </select>
              </div>
            </div>
          )}

          {/* Chapter / Topic */}
          <div>
            <label className="block font-semibold text-slate-700 mb-1">
              {language === 'ta' ? 'பாடப்பகுதி / அலகு (Chapter/Topic):' : 'Chapter/Topic:'}
            </label>
            <input
              type="text"
              value={unitOrChapter}
              onChange={(e) => setUnitOrChapter(e.target.value)}
              placeholder="எ.கா: இயல் 1 - தமிழின் இனிமை"
              className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none text-slate-900"
            />
          </div>

          {/* Footer actions */}
          <div className="pt-3 border-t border-slate-200 flex items-center justify-end space-x-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-slate-600 hover:bg-slate-100 rounded-lg font-semibold transition-colors"
            >
              {language === 'ta' ? 'ரத்து' : 'Cancel'}
            </button>
            <button
              type="submit"
              className="px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-sm flex items-center space-x-1.5 transition-colors"
            >
              <Check className="w-4 h-4" />
              <span>{language === 'ta' ? 'சேமி' : 'Save'}</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
