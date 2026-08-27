export type StandardClass = '1' | '2' | '3' | '4' | '5';
export type AcademicTerm = '1' | '2' | '3';
export type SubjectId = 'tamil' | 'english' | 'maths' | 'evs' | 'science' | 'social';
export type Medium = 'tamil' | 'english' | 'bilingual';
export type ExamType = 'SA' | 'FA_A' | 'FA_B' | 'MID_TERM' | 'SLIP_TEST' | 'MONTHLY_TEST';
export type DifficultyLevel = 'easy' | 'medium' | 'hard' | 'balanced';

export type QuestionType =
  | 'mcq'
  | 'fill_blanks'
  | 'match'
  | 'true_false'
  | 'missing_letters'
  | 'short_answer'
  | 'detail_answer'
  | 'math_problems'
  | 'picture_question'
  | 'oral_reading';

export interface MatchPair {
  id: string;
  left: string;
  right: string;
}

export interface QuestionItem {
  id: string;
  type: QuestionType;
  questionText: string;
  questionTextTa?: string; // Tamil text if bilingual
  options?: string[]; // For MCQ
  correctAnswer?: string;
  matchPairs?: MatchPair[]; // For Match the following
  marks: number;
  unitOrChapter?: string;
  imageUrl?: string;
  blankAnswerSpaceLines?: number; // Number of blank lines for answer in paper
  bloomTaxonomy?: 'Knowledge' | 'Understanding' | 'Application' | 'Skill';
}

export interface PaperSection {
  id: string;
  sectionNumber: string; // e.g., "I", "II", "பகுதி - அ"
  title: string; // e.g., "சரியான விடையைத் தேர்ந்தெடுத்து எழுதுக"
  titleEn?: string; // e.g., "Choose the correct answer"
  instructions?: string;
  questionType: QuestionType;
  marksPerQuestion: number;
  totalMarks: number;
  choiceNotice?: string; // e.g., "எவையேனும் 5 வினாக்களுக்கு மட்டும் விடையளி"
  questions: QuestionItem[];
}

export interface SchoolHeaderConfig {
  schoolName: string;
  schoolNameTa: string;
  subTitle: string; // e.g., "தொடக்கப்பள்ளி / நடுநிலைப்பள்ளி"
  district: string;
  emisCode: string;
  examTitle: string; // e.g., "இரண்டாம் பருவத் தொகுத்தறி மதிப்பீடு - 2025"
  examTitleEn: string;
  academicYear: string;
  includeStudentDetails: boolean; // Name, Roll No, Section, Date
  includeTeacherSignBox: boolean;
  includeParentSignBox: boolean;
  watermarkText?: string;
  logoUrl?: string;
}

export interface QuestionPaper {
  id: string;
  title: string;
  standard: StandardClass;
  term: AcademicTerm;
  subject: SubjectId;
  medium: Medium;
  examType: ExamType;
  totalMarks: number;
  durationMinutes: number;
  headerConfig: SchoolHeaderConfig;
  selectedUnits: string[];
  sections: PaperSection[];
  createdAt: string;
  updatedAt: string;
  notes?: string;
  answerKeyProvided?: boolean;
}

export interface SyllabusUnit {
  id: string;
  number: number;
  titleTa: string;
  titleEn: string;
  subTopics: string[];
}

export interface SubjectSyllabus {
  subjectId: SubjectId;
  subjectNameTa: string;
  subjectNameEn: string;
  terms: {
    [term in AcademicTerm]: {
      termNameTa: string;
      termNameEn: string;
      units: SyllabusUnit[];
    };
  };
}

export interface BlueprintMatrixRow {
  unitName: string;
  knowledgeMarks: number;
  understandingMarks: number;
  applicationMarks: number;
  skillMarks: number;
  totalMarks: number;
}

export interface GeneratePaperRequest {
  standard: StandardClass;
  term: AcademicTerm;
  subject: SubjectId;
  medium: Medium;
  examType: ExamType;
  totalMarks: number;
  durationMinutes: number;
  selectedUnits: string[];
  difficulty: DifficultyLevel;
  questionTypes: QuestionType[];
  schoolName?: string;
  district?: string;
  customInstructions?: string;
  includeAnswerSpace?: boolean;
}
