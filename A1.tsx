import React, { useState, useEffect } from 'react';

export default function MyPortfolio() {
  const [activeTab, setActiveTab] = useState('main');
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const contacts = [
    { name: 'Telegram', link: 'https://t.me/KAIRATBEK06' },
    { name: 'WhatsApp', link: 'https://wa.me/996706544376' },
    { name: 'GitHub', link: 'https://kairatbekdev.github.io/modern-portfolio/' }
  ];

  const myProjects = [
    {
      title: "Cyber Portfolio v2",
      tech: "React, TypeScript, Framer Motion",
      desc: "Профессиональное портфолио с кибер-эстетикой. Оптимизировано для мобильных устройств, используется строгая типизация и продвинутые анимации.",
      status: "In Progress",
      github: "https://github.com/nursnzzx",
      demo: "#"
    },
    {
      title: "Smart Tracker System",
      tech: "React, Supabase, Tailwind",
      desc: "Система учета задач с облачным хранением данных. Реализована авторизация пользователей и real-time обновления.",
      status: "In Progress",
      github: "#",
      demo: "#"
    }
  ];

  // Данные об опыте стали более подробными
  const experienceData = [
    { 
      title: 'Finka Bank', 
      role: 'Административная поддержка и данные', 
      points: [
        'Оцифровка и систематизация банковских архивов для быстрого доступа.',
        'Масштабное сканирование и верификация документов в корпоративной системе.',
        'Контроль точности ввода данных клиентской базы.'
      ] 
    },
    { 
      title: 'Аю Гарант', 
      role: 'Специалист по базам данных', 
      points: [
        'Регистрация страховых полисов и учет документации в системе 1С.',
        'Оптимизация процесса поиска данных в архивных реестрах.',
        'Подготовка отчетов по обработанным страховым случаям.'
      ] 
    },
    { 
      title: 'STEM Колледж ОшГУ', 
      role: 'IT Support / Technician', 
      points: [
        'Диагностика и модульный ремонт аппаратной части ПК и ноутбуков.',
        'Администрирование локальных сетей и установка специализированного ПО.',
        'Техническая поддержка учебного процесса и обслуживание оргтехники.'
      ] 
    }
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-[#00ff88] selection:text-black antialiased">
      
      {/* ФОНОВЫЕ ЭФФЕКТЫ */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#00ff88] opacity-[0.05] blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-500 opacity-[0.05] blur-[120px]"></div>
      </div>

      {/* НАВИГАЦИЯ */}
      <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[100] bg-black/40 backdrop-blur-3xl border border-white/10 p-1.5 rounded-2xl flex gap-1 shadow-2xl">
        {[
          { id: 'main', label: 'Главная' },
          { id: 'projects', label: 'Проекты' },
          { id: 'skills', label: 'Навыки' },
          { id: 'exp', label: 'Опыт' },
          { id: 'edu', label: 'Учеба' }
        ].map((tab) => (
          <button 
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-[0.2em] transition-all duration-300 ${activeTab === tab.id ? 'bg-[#00ff88] text-black' : 'text-white/40 hover:text-white hover:bg-white/5'}`}
          >
            {tab.label}
          </button>
        ))}
      </nav>

      <main className={`relative z-10 max-w-4xl mx-auto px-6 pt-16 pb-32 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        
        {/* ГЛАВНАЯ */}
        {activeTab === 'main' && (
          <section className="space-y-10 animate-[reveal_0.5s_ease-out]">
            <div className="inline-block px-3 py-1 border border-[#00ff88]/30 rounded-full bg-[#00ff88]/5">
               <span className="text-[#00ff88] font-mono text-[10px] tracking-widest uppercase font-bold">Technician Programmer • Frontend</span>
            </div>
            
            <div className="space-y-4">
              <h1 className="text-6xl md:text-8xl font-black leading-[0.9] tracking-tighter">
                KAIRAT <br/> <span className="text-transparent" style={{ WebkitTextStroke: '1px rgba(0,255,136,0.5)' }}>DEVELOPER</span>
              </h1>
              <div className="flex gap-4 text-[#00ff88] font-mono text-[11px] uppercase tracking-widest">
                <span>19 years old</span>
                <span>•</span>
                <span>Bishkek, Kyrgyzstan</span>
              </div>
            </div>

            <div className="space-y-6 max-w-2xl">
              <p className="text-lg md:text-2xl text-white/90 leading-relaxed font-medium">
                Специалист с дипломом <span className="text-[#00ff88]">Техника-программиста</span>. Объединяю глубокое понимание «железа» с современными веб-технологиями.
              </p>
              <p className="text-sm md:text-base text-white/50 leading-relaxed">
                Моя база — это STEM Колледж ОшГУ и практический опыт работы с банковскими и страховыми базами данных. Сейчас я фокусируюсь на <span className="text-white font-bold underline decoration-[#00ff88]">Vibe Coding</span> — быстрой и эффективной разработке с использованием ИИ.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4">
              {contacts.map(c => (
                <a key={c.name} href={c.link} target="_blank" rel="noreferrer" className="p-4 bg-white/5 border border-white/10 rounded-2xl text-center hover:border-[#00ff88]/50 transition-all group active:scale-95 hover:bg-[#00ff88]/5">
                  <span className="text-[10px] font-bold text-white/40 group-hover:text-[#00ff88] block mb-1 uppercase tracking-widest">{c.name}</span>
                  <span className="text-sm font-bold tracking-tighter">Connect ↗</span>
                </a>
              ))}
            </div>
          </section>
        )}

        {/* ПРОЕКТЫ */}
        {activeTab === 'projects' && (
          <section className="space-y-10 animate-[reveal_0.5s_ease-out]">
            <h2 className="text-4xl font-black italic text-[#00ff88]">Showcase</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {myProjects.map((project, i) => (
                <div key={i} className="p-8 bg-white/5 border border-white/10 rounded-[2rem] hover:border-[#00ff88]/30 transition-all group hover:bg-white/[0.07]">
                  <div className="flex justify-between items-start mb-6">
                    <span className={`font-mono text-[10px] px-2 py-1 rounded border ${project.status === 'Live' ? 'text-[#00ff88] border-[#00ff88]/30' : 'text-orange-400 border-orange-400/30'}`}>
                      {project.status}
                    </span>
                    <div className="flex gap-4 font-bold uppercase text-[10px] tracking-widest">
                      <a href={project.github} className="text-white/40 hover:text-white transition-colors">Source</a>
                      {project.status === 'Live' && <a href={project.demo} className="text-[#00ff88] hover:scale-110 transition-transform">Demo</a>}
                    </div>
                  </div>
                  <h3 className="text-2xl font-black mb-2">{project.title}</h3>
                  <p className="text-[#00ff88] text-[10px] font-mono mb-4 uppercase font-bold">{project.tech}</p>
                  <p className="text-white/60 text-sm leading-relaxed">{project.desc}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* НАВЫКИ */}
        {activeTab === 'skills' && (
          <section className="space-y-10 animate-[reveal_0.5s_ease-out]">
            <h2 className="text-4xl font-black italic text-[#00ff88]">Tech Stack</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
              {[
                { title: 'Frontend', items: ['React & TS', 'Tailwind / Vite', 'Framer Motion', 'Responsive UI'] },
                { title: 'Technical', items: ['SQL (Databases)', 'C# / C++ Basics', 'Python Fundamentals', 'PC Engineering'] },
                { title: 'Workflow', items: ['Git / GitHub', 'Vercel / Supabase', 'AI-Driven Dev', 'UI Design (Figma)'] }
              ].map((group, i) => (
                <div key={i} className="p-6 bg-white/5 rounded-3xl border border-white/10 hover:border-[#00ff88]/20 transition-colors">
                  <h3 className="text-[#00ff88] font-mono text-xs uppercase tracking-[0.3em] mb-4 font-bold">{group.title}</h3>
                  <ul className="text-sm space-y-2 text-white/70 font-medium">
                    {group.items.map(skill => <li key={skill}>{skill}</li>)}
                  </ul>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ОПЫТ - ЗДЕСЬ МЫ ДОБАВИЛИ МНОГО ДЕТАЛЕЙ */}
        {activeTab === 'exp' && (
          <section className="space-y-12 animate-[reveal_0.5s_ease-out]">
            <h2 className="text-4xl font-black italic text-[#00ff88]">Experience</h2>
            <div className="space-y-10">
              {experienceData.map((item, i) => (
                <div key={i} className="group relative pl-8 border-l border-[#00ff88]/20 hover:border-[#00ff88]/50 transition-colors py-4">
                  <div className="absolute left-[-5px] top-6 w-[9px] h-[9px] bg-[#00ff88] rounded-full shadow-[0_0_15px_#00ff88]"></div>
                  <h3 className="text-2xl font-black group-hover:text-[#00ff88] transition-colors">{item.title}</h3>
                  <p className="text-[#00ff88] text-[10px] font-mono uppercase mb-4 tracking-widest font-bold">{item.role}</p>
                  <ul className="space-y-2">
                    {item.points.map((point, idx) => (
                      <li key={idx} className="text-white/50 text-sm leading-relaxed flex gap-2">
                        <span className="text-[#00ff88]">▹</span> {point}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* УЧЕБА */}
        {activeTab === 'edu' && (
          <section className="animate-[reveal_0.5s_ease-out]">
            <div className="p-8 md:p-12 bg-white/5 border border-white/10 rounded-[3rem] relative overflow-hidden group">
               <div className="absolute top-0 right-0 p-10 opacity-[0.03] text-9xl font-black pointer-events-none group-hover:scale-110 transition-transform">HIT</div>
               
               <h3 className="text-[#00ff88] font-mono text-xs uppercase tracking-[0.4em] mb-6">// Qualification</h3>
               <h2 className="text-4xl md:text-5xl font-black mb-4">Техник-программист</h2>
               <p className="text-[#00ff88] font-bold mb-10 text-lg italic underline decoration-white/20 underline-offset-4">STEM Колледж ОшГУ • 2025</p>
               
               <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-5">
                  {[
                    'Frontend разработка (React/TS)',
                    'Проектирование и дизайн БД',
                    'Объектно-ориентированное программирование',
                    'Архитектура ЭВМ и систем',
                    'Информационная безопасность',
                    'Сетевые технологии'
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 text-white/60 text-sm hover:text-[#00ff88] transition-colors font-medium">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#00ff88]/40"></div> {item}
                    </div>
                  ))}
               </div>
            </div>
          </section>
        )}

      </main>

      <style>{`
        @keyframes reveal { 
          from { opacity: 0; transform: translateY(20px); } 
          to { opacity: 1; transform: translateY(0); } 
        }
        /* Улучшаем скроллбар для кибер-стиля */
        ::-webkit-scrollbar { width: 5px; }
        ::-webkit-scrollbar-track { background: #050505; }
        ::-webkit-scrollbar-thumb { background: #00ff8833; border-radius: 10px; }
        ::-webkit-scrollbar-thumb:hover { background: #00ff88; }
      `}</style>
    </div>
  );
        }
        
