import React, { useState, useEffect } from 'react';
import { 
  Sparkles, 
  BookOpen, 
  Layers, 
  CheckCircle2, 
  Clock, 
  Award, 
  Sliders, 
  ChevronRight, 
  BookCheck,
  FileCheck,
  AlertCircle
} from 'lucide-react';
import { 
  StandardClass, 
  AcademicTerm, 
  SubjectId, 
  Medium, 
  ExamType, 
  DifficultyLevel, 
  QuestionType, 
  GeneratePaperRequest,
  QuestionPaper
} from '../types';
import { SAMACHEER_SYLLABUS } from '../data/samacheerSyllabus';
import { SAMPLE_QUESTION_PAPERS } from '../data/sampleQuestionPapers';

interface PaperConfigFormProps {
  onGenerateAI: (config: GeneratePaperRequest) => Promise<void>;
  onLoadPreset: (paper: QuestionPaper) => void;
  isGenerating: boolean;
  language: 'ta' | 'en';
}

export const PaperConfigForm: React.FC<PaperConfigFormProps> = ({
  onGenerateAI,
  onLoadPreset,
  isGenerating,
  language,
}) => {
  const [standard, setStandard] = useState<StandardClass>('5');
  const [term, setTerm] = useState<AcademicTerm>('2');
  const [subject, setSubject] = useState<SubjectId>('tamil');
  const [medium, setMedium] = useState<Medium>('tamil');
  const [examType, setExamType] = useState<ExamType>('SA');
  const [totalMarks, setTotalMarks] = useState<number>(60);
  const [durationMinutes, setDurationMinutes] = useState<number>(120);
  const [difficulty, setDifficulty] = useState<DifficultyLevel>('balanced');
  const [selectedUnits, setSelectedUnits] = useState<string[]>([]);
  const [customInstructions, setCustomInstructions] = useState<string>('');
  const [activeTab, setActiveTab] = useState<'create' | 'presets'>('create');

  // Selected question types
  const [selectedQuestionTypes, setSelectedQuestionTypes] = useState<QuestionType[]>([
    'mcq',
    'fill_blanks',
    'match',
    'true_false',
    'missing_letters',
    'short_answer',
    'detail_answer',
    'picture_question',
  ]);

  // Update available subjects when standard changes (Class 1-2 have EVS; Class 3-5 have Science & Social Science)
  const currentSyllabusList = SAMACHEER_SYLLABUS[standard] || [];
  const currentSubjectObj = currentSyllabusList.find((s) => s.subjectId === subject);

  // If selected subject is not in current standard (e.g. Science in Class 1), fallback to available
  useEffect(() => {
    const isSubjectValid = currentSyllabusList.some((s) => s.subjectId === subject);
    if (!isSubjectValid && currentSyllabusList.length > 0) {
      setSubject(currentSyllabusList[0].subjectId);
    }
  }, [standard, currentSyllabusList, subject]);

  // Update selected units when standard, term, or subject changes
  const availableUnits = currentSubjectObj?.terms[term]?.units || [];
  useEffect(() => {
    setSelectedUnits(availableUnits.map((u) => u.id));
  }, [standard, term, subject, availableUnits.length]);

  // Update default marks and duration according to ExamType
  const handleExamTypeChange = (type: ExamType) => {
    setExamType(type);
    if (type === 'SA') {
      setTotalMarks(60);
      setDurationMinutes(120);
    } else if (type === 'FA_A' || type === 'FA_B' || type === 'SLIP_TEST') {
      setTotalMarks(25);
      setDurationMinutes(45);
    } else if (type === 'MID_TERM') {
      setTotalMarks(50);
      setDurationMinutes(90);
    } else if (type === 'MONTHLY_TEST') {
      setTotalMarks(40);
      setDurationMinutes(60);
    }
  };

  const toggleUnitSelection = (unitId: string) => {
    if (selectedUnits.includes(unitId)) {
      setSelectedUnits(selectedUnits.filter((id) => id !== unitId));
    } else {
      setSelectedUnits([...selectedUnits, unitId]);
    }
  };

  const selectAllUnits = () => {
    setSelectedUnits(availableUnits.map((u) => u.id));
  };

  const clearAllUnits = () => {
    setSelectedUnits([]);
  };

  const toggleQuestionType = (qType: QuestionType) => {
    if (selectedQuestionTypes.includes(qType)) {
      if (selectedQuestionTypes.length > 1) {
        setSelectedQuestionTypes(selectedQuestionTypes.filter((t) => t !== qType));
      }
    } else {
      setSelectedQuestionTypes([...selectedQuestionTypes, qType]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const config: GeneratePaperRequest = {
      standard,
      term,
      subject,
      medium,
      examType,
      totalMarks,
      durationMinutes,
      selectedUnits: selectedUnits.length > 0 ? selectedUnits : availableUnits.map((u) => u.id),
      difficulty,
      questionTypes: selectedQuestionTypes,
      customInstructions,
    };
    await onGenerateAI(config);
  };

  // Filter matching sample papers
  const matchingPresets = SAMPLE_QUESTION_PAPERS;

  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
      {/* Header Tabs */}
      <div className="flex border-b border-slate-200 bg-slate-50/80 p-1.5">
        <button
          id="btn-tab-create"
          type="button"
          onClick={() => setActiveTab('create')}
          className={`flex-1 py-2.5 px-4 text-xs sm:text-sm font-semibold rounded-lg flex items-center justify-center space-x-2 transition-all ${
            activeTab === 'create'
              ? 'bg-white text-slate-900 shadow-xs border border-slate-200'
              : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          <Sparkles className="w-4 h-4 text-blue-600" />
          <span>{language === 'ta' ? 'AI புதிய வினாத்தாள் உருவாக்கு' : 'AI Custom Question Paper'}</span>
        </button>
        <button
          id="btn-tab-presets"
          type="button"
          onClick={() => setActiveTab('presets')}
          className={`flex-1 py-2.5 px-4 text-xs sm:text-sm font-semibold rounded-lg flex items-center justify-center space-x-2 transition-all ${
            activeTab === 'presets'
              ? 'bg-white text-slate-900 shadow-xs border border-slate-200'
              : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          <FileCheck className="w-4 h-4 text-blue-600" />
          <span>{language === 'ta' ? 'சமச்சீர் மாதிரி வினாத்தாள்கள் (Presets)' : 'Model Papers (Presets)'}</span>
        </button>
      </div>

      {activeTab === 'presets' ? (
        /* Presets list */
        <div className="p-6 space-y-4">
          <div className="bg-blue-50/70 border border-blue-200 p-3.5 rounded-lg text-xs text-blue-900 flex items-start space-x-2.5">
            <BookCheck className="w-4 h-4 text-blue-700 mt-0.5 shrink-0" />
            <div>
              <p className="font-semibold">
                {language === 'ta' ? 'தமிழ்நாடு சமச்சீர் கல்வி மாதிரி வினாத்தாள்கள்' : 'TN Samacheer Kalvi Standard Question Papers'}
              </p>
              <p className="mt-0.5 text-blue-800">
                {language === 'ta'
                  ? 'பள்ளிக் கல்வித்துறை மற்றும் முந்தைய பருவத் தேர்வு வினாத்தாள் அமைப்பில் உடனே பயன்படுத்தி அச்சிடலாம் அல்லது எடிட் செய்யலாம்.'
                  : 'Instantly load authentic standard term test papers with answer keys and complete blueprints.'}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {matchingPresets.map((paper) => (
              <div
                key={paper.id}
                className="border border-slate-200 hover:border-blue-400 bg-white hover:bg-blue-50/10 p-4 rounded-xl shadow-xs transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="bg-slate-100 text-slate-700 text-xs px-2.5 py-1 rounded-md font-semibold">
                      வகுப்பு {paper.standard} • பருவம் {paper.term}
                    </span>
                    <span className="bg-blue-50 text-blue-700 border border-blue-200 text-xs px-2 py-0.5 rounded font-bold">
                      {paper.totalMarks} மதிப்பெண்கள்
                    </span>
                  </div>
                  <h4 className="font-tamil-header font-bold text-slate-900 text-sm mb-1.5 line-clamp-2">
                    {paper.title}
                  </h4>
                  <p className="text-xs text-slate-500">
                    {paper.sections.length} பகுதிகள் • {paper.sections.reduce((acc, s) => acc + s.questions.length, 0)} வினாக்கள் • {paper.durationMinutes} நிமிடங்கள்
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[11px] text-emerald-700 font-medium flex items-center">
                    <CheckCircle2 className="w-3.5 h-3.5 mr-1" />
                    {language === 'ta' ? 'விடைக் குறிப்பு உள்ளது' : 'Answer Key included'}
                  </span>
                  <button
                    id={`btn-load-preset-${paper.id}`}
                    onClick={() => onLoadPreset(paper)}
                    className="px-3.5 py-1.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold rounded-lg flex items-center space-x-1 transition-colors shadow-xs"
                  >
                    <span>{language === 'ta' ? 'தாளாகப் பயன்படுத்து' : 'Load Paper'}</span>
                    <ChevronRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        /* AI Generator Form */
        <form onSubmit={handleSubmit} className="p-5 sm:p-7 space-y-6">
          {/* Step 1: Class, Term, Subject selection */}
          <div className="space-y-4">
            <h3 className="text-[11px] font-bold uppercase tracking-wider text-slate-500 font-tamil-header flex items-center space-x-1.5">
              <span>1. வகுப்பு, பருவம் & பாடம் தேர்வு (Select Parameters)</span>
            </h3>

            {/* Standard / Class Selection */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                {language === 'ta' ? 'வகுப்பு (Class):' : 'Select Class:'}
              </label>
              <div className="grid grid-cols-5 gap-2">
                {(['1', '2', '3', '4', '5'] as StandardClass[]).map((cls) => (
                  <button
                    key={cls}
                    id={`btn-class-${cls}`}
                    type="button"
                    onClick={() => setStandard(cls)}
                    className={`py-2 px-1 text-center rounded-lg text-xs sm:text-sm font-bold border transition-all ${
                      standard === cls
                        ? 'bg-blue-600 text-white border-blue-600 shadow-xs'
                        : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                    }`}
                  >
                    <div className="text-[10px] sm:text-xs opacity-75">வகுப்பு</div>
                    <div className="text-base sm:text-lg">{cls}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Term Selection */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                {language === 'ta' ? 'பருவம் (Term):' : 'Select Term:'}
              </label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: '1', nameTa: 'முதல் பருவம்', nameEn: 'Term 1' },
                  { id: '2', nameTa: 'இரண்டாம் பருவம்', nameEn: 'Term 2' },
                  { id: '3', nameTa: 'மூன்றாம் பருவம்', nameEn: 'Term 3' },
                ].map((t) => (
                  <button
                    key={t.id}
                    id={`btn-term-${t.id}`}
                    type="button"
                    onClick={() => setTerm(t.id as AcademicTerm)}
                    className={`py-2 px-2 text-center rounded-lg text-xs font-bold border transition-all ${
                      term === t.id
                        ? 'bg-blue-600 text-white border-blue-600 shadow-xs'
                        : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                    }`}
                  >
                    <div>{language === 'ta' ? t.nameTa : t.nameEn}</div>
                    <div className="text-[10px] font-normal opacity-80">Term {t.id}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Subject Selection */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                {language === 'ta' ? 'பாடம் (Subject):' : 'Select Subject:'}
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {currentSyllabusList.map((s) => (
                  <button
                    key={s.subjectId}
                    id={`btn-subject-${s.subjectId}`}
                    type="button"
                    onClick={() => setSubject(s.subjectId)}
                    className={`p-2.5 text-left rounded-lg text-xs font-bold border transition-all ${
                      subject === s.subjectId
                        ? 'bg-blue-600 text-white border-blue-600 shadow-xs'
                        : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                    }`}
                  >
                    <div className="font-tamil-header">{s.subjectNameTa}</div>
                    <div className="text-[10px] font-normal opacity-80">{s.subjectNameEn}</div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          <hr className="border-slate-200" />

          {/* Step 2: Exam Format, Marks, Time & Medium */}
          <div className="space-y-4">
            <h3 className="text-[11px] font-bold uppercase tracking-wider text-slate-500 font-tamil-header flex items-center space-x-1.5">
              <span>2. தேர்வு வகை, மதிப்பெண் & பயிற்றுமொழி (Exam Type & Marks)</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Exam Type */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  {language === 'ta' ? 'தேர்வு வகை (Exam Type):' : 'Exam Type:'}
                </label>
                <select
                  id="select-exam-type"
                  value={examType}
                  onChange={(e) => handleExamTypeChange(e.target.value as ExamType)}
                  className="w-full bg-slate-50 border border-slate-200 text-slate-900 text-xs sm:text-sm rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none"
                >
                  <option value="SA">SA - தொகுத்தறி மதிப்பீடு (Summative Assessment 60 Marks)</option>
                  <option value="FA_A">FA (a) - வளரறி மதிப்பீடு அ (Formative Assessment 25 Marks)</option>
                  <option value="FA_B">FA (b) - வளரறி மதிப்பீடு ஆ (Slip Test 25 Marks)</option>
                  <option value="MID_TERM">இடைப்பருவத் தேர்வு (Mid-Term Exam 50 Marks)</option>
                  <option value="MONTHLY_TEST">மாதாந்திர தேர்வு (Monthly Test 40 Marks)</option>
                  <option value="SLIP_TEST">சீட்டுத் தேர்வு / அலகுத் தேர்வு (Unit Slip Test 20 Marks)</option>
                </select>
              </div>

              {/* Medium */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  {language === 'ta' ? 'பயிற்று மொழி (Medium):' : 'Medium:'}
                </label>
                <div className="grid grid-cols-3 gap-1.5">
                  {[
                    { id: 'tamil', label: 'தமிழ் வழி' },
                    { id: 'english', label: 'English' },
                    { id: 'bilingual', label: 'இருமொழி' },
                  ].map((m) => (
                    <button
                      key={m.id}
                      type="button"
                      onClick={() => setMedium(m.id as Medium)}
                      className={`py-2 px-1 text-center rounded-lg text-xs font-semibold border transition-all ${
                        medium === m.id
                          ? 'bg-blue-600 text-white border-blue-600 font-bold shadow-xs'
                          : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                      }`}
                    >
                      {m.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Total Marks */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5 flex items-center justify-between">
                  <span>{language === 'ta' ? 'மொத்த மதிப்பெண் (Total Marks):' : 'Total Marks:'}</span>
                  <span className="font-bold text-blue-700">{totalMarks} Marks</span>
                </label>
                <div className="flex items-center space-x-1.5">
                  {[20, 25, 40, 50, 60, 100].map((m) => (
                    <button
                      key={m}
                      type="button"
                      onClick={() => setTotalMarks(m)}
                      className={`flex-1 py-1.5 text-xs font-bold rounded-lg border transition-all ${
                        totalMarks === m
                          ? 'bg-slate-900 text-white border-slate-900 shadow-xs'
                          : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                      }`}
                    >
                      {m}
                    </button>
                  ))}
                </div>
              </div>

              {/* Duration */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5 flex items-center justify-between">
                  <span>{language === 'ta' ? 'தேர்வு நேரம் (Duration):' : 'Exam Time:'}</span>
                  <span className="font-bold text-slate-700">{durationMinutes} நிமிடங்கள் ({durationMinutes / 60} மணி)</span>
                </label>
                <div className="flex items-center space-x-1.5">
                  {[30, 45, 60, 90, 120, 150].map((d) => (
                    <button
                      key={d}
                      type="button"
                      onClick={() => setDurationMinutes(d)}
                      className={`flex-1 py-1.5 text-xs font-bold rounded-lg border transition-all ${
                        durationMinutes === d
                          ? 'bg-slate-900 text-white border-slate-900 shadow-xs'
                          : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                      }`}
                    >
                      {d} நிமி
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <hr className="border-slate-200" />

          {/* Step 3: Textbook Syllabus Units / Chapters Selection */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="text-[11px] font-bold uppercase tracking-wider text-slate-500 font-tamil-header flex items-center space-x-1.5">
                <span>3. சமச்சீர் பாடநூல் இயல்கள் / அலகுகள் (Chapter Selection)</span>
              </h3>
              <div className="flex items-center space-x-2 text-xs">
                <button
                  type="button"
                  onClick={selectAllUnits}
                  className="text-blue-600 hover:underline font-semibold"
                >
                  {language === 'ta' ? 'அனைத்தும்' : 'Select All'}
                </button>
                <span className="text-slate-300">|</span>
                <button
                  type="button"
                  onClick={clearAllUnits}
                  className="text-slate-500 hover:underline"
                >
                  {language === 'ta' ? 'நீக்கு' : 'Clear'}
                </button>
              </div>
            </div>

            {availableUnits.length === 0 ? (
              <div className="text-xs text-slate-500 bg-slate-50 p-3 rounded-lg border border-slate-200">
                {language === 'ta' ? 'இந்த பருவத்திற்குரிய பாடங்கள் கிடைக்கவில்லை.' : 'No units listed.'}
              </div>
            ) : (
              <div className="space-y-2 max-h-56 overflow-y-auto pr-1">
                {availableUnits.map((unit) => {
                  const isChecked = selectedUnits.includes(unit.id);
                  return (
                    <label
                      key={unit.id}
                      className={`flex items-start space-x-2.5 p-2.5 rounded-lg border text-xs cursor-pointer transition-all ${
                        isChecked
                          ? 'bg-blue-50/70 border-blue-200 text-slate-900'
                          : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100/80'
                      }`}
                    >
                      <input
                        type="checkbox"
                        checked={isChecked}
                        onChange={() => toggleUnitSelection(unit.id)}
                        className="mt-0.5 rounded text-blue-600 focus:ring-blue-500 w-4 h-4 border-slate-300 accent-blue-600"
                      />
                      <div className="flex-1">
                        <div className="font-semibold text-slate-900 font-tamil-header">
                          அலகு {unit.number}: {unit.titleTa}
                        </div>
                        <div className="text-[11px] text-slate-500 mt-0.5">
                          {unit.titleEn} • <span className="text-slate-400">{unit.subTopics.join(', ')}</span>
                        </div>
                      </div>
                    </label>
                  );
                })}
              </div>
            )}
          </div>

          <hr className="border-slate-200" />

          {/* Step 4: Question Types & Sections */}
          <div className="space-y-3">
            <h3 className="text-[11px] font-bold uppercase tracking-wider text-slate-500 font-tamil-header flex items-center space-x-1.5">
              <span>4. வினா வகைகள் & பகுதிகள் (Question Types)</span>
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {[
                { id: 'mcq', label: 'சரியான விடை (MCQ)' },
                { id: 'fill_blanks', label: 'கோடிட்ட இடம் (Fill blanks)' },
                { id: 'match', label: 'பொருத்துக (Match)' },
                { id: 'true_false', label: 'சரியா? தவறா? (True/False)' },
                { id: 'missing_letters', label: 'விடுபட்ட எழுத்து / சொல்' },
                { id: 'short_answer', label: 'குறுகிய விடையளி (2M)' },
                { id: 'detail_answer', label: 'விரிவான விடையளி (5M)' },
                { id: 'math_problems', label: 'கணக்கீடுகள் (Sums)' },
                { id: 'picture_question', label: 'படம் பார்த்து எழுது' },
              ].map((qt) => {
                const isSelected = selectedQuestionTypes.includes(qt.id as QuestionType);
                return (
                  <button
                    key={qt.id}
                    type="button"
                    onClick={() => toggleQuestionType(qt.id as QuestionType)}
                    className={`p-2 text-left rounded-lg text-xs font-medium border flex items-center space-x-1.5 transition-all ${
                      isSelected
                        ? 'bg-blue-50 border-blue-200 text-blue-900 font-semibold'
                        : 'bg-slate-50 border-slate-200 text-slate-500 hover:bg-slate-100'
                    }`}
                  >
                    <CheckCircle2 className={`w-3.5 h-3.5 ${isSelected ? 'text-blue-600' : 'text-slate-300'}`} />
                    <span className="font-tamil-body">{qt.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Additional Teacher Instructions */}
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              {language === 'ta'
                ? 'ஆசிரியரின் கூடுதல் குறிப்புகள் (Optional Teacher Notes):'
                : 'Custom Instructions (Optional):'}
            </label>
            <input
              type="text"
              value={customInstructions}
              onChange={(e) => setCustomInstructions(e.target.value)}
              placeholder={
                language === 'ta'
                  ? 'எ.கா: திருக்குறள் மனப்பாடப் பகுதி கட்டாயம் சேர்க்கவும், எளிய சொற்களைப் பயன்படுத்தவும்...'
                  : 'e.g., Include memory poem, include word problems with carrying...'
              }
              className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-xs focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none placeholder:text-slate-400"
            />
          </div>

          {/* Submit Button */}
          <div className="pt-2">
            <button
              id="btn-generate-ai-paper"
              type="submit"
              disabled={isGenerating || selectedUnits.length === 0}
              className="w-full py-3 px-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm rounded-lg shadow-sm flex items-center justify-center space-x-2 transition-all disabled:opacity-50"
            >
              <Sparkles className="w-4 h-4 text-white" />
              <span>
                {isGenerating
                  ? language === 'ta'
                    ? 'AI சமச்சீர் வினாத்தாள் தயாராகிறது... தயவுசெய்து காத்திருக்கவும்'
                    : 'Generating Samacheer Question Paper with AI...'
                  : language === 'ta'
                  ? `AI வினாத்தாள் உருவாக்குக (${standard}-ஆம் வகுப்பு • பருவம் ${term} • ${totalMarks} மதிப்பெண்கள்)`
                  : `Generate Question Paper (${totalMarks} Marks)`}
              </span>
            </button>
            <p className="text-[11px] text-center text-slate-500 mt-2 font-tamil-body">
              {language === 'ta'
                ? 'தமிழ்நாடு சமச்சீர் பாடப்புத்தக வழிகாட்டுதலின்படி சரியான எழுத்துப்பிழையின்றி வினாத்தாள், ப்ளூபிரிண்ட் & விடைக் குறிப்பு உருவாக்கப்படும்.'
                : 'Generates official SCERT aligned question paper, blueprint matrix and teacher answer key.'}
            </p>
          </div>
        </form>
      )}
    </div>
  );
};
