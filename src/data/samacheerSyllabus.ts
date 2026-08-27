import { StandardClass, SubjectId, SubjectSyllabus } from '../types';

export const SAMACHEER_SYLLABUS: Record<StandardClass, SubjectSyllabus[]> = {
  '1': [
    {
      subjectId: 'tamil',
      subjectNameTa: 'தமிழ் (Tamil)',
      subjectNameEn: 'Tamil',
      terms: {
        '1': {
          termNameTa: 'முதல் பருவம் (Term 1)',
          termNameEn: 'Term 1',
          units: [
            {
              id: 'c1_t1_tam_1',
              number: 1,
              titleTa: 'பாடி ஆடி விளையாடுவோம் (உயிர் எழுத்துக்கள் அறிமுகம் அ - ஔ)',
              titleEn: 'Play and Learn (Vowels Introduction A - Au)',
              subTopics: ['அணிலும் ஆலமரமும்', 'இலையும் ஈட்டியும்', 'உரலும் ஊஞ்சலும்', 'எலியும் ஏணியும்', 'ஐயரும் ஒட்டகமும்', 'ஓடமும் ஔவையாரும்'],
            },
            {
              id: 'c1_t1_tam_2',
              number: 2,
              titleTa: 'விரலோடு விளையாடு (கோடுகள், வடிவங்கள், கைவிரல் அசைவுகள்)',
              titleEn: 'Finger Exercises (Strokes and Patterns)',
              subTopics: ['வளைகோடுகள்', 'நேர்கோடுகள்', 'எழுத்துக்களின் தோற்றம்', 'வண்ணமிடுதல்'],
            },
            {
              id: 'c1_t1_tam_3',
              number: 3,
              titleTa: 'மகிழ்வோடு கற்போம் (மெய் எழுத்துக்கள் க் - ன்)',
              titleEn: 'Happy Learning (Consonants Introduction K - N)',
              subTopics: ['க், ங், ச், ஞ் எழுத்துக்கள்', 'ட், ண், த், ந் எழுத்துக்கள்', 'ப், ம், ய், ர் எழுத்துக்கள்', 'ல், வ், ழ், ள், ற், ன் எழுத்துக்கள்'],
            },
          ],
        },
        '2': {
          termNameTa: 'இரண்டாம் பருவம் (Term 2)',
          termNameEn: 'Term 2',
          units: [
            {
              id: 'c1_t2_tam_1',
              number: 1,
              titleTa: 'காட்டுக்குள்ளே திருவிழா (உயிர்மெய் எழுத்துக்கள் க - ன)',
              titleEn: 'Forest Festival (Vowel-Consonant Ka - Na)',
              subTopics: ['அகர வரிசை', 'படம் பார்த்து பெயர் கூறுதல்', 'எழுத்துக்களை இணைத்து சொல் உருவாக்குதல்'],
            },
            {
              id: 'c1_t2_tam_2',
              number: 2,
              titleTa: 'நிலா நிலா ஓடி வா (ஆகார வரிசை கா - னா)',
              titleEn: 'Moon Song (Long Vowel Series Kaa - Naa)',
              subTopics: ['துணைக்கால் எழுத்துக்கள்', 'சொல் அறிவோம்', 'பொருத்துக வினாக்கள்'],
            },
            {
              id: 'c1_t2_tam_3',
              number: 3,
              titleTa: 'இனிப்பு செய்யலாமா? (இகர, ஈகார வரிசை கி - னி, கீ - னீ)',
              titleEn: 'Making Sweets (Ki-Ni, Kee-Nee Series)',
              subTopics: ['குறில் - நெடில் வேறுபாடு', 'எளிய வாக்கியங்கள் படித்தல்'],
            },
          ],
        },
        '3': {
          termNameTa: 'மூன்றாம் பருவம் (Term 3)',
          termNameEn: 'Term 3',
          units: [
            {
              id: 'c1_t3_tam_1',
              number: 1,
              titleTa: 'உலாப் போகலாம் (உகர, ஊகார வரிசை கு - னு, கூ - னூ)',
              titleEn: 'Let us Walk (Ku-Nu, Koo-Noo Series)',
              subTopics: ['வண்டி சவாரி', 'புதிய சொற்கள்', 'எழுத்துச் சீரமைப்பு'],
            },
            {
              id: 'c1_t3_tam_2',
              number: 2,
              titleTa: 'மழை வந்தது (எகர, ஏகார, ஐகார வரிசை)',
              titleEn: 'Rain Came (Ke-Ne, Kae-Nae, Kai-Nai Series)',
              subTopics: ['ஒற்றைக் கொம்பு', 'இரட்டைக் கொம்பு', 'இணைப்புக் கொம்பு சொற்கள்'],
            },
            {
              id: 'c1_t3_tam_3',
              number: 3,
              titleTa: 'ஊஞ்சல் ஆடலாம் (ஒகர, ஓகார, ஔகார வரிசை & ஆய்த எழுத்து ஃ)',
              titleEn: 'Swing and Play (Ko-No, Kou Series & Ayutha Ezhuthu)',
              subTopics: ['ஆய்த எழுத்து எஃகு', 'வாக்கியம் அமைத்தல்', 'படம் பார்த்து கதை கூறுதல்'],
            },
          ],
        },
      },
    },
    {
      subjectId: 'english',
      subjectNameTa: 'ஆங்கிலம் (English)',
      subjectNameEn: 'English',
      terms: {
        '1': {
          termNameTa: 'Term 1 (முதல் பருவம்)',
          termNameEn: 'Term 1',
          units: [
            {
              id: 'c1_t1_eng_1',
              number: 1,
              titleTa: 'My Pet & Greetings',
              titleEn: 'My Pet & Greetings (Alphabet Letters A-H)',
              subTopics: ['Self introduction', 'Names of animals', 'Letter phonics A to H', 'Sight words: a, the, my, is'],
            },
            {
              id: 'c1_t1_eng_2',
              number: 2,
              titleTa: 'Play Time (Letters I-Q)',
              titleEn: 'Play Time (Letters I to Q)',
              subTopics: ['Action words (run, jump, skip)', 'Rhyme: Clap your hands', 'Letter tracing I-Q'],
            },
            {
              id: 'c1_t1_eng_3',
              number: 3,
              titleTa: 'Families & Friends (Letters R-Z)',
              titleEn: 'Families & Friends (Letters R to Z)',
              subTopics: ['Family members (father, mother, brother, sister)', 'Letters R to Z', 'Matching capital and small letters'],
            },
          ],
        },
        '2': {
          termNameTa: 'Term 2 (இரண்டாம் பருவம்)',
          termNameEn: 'Term 2',
          units: [
            {
              id: 'c1_t2_eng_1',
              number: 1,
              titleTa: 'Fun with Music',
              titleEn: 'Fun with Music',
              subTopics: ['Musical instruments', 'Short vowel words (cat, bat, pin, tin)', 'Opposites: big/small, hot/cold'],
            },
            {
              id: 'c1_t2_eng_2',
              number: 2,
              titleTa: 'Healthy Food & Fruits',
              titleEn: 'Healthy Food & Fruits',
              subTopics: ['Fruits and vegetables names', 'Articles a/an usage', 'Rhyme: Vegetables are good for me'],
            },
          ],
        },
        '3': {
          termNameTa: 'Term 3 (மூன்றாம் பருவம்)',
          termNameEn: 'Term 3',
          units: [
            {
              id: 'c1_t3_eng_1',
              number: 1,
              titleTa: 'Rain, Rain Everywhere',
              titleEn: 'Rain, Rain Everywhere',
              subTopics: ['Weather words (rain, sun, cloud)', 'Rhyming words (sun-run, wet-pet)', 'Colour names (Red, Blue, Green, Yellow)'],
            },
            {
              id: 'c1_t3_eng_2',
              number: 2,
              titleTa: 'Transport & Travel',
              titleEn: 'Transport & Travel',
              subTopics: ['Vehicles (bus, car, train, van, bike)', 'Simple prepositions: in, on, under', 'Short reading sentences'],
            },
          ],
        },
      },
    },
    {
      subjectId: 'maths',
      subjectNameTa: 'கணிதம் (Mathematics)',
      subjectNameEn: 'Mathematics',
      terms: {
        '1': {
          termNameTa: 'முதல் பருவம் (Term 1)',
          termNameEn: 'Term 1',
          units: [
            {
              id: 'c1_t1_mat_1',
              number: 1,
              titleTa: 'வடிவியல் (Geometry & Comparison)',
              titleEn: 'Geometry & Comparison',
              subTopics: ['பெரியது - சிறியது', 'மேலே - கீழே', 'உள்ளே - வெளியே', 'அருகில் - தொலைவில்', 'அடிப்படை வடிவங்கள் (வட்டம், சதுரம், செவ்வகம், முக்கோணம்)'],
            },
            {
              id: 'c1_t1_mat_2',
              number: 2,
              titleTa: 'எண்கள் 1 முதல் 9 வரை & பூஜ்ஜியம் (0)',
              titleEn: 'Numbers 1 to 9 & Zero',
              subTopics: ['எண்ணுதல் மற்றும் எழுதுதல்', 'எண் பெயர்கள் (ஒன்று முதல் ஒன்பது வரை)', 'முந்தைய எண், பிந்தைய எண், இடைப்பட்ட எண்', 'பூஜ்ஜியம் கருத்து'],
            },
            {
              id: 'c1_t1_mat_3',
              number: 3,
              titleTa: 'அமைப்புகள் (Patterns)',
              titleEn: 'Patterns',
              subTopics: ['வடிவ அமைப்புகள்', 'வண்ண அமைப்புகள்', 'ஒலிகளின் அமைப்புகள்'],
            },
          ],
        },
        '2': {
          termNameTa: 'இரண்டாம் பருவம் (Term 2)',
          termNameEn: 'Term 2',
          units: [
            {
              id: 'c1_t2_mat_1',
              number: 1,
              titleTa: 'எண்கள் 10 முதல் 20 வரை (Numbers 10 to 20)',
              titleEn: 'Numbers 10 to 20 & Place Value',
              subTopics: ['பத்துகளும் ஒன்றுகளும்', 'எண் கோடு', 'பெரிய எண், சிறிய எண் ஒப்பீடு (<, >, =)'],
            },
            {
              id: 'c1_t2_mat_2',
              number: 2,
              titleTa: 'கூட்டல் (Addition up to 20)',
              titleEn: 'Addition (up to 20)',
              subTopics: ['படங்களைக் கொண்டு கூட்டுதல்', 'விரல் கணிதம்', 'எண் கோட்டில் கூட்டுதல்', 'எளிய வாய்மொழிக் கணக்குகள்'],
            },
            {
              id: 'c1_t2_mat_3',
              number: 3,
              titleTa: 'கழித்தல் (Subtraction up to 20)',
              titleEn: 'Subtraction (up to 20)',
              subTopics: ['நீக்குதல் முறை', 'குறுக்குக் கோடிட்டு கழித்தல்', 'எளிய கழித்தல் கணக்குகள்'],
            },
          ],
        },
        '3': {
          termNameTa: 'மூன்றாம் பருவம் (Term 3)',
          termNameEn: 'Term 3',
          units: [
            {
              id: 'c1_t3_mat_1',
              number: 1,
              titleTa: 'எண்கள் 21 முதல் 99 வரை (Numbers 21 to 99)',
              titleEn: 'Numbers 21 to 99',
              subTopics: ['பத்துக்களின் தொகுப்புகள்', 'இடமதிப்பு அட்டவணை', 'ஏறுவரிசை மற்றும் இறங்குவரிசை'],
            },
            {
              id: 'c1_t3_mat_2',
              number: 2,
              titleTa: 'அளவீடுகள் (Measurement - Length, Weight)',
              titleEn: 'Measurement',
              subTopics: ['நீளம் (ஜான், முழம், காலடி)', 'எடை (கனமானது / இலேசானது)', 'கொள்ளளவு (அதிகம் / குறைவு)'],
            },
            {
              id: 'c1_t3_mat_3',
              number: 3,
              titleTa: 'பணம் & காலம் (Money & Time)',
              titleEn: 'Money & Time',
              subTopics: ['ரூபாய் நாணயங்கள் மற்றும் நோட்டுகள் (₹1, ₹2, ₹5, ₹10)', 'பகல் / இரவு', 'வாரத்தின் நாட்கள் (திங்கள் - ஞாயிறு)'],
            },
          ],
        },
      },
    },
    {
      subjectId: 'evs',
      subjectNameTa: 'சூழ்நிலையியல் (EVS)',
      subjectNameEn: 'Environmental Studies',
      terms: {
        '1': {
          termNameTa: 'முதல் பருவம் (Term 1)',
          termNameEn: 'Term 1',
          units: [
            {
              id: 'c1_t1_evs_1',
              number: 1,
              titleTa: 'உயிருள்ளவை மற்றும் உயிரற்றவை (Living & Non-living Things)',
              titleEn: 'Living and Non-Living Things',
              subTopics: ['வளரும் பொருட்கள்', 'உணவு உண்ணும் உயிரினங்கள்', 'இயற்கை மற்றும் மனிதனால் உருவாக்கப்பட்டவை'],
            },
            {
              id: 'c1_t1_evs_2',
              number: 2,
              titleTa: 'என் இனிய உடல் (My Body & Senses)',
              titleEn: 'My Body & Five Senses',
              subTopics: ['உடல் உறுப்புகள் (கண், காது, மூக்கு, வாய், கை, கால்)', 'ஐம்புலன்கள்', 'சுத்தம் மற்றும் சுகாதாரம்'],
            },
            {
              id: 'c1_t1_evs_3',
              number: 3,
              titleTa: 'தாவரங்கள் நம் நண்பர்கள் (Nature & Plants)',
              titleEn: 'Plants Around Us',
              subTopics: ['மரங்கள், செடிகள், கொடிகள்', 'இலைகள், பூக்கள், காய்கள்', 'தாவரங்களின் பயன்கள்'],
            },
          ],
        },
        '2': {
          termNameTa: 'இரண்டாம் பருவம் (Term 2)',
          termNameEn: 'Term 2',
          units: [
            {
              id: 'c1_t2_evs_1',
              number: 1,
              titleTa: 'விலங்குலகம் (Animals World)',
              titleEn: 'Animals World',
              subTopics: ['வீட்டு விலங்குகள் & காட்டு விலங்குகள்', 'பறவைகள் மற்றும் பூச்சிகள்', 'விலங்குகளின் வாழிடங்கள் மற்றும் ஒலிகள்'],
            },
            {
              id: 'c1_t2_evs_2',
              number: 2,
              titleTa: 'நீர் & காற்று (Water and Air)',
              titleEn: 'Water and Air',
              subTopics: ['நீரின் ஆதாரங்கள் (மழை, குளம், ஆறு, கிணறு)', 'நீரின் பயன்கள்', 'சுத்தமான காற்று மற்றும் சுவாசம்'],
            },
          ],
        },
        '3': {
          termNameTa: 'மூன்றாம் பருவம் (Term 3)',
          termNameEn: 'Term 3',
          units: [
            {
              id: 'c1_t3_evs_1',
              number: 1,
              titleTa: 'நமது சமூகம் மற்றும் உறவுகள் (Our Society & Family)',
              titleEn: 'Our Society and Helpers',
              subTopics: ['குடும்ப உறவுகள்', 'நமக்கு உதவும் சமுதாயத் தொழிலாளர்கள் (ஆசிரியர், மருத்துவர், உழவர், தபால்காரர், காவலர்)'],
            },
            {
              id: 'c1_t3_evs_2',
              number: 2,
              titleTa: 'பாதுகாப்பும் நற்பழக்கங்களும் (Safety & Good Habits)',
              titleEn: 'Safety and Good Habits',
              subTopics: ['சாலைப் பாதுகாப்பு', 'வீட்டுப் பாதுகாப்பு', 'நற்பழக்கங்கள் மற்றும் ஒழுக்கம்'],
            },
          ],
        },
      },
    },
  ],

  '2': [
    {
      subjectId: 'tamil',
      subjectNameTa: 'தமிழ் (Tamil)',
      subjectNameEn: 'Tamil',
      terms: {
        '1': {
          termNameTa: 'முதல் பருவம் (Term 1)',
          termNameEn: 'Term 1',
          units: [
            {
              id: 'c2_t1_tam_1',
              number: 1,
              titleTa: 'விளையாட்டு உலகம் (பாடல் மற்றும் கதைகள்)',
              titleEn: 'World of Play & Rhymes',
              subTopics: ['பட்டம் பறக்குது பாட்டு', 'நானும் வருவேன் கதை', 'சொல் விளையாட்டு'],
            },
            {
              id: 'c2_t1_tam_2',
              number: 2,
              titleTa: 'சொல்லாதே சொல்லாதே & என் நினைவில்',
              titleEn: 'Songs and Vocabulary',
              subTopics: ['ஆத்திசூடி (ஔவையார்)', 'உயிர் எழுத்து & மெய் எழுத்து பயிற்சி', 'சொற்களை இணைத்து புதிய சொல் உருவாக்குதல்'],
            },
            {
              id: 'c2_t1_tam_3',
              number: 3,
              titleTa: 'பேசாதவை பேசினால் & ஓடி விளையாடு பாப்பா',
              titleEn: 'Moral Stories & Bharathiyar Rhymes',
              subTopics: ['பூங்கா விதிகள்', 'பாரதியார் பாடல்', 'எதிர்ச்சொல் அறிதல்'],
            },
          ],
        },
        '2': {
          termNameTa: 'இரண்டாம் பருவம் (Term 2)',
          termNameEn: 'Term 2',
          units: [
            {
              id: 'c2_t2_tam_1',
              number: 1,
              titleTa: 'ஓடி விளையாடு & நட்பே உயர்வு',
              titleEn: 'Friendship & Morals',
              subTopics: ['காகமும் புறாவும் கதை', 'பொருத்துக', 'ஒருமை - பன்மை அறிமுகம்'],
            },
            {
              id: 'c2_t2_tam_2',
              number: 2,
              titleTa: 'கொன்றை வேந்தன் & அறிவூட்டும் கதைகள்',
              titleEn: 'Konrai Vendhan & Stories',
              subTopics: ['கொன்றை வேந்தன் வரிகள்', 'அன்னை தந்தையே முதற்கடவுள்', 'சொல் தொடர் அமைத்தல்'],
            },
            {
              id: 'c2_t2_tam_3',
              number: 3,
              titleTa: 'வண்ணத்துப்பூச்சி & இனிய மொழி',
              titleEn: 'Butterflies & Pleasant Speech',
              subTopics: ['வண்ணங்கள் அறிவோம்', 'விடுபட்ட சொல் நிரப்புக', 'படக் கதைகள்'],
            },
          ],
        },
        '3': {
          termNameTa: 'மூன்றாம் பருவம் (Term 3)',
          termNameEn: 'Term 3',
          units: [
            {
              id: 'c2_t3_tam_1',
              number: 1,
              titleTa: 'உலா வரும் செயற்கைக்கோள் & திருக்குறள் கதைகள்',
              titleEn: 'Satellites & Thirukkural Stories',
              subTopics: ['அறிவியல் பாடல்', 'திருக்குறள் மனப்பாடப் பகுதி (2 குறள்கள்)', 'விளக்க உரை'],
            },
            {
              id: 'c2_t3_tam_2',
              number: 2,
              titleTa: 'மரம் வளர்ப்போம் & சுட்டிக்குரங்கு',
              titleEn: 'Save Trees & Clever Animals',
              subTopics: ['இயற்கை பாதுகாப்பு', 'பொருத்தமான குறியீடு இடுக', 'வினா-விடை எழுதுதல்'],
            },
          ],
        },
      },
    },
    {
      subjectId: 'english',
      subjectNameTa: 'ஆங்கிலம் (English)',
      subjectNameEn: 'English',
      terms: {
        '1': {
          termNameTa: 'Term 1 (முதல் பருவம்)',
          termNameEn: 'Term 1',
          units: [
            {
              id: 'c2_t1_eng_1',
              number: 1,
              titleTa: 'Our Sweet Home',
              titleEn: 'Our Sweet Home',
              subTopics: ['Rooms in a house (kitchen, bedroom, bathroom)', 'Prepositions: on, in, under, near', 'Phonics: blend sounds sh, ch, th'],
            },
            {
              id: 'c2_t1_eng_2',
              number: 2,
              titleTa: 'Listen to Your Body',
              titleEn: 'Listen to Your Body',
              subTopics: ['Body movements', 'Singular & Plural (s, es)', 'Rhyme: Head, Shoulders, Knees and Toes'],
            },
          ],
        },
        '2': {
          termNameTa: 'Term 2 (இரண்டாம் பருவம்)',
          termNameEn: 'Term 2',
          units: [
            {
              id: 'c2_t2_eng_1',
              number: 1,
              titleTa: 'Fun in the Garden',
              titleEn: 'Fun in the Garden',
              subTopics: ['Insects and flowers', 'Pronouns: He, She, It, They', 'Action words with -ing'],
            },
            {
              id: 'c2_t2_eng_2',
              number: 2,
              titleTa: 'Work People Do',
              titleEn: 'Work People Do',
              subTopics: ['Community helpers (tailor, cobbler, driver, doctor)', 'Use of This is / That is', 'Fill in blanks with correct spelling'],
            },
          ],
        },
        '3': {
          termNameTa: 'Term 3 (மூன்றாம் பருவம்)',
          termNameEn: 'Term 3',
          units: [
            {
              id: 'c2_t3_eng_1',
              number: 1,
              titleTa: 'Nature’s Bounty & Seasons',
              titleEn: 'Nature’s Bounty & Seasons',
              subTopics: ['Summer, Monsoon, Winter seasons', 'Describing words (Adjectives: tall, short, sweet, sour)', 'Question words: What, Who, Where'],
            },
            {
              id: 'c2_t3_eng_2',
              number: 2,
              titleTa: 'Wonder of Animals',
              titleEn: 'Wonder of Animals',
              subTopics: ['Animal young ones (puppy, kitten, calf, cub)', 'Opposite words', 'Short reading comprehension'],
            },
          ],
        },
      },
    },
    {
      subjectId: 'maths',
      subjectNameTa: 'கணிதம் (Mathematics)',
      subjectNameEn: 'Mathematics',
      terms: {
        '1': {
          termNameTa: 'முதல் பருவம் (Term 1)',
          termNameEn: 'Term 1',
          units: [
            {
              id: 'c2_t1_mat_1',
              number: 1,
              titleTa: 'வடிவியல் & உருவங்கள் (2D Shapes & Lines)',
              titleEn: 'Geometry & 2D Shapes',
              subTopics: ['வட்ட வடிவம், சதுரம், செவ்வகம், முக்கோணம்', 'நேர்க்கோடு, வளைகோடு, சாய்வுகோடு', 'உருளும் மற்றும் சறுக்கும் பொருட்கள்'],
            },
            {
              id: 'c2_t1_mat_2',
              number: 2,
              titleTa: 'எண்கள் 1 முதல் 99 வரை (Numbers up to 99)',
              titleEn: 'Numbers 1 to 99 & Place Value',
              subTopics: ['இடமதிப்பு (பத்துகள் மற்றும் ஒன்றுகள்)', 'எண் விரிவாக்கம் (45 = 4 பத்துகள் + 5 ஒன்றுகள்)', 'ஒற்றை எண்கள் மற்றும் இரட்டை எண்கள்'],
            },
            {
              id: 'c2_t1_mat_3',
              number: 3,
              titleTa: 'அமைப்புகள் & கூட்டல் (Patterns & Addition)',
              titleEn: 'Patterns & 2-Digit Addition without carrying',
              subTopics: ['வடிவ வரிசை அமைப்புகள்', 'இரு இலக்க கூட்டல் (எ.கா: 24 + 13 = 37)', 'கூட்டல் கூற்று உருவாக்குதல்'],
            },
          ],
        },
        '2': {
          termNameTa: 'இரண்டாம் பருவம் (Term 2)',
          termNameEn: 'Term 2',
          units: [
            {
              id: 'c2_t2_mat_1',
              number: 1,
              titleTa: 'கழித்தல் (Subtraction - 2 Digit)',
              titleEn: '2-Digit Subtraction without borrowing',
              subTopics: ['இரு இலக்க எண்களின் கழித்தல் (எ.கா: 48 - 25 = 23)', 'கழித்தல் வாய்மொழிக் கணக்குகள்'],
            },
            {
              id: 'c2_t2_mat_2',
              number: 2,
              titleTa: 'அளவைகள் (Measurement - Length & Weight)',
              titleEn: 'Measurement - Length and Weight',
              subTopics: ['திட்டமற்ற அளவைகள் (ஜான், காலடி)', 'திட்ட அளவைகள் அறிமுகம் (மீட்டர், சென்டிமீட்டர்)', 'எடை ஒப்பீடு'],
            },
            {
              id: 'c2_t2_mat_3',
              number: 3,
              titleTa: 'நேரம் மற்றும் கால அட்டவணை (Time & Calendar)',
              titleEn: 'Time & Calendar',
              subTopics: ['கடிகாரத்தில் மணி அறிதல்', 'மாதங்களின் பெயர்கள் (12 மாதங்கள்)', 'நாட்காட்டி வாசித்தல்'],
            },
          ],
        },
        '3': {
          termNameTa: 'மூன்றாம் பருவம் (Term 3)',
          termNameEn: 'Term 3',
          units: [
            {
              id: 'c2_t3_mat_1',
              number: 1,
              titleTa: 'பணம் (Money - Coins & Notes)',
              titleEn: 'Money Concepts',
              subTopics: ['ரூபாய் நோட்டுகள் (₹10, ₹20, ₹50, ₹100)', 'பொருட்களின் விலை கணக்கிடுதல்', 'சில்லறை மாற்றுதல்'],
            },
            {
              id: 'c2_t3_mat_2',
              number: 2,
              titleTa: 'பெருக்கல் அறிமுகம் (Introduction to Multiplication)',
              titleEn: 'Repeated Addition & Multiplication',
              subTopics: ['தொடர் கூட்டலே பெருக்கல்', '2, 3, 5-ஆம் வாய்ப்பாடுகள்', 'எளிய பெருக்கல் கணக்குகள்'],
            },
            {
              id: 'c2_t3_mat_3',
              number: 3,
              titleTa: 'தகவல் செயலாக்கம் (Data Handling)',
              titleEn: 'Information Processing & Pictograph',
              subTopics: ['பட விளக்கப் படம்', 'பொருட்களை வகைப்படுத்தி எண்ணுதல்'],
            },
          ],
        },
      },
    },
    {
      subjectId: 'evs',
      subjectNameTa: 'சூழ்நிலையியல் (EVS)',
      subjectNameEn: 'Environmental Studies',
      terms: {
        '1': {
          termNameTa: 'முதல் பருவம் (Term 1)',
          termNameEn: 'Term 1',
          units: [
            {
              id: 'c2_t1_evs_1',
              number: 1,
              titleTa: 'நமது சுற்றுச்சூழல் (Our Environment & Habitats)',
              titleEn: 'Our Environment & Habitats',
              subTopics: ['காடு, சமவெளி, மலை, பாலைவனம், கடல்', 'ஒவ்வொரு நிலப்பரப்பிலும் வாழும் உயிரினங்கள்'],
            },
            {
              id: 'c2_t1_evs_2',
              number: 2,
              titleTa: 'நமது சத்துணவும் ஆரோக்கியமும் (Food & Health)',
              titleEn: 'Food and Healthy Eating',
              subTopics: ['ஆரோக்கியமான உணவு', 'தானியங்கள், பருப்புகள், காய்கறிகள்', 'உணவு சுகாதாரம்'],
            },
          ],
        },
        '2': {
          termNameTa: 'இரண்டாம் பருவம் (Term 2)',
          termNameEn: 'Term 2',
          units: [
            {
              id: 'c2_t2_evs_1',
              number: 1,
              titleTa: 'நீர் வளம் மற்றும் பயன்பாடு (Water Sources & Uses)',
              titleEn: 'Water Sources & Conservation',
              subTopics: ['மழைநீரின் முக்கியத்துவம்', 'நீர் சேமிப்பு முறைகள்', 'நீரை வீணாக்காமல் இருத்தல்'],
            },
            {
              id: 'c2_t2_evs_2',
              number: 2,
              titleTa: 'போக்குவரத்து மற்றும் பயணம் (Transport & Safety)',
              titleEn: 'Transport and Road Safety',
              subTopics: ['தரைவழி, நீர்வழி, வான்வழிப் போக்குவரத்து', 'போக்குவரத்து சைகைகள் (சிகப்பு, மஞ்சள், பச்சை)', 'ஜீப்ரா கிராசிங்'],
            },
          ],
        },
        '3': {
          termNameTa: 'மூன்றாம் பருவம் (Term 3)',
          termNameEn: 'Term 3',
          units: [
            {
              id: 'c2_t3_evs_1',
              number: 1,
              titleTa: 'பொருட்களின் வகைகள் (Materials Around Us)',
              titleEn: 'Materials Around Us',
              subTopics: ['மரம், களிமண், கல், உலோகம், பிளாஸ்டிக், கண்ணாடி', 'பொருட்களின் தன்மைகள் (மென்மையானது, கடினமானது, பளபளப்பானது)'],
            },
            {
              id: 'c2_t3_evs_2',
              number: 2,
              titleTa: 'பகல், இரவு மற்றும் வானியல் (Day, Night & Sky)',
              titleEn: 'Day, Night and the Sky',
              subTopics: ['சூரியன், சந்திரன், நட்சத்திரங்கள்', 'திசைகள் (கிழக்கு, மேற்கு, வடக்கு, தெற்கு)', 'நிழல் உருவாக்கம்'],
            },
          ],
        },
      },
    },
  ],

  '3': [
    {
      subjectId: 'tamil',
      subjectNameTa: 'தமிழ் (Tamil)',
      subjectNameEn: 'Tamil',
      terms: {
        '1': {
          termNameTa: 'முதல் பருவம் (Term 1)',
          termNameEn: 'Term 1',
          units: [
            {
              id: 'c3_t1_tam_1',
              number: 1,
              titleTa: 'தமிழ் அமுது (பாரதிதாசன்) & கண்ணன் செய்த உதவி',
              titleEn: 'Tamil Amudhu & Moral Stories',
              subTopics: ['பாரதிதாசன் பாடல் பொருள்', 'முதியவருக்கு உதவி செய்யும் நற்குணம்', 'பிரித்து எழுதுக', 'சேர்த்து எழுதுக'],
            },
            {
              id: 'c3_t1_tam_2',
              number: 2,
              titleTa: 'தனித்திறமை & கல்யாணமாம் கல்யாணம்',
              titleEn: 'Individual Talents & Folktales',
              subTopics: ['விலங்குகளின் தனித்திறமை கதை', 'நாட்டுப்புறப் பாடல்', 'சொல் விளையாட்டு'],
            },
            {
              id: 'c3_t1_tam_3',
              number: 3,
              titleTa: 'சான்றோர் மொழி - இனியவை நாற்பது & இலக்கணம் (பெயர்ச்சொல், வினைச்சொல்)',
              titleEn: 'Iniyavai Narpathu & Basic Grammar',
              subTopics: ['பூதஞ்சேந்தனார் இயற்றிய பாடல்', 'பெயர்ச்சொல் மற்றும் வினைச்சொல் கண்டறிதல்', 'எதிர்ச்சொல்'],
            },
          ],
        },
        '2': {
          termNameTa: 'இரண்டாம் பருவம் (Term 2)',
          termNameEn: 'Term 2',
          units: [
            {
              id: 'c3_t2_tam_1',
              number: 1,
              titleTa: 'மூதுரை (ஔவையார்) & எறும்புக்கும் இடம் உண்டு',
              titleEn: 'Moodhurai & Kind Stories',
              subTopics: ['அடக்கமுடையார் அறிவிலர் என்றெண்ணி பாடல்', 'செய்யுள் வினா-விடை', 'பொருத்துக'],
            },
            {
              id: 'c3_t2_tam_2',
              number: 2,
              titleTa: 'நல்வழி & கல்விக்கண் திறந்த காமராசர்',
              titleEn: 'Nalvazhi & Kamarajar Biography',
              subTopics: ['காமராசரின் கல்விப் பணிகள்', 'மதிய உணவுத் திட்டம்', 'நிறுத்தற்குறிகள் (முற்றுப்புள்ளி, காற்புள்ளி)'],
            },
            {
              id: 'c3_t2_tam_3',
              number: 3,
              titleTa: 'உழவுப் பொங்கல் & மாட்டுப் பொங்கல் விழா',
              titleEn: 'Pongal Festival & Tamil Heritage',
              subTopics: ['உழவர் திருநாள்', 'தமிழர் மரபு', 'கட்டுரை குறிப்பு எழுதுதல்'],
            },
          ],
        },
        '3': {
          termNameTa: 'மூன்றாம் பருவம் (Term 3)',
          termNameEn: 'Term 3',
          units: [
            {
              id: 'c3_t3_tam_1',
              number: 1,
              titleTa: 'உலா வரும் செயற்கைக்கோள் & திருக்குறள் நீதி கதைகள்',
              titleEn: 'Science Poems & Thirukkural Morals',
              subTopics: ['வானியல் அறிவு', 'குறள் - ஒழுக்கம் விழுப்பம் தரலான்', 'குறள் - எப்பொருள் யார்யார்வாய் கேட்பினும்'],
            },
            {
              id: 'c3_t3_tam_2',
              number: 2,
              titleTa: 'மழை தந்த வளம் & தெனாலிராமன் கதைகள்',
              titleEn: 'Nature Blessings & Tenali Raman Wit',
              subTopics: ['தெனாலிராமனின் சாதுரியம்', 'மரபுச் சொற்கள் (விலங்குகளின் இருப்பிடம், ஒலிகள்)'],
            },
          ],
        },
      },
    },
    {
      subjectId: 'english',
      subjectNameTa: 'ஆங்கிலம் (English)',
      subjectNameEn: 'English',
      terms: {
        '1': {
          termNameTa: 'Term 1 (முதல் பருவம்)',
          termNameEn: 'Term 1',
          units: [
            {
              id: 'c3_t1_eng_1',
              number: 1,
              titleTa: 'Our Kitchen & Fun in the Park',
              titleEn: 'Our Kitchen & Fun in the Park',
              subTopics: ['Kitchen utensils (knife, blender, pan)', 'Grammar: Nouns and Pronouns (I, We, You, He, She, It, They)', 'Poem: Bender the Blender'],
            },
            {
              id: 'c3_t1_eng_2',
              number: 2,
              titleTa: 'A Trip to the Store & Little Red Hen',
              titleEn: 'A Trip to the Store & Moral Tale',
              subTopics: ['Grocery store items', 'Use of Articles: A, An, The', 'Punctuation: Capital letter, Full stop, Question mark'],
            },
          ],
        },
        '2': {
          termNameTa: 'Term 2 (இரண்டாம் பருவம்)',
          termNameEn: 'Term 2',
          units: [
            {
              id: 'c3_t2_eng_1',
              number: 1,
              titleTa: 'Seasons & Nature’s Beauty',
              titleEn: 'Seasons and Clothes',
              subTopics: ['Weather and clothing', 'Present Continuous Tense (is/are + verb-ing)', 'Synonyms & Antonyms'],
            },
            {
              id: 'c3_t2_eng_2',
              number: 2,
              titleTa: 'The Seven Seeds & Kings and Queens',
              titleEn: 'The Seven Seeds Story',
              subTopics: ['Honesty and truthfulness', 'Adjectives (describing quality, size, color)', 'Comprehension passage Q&A'],
            },
          ],
        },
        '3': {
          termNameTa: 'Term 3 (மூன்றாம் பருவம்)',
          termNameEn: 'Term 3',
          units: [
            {
              id: 'c3_t3_eng_1',
              number: 1,
              titleTa: 'Rain, River and Sea',
              titleEn: 'Water cycle & Water bodies',
              subTopics: ['Vocabulary related to water', 'Simple Past Tense (regular verbs with -ed)', 'Poem: The River'],
            },
            {
              id: 'c3_t3_eng_2',
              number: 2,
              titleTa: 'Creatures of the Earth',
              titleEn: 'Insects and Birds',
              subTopics: ['Animal habitats', 'Prepositions: behind, between, in front of', 'Rearrange jumbled words into meaningful sentences'],
            },
          ],
        },
      },
    },
    {
      subjectId: 'maths',
      subjectNameTa: 'கணிதம் (Mathematics)',
      subjectNameEn: 'Mathematics',
      terms: {
        '1': {
          termNameTa: 'முதல் பருவம் (Term 1)',
          termNameEn: 'Term 1',
          units: [
            {
              id: 'c3_t1_mat_1',
              number: 1,
              titleTa: 'வடிவியல் - 2D மற்றும் 3D உருவங்கள் (Geometry 2D/3D)',
              titleEn: 'Geometry - 2D & 3D Shapes',
              subTopics: ['கனசதுரம், கனசெவ்வகம், கோளம், கூம்பு, உருளை', 'பக்கங்கள், முனைகள், விளிம்புகள் கணக்கிடுதல்'],
            },
            {
              id: 'c3_t1_mat_2',
              number: 2,
              titleTa: 'எண்கள் 100 முதல் 999 வரை (3-Digit Numbers)',
              titleEn: 'Numbers up to 999',
              subTopics: ['இடமதிப்பு மற்றும் முகமதிப்பு (Hundreds, Tens, Ones)', 'எண் பெயர்கள் & விரிவாக்கக் குறியீடு', 'ஏறுவரிசை & இறங்குவரிசை'],
            },
            {
              id: 'c3_t1_mat_3',
              number: 3,
              titleTa: 'அமைப்புகள் & கூட்டல் (3-Digit Addition)',
              titleEn: 'Addition with Regrouping (Boring/Carrying)',
              subTopics: ['இனமாற்றத்துடன் கூடிய கூட்டல்', 'கூட்டல் வாழ்க்கைச் சூழல் கணக்குகள்'],
            },
            {
              id: 'c3_t1_mat_4',
              number: 4,
              titleTa: 'கழித்தல் (3-Digit Subtraction with Regrouping)',
              titleEn: 'Subtraction with Regrouping',
              subTopics: ['இனமாற்றத்துடன் கூடிய கழித்தல்', 'சரிபார்த்தல் முறை'],
            },
          ],
        },
        '2': {
          termNameTa: 'இரண்டாம் பருவம் (Term 2)',
          termNameEn: 'Term 2',
          units: [
            {
              id: 'c3_t2_mat_1',
              number: 1,
              titleTa: 'பெருக்கல் (Multiplication Tables 1 to 10)',
              titleEn: 'Multiplication Operations & Tables',
              subTopics: ['வாய்ப்பாடுகள் 2, 3, 4, 5, 6, 10', 'இரு இலக்க எண்ணை ஓர் இலக்க எண்ணால் பெருக்குதல்', 'பெருக்கல் வார்த்தைக் கணக்குகள்'],
            },
            {
              id: 'c3_t2_mat_2',
              number: 2,
              titleTa: 'வகுத்தல் அறிமுகம் (Introduction to Division)',
              titleEn: 'Division as Equal Sharing & Grouping',
              subTopics: ['சமமாகப் பிரித்தல் முறை', 'வகுத்தல் குறியீடு (÷)', 'ஈவு மற்றும் மீதி அறிதல்'],
            },
            {
              id: 'c3_t2_mat_3',
              number: 3,
              titleTa: 'அளவைகள் - எடை மற்றும் கொள்ளளவு (Weight & Capacity)',
              titleEn: 'Measurements - Grams, Kilograms, Litres',
              subTopics: ['கிராம் (g), கிலோகிராம் (kg)', 'மில்லிலிட்டர் (ml), லிட்டர் (l)', 'அளவைகள் ஒப்பீடு மற்றும் எளிய கூட்டல்'],
            },
          ],
        },
        '3': {
          termNameTa: 'மூன்றாம் பருவம் (Term 3)',
          termNameEn: 'Term 3',
          units: [
            {
              id: 'c3_t3_mat_1',
              number: 1,
              titleTa: 'பணம் - ரூபாய் மற்றும் பைசா (Money & Bills)',
              titleEn: 'Money - Rupees & Paise Operations',
              subTopics: ['ரூபாய்-பைசா மாற்றம் (₹1 = 100 பைசா)', 'எளிய ரசீது / பில் தயாரித்தல்', 'கூட்டல், கழித்தல் கணக்குகள்'],
            },
            {
              id: 'c3_t3_mat_2',
              number: 2,
              titleTa: 'காலம் மற்றும் நாட்காட்டி (Time & Clock)',
              titleEn: 'Reading Time (Hour & Minute hands)',
              subTopics: ['கடிகாரம் பார்த்து மணி, நிமிடம் கூறுதல்', 'மு.ப (a.m) மற்றும் பி.ப (p.m)', 'லீப் ஆண்டு மற்றும் நாட்காட்டி கணக்குகள்'],
            },
            {
              id: 'c3_t3_mat_3',
              number: 3,
              titleTa: 'பின்னங்கள் அறிமுகம் & தகவல் செயலாக்கம் (Fractions & Data)',
              titleEn: 'Fractions Introduction (1/2, 1/4, 3/4) & Data Handling',
              subTopics: ['அரை (1/2), கால் (1/4), முக்கால் (3/4)', 'படம் மற்றும் குறியீட்டு அட்டவணை'],
            },
          ],
        },
      },
    },
    {
      subjectId: 'science',
      subjectNameTa: 'அறிவியல் (Science)',
      subjectNameEn: 'Science',
      terms: {
        '1': {
          termNameTa: 'முதல் பருவம் (Term 1)',
          termNameEn: 'Term 1',
          units: [
            {
              id: 'c3_t1_sci_1',
              number: 1,
              titleTa: 'எனது உடல் மற்றும் சுகாதாரம் (My Body & Cleanliness)',
              titleEn: 'My Body & Cleanliness',
              subTopics: ['உள் உறுப்புகள் (மூளை, இதயம், நுரையீரல், வயிறு, சிறுநீரகம்)', 'கை கழுவும் 6 படிநிலைகள்', 'பல் பாதுகாப்பு'],
            },
            {
              id: 'c3_t1_sci_2',
              number: 2,
              titleTa: 'பருப்பொருட்கள் மற்றும் பொருட்கள் (Matter and Materials)',
              titleEn: 'Matter and Materials (Solid, Liquid, Gas)',
              subTopics: ['திண்மம், திரவம், வாயு நிலைகள்', 'பொருட்களின் மாற்றங்கள் (உருகுதல், உறைதல், ஆவியாதல்)'],
            },
            {
              id: 'c3_t1_sci_3',
              number: 3,
              titleTa: 'விசையும் இயக்கமும் (Force and Work)',
              titleEn: 'Force and Motion',
              subTopics: ['தள்ளுதல் மற்றும் இழுத்தல்', 'உராய்வு விசை', 'ஈர்ப்பு விசை அறிமுகம்'],
            },
          ],
        },
        '2': {
          termNameTa: 'இரண்டாம் பருவம் (Term 2)',
          termNameEn: 'Term 2',
          units: [
            {
              id: 'c3_t2_sci_1',
              number: 1,
              titleTa: 'உணவு மற்றும் சத்துக்கள் (Food & Nutrients)',
              titleEn: 'Food and Nutrition',
              subTopics: ['கார்போஹைட்ரேட், புரதம், கொழுப்பு, வைட்டமின்கள், தாதுக்கள்', 'சமச்சீர் உணவு முறை', 'பாரம்பரிய உணவு வகைகள்'],
            },
            {
              id: 'c3_t2_sci_2',
              number: 2,
              titleTa: 'நீர் வளம் மற்றும் மழைநீர் சேகரிப்பு (Water Resources)',
              titleEn: 'Water Resources & Rainwater Harvesting',
              subTopics: ['நீர் சுழற்சி படிநிலைகள்', 'குடிநீர் சுத்திகரிப்பு முறைகள்', 'மழைநீர் சேகரிப்பு'],
            },
            {
              id: 'c3_t2_sci_3',
              number: 3,
              titleTa: 'தாவரங்களின் உலகம் (Plants Life)',
              titleEn: 'Parts of a Plant & Photosynthesis Basics',
              subTopics: ['வேர், தண்டு, இலை, பூ, காய், கனி', 'தாவரங்களின் சுவாசம்', 'மருத்துவத் தாவரங்கள் (துளசி, தூதுவளை, வேப்பிலை)'],
            },
          ],
        },
        '3': {
          termNameTa: 'மூன்றாம் பருவம் (Term 3)',
          termNameEn: 'Term 3',
          units: [
            {
              id: 'c3_t3_sci_1',
              number: 1,
              titleTa: 'விலங்குகளின் வாழ்க்கை முறை (Animal Life)',
              titleEn: 'Animal Life & Adaptations',
              subTopics: ['தாவர உண்ணிகள், ஊன் உண்ணிகள், அனைத்துண்ணிகள்', 'பறவைகளின் கூடுகள் மற்றும் அலகுகள்', 'விலங்குகளின் பாதுகாப்பு'],
            },
            {
              id: 'c3_t3_sci_2',
              number: 2,
              titleTa: 'காற்று மற்றும் சுவாசம் (Air and Atmosphere)',
              titleEn: 'Air, Atmosphere and Wind',
              subTopics: ['காற்றின் பண்புகள் (எடை உண்டு, இடத்தை அடைக்கும்)', 'ஆக்சிஜன் மற்றும் கார்பன் டை ஆக்சைடு', 'காற்று மாசுபாடு'],
            },
          ],
        },
      },
    },
    {
      subjectId: 'social',
      subjectNameTa: 'சமூக அறிவியல் (Social Science)',
      subjectNameEn: 'Social Science',
      terms: {
        '1': {
          termNameTa: 'முதல் பருவம் (Term 1)',
          termNameEn: 'Term 1',
          units: [
            {
              id: 'c3_t1_soc_1',
              number: 1,
              titleTa: 'குடும்பம் மற்றும் உறவுகள் (Family & Society)',
              titleEn: 'Family and Relations',
              subTopics: ['சிறிய குடும்பம், கூட்டுக் குடும்பம்', 'குடும்ப விழுமியங்கள் (அன்பு, மரியாதை, ஒத்துழைப்பு)'],
            },
            {
              id: 'c3_t1_soc_2',
              number: 2,
              titleTa: 'நமது நண்பர்கள் - சமுதாயப் பணியாளர்கள் (Our Friends / Helpers)',
              titleEn: 'Our Community Helpers',
              subTopics: ['தீயணைப்பு வீரர், ஆசிரியர், மருத்துவர், செவிலியர், தபால்காரர்', 'அவசர உதவி எண்கள் (100, 101, 108)'],
            },
            {
              id: 'c3_t1_soc_3',
              number: 3,
              titleTa: 'பஞ்சாயத்து அமைப்பு மற்றும் கிராம நிர்வாகம் (Panchayat System)',
              titleEn: 'Panchayat & Local Self Government',
              subTopics: ['கிராம சபை கூட்டம் (ஜனவரி 26, மே 1, ஆகஸ்ட் 15, அக்டோபர் 2)', 'கிராம ஊராட்சியின் கடமைகள் (குடிநீர், தெருவிளக்கு, தூய்மை)'],
            },
          ],
        },
        '2': {
          termNameTa: 'இரண்டாம் பருவம் (Term 2)',
          termNameEn: 'Term 2',
          units: [
            {
              id: 'c3_t2_soc_1',
              number: 1,
              titleTa: 'வரலாற்றுச் சிறப்புமிக்க இடங்கள் (Historical Places in Tamil Nadu)',
              titleEn: 'Historical Places in Tamil Nadu',
              subTopics: ['மகாபலிபுரம் (மாமல்லபுரம் கடற்கரைக் கோயில்)', 'தஞ்சை பெரிய கோயில் (இராஜராஜ சோழன்)', 'மதுரை மீனாட்சியம்மன் கோயில் & திருமலை நாயக்கர் மஹால்', 'செஞ்சி கோட்டை'],
            },
            {
              id: 'c3_t2_soc_2',
              number: 2,
              titleTa: 'பாதுகாப்பு விதிகள் மற்றும் முதலுதவி (Safety & First Aid)',
              titleEn: 'Safety and First Aid',
              subTopics: ['சாலை பாதுகாப்பு விதிகள்', 'தீ விபத்து தடுப்பு முறைகள்', 'முதலுதவி பெட்டி பயன்பாடு'],
            },
          ],
        },
        '3': {
          termNameTa: 'மூன்றாம் பருவம் (Term 3)',
          termNameEn: 'Term 3',
          units: [
            {
              id: 'c3_t3_soc_1',
              number: 1,
              titleTa: 'தமிழ்நாட்டின் மாவட்டங்கள் மற்றும் இயற்கை எழில் (Districts of Tamil Nadu)',
              titleEn: 'Districts of Tamil Nadu & Landmarks',
              subTopics: ['தமிழ்நாட்டின் தலைநகரம் (சென்னை)', 'மாவட்ட ஆட்சியர் பணிகள்', 'மலைவாசஸ்தலங்கள் (ஊட்டி, கொடைக்கானல், ஏற்காடு)'],
            },
            {
              id: 'c3_t3_soc_2',
              number: 2,
              titleTa: 'நமது தேசியச் சின்னங்கள் மற்றும் மாநிலச் சின்னங்கள் (National & State Symbols)',
              titleEn: 'National and State Symbols of Tamil Nadu',
              subTopics: ['மாநில விலங்கு (வரையாடு), மாநிலப் பறவை (மரகதப்புறா), மாநில மரம் (பனைமரம்), மாநில மலர் (செங்காந்தள்)', 'தேசிய கொடி, தேசிய கீதம் (இரவீந்திரநாத் தாகூர்)'],
            },
          ],
        },
      },
    },
  ],

  '4': [
    {
      subjectId: 'tamil',
      subjectNameTa: 'தமிழ் (Tamil)',
      subjectNameEn: 'Tamil',
      terms: {
        '1': {
          termNameTa: 'முதல் பருவம் (Term 1)',
          termNameEn: 'Term 1',
          units: [
            {
              id: 'c4_t1_tam_1',
              number: 1,
              titleTa: 'அன்னைத் தமிழே & பனைமரச் சிறப்பு',
              titleEn: 'Annai Thamizhe & Palm Tree Glory',
              subTopics: ['காமராசன் பாடல்', 'பனைமரத்தின் 12 உறுப்புகள்', 'பனைமரத்தின் பயன்கள் (நுங்கு, பதநீர், பனைவெல்லம்)'],
            },
            {
              id: 'c4_t1_tam_2',
              number: 2,
              titleTa: 'ஏழு இறக்கைக் குருவியும் தெனாலிராமனும் & முளைப்பாரி பாடல்',
              titleEn: 'Tenali Raman & Folk Songs',
              subTopics: ['கிருஷ்ணதேவராயர் அவையில் தெனாலிராமன்', 'நாட்டுப்புற முளைப்பாரி பாடல்', 'பிரித்து எழுதுக, சேர்த்து எழுதுக'],
            },
            {
              id: 'c4_t1_tam_3',
              number: 3,
              titleTa: 'சான்றோர் மொழி - வெற்றி வேற்கை & இலக்கணம் (திணை - உயர்திணை, அஃறிணை)',
              titleEn: 'Vetri Verkai & Thinai Grammar',
              subTopics: ['அதிவீரராம பாண்டியர் பாடல் (உதவி வரைத்தன்று உதவி)', 'உயர்திணை மற்றும் அஃறிணை வேறுபாடு', 'வல்லினம், மெல்லினம், இடையினம்'],
            },
          ],
        },
        '2': {
          termNameTa: 'இரண்டாம் பருவம் (Term 2)',
          termNameEn: 'Term 2',
          units: [
            {
              id: 'c4_t2_tam_1',
              number: 1,
              titleTa: 'மூதுரை (ஔவையார்) & நீதிநெறி விளக்கம்',
              titleEn: 'Moodhurai & Neethineri Vilakkam',
              subTopics: ['நெல்லுக்கு இறைத்த நீர் வாய்க்கால் வழி யோடி பாடல்', 'குமரகுருபரர் இயற்றிய நீதிநெறி விளக்கம்', 'சொல் வளம்'],
            },
            {
              id: 'c4_t2_tam_2',
              number: 2,
              titleTa: 'கரிகாலன் கட்டிய கல்லணை & திருக்குறள் கதைகள்',
              titleEn: 'Grand Anicut & Thirukkural Stories',
              subTopics: ['சோழ மன்னன் கரிகாலன் பெருமை', 'காவிரி ஆற்றின் மீது கட்டப்பட்ட கல்லணை சிறப்பு', 'குறள் - மனத்துக்கண் மாசிலன் ஆதல்'],
            },
            {
              id: 'c4_t2_tam_3',
              number: 3,
              titleTa: 'இலக்கணம் (பால் - ஆண்பால், பெண்பால், பலர்பால், ஒன்றன்பால், பலவின்பால்)',
              titleEn: 'Grammar - Five Genders in Tamil',
              subTopics: ['ஐவகை பால்கள் அறிதல்', 'பொருத்தமான பால் பெயர் எழுதுதல்', 'வாக்கியங்களை மாற்றி அமைத்தல்'],
            },
          ],
        },
        '3': {
          termNameTa: 'மூன்றாம் பருவம் (Term 3)',
          termNameEn: 'Term 3',
          units: [
            {
              id: 'c4_t3_tam_1',
              number: 1,
              titleTa: 'உலா வரும் நிலா & ஆசிய ஜோதி',
              titleEn: 'Poem & Life of Buddha',
              subTopics: ['கவிமணி தேசிக விநாயகம் பிள்ளை பாடல்', 'புத்தரின் கருணை மற்றும் அன்பு', 'எதிர்ச்சொல், பிரித்து எழுதுக'],
            },
            {
              id: 'c4_t3_tam_2',
              number: 2,
              titleTa: 'மழை தந்த வளம் & கடிதம் எழுதுதல்',
              titleEn: 'Rain Prosperity & Letter Writing',
              subTopics: ['இயற்கை சீற்றம் மற்றும் பாதுகாப்பு', 'விடுப்பு விண்ணப்பம் எழுதும் முறை', 'மரபுத்தொடர்கள்'],
            },
          ],
        },
      },
    },
    {
      subjectId: 'english',
      subjectNameTa: 'ஆங்கிலம் (English)',
      subjectNameEn: 'English',
      terms: {
        '1': {
          termNameTa: 'Term 1 (முதல் பருவம்)',
          termNameEn: 'Term 1',
          units: [
            {
              id: 'c4_t1_eng_1',
              number: 1,
              titleTa: 'The Trick Robot & My Robot',
              titleEn: 'The Trick Robot & Poem',
              subTopics: ['Vicky’s robot story', 'Naming words vs Action words', 'Singular / Plural rules with -ies, -ves'],
            },
            {
              id: 'c4_t1_eng_2',
              number: 2,
              titleTa: 'Saving and Spending & Appu’s Birthday',
              titleEn: 'Saving and Money Habits',
              subTopics: ['Piggy bank savings', 'Grammar: Simple Present Tense (He runs, They run)', 'Homophones (sea/see, son/sun)'],
            },
          ],
        },
        '2': {
          termNameTa: 'Term 2 (இரண்டாம் பருவம்)',
          termNameEn: 'Term 2',
          units: [
            {
              id: 'c4_t2_eng_1',
              number: 1,
              titleTa: 'Appreciate Nature & Treasure Trove',
              titleEn: 'Appreciate Nature & Poem',
              subTopics: ['Poem: A Voyage', 'Grammar: Simple Past Tense (walked, went, ate, saw)', 'Prepositions of place and time'],
            },
            {
              id: 'c4_t2_eng_2',
              number: 2,
              titleTa: 'Never Give Up & The Right Match',
              titleEn: 'Never Give Up Story',
              subTopics: ['Determination and courage', 'Adverbs of manner (slowly, loudly, happily)', 'Comprehension passages'],
            },
          ],
        },
        '3': {
          termNameTa: 'Term 3 (மூன்றாம் பருவம்)',
          termNameEn: 'Term 3',
          units: [
            {
              id: 'c4_t3_eng_1',
              number: 1,
              titleTa: 'Robin Hood & Adventure Tales',
              titleEn: 'Robin Hood & Adventure Tales',
              subTopics: ['Bravery and helping others', 'Conjunctions: and, but, or, because', 'Prefixes and Suffixes (un-, dis-, -ful, -less)'],
            },
            {
              id: 'c4_t3_eng_2',
              number: 2,
              titleTa: 'Travel around the World',
              titleEn: 'Travel around the World',
              subTopics: ['Continents and Oceans', 'Question forms: Wh- questions', 'Paragraph writing on "My Favorite Place"'],
            },
          ],
        },
      },
    },
    {
      subjectId: 'maths',
      subjectNameTa: 'கணிதம் (Mathematics)',
      subjectNameEn: 'Mathematics',
      terms: {
        '1': {
          termNameTa: 'முதல் பருவம் (Term 1)',
          termNameEn: 'Term 1',
          units: [
            {
              id: 'c4_t1_mat_1',
              number: 1,
              titleTa: 'வடிவியல் - கோணங்கள் மற்றும் சமச்சீர் தன்மை (Geometry - Angles & Symmetry)',
              titleEn: 'Geometry - Angles and Symmetry',
              subTopics: ['செங்கோணம் (90°), குறுங்கோணம் (<90°), விரிகோணம் (>90°)', 'சமச்சீர்க் கோடுகள் வரைதல்'],
            },
            {
              id: 'c4_t1_mat_2',
              number: 2,
              titleTa: 'எண்கள் 10,000 வரை (Numbers up to 10,000)',
              titleEn: 'Numbers up to 10,000 & Place Values',
              subTopics: ['ஆயிரங்கள், நூறுகள், பத்துகள், ஒன்றுகள்', 'எண்களின் ஒப்பீடு, பெரிய எண்/சிறிய எண்', '4 இலக்க கூட்டல் மற்றும் கழித்தல்'],
            },
            {
              id: 'c4_t1_mat_3',
              number: 3,
              titleTa: 'அமைப்புகள் மற்றும் சுழற்சிகள் (Patterns & Rotations)',
              titleEn: 'Patterns & Fractional Turns (1/4, 1/2 turn)',
              subTopics: ['சுழற்சி அமைப்புகள்', 'எண் கோலங்கள்'],
            },
          ],
        },
        '2': {
          termNameTa: 'இரண்டாம் பருவம் (Term 2)',
          termNameEn: 'Term 2',
          units: [
            {
              id: 'c4_t2_mat_1',
              number: 1,
              titleTa: 'பெருக்கல் & நீள் வகுத்தல் (Multiplication & Long Division)',
              titleEn: 'Multiplication & Long Division',
              subTopics: ['3 இலக்க எண்ணை 2 இலக்க எண்ணால் பெருக்குதல்', 'நீள் வகுத்தல் முறை (ஈவு மற்றும் மீதி காணுதல்)', 'வார்த்தைக் கணக்குகள்'],
            },
            {
              id: 'c4_t2_mat_2',
              number: 2,
              titleTa: 'அளவைகள் - மெட்ரிக் அளவுகள் (Metric Measurements)',
              titleEn: 'Metric Measures - Length, Mass, Volume',
              subTopics: ['கிலோமீட்டர், மீட்டர், சென்டிமீட்டர் மாற்றம் (1 km = 1000 m)', 'கிலோகிராம், கிராம் மாற்றம் (1 kg = 1000 g)', 'லிட்டர், மில்லிலிட்டர் கணக்குகள்'],
            },
            {
              id: 'c4_t2_mat_3',
              number: 3,
              titleTa: 'நேரம் - 24 மணி நேரக் கடிகாரம் (24-Hour Time Format)',
              titleEn: 'Time & Railway 24-Hour Clock',
              subTopics: ['12 மணி நேரம் மற்றும் 24 மணி நேர கடிகார ஒப்பீடு', 'கால இடைவெளி கணக்கிடுதல்'],
            },
          ],
        },
        '3': {
          termNameTa: 'மூன்றாம் பருவம் (Term 3)',
          termNameEn: 'Term 3',
          units: [
            {
              id: 'c4_t3_mat_1',
              number: 1,
              titleTa: 'பின்னங்கள் (Fractions - Like & Unlike Fractions)',
              titleEn: 'Fractions - Types and Operations',
              subTopics: ['தகு பின்னம், தகா பின்னம், கலப்பு பின்னம்', 'ஓரினப் பின்னங்களின் கூட்டல் மற்றும் கழித்தல்', 'சமமான பின்னங்கள் (Equivalent fractions)'],
            },
            {
              id: 'c4_t3_mat_2',
              number: 2,
              titleTa: 'சுற்றளவு மற்றும் பரப்பளவு (Perimeter and Area)',
              titleEn: 'Perimeter and Area of Rectangles and Squares',
              subTopics: ['செவ்வகத்தின் சுற்றளவு = 2 × (நீளம் + அகலம்)', 'சதுரத்தின் சுற்றளவு = 4 × பக்கம்', 'செவ்வக மற்றும் சதுர பரப்பளவு சூத்திரங்கள்'],
            },
            {
              id: 'c4_t3_mat_3',
              number: 3,
              titleTa: 'தகவல் செயலாக்கம் & வரைபடங்கள் (Data Handling & Bar Graph)',
              titleEn: 'Bar Graphs and Tally Marks',
              subTopics: ['நேர்க்கோட்டுக் குறிகள் (Tally marks)', 'பட்டை வரைபடம் வாசித்தல் மற்றும் வரைதல்'],
            },
          ],
        },
      },
    },
    {
      subjectId: 'science',
      subjectNameTa: 'அறிவியல் (Science)',
      subjectNameEn: 'Science',
      terms: {
        '1': {
          termNameTa: 'முதல் பருவம் (Term 1)',
          termNameEn: 'Term 1',
          units: [
            {
              id: 'c4_t1_sci_1',
              number: 1,
              titleTa: 'எனது உடல் உறுப்பு மண்டலங்கள் (Internal Organ Systems)',
              titleEn: 'Internal Organ Systems',
              subTopics: ['மூளை, இதயம், நுரையீரல், வயிறு, சிறுநீரகம், எலும்புக்கூடு', 'உடல் நலம் மற்றும் தொற்றுநோய் தடுப்பு'],
            },
            {
              id: 'c4_t1_sci_2',
              number: 2,
              titleTa: 'பருப்பொருட்கள் மற்றும் பொருட்கள் (Matter and Materials)',
              titleEn: 'Properties of Matter & Materials',
              subTopics: ['திண்மம், திரவம், வாயுக்களின் பண்புகள்', 'வெப்பத்தால் ஏற்படும் நிலைகளான உருகுதல், உறைதல், ஆவியாதல், சுருங்குதல்'],
            },
            {
              id: 'c4_t1_sci_3',
              number: 3,
              titleTa: 'வேலை மற்றும் ஆற்றல் (Work and Energy)',
              titleEn: 'Work and Forms of Energy',
              subTopics: ['வேலை = விசை × இடப்பெயர்ச்சி', 'சூரிய ஆற்றல், காற்று ஆற்றல், நீர் ஆற்றல், மின் ஆற்றல்', 'ஆற்றல் பாதுகாப்பு'],
            },
          ],
        },
        '2': {
          termNameTa: 'இரண்டாம் பருவம் (Term 2)',
          termNameEn: 'Term 2',
          units: [
            {
              id: 'c4_t2_sci_1',
              number: 1,
              titleTa: 'உணவுப் பாதுகாப்பு மற்றும் ஊட்டச்சத்து (Food Preservation)',
              titleEn: 'Food Nutrients & Preservation',
              subTopics: ['உணவு வீணாவதைத் தடுத்தல்', 'உணவுப் பதப்படுத்தும் முறைகள் (உப்பிடுதல், உலர்த்துதல், குளிரூட்டுதல், பதப்படுத்துதல்)', 'சத்துணவு குறைபாட்டு நோய்கள்'],
            },
            {
              id: 'c4_t2_sci_2',
              number: 2,
              titleTa: 'நீர் சுழற்சி மற்றும் நிலத்தடி நீர் (Water Cycle)',
              titleEn: 'Water Cycle & Conservation',
              subTopics: ['நீர் சுழற்சியின் 4 நிலைகள் (ஆவியாதல், ஆவி சுருங்குதல், வீழ்படிவாதல், சேகரிப்பு)', 'நீர் மாசுபடுவதைத் தடுத்தல்'],
            },
            {
              id: 'c4_t2_sci_3',
              number: 3,
              titleTa: 'தாவரங்கள் - ஒளிச்சேர்க்கை (Plants & Photosynthesis)',
              titleEn: 'Plants Structure and Photosynthesis',
              subTopics: ['ஒளிச்சேர்க்கை மூலப்பொருட்கள் (சூரிய ஒளி, குளோரோபில், நீர், CO2)', 'தாவரங்களின் சுவாசம் மற்றும் இனப்பெருக்கம்'],
            },
          ],
        },
        '3': {
          termNameTa: 'மூன்றாம் பருவம் (Term 3)',
          termNameEn: 'Term 3',
          units: [
            {
              id: 'c4_t3_sci_1',
              number: 1,
              titleTa: 'விலங்குலகம் மற்றும் தகவமைப்புகள் (Animal Adaptations)',
              titleEn: 'Animal Adaptations & Habitats',
              subTopics: ['நிலவாழ், நீர்வாழ், நிலநீர்வாழ், வான்வாழ் விலங்குகள்', 'விலங்குகளின் பாதுகாப்பு உத்திகள் (உருவ மறைப்பு - Camouflage)'],
            },
            {
              id: 'c4_t3_sci_2',
              number: 2,
              titleTa: 'காற்று மற்றும் வளிமண்டலம் (Air and Atmosphere)',
              titleEn: 'Air Composition & Properties',
              subTopics: ['காற்றின் கூட்டுப்பொருள் (நைட்ரஜன் 78%, ஆக்சிஜன் 21%, பிற வாயுக்கள் 1%)', 'காற்றின் அழுத்தம் மற்றும் பாய்மம்'],
            },
          ],
        },
      },
    },
    {
      subjectId: 'social',
      subjectNameTa: 'சமூக அறிவியல் (Social Science)',
      subjectNameEn: 'Social Science',
      terms: {
        '1': {
          termNameTa: 'முதல் பருவம் (Term 1)',
          termNameEn: 'Term 1',
          units: [
            {
              id: 'c4_t1_soc_1',
              number: 1,
              titleTa: 'பண்டைய தமிழகம் - மூவேந்தர்கள் (Ancient Tamil Kingdoms)',
              titleEn: 'The Great Tamil Dynasties - Chera, Chola, Pandya, Pallava',
              subTopics: ['சேரர்கள் (வஞ்சி, வில்-அம்பு கொடி)', 'சோழர்கள் (உறையூர்/தஞ்சாவூர், புலி கொடி)', 'பாண்டியர்கள் (மதுரை, மீன் கொடி)', 'பல்லவர்கள் (காஞ்சிபுரம், நந்தி கொடி)', 'கடையேழு வள்ளல்கள்'],
            },
            {
              id: 'c4_t1_soc_2',
              number: 2,
              titleTa: 'ஐவகை நிலங்கள் (The Five Landscapes of Tamil Land)',
              titleEn: 'Five Types of Land in Sangam Age',
              subTopics: ['குறிஞ்சி (மலையும் மலையைச் சார்ந்த இடமும் - முருகன்)', 'முல்லை (காடும் காட்டைச் சார்ந்த இடமும் - திருமால்)', 'மருதம் (வயலும் வயலைச் சார்ந்த இடமும் - இந்திரன்)', 'நெய்தல் (கடலும் கடலைச் சார்ந்த இடமும் - வருணன்)', 'பாலை (மணலும் மணலைச் சார்ந்த இடமும் - கொற்றவை)'],
            },
            {
              id: 'c4_t1_soc_3',
              number: 3,
              titleTa: 'நகராட்சி மற்றும் மாநகராட்சி (Municipality & Corporation)',
              titleEn: 'Municipalities and Municipal Corporations',
              subTopics: ['நகராட்சி தலைவர், ஆணையர் பணிகள்', 'மாநகராட்சி மேயர்', 'உள்ளாட்சி அமைப்புகளின் வருவாய் மற்றும் பணிகள்'],
            },
          ],
        },
        '2': {
          termNameTa: 'இரண்டாம் பருவம் (Term 2)',
          termNameEn: 'Term 2',
          units: [
            {
              id: 'c4_t2_soc_1',
              number: 1,
              titleTa: 'தமிழ்நாட்டின் வரலாற்றுச் சிறப்புமிக்க கோட்டைகள் மற்றும் அரண்மனைகள்',
              titleEn: 'Forts and Palaces of Tamil Nadu',
              subTopics: ['வேலூர் கோட்டை', 'செஞ்சி கோட்டை (தென்னிந்தியாவின் ட்ராய்)', 'திண்டுக்கல் கோட்டை', 'திருமலை நாயக்கர் அரண்மனை', 'பத்மநாபபுரம் அரண்மனை'],
            },
            {
              id: 'c4_t2_soc_2',
              number: 2,
              titleTa: 'தமிழ்நாட்டின் இயற்கை அமைப்புகள் (Physiography of Tamil Nadu)',
              titleEn: 'Physical Features of Tamil Nadu',
              subTopics: ['மேற்குத் தொடர்ச்சி மலை மற்றும் கிழக்குத் தொடர்ச்சி மலை', 'காவிரி, வைகை, தாமிரபரணி ஆறுகள்', 'பீடபூமிகள் மற்றும் சமவெளிகள்'],
            },
            {
              id: 'c4_t2_soc_3',
              number: 3,
              titleTa: 'போக்குவரத்து முறைகள் (Transportation Systems)',
              titleEn: 'Modes of Transport in Tamil Nadu',
              subTopics: ['சாலைப் போக்குவரத்து (NH/SH)', 'இரயில்வே போக்குவரத்து', 'துறைமுகங்கள் (சென்னை, தூத்துக்குடி, எண்ணூர்)', 'விமான நிலையங்கள்'],
            },
          ],
        },
        '3': {
          termNameTa: 'மூன்றாம் பருவம் (Term 3)',
          termNameEn: 'Term 3',
          units: [
            {
              id: 'c4_t3_soc_1',
              number: 1,
              titleTa: 'தமிழ்நாட்டின் கனிம வளங்கள் மற்றும் தொழிலகங்கள் (Minerals & Industries)',
              titleEn: 'Minerals and Industries in Tamil Nadu',
              subTopics: ['நெய்வேலி நிலக்கரி (NLC)', 'சேலம் இரும்பு உருக்காலை', 'கோயம்புத்தூர் - தென்னிந்தியாவின் மான்செஸ்டர்', 'சிவகாசி பட்டாசு & அச்சுத் தொழில்'],
            },
            {
              id: 'c4_t3_soc_2',
              number: 2,
              titleTa: 'குழந்தைகளின் உரிமைகள் மற்றும் பாதுகாப்பு (Child Rights & Safety)',
              titleEn: 'Child Rights and POCSO / Helpline 1098',
              subTopics: ['கல்வி பெறும் உரிமை சட்டம் (RTE)', 'குழந்தைத் தொழிலாளர் முறை ஒழிப்பு', 'குழந்தைகள் உதவி எண் (1098)'],
            },
          ],
        },
      },
    },
  ],

  '5': [
    {
      subjectId: 'tamil',
      subjectNameTa: 'தமிழ் (Tamil)',
      subjectNameEn: 'Tamil',
      terms: {
        '1': {
          termNameTa: 'முதல் பருவம் (Term 1)',
          termNameEn: 'Term 1',
          units: [
            {
              id: 'c5_t1_tam_1',
              number: 1,
              titleTa: 'தமிழ்த்தேன் - தமிழின் இனிமை (பாரதிதாசன்) & கவிதை பட்டிமன்றம்',
              titleEn: 'Thamizhin Inimai & Debate',
              subTopics: ['பாரதிதாசன் பாடல் (கனியிடை ஏறிய சுளையும் முற்றல் கழையிடை ஏறிய சாறும்)', 'கவிதை நயம் (எதுகை, மோனை, இயைபு)', 'பட்டிமன்ற உரைநடை'],
            },
            {
              id: 'c5_t1_tam_2',
              number: 2,
              titleTa: 'சான்றோர் மொழி - மூதுரை & கல்விச் செல்வம் மற்றும் பொருட்செல்வம்',
              titleEn: 'Moodhurai & Wealth of Education',
              subTopics: ['அடக்கம் உடையார் அறிவிலர் என்றெண்ணி செய்யுள்', 'கற்க கசடறக் கற்பவை குறள் விளக்கம்', 'கல்வியின் சிறப்பு உரைநடை'],
            },
            {
              id: 'c5_t1_tam_3',
              number: 3,
              titleTa: 'இலக்கணம் - பெயர்ச்சொல், வினைச்சொல் & மரபுத் தொடர்கள்',
              titleEn: 'Grammar - Noun, Verb, Idioms',
              subTopics: ['இடுகுறிப்பெயர் மற்றும் காரணப்பெயர்', 'மரபுச் சொற்கள் (பறவைகளின் ஒலி மரபு, விலங்குகளின் இளமைப் பெயர்)', 'பிரித்து எழுதுக, சேர்த்து எழுதுக'],
            },
          ],
        },
        '2': {
          termNameTa: 'இரண்டாம் பருவம் (Term 2)',
          termNameEn: 'Term 2',
          units: [
            {
              id: 'c5_t2_tam_1',
              number: 1,
              titleTa: 'எது பெரிய உலகம்? & எதையும் திட்டமிட்டு செய்',
              titleEn: 'World Vision & Planning Stories',
              subTopics: ['இயற்கை விழிப்புணர்வு பாடல்', 'திட்டமிடுதலின் முக்கியத்துவம் கதை', 'சொல் வளம்'],
            },
            {
              id: 'c5_t2_tam_2',
              number: 2,
              titleTa: 'சான்றோர் மொழி - நன்னெறி (சிவப்பிரகாச சுவாமிகள்) & உழவுத் தொழில் சிறப்பு',
              titleEn: 'Nanneri & Agriculture Greatness',
              subTopics: ['இன்சொல் விளைநிலமா ஈதலே வித்தாக பாடல்', 'உழவே தலை சிறந்த தொழில்', 'திருக்குறள் - சுழன்றும்ஏர்ப் பின்னது உலகம்'],
            },
            {
              id: 'c5_t2_tam_3',
              number: 3,
              titleTa: 'இலக்கணம் - மூவிடப் பெயர்கள் (தன்மை, முன்னிலை, படர்க்கை)',
              titleEn: 'First, Second, Third Person Pronouns',
              subTopics: ['தன்மை (நான், நாம், நாங்கள்)', 'முன்னிலை (நீ, நீங்கள்)', 'படர்க்கை (அவன், அவள், அவர், அது, அவை)', 'வாக்கியப் பிழை திருத்துதல்'],
            },
          ],
        },
        '3': {
          termNameTa: 'மூன்றாம் பருவம் (Term 3)',
          termNameEn: 'Term 3',
          units: [
            {
              id: 'c5_t3_tam_1',
              number: 1,
              titleTa: 'சிறுபஞ்சமூலம் (காரியாசான்) & அறநெறிச் சாரம்',
              titleEn: 'Sirupanchamoolam & Ethical Verses',
              subTopics: ['கண்ணுக்கு அணிகலம் கண்ணோட்டம் செய்யுள்', 'ஐந்து மூலிகைகளின் மருத்துவ மகத்துவம்', 'செய்யுள் வினா-விடை'],
            },
            {
              id: 'c5_t3_tam_2',
              number: 2,
              titleTa: 'விண்வெளி நாயகர் அப்துல் கலாம் & விழிப்புணர்வு கட்டுரை',
              titleEn: 'APJ Abdul Kalam Biography & Essays',
              subTopics: ['டாக்டர் ஏ.பி.ஜே. அப்துல் கலாம் இளமைக்காலம் மற்றும் சாதனைகள்', 'அக்னி சிறகுகள்', 'கட்டுரை மற்றும் கடிதம் எழுதுதல்'],
            },
            {
              id: 'c5_t3_tam_3',
              number: 3,
              titleTa: 'இலக்கணம் - நிறுத்தற்குறிகள் மற்றும் மயங்கொலிச் சொற்கள் (ர/ற, ல/ள/ழ, ண/ந/ன)',
              titleEn: 'Punctuation and Confusing Letters',
              subTopics: ['மயங்கொலி எழுத்துக்களின் வேறுபாடு (மணம்/மனம், புலி/புளி/புழி)', 'முற்றுப்புள்ளி, காற்புள்ளி, வினாக்குறி, உணர்ச்சிக்குறி'],
            },
          ],
        },
      },
    },
    {
      subjectId: 'english',
      subjectNameTa: 'ஆங்கிலம் (English)',
      subjectNameEn: 'English',
      terms: {
        '1': {
          termNameTa: 'Term 1 (முதல் பருவம்)',
          termNameEn: 'Term 1',
          units: [
            {
              id: 'c5_t1_eng_1',
              number: 1,
              titleTa: 'Exploring Space & Beyond the Universe',
              titleEn: 'Exploring Space & Beyond the Universe',
              subTopics: ['Space travel story (Amutha and Nilavan on Mars)', 'Poem: Beyond the Universe', 'Compound Words (sunflower, star-fish)', 'Collective Nouns (a herd of cattle, a flock of birds)'],
            },
            {
              id: 'c5_t1_eng_2',
              number: 2,
              titleTa: 'My Native Place & A Trip to Grandma’s',
              titleEn: 'Rural Life & Grandma’s Village',
              subTopics: ['Village life and greenery', 'Simple Present vs Present Continuous Tense', 'Homophones and Vocabulary'],
            },
          ],
        },
        '2': {
          termNameTa: 'Term 2 (இரண்டாம் பருவம்)',
          termNameEn: 'Term 2',
          units: [
            {
              id: 'c5_t2_eng_1',
              number: 1,
              titleTa: 'Hospitality & The Gift of Giving',
              titleEn: 'Hospitality & Compassion',
              subTopics: ['Old man’s hospitality story', 'Poem: Mother Nature', 'Degrees of Comparison (Positive, Comparative, Superlative: tall, taller, tallest)'],
            },
            {
              id: 'c5_t2_eng_2',
              number: 2,
              titleTa: 'Sports & The True Winner',
              titleEn: 'Sports & True Sportsmanship',
              subTopics: ['Athletics and courage', 'Past Continuous Tense (was/were playing)', 'Prefixes (un-, dis-, im-) and Suffixes (-ness, -ment, -ful)'],
            },
          ],
        },
        '3': {
          termNameTa: 'Term 3 (மூன்றாம் பருவம்)',
          termNameEn: 'Term 3',
          units: [
            {
              id: 'c5_t3_eng_1',
              number: 1,
              titleTa: 'Five Detectives & Mystery of the Lost Pearl',
              titleEn: 'Five Detectives & Mystery Adventure',
              subTopics: ['Detective team and clue solving', 'Poem: The Mystery', 'Direct and Indirect speech basic sentences', 'Prepositions of movement (through, across, into)'],
            },
            {
              id: 'c5_t3_eng_2',
              number: 2,
              titleTa: 'The Monster Tree & Environmental Protection',
              titleEn: 'Environmental Conservation',
              subTopics: ['Saving trees and wildlife', 'Conjunctions: although, because, since, therefore', 'Formal letter writing to School Headmaster'],
            },
          ],
        },
      },
    },
    {
      subjectId: 'maths',
      subjectNameTa: 'கணிதம் (Mathematics)',
      subjectNameEn: 'Mathematics',
      terms: {
        '1': {
          termNameTa: 'முதல் பருவம் (Term 1)',
          termNameEn: 'Term 1',
          units: [
            {
              id: 'c5_t1_mat_1',
              number: 1,
              titleTa: 'வடிவியல் - கோணங்களின் வகைகள் மற்றும் சமச்சீர்த் தன்மை (Geometry)',
              titleEn: 'Geometry - Types of Angles & Nets of 3D Shapes',
              subTopics: ['செங்கோணம் (90°), குறுங்கோணம், விரிகோணம், நேர்க்கோணம் (180°)', 'கனசதுரம் மற்றும் கனசெவ்வகத்தின் வலைகள் (Nets)'],
            },
            {
              id: 'c5_t1_mat_2',
              number: 2,
              titleTa: 'எண்கள் 1,00,000 வரை (Numbers up to Lakhs)',
              titleEn: 'Numbers up to 1,00,000 & Place Values',
              subTopics: ['இந்திய எண்முறை (இலட்சம், பத்தாயிரம், ஆயிரம், நூறு, பத்து, ஒன்று)', 'கூட்டல் மற்றும் கழித்தல் வாழ்க்கைச் சூழல் கணக்குகள்'],
            },
            {
              id: 'c5_t1_mat_3',
              number: 3,
              titleTa: 'அமைப்புகள் மற்றும் சுழற்சிகள் (Patterns & Rotation angles)',
              titleEn: 'Patterns, Symmetry and Rotational Symmetry',
              subTopics: ['எண் அமைப்புகள், சதுர எண்கள், முக்கோண எண்கள்'],
            },
            {
              id: 'c5_t1_mat_4',
              number: 4,
              titleTa: 'அளவைகள் - நீளம், எடை, கொள்ளளவு (Measurements)',
              titleEn: 'Measurement Conversions & Word Problems',
              subTopics: ['மீட்டர் - கிலோமீட்டர் மாற்றம்', 'கிலோகிராம் - கிராம் கூட்டல் கழித்தல்', 'லிட்டர் - மில்லிலிட்டர் கணக்குகள்'],
            },
          ],
        },
        '2': {
          termNameTa: 'இரண்டாம் பருவம் (Term 2)',
          termNameEn: 'Term 2',
          units: [
            {
              id: 'c5_t2_mat_1',
              number: 1,
              titleTa: 'பெருக்கல் மற்றும் வகுத்தல் (Multiplication & Division of Large Numbers)',
              titleEn: 'Multiplication & Division Operations',
              subTopics: ['4 இலக்க எண்ணை 2 மற்றும் 3 இலக்க எண்ணால் பெருக்குதல்', '4 இலக்க எண்ணை 2 இலக்க எண்ணால் வகுத்தல்', 'சரிபார்த்தல்: வகுபடும் எண் = (ஈவு × வகுக்கும் எண்) + மீதி'],
            },
            {
              id: 'c5_t2_mat_2',
              number: 2,
              titleTa: 'காரணிகள் மற்றும் மடங்குகள் - மீ.சி.ம & மீ.பொ.வ (Factors & Multiples - LCM / HCF)',
              titleEn: 'Factors, Multiples, Prime & Composite Numbers',
              subTopics: ['பகா எண்கள் மற்றும் பகு எண்கள்', 'காரணி செடி முறை (Factor Tree)', 'மீச்சிறு பொது மடங்கு (LCM) மற்றும் மீப்பெரு பொது வகுத்தி (HCF)'],
            },
            {
              id: 'c5_t2_mat_3',
              number: 3,
              titleTa: 'பின்னங்கள் (Fractions - Addition & Subtraction)',
              titleEn: 'Fraction Operations & Word Problems',
              subTopics: ['வேற்றினப் பின்னங்களை ஓரினப் பின்னங்களாக மாற்றுதல்', 'பின்னங்களின் கூட்டல் மற்றும் கழித்தல்'],
            },
          ],
        },
        '3': {
          termNameTa: 'மூன்றாம் பருவம் (Term 3)',
          termNameEn: 'Term 3',
          units: [
            {
              id: 'c5_t3_mat_1',
              number: 1,
              titleTa: 'தசம எண்கள் (Decimals Introduction)',
              titleEn: 'Decimals - Tenths, Hundredths & Currency',
              subTopics: ['பின்னத்தை தசமமாக மாற்றுதல் (1/10 = 0.1, 1/100 = 0.01)', 'தசம எண்களின் கூட்டல் மற்றும் கழித்தல்'],
            },
            {
              id: 'c5_t3_mat_2',
              number: 2,
              titleTa: 'சுற்றளவு மற்றும் பரப்பளவு (Perimeter and Area of Plane Figures)',
              titleEn: 'Perimeter and Area Formulas & Calculations',
              subTopics: ['செவ்வகத்தின் பரப்பளவு = நீளம் × அகலம் (l × b)', 'சதுரத்தின் பரப்பளவு = பக்கம் × பக்கம் (a × a)', 'சுற்றளவு கணக்கீடுகள்'],
            },
            {
              id: 'c5_t3_mat_3',
              number: 3,
              titleTa: 'தகவல் செயலாக்கம் & வரைபடங்கள் (Data Handling & Pie Chart)',
              titleEn: 'Pie Charts and Line Graphs',
              subTopics: ['வட்ட விளக்கப்படம் (Pie chart) வாசித்தல்', 'சராசரி கண்டறிதல் அறிமுகம்'],
            },
          ],
        },
      },
    },
    {
      subjectId: 'science',
      subjectNameTa: 'அறிவியல் (Science)',
      subjectNameEn: 'Science',
      terms: {
        '1': {
          termNameTa: 'முதல் பருவம் (Term 1)',
          termNameEn: 'Term 1',
          units: [
            {
              id: 'c5_t1_sci_1',
              number: 1,
              titleTa: 'மனித உறுப்பு மண்டலங்கள் (Human Organ Systems)',
              titleEn: 'Human Organ Systems in Detail',
              subTopics: ['செரிமான மண்டலம் (வாய், உணவுக்குழாய், இரைப்பை, சிறுகுடல், பெருங்குடல்)', 'சுவாச மண்டலம் (நாசி, மூச்சுக்குழாய், நுரையீரல்)', 'இரத்த ஓட்ட மண்டலம் (இதயம், இரத்த நாளங்கள்)', 'கழிவு நீக்க மண்டலம் (சிறுநீரகம், தோல்)'],
            },
            {
              id: 'c5_t1_sci_2',
              number: 2,
              titleTa: 'பருப்பொருள் மற்றும் பொருட்கள் (Matter, Materials & Changes)',
              titleEn: 'Physical & Chemical Changes of Matter',
              subTopics: ['மீள் மாற்றம் மற்றும் மீளா மாற்றம்', 'கரைப்பான் மற்றும் கரைபொருள்', 'பொருட்களின் வெப்பக் கடத்துதிறன்'],
            },
            {
              id: 'c5_t1_sci_3',
              number: 3,
              titleTa: 'ஆற்றல் மற்றும் ஆற்றல் மாற்றம் (Forms of Energy & Conservation)',
              titleEn: 'Energy Transformation & Renewable Resources',
              subTopics: ['இயக்க ஆற்றல், நிலை ஆற்றல், மின் ஆற்றல், ஒளி ஆற்றல், வெப்ப ஆற்றல்', 'புதுப்பிக்கத்தக்க மற்றும் புதுப்பிக்க இயலாத ஆற்றல் மூலங்கள்'],
            },
          ],
        },
        '2': {
          termNameTa: 'இரண்டாம் பருவம் (Term 2)',
          termNameEn: 'Term 2',
          units: [
            {
              id: 'c5_t2_sci_1',
              number: 1,
              titleTa: 'உணவு சுகாதாரம் மற்றும் நோய் தடுப்பு (Food Hygiene & Diseases)',
              titleEn: 'Food Safety & Communicable Diseases',
              subTopics: ['தொற்று நோய்கள் பரவும் வழிகள் (காற்று, நீர், கொசு, ஈ)', 'வைரஸ், பாக்டீரியா தொற்றுகள்', 'தடுப்பூசியின் முக்கியத்துவம்'],
            },
            {
              id: 'c5_t2_sci_2',
              number: 2,
              titleTa: 'நீர் மேலாண்மை மற்றும் மழைநீர் சேமிப்பு (Water Management)',
              titleEn: 'Water Management & Water Purification',
              subTopics: ['குடிநீர் சுத்திகரிப்பு (குளோரினேஷன், RO முறை)', 'தமிழ்நாட்டின் அணைக்கட்டுகள் மற்றும் ஏரிகள்'],
            },
            {
              id: 'c5_t2_sci_3',
              number: 3,
              titleTa: 'தாவரங்களின் இனப்பெருக்கம் மற்றும் மகரந்தச் சேர்க்கை (Plant Reproduction)',
              titleEn: 'Plant Reproduction & Pollination',
              subTopics: ['மலரின் பாகங்கள் (புல்லி வட்டம், அல்லி வட்டம், மகரந்தத்தாள், சூலகம்)', 'தன் மகரந்தச்சேர்க்கை & அயல் மகரந்தச்சேர்க்கை', 'விதை பரவுதல் முறைகள்'],
            },
          ],
        },
        '3': {
          termNameTa: 'மூன்றாம் பருவம் (Term 3)',
          termNameEn: 'Term 3',
          units: [
            {
              id: 'c5_t3_sci_1',
              number: 1,
              titleTa: 'சுற்றுச்சூழல் மற்றும் கழிவு மேலாண்மை (Environment & 3R Waste Management)',
              titleEn: 'Environment & Solid Waste Management (3Rs)',
              subTopics: ['மக்கும் கழிவுகள் & மக்காத கழிவுகள்', '3R கொள்கை (குறைத்தல் - Reduce, மறுபயன்பாடு - Reuse, மறுசுழற்சி - Recycle)', 'பிளாஸ்டிக் பயன்பாடு தவிர்த்தல்'],
            },
            {
              id: 'c5_t3_sci_2',
              number: 2,
              titleTa: 'அன்றாட வாழ்வில் அறிவியல் (Science in Everyday Life)',
              titleEn: 'Science in Everyday Life & Inventions',
              subTopics: ['பால் தயிராக மாறுதல் (லாக்டோபேசில்லஸ் பாக்டீரியா)', 'மருத்துவ சாதனங்கள் (தெர்மாமீட்டர், ஸ்டெதஸ்கோப்)', 'விண்வெளி ஆய்வுகள் (இஸ்ரோ / சந்திரயான்)'],
            },
          ],
        },
      },
    },
    {
      subjectId: 'social',
      subjectNameTa: 'சமூக அறிவியல் (Social Science)',
      subjectNameEn: 'Social Science',
      terms: {
        '1': {
          termNameTa: 'முதல் பருவம் (Term 1)',
          termNameEn: 'Term 1',
          units: [
            {
              id: 'c5_t1_soc_1',
              number: 1,
              titleTa: 'நமது பூமி மற்றும் கண்டங்கள், பெருங்கடல்கள் (Our Earth & Continents)',
              titleEn: 'Our Earth - Continents and Oceans',
              subTopics: ['7 கண்டங்கள் (ஆசியா, ஆப்பிரிக்கா, வட அமெரிக்கா, தென் அமெரிக்கா, அண்டார்டிகா, ஐரோப்பா, ஆஸ்திரேலியா)', '5 பெருங்கடல்கள் (பசிபிக், அட்லாண்டிக், இந்திய, தென், ஆர்க்டிக்)', 'பூமியின் சுழற்சி மற்றும் பருவ காலங்கள்'],
            },
            {
              id: 'c5_t1_soc_2',
              number: 2,
              titleTa: 'வரலாற்றுக் காலத்திற்கு முந்தைய மனிதன் (Pre-Historic Man)',
              titleEn: 'Pre-Historic Period and Evolution',
              subTopics: ['பழங்கற்காலம், புதிய கற்காலம், வெண்கலக் காலம், இரும்புக் காலம்', 'நெருப்பின் பயன்பாடு மற்றும் சக்கர கண்டுபிடிப்பு', 'பாறை ஓவியங்கள்'],
            },
            {
              id: 'c5_t1_soc_3',
              number: 3,
              titleTa: 'நல்ல குடிமகன் பண்புகள் (Good Citizen & Fundamental Duties)',
              titleEn: 'Good Citizen & Value Education',
              subTopics: ['நேர்மை, கடமை, தேசப்பற்று, சமத்துவம்', 'பொதுச் சொத்துக்களைப் பாதுகாத்தல்'],
            },
          ],
        },
        '2': {
          termNameTa: 'இரண்டாம் பருவம் (Term 2)',
          termNameEn: 'Term 2',
          units: [
            {
              id: 'c5_t2_soc_1',
              number: 1,
              titleTa: 'பண்டைய தமிழக அகழ்வாராய்ச்சிகள் (Ancient Excavations in Tamil Nadu)',
              titleEn: 'Excavations in Tamil Nadu (Keeladi, Adichanallur)',
              subTopics: ['கீழடி அகழ்வாராய்ச்சி (வைகை நதிக்கரை நாகரிகம்)', 'ஆதிச்சநல்லூர் (முதுமக்கள் தாழிகள்)', 'கொடுமணல் & பூம்புகார்'],
            },
            {
              id: 'c5_t2_soc_2',
              number: 2,
              titleTa: 'இந்தியாவின் இயற்கை அமைப்புகள் (Physical Features of India)',
              titleEn: 'Physical Features of India',
              subTopics: ['இமயமலைத் தொடர்', 'வட இந்திய சமவெளிகள்', 'தக்காணப் பீடபூமி', 'கடற்கரைச் சமவெளிகள் & தீவுகள் (அந்தமான் நிக்கோபார், லட்சத்தீவுகள்)'],
            },
            {
              id: 'c5_t2_soc_3',
              number: 3,
              titleTa: 'மாவட்ட நிர்வாகம் (District Administration)',
              titleEn: 'District Collector & Administration Roles',
              subTopics: ['மாவட்ட ஆட்சியர், மாவட்ட காவல்துறை கண்காணிப்பாளர் (SP)', 'மாவட்ட முதன்மை கல்வி அலுவலர் (CEO)', 'வருவாய்த்துறை மற்றும் நீதிமன்றங்கள்'],
            },
          ],
        },
        '3': {
          termNameTa: 'மூன்றாம் பருவம் (Term 3)',
          termNameEn: 'Term 3',
          units: [
            {
              id: 'c5_t3_soc_1',
              number: 1,
              titleTa: 'இந்திய அரசமைப்பு சட்டம் மற்றும் மக்களாட்சி (Indian Constitution & Democracy)',
              titleEn: 'Indian Constitution & Democratic Rights',
              subTopics: ['அரசமைப்பு சட்ட வரைவுக்குழு தலைவர் டாக்டர் பி.ஆர். அம்பேத்கர்', 'அடிப்படை உரிமைகள் மற்றும் அடிப்படை கடமைகள்', 'குடியரசு தினம் & சுதந்திர தினம்'],
            },
            {
              id: 'c5_t3_soc_2',
              number: 2,
              titleTa: 'பேரிடர் மேலாண்மை மற்றும் பாதுகாப்பு (Disaster Management)',
              titleEn: 'Disaster Management & Preparedness',
              subTopics: ['இயற்கை பேரிடர்கள் (வெள்ளம், நிலநடுக்கம், சுனாமி, புயல்)', 'செயற்கை பேரிடர்கள் மற்றும் அவசர உதவி எண்கள் (1070 / 1077)'],
            },
          ],
        },
      },
    },
  ],
};
