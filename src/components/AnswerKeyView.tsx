import React from 'react';
import { QuestionPaper } from '../types';
import { CheckCircle2, Printer, Award, FileText } from 'lucide-react';

interface AnswerKeyViewProps {
  paper: QuestionPaper;
  language: 'ta' | 'en';
}

export const AnswerKeyView: React.FC<AnswerKeyViewProps> = ({ paper, language }) => {
  let runningNumber = 0;

  return (
    <div className="space-y-4">
      {/* Action banner */}
      <div className="no-print bg-white border border-slate-200 p-4 sm:p-5 rounded-xl shadow-sm flex items-center justify-between">
        <div className="flex items-center space-x-3.5">
          <div className="w-10 h-10 rounded-lg bg-blue-600 text-white flex items-center justify-center font-bold shadow-sm">
            <CheckCircle2 className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-bold text-sm text-slate-900 font-tamil-header">
              {language === 'ta' ? 'ஆசிரியர் மதிப்பீட்டு விடைக் குறிப்பு (Teacher Answer Key & Scoring Scheme)' : 'Answer Key & Scoring Scheme'}
            </h3>
            <p className="text-xs text-slate-500 mt-0.5">
              {language === 'ta'
                ? 'வினாத்தாளுக்கான சரியான விடைகள் மற்றும் மதிப்பெண் பங்கீட்டு வழிகாட்டி.'
                : 'Complete answer keys and step-by-step marking rubrics for evaluation.'}
            </p>
          </div>
        </div>
        <button
          id="btn-print-answer-key"
          onClick={() => window.print()}
          className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold rounded-lg flex items-center space-x-1.5 shadow-sm transition-colors"
        >
          <Printer className="w-3.5 h-3.5" />
          <span>{language === 'ta' ? 'விடைக் குறிப்பு அச்சிடு' : 'Print Key'}</span>
        </button>
      </div>

      {/* Printable Sheet */}
      <div 
        id="printable-answer-key"
        className="a4-page-sheet bg-white text-black p-6 sm:p-10 rounded-xl shadow-md border border-slate-200 max-w-4xl mx-auto font-tamil-body text-xs sm:text-sm"
      >
        {/* Header */}
        <div className="border-2 border-black rounded p-3 mb-4 text-center">
          <h2 className="font-extrabold text-base uppercase">
            {paper.headerConfig.schoolNameTa || paper.headerConfig.schoolName}
          </h2>
          <h3 className="font-bold text-sm text-slate-900 mt-0.5">
            {paper.headerConfig.examTitle} - விடைக் குறிப்பு & மதிப்பீட்டு வழிகாட்டி
          </h3>
          <div className="mt-2 pt-1 border-t border-dashed border-slate-700 grid grid-cols-2 sm:grid-cols-4 gap-1 text-xs font-bold">
            <div className="text-left">வகுப்பு: {paper.standard}</div>
            <div className="text-center sm:text-left">பாடம்: {paper.subject.toUpperCase()}</div>
            <div className="text-left sm:text-right">பருவம்: {paper.term}</div>
            <div className="text-right">மொத்த மதிப்பெண்: {paper.totalMarks}</div>
          </div>
        </div>

        {/* Answers List by Section */}
        <div className="space-y-6">
          {paper.sections.map((sec) => (
            <div key={sec.id} className="avoid-break-inside space-y-2">
              <div className="bg-slate-100 p-2 px-3 rounded font-extrabold text-sm border-l-4 border-blue-600 flex justify-between items-center text-slate-900">
                <span>{sec.sectionNumber}: {sec.title}</span>
                <span className="text-xs font-bold text-slate-700 bg-white px-2 py-0.5 rounded border border-slate-300">
                  {sec.totalMarks} மதிப்பெண்கள்
                </span>
              </div>

              <div className="divide-y divide-slate-200 border border-slate-200 rounded-lg overflow-hidden bg-slate-50/40">
                {sec.questions.map((q) => {
                  runningNumber++;
                  return (
                    <div key={q.id} className="p-3 space-y-1.5">
                      <div className="flex items-start justify-between">
                        <div className="flex items-start space-x-1.5">
                          <span className="font-bold text-slate-900 shrink-0">{runningNumber}.</span>
                          <span className="font-medium text-slate-900">{q.questionText}</span>
                        </div>
                        <span className="text-xs font-bold text-blue-800 bg-blue-50 border border-blue-200 px-2 py-0.5 rounded shrink-0 ml-2">
                          {q.marks} {q.marks === 1 ? 'மதிப்பெண்' : 'மதிப்பெண்கள்'}
                        </span>
                      </div>

                      {/* Answer Box */}
                      <div className="ml-4 mt-1 bg-white p-2.5 rounded border border-blue-200 text-xs text-slate-950">
                        <div className="font-bold text-blue-900 flex items-center space-x-1">
                          <CheckCircle2 className="w-3.5 h-3.5 text-blue-600" />
                          <span>சரியான விடை:</span>
                        </div>
                        <p className="mt-1 text-slate-900 whitespace-pre-line font-semibold pl-4">
                          {q.correctAnswer || 'பாடப் புத்தகத்தின்படி சரியான விடை எழுதப்பட வேண்டும்.'}
                        </p>
                        {q.bloomTaxonomy && (
                          <div className="mt-1 text-[10px] text-slate-500 pl-4">
                            மதிப்பீட்டுக் களம்: <span className="font-semibold text-slate-700">{q.bloomTaxonomy}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Evaluator Footer */}
        <div className="avoid-break-inside mt-8 pt-6 border-t-2 border-black flex justify-between text-xs font-bold text-center">
          <div>
            <p>வினாத்தாள் அமைப்பாளர் கையொப்பம்</p>
            <div className="mt-8 border-t border-dotted border-black w-40" />
          </div>
          <div>
            <p>தலைமையாசிரியர் / தேர்வு அலுவலர் கையொப்பம்</p>
            <div className="mt-8 border-t border-dotted border-black w-48" />
          </div>
        </div>
      </div>
    </div>
  );
};
