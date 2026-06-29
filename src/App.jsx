import { useState, useEffect } from "react";

function DadChar({ mood = "happy", size = 120 }) {
  const mouths = {
    happy:"M 36 64 Q 50 76 64 64", excited:"M 30 62 Q 50 80 70 62",
    thinking:"M 38 67 Q 50 70 62 67", wrong:"M 36 70 Q 50 62 64 70",
    celebrate:"M 28 60 Q 50 84 72 60", neutral:"M 36 66 Q 50 69 64 66",
  };
  const brows = {
    happy:["M 28 36 Q 38 30 46 34","M 54 34 Q 62 30 72 36"],
    excited:["M 26 32 Q 38 22 46 30","M 54 30 Q 62 22 74 32"],
    thinking:["M 28 37 Q 38 31 46 35","M 54 33 Q 62 30 72 36"],
    wrong:["M 28 38 Q 38 34 44 37","M 56 37 Q 62 34 72 38"],
    celebrate:["M 24 30 Q 36 20 46 28","M 54 28 Q 64 20 76 30"],
    neutral:["M 28 37 Q 38 32 44 36","M 56 36 Q 62 32 72 37"],
  };
  const m = mouths[mood]||mouths.happy;
  const b = brows[mood]||brows.happy;
  const ey = (mood==="excited"||mood==="celebrate") ? 5.5 : 3.8;
  return (
    <svg width={size} height={size*1.25} viewBox="0 0 100 130" fill="none">
      <ellipse cx="50" cy="126" rx="26" ry="4" fill="rgba(0,0,0,0.10)"/>
      <rect x="16" y="86" width="68" height="44" rx="22" fill="#DBEAFE"/>
      <rect x="36" y="86" width="28" height="44" rx="5" fill="#BFDBFE"/>
      <path d="M 32 90 Q 50 98 68 90 Q 68 96 50 100 Q 32 96 32 90Z" fill="#93C5FD" opacity="0.7"/>
      <ellipse cx="18" cy="106" rx="8" ry="6" fill="#A7F3D0" opacity="0.8"/>
      <ellipse cx="82" cy="106" rx="8" ry="6" fill="#A7F3D0" opacity="0.8"/>
      <rect x="78" y="94" width="3" height="22" rx="1.5" fill="#6B7280"/>
      <rect x="76" y="93" width="7" height="4" rx="2" fill="#374151"/>
      <rect x="56" y="90" width="18" height="12" rx="3" fill="#fff" stroke="#93C5FD" strokeWidth="1"/>
      <rect x="58" y="92" width="8" height="2" rx="1" fill="#3B82F6"/>
      <rect x="43" y="79" width="14" height="13" rx="6" fill="#E8B88A"/>
      <ellipse cx="50" cy="52" rx="27" ry="29" fill="#E8B88A"/>
      <path d="M 23 44 Q 24 17 50 16 Q 76 17 77 44 Q 68 26 50 25 Q 32 26 23 44Z" fill="#111827"/>
      <ellipse cx="23" cy="42" rx="4" ry="6" fill="#111827"/>
      <ellipse cx="77" cy="42" rx="4" ry="6" fill="#111827"/>
      <ellipse cx="23" cy="52" rx="5" ry="7" fill="#D4956A"/>
      <ellipse cx="77" cy="52" rx="5" ry="7" fill="#D4956A"/>
      <rect x="25" y="44" width="19" height="12" rx="4" fill="none" stroke="#1F2937" strokeWidth="2.2"/>
      <rect x="56" y="44" width="19" height="12" rx="4" fill="none" stroke="#1F2937" strokeWidth="2.2"/>
      <line x1="44" y1="50" x2="56" y2="50" stroke="#1F2937" strokeWidth="2"/>
      <line x1="21" y1="50" x2="25" y2="50" stroke="#1F2937" strokeWidth="2"/>
      <line x1="75" y1="50" x2="79" y2="50" stroke="#1F2937" strokeWidth="2"/>
      <ellipse cx="34.5" cy="50" rx="5" ry={ey} fill="#1F2937"/>
      <ellipse cx="65.5" cy="50" rx="5" ry={ey} fill="#1F2937"/>
      <ellipse cx="33" cy="48" rx="1.8" ry="1.4" fill="#fff"/>
      <ellipse cx="64" cy="48" rx="1.8" ry="1.4" fill="#fff"/>
      <path d={b[0]} stroke="#111827" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
      <path d={b[1]} stroke="#111827" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
      <path d={m} stroke="#C2713A" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
      <ellipse cx="27" cy="60" rx="6" ry="4" fill="#F9A8A8" opacity="0.35"/>
      <ellipse cx="73" cy="60" rx="6" ry="4" fill="#F9A8A8" opacity="0.35"/>
    </svg>
  );
}

function MomChar({ mood = "happy", size = 100 }) {
  const mouths = {
    happy:"M 36 64 Q 50 76 64 64", excited:"M 30 62 Q 50 80 70 62",
    cheer:"M 28 60 Q 50 82 72 60", neutral:"M 38 66 Q 50 69 62 66",
  };
  const m = mouths[mood]||mouths.happy;
  const ey = (mood==="excited"||mood==="cheer") ? 5 : 3.8;
  return (
    <svg width={size} height={size*1.25} viewBox="0 0 100 130" fill="none">
      <ellipse cx="50" cy="126" rx="24" ry="4" fill="rgba(0,0,0,0.09)"/>
      <rect x="18" y="86" width="64" height="44" rx="22" fill="#FDF2F8"/>
      <ellipse cx="38" cy="100" rx="6" ry="8" fill="#F9A8D4" opacity="0.5"/>
      <ellipse cx="62" cy="96" rx="5" ry="7" fill="#FDA4AF" opacity="0.4"/>
      <path d="M 38 87 Q 50 94 62 87" stroke="#FCD34D" strokeWidth="2" fill="none"/>
      <circle cx="50" cy="94" r="3" fill="#FCD34D"/>
      <rect x="43" y="79" width="14" height="12" rx="6" fill="#E8B88A"/>
      <ellipse cx="50" cy="52" rx="27" ry="28" fill="#E8B88A"/>
      <path d="M 23 46 Q 24 16 50 15 Q 76 16 77 46 Q 68 26 50 24 Q 32 26 23 46Z" fill="#111827"/>
      <rect x="19" y="44" width="10" height="22" rx="4" fill="#111827"/>
      <rect x="71" y="44" width="10" height="22" rx="4" fill="#111827"/>
      <rect x="19" y="62" width="62" height="5" rx="2.5" fill="#111827"/>
      <ellipse cx="23" cy="54" rx="5" ry="6" fill="#D4956A"/>
      <ellipse cx="77" cy="54" rx="5" ry="6" fill="#D4956A"/>
      <circle cx="23" cy="62" r="3" fill="#FCD34D"/>
      <circle cx="77" cy="62" r="3" fill="#FCD34D"/>
      <ellipse cx="35" cy="50" rx="5.5" ry={ey} fill="#1F2937"/>
      <ellipse cx="65" cy="50" rx="5.5" ry={ey} fill="#1F2937"/>
      <ellipse cx="33.5" cy="48" rx="2" ry="1.5" fill="#fff"/>
      <ellipse cx="63.5" cy="48" rx="2" ry="1.5" fill="#fff"/>
      <path d="M 27 38 Q 36 32 44 36" stroke="#111827" strokeWidth="2.2" fill="none" strokeLinecap="round"/>
      <path d="M 56 36 Q 64 32 73 38" stroke="#111827" strokeWidth="2.2" fill="none" strokeLinecap="round"/>
      <path d={m} stroke="#E11D48" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
      <ellipse cx="27" cy="60" rx="7" ry="4.5" fill="#FDA4AF" opacity="0.45"/>
      <ellipse cx="73" cy="60" rx="7" ry="4.5" fill="#FDA4AF" opacity="0.45"/>
    </svg>
  );
}

function Girl4({ size = 70 }) {
  return (
    <svg width={size} height={size*1.3} viewBox="0 0 100 130" fill="none">
      <ellipse cx="50" cy="126" rx="20" ry="3.5" fill="rgba(0,0,0,0.08)"/>
      <rect x="24" y="82" width="52" height="44" rx="20" fill="#FBCFE8"/>
      <path d="M 40 84 Q 50 90 60 84 Q 54 88 50 92 Q 46 88 40 84Z" fill="#F9A8D4"/>
      <rect x="44" y="76" width="12" height="10" rx="5" fill="#E8B88A"/>
      <ellipse cx="50" cy="50" rx="24" ry="26" fill="#E8B88A"/>
      <path d="M 26 46 Q 27 20 50 18 Q 73 20 74 46 Q 66 28 50 27 Q 34 28 26 46Z" fill="#111827"/>
      <ellipse cx="20" cy="46" rx="7" ry="9" fill="#111827"/>
      <ellipse cx="80" cy="46" rx="7" ry="9" fill="#111827"/>
      <circle cx="20" cy="52" r="4" fill="#EC4899"/>
      <circle cx="80" cy="52" r="4" fill="#EC4899"/>
      <ellipse cx="16" cy="62" rx="5" ry="12" fill="#111827" transform="rotate(-15 16 62)"/>
      <ellipse cx="84" cy="62" rx="5" ry="12" fill="#111827" transform="rotate(15 84 62)"/>
      <ellipse cx="37" cy="49" rx="6" ry="7" fill="#1F2937"/>
      <ellipse cx="63" cy="49" rx="6" ry="7" fill="#1F2937"/>
      <ellipse cx="35" cy="46" rx="2.5" ry="2" fill="#fff"/>
      <ellipse cx="61" cy="46" rx="2.5" ry="2" fill="#fff"/>
      <path d="M 30 40 Q 38 35 44 38" stroke="#111827" strokeWidth="2" fill="none" strokeLinecap="round"/>
      <path d="M 56 38 Q 62 35 70 40" stroke="#111827" strokeWidth="2" fill="none" strokeLinecap="round"/>
      <path d="M 36 58 Q 50 68 64 58" stroke="#C2713A" strokeWidth="2.2" fill="none" strokeLinecap="round"/>
      <ellipse cx="26" cy="57" rx="8" ry="5" fill="#FCA5A5" opacity="0.55"/>
      <ellipse cx="74" cy="57" rx="8" ry="5" fill="#FCA5A5" opacity="0.55"/>
    </svg>
  );
}

function Baby1({ size = 55 }) {
  return (
    <svg width={size} height={size*1.3} viewBox="0 0 100 130" fill="none">
      <ellipse cx="50" cy="126" rx="18" ry="3" fill="rgba(0,0,0,0.07)"/>
      <rect x="28" y="80" width="44" height="46" rx="22" fill="#A5F3FC"/>
      <circle cx="46" cy="118" r="2" fill="#67E8F9"/><circle cx="54" cy="118" r="2" fill="#67E8F9"/>
      <rect x="44" y="74" width="12" height="10" rx="5" fill="#EBC49F"/>
      <ellipse cx="50" cy="48" rx="26" ry="27" fill="#EBC49F"/>
      <path d="M 30 34 Q 50 18 70 34 Q 60 24 50 22 Q 40 24 30 34Z" fill="#1F2937"/>
      <path d="M 48 22 Q 52 16 56 22" stroke="#1F2937" strokeWidth="3" fill="none" strokeLinecap="round"/>
      <ellipse cx="24" cy="50" rx="6" ry="7" fill="#D4956A"/>
      <ellipse cx="76" cy="50" rx="6" ry="7" fill="#D4956A"/>
      <ellipse cx="37" cy="50" rx="7" ry="7.5" fill="#1F2937"/>
      <ellipse cx="63" cy="50" rx="7" ry="7.5" fill="#1F2937"/>
      <ellipse cx="34.5" cy="47" rx="3" ry="2.5" fill="#fff"/>
      <ellipse cx="60.5" cy="47" rx="3" ry="2.5" fill="#fff"/>
      <path d="M 41 63 Q 50 70 59 63" stroke="#C2713A" strokeWidth="2" fill="none" strokeLinecap="round"/>
      <circle cx="50" cy="71" r="4" fill="#67E8F9" opacity="0.5"/>
      <ellipse cx="24" cy="58" rx="10" ry="7" fill="#FCA5A5" opacity="0.5"/>
      <ellipse cx="76" cy="58" rx="10" ry="7" fill="#FCA5A5" opacity="0.5"/>
    </svg>
  );
}
// ═══════════════════════════════════════════════════════════════
// СПЕЦИАЛИЗАЦИИ
// ═══════════════════════════════════════════════════════════════

const SPECIALIZATIONS = [
  { id:"surgeon",    icon:"🔪", title:"Хирург-ортопед",      desc:"Удаление, импланты, протезирование",    color:"#EF4444" },
  { id:"therapist",  icon:"🦷", title:"Терапевт",             desc:"Кариес, каналы, реставрации",           color:"#0EA5E9" },
  { id:"ortho",      icon:"😁", title:"Ортодонт",             desc:"Брекеты, элайнеры, прикус",             color:"#8B5CF6" },
  { id:"pediatric",  icon:"👶", title:"Детский стоматолог",   desc:"Дети, молочные зубы, профилактика",     color:"#F59E0B" },
  { id:"assistant",  icon:"🩺", title:"Ассистент",            desc:"Помощь врачу, инструменты, общение",    color:"#10B981" },
  { id:"admin",      icon:"📋", title:"Администратор",        desc:"Запись, страховка, общение с пациентами",color:"#6366F1" },
];

// Уроки для ассистента — пример дополнительного контента
const ASSISTANT_UNITS = [
  { id:"a1", title:"Reception Desk", titleRu:"Стойка регистрации", color:"#10B981", icon:"📋", char:"girl",
    lessons:[
      { id:"a1l1", day:1, title:"Greeting & Booking", titleRu:"Приветствие и запись", icon:"📞", xp:10, keyword:"appointment",
        cards:[
          {w:"Good morning, how can I help you?",t:"Доброе утро, чем могу помочь?",e:"Always greet warmly at reception.",i:"👋",new:true},
          {w:"Would you like to book an appointment?",t:"Хотите записаться на приём?",e:"Book an appointment for next Tuesday.",i:"📅",new:false},
          {w:"Which dentist would you prefer?",t:"К какому врачу вы хотите?",e:"Dr. Smith is available on Thursday.",i:"👨‍⚕️",new:false},
          {w:"Please take a seat.",t:"Пожалуйста, присаживайтесь.",e:"The doctor will be with you shortly.",i:"🪑",new:false},
        ],
        quiz:[
          {type:"mcq",p:"Как поприветствовать пациента на ресепшн?",a:"Good morning, how can I help you?",o:["Good morning, how can I help you?","What do you want?","Yes?","Come in."]},
          {type:"translate",p:"Переведи:",prompt:"Would you like to book an appointment?",a:"Хотите записаться на приём?",o:["Хотите записаться на приём?","Как вы себя чувствуете?","Когда вы пришли?","Есть ли у вас страховка?"]},
          {type:"listen",word:"appointment",p:"Что ты услышал?",a:"appointment",o:["appointment","payment","department","treatment"]},
          {type:"wordbank",p:"Составь фразу:",prompt:"Please take a ___",a:"Please take a seat",extra:["stand","walk","break"],o:[]},
        ]},
      { id:"a1l2", day:2, title:"Insurance & Payment", titleRu:"Страховка и оплата", icon:"💳", xp:10, keyword:"insurance",
        cards:[
          {w:"Do you have dental insurance?",t:"Есть ли у вас страховка?",e:"Please show me your insurance card.",i:"📋",new:true},
          {w:"Your copay is $20.",t:"Ваш взнос составляет $20.",e:"We accept card or cash.",i:"💳",new:false},
          {w:"I'll need a referral number.",t:"Мне нужен номер направления.",e:"Do you have a referral from your GP?",i:"🔢",new:false},
          {w:"Here is your receipt.",t:"Вот ваш чек.",e:"Thank you — have a great day!",i:"🧾",new:false},
        ],
        quiz:[
          {type:"mcq",p:"Как спросить о страховке?",a:"Do you have dental insurance?",o:["Do you have dental insurance?","Do you have cash?","Are you a patient?","What is your name?"]},
          {type:"translate",prompt:"copay",p:"Что значит 'copay'?",a:"взнос пациента",o:["взнос пациента","страховка","рецепт","чек"]},
          {type:"listen",word:"insurance",p:"Что ты услышал?",a:"insurance",o:["insurance","entrance","distance","assistance"]},
          {type:"type",p:"Как сказать 'вот ваш чек' по-английски?",a:"here is your receipt",alts:["here's your receipt","here is your receipt."]},
        ]},
    ]},
  { id:"a2", title:"Chairside Assistance", titleRu:"Помощь у кресла", color:"#06B6D4", icon:"🩺", char:"dad",
    lessons:[
      { id:"a2l1", day:3, title:"Instruments", titleRu:"Инструменты", icon:"🔧", xp:12, keyword:"suction",
        cards:[
          {w:"suction",t:"слюноотсос",e:"Pass me the suction, please.",i:"💧",new:true},
          {w:"retractor",t:"ретрактор",e:"Hold the retractor here.",i:"🔧",new:false},
          {w:"three-in-one syringe",t:"трёхфункциональный шприц",e:"Air, water, or spray.",i:"💨",new:false},
          {w:"mixing the material",t:"замешивать материал",e:"Mix the composite for 30 seconds.",i:"🧪",new:false},
        ],
        quiz:[
          {type:"mcq",p:"'Suction' — это?",a:"слюноотсос",o:["слюноотсос","бор","зеркало","шприц"]},
          {type:"listen",word:"suction",p:"Что ты услышал?",a:"suction",o:["suction","section","syringe","surgeon"]},
          {type:"wordbank",p:"Составь команду:",prompt:"Pass me the ___",a:"Pass me the suction",extra:["give","hold","take"],o:[]},
          {type:"translate",prompt:"retractor",p:"Что такое 'retractor'?",a:"ретрактор",o:["ретрактор","слюноотсос","зеркало","щипцы"]},
        ]},
    ]},
];

const THERAPIST_UNITS = [
  { id:"t1", title:"Restorative Dentistry", titleRu:"Терапевтическая стоматология", color:"#0EA5E9", icon:"🦷", char:"girl",
    lessons:[
      { id:"t1l1", day:1, title:"Cavity Assessment", titleRu:"Оценка кариеса", icon:"🕳", xp:10, keyword:"cavity",
        cards:[
          {w:"You have a cavity on this tooth.",t:"На этом зубе кариес.",e:"We need to treat it before it gets deeper.",i:"🕳",new:true},
          {w:"The decay has reached the dentine.",t:"Кариес достиг дентина.",e:"Deeper than enamel — needs a filling.",i:"🦷",new:false},
          {w:"I'll need to numb the area first.",t:"Сначала нужно обезболить.",e:"Just a small injection.",i:"💉",new:false},
          {w:"This filling will last 5–10 years.",t:"Эта пломба прослужит 5–10 лет.",e:"Avoid hard food for 24 hours.",i:"🛡",new:false},
        ],
        quiz:[
          {type:"mcq",p:"Что такое 'decay reached dentine'?",a:"кариес достиг дентина",o:["кариес достиг дентина","кариес в эмали","пульпит","здоровый зуб"]},
          {type:"translate",prompt:"You have a cavity.",p:"Переведи:",a:"У вас кариес.",o:["У вас кариес.","У вас абсцесс.","У вас трещина.","Всё хорошо."]},
          {type:"listen",word:"cavity",p:"Что ты услышал?",a:"cavity",o:["cavity","gravity","activity","captivity"]},
          {type:"wordbank",p:"Составь предложение:",a:"I need to numb the area",extra:["want","take","drill","tooth"],o:[]},
        ]},
      { id:"t1l2", day:2, title:"Root Canal", titleRu:"Лечение канала", icon:"🔩", xp:12, keyword:"nerve",
        cards:[
          {w:"The nerve is infected.",t:"Нерв инфицирован.",e:"We need to do a root canal treatment.",i:"⚡",new:true},
          {w:"root canal treatment",t:"лечение корневого канала",e:"We remove the infected nerve.",i:"🔩",new:false},
          {w:"This may take 2–3 visits.",t:"Это может занять 2–3 визита.",e:"Complex canals need more time.",i:"📅",new:false},
          {w:"A crown is recommended after.",t:"После рекомендуется коронка.",e:"Root-treated teeth are fragile.",i:"👑",new:false},
        ],
        quiz:[
          {type:"mcq",p:"'Root canal treatment' — это?",a:"лечение корневого канала",o:["лечение корневого канала","удаление зуба","пломба","отбеливание"]},
          {type:"type",p:"Напиши по-английски: 'нерв инфицирован'",a:"the nerve is infected",alts:["nerve is infected"]},
          {type:"listen",word:"root canal",p:"Что ты услышал?",a:"root canal",o:["root canal","boot canal","route panel","root channel"]},
          {type:"wordbank",p:"Составь совет:",a:"A crown is recommended after",extra:["suggested","filling","before","needed"],o:[]},
        ]},
    ]},
];

// Экран выбора специализации
function SpecializationSelect({onSelect}){
  const [chosen,setChosen]=useState(null);
  return(
    <div style={{minHeight:"100vh",background:"linear-gradient(160deg,#0F172A,#1E3A5F)",display:"flex",flexDirection:"column",fontFamily:"inherit"}}>
      <div style={{padding:"32px 22px 16px",textAlign:"center"}}>
        <div style={{fontSize:48,marginBottom:10}}>🦷</div>
        <h2 style={{color:"#fff",fontSize:22,fontWeight:900,margin:"0 0 6px"}}>Выбери специализацию</h2>
        <p style={{color:"#94A3B8",fontSize:13,margin:0}}>Контент подберётся под твою профессию</p>
      </div>
      <div style={{padding:"0 16px 100px",display:"flex",flexDirection:"column",gap:10}}>
        {SPECIALIZATIONS.map(sp=>{
          const isChosen=chosen===sp.id;
          return(
            <div key={sp.id} onClick={()=>{setChosen(sp.id);haptic("select");playSound("flip");}}
              style={{background:isChosen?`linear-gradient(135deg,${sp.color}dd,${sp.color}99)`:"rgba(255,255,255,0.07)",borderRadius:18,padding:"16px 18px",cursor:"pointer",border:isChosen?`2px solid ${sp.color}`:"2px solid rgba(255,255,255,0.1)",transition:"all 0.2s",transform:isChosen?"scale(1.02)":"scale(1)"}}>
              <div style={{display:"flex",alignItems:"center",gap:12}}>
                <div style={{fontSize:30,flexShrink:0}}>{sp.icon}</div>
                <div style={{flex:1}}>
                  <div style={{fontSize:16,fontWeight:800,color:"#fff"}}>{sp.title}</div>
                  <div style={{fontSize:12,color:isChosen?"rgba(255,255,255,0.8)":"#64748B",marginTop:2}}>{sp.desc}</div>
                </div>
                <div style={{width:24,height:24,borderRadius:50,border:`2px solid ${isChosen?"#fff":"rgba(255,255,255,0.3)"}`,background:isChosen?"#fff":"transparent",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0}}>
                  {isChosen&&<div style={{width:10,height:10,borderRadius:50,background:sp.color}}/>}
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div style={{position:"fixed",bottom:0,left:0,right:0,padding:"16px 20px",background:"rgba(15,23,42,0.95)",borderTop:"1px solid rgba(255,255,255,0.1)"}}>
        <Btn onClick={()=>{if(chosen){haptic("success");onSelect(chosen);}}} disabled={!chosen} color="#0EA5E9">
          {chosen?`Выбрать → ${SPECIALIZATIONS.find(s=>s.id===chosen)?.title}`:"Выбери специализацию ↑"}
        </Btn>
      </div>
    </div>
  );
}
// ═══════════════════════════════════════════════════════════════
// АВТОГЕНЕРАТОР КВИЗОВ ИЗ КАРТОЧЕК
// Берёт карточки урока и создаёт 5 типов заданий автоматически
// ═══════════════════════════════════════════════════════════════

function shuffle(arr){ return [...arr].sort(()=>Math.random()-0.5); }

function getWrongOptions(correct, allCards, field, count=3){
  // берём неправильные варианты из других карточек урока и соседних
  const others = allCards
    .filter(c => c[field] !== correct)
    .map(c => c[field]);
  const shuffled = shuffle(others);
  // если мало вариантов — добавляем дефолтные
  const defaults = field==="t"
    ? ["зуб","десна","боль","укол","рот","нерв","кость","кариес","коронка","протез"]
    : ["tooth","pain","gum","nerve","bone","crown","implant","fill","drill","rinse"];
  const pool = [...new Set([...shuffled, ...defaults.filter(d=>d!==correct)])];
  return pool.slice(0,count);
}

function generateQuizzes(cards, allUnitsCards=[]){
  if(!cards||cards.length===0) return [];
  const pool = [...cards, ...allUnitsCards.slice(0,10)];
  const quizzes = [];

  cards.forEach((card, i) => {
    const wrongEN = getWrongOptions(card.w, pool, "w");
    const wrongRU = getWrongOptions(card.t, pool, "t");

    // Тип 1: MCQ — видишь RU → выбираешь EN
    if(i % 4 === 0){
      quizzes.push({
        type:"mcq",
        p:`Как сказать по-английски: "${card.t}"?`,
        a: card.w,
        o: shuffle([card.w, ...wrongEN.slice(0,3)])
      });
    }
    // Тип 2: MCQ — видишь EN → выбираешь RU
    else if(i % 4 === 1){
      quizzes.push({
        type:"translate",
        prompt: card.w,
        p:`Переведи: "${card.w}"`,
        a: card.t,
        o: shuffle([card.t, ...wrongRU.slice(0,3)])
      });
    }
    // Тип 3: Listen → выбираешь слово
    else if(i % 4 === 2){
      quizzes.push({
        type:"listen",
        word: card.w,
        p:"Послушай и выбери слово:",
        a: card.w,
        o: shuffle([card.w, ...wrongEN.slice(0,3)])
      });
    }
    // Тип 4: Wordbank или Type — составь/напиши
    else {
      // Для коротких слов (1 слово) — type
      if(card.w.split(" ").length <= 2){
        quizzes.push({
          type:"type",
          p:`Напиши по-английски: "${card.t}"`,
          a: card.w.toLowerCase(),
          alts: [card.w.toLowerCase()]
        });
      } else {
        // Для фраз — wordbank
        const words = card.w.split(" ");
        const extraWords = getWrongOptions(card.w, pool, "w")
          .join(" ").split(" ")
          .filter(w => !words.includes(w))
          .slice(0,3);
        quizzes.push({
          type:"wordbank",
          p:`Составь фразу: "${card.t}"`,
          a: card.w,
          extra: extraWords,
          o: []
        });
      }
    }
  });

  // Всегда добавляем финальный MCQ на ключевое слово (new:true)
  const keyCard = cards.find(c=>c.new) || cards[0];
  if(keyCard){
    quizzes.push({
      type:"mcq",
      p:`Главное слово урока — что значит "${keyCard.w}"?`,
      a: keyCard.t,
      o: shuffle([keyCard.t, ...getWrongOptions(keyCard.t, pool, "t")])
    });
  }

  return quizzes;
}
// ═══════════════════════════════════════════════════════════════
// НОВЫЙ ДВИЖОК ЗАДАНИЙ — 5 типов как в Duolingo
// ═══════════════════════════════════════════════════════════════

// Типы заданий:
// mcq      — выбор из вариантов
// listen   — слушаешь → выбираешь
// translate — видишь слово → набираешь перевод (кнопки-плитки)
// wordbank  — составляешь фразу из слов-плиток
// type     — свободный ввод

function QuizEngine({quizzes, lesson, hearts, onLoseHeart, onComplete, onAddMistake, onExit}){
  const [step, setStep] = useState(0);
  const [sel, setSel] = useState(null);
  const [typed, setTyped] = useState("");
  const [wordOrder, setWordOrder] = useState([]);
  const [confirmed, setConfirmed] = useState(false);
  const [localH, setLocalH] = useState(hearts);
  const [xp, setXp] = useState(0);
  const [xpPop, setXpPop] = useState(0);
  const [shake, setShake] = useState(false);
  const [mood, setMood] = useState("happy");
  const [done, setDone] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [streak, setStreak] = useState(0); // consecutive correct

  const q = quizzes[step];
  const totalSteps = quizzes.length;

  // shuffle wordbank on mount
  useEffect(()=>{
    if(q?.type==="wordbank"){
      const words = q.a.split(" ");
      const extra = q.extra||[];
      const all = [...words, ...extra].sort(()=>Math.random()-0.5);
      setWordOrder({available:all, chosen:[]});
    }
    if(q?.type==="listen") speak(q.word||q.a, 0.75);
  }, [step]);

  function getAnswer(){
    if(q.type==="mcq"||q.type==="listen") return sel;
    if(q.type==="translate"||q.type==="type") return typed.trim().toLowerCase();
    if(q.type==="wordbank") return wordOrder.chosen?.join(" ")||"";
    return sel;
  }

  function checkCorrect(answer){
    const correct = q.a.trim().toLowerCase();
    if(q.type==="translate"||q.type==="type"){
      // allow minor typos — 80% match
      if(answer===correct) return true;
      const alts = q.alts||[];
      if(alts.some(a=>answer===a.toLowerCase())) return true;
      return false;
    }
    return answer===correct||answer===q.a;
  }

  function confirm(){
    const answer = getAnswer();
    if(!answer||(q.type==="wordbank"&&wordOrder.chosen?.length===0)) return;
    setConfirmed(true);
    const correct = checkCorrect(answer);
    const earned = Math.round(lesson.xp/Math.max(1,totalSteps));
    if(correct){
      setMood("excited");
      setXp(x=>x+earned);
      setXpPop(earned);
      setStreak(s=>s+1);
      playSound(streak>=2?"complete":"correct");
      haptic("success");
      if(q.type!=="listen") speak(q.a, 0.85);
    } else {
      setMood("wrong");
      setLocalH(h=>Math.max(0,h-1));
      onLoseHeart();
      setShake(true); setTimeout(()=>setShake(false),500);
      playSound("wrong"); haptic("error");
      setStreak(0);
      speak(q.a, 0.8);
      onAddMistake({wrong:answer, correct:q.a, lesson:lesson.title});
    }
  }

  function next(){
    if(localH===0){onExit();return;}
    if(step+1>=totalSteps){
      playSound("complete"); haptic("heavy");
      setShowConfetti(true); setDone(true);
    } else {
      setStep(s=>s+1);
      setSel(null); setTyped(""); setWordOrder([]);
      setConfirmed(false); setMood("thinking");
    }
  }

  const isCorrect = confirmed && checkCorrect(getAnswer());

  if(done) return(
    <div style={{minHeight:"100vh",background:"linear-gradient(160deg,#065F46,#10B981)",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:28,fontFamily:"inherit",textAlign:"center"}}>
      {showConfetti&&<Confetti/>}
      <div style={{display:"flex",gap:6,alignItems:"flex-end",marginBottom:12}}>
        <DadChar mood="celebrate" size={100}/><MomChar mood="cheer" size={88}/><Girl4 size={56}/><Baby1 size={46}/>
      </div>
      <div style={{background:"#fff",borderRadius:24,padding:"26px 22px",maxWidth:340,width:"100%"}}>
        <div style={{fontSize:24,fontWeight:900,color:"#10B981",marginBottom:4}}>🎉 Урок пройден!</div>
        <div style={{color:"#64748B",fontSize:13,marginBottom:18}}>{lesson.icon} {lesson.title}</div>
        <div style={{display:"flex",justifyContent:"center",gap:24,marginBottom:22}}>
          <div><div style={{fontSize:24,fontWeight:800,color:"#10B981"}}>+{xp}</div><div style={{fontSize:12,color:"#94A3B8"}}>XP</div></div>
          <div><div style={{fontSize:20,fontWeight:800,color:"#EF4444"}}>{"❤️".repeat(Math.max(0,localH))||"💔"}</div><div style={{fontSize:12,color:"#94A3B8"}}>жизней</div></div>
        </div>
        <Btn onClick={()=>onComplete(xp)} color="#10B981">Продолжить!</Btn>
      </div>
    </div>
  );

  return(
    <div style={{minHeight:"100vh",background:"#F8FAFC",fontFamily:"inherit",display:"flex",flexDirection:"column",animation:shake?"shake 0.4s":undefined}}>
      {xpPop>0&&<XPPop xp={xpPop} onDone={()=>setXpPop(0)}/>}

      {/* Header */}
      <div style={{background:"#1E293B",padding:"14px 18px",display:"flex",alignItems:"center",gap:12}}>
        <button onClick={onExit} style={{background:"none",border:"none",color:"#94A3B8",fontSize:20,cursor:"pointer"}}>✕</button>
        <div style={{flex:1}}><Bar v={step} m={totalSteps} color="#0EA5E9"/></div>
        <div style={{display:"flex",gap:2}}>{[1,2,3].map(i=><span key={i} style={{fontSize:14,opacity:i<=localH?1:0.25}}>❤️</span>)}</div>
      </div>

      {/* Character */}
      <div style={{display:"flex",justifyContent:"center",padding:"10px 0 0"}}>
        <DadChar mood={mood} size={76}/>
      </div>

      {/* Question area */}
      <div style={{flex:1,padding:"10px 18px",display:"flex",flexDirection:"column",gap:12}}>

        {/* Task label */}
        <div style={{background:"#fff",borderRadius:16,padding:"14px 16px",boxShadow:"0 2px 8px rgba(0,0,0,0.05)"}}>
          <div style={{fontSize:10,color:"#94A3B8",fontWeight:700,marginBottom:4,letterSpacing:1}}>
            {q.type==="listen"?"🔊 ПОСЛУШАЙ И ВЫБЕРИ":
             q.type==="translate"?"🔤 ВЫБЕРИ ПЕРЕВОД":
             q.type==="wordbank"?"🧩 СОСТАВЬ ФРАЗУ":
             q.type==="type"?"⌨️ НАПИШИ ПО-АНГЛИЙСКИ":
             "✅ ВЫБЕРИ ПРАВИЛЬНЫЙ ОТВЕТ"} · {step+1}/{totalSteps}
          </div>
          <div style={{fontSize:15,fontWeight:700,color:"#1E293B",lineHeight:1.5}}>
            {q.type==="listen"
              ? <div style={{display:"flex",alignItems:"center",gap:10}}>
                  <button onClick={()=>speak(q.word||q.a,0.75)} style={{background:"#DBEAFE",border:"none",borderRadius:50,width:52,height:52,fontSize:24,cursor:"pointer",flexShrink:0}}>🔊</button>
                  <span style={{color:"#64748B",fontSize:13}}>Нажми и послушай — что это?</span>
                </div>
              : q.p||q.t||q.prompt}
          </div>
        </div>

        {/* MCQ / Listen */}
        {(q.type==="mcq"||q.type==="listen")&&(
          <div style={{display:"flex",flexDirection:"column",gap:8}}>
            {q.o.map(opt=>{
              const isC=opt===q.a;
              const isSel=sel===opt;
              let bg="#fff",border="2px solid #E2E8F0",col="#1E293B",emoji="";
              if(confirmed&&isC){bg="#D1FAE5";border="2px solid #10B981";col="#065F46";emoji=" ✅";}
              else if(isSel&&confirmed&&!isC){bg="#FEE2E2";border="2px solid #EF4444";col="#991B1B";emoji=" ❌";}
              else if(isSel&&!confirmed){bg="#DBEAFE";border="2px solid #3B82F6";col="#1D4ED8";}
              return(
                <button key={opt} onClick={()=>{if(!confirmed){setSel(opt);haptic("select");playSound("flip");}}}
                  style={{background:bg,border,color:col,borderRadius:13,padding:"13px 14px",fontSize:14,fontWeight:500,textAlign:"left",cursor:confirmed?"default":"pointer",fontFamily:"inherit",lineHeight:1.4,transition:"all 0.15s"}}>
                  {opt}{emoji}
                </button>
              );
            })}
          </div>
        )}

        {/* Translate — tap tiles */}
        {q.type==="translate"&&(
          <div>
            <div style={{fontSize:12,color:"#64748B",marginBottom:8}}>Нажми на правильный перевод:</div>
            <div style={{display:"flex",flexWrap:"wrap",gap:8}}>
              {q.o.map(opt=>{
                const isC=opt===q.a;
                const isSel=sel===opt;
                let bg="#fff",border="2px solid #E2E8F0",col="#1E293B";
                if(confirmed&&isC){bg="#D1FAE5";border="2px solid #10B981";col="#065F46";}
                else if(isSel&&confirmed&&!isC){bg="#FEE2E2";border="2px solid #EF4444";col="#991B1B";}
                else if(isSel&&!confirmed){bg="#DBEAFE";border="2px solid #3B82F6";col="#1D4ED8";}
                return(
                  <button key={opt} onClick={()=>{if(!confirmed){setSel(opt);haptic("select");speak(opt,0.9);}}}
                    style={{background:bg,border,color:col,borderRadius:20,padding:"9px 16px",fontSize:14,fontWeight:600,cursor:confirmed?"default":"pointer",fontFamily:"inherit",boxShadow:"0 2px 4px rgba(0,0,0,0.06)",transition:"all 0.15s"}}>
                    {opt}
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* Word Bank — drag tiles to build phrase */}
        {q.type==="wordbank"&&wordOrder.chosen!==undefined&&(
          <div>
            {/* Answer area */}
            <div style={{minHeight:52,background:"#fff",borderRadius:14,border:"2px dashed #CBD5E1",padding:"10px 12px",marginBottom:12,display:"flex",flexWrap:"wrap",gap:6,alignItems:"center"}}>
              {wordOrder.chosen?.length===0
                ? <span style={{color:"#CBD5E1",fontSize:13}}>Нажми слова снизу ↓</span>
                : wordOrder.chosen.map((w,i)=>(
                  <button key={i} onClick={()=>{
                    if(confirmed)return;
                    haptic("select");
                    setWordOrder(prev=>({available:[...prev.available,w],chosen:prev.chosen.filter((_,j)=>j!==i)}));
                  }} style={{background:"#0EA5E9",color:"#fff",border:"none",borderRadius:12,padding:"7px 12px",fontSize:13,fontWeight:700,cursor:"pointer",fontFamily:"inherit"}}>
                    {w}
                  </button>
                ))}
            </div>
            {/* Available words */}
            <div style={{display:"flex",flexWrap:"wrap",gap:8}}>
              {wordOrder.available?.map((w,i)=>(
                <button key={i} onClick={()=>{
                  if(confirmed)return;
                  haptic("select"); speak(w,1.0);
                  setWordOrder(prev=>({available:prev.available.filter((_,j)=>j!==i),chosen:[...prev.chosen,w]}));
                }} style={{background:"#fff",border:"2px solid #E2E8F0",color:"#1E293B",borderRadius:12,padding:"7px 12px",fontSize:13,fontWeight:600,cursor:"pointer",fontFamily:"inherit",boxShadow:"0 2px 4px rgba(0,0,0,0.05)"}}>
                  {w}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Type — free input */}
        {q.type==="type"&&(
          <div>
            <div style={{fontSize:12,color:"#64748B",marginBottom:8}}>Напиши по-английски:</div>
            <input
              value={typed}
              onChange={e=>setTyped(e.target.value)}
              onKeyDown={e=>e.key==="Enter"&&!confirmed&&confirm()}
              disabled={confirmed}
              placeholder="Введи ответ..."
              style={{width:"100%",border:`2px solid ${confirmed?(isCorrect?"#10B981":"#EF4444"):"#CBD5E1"}`,borderRadius:14,padding:"14px 16px",fontSize:16,fontFamily:"inherit",background:confirmed?(isCorrect?"#D1FAE5":"#FEE2E2"):"#fff",color:"#1E293B",outline:"none",boxSizing:"border-box"}}
            />
            {confirmed&&!isCorrect&&(
              <div style={{display:"flex",alignItems:"center",gap:8,marginTop:8}}>
                <div style={{fontSize:14,color:"#10B981",fontWeight:700}}>✓ {q.a}</div>
                <SpeakBtn text={q.a} size={28}/>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Bottom bar */}
      <div style={{padding:"12px 18px",background:confirmed?(isCorrect?"#D1FAE5":"#FEE2E2"):"#fff",borderTop:"1px solid #E2E8F0"}}>
        {!confirmed
          ? <Btn onClick={confirm}
              disabled={
                (q.type==="mcq"||q.type==="listen"||q.type==="translate")&&!sel ||
                q.type==="type"&&!typed.trim() ||
                q.type==="wordbank"&&(!wordOrder.chosen||wordOrder.chosen.length===0)
              }
              color="#0EA5E9">
              Проверить
            </Btn>
          : <div style={{display:"flex",alignItems:"center",justifyContent:"space-between"}}>
              <div>
                <div style={{fontWeight:800,fontSize:18,color:isCorrect?"#065F46":"#991B1B"}}>{isCorrect?"🔥 Верно!":"💔 Неверно"}</div>
                {!isCorrect&&q.type!=="type"&&(
                  <div style={{display:"flex",alignItems:"center",gap:6,marginTop:2}}>
                    <div style={{fontSize:12,color:"#64748B",maxWidth:210}}>→ {q.a}</div>
                    <SpeakBtn text={q.a} size={26}/>
                  </div>
                )}
              </div>
              <button onClick={next} style={{background:isCorrect?"#10B981":"#EF4444",color:"#fff",border:"none",borderRadius:12,padding:"9px 20px",fontWeight:700,fontSize:14,cursor:"pointer",fontFamily:"inherit"}}>
                Далее →
              </button>
            </div>}
      </div>
      <style>{`@keyframes shake{0%,100%{transform:translateX(0)}25%{transform:translateX(-8px)}75%{transform:translateX(8px)}}`}</style>
    </div>
  );
}
// ── ПЕРСОНАЖ ПО БЛОКУ ────────────────────────────────────────
// u1-u3 → Girl4 (базовые слова)
// u4-u7 → DadChar (фразы)
// u8-u10 → MomChar (диалоги/сложное)

const UNITS = [
  // ════════════════════════════════════════════════
  // БЛОК 1 — Азбука кабинета (базовые слова)
  // ════════════════════════════════════════════════
  { id:"u1", title:"Dental ABC", titleRu:"Азбука кабинета", color:"#06B6D4", icon:"🦷", char:"girl",
    lessons:[
      { id:"l1", day:1, title:"Teeth & Mouth", titleRu:"Зубы и рот", icon:"😁", xp:8, keyword:"tooth",
        cards:[
          {w:"tooth",t:"зуб",e:"This tooth hurts.",i:"🦷",new:true},
          {w:"teeth",t:"зубы",e:"Brush your teeth twice a day.",i:"🦷🦷",new:false},
          {w:"mouth",t:"рот",e:"Open your mouth, please.",i:"👄",new:false},
          {w:"lip",t:"губа",e:"Your lip may feel numb.",i:"💋",new:false},
          {w:"tongue",t:"язык",e:"Stick out your tongue.",i:"👅",new:false},
        ],
        quiz:[
          {type:"mcq",p:"Как по-английски 'зуб'?",a:"tooth",o:["tooth","mouth"]},
          {type:"mcq",p:"Что значит 'teeth'?",a:"зубы",o:["зубы","рот"]},
          {type:"mcq",p:"Как сказать 'рот'?",a:"mouth",o:["mouth","lip"]},
          {type:"mcq",p:"Что значит 'tongue'?",a:"язык",o:["язык","губа"]},
        ]},
      { id:"l2", day:2, title:"Pain & Feelings", titleRu:"Боль и ощущения", icon:"😣", xp:8, keyword:"pain",
        cards:[
          {w:"pain",t:"боль",e:"Do you have any pain?",i:"😣",new:true},
          {w:"hurt",t:"болеть",e:"Does this hurt?",i:"🤕",new:false},
          {w:"ache",t:"ноющая боль",e:"I have a toothache.",i:"😫",new:false},
          {w:"sensitive",t:"чувствительный",e:"This tooth is sensitive to cold.",i:"🥶",new:false},
          {w:"sore",t:"болезненный",e:"My gum is sore.",i:"😖",new:false},
        ],
        quiz:[
          {type:"mcq",p:"Как спросить о боли?",a:"Do you have any pain?",o:["Do you have any pain?","Open wide."]},
          {type:"mcq",p:"Что значит 'hurt'?",a:"болеть",o:["болеть","чувствительный"]},
          {type:"mcq",p:"Как сказать 'чувствительный'?",a:"sensitive",o:["sensitive","sore"]},
          {type:"mcq",p:"'Toothache' — это?",a:"зубная боль",o:["зубная боль","зуб мудрости"]},
        ]},
      { id:"l3", day:3, title:"Basic Commands", titleRu:"Основные команды", icon:"👄", xp:8, keyword:"open",
        cards:[
          {w:"open wide",t:"откройте рот",e:"Open wide, please!",i:"👄",new:true},
          {w:"close",t:"закройте",e:"Now close slowly.",i:"🤐",new:false},
          {w:"bite",t:"прикусите",e:"Bite down gently.",i:"😬",new:false},
          {w:"rinse",t:"прополощите",e:"Please rinse your mouth.",i:"💧",new:false},
          {w:"spit",t:"выплюньте",e:"Now spit it out.",i:"🚿",new:false},
        ],
        quiz:[
          {type:"mcq",p:"'Open wide' значит?",a:"откройте рот",o:["откройте рот","закройте"]},
          {type:"mcq",p:"Как сказать 'прикусите'?",a:"bite",o:["bite","rinse"]},
          {type:"mcq",p:"'Rinse' — это?",a:"прополощите",o:["прополощите","выплюньте"]},
          {type:"mcq",p:"Что значит 'spit'?",a:"выплюньте",o:["выплюньте","прикусите"]},
        ]},
      { id:"l4", day:4, title:"Numbers & Time", titleRu:"Числа и время", icon:"🔢", xp:8, keyword:"scale",
        cards:[
          {w:"scale of 1 to 10",t:"шкала от 1 до 10",e:"Rate your pain on a scale of 1 to 10.",i:"📊",new:true},
          {w:"minutes",t:"минуты",e:"This will take 5 minutes.",i:"⏱",new:false},
          {w:"week",t:"неделя",e:"How long — a week?",i:"📅",new:false},
          {w:"appointment",t:"приём / визит",e:"Your next appointment is Tuesday.",i:"📆",new:false},
          {w:"today",t:"сегодня",e:"Can you come in today?",i:"🗓",new:false},
        ],
        quiz:[
          {type:"mcq",p:"Что такое 'scale of 1 to 10'?",a:"шкала оценки боли",o:["шкала оценки боли","расписание"]},
          {type:"mcq",p:"'Appointment' — это?",a:"приём у врача",o:["приём у врача","анестезия"]},
          {type:"mcq",p:"Как сказать 'сегодня'?",a:"today",o:["today","week"]},
          {type:"mcq",p:"Что значит 'minutes'?",a:"минуты",o:["минуты","часы"]},
        ]},
      { id:"l5", day:5, title:"Yes, No & Simple Answers", titleRu:"Да, нет и простые ответы", icon:"✅", xp:8, keyword:"yes",
        cards:[
          {w:"yes / no",t:"да / нет",e:"Yes, this will hurt a little.",i:"✅❌",new:true},
          {w:"okay",t:"хорошо / понятно",e:"Okay, I understand.",i:"👌",new:false},
          {w:"please",t:"пожалуйста",e:"Please stay still.",i:"🙏",new:false},
          {w:"thank you",t:"спасибо",e:"Thank you for coming in.",i:"🙏",new:false},
          {w:"sorry",t:"извините",e:"I'm sorry — just a little more.",i:"😔",new:false},
        ],
        quiz:[
          {type:"mcq",p:"'Please stay still' значит?",a:"Пожалуйста, не двигайтесь",o:["Пожалуйста, не двигайтесь","Спасибо"]},
          {type:"mcq",p:"Как сказать 'хорошо / понятно'?",a:"okay",o:["okay","sorry"]},
          {type:"mcq",p:"'Thank you' — это?",a:"спасибо",o:["спасибо","пожалуйста"]},
          {type:"mcq",p:"Что значит 'sorry'?",a:"извините",o:["извините","хорошо"]},
        ]},
      { id:"l6", day:6, title:"Parts of the Jaw", titleRu:"Части челюсти", icon:"🦴", xp:8, keyword:"jaw",
        cards:[
          {w:"jaw",t:"челюсть",e:"Your jaw is swollen.",i:"🦴",new:true},
          {w:"upper jaw",t:"верхняя челюсть",e:"The upper jaw is called maxilla.",i:"⬆️",new:false},
          {w:"lower jaw",t:"нижняя челюсть",e:"The lower jaw is called mandible.",i:"⬇️",new:false},
          {w:"gum",t:"десна",e:"Your gum is inflamed.",i:"🔴",new:false},
          {w:"cheek",t:"щека",e:"Bite your cheek? That's common.",i:"😊",new:false},
        ],
        quiz:[
          {type:"mcq",p:"'Jaw' — это?",a:"челюсть",o:["челюсть","десна"]},
          {type:"mcq",p:"Как сказать 'десна'?",a:"gum",o:["gum","cheek"]},
          {type:"mcq",p:"'Upper jaw' — это?",a:"верхняя челюсть",o:["верхняя челюсть","нижняя челюсть"]},
          {type:"mcq",p:"Что такое 'mandible'?",a:"нижняя челюсть",o:["нижняя челюсть","верхняя челюсть"]},
        ]},
      { id:"l7", day:7, title:"Tools in the Room", titleRu:"Инструменты в кабинете", icon:"🔧", xp:8, keyword:"drill",
        cards:[
          {w:"drill",t:"бор / бормашина",e:"You'll hear the drill but feel no pain.",i:"🔧",new:true},
          {w:"mirror",t:"зеркало",e:"I'm using a small mirror to see inside.",i:"🪞",new:false},
          {w:"needle",t:"игла",e:"Just a small needle for the injection.",i:"💉",new:false},
          {w:"X-ray",t:"рентген",e:"We need to take an X-ray.",i:"📡",new:false},
          {w:"suction",t:"слюноотсос",e:"The suction removes water and saliva.",i:"💧",new:false},
        ],
        quiz:[
          {type:"mcq",p:"'Drill' — это?",a:"бормашина",o:["бормашина","зеркало"]},
          {type:"mcq",p:"Как сказать 'рентген'?",a:"X-ray",o:["X-ray","suction"]},
          {type:"mcq",p:"Что такое 'needle'?",a:"игла",o:["игла","слюноотсос"]},
          {type:"mcq",p:"'Mirror' — это?",a:"зеркало",o:["зеркало","бор"]},
        ]},
      { id:"l8", day:8, title:"Feelings at the Dentist", titleRu:"Ощущения у дантиста", icon:"😰", xp:8, keyword:"nervous",
        cards:[
          {w:"nervous",t:"нервничать",e:"It's normal to feel nervous.",i:"😰",new:true},
          {w:"scared",t:"бояться",e:"Are you scared of the dentist?",i:"😱",new:false},
          {w:"relax",t:"расслабьтесь",e:"Try to relax — breathe slowly.",i:"😌",new:false},
          {w:"comfortable",t:"комфортно",e:"Are you comfortable?",i:"😊",new:false},
          {w:"pressure",t:"давление",e:"You'll feel pressure, not pain.",i:"👆",new:false},
        ],
        quiz:[
          {type:"mcq",p:"'Nervous' — это?",a:"нервничать",o:["нервничать","расслабиться"]},
          {type:"mcq",p:"Как сказать 'расслабьтесь'?",a:"relax",o:["relax","scared"]},
          {type:"mcq",p:"'Pressure' в стоматологии — это?",a:"давление",o:["давление","боль"]},
          {type:"mcq",p:"Что значит 'comfortable'?",a:"комфортно",o:["комфортно","больно"]},
        ]},
      { id:"l9", day:9, title:"Colors & Appearance", titleRu:"Цвет и вид зуба", icon:"🎨", xp:8, keyword:"white",
        cards:[
          {w:"white",t:"белый",e:"Your teeth look white and healthy.",i:"⬜",new:true},
          {w:"yellow",t:"жёлтый",e:"The tooth looks yellow — decay.",i:"🟡",new:false},
          {w:"dark",t:"тёмный",e:"There's a dark spot here.",i:"⚫",new:false},
          {w:"swollen",t:"опухший",e:"Your gum is swollen here.",i:"🔴",new:false},
          {w:"broken",t:"сломанный",e:"The tooth is broken.",i:"💔",new:false},
        ],
        quiz:[
          {type:"mcq",p:"'Swollen' — это?",a:"опухший",o:["опухший","сломанный"]},
          {type:"mcq",p:"Как сказать 'сломанный'?",a:"broken",o:["broken","dark"]},
          {type:"mcq",p:"'Yellow tooth' — признак чего?",a:"кариеса",o:["кариеса","здоровья"]},
          {type:"mcq",p:"Что значит 'dark spot'?",a:"тёмное пятно",o:["тёмное пятно","белое пятно"]},
        ]},
      { id:"l10", day:10, title:"Review: Basic Words", titleRu:"Повторение: базовые слова", icon:"⭐", xp:10, keyword:"review",
        cards:[
          {w:"tooth → teeth",t:"зуб → зубы",e:"One tooth, many teeth.",i:"🦷",new:false},
          {w:"pain → painful",t:"боль → болезненный",e:"Is it painful when I press here?",i:"😣",new:false},
          {w:"open → close",t:"открыть → закрыть",e:"Open wide, then close slowly.",i:"👄",new:false},
          {w:"jaw → gum → cheek",t:"челюсть → десна → щека",e:"Parts of your mouth.",i:"🦴",new:false},
        ],
        quiz:[
          {type:"mcq",p:"'Teeth' — это множественное число от?",a:"tooth",o:["tooth","gum"]},
          {type:"mcq",p:"Как спросить 'это болезненно'?",a:"Is it painful?",o:["Is it painful?","Open wide."]},
          {type:"mcq",p:"Что значит 'jaw'?",a:"челюсть",o:["челюсть","язык"]},
          {type:"mcq",p:"'Gum' — это?",a:"десна",o:["десна","щека"]},
        ]},
    ]},

  // ════════════════════════════════════════════════
  // БЛОК 2 — Пациент рассказывает
  // ════════════════════════════════════════════════
  { id:"u2", title:"Patient's Story", titleRu:"Пациент рассказывает", color:"#8B5CF6", icon:"🗣", char:"girl",
    lessons:[
      { id:"l11", day:11, title:"Where Does It Hurt?", titleRu:"Где болит?", icon:"📍", xp:8, keyword:"here",
        cards:[
          {w:"here",t:"здесь",e:"It hurts here, on this side.",i:"📍",new:true},
          {w:"right side",t:"правая сторона",e:"The pain is on the right side.",i:"➡️",new:false},
          {w:"left side",t:"левая сторона",e:"It's the upper left tooth.",i:"⬅️",new:false},
          {w:"front",t:"передний",e:"My front tooth is broken.",i:"😬",new:false},
          {w:"back",t:"задний",e:"The back molar is aching.",i:"🦷",new:false},
        ],
        quiz:[
          {type:"mcq",p:"'Right side' — это?",a:"правая сторона",o:["правая сторона","левая сторона"]},
          {type:"mcq",p:"Как сказать 'здесь болит'?",a:"It hurts here.",o:["It hurts here.","I'm fine."]},
          {type:"mcq",p:"'Front tooth' — это?",a:"передний зуб",o:["передний зуб","задний зуб"]},
          {type:"mcq",p:"'Back molar' — это?",a:"задний коренной зуб",o:["задний коренной зуб","клык"]},
        ]},
      { id:"l12", day:12, title:"When Did It Start?", titleRu:"Когда началось?", icon:"📅", xp:8, keyword:"started",
        cards:[
          {w:"started",t:"началось",e:"When did the pain start?",i:"▶️",new:true},
          {w:"yesterday",t:"вчера",e:"It started yesterday.",i:"📅",new:false},
          {w:"last week",t:"на прошлой неделе",e:"The pain began last week.",i:"🗓",new:false},
          {w:"suddenly",t:"внезапно",e:"It started suddenly at night.",i:"⚡",new:false},
          {w:"getting worse",t:"становится хуже",e:"It's getting worse every day.",i:"📈",new:false},
        ],
        quiz:[
          {type:"mcq",p:"'Yesterday' — это?",a:"вчера",o:["вчера","сегодня"]},
          {type:"mcq",p:"Как сказать 'на прошлой неделе'?",a:"last week",o:["last week","today"]},
          {type:"mcq",p:"'Getting worse' значит?",a:"становится хуже",o:["становится хуже","лучше"]},
          {type:"mcq",p:"'Suddenly' — это?",a:"внезапно",o:["внезапно","постепенно"]},
        ]},
      { id:"l13", day:13, title:"What Makes It Worse?", titleRu:"Что усиливает боль?", icon:"🌡", xp:8, keyword:"cold",
        cards:[
          {w:"cold",t:"холодное",e:"Cold water makes it worse.",i:"🧊",new:true},
          {w:"hot",t:"горячее",e:"Hot drinks trigger the pain.",i:"☕",new:false},
          {w:"chewing",t:"жевание",e:"It hurts when chewing.",i:"😬",new:false},
          {w:"sweet",t:"сладкое",e:"Sweet food causes pain.",i:"🍬",new:false},
          {w:"touching",t:"прикосновение",e:"Even touching it hurts.",i:"👆",new:false},
        ],
        quiz:[
          {type:"mcq",p:"'Cold makes it worse' значит?",a:"холодное усиливает боль",o:["холодное усиливает боль","горячее усиливает боль"]},
          {type:"mcq",p:"Как сказать 'жевание'?",a:"chewing",o:["chewing","touching"]},
          {type:"mcq",p:"'Sweet food' — это?",a:"сладкая еда",o:["сладкая еда","горячая еда"]},
          {type:"mcq",p:"'Touching it hurts' значит?",a:"больно при прикосновении",o:["больно при прикосновении","боль прошла"]},
        ]},
      { id:"l14", day:14, title:"Allergies & Medications", titleRu:"Аллергии и лекарства", icon:"⚠️", xp:10, keyword:"allergic",
        cards:[
          {w:"allergic",t:"аллергия / аллергический",e:"Are you allergic to penicillin?",i:"⚠️",new:true},
          {w:"medication",t:"лекарство",e:"What medications are you taking?",i:"💊",new:false},
          {w:"blood pressure",t:"давление",e:"Do you have high blood pressure?",i:"❤️",new:false},
          {w:"diabetes",t:"диабет",e:"Diabetes affects healing.",i:"🩺",new:false},
          {w:"blood thinners",t:"антикоагулянты",e:"Blood thinners increase bleeding risk.",i:"🩸",new:false},
        ],
        quiz:[
          {type:"mcq",p:"'Allergic to penicillin' — что это?",a:"аллергия на пенициллин",o:["аллергия на пенициллин","приём пенициллина"]},
          {type:"mcq",p:"Что такое 'blood thinners'?",a:"антикоагулянты",o:["антикоагулянты","витамины"]},
          {type:"mcq",p:"'Diabetes' влияет на?",a:"заживление ран",o:["заживление ран","цвет зубов"]},
          {type:"mcq",p:"Как спросить о лекарствах?",a:"What medications are you taking?",o:["What medications are you taking?","Do you have pain?"]},
        ]},
      { id:"l15", day:15, title:"Previous Dental Work", titleRu:"Прошлое лечение", icon:"🦷", xp:8, keyword:"before",
        cards:[
          {w:"before",t:"раньше",e:"Have you had this before?",i:"⏮",new:true},
          {w:"filling",t:"пломба",e:"I had a filling last year.",i:"🦷",new:false},
          {w:"extraction",t:"удаление зуба",e:"I've had a tooth extracted.",i:"🔧",new:false},
          {w:"root canal",t:"лечение канала",e:"I had a root canal years ago.",i:"🔩",new:false},
          {w:"crown",t:"коронка",e:"I have a crown on this tooth.",i:"👑",new:false},
        ],
        quiz:[
          {type:"mcq",p:"'Filling' — это?",a:"пломба",o:["пломба","коронка"]},
          {type:"mcq",p:"'Root canal' — это?",a:"лечение корневого канала",o:["лечение корневого канала","удаление зуба"]},
          {type:"mcq",p:"Как сказать 'у меня была коронка'?",a:"I have a crown.",o:["I have a crown.","I had a filling."]},
          {type:"mcq",p:"'Extraction' — это?",a:"удаление зуба",o:["удаление зуба","пломба"]},
        ]},
      { id:"l16", day:16, title:"Smoking & Habits", titleRu:"Курение и привычки", icon:"🚭", xp:8, keyword:"smoking",
        cards:[
          {w:"smoking",t:"курение",e:"Do you smoke?",i:"🚭",new:true},
          {w:"alcohol",t:"алкоголь",e:"How often do you drink alcohol?",i:"🍷",new:false},
          {w:"grinding",t:"скрежет зубами",e:"Do you grind your teeth at night?",i:"😬",new:false},
          {w:"diet",t:"питание / диета",e:"Your diet affects your teeth.",i:"🥗",new:false},
          {w:"brushing",t:"чистка зубов",e:"How often are you brushing?",i:"🪥",new:false},
        ],
        quiz:[
          {type:"mcq",p:"'Grinding teeth' — это?",a:"скрежет зубами",o:["скрежет зубами","чистка зубов"]},
          {type:"mcq",p:"Почему спрашивают о курении?",a:"Курение влияет на заживление",o:["Курение влияет на заживление","Это правило клиники"]},
          {type:"mcq",p:"'Brushing' — это?",a:"чистка зубов",o:["чистка зубов","нить"]},
          {type:"mcq",p:"'Diet affects teeth' значит?",a:"питание влияет на зубы",o:["питание влияет на зубы","диета для похудения"]},
        ]},
      { id:"l17", day:17, title:"Swelling & Bleeding", titleRu:"Отёк и кровотечение", icon:"🔴", xp:10, keyword:"swelling",
        cards:[
          {w:"swelling",t:"отёк",e:"The swelling appeared overnight.",i:"🔴",new:true},
          {w:"bleeding",t:"кровотечение",e:"My gum is bleeding when I brush.",i:"🩸",new:false},
          {w:"pus",t:"гной",e:"There is pus near the tooth.",i:"⚠️",new:false},
          {w:"fever",t:"температура",e:"Do you have a fever?",i:"🌡",new:false},
          {w:"numb",t:"онемение",e:"My lip is still numb.",i:"😶",new:false},
        ],
        quiz:[
          {type:"mcq",p:"'Swelling' — это?",a:"отёк",o:["отёк","кровотечение"]},
          {type:"mcq",p:"'Bleeding gum' — это?",a:"кровоточащая десна",o:["кровоточащая десна","опухшая десна"]},
          {type:"mcq",p:"'Fever' в стоматологии — признак чего?",a:"инфекции",o:["инфекции","нормального заживления"]},
          {type:"mcq",p:"'Numb' — это?",a:"онемение",o:["онемение","боль"]},
        ]},
      { id:"l18", day:18, title:"Numbers 1–10 (Pain Scale)", titleRu:"Шкала боли 1–10", icon:"📊", xp:8, keyword:"rate",
        cards:[
          {w:"rate the pain",t:"оцените боль",e:"Rate your pain from 1 to 10.",i:"📊",new:true},
          {w:"mild",t:"лёгкая",e:"Mild pain — 1 to 3.",i:"😐",new:false},
          {w:"moderate",t:"умеренная",e:"Moderate pain — 4 to 6.",i:"😟",new:false},
          {w:"severe",t:"сильная",e:"Severe pain — 7 to 10.",i:"😭",new:false},
          {w:"constant",t:"постоянная",e:"Is the pain constant or intermittent?",i:"🔄",new:false},
        ],
        quiz:[
          {type:"mcq",p:"'Mild pain' — это?",a:"лёгкая боль",o:["лёгкая боль","сильная боль"]},
          {type:"mcq",p:"'Severe' — это?",a:"сильная",o:["сильная","умеренная"]},
          {type:"mcq",p:"'Constant pain' — это?",a:"постоянная боль",o:["постоянная боль","временная боль"]},
          {type:"mcq",p:"Что значит 'moderate'?",a:"умеренный",o:["умеренный","сильный"]},
        ]},
      { id:"l19", day:19, title:"Insurance & Payment", titleRu:"Страховка и оплата", icon:"💰", xp:8, keyword:"insurance",
        cards:[
          {w:"insurance",t:"страховка",e:"Do you have dental insurance?",i:"📋",new:true},
          {w:"cost",t:"стоимость",e:"What is the cost of this treatment?",i:"💰",new:false},
          {w:"estimate",t:"смета",e:"I'll give you a written estimate.",i:"📄",new:false},
          {w:"payment",t:"оплата",e:"We accept card payment.",i:"💳",new:false},
          {w:"receipt",t:"чек",e:"Here is your receipt.",i:"🧾",new:false},
        ],
        quiz:[
          {type:"mcq",p:"'Insurance' — это?",a:"страховка",o:["страховка","рецепт"]},
          {type:"mcq",p:"'Estimate' в медицине — это?",a:"смета / стоимость лечения",o:["смета / стоимость лечения","диагноз"]},
          {type:"mcq",p:"'Receipt' — это?",a:"чек",o:["чек","направление"]},
          {type:"mcq",p:"Как спросить о стоимости?",a:"What is the cost?",o:["What is the cost?","When is the appointment?"]},
        ]},
      { id:"l20", day:20, title:"Review: Patient Story", titleRu:"Повторение: пациент", icon:"⭐", xp:10, keyword:"review",
        cards:[
          {w:"Where does it hurt?",t:"Где болит?",e:"Point to where it hurts.",i:"📍",new:false},
          {w:"When did it start?",t:"Когда началось?",e:"When exactly did the pain start?",i:"📅",new:false},
          {w:"What makes it worse?",t:"Что усиливает боль?",e:"Does cold or hot make it worse?",i:"🌡",new:false},
          {w:"Are you allergic?",t:"Есть ли аллергия?",e:"Are you allergic to any medication?",i:"⚠️",new:false},
        ],
        quiz:[
          {type:"mcq",p:"Как спросить 'где болит'?",a:"Where does it hurt?",o:["Where does it hurt?","How are you?"]},
          {type:"mcq",p:"'When did it start?' — это?",a:"Когда началось?",o:["Когда началось?","Как вы?"]},
          {type:"mcq",p:"Что значит 'What makes it worse'?",a:"Что усиливает боль?",o:["Что усиливает боль?","Когда болит?"]},
          {type:"mcq",p:"'Are you allergic?' — это?",a:"Есть ли аллергия?",o:["Есть ли аллергия?","Вы курите?"]},
        ]},
    ]},

  // ════════════════════════════════════════════════
  // БЛОК 3 — Диагностика (слова)
  // ════════════════════════════════════════════════
  { id:"u3", title:"Diagnosis Words", titleRu:"Слова диагностики", color:"#10B981", icon:"🔬", char:"girl",
    lessons:[
      { id:"l21", day:21, title:"Decay & Cavities", titleRu:"Кариес", icon:"🕳", xp:10, keyword:"cavity",
        cards:[
          {w:"cavity",t:"кариес / полость",e:"You have a small cavity here.",i:"🕳",new:true},
          {w:"decay",t:"кариес / разрушение",e:"The decay has reached the nerve.",i:"😬",new:false},
          {w:"filling",t:"пломба",e:"We need to place a filling.",i:"🦷",new:false},
          {w:"enamel",t:"эмаль",e:"The enamel is worn down.",i:"🛡",new:false},
          {w:"pulp",t:"пульпа",e:"The pulp is inflamed.",i:"❤️",new:false},
        ],
        quiz:[
          {type:"mcq",p:"'Cavity' — это?",a:"кариес",o:["кариес","коронка"]},
          {type:"mcq",p:"'Enamel' — это?",a:"эмаль",o:["эмаль","пульпа"]},
          {type:"mcq",p:"'Pulp' в зубе — это?",a:"пульпа (нерв)",o:["пульпа (нерв)","корень"]},
          {type:"mcq",p:"Что такое 'decay'?",a:"разрушение зуба",o:["разрушение зуба","отбеливание"]},
        ]},
      { id:"l22", day:22, title:"Gum Disease", titleRu:"Болезни дёсен", icon:"🔴", xp:10, keyword:"gum",
        cards:[
          {w:"gum disease",t:"болезнь дёсен",e:"You have early gum disease.",i:"🔴",new:true},
          {w:"gingivitis",t:"гингивит",e:"Gingivitis is early gum disease.",i:"🦷",new:false},
          {w:"periodontitis",t:"пародонтит",e:"Periodontitis affects the bone.",i:"🦴",new:false},
          {w:"bone loss",t:"убыль кости",e:"There is bone loss around this tooth.",i:"📉",new:false},
          {w:"pocket",t:"пародонтальный карман",e:"The pocket depth is 5mm.",i:"📏",new:false},
        ],
        quiz:[
          {type:"mcq",p:"'Gingivitis' — это?",a:"гингивит",o:["гингивит","пародонтит"]},
          {type:"mcq",p:"'Bone loss' — это?",a:"убыль кости",o:["убыль кости","новая кость"]},
          {type:"mcq",p:"'Pocket' в пародонтологии — это?",a:"карман у основания зуба",o:["карман у основания зуба","полость кариеса"]},
          {type:"mcq",p:"'Periodontitis' поражает?",a:"кость и связки зуба",o:["кость и связки зуба","только десну"]},
        ]},
      { id:"l23", day:23, title:"Infection & Abscess", titleRu:"Инфекция и абсцесс", icon:"🚨", xp:10, keyword:"infection",
        cards:[
          {w:"infection",t:"инфекция",e:"There is an infection here.",i:"🦠",new:true},
          {w:"abscess",t:"абсцесс",e:"This is a dental abscess.",i:"🔴",new:false},
          {w:"pus",t:"гной",e:"Pus means active infection.",i:"⚠️",new:false},
          {w:"spreading",t:"распространяется",e:"The infection is spreading.",i:"📡",new:false},
          {w:"antibiotics",t:"антибиотики",e:"You need a course of antibiotics.",i:"💊",new:false},
        ],
        quiz:[
          {type:"mcq",p:"'Abscess' — это?",a:"абсцесс",o:["абсцесс","кариес"]},
          {type:"mcq",p:"'Pus' — признак чего?",a:"активной инфекции",o:["активной инфекции","нормы"]},
          {type:"mcq",p:"'Antibiotics' назначают при?",a:"инфекции",o:["инфекции","кариесе"]},
          {type:"mcq",p:"'Spreading infection' — это?",a:"распространяющаяся инфекция",o:["распространяющаяся инфекция","локальная инфекция"]},
        ]},
      { id:"l24", day:24, title:"X-ray Words", titleRu:"Слова рентгена", icon:"📡", xp:10, keyword:"x-ray",
        cards:[
          {w:"X-ray",t:"рентген",e:"Let's take an X-ray.",i:"📡",new:true},
          {w:"shadow",t:"тень",e:"There's a shadow at the root tip.",i:"🌑",new:false},
          {w:"root tip",t:"верхушка корня",e:"Infection at the root tip.",i:"🔻",new:false},
          {w:"bone level",t:"уровень кости",e:"The bone level looks normal.",i:"📏",new:false},
          {w:"CBCT",t:"3D-томография",e:"CBCT gives a 3D view of the bone.",i:"🔭",new:false},
        ],
        quiz:[
          {type:"mcq",p:"'Shadow on X-ray' обычно означает?",a:"инфекцию или кариес",o:["инфекцию или кариес","здоровый зуб"]},
          {type:"mcq",p:"'Root tip' — это?",a:"верхушка корня",o:["верхушка корня","коронка зуба"]},
          {type:"mcq",p:"Что такое CBCT?",a:"3D-компьютерная томография",o:["3D-компьютерная томография","обычный рентген"]},
          {type:"mcq",p:"'Bone level' — это?",a:"уровень костной ткани",o:["уровень костной ткани","глубина кариеса"]},
        ]},
      { id:"l25", day:25, title:"Tooth Sensitivity", titleRu:"Чувствительность зуба", icon:"🥶", xp:10, keyword:"sensitive",
        cards:[
          {w:"sensitive",t:"чувствительный",e:"This tooth is very sensitive.",i:"🥶",new:true},
          {w:"nerve",t:"нерв",e:"The nerve is exposed.",i:"⚡",new:false},
          {w:"exposed",t:"оголённый",e:"The root is exposed.",i:"😬",new:false},
          {w:"recession",t:"рецессия",e:"Gum recession exposes the root.",i:"📉",new:false},
          {w:"desensitize",t:"снизить чувствительность",e:"We can desensitize the tooth.",i:"🛡",new:false},
        ],
        quiz:[
          {type:"mcq",p:"'Exposed nerve' — это?",a:"оголённый нерв",o:["оголённый нерв","здоровый нерв"]},
          {type:"mcq",p:"'Gum recession' — это?",a:"опускание десны",o:["опускание десны","воспаление десны"]},
          {type:"mcq",p:"'Desensitize' значит?",a:"снизить чувствительность",o:["снизить чувствительность","удалить зуб"]},
          {type:"mcq",p:"'Exposed root' — признак чего?",a:"рецессии десны",o:["рецессии десны","кариеса"]},
        ]},
      { id:"l26", day:26, title:"Treatment Options", titleRu:"Варианты лечения", icon:"🔀", xp:10, keyword:"options",
        cards:[
          {w:"options",t:"варианты",e:"You have two options.",i:"🔀",new:true},
          {w:"save the tooth",t:"сохранить зуб",e:"We can try to save the tooth.",i:"💚",new:false},
          {w:"extract",t:"удалить",e:"We may need to extract it.",i:"🔧",new:false},
          {w:"replace",t:"заменить",e:"We can replace it with an implant.",i:"🔩",new:false},
          {w:"prognosis",t:"прогноз",e:"The prognosis is guarded.",i:"📊",new:false},
        ],
        quiz:[
          {type:"mcq",p:"'Options' — это?",a:"варианты",o:["варианты","проблемы"]},
          {type:"mcq",p:"'Extract' в стоматологии — это?",a:"удалить зуб",o:["удалить зуб","сохранить зуб"]},
          {type:"mcq",p:"'Prognosis is guarded' значит?",a:"прогноз осторожный",o:["прогноз осторожный","прогноз хороший"]},
          {type:"mcq",p:"'Replace with implant' — это?",a:"заменить имплантом",o:["заменить имплантом","запломбировать"]},
        ]},
      { id:"l27", day:27, title:"Tooth Numbering", titleRu:"Нумерация зубов", icon:"🔢", xp:8, keyword:"number",
        cards:[
          {w:"upper right",t:"верхний правый",e:"Upper right first molar — tooth 16.",i:"↗️",new:true},
          {w:"lower left",t:"нижний левый",e:"Lower left wisdom tooth — tooth 38.",i:"↙️",new:false},
          {w:"molar",t:"коренной зуб",e:"The first molar is tooth 6.",i:"🦷",new:false},
          {w:"incisor",t:"резец",e:"The central incisor is tooth 1.",i:"😁",new:false},
          {w:"canine",t:"клык",e:"The canine is the pointed tooth.",i:"🦊",new:false},
        ],
        quiz:[
          {type:"mcq",p:"'Molar' — это?",a:"коренной зуб",o:["коренной зуб","резец"]},
          {type:"mcq",p:"'Incisor' — это?",a:"резец",o:["резец","клык"]},
          {type:"mcq",p:"'Canine' — это?",a:"клык",o:["клык","моляр"]},
          {type:"mcq",p:"'Upper right' — это?",a:"верхний правый",o:["верхний правый","нижний левый"]},
        ]},
      { id:"l28", day:28, title:"Bite & Occlusion", titleRu:"Прикус", icon:"😬", xp:10, keyword:"bite",
        cards:[
          {w:"bite",t:"прикус / прикусить",e:"Bite down on this paper.",i:"😬",new:true},
          {w:"occlusion",t:"окклюзия",e:"Your occlusion looks balanced.",i:"⚖️",new:false},
          {w:"high",t:"высоко",e:"The crown feels high.",i:"⬆️",new:false},
          {w:"contact",t:"контакт",e:"I'm checking your bite contacts.",i:"🎯",new:false},
          {w:"grinding",t:"бруксизм",e:"Grinding wears down your teeth.",i:"😬",new:false},
        ],
        quiz:[
          {type:"mcq",p:"'Occlusion' — это?",a:"прикус / смыкание зубов",o:["прикус / смыкание зубов","кариес"]},
          {type:"mcq",p:"'The crown feels high' — значит?",a:"коронка завышает прикус",o:["коронка завышает прикус","коронка хорошо сидит"]},
          {type:"mcq",p:"'Grinding' — это?",a:"бруксизм",o:["бруксизм","жевание"]},
          {type:"mcq",p:"'Bite contacts' — это?",a:"точки смыкания зубов",o:["точки смыкания зубов","корневые каналы"]},
        ]},
      { id:"l29", day:29, title:"Referral & Specialists", titleRu:"Направление к специалисту", icon:"📨", xp:10, keyword:"refer",
        cards:[
          {w:"refer",t:"направить",e:"I'm going to refer you to a specialist.",i:"📨",new:true},
          {w:"specialist",t:"специалист",e:"A specialist will help with this.",i:"👨‍⚕️",new:false},
          {w:"periodontist",t:"пародонтолог",e:"A periodontist treats gum disease.",i:"🔬",new:false},
          {w:"oral surgeon",t:"хирург-стоматолог",e:"The oral surgeon will remove the tooth.",i:"🔪",new:false},
          {w:"orthodontist",t:"ортодонт",e:"An orthodontist straightens teeth.",i:"😁",new:false},
        ],
        quiz:[
          {type:"mcq",p:"'Refer' в медицине — это?",a:"направить к специалисту",o:["направить к специалисту","выписать рецепт"]},
          {type:"mcq",p:"'Periodontist' — это?",a:"пародонтолог",o:["пародонтолог","ортодонт"]},
          {type:"mcq",p:"'Oral surgeon' — это?",a:"хирург-стоматолог",o:["хирург-стоматолог","терапевт"]},
          {type:"mcq",p:"'Orthodontist' занимается?",a:"исправлением прикуса и зубов",o:["исправлением прикуса и зубов","лечением дёсен"]},
        ]},
      { id:"l30", day:30, title:"Review: Diagnosis", titleRu:"Повторение: диагностика", icon:"⭐", xp:12, keyword:"review",
        cards:[
          {w:"cavity → filling",t:"кариес → пломба",e:"Treat the cavity with a filling.",i:"🕳➡️🦷",new:false},
          {w:"infection → antibiotics",t:"инфекция → антибиотики",e:"Treat the infection with antibiotics.",i:"🦠➡️💊",new:false},
          {w:"bone loss → implant",t:"потеря кости → имплант",e:"Bone loss means we need an implant.",i:"📉➡️🔩",new:false},
          {w:"abscess → drain",t:"абсцесс → дренаж",e:"Drain the abscess immediately.",i:"🔴➡️💧",new:false},
        ],
        quiz:[
          {type:"mcq",p:"Кариес лечат с помощью?",a:"пломбы",o:["пломбы","антибиотиков"]},
          {type:"mcq",p:"При инфекции назначают?",a:"антибиотики",o:["антибиотики","коронку"]},
          {type:"mcq",p:"При абсцессе нужно?",a:"вскрыть и дренировать",o:["вскрыть и дренировать","просто наблюдать"]},
          {type:"mcq",p:"'Bone loss' — это признак?",a:"пародонтита",o:["пародонтита","кариеса"]},
        ]},
    ]},

  // ════════════════════════════════════════════════
  // БЛОК 4 — Анестезия (фразы, DadChar)
  // ════════════════════════════════════════════════
  { id:"u4", title:"Anesthesia Phrases", titleRu:"Фразы анестезии", color:"#F59E0B", icon:"💉", char:"dad",
    lessons:[
      { id:"l31", day:31, title:"Before the Injection", titleRu:"Перед уколом", icon:"💉", xp:12, keyword:"injection",
        cards:[
          {w:"I'm going to give you an injection.",t:"Я сделаю вам укол.",e:"Just a small injection to numb the area.",i:"💉",new:true},
          {w:"You'll feel a small pinch.",t:"Вы почувствуете лёгкий укол.",e:"A small sting, then it goes numb.",i:"🤏",new:false},
          {w:"Take a deep breath.",t:"Сделайте глубокий вдох.",e:"Breathe in slowly through your nose.",i:"🌬",new:false},
          {w:"Try to stay relaxed.",t:"Постарайтесь расслабиться.",e:"The more relaxed you are, the easier it is.",i:"😌",new:false},
        ],
        quiz:[
          {type:"mcq",p:"Как предупредить пациента об уколе?",a:"You'll feel a small pinch.",o:["You'll feel a small pinch.","This will really hurt."]},
          {type:"mcq",p:"'Take a deep breath' значит?",a:"Сделайте глубокий вдох",o:["Сделайте глубокий вдох","Расслабьтесь"]},
          {type:"mcq",p:"Как попросить расслабиться?",a:"Try to stay relaxed.",o:["Try to stay relaxed.","Open wide."]},
          {type:"mcq",p:"'Going numb' означает?",a:"онемение",o:["онемение","боль"]},
        ]},
      { id:"l32", day:32, title:"After Anesthesia", titleRu:"После анестезии", icon:"😶", xp:12, keyword:"numb",
        cards:[
          {w:"Your lip is numb.",t:"Ваша губа онемела.",e:"Your lip and cheek will feel numb.",i:"😶",new:true},
          {w:"It wears off in 2–3 hours.",t:"Онемение пройдёт через 2–3 часа.",e:"Don't bite your lip — it's numb!",i:"⏳",new:false},
          {w:"Tell me if you feel pain.",t:"Скажите, если почувствуете боль.",e:"Pressure is normal — pain is not.",i:"✋",new:false},
          {w:"Are you numb enough?",t:"Вы достаточно онемели?",e:"Let me know if you still feel anything.",i:"🤔",new:false},
        ],
        quiz:[
          {type:"mcq",p:"Когда проходит онемение?",a:"Через 2–3 часа",o:["Через 2–3 часа","Сразу"]},
          {type:"mcq",p:"'Tell me if you feel pain' значит?",a:"Скажите, если почувствуете боль",o:["Скажите, если почувствуете боль","Не двигайтесь"]},
          {type:"mcq",p:"Давление при лечении — это?",a:"нормально",o:["нормально","признак проблемы"]},
          {type:"mcq",p:"'Are you numb enough?' — это?",a:"Вы достаточно онемели?",o:["Вы достаточно онемели?","Вам больно?"]},
        ]},
      { id:"l33", day:33, title:"Anxious Patient", titleRu:"Тревожный пациент", icon:"😰", xp:12, keyword:"anxious",
        cards:[
          {w:"I understand you're anxious.",t:"Я понимаю, что вы беспокоитесь.",e:"Many patients feel this way — it's normal.",i:"😰",new:true},
          {w:"Raise your hand to stop.",t:"Поднимите руку, чтобы остановить.",e:"At any point, raise your hand and I'll stop.",i:"✋",new:false},
          {w:"You're doing really well.",t:"Вы отлично держитесь.",e:"Almost done — just a little longer.",i:"💪",new:false},
          {w:"Would you like a break?",t:"Хотите сделать перерыв?",e:"We can pause any time you need.",i:"⏸",new:false},
        ],
        quiz:[
          {type:"mcq",p:"Как успокоить тревожного пациента?",a:"Many patients feel this way — it's normal.",o:["Many patients feel this way — it's normal.","Stop moving."]},
          {type:"mcq",p:"'Raise your hand to stop' значит?",a:"Поднимите руку чтобы остановить",o:["Поднимите руку чтобы остановить","Держите руки вниз"]},
          {type:"mcq",p:"'Would you like a break?' — это?",a:"Хотите перерыв?",o:["Хотите перерыв?","Вам больно?"]},
          {type:"mcq",p:"'You're doing really well' — это?",a:"Вы отлично держитесь",o:["Вы отлично держитесь","Нам нужно остановиться"]},
        ]},
      { id:"l34", day:34, title:"Types of Anesthesia", titleRu:"Виды анестезии", icon:"🩺", xp:12, keyword:"block",
        cards:[
          {w:"nerve block",t:"блокада нерва",e:"I'll do a nerve block for the lower jaw.",i:"⚡",new:true},
          {w:"infiltration",t:"инфильтрационная анестезия",e:"Infiltration works for upper teeth.",i:"💉",new:false},
          {w:"topical",t:"аппликационная (поверхностная)",e:"I'll put topical gel first to numb the gum.",i:"🟡",new:false},
          {w:"sedation",t:"седация",e:"Sedation helps very anxious patients.",i:"😴",new:false},
        ],
        quiz:[
          {type:"mcq",p:"'Nerve block' используется для?",a:"нижней челюсти",o:["нижней челюсти","только верхних зубов"]},
          {type:"mcq",p:"'Topical anesthesia' — это?",a:"поверхностная анестезия дёсен",o:["поверхностная анестезия дёсен","укол в нерв"]},
          {type:"mcq",p:"'Sedation' помогает?",a:"очень тревожным пациентам",o:["очень тревожным пациентам","всем пациентам"]},
          {type:"mcq",p:"'Infiltration' — это?",a:"инфильтрационная анестезия",o:["инфильтрационная анестезия","блокада нерва"]},
        ]},
    ]},

  // ════════════════════════════════════════════════
  // БЛОК 5 — Хирургия (фразы, DadChar)
  // ════════════════════════════════════════════════
  { id:"u5", title:"Surgery Phrases", titleRu:"Фразы хирургии", color:"#EF4444", icon:"🔪", char:"dad",
    lessons:[
      { id:"l35", day:35, title:"Before Extraction", titleRu:"Перед удалением", icon:"🦷", xp:15, keyword:"extract",
        cards:[
          {w:"I need to extract this tooth.",t:"Мне нужно удалить этот зуб.",e:"The tooth cannot be saved — extraction is best.",i:"🦷",new:true},
          {w:"You'll feel pressure.",t:"Вы почувствуете давление.",e:"Pressure and movement — that's normal.",i:"👆",new:false},
          {w:"Tell me if you feel actual pain.",t:"Скажите, если почувствуете настоящую боль.",e:"Pressure is normal. Sharp pain is not.",i:"✋",new:false},
          {w:"This will take about 10 minutes.",t:"Это займёт около 10 минут.",e:"A simple extraction is usually quick.",i:"⏱",new:false},
        ],
        quiz:[
          {type:"mcq",p:"Как объяснить необходимость удаления?",a:"The tooth cannot be saved.",o:["The tooth cannot be saved.","This will hurt a lot."]},
          {type:"mcq",p:"'Pressure' при удалении — это?",a:"нормальное ощущение",o:["нормальное ощущение","признак боли"]},
          {type:"mcq",p:"'Tell me if you feel pain' — зачем?",a:"Чтобы дать больше анестезии",o:["Чтобы дать больше анестезии","Для документации"]},
          {type:"mcq",p:"'About 10 minutes' — это?",a:"около 10 минут",o:["около 10 минут","10 секунд"]},
        ]},
      { id:"l36", day:36, title:"During Extraction", titleRu:"Во время удаления", icon:"⚙️", xp:15, keyword:"forceps",
        cards:[
          {w:"I'm applying the forceps.",t:"Я накладываю щипцы.",e:"You'll feel pressure from the forceps.",i:"🔧",new:true},
          {w:"I need to loosen the tooth.",t:"Нужно расшатать зуб.",e:"Rocking motion loosens the tooth.",i:"↔️",new:false},
          {w:"The tooth is out.",t:"Зуб удалён.",e:"All done — the tooth is out.",i:"✅",new:false},
          {w:"Bite on this gauze.",t:"Прикусите эту марлю.",e:"Bite firmly for 30 minutes.",i:"🧻",new:false},
        ],
        quiz:[
          {type:"mcq",p:"'Forceps' в хирургии — это?",a:"щипцы для удаления",o:["щипцы для удаления","скальпель"]},
          {type:"mcq",p:"'Loosen the tooth' значит?",a:"расшатать зуб",o:["расшатать зуб","запломбировать"]},
          {type:"mcq",p:"Зачем кусать марлю после удаления?",a:"Для остановки кровотечения",o:["Для остановки кровотечения","Для анестезии"]},
          {type:"mcq",p:"'The tooth is out' — это?",a:"Зуб удалён",o:["Зуб удалён","Зуб остаётся"]},
        ]},
      { id:"l37", day:37, title:"Surgical Extraction", titleRu:"Хирургическое удаление", icon:"🏥", xp:15, keyword:"incision",
        cards:[
          {w:"I'll make a small incision.",t:"Я сделаю небольшой разрез.",e:"The incision gives me access to the bone.",i:"🔪",new:true},
          {w:"I need to remove some bone.",t:"Нужно убрать немного кости.",e:"This frees the tooth for removal.",i:"🦴",new:false},
          {w:"I'll section the tooth.",t:"Я распилю зуб.",e:"Cutting in sections makes it easier.",i:"✂️",new:false},
          {w:"I'll place sutures.",t:"Я наложу швы.",e:"Sutures close the wound.",i:"🧵",new:false},
        ],
        quiz:[
          {type:"mcq",p:"'Incision' — это?",a:"разрез",o:["разрез","укол"]},
          {type:"mcq",p:"'Section the tooth' значит?",a:"распилить зуб на части",o:["распилить зуб на части","удалить корень"]},
          {type:"mcq",p:"'Sutures' — это?",a:"швы",o:["швы","марля"]},
          {type:"mcq",p:"Зачем убирать кость?",a:"Чтобы освободить корень зуба",o:["Чтобы освободить корень зуба","Для пломбы"]},
        ]},
      { id:"l38", day:38, title:"Wisdom Teeth", titleRu:"Зубы мудрости", icon:"😬", xp:15, keyword:"impacted",
        cards:[
          {w:"Your wisdom tooth is impacted.",t:"Ваш зуб мудрости ретинирован.",e:"It can't come through normally.",i:"😖",new:true},
          {w:"It's pressing on the next tooth.",t:"Он давит на соседний зуб.",e:"This can cause damage to tooth 7.",i:"⚠️",new:false},
          {w:"Small risk of numbness.",t:"Небольшой риск онемения.",e:"The nerve is close — temporary numbness possible.",i:"😶",new:false},
          {w:"Avoid smoking after surgery.",t:"Не курите после операции.",e:"Smoking causes dry socket.",i:"🚭",new:false},
        ],
        quiz:[
          {type:"mcq",p:"'Impacted' tooth — это?",a:"ретинированный зуб",o:["ретинированный зуб","кариозный зуб"]},
          {type:"mcq",p:"Чем опасен ретинированный зуб мудрости?",a:"Давит на соседний зуб",o:["Давит на соседний зуб","Вызывает кариес"]},
          {type:"mcq",p:"Почему нельзя курить после удаления?",a:"Вызывает альвеолит",o:["Вызывает альвеолит","Замедляет рост"]},
          {type:"mcq",p:"'Risk of numbness' — это?",a:"риск онемения",o:["риск онемения","риск инфекции"]},
        ]},
      { id:"l39", day:39, title:"Post-Op Care", titleRu:"Уход после операции", icon:"💊", xp:15, keyword:"avoid",
        cards:[
          {w:"Don't rinse for 24 hours.",t:"Не полощите 24 часа.",e:"Rinsing removes the blood clot.",i:"🚫",new:true},
          {w:"Ice packs reduce swelling.",t:"Лёд уменьшает отёк.",e:"20 minutes on, 20 minutes off.",i:"🧊",new:false},
          {w:"Take painkillers as needed.",t:"Принимайте обезболивающее по необходимости.",e:"Ibuprofen or paracetamol works well.",i:"💊",new:false},
          {w:"Eat soft food only.",t:"Ешьте только мягкую еду.",e:"Soup, yoghurt, mashed potato.",i:"🥣",new:false},
          {w:"Call us if it gets worse.",t:"Позвоните нам если станет хуже.",e:"Increasing pain after day 3 is a warning sign.",i:"📞",new:false},
        ],
        quiz:[
          {type:"mcq",p:"Почему нельзя полоскать рот 24 часа?",a:"Сгусток крови защищает лунку",o:["Сгусток крови защищает лунку","Лекарство смоется"]},
          {type:"mcq",p:"Как применять лёд?",a:"20 минут — на, 20 минут — перерыв",o:["20 минут — на, 20 минут — перерыв","Постоянно"]},
          {type:"mcq",p:"Какую еду можно после операции?",a:"Мягкую — суп, йогурт",o:["Мягкую — суп, йогурт","Твёрдую — орехи, сухари"]},
          {type:"mcq",p:"Когда нужно срочно позвонить?",a:"Если боль усиливается после 3-го дня",o:["Если боль усиливается после 3-го дня","Если боль в 1-й день"]},
        ]},
      { id:"l40", day:40, title:"Abscess Emergency", titleRu:"Экстренный абсцесс", icon:"🚨", xp:15, keyword:"drain",
        cards:[
          {w:"You have a serious infection.",t:"У вас серьёзная инфекция.",e:"This needs urgent treatment today.",i:"🚨",new:true},
          {w:"I need to drain the abscess.",t:"Нужно вскрыть абсцесс.",e:"Small incision to release the pus.",i:"💧",new:false},
          {w:"The infection is spreading.",t:"Инфекция распространяется.",e:"I'm referring you to hospital.",i:"🏥",new:false},
          {w:"You need IV antibiotics.",t:"Вам нужны внутривенные антибиотики.",e:"Oral antibiotics aren't enough now.",i:"💉",new:false},
        ],
        quiz:[
          {type:"mcq",p:"'Drain the abscess' значит?",a:"Вскрыть и дренировать абсцесс",o:["Вскрыть и дренировать абсцесс","Наблюдать абсцесс"]},
          {type:"mcq",p:"'IV antibiotics' — это?",a:"внутривенные антибиотики",o:["внутривенные антибиотики","таблетки"]},
          {type:"mcq",p:"'Spreading infection' — зачем в больницу?",a:"Нужны сильные антибиотики капельно",o:["Нужны сильные антибиотики капельно","Для рентгена"]},
          {type:"mcq",p:"'Urgent treatment' — это?",a:"срочное лечение",o:["срочное лечение","плановое лечение"]},
        ]},
    ]},

  // ════════════════════════════════════════════════
  // БЛОК 6 — Имплантология (фразы, DadChar)
  // ════════════════════════════════════════════════
  { id:"u6", title:"Implant Phrases", titleRu:"Фразы имплантации", color:"#8B5CF6", icon:"🔩", char:"dad",
    lessons:[
      { id:"l41", day:41, title:"Explaining Implants", titleRu:"Объясняем имплант", icon:"🔩", xp:18, keyword:"titanium",
        cards:[
          {w:"A titanium screw replaces the root.",t:"Титановый винт заменяет корень.",e:"The implant is like an artificial tooth root.",i:"🔩",new:true},
          {w:"The bone grows around it.",t:"Кость нарастает вокруг него.",e:"This process is called osseointegration.",i:"🦴",new:false},
          {w:"Then we attach a crown.",t:"Затем мы крепим коронку.",e:"The crown looks and feels like a real tooth.",i:"👑",new:false},
          {w:"It lasts a lifetime.",t:"Он служит всю жизнь.",e:"With good care, implants last decades.",i:"♾️",new:false},
        ],
        quiz:[
          {type:"mcq",p:"Из чего сделан имплант?",a:"Из титана",o:["Из титана","Из керамики"]},
          {type:"mcq",p:"'Osseointegration' — это?",a:"сращение кости с имплантом",o:["сращение кости с имплантом","установка коронки"]},
          {type:"mcq",p:"'Crown on the implant' — это?",a:"коронка на импланте",o:["коронка на импланте","сам имплант"]},
          {type:"mcq",p:"Как долго служит имплант?",a:"Десятилетиями при хорошем уходе",o:["Десятилетиями при хорошем уходе","3–5 лет"]},
        ]},
      { id:"l42", day:42, title:"Implant Surgery Day", titleRu:"День операции", icon:"⚙️", xp:18, keyword:"drilling",
        cards:[
          {w:"I'm drilling the implant site.",t:"Сверлю ложе для импланта.",e:"You'll feel vibration — that's normal.",i:"🔧",new:true},
          {w:"The implant is placed.",t:"Имплант установлен.",e:"The titanium screw is now in the bone.",i:"✅",new:false},
          {w:"Now I'll place the healing cap.",t:"Устанавливаю формирователь десны.",e:"This shapes the gum while healing.",i:"🔗",new:false},
          {w:"Come back in 3 months.",t:"Приходите через 3 месяца.",e:"We check the integration then.",i:"📅",new:false},
        ],
        quiz:[
          {type:"mcq",p:"Что чувствует пациент при сверлении?",a:"Вибрацию",o:["Вибрацию","Острую боль"]},
          {type:"mcq",p:"'Healing cap' — это?",a:"формирователь десны",o:["формирователь десны","коронка"]},
          {type:"mcq",p:"Через сколько проверяем интеграцию?",a:"Через 3 месяца",o:["Через 3 месяца","Через неделю"]},
          {type:"mcq",p:"'Implant is placed' значит?",a:"Имплант установлен",o:["Имплант установлен","Коронка готова"]},
        ]},
      { id:"l43", day:43, title:"Bone Grafting", titleRu:"Костная пластика", icon:"🦴", xp:18, keyword:"graft",
        cards:[
          {w:"You need a bone graft first.",t:"Сначала нужна костная пластика.",e:"There isn't enough bone for the implant yet.",i:"🦴",new:true},
          {w:"We use bovine bone material.",t:"Мы используем бычный костный материал.",e:"Safe, processed bovine bone — very effective.",i:"🐄",new:false},
          {w:"A membrane holds it in place.",t:"Мембрана удерживает трансплантат.",e:"The membrane dissolves on its own.",i:"🛡",new:false},
          {w:"We wait 4 months then place the implant.",t:"Ждём 4 месяца, затем ставим имплант.",e:"The graft needs time to become bone.",i:"⏳",new:false},
        ],
        quiz:[
          {type:"mcq",p:"Зачем нужна костная пластика?",a:"Недостаточно кости для импланта",o:["Недостаточно кости для импланта","Для красоты"]},
          {type:"mcq",p:"'Membrane' в костной пластике — зачем?",a:"Удерживает трансплантат",o:["Удерживает трансплантат","Для анестезии"]},
          {type:"mcq",p:"Сколько ждём после пластики?",a:"4 месяца",o:["4 месяца","2 недели"]},
          {type:"mcq",p:"'Bovine bone' — это?",a:"бычный костный заменитель",o:["бычный костный заменитель","металл"]},
        ]},
      { id:"l44", day:44, title:"Sinus Lift", titleRu:"Синус-лифтинг", icon:"🫁", xp:18, keyword:"sinus",
        cards:[
          {w:"Your sinus is too close.",t:"Ваша пазуха слишком близко.",e:"The sinus floor is near the implant site.",i:"🫁",new:true},
          {w:"We need to lift the sinus floor.",t:"Нам нужно поднять дно пазухи.",e:"This creates space for the implant.",i:"⬆️",new:false},
          {w:"It takes 6 months to heal.",t:"Заживление занимает 6 месяцев.",e:"After healing, we place the implant.",i:"⏳",new:false},
          {w:"Don't blow your nose after surgery.",t:"Не сморкайтесь после операции.",e:"Blowing can disturb the graft.",i:"🚫",new:false},
        ],
        quiz:[
          {type:"mcq",p:"Для чего нужен синус-лифт?",a:"Создать место для импланта",o:["Создать место для импланта","Лечить пазуху"]},
          {type:"mcq",p:"Почему нельзя сморкаться после операции?",a:"Можно нарушить трансплантат",o:["Можно нарушить трансплантат","Так принято"]},
          {type:"mcq",p:"Сколько длится заживление синус-лифта?",a:"6 месяцев",o:["6 месяцев","1 месяц"]},
          {type:"mcq",p:"'Lift the sinus floor' значит?",a:"поднять дно пазухи",o:["поднять дно пазухи","убрать пазуху"]},
        ]},
      { id:"l45", day:45, title:"Implant Complications", titleRu:"Осложнения", icon:"⚠️", xp:18, keyword:"failure",
        cards:[
          {w:"The implant hasn't integrated.",t:"Имплант не прижился.",e:"The bone didn't fuse with the implant.",i:"❌",new:true},
          {w:"Peri-implantitis is infection around the implant.",t:"Периимплантит — инфекция вокруг импланта.",e:"Like gum disease but around an implant.",i:"🦠",new:false},
          {w:"Smoking triples the failure rate.",t:"Курение утраивает риск отторжения.",e:"Please stop smoking for implant success.",i:"🚭",new:false},
          {w:"We'll remove and try again.",t:"Уберём и попробуем снова.",e:"After 3 months, we can try a new implant.",i:"🔄",new:false},
        ],
        quiz:[
          {type:"mcq",p:"'Peri-implantitis' — это?",a:"инфекция вокруг импланта",o:["инфекция вокруг импланта","нормальное заживление"]},
          {type:"mcq",p:"Как курение влияет на имплант?",a:"Утраивает риск отторжения",o:["Утраивает риск отторжения","Не влияет"]},
          {type:"mcq",p:"'Implant hasn't integrated' — это?",a:"имплант не прижился",o:["имплант не прижился","имплант прижился"]},
          {type:"mcq",p:"Что делать при отторжении?",a:"Удалить и попробовать снова",o:["Удалить и попробовать снова","Оставить как есть"]},
        ]},
    ]},

  // ════════════════════════════════════════════════
  // БЛОК 7 — Ортопедия (фразы, DadChar)
  // ════════════════════════════════════════════════
  { id:"u7", title:"Prosthetics Phrases", titleRu:"Фразы ортопедии", color:"#EC4899", icon:"👑", char:"dad",
    lessons:[
      { id:"l46", day:46, title:"Crown Preparation", titleRu:"Подготовка под коронку", icon:"👑", xp:18, keyword:"prepare",
        cards:[
          {w:"I need to prepare the tooth.",t:"Нужно препарировать зуб.",e:"I'll reduce the tooth by 2mm all around.",i:"🔧",new:true},
          {w:"You'll have a temporary crown.",t:"У вас будет временная коронка.",e:"A temp crown while we wait for the lab.",i:"⏳",new:false},
          {w:"I'm scanning your teeth.",t:"Я сканирую ваши зубы.",e:"Digital scan — no impression paste needed.",i:"🖥",new:false},
          {w:"Match the shade of your other teeth.",t:"Подбираем цвет под ваши зубы.",e:"We'll match the shade for a natural look.",i:"🎨",new:false},
        ],
        quiz:[
          {type:"mcq",p:"Зачем нужна временная коронка?",a:"Пока изготавливают постоянную",o:["Пока изготавливают постоянную","Это и есть постоянная"]},
          {type:"mcq",p:"'Digital scan' — это?",a:"цифровое снятие слепка",o:["цифровое снятие слепка","рентген"]},
          {type:"mcq",p:"'Shade matching' — это?",a:"подбор цвета коронки",o:["подбор цвета коронки","примерка формы"]},
          {type:"mcq",p:"'Prepare the tooth' — это?",a:"препарирование (обточка) зуба",o:["препарирование (обточка) зуба","удаление зуба"]},
        ]},
      { id:"l47", day:47, title:"Crown Fit & Cement", titleRu:"Примерка и фиксация", icon:"🔍", xp:18, keyword:"cement",
        cards:[
          {w:"Let's try the crown in.",t:"Давайте примерим коронку.",e:"I'll check fit, bite, and shade.",i:"🔍",new:true},
          {w:"Does it feel high?",t:"Не кажется ли она завышенной?",e:"Bite down — does anything feel high?",i:"😬",new:false},
          {w:"I'll adjust the bite.",t:"Скорректирую прикус.",e:"Using articulating paper to find high spots.",i:"📄",new:false},
          {w:"I'll cement it permanently now.",t:"Фиксирую на постоянный цемент.",e:"Hold still for 5 minutes please.",i:"🔒",new:false},
        ],
        quiz:[
          {type:"mcq",p:"'Try the crown in' — это?",a:"примерить коронку",o:["примерить коронку","снять коронку"]},
          {type:"mcq",p:"'Feels high' — значит?",a:"коронка завышает прикус",o:["коронка завышает прикус","коронка хорошо сидит"]},
          {type:"mcq",p:"'Articulating paper' используется для?",a:"выявления завышенных точек",o:["выявления завышенных точек","снятия слепка"]},
          {type:"mcq",p:"'Permanent cement' — это?",a:"постоянная фиксация",o:["постоянная фиксация","временная фиксация"]},
        ]},
      { id:"l48", day:48, title:"Bridge", titleRu:"Зубной мост", icon:"🌉", xp:18, keyword:"bridge",
        cards:[
          {w:"A bridge spans the gap.",t:"Мост перекрывает промежуток.",e:"The pontic fills the space of the missing tooth.",i:"🌉",new:true},
          {w:"We use two abutment teeth.",t:"Мы используем два опорных зуба.",e:"The adjacent teeth support the bridge.",i:"🏛",new:false},
          {w:"Clean under the bridge daily.",t:"Ежедневно чистите под мостом.",e:"Use a floss threader every day.",i:"🧵",new:false},
          {w:"A bridge lasts 10–15 years.",t:"Мост служит 10–15 лет.",e:"With good care, even longer.",i:"🛡",new:false},
        ],
        quiz:[
          {type:"mcq",p:"'Abutment teeth' — это?",a:"опорные зубы моста",o:["опорные зубы моста","удалённые зубы"]},
          {type:"mcq",p:"'Pontic' — это?",a:"промежуточная часть моста",o:["промежуточная часть моста","опорный зуб"]},
          {type:"mcq",p:"Как ухаживать под мостом?",a:"Нитеводитель каждый день",o:["Нитеводитель каждый день","Обычная щётка"]},
          {type:"mcq",p:"Сколько служит мост?",a:"10–15 лет",o:["10–15 лет","1–2 года"]},
        ]},
      { id:"l49", day:49, title:"Veneers", titleRu:"Виниры", icon:"✨", xp:18, keyword:"veneer",
        cards:[
          {w:"Veneers cover the front of the tooth.",t:"Виниры покрывают переднюю поверхность.",e:"Thin porcelain shells — 0.5mm thick.",i:"✨",new:true},
          {w:"Minimal preparation needed.",t:"Минимальное препарирование.",e:"We remove just 0.5mm of enamel.",i:"🔬",new:false},
          {w:"They last 10–15 years.",t:"Служат 10–15 лет.",e:"Avoid biting nails or very hard food.",i:"🛡",new:false},
          {w:"We design your smile first.",t:"Сначала проектируем улыбку.",e:"Digital smile design before any drilling.",i:"😃",new:false},
        ],
        quiz:[
          {type:"mcq",p:"Что такое виниры?",a:"Тонкие фарфоровые накладки",o:["Тонкие фарфоровые накладки","Тип коронки"]},
          {type:"mcq",p:"Сколько эмали снимают под виниры?",a:"0.5mm",o:["0.5mm","2mm"]},
          {type:"mcq",p:"'Smile design' делают?",a:"До начала лечения",o:["До начала лечения","После установки"]},
          {type:"mcq",p:"Что нельзя делать с винирами?",a:"Кусать ногти и твёрдые предметы",o:["Кусать ногти и твёрдые предметы","Чистить зубы"]},
        ]},
      { id:"l50", day:50, title:"Dentures", titleRu:"Протезы", icon:"😁", xp:18, keyword:"denture",
        cards:[
          {w:"A complete denture replaces all teeth.",t:"Полный протез заменяет все зубы.",e:"Upper or lower — or both.",i:"😁",new:true},
          {w:"It takes time to adapt.",t:"Нужно время для адаптации.",e:"4–8 weeks for speech and eating to improve.",i:"⏳",new:false},
          {w:"Remove at night.",t:"Снимайте на ночь.",e:"Soak in cleaning solution overnight.",i:"🌙",new:false},
          {w:"Implants can hold the denture.",t:"Импланты могут фиксировать протез.",e:"Two implants give much better stability.",i:"🔩",new:false},
        ],
        quiz:[
          {type:"mcq",p:"Как долго адаптация к протезу?",a:"4–8 недель",o:["4–8 недель","1 день"]},
          {type:"mcq",p:"Что делать с протезом ночью?",a:"Снять и замочить в растворе",o:["Снять и замочить в растворе","Оставить во рту"]},
          {type:"mcq",p:"'Implant-retained denture' — это?",a:"протез на имплантах",o:["протез на имплантах","обычный протез"]},
          {type:"mcq",p:"Два импланта под протез дают?",a:"намного лучшую фиксацию",o:["намного лучшую фиксацию","лишний вес"]},
        ]},
    ]},

  // ════════════════════════════════════════════════
  // БЛОК 8 — Сложные разговоры (MomChar)
  // ════════════════════════════════════════════════
  { id:"u8", title:"Difficult Conversations", titleRu:"Сложные разговоры", color:"#0EA5E9", icon:"💬", char:"mom",
    lessons:[
      { id:"l51", day:51, title:"Breaking Bad News", titleRu:"Плохие новости", icon:"😔", xp:20, keyword:"unfortunately",
        cards:[
          {w:"Unfortunately, the tooth cannot be saved.",t:"К сожалению, зуб спасти невозможно.",e:"I've considered all options — extraction is best.",i:"😔",new:true},
          {w:"I'm afraid I have difficult news.",t:"Боюсь, у меня неприятные новости.",e:"I want to be honest with you.",i:"😟",new:false},
          {w:"I understand this is disappointing.",t:"Я понимаю, это разочаровывает.",e:"Do you have any questions for me?",i:"🤝",new:false},
          {w:"We have options going forward.",t:"У нас есть варианты дальнейшего лечения.",e:"Implant, bridge, or denture.",i:"🔀",new:false},
        ],
        quiz:[
          {type:"mcq",p:"Как тактично сообщить о необходимости удаления?",a:"Unfortunately, the tooth cannot be saved.",o:["Unfortunately, the tooth cannot be saved.","Pull it now."]},
          {type:"mcq",p:"'I'm afraid I have difficult news' — это?",a:"Боюсь, у меня плохие новости",o:["Боюсь, у меня плохие новости","Всё хорошо"]},
          {type:"mcq",p:"'I understand this is disappointing' — зачем?",a:"Проявить сочувствие",o:["Проявить сочувствие","Объяснить цену"]},
          {type:"mcq",p:"'Options going forward' — это?",a:"варианты лечения",o:["варианты лечения","прогноз"]},
        ]},
      { id:"l52", day:52, title:"Cost & Phasing", titleRu:"Стоимость и этапы", icon:"💰", xp:20, keyword:"phase",
        cards:[
          {w:"Let me prepare a cost estimate.",t:"Позвольте подготовить смету.",e:"A written estimate for everything.",i:"📄",new:true},
          {w:"We can phase the treatment.",t:"Мы можем разбить лечение на этапы.",e:"Most urgent first, then the rest.",i:"📅",new:false},
          {w:"The implant is the best long-term option.",t:"Имплант — лучший вариант на долгосрочной основе.",e:"More expensive but lasts a lifetime.",i:"🔩",new:false},
          {w:"A bridge is more affordable.",t:"Мост более доступный по цене.",e:"A good option if the budget is limited.",i:"🌉",new:false},
        ],
        quiz:[
          {type:"mcq",p:"'Phase the treatment' значит?",a:"разбить на этапы",o:["разбить на этапы","ускорить лечение"]},
          {type:"mcq",p:"'Cost estimate' — это?",a:"смета расходов",o:["смета расходов","рецепт"]},
          {type:"mcq",p:"Пациент говорит дорого. Ваш ответ?",a:"We can phase the treatment.",o:["We can phase the treatment.","Find another clinic."]},
          {type:"mcq",p:"'More affordable' значит?",a:"более доступный по цене",o:["более доступный по цене","более дорогой"]},
        ]},
      { id:"l53", day:53, title:"Informed Consent", titleRu:"Информированное согласие", icon:"📋", xp:20, keyword:"consent",
        cards:[
          {w:"I need your consent.",t:"Мне нужно ваше согласие.",e:"Please sign this consent form.",i:"📋",new:true},
          {w:"The risks include...",t:"Риски включают...",e:"Bleeding, infection, and numbness.",i:"⚠️",new:false},
          {w:"The benefits are...",t:"Преимущества включают...",e:"Pain relief and restored function.",i:"✅",new:false},
          {w:"The final decision is yours.",t:"Окончательное решение за вами.",e:"Take your time — no rush.",i:"🤝",new:false},
        ],
        quiz:[
          {type:"mcq",p:"'Informed consent' — это?",a:"информированное согласие пациента",o:["информированное согласие пациента","рецепт"]},
          {type:"mcq",p:"'Risks include bleeding' — это?",a:"риски включают кровотечение",o:["риски включают кровотечение","преимущества"]},
          {type:"mcq",p:"'Final decision is yours' означает?",a:"Пациент принимает решение",o:["Пациент принимает решение","Врач решает"]},
          {type:"mcq",p:"Что нужно подписать перед операцией?",a:"Форму согласия",o:["Форму согласия","Рецепт"]},
        ]},
      { id:"l54", day:54, title:"Follow-up & Review", titleRu:"Наблюдение", icon:"📅", xp:20, keyword:"follow-up",
        cards:[
          {w:"Come back in one week.",t:"Приходите через неделю.",e:"I'll check how you're healing.",i:"📅",new:true},
          {w:"How are you feeling?",t:"Как вы себя чувствуете?",e:"Any pain, swelling, or concerns?",i:"🤔",new:false},
          {w:"The healing looks good.",t:"Заживление идёт хорошо.",e:"Everything is progressing normally.",i:"✅",new:false},
          {w:"We'll remove the sutures today.",t:"Сегодня снимем швы.",e:"It's quick and painless.",i:"✂️",new:false},
        ],
        quiz:[
          {type:"mcq",p:"'Come back in one week' — это?",a:"Вернитесь через неделю",o:["Вернитесь через неделю","Вы свободны"]},
          {type:"mcq",p:"'Healing looks good' значит?",a:"заживление идёт нормально",o:["заживление идёт нормально","есть проблемы"]},
          {type:"mcq",p:"'Remove the sutures' — это?",a:"снять швы",o:["снять швы","наложить швы"]},
          {type:"mcq",p:"На контроле спрашивают?",a:"О боли, отёке и самочувствии",o:["О боли, отёке и самочувствии","О страховке"]},
        ]},
      { id:"l55", day:55, title:"Patient Complaints", titleRu:"Жалобы пациента", icon:"😤", xp:20, keyword:"complaint",
        cards:[
          {w:"I completely understand your concern.",t:"Я полностью понимаю ваше беспокойство.",e:"Let me take a look and we'll sort this out.",i:"🤝",new:true},
          {w:"Let me examine you right away.",t:"Позвольте осмотреть вас прямо сейчас.",e:"We'll find out what's happening.",i:"🔍",new:false},
          {w:"I'm sorry you're in discomfort.",t:"Мне жаль, что вам некомфортно.",e:"We'll do everything to help.",i:"😔",new:false},
          {w:"We'll fix this today.",t:"Мы исправим это сегодня.",e:"Your comfort is our priority.",i:"✅",new:false},
        ],
        quiz:[
          {type:"mcq",p:"Как реагировать на жалобу пациента?",a:"I completely understand your concern.",o:["I completely understand your concern.","That's not possible."]},
          {type:"mcq",p:"'Let me examine you right away' — это?",a:"Позвольте осмотреть вас сейчас",o:["Позвольте осмотреть вас сейчас","Придите завтра"]},
          {type:"mcq",p:"'We'll fix this today' — это?",a:"Мы исправим сегодня",o:["Мы исправим сегодня","Подождите неделю"]},
          {type:"mcq",p:"'Your comfort is our priority' значит?",a:"Ваш комфорт — наш приоритет",o:["Ваш комфорт — наш приоритет","Деньги важнее"]},
        ]},
    ]},

  // ════════════════════════════════════════════════
  // БЛОК 9 — Профессиональный English (MomChar)
  // ════════════════════════════════════════════════
  { id:"u9", title:"Professional English", titleRu:"Профессиональный English", color:"#14B8A6", icon:"💼", char:"mom",
    lessons:[
      { id:"l56", day:56, title:"Referral Letter", titleRu:"Письмо-направление", icon:"📨", xp:22, keyword:"refer",
        cards:[
          {w:"Dear Dr. [Name],",t:"Уважаемый доктор [Имя],",e:"Always use formal salutation in referrals.",i:"📨",new:true},
          {w:"I am writing to refer my patient...",t:"Я пишу, чтобы направить пациента...",e:"State the purpose immediately.",i:"✍️",new:false},
          {w:"The patient presents with...",t:"Пациент обращается с...",e:"Describe the main complaint clearly.",i:"📋",new:false},
          {w:"Yours sincerely,",t:"С уважением,",e:"Always close formal letters properly.",i:"🖊",new:false},
        ],
        quiz:[
          {type:"mcq",p:"Как начать письмо-направление?",a:"Dear Dr. Smith, I am writing to refer...",o:["Dear Dr. Smith, I am writing to refer...","Hello! Help with patient."]},
          {type:"mcq",p:"'The patient presents with' — это?",a:"Пациент обращается с жалобой на",o:["Пациент обращается с жалобой на","Пациент выздоровел"]},
          {type:"mcq",p:"'Yours sincerely' — это?",a:"официальное завершение письма",o:["официальное завершение письма","приветствие"]},
          {type:"mcq",p:"Что обязательно в направлении?",a:"Имя, дата рождения, диагноз, снимки",o:["Имя, дата рождения, диагноз, снимки","Только имя"]},
        ]},
      { id:"l57", day:57, title:"Job Interview Basics", titleRu:"Собеседование: основы", icon:"💼", xp:22, keyword:"experience",
        cards:[
          {w:"Tell me about yourself.",t:"Расскажите о себе.",e:"Keep it professional and relevant.",i:"👤",new:true},
          {w:"I have 7 years of experience.",t:"У меня 7 лет опыта.",e:"In dental surgery and prosthodontics.",i:"📋",new:false},
          {w:"I specialize in implantology.",t:"Я специализируюсь на имплантологии.",e:"My main focus is complex cases.",i:"🎯",new:false},
          {w:"I am ready to relocate.",t:"Я готов к переезду.",e:"Fully committed to this opportunity.",i:"✈️",new:false},
        ],
        quiz:[
          {type:"mcq",p:"Как начать ответ 'Tell me about yourself'?",a:"I'm a dental surgeon with 7 years...",o:["I'm a dental surgeon with 7 years...","I like teeth."]},
          {type:"mcq",p:"'I specialize in implantology' — это?",a:"Я специализируюсь на имплантологии",o:["Я специализируюсь на имплантологии","Я изучаю имплантологию"]},
          {type:"mcq",p:"'Ready to relocate' значит?",a:"Готов к переезду",o:["Готов к переезду","Хочу работать дома"]},
          {type:"mcq",p:"'7 years of experience' — это?",a:"7 лет опыта",o:["7 лет опыта","7 лет учёбы"]},
        ]},
      { id:"l58", day:58, title:"Interview: Strengths", titleRu:"Собеседование: сильные стороны", icon:"💪", xp:22, keyword:"strength",
        cards:[
          {w:"My strength is surgical precision.",t:"Моя сильная сторона — хирургическая точность.",e:"I've placed over 300 implants.",i:"💪",new:true},
          {w:"I communicate well with patients.",t:"Я хорошо нахожу общий язык с пациентами.",e:"Especially nervous or anxious patients.",i:"🤝",new:false},
          {w:"I keep up with new techniques.",t:"Я слежу за новыми методиками.",e:"I attend international conferences.",i:"📚",new:false},
          {w:"I work well under pressure.",t:"Я хорошо работаю под давлением.",e:"Emergency cases don't faze me.",i:"🧊",new:false},
        ],
        quiz:[
          {type:"mcq",p:"'Surgical precision' — это?",a:"хирургическая точность",o:["хирургическая точность","скорость"]},
          {type:"mcq",p:"'Communicate well with patients' — это?",a:"хорошо общаться с пациентами",o:["хорошо общаться с пациентами","быстро лечить"]},
          {type:"mcq",p:"'Work well under pressure' значит?",a:"хорошо работать в стрессовых ситуациях",o:["хорошо работать в стрессовых ситуациях","не торопиться"]},
          {type:"mcq",p:"'Keep up with new techniques' — это?",a:"следить за новыми методиками",o:["следить за новыми методиками","использовать старые методы"]},
        ]},
      { id:"l59", day:59, title:"Emergency English", titleRu:"Экстренные ситуации", icon:"🚨", xp:22, keyword:"emergency",
        cards:[
          {w:"Stop the procedure immediately.",t:"Немедленно остановите процедуру.",e:"Patient has collapsed or reacted badly.",i:"🚨",new:true},
          {w:"Call an ambulance now.",t:"Вызовите скорую немедленно.",e:"Dial 112 or 999 depending on the country.",i:"🚑",new:false},
          {w:"Lay the patient flat.",t:"Уложите пациента горизонтально.",e:"Legs elevated — vasovagal syncope.",i:"🛋",new:false},
          {w:"Administer epinephrine.",t:"Введите адреналин.",e:"For anaphylaxis — EpiPen, outer thigh.",i:"💉",new:false},
        ],
        quiz:[
          {type:"mcq",p:"При обмороке пациента — первое действие?",a:"Уложить горизонтально, ноги выше",o:["Уложить горизонтально, ноги выше","Продолжить лечение"]},
          {type:"mcq",p:"'Administer epinephrine' — когда?",a:"При анафилаксии",o:["При анафилаксии","При кровотечении"]},
          {type:"mcq",p:"'Call an ambulance' — это?",a:"Вызвать скорую",o:["Вызвать скорую","Позвонить коллеге"]},
          {type:"mcq",p:"'Stop the procedure immediately' — когда?",a:"При любой экстренной ситуации",o:["При любой экстренной ситуации","Когда пациент просит"]},
        ]},
      { id:"l60", day:60, title:"Prescription & Medication", titleRu:"Рецепты и лекарства", icon:"💊", xp:22, keyword:"prescribe",
        cards:[
          {w:"I'm prescribing you antibiotics.",t:"Я выписываю вам антибиотики.",e:"Take one tablet three times a day.",i:"💊",new:true},
          {w:"Take with food.",t:"Принимайте с едой.",e:"Antibiotics can upset an empty stomach.",i:"🍽",new:false},
          {w:"Complete the full course.",t:"Пройдите полный курс.",e:"Don't stop early even if you feel better.",i:"📅",new:false},
          {w:"For pain, take ibuprofen.",t:"От боли — ибупрофен.",e:"400mg every 6 hours with food.",i:"🌡",new:false},
        ],
        quiz:[
          {type:"mcq",p:"'Prescribe' — это?",a:"выписывать рецепт",o:["выписывать рецепт","принимать"]},
          {type:"mcq",p:"'Complete the full course' значит?",a:"Пройдите полный курс лечения",o:["Пройдите полный курс лечения","Остановитесь когда лучше"]},
          {type:"mcq",p:"'Take with food' — это?",a:"принимать с едой",o:["принимать с едой","натощак"]},
          {type:"mcq",p:"Как часто принимают ибупрофен?",a:"каждые 6 часов",o:["каждые 6 часов","раз в день"]},
        ]},
    ]},

  // ════════════════════════════════════════════════
  // БЛОК 10 — Финальный уровень (MomChar)
  // ════════════════════════════════════════════════
  { id:"u10", title:"Advanced Clinical English", titleRu:"Продвинутый клинический English", color:"#F59E0B", icon:"🏆", char:"mom",
    lessons:[
      { id:"l61", day:61, title:"Full Mouth Rehab", titleRu:"Полная реабилитация", icon:"🏆", xp:25, keyword:"rehabilitation",
        cards:[
          {w:"Full mouth rehabilitation",t:"Полная реабилитация полости рта",e:"Restoring all teeth to full function.",i:"🏆",new:true},
          {w:"We'll work in stages.",t:"Будем работать поэтапно.",e:"Priority — pain relief, then aesthetics.",i:"📋",new:false},
          {w:"This will take 12–18 months.",t:"Это займёт 12–18 месяцев.",e:"Complex cases take time to do well.",i:"📅",new:false},
          {w:"The result will be life-changing.",t:"Результат изменит вашу жизнь.",e:"Full function and beautiful aesthetics.",i:"✨",new:false},
        ],
        quiz:[
          {type:"mcq",p:"'Full mouth rehabilitation' — это?",a:"полное восстановление всех зубов",o:["полное восстановление всех зубов","один имплант"]},
          {type:"mcq",p:"С чего начинают реабилитацию?",a:"С устранения боли",o:["С устранения боли","С эстетики"]},
          {type:"mcq",p:"Сколько длится комплексная реабилитация?",a:"12–18 месяцев",o:["12–18 месяцев","1 месяц"]},
          {type:"mcq",p:"'Life-changing result' — это?",a:"результат, меняющий жизнь",o:["результат, меняющий жизнь","небольшое улучшение"]},
        ]},
      { id:"l62", day:62, title:"Perio & Implant Link", titleRu:"Связь пародонта и импланта", icon:"🔗", xp:25, keyword:"periodontal",
        cards:[
          {w:"Your gum disease must be treated first.",t:"Сначала нужно вылечить болезнь дёсен.",e:"Implants fail in untreated gum disease.",i:"🔗",new:true},
          {w:"Peri-implantitis mirrors periodontitis.",t:"Периимплантит схож с пародонтитом.",e:"Same bacteria — different surface.",i:"🦠",new:false},
          {w:"Maintenance is critical.",t:"Регулярное обслуживание критически важно.",e:"3-monthly recall for implant patients.",i:"📅",new:false},
          {w:"Smoking is the biggest risk factor.",t:"Курение — главный фактор риска.",e:"Both for gum disease and implant failure.",i:"🚭",new:false},
        ],
        quiz:[
          {type:"mcq",p:"Почему нельзя ставить имплант при болезни дёсен?",a:"Имплант не приживётся",o:["Имплант не приживётся","Это дорого"]},
          {type:"mcq",p:"'Maintenance is critical' для импланта — это?",a:"регулярные осмотры каждые 3 месяца",o:["регулярные осмотры каждые 3 месяца","раз в год"]},
          {type:"mcq",p:"'Peri-implantitis' похожа на?",a:"пародонтит",o:["пародонтит","кариес"]},
          {type:"mcq",p:"Главный фактор риска для импланта?",a:"курение",o:["курение","возраст"]},
        ]},
      { id:"l63", day:63, title:"Occlusion & TMJ", titleRu:"Окклюзия и ВНЧС", icon:"⚖️", xp:25, keyword:"TMJ",
        cards:[
          {w:"TMJ — temporomandibular joint",t:"ВНЧС — височно-нижнечелюстной сустав",e:"The joint connecting jaw to skull.",i:"⚖️",new:true},
          {w:"Do you have jaw clicking?",t:"Есть ли щелчки в суставе?",e:"Clicking can indicate TMJ disorder.",i:"🔊",new:false},
          {w:"Bruxism causes TMJ problems.",t:"Бруксизм вызывает проблемы ВНЧС.",e:"Night grinding damages joints and teeth.",i:"😬",new:false},
          {w:"A night guard protects your teeth.",t:"Каппа защищает ваши зубы ночью.",e:"Worn during sleep to prevent grinding.",i:"🛡",new:false},
        ],
        quiz:[
          {type:"mcq",p:"'TMJ' — это?",a:"височно-нижнечелюстной сустав",o:["височно-нижнечелюстной сустав","тип импланта"]},
          {type:"mcq",p:"'Jaw clicking' — признак чего?",a:"дисфункции ВНЧС",o:["дисфункции ВНЧС","нормы"]},
          {type:"mcq",p:"'Night guard' защищает от?",a:"бруксизма ночью",o:["бруксизма ночью","кариеса"]},
          {type:"mcq",p:"'Bruxism' — это?",a:"ночной скрежет зубами",o:["ночной скрежет зубами","кариес"]},
        ]},
      { id:"l64", day:64, title:"Digital Dentistry", titleRu:"Цифровая стоматология", icon:"🖥", xp:25, keyword:"digital",
        cards:[
          {w:"Intraoral scanner",t:"Внутриротовой сканер",e:"No impression paste — just a scan.",i:"🖥",new:true},
          {w:"CAD/CAM crown",t:"CAD/CAM коронка",e:"Designed and milled in-house same day.",i:"⚙️",new:false},
          {w:"Digital smile design",t:"Цифровой дизайн улыбки",e:"Preview the result before treatment.",i:"😃",new:false},
          {w:"Guided implant surgery",t:"Хирургический шаблон",e:"3D-printed guide for precise placement.",i:"🎯",new:false},
        ],
        quiz:[
          {type:"mcq",p:"'Intraoral scanner' заменяет?",a:"традиционные слепки",o:["традиционные слепки","рентген"]},
          {type:"mcq",p:"'CAD/CAM crown' изготавливают?",a:"в клинике в тот же день",o:["в клинике в тот же день","в лаборатории за 2 недели"]},
          {type:"mcq",p:"'Guided implant surgery' — это?",a:"установка импланта по шаблону",o:["установка импланта по шаблону","ручная установка"]},
          {type:"mcq",p:"'Digital smile design' позволяет?",a:"предпросмотр результата до лечения",o:["предпросмотр результата до лечения","ускорить лечение"]},
        ]},
      { id:"l65", day:65, title:"Final Review & Mastery", titleRu:"Финальное повторение", icon:"🎓", xp:30, keyword:"mastery",
        cards:[
          {w:"Open wide — bite — rinse — spit",t:"Откройте — прикусите — прополощите — выплюньте",e:"The four most used commands.",i:"👄",new:false},
          {w:"Pain → diagnose → plan → treat",t:"Боль → диагноз → план → лечение",e:"The clinical workflow.",i:"🔄",new:false},
          {w:"Implant → graft → crown",t:"Имплант → пластика → коронка",e:"The implant journey.",i:"🔩",new:false},
          {w:"Listen → explain → consent → treat",t:"Выслушай → объясни → согласие → лечи",e:"The doctor-patient relationship.",i:"🤝",new:false},
        ],
        quiz:[
          {type:"mcq",p:"4 основные команды пациенту?",a:"Open — bite — rinse — spit",o:["Open — bite — rinse — spit","Come — sit — pay — go"]},
          {type:"mcq",p:"Рабочий процесс врача?",a:"Diagnose → plan → treat",o:["Diagnose → plan → treat","Scan → pay → treat"]},
          {type:"mcq",p:"Этапы имплантации?",a:"Implant → healing → crown",o:["Implant → healing → crown","Crown → implant → graft"]},
          {type:"mcq",p:"Основа отношений врач-пациент?",a:"Listen → explain → consent",o:["Listen → explain → consent","Treat → explain → bill"]},
        ]},
    ]},
];

const ALL_LESSONS = UNITS.flatMap(u => u.lessons);

const PLACEMENT_Q = [
  {q:"What does 'open wide' mean?",a:"Откройте рот широко",o:["Закройте рот","Откройте рот широко","Подождите","Повернитесь"]},
  {q:"Translate: 'Are you allergic to penicillin?'",a:"Есть ли у вас аллергия на пенициллин?",o:["Есть ли у вас аллергия на пенициллин?","Принимаете ли вы антибиотики?","Были ли у вас операции?","Есть ли у вас страховка?"]},
  {q:"What is 'local anesthesia'?",a:"Местная анестезия",o:["Общий наркоз","Местная анестезия","Успокоительное","Обезболивающая таблетка"]},
  {q:"What does 'extraction' mean?",a:"Удаление зуба",o:["Пломбирование","Удаление зуба","Коронка","Протез"]},
  {q:"What is 'osseointegration'?",a:"Сращение импланта с костью",o:["Воспаление импланта","Установка коронки","Сращение импланта с костью","Тип анестезии"]},
  {q:"Complete: 'The implant needs 3–6 months for ___ before loading.'",a:"osseointegration",o:["healing","osseointegration","removal","payment"]},
  {q:"What is 'peri-implantitis'?",a:"Воспаление вокруг импланта",o:["Тип импланта","Воспаление вокруг импланта","Нормальное заживление","Удаление импланта"]},
  {q:"Which sentence is grammatically correct?",a:"The patient presents with a periapical abscess.",o:["Patient has periapical abscess.","The patient presents with a periapical abscess.","Patient presenting abscess.","There is patient with abscess."]},
];

// ── Диалоговые симуляции ─────────────────────────────────────
const DIALOGUES = [
  { id:"d1", title:"First Patient Visit", titleRu:"Первый визит", icon:"👋", unit:"u1", xp:20,
    scenario:"A new patient walks in looking nervous. Practice the full reception flow.",
    scenarioRu:"Новый пациент. Отработай приём от начала до конца.",
    turns:[
      {speaker:"patient", text:"Um... hello. I think I have an appointment?", mood:"😰"},
      {speaker:"doctor", prompt:"Поприветствуй и попроси присесть", correct:"Good morning! Welcome. Please come in and have a seat — I'll be with you shortly.", hints:["Good morning! Welcome.","Please come in and have a seat.","I'll be right with you."]},
      {speaker:"patient", text:"Thank you. I'm a bit nervous, this is my first time here.", mood:"😟"},
      {speaker:"doctor", prompt:"Успокой пациента и спроси что беспокоит", correct:"That's completely normal — we'll take good care of you. What brings you in today?", hints:["That's completely normal.","We'll take good care of you.","What brings you in today?"]},
      {speaker:"patient", text:"I have pain in my lower right side. It's been there for about a week.", mood:"😣"},
      {speaker:"doctor", prompt:"Уточни характер боли — шкала 1-10", correct:"I'm sorry to hear that. On a scale of 1 to 10, how would you rate the pain?", hints:["On a scale of 1 to 10","how would you rate the pain?","I'm sorry to hear that."]},
      {speaker:"patient", text:"Maybe a 6? It gets worse when I eat something cold.", mood:"🤔"},
      {speaker:"doctor", prompt:"Скажи что сейчас осмотришь", correct:"Thank you — that's very helpful. Let me take a look and we'll take an X-ray to find out exactly what's going on.", hints:["Let me take a look","we'll take an X-ray","find out what's going on"]},
    ]},
  { id:"d2", title:"Implant Consultation", titleRu:"Консультация по импланту", icon:"🔩", unit:"u5", xp:25,
    scenario:"Patient wants to replace a missing tooth. Guide them through implant options.",
    scenarioRu:"Пациент хочет заменить отсутствующий зуб. Объясни варианты.",
    turns:[
      {speaker:"patient", text:"My dentist said I need an implant. Can you explain what that means exactly?", mood:"🤔"},
      {speaker:"doctor", prompt:"Объясни что такое имплант простыми словами", correct:"Of course! A dental implant is a small titanium screw that we place in your jawbone — it acts as an artificial tooth root. Then we attach a crown on top, so it looks and feels just like a natural tooth.", hints:["titanium screw","placed in your jawbone","artificial tooth root","crown on top"]},
      {speaker:"patient", text:"How long does the whole process take?", mood:"😐"},
      {speaker:"doctor", prompt:"Объясни 3 этапа и сроки", correct:"The treatment has three stages. First, we place the implant and wait 3 to 6 months for it to fuse with the bone — we call this osseointegration. Then we add the crown. Total time is around 6 to 9 months.", hints:["three stages","3 to 6 months","osseointegration","add the crown"]},
      {speaker:"patient", text:"Does it hurt? I'm worried about the surgery.", mood:"😰"},
      {speaker:"doctor", prompt:"Успокой насчёт боли во время и после", correct:"During the surgery you won't feel any pain — we use local anesthesia. Afterwards, you may have some mild discomfort for 2 to 3 days, which we manage with painkillers. Most patients are surprised by how straightforward it is.", hints:["local anesthesia","won't feel pain","mild discomfort","2 to 3 days"]},
      {speaker:"patient", text:"How much does it cost approximately?", mood:"💰"},
      {speaker:"doctor", prompt:"Предложи смету и поэтапное лечение", correct:"I'll prepare a detailed written cost estimate for you. We can also phase the treatment if needed — for example, the implant surgery first, then the crown a few months later.", hints:["written cost estimate","phase the treatment","implant surgery first","crown later"]},
    ]},
  { id:"d3", title:"Post-Op Worried Patient", titleRu:"Тревожный пациент после операции", icon:"😟", unit:"u4", xp:22,
    scenario:"Patient calls worried about pain and swelling after extraction.",
    scenarioRu:"Пациент беспокоится после удаления зуба.",
    turns:[
      {speaker:"patient", text:"Doctor, I had my tooth out yesterday and my face is really swollen. Is this normal?", mood:"😰"},
      {speaker:"doctor", prompt:"Успокой — отёк на 2-3 день это норма", correct:"I completely understand your concern. Some swelling after an extraction is completely normal — it usually peaks on day 2 or 3 and then gradually improves. This is a normal part of healing.", hints:["swelling is normal","peaks on day 2 or 3","gradually improves","normal part of healing"]},
      {speaker:"patient", text:"But it's getting bigger since this morning. And I have some pain too.", mood:"😟"},
      {speaker:"doctor", prompt:"Уточни про кровяной сгусток и альвеолит", correct:"Are you taking your painkillers as prescribed? Also, have you been smoking or rinsing forcefully? These can disturb the blood clot and cause a painful condition called dry socket.", hints:["taking painkillers","smoking or rinsing","blood clot","dry socket"]},
      {speaker:"patient", text:"I did have a cigarette last night... and the pain is getting worse today.", mood:"😣"},
      {speaker:"doctor", prompt:"Попроси прийти на приём сегодня", correct:"I'd like to see you today so I can examine the area. It sounds like you may have developed dry socket. Please avoid smoking completely until this heals. Can you come in this afternoon?", hints:["see you today","dry socket","avoid smoking","come in this afternoon"]},
    ]},
  { id:"d4", title:"Crown Try-in", titleRu:"Примерка коронки", icon:"👑", unit:"u6", xp:22,
    scenario:"The lab crown has arrived. Guide the patient through try-in and cementation.",
    scenarioRu:"Коронка готова. Примерка и фиксация.",
    turns:[
      {speaker:"patient", text:"So my crown is ready today?", mood:"😊"},
      {speaker:"doctor", prompt:"Подтверди и объясни что будет", correct:"Yes, your permanent crown has arrived from the lab! Today I'll try it in first to check the fit, the bite, and the shade — and if everything looks perfect, we'll cement it permanently.", hints:["permanent crown","try it in","check the fit","cement it permanently"]},
      {speaker:"patient", text:"Okay, what do I need to do?", mood:"🤔"},
      {speaker:"doctor", prompt:"Попроси открыть рот и объясни процесс", correct:"Just open wide and relax. I'll place the crown temporarily and ask you to bite down so I can check your bite. Tell me if anything feels high or uncomfortable.", hints:["open wide","bite down","feels high","uncomfortable"]},
      {speaker:"patient", text:"It feels a bit high on the right side when I bite.", mood:"😐"},
      {speaker:"doctor", prompt:"Объясни что скорректируешь прикус", correct:"Good catch — thank you for telling me. I'll mark the high spot with articulating paper and adjust it with a fine bur. This takes just a minute and makes a big difference.", hints:["articulating paper","adjust","fine bur","just a minute"]},
      {speaker:"patient", text:"That feels much better now. More natural.", mood:"😊"},
      {speaker:"doctor", prompt:"Подтверди и фиксируй коронку", correct:"Excellent! The fit and shade look perfect. I'm happy with the result. I'll now cement the crown permanently — just stay still for about 5 minutes while the cement sets.", hints:["fit and shade","cement permanently","stay still","5 minutes"]},
    ]},
];

// ── Telegram Haptic Feedback ──────────────────────────────────
function haptic(type="light"){
  try{
    const tg=window.Telegram?.WebApp;
    if(!tg)return;
    if(type==="light") tg.HapticFeedback.impactOccurred("light");
    else if(type==="medium") tg.HapticFeedback.impactOccurred("medium");
    else if(type==="heavy") tg.HapticFeedback.impactOccurred("heavy");
    else if(type==="success") tg.HapticFeedback.notificationOccurred("success");
    else if(type==="error") tg.HapticFeedback.notificationOccurred("error");
    else if(type==="warning") tg.HapticFeedback.notificationOccurred("warning");
    else if(type==="select") tg.HapticFeedback.selectionChanged();
  }catch(e){}
  // Fallback для не-Telegram браузеров
  try{if(navigator.vibrate){
    if(type==="success") navigator.vibrate([30,10,30]);
    else if(type==="error") navigator.vibrate([80,20,80]);
    else if(type==="heavy") navigator.vibrate([100,30,100,30,200]);
    else navigator.vibrate(20);
  }}catch(e){}
}

function getLevel(score){if(score>=0.75)return "advanced";if(score>=0.4)return "intermediate";return "beginner";}
const LEVEL_COLORS = {beginner:"#10B981",intermediate:"#F59E0B",advanced:"#EF4444"};
const LEVEL_LABELS = {beginner:"Начинающий",intermediate:"Средний",advanced:"Продвинутый"};

// ── Web Audio Sounds (no user gesture needed) ─────────────────
function playSound(type){
  try{
    const ctx=new(window.AudioContext||window.webkitAudioContext)();
    const g=ctx.createGain();
    g.connect(ctx.destination);
    if(type==="correct"){
      // happy ding ding
      [523,659,784].forEach((f,i)=>{
        const o=ctx.createOscillator();
        o.connect(g);o.type="sine";o.frequency.value=f;
        g.gain.setValueAtTime(0.18,ctx.currentTime+i*0.12);
        g.gain.exponentialRampToValueAtTime(0.001,ctx.currentTime+i*0.12+0.25);
        o.start(ctx.currentTime+i*0.12);o.stop(ctx.currentTime+i*0.12+0.25);
      });
    } else if(type==="wrong"){
      // low buzz
      const o=ctx.createOscillator();o.connect(g);o.type="sawtooth";
      o.frequency.setValueAtTime(220,ctx.currentTime);
      o.frequency.exponentialRampToValueAtTime(110,ctx.currentTime+0.3);
      g.gain.setValueAtTime(0.15,ctx.currentTime);
      g.gain.exponentialRampToValueAtTime(0.001,ctx.currentTime+0.35);
      o.start();o.stop(ctx.currentTime+0.35);
    } else if(type==="complete"){
      // fanfare
      [523,659,784,1047].forEach((f,i)=>{
        const o=ctx.createOscillator();o.connect(g);o.type="sine";o.frequency.value=f;
        g.gain.setValueAtTime(0.2,ctx.currentTime+i*0.1);
        g.gain.exponentialRampToValueAtTime(0.001,ctx.currentTime+i*0.1+0.4);
        o.start(ctx.currentTime+i*0.1);o.stop(ctx.currentTime+i*0.1+0.4);
      });
    } else if(type==="flip"){
      const o=ctx.createOscillator();o.connect(g);o.type="sine";o.frequency.value=440;
      g.gain.setValueAtTime(0.08,ctx.currentTime);
      g.gain.exponentialRampToValueAtTime(0.001,ctx.currentTime+0.12);
      o.start();o.stop(ctx.currentTime+0.12);
    }
  }catch(e){}
}

// ── Confetti ──────────────────────────────────────────────────
function Confetti(){
  const pieces=Array.from({length:30},(_,i)=>({
    id:i, x:Math.random()*100, delay:Math.random()*0.8,
    color:["#F59E0B","#10B981","#0EA5E9","#EF4444","#8B5CF6","#EC4899"][i%6],
    size:6+Math.random()*8
  }));
  return(
    <div style={{position:"fixed",top:0,left:0,width:"100%",height:"100%",pointerEvents:"none",overflow:"hidden",zIndex:999}}>
      {pieces.map(p=>(
        <div key={p.id} style={{position:"absolute",left:`${p.x}%`,top:-20,width:p.size,height:p.size,background:p.color,borderRadius:p.id%3===0?"50%":"2px",animation:`fall 1.5s ${p.delay}s ease-in forwards`}}/>
      ))}
      <style>{`@keyframes fall{to{transform:translateY(110vh) rotate(720deg);opacity:0}}`}</style>
    </div>
  );
}

// ── XP Pop ────────────────────────────────────────────────────
function XPPop({xp,onDone}){
  useEffect(()=>{const t=setTimeout(onDone,900);return()=>clearTimeout(t)},[]);
  return(
    <div style={{position:"fixed",top:"40%",left:"50%",transform:"translateX(-50%)",zIndex:1000,pointerEvents:"none",animation:"xppop 0.9s ease-out forwards"}}>
      <div style={{background:"#F59E0B",color:"#fff",fontWeight:900,fontSize:22,borderRadius:20,padding:"8px 20px",boxShadow:"0 4px 20px rgba(245,158,11,0.5)"}}>⚡ +{xp} XP</div>
      <style>{`@keyframes xppop{0%{opacity:0;transform:translateX(-50%) scale(0.5) translateY(0)}40%{opacity:1;transform:translateX(-50%) scale(1.2) translateY(-20px)}100%{opacity:0;transform:translateX(-50%) scale(1) translateY(-60px)}}`}</style>
    </div>
  );
}

const SK = "toothtalk_v1";
const DEFAULT = {screen:"welcome",level:null,specialization:null,completedLessons:[],completedDialogues:[],mistakeBank:[],totalXP:0,streak:0,lastDate:null,hearts:3};
function loadState(){try{const s=localStorage.getItem(SK);return s?{...DEFAULT,...JSON.parse(s)}:DEFAULT}catch{return DEFAULT}}
function saveState(s){try{localStorage.setItem(SK,JSON.stringify(s))}catch{}}

// ── Speech ────────────────────────────────────────────────────
function speak(text,rate=0.85){
  if(!window.speechSynthesis)return;
  window.speechSynthesis.cancel();
  const u=new SpeechSynthesisUtterance(text);
  u.lang="en-US"; u.rate=rate; u.pitch=1;
  const voices=window.speechSynthesis.getVoices();
  const en=voices.find(v=>v.lang.startsWith("en")&&!v.name.includes("Google"))||voices.find(v=>v.lang.startsWith("en"));
  if(en)u.voice=en;
  window.speechSynthesis.speak(u);
}

function SpeakBtn({text,size=34}){
  const [on,setOn]=useState(false);
  function go(e){e.stopPropagation();setOn(true);speak(text);setTimeout(()=>setOn(false),text.length*55+500);}
  return <button onClick={go} style={{background:on?"#DBEAFE":"#F1F5F9",border:"none",borderRadius:50,width:size,height:size,display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer",fontSize:size*0.44,flexShrink:0,transition:"background 0.2s"}}>{on?"🔊":"🔈"}</button>;
}

// ── Speech Recognition ────────────────────────────────────────
function useSpeechRecognition(){
  const [listening,setListening]=useState(false);
  const [transcript,setTranscript]=useState("");
  const recRef=useState(null);
  function start(){
    const SR=window.SpeechRecognition||window.webkitSpeechRecognition;
    if(!SR)return alert("Speech recognition not supported on this device");
    const r=new SR();
    r.lang="en-US"; r.continuous=false; r.interimResults=false;
    r.onstart=()=>setListening(true);
    r.onend=()=>setListening(false);
    r.onresult=(e)=>{const t=e.results[0][0].transcript;setTranscript(t);};
    r.onerror=()=>setListening(false);
    recRef[0]=r;
    r.start();
  }
  function stop(){if(recRef[0])recRef[0].stop();}
  function reset(){setTranscript("");}
  return {listening,transcript,start,stop,reset};
}

function scoreTranscript(transcript,hints){
  if(!transcript)return 0;
  const t=transcript.toLowerCase();
  const matched=hints.filter(h=>t.includes(h.toLowerCase().slice(0,Math.floor(h.length*0.7))));
  return matched.length/hints.length;
}

// ── UI helpers ────────────────────────────────────────────────
function Bar({v,m,color="#0EA5E9",h=8}){
  const pct=m>0?Math.min(100,Math.round(v/m*100)):0;
  return <div style={{background:"#E2E8F0",borderRadius:99,height:h,overflow:"hidden"}}>
    <div style={{width:`${pct}%`,height:"100%",background:color,borderRadius:99,transition:"width 0.6s cubic-bezier(0.34,1.56,0.64,1)"}}/>
  </div>;
}
function Btn({children,onClick,color="#0EA5E9",disabled,full=true}){
  const [pressed,setPressed]=useState(false);
  return <button
    onPointerDown={()=>{setPressed(true);if(!disabled)haptic("select");}}
    onPointerUp={()=>setPressed(false)}
    onPointerLeave={()=>setPressed(false)}
    onClick={onClick} disabled={disabled}
    style={{background:disabled?"#E2E8F0":color,color:disabled?"#94A3B8":"#fff",border:"none",borderRadius:16,padding:"15px 24px",fontWeight:700,fontSize:16,cursor:disabled?"not-allowed":"pointer",width:full?"100%":"auto",fontFamily:"inherit",transform:pressed?"scale(0.95)":"scale(1)",transition:"transform 0.1s, background 0.2s",boxShadow:disabled?"none":`0 4px 14px ${color}44`}}
  >{children}</button>;
}

// ── 3D Flip Card ──────────────────────────────────────────────
function FlipCard3D({card,flipped,onFlip}){
  return(
    <div onClick={onFlip} style={{width:"100%",maxWidth:340,height:195,perspective:1000,cursor:"pointer"}}>
      <div style={{width:"100%",height:"100%",position:"relative",transformStyle:"preserve-3d",transition:"transform 0.5s cubic-bezier(0.4,0,0.2,1)",transform:flipped?"rotateY(180deg)":"rotateY(0deg)"}}>
        {/* Front */}
        <div style={{position:"absolute",width:"100%",height:"100%",backfaceVisibility:"hidden",WebkitBackfaceVisibility:"hidden",background:"#fff",borderRadius:22,boxShadow:"0 8px 32px rgba(0,0,0,0.10)",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:"18px 20px",textAlign:"center"}}>
          <div style={{fontSize:34,marginBottom:8}}>{card.i}</div>
          <div style={{display:"flex",alignItems:"center",gap:8,justifyContent:"center",marginBottom:8}}>
            <ClickableText text={card.w} style={{fontSize:17,fontWeight:900,color:"#0EA5E9",lineHeight:1.3}}/>
            <SpeakBtn text={card.w} size={30}/>
          </div>
          <div style={{fontSize:12,color:"#94A3B8"}}>👆 Нажми слово или карточку</div>
        </div>
        {/* Back */}
        <div style={{position:"absolute",width:"100%",height:"100%",backfaceVisibility:"hidden",WebkitBackfaceVisibility:"hidden",background:"linear-gradient(135deg,#0EA5E9,#6366F1)",borderRadius:22,boxShadow:"0 8px 32px rgba(99,102,241,0.3)",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:"18px 20px",textAlign:"center",transform:"rotateY(180deg)"}}>
          <div style={{fontSize:15,fontWeight:800,color:"#fff",marginBottom:6}}>{card.t}</div>
          <div style={{display:"flex",alignItems:"center",gap:6,justifyContent:"center",marginBottom:6}}>
            <ClickableText text={card.e} style={{fontSize:12,color:"rgba(255,255,255,0.9)",fontStyle:"italic",lineHeight:1.5}}/>
            <SpeakBtn text={card.e} size={28}/>
          </div>
        </div>
      </div>
    </div>
  );
}

// ── WELCOME ───────────────────────────────────────────────────
function Welcome({onStart}){
  const [f,setF]=useState(0);
  useEffect(()=>{const t=setInterval(()=>setF(x=>(x+1)%4),1400);return()=>clearInterval(t)},[]);
  const moods=["happy","excited","thinking","celebrate"];
  return(
    <div style={{minHeight:"100vh",background:"linear-gradient(160deg,#0F172A 0%,#1E3A5F 50%,#0EA5E9 100%)",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:28,fontFamily:"'Inter',sans-serif",textAlign:"center"}}>
      <div style={{display:"flex",alignItems:"flex-end",gap:6,marginBottom:8}}>
        <div style={{animation:"float 3s ease-in-out infinite"}}><DadChar mood={moods[f]} size={110}/></div>
        <div style={{animation:"float 3s ease-in-out infinite 0.5s"}}><MomChar mood={moods[(f+1)%4]} size={96}/></div>
        <div style={{animation:"float 2s ease-in-out infinite 0.8s"}}><Girl4 size={64}/></div>
        <div style={{animation:"float 2.5s ease-in-out infinite 1s"}}><Baby1 size={50}/></div>
      </div>
      <h1 style={{color:"#fff",fontSize:32,fontWeight:900,margin:"10px 0 6px",letterSpacing:-1}}>🦷 ToothTalk</h1>
      <p style={{color:"#BAE6FD",fontSize:15,marginBottom:8,lineHeight:1.6}}>Английский для<br/><b>хирурга-ортопеда</b></p>
      <div style={{display:"flex",gap:6,flexWrap:"wrap",justifyContent:"center",marginBottom:10}}>
        {["🔩 Имплантология","👑 Ортопедия","🔪 Хирургия","💬 Диалоги","🎤 Речь"].map(t=>(
          <div key={t} style={{background:"rgba(255,255,255,0.12)",borderRadius:20,padding:"5px 12px",color:"#fff",fontSize:12,fontWeight:600}}>{t}</div>
        ))}
      </div>
      <div style={{color:"#94A3B8",fontSize:12,marginBottom:24}}>65 уроков · 6 специализаций · диалоги · речь</div>
      <Btn onClick={onStart} color="#0EA5E9">Начать →</Btn>
      <style>{`@keyframes float{0%,100%{transform:translateY(0)}50%{transform:translateY(-10px)}}`}</style>
    </div>
  );
}

// ── LEVEL SELECT (replaces placement test) ───────────────────
const LEVEL_START = {
  beginner:  {unit:"u1", lesson:"l1",  label:"Начинающий",  desc:"Английский с нуля — базовые слова и команды", color:"#10B981", icon:"🌱", char:"girl"},
  intermediate:{unit:"u4", lesson:"l31", label:"Средний",     desc:"Знаю базу — учу фразы врача и хирургию",      color:"#F59E0B", icon:"⚡", char:"dad"},
  advanced:  {unit:"u8", lesson:"l51", label:"Продвинутый", desc:"Фразы знаю — хочу сложные разговоры",         color:"#EF4444", icon:"🔥", char:"mom"},
};

function LevelSelect({onSelect}){
  const [chosen,setChosen]=useState(null);
  const [f,setF]=useState(0);
  useEffect(()=>{const t=setInterval(()=>setF(x=>(x+1)%4),1500);return()=>clearInterval(t)},[]);
  const moods=["happy","excited","thinking","celebrate"];

  return(
    <div style={{minHeight:"100vh",background:"linear-gradient(160deg,#0F172A 0%,#1E3A5F 60%,#0EA5E9 100%)",display:"flex",flexDirection:"column",fontFamily:"'Inter',sans-serif"}}>
      {/* Header */}
      <div style={{padding:"32px 24px 0",textAlign:"center"}}>
        <div style={{display:"flex",alignItems:"flex-end",justifyContent:"center",gap:6,marginBottom:12}}>
          <div style={{animation:"float 3s ease-in-out infinite"}}><DadChar mood={moods[f]} size={90}/></div>
          <div style={{animation:"float 3s ease-in-out infinite 0.4s"}}><MomChar mood={moods[(f+1)%4]} size={80}/></div>
          <div style={{animation:"float 2s ease-in-out infinite 0.7s"}}><Girl4 size={54}/></div>
          <div style={{animation:"float 2.5s ease-in-out infinite 0.9s"}}><Baby1 size={42}/></div>
        </div>
        <h1 style={{color:"#fff",fontSize:28,fontWeight:900,margin:"0 0 6px",letterSpacing:-1}}>🦷 ToothTalk</h1>
        <p style={{color:"#BAE6FD",fontSize:14,margin:"0 0 6px",lineHeight:1.6}}>Английский для <b>хирурга-ортопеда</b></p>
        <div style={{display:"flex",gap:6,flexWrap:"wrap",justifyContent:"center",marginBottom:6}}>
          {["💉 Анестезия","🔪 Хирургия","🔩 Импланты","👑 Ортопедия","💬 Диалоги"].map(t=>(
            <div key={t} style={{background:"rgba(255,255,255,0.12)",borderRadius:20,padding:"4px 10px",color:"#fff",fontSize:11,fontWeight:600}}>{t}</div>
          ))}
        </div>
        <p style={{color:"#94A3B8",fontSize:12,margin:"4px 0 0"}}>65 уроков · 6 специализаций · озвучка · диалоги</p>
      </div>

      {/* Level Cards */}
      <div style={{flex:1,padding:"24px 20px 32px",display:"flex",flexDirection:"column",gap:14}}>
        <div style={{color:"#94A3B8",fontSize:12,fontWeight:700,letterSpacing:1,textAlign:"center",marginBottom:4}}>ВЫБЕРИ СВОЙ УРОВЕНЬ</div>

        {Object.entries(LEVEL_START).map(([key,lvl])=>{
          const isChosen=chosen===key;
          return(
            <div key={key}
              onClick={()=>{setChosen(key);haptic("select");playSound("flip");}}
              style={{background:isChosen?`linear-gradient(135deg,${lvl.color},${lvl.color}cc)`:"rgba(255,255,255,0.08)",borderRadius:20,padding:"18px 20px",cursor:"pointer",border:isChosen?`2px solid ${lvl.color}`:"2px solid rgba(255,255,255,0.1)",transition:"all 0.25s",transform:isChosen?"scale(1.02)":"scale(1)"}}>
              <div style={{display:"flex",alignItems:"center",gap:14}}>
                <div style={{fontSize:36}}>{lvl.icon}</div>
                <div style={{flex:1}}>
                  <div style={{fontSize:17,fontWeight:800,color:"#fff",marginBottom:3}}>{lvl.label}</div>
                  <div style={{fontSize:13,color:isChosen?"rgba(255,255,255,0.85)":"#94A3B8",lineHeight:1.4}}>{lvl.desc}</div>
                </div>
                <div style={{width:28,height:28,borderRadius:50,border:`2px solid ${isChosen?"#fff":"rgba(255,255,255,0.3)"}`,background:isChosen?"#fff":"transparent",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0}}>
                  {isChosen&&<div style={{width:12,height:12,borderRadius:50,background:lvl.color}}/>}
                </div>
              </div>
              {isChosen&&(
                <div style={{marginTop:12,paddingTop:12,borderTop:"1px solid rgba(255,255,255,0.2)",display:"flex",gap:8,fontSize:12,color:"rgba(255,255,255,0.8)"}}>
                  {key==="beginner"&&<>📚 Блоки 1–3 · слова и команды · 2 варианта ответа</>}
                  {key==="intermediate"&&<>📚 Блоки 4–7 · фразы врача · хирургия и импланты</>}
                  {key==="advanced"&&<>📚 Блоки 8–10 · сложные разговоры · собеседование</>}
                </div>
              )}
            </div>
          );
        })}

        <div style={{marginTop:8}}>
          <Btn onClick={()=>{if(chosen){haptic("success");onSelect(chosen);}}} disabled={!chosen} color="#0EA5E9">
            {chosen?`Начать — ${LEVEL_START[chosen]?.label} →`:"Выбери уровень ↑"}
          </Btn>
        </div>

        <div style={{textAlign:"center",color:"#64748B",fontSize:12,marginTop:4}}>
          Уровень можно изменить в любое время в настройках
        </div>
      </div>
      <style>{`@keyframes float{0%,100%{transform:translateY(0)}50%{transform:translateY(-8px)}}`}</style>
    </div>
  );
}

function LevelConfirm({level,onGo}){
  const lvl=LEVEL_START[level];
  const startUnit=UNITS.find(u=>u.id===lvl?.unit);
  return(
    <div style={{minHeight:"100vh",background:`linear-gradient(160deg,${lvl?.color}ee,${lvl?.color}88)`,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:28,fontFamily:"inherit",textAlign:"center"}}>
      <div style={{display:"flex",gap:8,alignItems:"flex-end",marginBottom:16}}>
        {level==="beginner"&&<><Girl4 size={90}/><Baby1 size={70}/></>}
        {level==="intermediate"&&<><DadChar mood="excited" size={100}/><Girl4 size={70}/></>}
        {level==="advanced"&&<><DadChar mood="celebrate" size={90}/><MomChar mood="cheer" size={80}/></>}
      </div>
      <div style={{background:"#fff",borderRadius:24,padding:"28px 22px",maxWidth:340,width:"100%"}}>
        <div style={{fontSize:36,marginBottom:8}}>{lvl?.icon}</div>
        <div style={{fontSize:24,fontWeight:900,color:lvl?.color,marginBottom:8}}>{lvl?.label}</div>
        <div style={{fontSize:14,color:"#64748B",lineHeight:1.6,marginBottom:20}}>{lvl?.desc}</div>
        <div style={{background:"#F8FAFC",borderRadius:14,padding:"14px",marginBottom:20,textAlign:"left"}}>
          <div style={{fontSize:11,color:"#94A3B8",fontWeight:700,marginBottom:8}}>НАЧИНАЕМ С</div>
          <div style={{fontSize:15,fontWeight:700,color:"#1E293B"}}>{startUnit?.icon} {startUnit?.title}</div>
          <div style={{fontSize:12,color:"#64748B",marginTop:2}}>{startUnit?.titleRu}</div>
        </div>
        <Btn onClick={onGo} color={lvl?.color}>Поехали! 🚀</Btn>
      </div>
    </div>
  );
}

// ── Кликабельные слова ───────────────────────────────────────
function ClickableText({text, style={}}){
  const words = text.split(" ");
  return(
    <span style={style}>
      {words.map((word,i)=>{
        const clean = word.replace(/[.,!?;:'"]/g,"");
        return(
          <span key={i}>
            <span
              onClick={(e)=>{e.stopPropagation();speak(clean,0.9);haptic("select");playSound("flip");}}
              style={{cursor:"pointer",borderBottom:"1px dotted #93C5FD",color:"inherit",display:"inline"}}
            >{word}</span>
            {i<words.length-1?" ":""}
          </span>
        );
      })}
    </span>
  );
}

// ── HOME ──────────────────────────────────────────────────────
function Home({state,onLesson,onDialogue,onMistakes,onProgress,onReset}){
  const {completedLessons,completedDialogues,mistakeBank,totalXP,streak,hearts}=state;
  const done=completedLessons.length;
  const next=ALL_LESSONS.find(l=>!completedLessons.includes(l.id));
  const [tab,setTab]=useState("lessons");
  const [openUnits,setOpenUnits]=useState({"u1":true});
  function toggleUnit(id){setOpenUnits(o=>({...o,[id]:!o[id]}));}

  return(
    <div style={{minHeight:"100vh",background:"#F0F9FF",fontFamily:"inherit"}}>
      <div style={{background:"linear-gradient(135deg,#0F172A,#1E3A5F)",padding:"18px 18px 0",color:"#fff"}}>
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:10}}>
          <div>
            <div style={{fontSize:10,color:"#64748B",fontWeight:700,letterSpacing:1}}>TOOTHTALK</div>
            <div style={{fontSize:18,fontWeight:800}}>🦷 {state.specialization==="assistant"?"Ассистент":state.specialization==="admin"?"Администратор":state.specialization==="therapist"?"Терапевт":state.specialization==="ortho"?"Ортодонт":state.specialization==="pediatric"?"Детский стоматолог":"Хирург-ортопед"}</div>
          </div>
          <button onClick={onProgress} style={{background:"rgba(255,255,255,0.1)",border:"none",borderRadius:10,padding:"7px 12px",color:"#fff",fontWeight:700,fontSize:12,cursor:"pointer"}}>📊</button>
        </div>
        <div style={{display:"flex",alignItems:"flex-end",gap:4,marginBottom:10}}>
          <DadChar mood="happy" size={48}/><MomChar mood="happy" size={42}/><Girl4 size={28}/><Baby1 size={24}/>
          <div style={{marginLeft:6,flex:1}}>
            <div style={{color:"#fff",fontSize:12,fontWeight:700}}>Семья болеет! 💪</div>
            <div style={{color:"#64748B",fontSize:11}}>{done}/{ALL_LESSONS.length} уроков · {completedDialogues.length}/{DIALOGUES.length} диалогов</div>
          </div>
        </div>
        <Bar v={done} m={ALL_LESSONS.length} color="#0EA5E9" h={6}/>
        <div style={{display:"flex",gap:8,margin:"10px 0 0"}}>
          {[{i:"🔥",l:"Серия",v:`${streak}д`},{i:"⚡",l:"XP",v:totalXP},{i:"❤️",l:"Жизни",v:`${hearts}/3`},{i:"📝",l:"Ошибки",v:mistakeBank.length}].map(s=>(
            <div key={s.l} style={{flex:1,background:"rgba(255,255,255,0.08)",borderRadius:10,padding:"6px 2px",textAlign:"center"}}>
              <div style={{fontSize:13}}>{s.i}</div>
              <div style={{fontSize:13,fontWeight:800}}>{s.v}</div>
              <div style={{fontSize:8,color:"#64748B"}}>{s.l}</div>
            </div>
          ))}
        </div>
        {/* Tabs */}
        <div style={{display:"flex",gap:0,marginTop:12}}>
          {[{k:"lessons",l:"📚 Уроки"},{k:"dialogues",l:"💬 Диалоги"},{k:"mistakes",l:`📝 Ошибки${mistakeBank.length>0?` (${mistakeBank.length})`:""}`}].map(t=>(
            <button key={t.k} onClick={()=>setTab(t.k)} style={{flex:1,background:tab===t.k?"#fff":"transparent",border:"none",borderRadius:tab===t.k?"12px 12px 0 0":"0",padding:"10px 4px",color:tab===t.k?"#0F172A":"#94A3B8",fontWeight:700,fontSize:11,cursor:"pointer",fontFamily:"inherit"}}>{t.l}</button>
          ))}
        </div>
      </div>

      <div style={{padding:"14px 14px 100px"}}>
        {/* LESSONS TAB */}
        {tab==="lessons"&&<>
          {next&&(
            <div style={{marginBottom:14}}>
              <div style={{fontSize:11,fontWeight:700,color:"#64748B",marginBottom:6}}>СЛЕДУЮЩИЙ УРОК</div>
              <div onClick={()=>onLesson(next)} style={{background:"linear-gradient(135deg,#0EA5E9,#6366F1)",borderRadius:18,padding:"16px",cursor:"pointer"}}>
                <div style={{fontSize:10,color:"rgba(255,255,255,0.75)",fontWeight:700}}>ДЕНЬ {next.day}</div>
                <div style={{fontSize:17,fontWeight:800,color:"#fff",margin:"2px 0"}}>{next.icon} {next.title}</div>
                <div style={{fontSize:12,color:"rgba(255,255,255,0.7)",marginBottom:10}}>{next.titleRu}</div>
                <div style={{display:"flex",gap:6}}>
                  <div style={{background:"rgba(255,255,255,0.2)",borderRadius:8,padding:"3px 10px",color:"#fff",fontSize:12,fontWeight:700}}>⚡ +{next.xp} XP</div>
                  <div style={{background:"rgba(255,255,255,0.2)",borderRadius:8,padding:"3px 10px",color:"#fff",fontSize:12,fontWeight:700}}>▶ Начать</div>
                </div>
              </div>
            </div>
          )}
          {UNITS.map(unit=>{
            const ud=unit.lessons.filter(l=>completedLessons.includes(l.id)).length;
            const isOpen=openUnits[unit.id];
            return(
              <div key={unit.id} style={{marginBottom:10}}>
                <div onClick={()=>toggleUnit(unit.id)} style={{background:"#fff",borderRadius:14,padding:"12px 14px",display:"flex",alignItems:"center",gap:10,cursor:"pointer",border:`2px solid ${ud===unit.lessons.length?unit.color:"transparent"}`,boxShadow:"0 1px 4px rgba(0,0,0,0.05)"}}>
                  <div style={{width:36,height:36,borderRadius:10,background:unit.color+"22",display:"flex",alignItems:"center",justifyContent:"center",fontSize:17}}>{unit.icon}</div>
                  <div style={{flex:1}}>
                    <div style={{fontWeight:700,fontSize:13,color:"#1E293B"}}>{unit.title}</div>
                    <div style={{fontSize:10,color:"#64748B"}}>{unit.titleRu}</div>
                    <div style={{marginTop:3}}><Bar v={ud} m={unit.lessons.length} color={unit.color} h={4}/></div>
                  </div>
                  <div style={{fontSize:12,fontWeight:700,color:unit.color}}>{ud}/{unit.lessons.length}</div>
                  <div style={{fontSize:11,color:"#94A3B8"}}>{isOpen?"▲":"▼"}</div>
                </div>
                {isOpen&&(
                  <div style={{paddingLeft:6,paddingTop:4,display:"flex",flexDirection:"column",gap:4}}>
                    {unit.lessons.map((lesson,idx)=>{
                      const comp=completedLessons.includes(lesson.id);
                      const isNext=lesson.id===next?.id;
                      const prevLesson=unit.lessons[idx-1];
                      const locked=idx>0&&!completedLessons.includes(prevLesson?.id)&&!comp&&!isNext;
                      return(
                        <div key={lesson.id} onClick={()=>!locked&&onLesson(lesson)} style={{background:"#fff",borderRadius:12,padding:"10px 12px",display:"flex",alignItems:"center",gap:8,border:isNext?`2px solid ${unit.color}`:comp?"2px solid #D1FAE5":"2px solid transparent",opacity:locked?0.4:1,cursor:locked?"not-allowed":"pointer",boxShadow:"0 1px 3px rgba(0,0,0,0.04)"}}>
                          <div style={{width:32,height:32,borderRadius:8,background:comp?"#D1FAE5":isNext?unit.color+"22":"#F1F5F9",display:"flex",alignItems:"center",justifyContent:"center",fontSize:15,flexShrink:0}}>{comp?"✅":locked?"🔒":lesson.icon}</div>
                          <div style={{flex:1}}>
                            <div style={{fontWeight:600,fontSize:12,color:"#1E293B"}}>День {lesson.day}: {lesson.title}</div>
                            <div style={{fontSize:10,color:"#64748B"}}>{lesson.titleRu}</div>
                          </div>
                          <div style={{fontSize:11,fontWeight:700,color:unit.color}}>+{lesson.xp}</div>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
          <div style={{textAlign:"center",marginTop:14}}>
            <button onClick={onReset} style={{background:"none",border:"none",color:"#CBD5E1",fontSize:12,cursor:"pointer"}}>Сбросить прогресс</button>
          </div>
        </>}

        {/* DIALOGUES TAB */}
        {tab==="dialogues"&&<>
          <div style={{fontSize:11,fontWeight:700,color:"#64748B",marginBottom:10}}>СИМУЛЯЦИИ ДИАЛОГОВ</div>
          <div style={{background:"#EFF6FF",borderRadius:14,padding:"12px 14px",marginBottom:14,fontSize:13,color:"#1D4ED8",lineHeight:1.5}}>
            🎤 Говори по-английски вслух! Микрофон оценит твой ответ и сравнит с идеальным.
          </div>
          {DIALOGUES.map(d=>{
            const comp=completedDialogues.includes(d.id);
            return(
              <div key={d.id} onClick={()=>onDialogue(d)} style={{background:"#fff",borderRadius:16,padding:"14px",marginBottom:10,cursor:"pointer",border:comp?"2px solid #D1FAE5":"2px solid transparent",boxShadow:"0 2px 8px rgba(0,0,0,0.06)"}}>
                <div style={{display:"flex",alignItems:"center",gap:10}}>
                  <div style={{width:44,height:44,borderRadius:12,background:comp?"#D1FAE5":"#F0F9FF",display:"flex",alignItems:"center",justifyContent:"center",fontSize:22,flexShrink:0}}>{comp?"✅":d.icon}</div>
                  <div style={{flex:1}}>
                    <div style={{fontWeight:700,fontSize:14,color:"#1E293B"}}>{d.title}</div>
                    <div style={{fontSize:11,color:"#64748B"}}>{d.titleRu}</div>
                    <div style={{fontSize:11,color:"#94A3B8",marginTop:2}}>{d.turns.filter(t=>t.speaker==="doctor").length} реплик врача · +{d.xp} XP</div>
                  </div>
                  <div style={{fontSize:18,color:"#94A3B8"}}>›</div>
                </div>
                <div style={{marginTop:8,fontSize:12,color:"#64748B",fontStyle:"italic"}}>{d.scenarioRu}</div>
              </div>
            );
          })}
        </>}

        {/* MISTAKES TAB */}
        {tab==="mistakes"&&<>
          <div style={{fontSize:11,fontWeight:700,color:"#64748B",marginBottom:10}}>БАНК ОШИБОК</div>
          {state.mistakeBank.length===0
            ?<div style={{textAlign:"center",padding:"40px 20px",color:"#94A3B8"}}>
                <div style={{fontSize:48,marginBottom:10}}>🎉</div>
                <div style={{fontWeight:700,fontSize:16,color:"#64748B"}}>Ошибок нет!</div>
                <div style={{fontSize:13,marginTop:6}}>Все твои ответы были верными</div>
              </div>
            :<>
              <div style={{background:"#FFF7ED",borderRadius:14,padding:"12px 14px",marginBottom:14,fontSize:13,color:"#C2410C",lineHeight:1.5}}>
                📝 {state.mistakeBank.length} фраз для повторения. Нажми на карточку — прослушай и выучи.
              </div>
              <div style={{display:"flex",flexDirection:"column",gap:8}}>
                {state.mistakeBank.map((m,i)=>(
                  <div key={i} style={{background:"#fff",borderRadius:14,padding:"14px",boxShadow:"0 2px 6px rgba(0,0,0,0.05)"}}>
                    <div style={{display:"flex",alignItems:"flex-start",gap:10}}>
                      <div style={{flex:1}}>
                        <div style={{fontWeight:700,fontSize:14,color:"#EF4444",marginBottom:3}}>✗ {m.wrong}</div>
                        <div style={{fontWeight:700,fontSize:14,color:"#10B981",marginBottom:4}}>✓ {m.correct}</div>
                        {m.lesson&&<div style={{fontSize:11,color:"#94A3B8"}}>📚 {m.lesson}</div>}
                      </div>
                      <SpeakBtn text={m.correct} size={36}/>
                    </div>
                  </div>
                ))}
              </div>
              <div style={{textAlign:"center",marginTop:14}}>
                <button onClick={()=>onMistakes()} style={{background:"#EF4444",color:"#fff",border:"none",borderRadius:12,padding:"10px 24px",fontWeight:700,fontSize:13,cursor:"pointer"}}>
                  🔄 Повторить все ошибки
                </button>
              </div>
            </>}
        </>}
      </div>
    </div>
  );
}

// ── DIALOGUE SCREEN ───────────────────────────────────────────
function DialogueScreen({dialogue,onComplete,onExit}){
  const [turn,setTurn]=useState(0);
  const [phase,setPhase]=useState("listen"); // listen | speak | result
  const [score,setScore]=useState(0);
  const [scores,setScores]=useState([]);
  const [done,setDone]=useState(false);
  const {listening,transcript,start,reset}=useSpeechRecognition();

  const doctorTurns=dialogue.turns.filter(t=>t.speaker==="doctor");
  const allTurns=dialogue.turns;
  const [displayIdx,setDisplayIdx]=useState(0);

  useEffect(()=>{
    if(displayIdx<allTurns.length){
      const t=allTurns[displayIdx];
      if(t.speaker==="patient"){speak(t.text,0.8);}
    }
  },[displayIdx]);

  function handleSpeak(){reset();start();}

  function handleSubmit(){
    const t=allTurns[displayIdx];
    if(t.speaker!=="doctor")return;
    const s=scoreTranscript(transcript,t.hints);
    setScores(prev=>[...prev,{score:s,transcript,correct:t.correct,prompt:t.prompt}]);
    setScore(sc=>sc+s);
    setPhase("result");
  }

  function handleNext(){
    const nextIdx=displayIdx+1;
    if(nextIdx>=allTurns.length){setDone(true);return;}
    setDisplayIdx(nextIdx);
    reset();
    if(allTurns[nextIdx].speaker==="doctor")setPhase("speak");
    else setPhase("listen");
  }

  function handlePatientNext(){
    const nextIdx=displayIdx+1;
    if(nextIdx>=allTurns.length){setDone(true);return;}
    setDisplayIdx(nextIdx);
    reset();
    if(allTurns[nextIdx].speaker==="doctor")setPhase("speak");
    else setPhase("listen");
  }

  const totalDocTurns=doctorTurns.length;
  const completedDocTurns=scores.length;
  const avgScore=totalDocTurns>0?score/totalDocTurns:0;

  if(done){
    const pct=Math.round(avgScore*100);
    const medal=pct>=80?"🥇":pct>=60?"🥈":"🥉";
    return(
      <div style={{minHeight:"100vh",background:"linear-gradient(160deg,#1E3A5F,#0EA5E9)",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:28,fontFamily:"inherit",textAlign:"center"}}>
        <div style={{display:"flex",gap:6,alignItems:"flex-end",marginBottom:12}}>
          <DadChar mood="celebrate" size={100}/><MomChar mood="cheer" size={88}/><Girl4 size={56}/><Baby1 size={46}/>
        </div>
        <div style={{background:"#fff",borderRadius:24,padding:"26px 22px",maxWidth:340,width:"100%"}}>
          <div style={{fontSize:40,marginBottom:6}}>{medal}</div>
          <div style={{fontSize:22,fontWeight:900,color:"#0EA5E9",marginBottom:4}}>Диалог завершён!</div>
          <div style={{color:"#64748B",fontSize:13,marginBottom:16}}>{dialogue.title}</div>
          <div style={{background:"#F0F9FF",borderRadius:14,padding:"14px",marginBottom:16}}>
            <div style={{fontSize:32,fontWeight:800,color:"#0EA5E9"}}>{pct}%</div>
            <div style={{fontSize:12,color:"#64748B"}}>точность речи</div>
          </div>
          <div style={{display:"flex",flexDirection:"column",gap:8,marginBottom:18,textAlign:"left"}}>
            {scores.map((s,i)=>(
              <div key={i} style={{borderRadius:10,padding:"10px",background:s.score>=0.7?"#D1FAE5":s.score>=0.4?"#FEF3C7":"#FEE2E2"}}>
                <div style={{fontSize:11,color:"#64748B",marginBottom:3}}>{doctorTurns[i]?.prompt}</div>
                <div style={{fontSize:12,fontWeight:600,color:"#1E293B"}}>Ты: "{s.transcript||"—"}"</div>
                {s.score<0.7&&<div style={{fontSize:11,color:"#065F46",marginTop:3}}>✓ {s.correct}</div>}
              </div>
            ))}
          </div>
          <Btn onClick={()=>onComplete(Math.round(dialogue.xp*avgScore))} color="#0EA5E9">Продолжить!</Btn>
        </div>
      </div>
    );
  }

  const curTurn=allTurns[displayIdx];
  const isDoctor=curTurn?.speaker==="doctor";

  return(
    <div style={{minHeight:"100vh",background:"#F8FAFC",fontFamily:"inherit",display:"flex",flexDirection:"column"}}>
      <div style={{background:"#1E293B",padding:"15px 18px",display:"flex",alignItems:"center",gap:12}}>
        <button onClick={onExit} style={{background:"none",border:"none",color:"#94A3B8",fontSize:20,cursor:"pointer"}}>✕</button>
        <div style={{flex:1}}>
          <div style={{color:"#fff",fontSize:12,fontWeight:700,marginBottom:4}}>{dialogue.title}</div>
          <Bar v={completedDocTurns} m={totalDocTurns} color="#0EA5E9"/>
        </div>
        <div style={{color:"#94A3B8",fontSize:11}}>{completedDocTurns}/{totalDocTurns}</div>
      </div>

      {/* Chat history */}
      <div style={{flex:1,padding:"14px 16px",display:"flex",flexDirection:"column",gap:10,overflowY:"auto"}}>
        {allTurns.slice(0,displayIdx+1).map((t,i)=>{
          const isP=t.speaker==="patient";
          return(
            <div key={i} style={{display:"flex",flexDirection:isP?"row":"row-reverse",alignItems:"flex-end",gap:8}}>
              <div style={{fontSize:22,flexShrink:0}}>{isP?"😷":"🩺"}</div>
              <div style={{maxWidth:"78%",background:isP?"#fff":"#DBEAFE",borderRadius:isP?"16px 16px 16px 4px":"16px 16px 4px 16px",padding:"10px 13px",boxShadow:"0 1px 4px rgba(0,0,0,0.07)"}}>
                {isP
                  ?<><div style={{fontSize:13,color:"#1E293B",lineHeight:1.4}}>{t.text}</div>
                    <button onClick={()=>speak(t.text,0.8)} style={{background:"none",border:"none",fontSize:14,cursor:"pointer",marginTop:4,padding:0}}>🔈</button></>
                  :<div style={{fontSize:13,color:"#1E3A5F",lineHeight:1.4,fontWeight:600}}>{t.text||"..."}</div>}
              </div>
            </div>
          );
        })}

        {/* Doctor input area */}
        {isDoctor&&phase==="speak"&&(
          <div style={{background:"#EFF6FF",borderRadius:16,padding:"14px",border:"2px dashed #93C5FD"}}>
            <div style={{fontSize:11,color:"#1D4ED8",fontWeight:700,marginBottom:6}}>ТВОЯ РЕПЛИКА</div>
            <div style={{fontSize:13,color:"#1E293B",marginBottom:10}}>{curTurn.prompt}</div>
            {transcript&&<div style={{background:"#fff",borderRadius:10,padding:"8px 12px",fontSize:13,color:"#1E293B",marginBottom:10,border:"1px solid #BFDBFE"}}>🎤 "{transcript}"</div>}
            <div style={{display:"flex",gap:8}}>
              <button onClick={handleSpeak} style={{flex:1,background:listening?"#EF4444":"#0EA5E9",color:"#fff",border:"none",borderRadius:12,padding:"12px",fontWeight:700,fontSize:14,cursor:"pointer",fontFamily:"inherit"}}>
                {listening?"⏹ Стоп":"🎤 Говори"}
              </button>
              {transcript&&<button onClick={handleSubmit} style={{flex:1,background:"#10B981",color:"#fff",border:"none",borderRadius:12,padding:"12px",fontWeight:700,fontSize:14,cursor:"pointer",fontFamily:"inherit"}}>Проверить ✓</button>}
            </div>
            <div style={{marginTop:8,fontSize:11,color:"#94A3B8",textAlign:"center"}}>или посмотри подсказку ↓</div>
            <div style={{marginTop:6,display:"flex",flexWrap:"wrap",gap:4}}>
              {curTurn.hints.map((h,i)=><div key={i} style={{background:"#DBEAFE",borderRadius:8,padding:"3px 8px",fontSize:11,color:"#1D4ED8"}}>💡 {h}</div>)}
            </div>
          </div>
        )}

        {isDoctor&&phase==="result"&&(()=>{
          const last=scores[scores.length-1];
          const good=last?.score>=0.7;
          return(
            <div style={{background:good?"#D1FAE5":"#FEF3C7",borderRadius:16,padding:"14px",border:`2px solid ${good?"#10B981":"#F59E0B"}`}}>
              <div style={{fontWeight:700,color:good?"#065F46":"#92400E",marginBottom:6}}>{good?"✓ Отлично!":"💡 Можно лучше"}</div>
              <div style={{fontSize:12,color:"#64748B",marginBottom:6}}>Идеальный ответ:</div>
              <div style={{fontSize:13,color:"#1E293B",fontWeight:600,lineHeight:1.5,marginBottom:8}}>{curTurn.correct}</div>
              <div style={{display:"flex",gap:8,alignItems:"center"}}>
                <SpeakBtn text={curTurn.correct} size={36}/>
                <button onClick={handleNext} style={{flex:1,background:"#0EA5E9",color:"#fff",border:"none",borderRadius:12,padding:"11px",fontWeight:700,fontSize:14,cursor:"pointer",fontFamily:"inherit"}}>Далее →</button>
              </div>
            </div>
          );
        })()}

        {!isDoctor&&displayIdx<allTurns.length&&(
          <button onClick={handlePatientNext} style={{background:"#F1F5F9",color:"#64748B",border:"none",borderRadius:12,padding:"11px",fontWeight:700,fontSize:13,cursor:"pointer",fontFamily:"inherit",marginTop:4}}>
            Продолжить →
          </button>
        )}
      </div>
    </div>
  );
}

// ── LESSON SCREEN ─────────────────────────────────────────────
function LessonScreen({lesson,hearts,onLoseHeart,onComplete,onExit,onAddMistake}){
  const cards=lesson.cards||[];
  // Автогенерируем квизы из карточек — игнорируем старые mcq с 2 вариантами
  const rawQuizzes=lesson.quiz||[];
  const hasRichQuiz=rawQuizzes.some(q=>q.o&&q.o.length>=4);
  const quizzes=hasRichQuiz ? rawQuizzes : generateQuizzes(cards, ALL_LESSONS.flatMap(l=>l.cards||[]));

  const [phase,setPhase]=useState(cards.length>0?"cards":"quiz");
  const [cardIdx,setCardIdx]=useState(0);
  const [flipped,setFlipped]=useState(false);
  const [xpPop,setXpPop]=useState(0);
  const [showConfetti,setShowConfetti]=useState(false);

  useEffect(()=>{if(phase==="cards"&&cards[cardIdx])speak(cards[cardIdx].w);},[cardIdx,phase]);

  if(phase==="quiz") return <QuizEngine quizzes={quizzes} lesson={lesson} hearts={hearts} onLoseHeart={onLoseHeart} onComplete={onComplete} onAddMistake={onAddMistake} onExit={onExit}/>;

  const totalSteps=cards.length+quizzes.length;
  const curStep=cardIdx;

  function nextCard(){
    haptic("light");
    setFlipped(false);
    if(cardIdx+1>=cards.length) setPhase("quiz");
    else setCardIdx(c=>c+1);
  }
    if(step+1>=quizzes.length){playSound("complete");haptic("heavy");setShowConfetti(true);setDone(true);}
    else{setStep(s=>s+1);setSel(null);setConfirmed(false);setMood("thinking");}
  }

  if(done)return(
    <div style={{minHeight:"100vh",background:"linear-gradient(160deg,#065F46,#10B981)",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:28,fontFamily:"inherit",textAlign:"center"}}>
      {showConfetti&&<Confetti/>}
      <div style={{display:"flex",gap:6,alignItems:"flex-end",marginBottom:12}}>
        <DadChar mood="celebrate" size={100}/><MomChar mood="cheer" size={88}/><Girl4 size={56}/><Baby1 size={46}/>
      </div>
      <div style={{background:"#fff",borderRadius:24,padding:"26px 22px",maxWidth:340,width:"100%"}}>
        <div style={{fontSize:24,fontWeight:900,color:"#10B981",marginBottom:4}}>🎉 Урок пройден!</div>
        <div style={{color:"#64748B",fontSize:13,marginBottom:18}}>{lesson.icon} {lesson.title}</div>
        <div style={{display:"flex",justifyContent:"center",gap:28,marginBottom:22}}>
          <div><div style={{fontSize:24,fontWeight:800,color:"#10B981"}}>+{xp}</div><div style={{fontSize:12,color:"#94A3B8"}}>XP</div></div>
          <div><div style={{fontSize:20,fontWeight:800,color:"#EF4444"}}>{"❤️".repeat(Math.max(0,localH))||"💔"}</div><div style={{fontSize:12,color:"#94A3B8"}}>жизней</div></div>
        </div>
        <Btn onClick={()=>onComplete(xp)} color="#10B981">Продолжить!</Btn>
      </div>
    </div>
  );

  if(phase==="cards"){
    const card=cards[cardIdx];
    return(
      <div style={{minHeight:"100vh",background:"#F8FAFC",fontFamily:"inherit",display:"flex",flexDirection:"column"}}>
        <div style={{background:"#1E293B",padding:"15px 18px",display:"flex",alignItems:"center",gap:12}}>
          <button onClick={onExit} style={{background:"none",border:"none",color:"#94A3B8",fontSize:20,cursor:"pointer"}}>✕</button>
          <div style={{flex:1}}><Bar v={curStep} m={totalSteps} color="#0EA5E9"/></div>
          <span style={{color:"#94A3B8",fontSize:11,fontWeight:700}}>{cardIdx+1}/{cards.length}</span>
        </div>
        <div style={{flex:1,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:"20px 18px",gap:14}}>
          <div style={{fontSize:11,color:"#94A3B8",fontWeight:700,letterSpacing:1}}>НОВАЯ ФРАЗА · {cardIdx+1}/{cards.length}</div>
          <FlipCard3D card={card} flipped={flipped} onFlip={()=>{haptic("light");playSound("flip");if(!flipped)speak(card.e,0.8);setFlipped(f=>!f);}}/>
          {flipped&&<div style={{display:"flex",gap:10}}>
            <button onPointerDown={()=>haptic("select")} onClick={nextCard} style={{background:"#10B981",color:"#fff",border:"none",borderRadius:14,padding:"11px 22px",fontWeight:700,fontSize:14,cursor:"pointer",fontFamily:"inherit",boxShadow:"0 4px 12px #10B98155"}}>Знаю ✓</button>
            <button onPointerDown={()=>haptic("select")} onClick={()=>{speak(card.w);nextCard();}} style={{background:"#F1F5F9",color:"#64748B",border:"none",borderRadius:14,padding:"11px 22px",fontWeight:700,fontSize:14,cursor:"pointer",fontFamily:"inherit"}}>🔊 Ещё раз</button>
          </div>}
          <DadChar mood="happy" size={65}/>
        </div>
      </div>
    );
  }

// ── MISTAKES DRILL ────────────────────────────────────────────
function MistakesDrill({mistakes,onComplete,onExit}){
  const [idx,setIdx]=useState(0);
  const [flipped,setFlipped]=useState(false);
  const [done,setDone]=useState(false);
  if(done||mistakes.length===0)return(
    <div style={{minHeight:"100vh",background:"linear-gradient(160deg,#1E3A5F,#6366F1)",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:28,fontFamily:"inherit",textAlign:"center"}}>
      <DadChar mood="celebrate" size={100}/>
      <div style={{background:"#fff",borderRadius:24,padding:"26px 22px",maxWidth:340,width:"100%",marginTop:16}}>
        <div style={{fontSize:24,fontWeight:900,color:"#6366F1",marginBottom:8}}>🧠 Повторение завершено!</div>
        <div style={{color:"#64748B",fontSize:14,marginBottom:20}}>{mistakes.length} фраз повторено</div>
        <Btn onClick={onComplete} color="#6366F1">Готово!</Btn>
      </div>
    </div>
  );
  const m=mistakes[idx];
  return(
    <div style={{minHeight:"100vh",background:"#F8FAFC",fontFamily:"inherit",display:"flex",flexDirection:"column"}}>
      <div style={{background:"#1E293B",padding:"15px 18px",display:"flex",alignItems:"center",gap:12}}>
        <button onClick={onExit} style={{background:"none",border:"none",color:"#94A3B8",fontSize:20,cursor:"pointer"}}>✕</button>
        <div style={{flex:1}}><Bar v={idx} m={mistakes.length} color="#6366F1"/></div>
        <span style={{color:"#94A3B8",fontSize:11}}>{idx+1}/{mistakes.length}</span>
      </div>
      <div style={{flex:1,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:"20px 18px",gap:14}}>
        <div style={{fontSize:11,color:"#6366F1",fontWeight:700,letterSpacing:1}}>📝 ПОВТОРИ ОШИБКУ</div>
        <div onClick={()=>{setFlipped(f=>!f);if(!flipped)speak(m.correct,0.8);}} style={{background:"#fff",borderRadius:22,padding:"26px 22px",width:"100%",maxWidth:340,boxShadow:"0 8px 32px rgba(0,0,0,0.09)",cursor:"pointer",textAlign:"center",minHeight:170,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
          <div style={{fontSize:14,color:"#EF4444",fontWeight:700,marginBottom:10}}>✗ {m.wrong}</div>
          {flipped
            ?<><div style={{fontSize:16,color:"#10B981",fontWeight:800,marginBottom:8}}>✓ {m.correct}</div>
              <SpeakBtn text={m.correct} size={36}/></>
            :<div style={{fontSize:12,color:"#94A3B8"}}>Нажми — правильный ответ 👆</div>}
        </div>
        {flipped&&<div style={{display:"flex",gap:10}}>
          <button onClick={()=>{setFlipped(false);if(idx+1>=mistakes.length)setDone(true);else setIdx(i=>i+1);}} style={{background:"#10B981",color:"#fff",border:"none",borderRadius:14,padding:"11px 22px",fontWeight:700,fontSize:14,cursor:"pointer",fontFamily:"inherit"}}>Запомнил ✓</button>
          <button onClick={()=>{speak(m.correct);setFlipped(false);if(idx+1>=mistakes.length)setDone(true);else setIdx(i=>i+1);}} style={{background:"#F1F5F9",color:"#64748B",border:"none",borderRadius:14,padding:"11px 22px",fontWeight:700,fontSize:14,cursor:"pointer",fontFamily:"inherit"}}>🔊 Ещё раз</button>
        </div>}
        <DadChar mood="thinking" size={65}/>
      </div>
    </div>
  );
}

// ── PROGRESS ──────────────────────────────────────────────────
function ProgressScreen({state,onBack,onChangeSpec}){
  const {level,completedLessons,completedDialogues,totalXP,streak,mistakeBank,specialization}=state;
  const done=completedLessons.length;
  return(
    <div style={{minHeight:"100vh",background:"#F8FAFC",fontFamily:"inherit"}}>
      <div style={{background:"linear-gradient(135deg,#0F172A,#1E3A5F)",padding:"18px 18px 22px",color:"#fff"}}>
        <button onClick={onBack} style={{background:"none",border:"none",color:"#94A3B8",fontSize:18,cursor:"pointer",marginBottom:10}}>← Назад</button>
        <div style={{display:"flex",alignItems:"center",gap:10,marginBottom:10}}>
          <DadChar mood="happy" size={70}/><MomChar mood="happy" size={62}/>
          <div><div style={{fontSize:18,fontWeight:800}}>Мой прогресс</div><div style={{fontSize:12,color:"#94A3B8"}}>{LEVEL_LABELS[level]||"Начинающий"}</div></div>
        </div>
        <Bar v={done} m={ALL_LESSONS.length} color="#0EA5E9" h={8}/>
        <div style={{color:"#94A3B8",fontSize:11,marginTop:4}}>{done} / {ALL_LESSONS.length} уроков</div>
      </div>
      <div style={{padding:"16px 16px 80px"}}>
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10,marginBottom:16}}>
          {[{i:"⚡",l:"XP",v:totalXP,c:"#F59E0B"},{i:"🔥",l:"Серия",v:`${streak}д`,c:"#EF4444"},{i:"💬",l:"Диалогов",v:`${completedDialogues.length}/${DIALOGUES.length}`,c:"#0EA5E9"},{i:"📝",l:"Ошибок",v:mistakeBank.length,c:"#6366F1"}].map(s=>(
            <div key={s.l} style={{background:"#fff",borderRadius:16,padding:"14px",textAlign:"center",boxShadow:"0 2px 8px rgba(0,0,0,0.05)"}}>
              <div style={{fontSize:22}}>{s.i}</div>
              <div style={{fontSize:20,fontWeight:800,color:s.c}}>{s.v}</div>
              <div style={{fontSize:11,color:"#94A3B8"}}>{s.l}</div>
            </div>
          ))}
        </div>
        {UNITS.map(u=>{
          const ud=u.lessons.filter(l=>completedLessons.includes(l.id)).length;
          return(
            <div key={u.id} style={{background:"#fff",borderRadius:14,padding:"13px 15px",marginBottom:8,boxShadow:"0 1px 4px rgba(0,0,0,0.05)",display:"flex",alignItems:"center",gap:10}}>
              <div style={{fontSize:22}}>{ud===u.lessons.length?"🏅":u.icon}</div>
              <div style={{flex:1}}>
                <div style={{fontWeight:700,fontSize:13,color:"#1E293B"}}>{u.title}</div>
                <div style={{marginTop:3}}><Bar v={ud} m={u.lessons.length} color={u.color} h={5}/></div>
              </div>
              <div style={{fontSize:12,fontWeight:700,color:u.color}}>{ud}/{u.lessons.length}</div>
            </div>
          );
        })}
        <div style={{marginTop:20,display:"flex",flexDirection:"column",gap:8}}>
          <button onClick={onChangeSpec} style={{background:"#F1F5F9",color:"#64748B",border:"none",borderRadius:12,padding:"12px",fontWeight:700,fontSize:13,cursor:"pointer",width:"100%"}}>
            🔄 Сменить специализацию или уровень
          </button>
        </div>
      </div>
    </div>
  );
}

// ── APP ROOT ──────────────────────────────────────────────────
export default function App(){
  const [state,setState]=useState(loadState);
  const [activeLesson,setActiveLesson]=useState(null);
  const [activeDialogue,setActiveDialogue]=useState(null);
  const [testCorrect,setTestCorrect]=useState(0);
  const [mistakeDrill,setMistakeDrill]=useState(false);
  useEffect(()=>saveState(state),[state]);

  function go(screen){setState(s=>({...s,screen}));}
  function updateStreak(){
    const today=new Date().toDateString();
    if(state.lastDate===today)return;
    const yest=new Date(Date.now()-86400000).toDateString();
    setState(s=>({...s,streak:s.lastDate===yest?s.streak+1:1,lastDate:today}));
  }
  function addMistake(m){
    setState(s=>{
      const existing=s.mistakeBank||[];
      if(existing.find(e=>e.correct===m.correct))return s;
      return {...s,mistakeBank:[...existing,m]};
    });
  }

  // ── новый флоу: welcome → specialization → levelselect → confirm → home
  // Если уже есть специализация и уровень — сразу home
  if(state.screen==="welcome" && state.specialization && state.level){
    return <Home
      state={state}
      onLesson={l=>{setActiveLesson(l);go("lesson");}}
      onDialogue={d=>{setActiveDialogue(d);go("dialogue");}}
      onMistakes={()=>setMistakeDrill(true)}
      onProgress={()=>go("progress")}
      onReset={()=>{const r={...DEFAULT};setState(r);saveState(r);setActiveLesson(null);setActiveDialogue(null);}}
    />;
  }
  if(state.screen==="welcome")return <Welcome onStart={()=>go("specialization")}/>;
  if(state.screen==="specialization")return <SpecializationSelect onSelect={sp=>{
    setState(s=>({...s,specialization:sp,screen:"levelselect"}));
  }}/>;
  if(state.screen==="levelselect")return <LevelSelect onSelect={lvl=>{
    setState(s=>({...s,level:lvl,screen:"levelconfirm"}));
  }}/>;
  if(state.screen==="levelconfirm")return <LevelConfirm level={state.level} onGo={()=>{
    // начинаем с нужного урока по уровню
    const startInfo=LEVEL_START[state.level];
    const startLesson=ALL_LESSONS.find(l=>l.id===startInfo?.lesson)||ALL_LESSONS[0];
    // разблокируем все уроки до стартового
    const startIdx=ALL_LESSONS.findIndex(l=>l.id===startLesson.id);
    const unlocked=ALL_LESSONS.slice(0,startIdx).map(l=>l.id);
    setState(s=>({...s,completedLessons:unlocked,screen:"home"}));
  }}/>;
  if(state.screen==="progress")return <ProgressScreen state={state} onBack={()=>go("home")} onChangeSpec={()=>go("specialization")}/>;

  if(state.screen==="lesson"&&activeLesson)return(
    <LessonScreen lesson={activeLesson} hearts={state.hearts}
      onLoseHeart={()=>setState(s=>({...s,hearts:Math.max(0,s.hearts-1)}))}
      onAddMistake={addMistake}
      onComplete={xp=>{
        updateStreak();
        setState(s=>({...s,
          completedLessons:s.completedLessons.includes(activeLesson.id)?s.completedLessons:[...s.completedLessons,activeLesson.id],
          totalXP:s.totalXP+xp,hearts:Math.min(3,s.hearts+1),screen:"home"
        }));
        setActiveLesson(null);
      }}
      onExit={()=>{setActiveLesson(null);go("home");}}
    />
  );

  if(state.screen==="dialogue"&&activeDialogue)return(
    <DialogueScreen dialogue={activeDialogue}
      onComplete={xp=>{
        updateStreak();
        setState(s=>({...s,
          completedDialogues:s.completedDialogues.includes(activeDialogue.id)?s.completedDialogues:[...s.completedDialogues,activeDialogue.id],
          totalXP:s.totalXP+xp,screen:"home"
        }));
        setActiveDialogue(null);
      }}
      onExit={()=>{setActiveDialogue(null);go("home");}}
    />
  );

  if(mistakeDrill)return(
    <MistakesDrill mistakes={state.mistakeBank||[]}
      onComplete={()=>setMistakeDrill(false)}
      onExit={()=>setMistakeDrill(false)}
    />
  );

  return <Home
    state={state}
    onLesson={l=>{setActiveLesson(l);go("lesson");}}
    onDialogue={d=>{setActiveDialogue(d);go("dialogue");}}
    onMistakes={()=>setMistakeDrill(true)}
    onProgress={()=>go("progress")}
    onReset={()=>{const r={...DEFAULT};setState(r);saveState(r);setActiveLesson(null);setActiveDialogue(null);}}
  />;
}
