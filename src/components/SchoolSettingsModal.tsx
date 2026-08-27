import React, { useState } from 'react';
import { SchoolHeaderConfig } from '../types';
import { X, Check, School, MapPin, Hash, Calendar, CheckSquare } from 'lucide-react';

interface SchoolSettingsModalProps {
  currentConfig: SchoolHeaderConfig;
  isOpen: boolean;
  onClose: () => void;
  onSave: (config: SchoolHeaderConfig) => void;
  language: 'ta' | 'en';
}

export const SchoolSettingsModal: React.FC<SchoolSettingsModalProps> = ({
  currentConfig,
  isOpen,
  onClose,
  onSave,
  language,
}) => {
  if (!isOpen) return null;

  const [schoolNameTa, setSchoolNameTa] = useState(currentConfig.schoolNameTa || '');
  const [schoolNameEn, setSchoolNameEn] = useState(currentConfig.schoolName || '');
  const [district, setDistrict] = useState(currentConfig.district || 'சென்னை மாவட்டம்');
  const [subTitle, setSubTitle] = useState(currentConfig.subTitle || 'பள்ளிக் கல்வித்துறை - தமிழ்நாடு அரசு');
  const [emisCode, setEmisCode] = useState(currentConfig.emisCode || '33000000000');
  const [academicYear, setAcademicYear] = useState(currentConfig.academicYear || '2024 - 2025');
  const [includeStudentDetails, setIncludeStudentDetails] = useState(currentConfig.includeStudentDetails ?? true);
  const [includeTeacherSignBox, setIncludeTeacherSignBox] = useState(currentConfig.includeTeacherSignBox ?? true);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave({
      ...currentConfig,
      schoolNameTa,
      schoolName: schoolNameEn,
      district,
      subTitle,
      emisCode,
      academicYear,
      includeStudentDetails,
      includeTeacherSignBox,
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
      <div className="bg-white rounded-2xl shadow-xl border border-stone-300 w-full max-w-lg overflow-hidden animate-in fade-in zoom-in-95 duration-150">
        {/* Header */}
        <div className="px-6 py-4 border-b border-stone-200 flex items-center justify-between bg-stone-50">
          <div className="flex items-center space-x-2">
            <School className="w-5 h-5 text-amber-600" />
            <h3 className="font-bold text-base text-stone-900 font-tamil-header">
              {language === 'ta' ? 'பள்ளி & தேர்வுத் தலைப்பு அமைப்புகள்' : 'School & Header Settings'}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-stone-500 hover:text-stone-900 hover:bg-stone-200 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4 text-xs">
          {/* School Name (Tamil) */}
          <div>
            <label className="block font-semibold text-stone-700 mb-1">
              {language === 'ta' ? 'பள்ளி பெயர் (தமிழில்):' : 'School Name (Tamil):'}
            </label>
            <input
              type="text"
              value={schoolNameTa}
              onChange={(e) => setSchoolNameTa(e.target.value)}
              placeholder="எ.கா: ஊராட்சி ஒன்றிய தொடக்கப்பள்ளி, ஆலந்தூர்"
              className="w-full bg-stone-50 border border-stone-300 rounded-lg px-3 py-2 text-stone-900 font-tamil-body focus:ring-2 focus:ring-amber-500 focus:outline-none"
            />
          </div>

          {/* School Name (English) */}
          <div>
            <label className="block font-semibold text-stone-700 mb-1">
              {language === 'ta' ? 'பள்ளி பெயர் (ஆங்கிலத்தில் - English):' : 'School Name (English):'}
            </label>
            <input
              type="text"
              value={schoolNameEn}
              onChange={(e) => setSchoolNameEn(e.target.value)}
              placeholder="e.g. PANCHAYAT UNION PRIMARY SCHOOL, ALANDUR"
              className="w-full bg-stone-50 border border-stone-300 rounded-lg px-3 py-2 text-stone-900 focus:ring-2 focus:ring-amber-500 focus:outline-none uppercase"
            />
          </div>

          {/* Subtitle & District */}
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block font-semibold text-stone-700 mb-1">
                {language === 'ta' ? 'துறை / ஒன்றியம்:' : 'Department / Subtitle:'}
              </label>
              <input
                type="text"
                value={subTitle}
                onChange={(e) => setSubTitle(e.target.value)}
                className="w-full bg-stone-50 border border-stone-300 rounded-lg px-3 py-1.5 text-stone-900 focus:outline-none"
              />
            </div>
            <div>
              <label className="block font-semibold text-stone-700 mb-1">
                {language === 'ta' ? 'மாவட்டம் (District):' : 'District:'}
              </label>
              <input
                type="text"
                value={district}
                onChange={(e) => setDistrict(e.target.value)}
                placeholder="மதுரை மாவட்டம்"
                className="w-full bg-stone-50 border border-stone-300 rounded-lg px-3 py-1.5 text-stone-900 focus:outline-none"
              />
            </div>
          </div>

          {/* EMIS Code & Academic Year */}
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block font-semibold text-stone-700 mb-1">
                {language === 'ta' ? 'EMIS / UDISE எண்:' : 'EMIS / UDISE Code:'}
              </label>
              <input
                type="text"
                value={emisCode}
                onChange={(e) => setEmisCode(e.target.value)}
                placeholder="33020100101"
                className="w-full bg-stone-50 border border-stone-300 rounded-lg px-3 py-1.5 text-stone-900 focus:outline-none"
              />
            </div>
            <div>
              <label className="block font-semibold text-stone-700 mb-1">
                {language === 'ta' ? 'கல்வியாண்டு (Academic Year):' : 'Academic Year:'}
              </label>
              <input
                type="text"
                value={academicYear}
                onChange={(e) => setAcademicYear(e.target.value)}
                placeholder="2024 - 2025"
                className="w-full bg-stone-50 border border-stone-300 rounded-lg px-3 py-1.5 text-stone-900 focus:outline-none"
              />
            </div>
          </div>

          {/* Toggles */}
          <div className="pt-2 space-y-2">
            <label className="flex items-center space-x-2 text-stone-800 cursor-pointer">
              <input
                type="checkbox"
                checked={includeStudentDetails}
                onChange={(e) => setIncludeStudentDetails(e.target.checked)}
                className="rounded text-amber-600 focus:ring-amber-500 w-4 h-4"
              />
              <span className="font-semibold">
                {language === 'ta'
                  ? 'மாணவர் பெயர், பதிவு எண் நிரப்பும் பட்டி காட்டுக'
                  : 'Include Student Name & Roll No Box'}
              </span>
            </label>

            <label className="flex items-center space-x-2 text-stone-800 cursor-pointer">
              <input
                type="checkbox"
                checked={includeTeacherSignBox}
                onChange={(e) => setIncludeTeacherSignBox(e.target.checked)}
                className="rounded text-amber-600 focus:ring-amber-500 w-4 h-4"
              />
              <span className="font-semibold">
                {language === 'ta'
                  ? 'ஆசிரியர், தலைமையாசிரியர் & பெற்றோர் கையொப்பக் கட்டம் காட்டுக'
                  : 'Include Teacher, HM & Parent Signatures Box'}
              </span>
            </label>
          </div>

          {/* Footer */}
          <div className="pt-4 border-t border-stone-200 flex items-center justify-end space-x-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-stone-600 hover:bg-stone-100 rounded-lg font-semibold"
            >
              {language === 'ta' ? 'ரத்து' : 'Cancel'}
            </button>
            <button
              type="submit"
              className="px-5 py-2 bg-amber-500 hover:bg-amber-600 text-stone-950 font-bold rounded-lg shadow-sm flex items-center space-x-1.5"
            >
              <Check className="w-4 h-4" />
              <span>{language === 'ta' ? 'சேமி & புதுப்பி' : 'Save & Update'}</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
