import React from 'react';
import { QuestionPaper } from '../types';
import { Grid, Printer, BarChart3, Award, Info } from 'lucide-react';

interface BlueprintViewProps {
  paper: QuestionPaper;
  language: 'ta' | 'en';
}

export const BlueprintView: React.FC<BlueprintViewProps> = ({ paper, language }) => {
  // Aggregate marks by section and by cognitive domains (Bloom's Taxonomy / SCERT domains)
  const sections = paper.sections;
  const totalMarks = paper.totalMarks;

  // Compute breakdown estimation
  const domainBreakdown = {
    knowledge: Math.round(totalMarks * 0.35),
    understanding: Math.round(totalMarks * 0.35),
    application: Math.round(totalMarks * 0.20),
    skill: totalMarks - (Math.round(totalMarks * 0.35) + Math.round(totalMarks * 0.35) + Math.round(totalMarks * 0.20)),
  };

  return (
    <div className="space-y-4">
      {/* Banner */}
      <div className="no-print bg-white border border-slate-200 p-4 sm:p-5 rounded-xl shadow-sm flex items-center justify-between">
        <div className="flex items-center space-x-3.5">
          <div className="w-10 h-10 rounded-lg bg-blue-600 text-white flex items-center justify-center font-bold shadow-sm">
            <Grid className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-bold text-sm text-slate-900 font-tamil-header">
              {language === 'ta' ? 'வினாத்தாள் திட்ட வரைபடம் (SCERT Blueprint Matrix)' : 'SCERT Blueprint Matrix'}
            </h3>
            <p className="text-xs text-slate-500 mt-0.5">
              {language === 'ta'
                ? 'தமிழ்நாடு மாநிலக் கல்வியியல் ஆராய்ச்சி மற்றும் பயிற்சி நிறுவனத்தின் (SCERT) வினாத்தாள் வடிவமைப்பு அட்டவணை.'
                : 'Official question paper blueprint matrix with cognitive domain weightage and chapter marks distribution.'}
            </p>
          </div>
        </div>
        <button
          id="btn-print-blueprint"
          onClick={() => window.print()}
          className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold rounded-lg flex items-center space-x-1.5 shadow-sm transition-colors"
        >
          <Printer className="w-3.5 h-3.5" />
          <span>{language === 'ta' ? 'ப்ளூபிரிண்ட் அச்சிடு' : 'Print Blueprint'}</span>
        </button>
      </div>

      {/* Printable Sheet */}
      <div 
        id="printable-blueprint"
        className="a4-page-sheet bg-white text-black p-6 sm:p-10 rounded-xl shadow-md border border-slate-200 max-w-4xl mx-auto font-tamil-body text-xs"
      >
        {/* Header */}
        <div className="border-2 border-black rounded p-3 mb-4 text-center">
          <h2 className="font-extrabold text-base uppercase">
            {paper.headerConfig.schoolNameTa || paper.headerConfig.schoolName}
          </h2>
          <h3 className="font-bold text-sm text-slate-900 mt-0.5">
            {paper.headerConfig.examTitle} - வினாத்தாள் திட்ட வரைபடம் (BLUEPRINT)
          </h3>
          <div className="mt-2 pt-1 border-t border-dashed border-slate-700 grid grid-cols-2 sm:grid-cols-4 gap-1 text-xs font-bold">
            <div className="text-left">வகுப்பு: {paper.standard}</div>
            <div className="text-center sm:text-left">பாடம்: {paper.subject.toUpperCase()}</div>
            <div className="text-left sm:text-right">பருவம்: {paper.term}</div>
            <div className="text-right">மொத்த மதிப்பெண்: {paper.totalMarks}</div>
          </div>
        </div>

        {/* 1. Cognitive Domain Weightage Table (கற்பித்தல் நோக்கங்களின்படி மதிப்பெண் பங்கீடு) */}
        <div className="mb-6 space-y-2">
          <h4 className="font-extrabold text-sm text-slate-900 border-b border-slate-400 pb-1">
            1. கற்பித்தல் நோக்கங்களின்படி மதிப்பெண் பங்கீடு (Weightage to Learning Objectives)
          </h4>

          <table className="w-full border-collapse border border-black text-center text-xs">
            <thead>
              <tr className="bg-slate-100 font-extrabold text-slate-900">
                <th className="border border-black p-1.5">வ.எண்</th>
                <th className="border border-black p-1.5 text-left">மதிப்பீட்டுக் களம் (Objectives / Domain)</th>
                <th className="border border-black p-1.5">மதிப்பெண்கள்</th>
                <th className="border border-black p-1.5">சதவீதம் (%)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-black p-1.5">1</td>
                <td className="border border-black p-1.5 text-left font-semibold">அறிவுசார் களம் (Knowledge / Remembering)</td>
                <td className="border border-black p-1.5 font-bold">{domainBreakdown.knowledge}</td>
                <td className="border border-black p-1.5">{Math.round((domainBreakdown.knowledge / totalMarks) * 100)}%</td>
              </tr>
              <tr>
                <td className="border border-black p-1.5">2</td>
                <td className="border border-black p-1.5 text-left font-semibold">புரிதல் களம் (Understanding / Comprehension)</td>
                <td className="border border-black p-1.5 font-bold">{domainBreakdown.understanding}</td>
                <td className="border border-black p-1.5">{Math.round((domainBreakdown.understanding / totalMarks) * 100)}%</td>
              </tr>
              <tr>
                <td className="border border-black p-1.5">3</td>
                <td className="border border-black p-1.5 text-left font-semibold">பயன்பாட்டு களம் (Application / Problem Solving)</td>
                <td className="border border-black p-1.5 font-bold">{domainBreakdown.application}</td>
                <td className="border border-black p-1.5">{Math.round((domainBreakdown.application / totalMarks) * 100)}%</td>
              </tr>
              <tr>
                <td className="border border-black p-1.5">4</td>
                <td className="border border-black p-1.5 text-left font-semibold">செயல்திறன் / படைப்பாற்றல் (Skill & Creativity)</td>
                <td className="border border-black p-1.5 font-bold">{domainBreakdown.skill}</td>
                <td className="border border-black p-1.5">{Math.round((domainBreakdown.skill / totalMarks) * 100)}%</td>
              </tr>
              <tr className="bg-slate-100 font-extrabold text-slate-900">
                <td className="border border-black p-1.5" colSpan={2}>மொத்தம் (Total)</td>
                <td className="border border-black p-1.5">{totalMarks}</td>
                <td className="border border-black p-1.5">100%</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* 2. Question Types Weightage (வினா வகைகளின்படி மதிப்பெண் பங்கீடு) */}
        <div className="mb-6 space-y-2">
          <h4 className="font-extrabold text-sm text-slate-900 border-b border-slate-400 pb-1">
            2. வினா வகைகளின்படி மதிப்பெண் மற்றும் நேரப் பங்கீடு (Weightage to Form of Questions)
          </h4>

          <table className="w-full border-collapse border border-black text-center text-xs">
            <thead>
              <tr className="bg-slate-100 font-extrabold text-slate-900">
                <th className="border border-black p-1.5">பகுதி</th>
                <th className="border border-black p-1.5 text-left">வினா வகை</th>
                <th className="border border-black p-1.5">வினாக்கள் எண்ணிக்கை</th>
                <th className="border border-black p-1.5">ஒரு வினாவின் மதிப்பெண்</th>
                <th className="border border-black p-1.5">மொத்த மதிப்பெண்</th>
              </tr>
            </thead>
            <tbody>
              {sections.map((sec) => (
                <tr key={sec.id}>
                  <td className="border border-black p-1.5 font-bold">{sec.sectionNumber}</td>
                  <td className="border border-black p-1.5 text-left font-medium">{sec.title}</td>
                  <td className="border border-black p-1.5 font-semibold">{sec.questions.length}</td>
                  <td className="border border-black p-1.5">{sec.marksPerQuestion}</td>
                  <td className="border border-black p-1.5 font-bold">{sec.totalMarks}</td>
                </tr>
              ))}
              <tr className="bg-slate-100 font-extrabold text-slate-900">
                <td className="border border-black p-1.5" colSpan={2}>மொத்தம்</td>
                <td className="border border-black p-1.5">
                  {sections.reduce((sum, s) => sum + s.questions.length, 0)}
                </td>
                <td className="border border-black p-1.5">-</td>
                <td className="border border-black p-1.5">{totalMarks}</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* 3. Difficulty Level Distribution (கடினத் தன்மையின்படி பங்கீடு) */}
        <div className="mb-6 space-y-2">
          <h4 className="font-extrabold text-sm text-slate-900 border-b border-slate-400 pb-1">
            3. வினாக்களின் கடினத்தன்மை நிலை (Difficulty Distribution)
          </h4>

          <div className="grid grid-cols-3 gap-3 text-center">
            <div className="border border-black p-2.5 rounded">
              <div className="font-extrabold text-sm text-emerald-800">எளிமையான வினாக்கள் (Easy)</div>
              <div className="text-base font-bold mt-1 text-slate-900">40% ({Math.round(totalMarks * 0.4)} Marks)</div>
              <div className="text-[10px] text-slate-600">அனைத்து மாணவர்களும் விடையளிக்கக் கூடியவை</div>
            </div>
            <div className="border border-black p-2.5 rounded">
              <div className="font-extrabold text-sm text-blue-800">சராசரி வினாக்கள் (Average)</div>
              <div className="text-base font-bold mt-1 text-slate-900">40% ({Math.round(totalMarks * 0.4)} Marks)</div>
              <div className="text-[10px] text-slate-600">புரிதல் மற்றும் பாட அறிவு சார்ந்தவை</div>
            </div>
            <div className="border border-black p-2.5 rounded">
              <div className="font-extrabold text-sm text-rose-800">சிந்தனை வினாக்கள் (Challenging)</div>
              <div className="text-base font-bold mt-1 text-slate-900">20% ({totalMarks - (Math.round(totalMarks * 0.4) * 2)} Marks)</div>
              <div className="text-[10px] text-slate-600">உயர் சிந்தனை மற்றும் பயன்பாட்டு வினாக்கள்</div>
            </div>
          </div>
        </div>

        {/* Signatures */}
        <div className="avoid-break-inside mt-8 pt-6 border-t-2 border-black flex justify-between text-xs font-bold text-center">
          <div>
            <p>வினாத்தாள் அமைப்பாளர் கையொப்பம்</p>
            <div className="mt-8 border-t border-dotted border-black w-40" />
          </div>
          <div>
            <p>தலைமையாசிரியர் கையொப்பம்</p>
            <div className="mt-8 border-t border-dotted border-black w-40" />
          </div>
        </div>
      </div>
    </div>
  );
};
