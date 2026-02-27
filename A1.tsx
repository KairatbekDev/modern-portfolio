import React, { useState, useEffect } from 'react';

export default function MyPortfolio() {
  const [activeTab, setActiveTab] = useState('main');
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const contacts = [
    { name: 'Telegram', link: 'https://t.me/nursnzz' },
    { name: 'WhatsApp', link: 'https://wa.me/996706544376' }, // ЗАМЕНИ НА СВОЙ НОМЕР
    { name: 'Instagram', link: 'https://instagram.com/nur1.aep' },
    { name: 'GitHub', link: 'https://github.com/nursnzzx' }
  ];

  const myProjects = [
    {
      title: "Personal Portfolio v1",
      tech: "React, TS, Tailwind",
      desc: "Мой текущий сайт с адаптивным дизайном. Реализована система вкладок и анимации на Tailwind CSS.",
      status: "Live",
      github: "https://github.com/nursnzzx",
      demo: "#"
    },
    {
      title: "Smart Tracker (Plan)",
      tech: "React, LocalStorage",
      desc: "Приложение для учета задач или расходов. Планирую реализовать сохранение данных в браузере.",
      status: "In Progress",
      github: "#",
      demo: "#"
    }
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-[#00ff88] selection:text-black antialiased">
      
      {/* ФОНОВЫЕ ЭФФЕКТЫ */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#00ff88] opacity-[0.03] blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-500 opacity-[0.03] blur-[120px]"></div>
      </div>

      {/* НАВИГАЦИЯ */}
      <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[100] bg-white/5 backdrop-blur-2xl border border-white/10 p-1.5 rounded-2xl flex gap-1 shadow-2xl">
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
            className={`px-4 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-[0.2em] transition-all duration-300 ${activeTab === tab.id ? 'bg-[#00ff88] text-black shadow-[0_0_20px_rgba(0,255,136,0.3)]' : 'text-white/40 hover:text-white hover:bg-white/5'}`}
          >
            {tab.label}
          </button>
        ))}
      </nav>

      <main className={`relative z-10 max-w-4xl mx-auto px-6 pt-16 pb-32 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        
        {/* ГЛАВНАЯ / О СЕБЕ */}
        {activeTab === 'main' && (
          <section className="space-y-10 animate-[reveal_0.5s_ease-out]">
            <div className="inline-block px-3 py-1 border border-[#00ff88]/30 rounded-full">
               <span className="text-[#00ff88] font-mono text-[10px] tracking-widest uppercase">Junior Frontend Enthusiast</span>
            </div>
            
            <div className="space-y-4">
              <h1 className="text-6xl md:text-8xl font-black leading-[0.9] tracking-tighter">
                KAIRAT <br/> <span className="text-transparent" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.3)' }}>DEVELOPER</span>
              </h1>
              <div className="flex gap-4 text-[#00ff88] font-mono text-[11px] uppercase tracking-widest">
                <span>19 years old</span>
                <span>•</span>
                <span>Bishkek, Kyrgyzstan</span>
              </div>
            </div>

            <div className="space-y-6 max-w-2xl">
              <p className="text-lg md:text-2xl text-white/80 leading-relaxed font-medium italic">
                Создаю современные интерфейсы на React. Моя цель — стать Fullstack-разработчиком, объединяя эстетику фронтенда и мощь бэкенда.
              </p>
              <p className="text-sm md:text-base text-white/50 leading-relaxed">
                Мой путь в IT начался в <span className="text-white">STEM Колледже ОшГУ</span>. Я не просто пишу код, а стараюсь понять, как он решает задачи пользователя. Сейчас я глубоко изучаю <span className="text-[#00ff88]">TypeScript</span> и архитектуру веб-приложений.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4">
              {contacts.map(c => (
                <a key={c.name} href={c.link} target="_blank" rel="noreferrer" className="p-4 bg-white/5 border border-white/10 rounded-2xl text-center hover:border-[#00ff88]/50 transition-all group active:scale-95">
                  <span className="text-[10px] font-bold text-white/40 group-hover:text-[#00ff88] block mb-1 uppercase tracking-widest">{c.name}</span>
                  <span className="text-sm font-bold tracking-tighter italic">Connect ↗</span>
                </a>
              ))}
            </div>
          </section>
        )}

        {/* ПРОЕКТЫ */}
        {activeTab === 'projects' && (
          <section className="space-y-10 animate-[reveal_0.5s_ease-out]">
            <h2 className="text-4xl font-black italic underline decoration-[#00ff88]/30 underline-offset-8 italic">Showcase</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {myProjects.map((project, i) => (
                <div key={i} className="p-8 bg-white/5 border border-white/10 rounded-[2.5rem] hover:border-[#00ff88]/30 transition-all group">
                  <div className="flex justify-between items-start mb-6">
                    <span className={`font-mono text-[10px] uppercase tracking-widest ${project.status === 'Live' ? 'text-[#00ff88]' : 'text-orange-400'}`}>
                      {project.status}
                    </span>
                    <div className="flex gap-4">
                      <a href={project.github} className="text-white/40 hover:text-white text-xs underline underline-offset-4">Source</a>
                      {project.status === 'Live' && <a href={project.demo} className="text-[#00ff88] text-xs font-bold hover:scale-105 transition-transform">Demo ↗</a>}
                    </div>
                  </div>
                  <h3 className="text-2xl font-black mb-2">{project.title}</h3>
                  <p className="text-white/40 text-[10px] font-mono mb-4 uppercase">{project.tech}</p>
                  <p className="text-white/60 text-sm leading-relaxed">{project.desc}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* НАВЫКИ */}
        {activeTab === 'skills' && (
          <section className="space-y-10 animate-[reveal_0.5s_ease-out]">
            <h2 className="text-4xl font-black italic underline decoration-[#00ff88]/30 underline-offset-8">Technical Stack</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 bg-white/5 rounded-3xl border border-white/5">
                <h3 className="text-[#00ff88] font-mono text-xs uppercase tracking-[0.3em] mb-4">Core Frontend</h3>
                <ul className="text-sm space-y-2 text-white/70 font-medium">
                  <li>React & TypeScript</li>
                  <li>JavaScript (ES6+)</li>
                  <li>Tailwind CSS / Vite</li>
                  <li>Responsive Design</li>
                </ul>
              </div>
              <div className="p-6 bg-white/5 rounded-3xl border border-white/5">
                <h3 className="text-[#00ff88] font-mono text-xs uppercase tracking-[0.3em] mb-4">Programming</h3>
                <ul className="text-sm space-y-2 text-white/70 font-medium">
                  <li>SQL (Data Design)</li>
                  <li>C++, C# (Logic)</li>
                  <li>Python Basics</li>
                  <li>Node.js (Next Step)</li>
                </ul>
              </div>
              <div className="p-6 bg-white/5 rounded-3xl border border-white/5">
                <h3 className="text-[#00ff88] font-mono text-xs uppercase tracking-[0.3em] mb-4">Development</h3>
                <ul className="text-sm space-y-2 text-white/70 font-medium">
                  <li>Git / GitHub</li>
                  <li>Vercel Deployment</li>
                  <li>PC Architecture</li>
                  <li>UI/UX (Figma)</li>
                </ul>
              </div>
            </div>
          </section>
        )}

        {/* ОПЫТ */}
        {activeTab === 'exp' && (
          <section className="space-y-12 animate-[reveal_0.5s_ease-out]">
            <h2 className="text-4xl font-black italic underline decoration-[#00ff88]/30 underline-offset-8">Experience</h2>
            <div className="space-y-8">
              {[
                { title: 'Finka Bank', role: 'Data Management', text: 'Оцифровка данных, работа с банковскими архивами и верификация клиентской базы.' },
                { title: 'Аю Гарант', role: 'Database Specialist', text: 'Работа со страховыми базами данных на платформе 1С: регистрация и учет.' },
                { title: 'STEM Колледж ОшГУ', role: 'IT Support', text: 'Техническое обслуживание ПК: диагностика, аппаратный ремонт и установка ПО.' }
              ].map((item, i) => (
                <div key={i} className="group relative pl-8 border-l border-white/10 hover:border-[#00ff88]/50 transition-colors py-2">
                  <div className="absolute left-[-5px] top-0 w-[9px] h-[9px] bg-[#00ff88] rounded-full shadow-[0_0_15px_#00ff88]"></div>
                  <h3 className="text-xl font-bold group-hover:text-[#00ff88] transition-colors">{item.title}</h3>
                  <p className="text-[#00ff88] text-[10px] font-mono uppercase mb-3 tracking-widest">{item.role}</p>
                  <p className="text-white/50 text-sm leading-relaxed max-w-xl">{item.text}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* УЧЕБА */}
        {activeTab === 'edu' && (
          <section className="animate-[reveal_0.5s_ease-out]">
            <div className="p-8 md:p-12 bg-white/5 border border-white/10 rounded-[3rem] relative overflow-hidden group shadow-2xl">
               <div className="absolute top-0 right-0 p-10 opacity-[0.03] text-9xl font-black pointer-events-none group-hover:scale-110 transition-transform">2025</div>
               
               <h3 className="text-[#00ff88] font-mono text-xs uppercase tracking-[0.4em] mb-6">// Education</h3>
               <h2 className="text-4xl md:text-5xl font-black mb-4">STEM Колледж ОшГУ</h2>
               <p className="text-[#00ff88] font-bold mb-10 text-lg md:text-xl italic">Среднее специальное образование</p>
               
               <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-5 mb-12">
                  {[
                    'Frontend разработка (React)',
                    'Объектно-ориентированное программирование',
                    'Информационная безопасность',
                    'Компьютерные сети',
                    'Проектирование баз данных',
                    'Мобильная разработка'
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 text-white/60 text-sm hover:text-white transition-colors">
                      <span className="text-[#00ff88] text-xl">▹</span> {item}
                    </div>
                  ))}
               </div>

               <div className="pt-8 border-t border-white/5 text-center md:text-left">
                  <p className="text-white/30 text-[10px] leading-relaxed uppercase tracking-widest italic">
                    Диплом специалиста получен.
                  </p>
               </div>
            </div>
          </section>
        )}

      </main>

      <style>{`
        @keyframes reveal { 
          from { opacity: 0; transform: translateY(30px); } 
          to { opacity: 1; transform: translateY(0); } 
        }
      `}</style>
    </div>
  );
}
