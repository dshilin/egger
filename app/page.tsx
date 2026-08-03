"use client";

import { useEffect, useMemo, useState } from "react";

const collections = [
  { name: "Pro Classic 8/32", tag: "Универсальная классика", price: "от 1 165 ₽/м²", image: "https://egger-laminate.ru/images/collection/egger-laminate-pro-classic-8-32.jpg" },
  { name: "Pro Classic Aqua+", tag: "Водостойкий", price: "от 1 795 ₽/м²", image: "https://egger-laminate.ru/images/collection/egger-laminate-classic-aqua-pl.jpg" },
  { name: "Pro Large 8/33", tag: "Широкая доска", price: "от 1 405 ₽/м²", image: "https://egger-laminate.ru/images/collection/egger-laminate-pro-large-8-33-aqua-plus.jpg" },
  { name: "Pro Kingsize", tag: "Для просторных комнат", price: "от 1 268 ₽/м²", image: "https://egger-laminate.ru/images/collection/egger-laminate-pro-kingsize-2v.jpg" },
];

const products = [
  { sku: "EPL179", name: "Дуб Сория натуральный", collection: "Pro Classic 10/33", price: 1630, old: 0, cls: "33", thickness: "10", water: "Влагостойкий", tone: "Натуральный", image: "https://egger-laminate.ru/images/decor/egger-laminate-pro-classic-10-33-EPL179-dub-soriya-naturalnyj-NEW.jpg" },
  { sku: "EPL156", name: "Дуб Азгил медовый", collection: "Pro Classic 12/33", price: 1765, old: 0, cls: "33", thickness: "12", water: "Влагостойкий", tone: "Тёплый", image: "https://egger-laminate.ru/images/decor/egger-laminate-pro-classic-12-33-EPL156-dub-azgil-medovyj.jpg" },
  { sku: "EPL185", name: "Дуб Шерман серый", collection: "Pro Large Aqua+", price: 1510, old: 0, cls: "32", thickness: "8", water: "Водостойкий", tone: "Серый", image: "https://egger-laminate.ru/images/decor/egger-laminate-pro-large-8-32-aqua-plus-EPL185-dub-sherman-seryj.jpg" },
  { sku: "EPL255", name: "Клён Киото натуральный", collection: "Pro Classic 8/33", price: 1270, old: 0, cls: "33", thickness: "8", water: "Влагостойкий", tone: "Светлый", image: "https://egger-laminate.ru/images/decor/egger-laminate-pro-classic-8-33-EPL255-klen-kioto-naturalnyj.jpg" },
  { sku: "EPL166", name: "Бетон Чикаго светло-серый", collection: "Pro Large Aqua+", price: 1940, old: 0, cls: "33", thickness: "8", water: "Водостойкий", tone: "Серый", image: "https://egger-laminate.ru/images/decor/egger-laminate-pro-large-8-33-aqua-plus-EPL166-beton-chikago-svetlo-seryj.jpg" },
  { sku: "EPL172", name: "Сосна Инвери винтаж", collection: "Pro Classic 8/32", price: 1165, old: 0, cls: "32", thickness: "8", water: "Влагостойкий", tone: "Тёплый", image: "https://egger-laminate.ru/images/decor/egger-laminate-pro-classic-8-32-EPL172-sosna-inveri-vintazh.jpg" },
];

export default function Home() {
  const [dark, setDark] = useState(false);
  const [query, setQuery] = useState("");
  const [classFilter, setClassFilter] = useState("Все");
  const [assistant, setAssistant] = useState(false);
  const [cookie, setCookie] = useState(true);
  const [menu, setMenu] = useState(false);
  useEffect(() => { const v = localStorage.getItem("theme"); if (v === "dark") setDark(true); }, []);
  const toggleTheme = () => setDark(v => { localStorage.setItem("theme", !v ? "dark" : "light"); return !v; });
  const filtered = useMemo(() => products.filter(p => (classFilter === "Все" || p.cls === classFilter) && (`${p.sku} ${p.name} ${p.collection}`).toLowerCase().includes(query.toLowerCase())), [query, classFilter]);

  return <div className={dark ? "site dark" : "site"}>
    <header className="header">
      <div className="topbar shell"><span>Официальный дилер EGGER</span><div><a href="tel:+74957885246">+7 (495) 788-52-46</a><span className="dot">•</span><a href="mailto:zakazlaminata@ya.ru">zakazlaminata@ya.ru</a></div></div>
      <div className="nav shell">
        <a className="brand" href="#top" aria-label="На главную"><span>EGGER</span><small>LAMINATE</small></a>
        <nav className={menu ? "open" : ""}><a href="#catalog">Каталог</a><a href="#about">О бренде</a><a href="#delivery">Оплата и доставка</a><a href="#contacts">Где купить</a></nav>
        <div className="nav-actions"><button className="theme" onClick={toggleTheme} aria-label="Сменить тему">{dark ? "☀" : "◐"}</button><button className="ai-button" onClick={() => setAssistant(true)}><span>✦</span> ИИ-консультант</button><button className="burger" onClick={() => setMenu(!menu)} aria-label="Меню">☰</button></div>
      </div>
    </header>

    <main id="top">
      <section className="hero">
        <div className="hero-grain" />
        <div className="shell hero-inner">
          <div className="hero-copy"><div className="eyebrow">Новая коллекция · 2026</div><h1>Ламинат EGGER<br/><em>для жизни</em></h1><p>Естественные декоры, продуманная прочность и комфорт, который начинается с пола.</p><div className="hero-actions"><a className="primary" href="#catalog">Смотреть каталог</a><button className="secondary" onClick={() => setAssistant(true)}>Подобрать с ИИ <span>→</span></button></div><div className="benefits"><span><b>25 лет</b> гарантии</span><span><b>1 день</b> доставка</span><span><b>100%</b> оригинал</span></div></div>
          <div className="hero-visual"><div className="plank p1"/><div className="plank p2"/><div className="plank p3"/><div className="hero-note"><span>Хит сезона</span><b>Дуб Сория<br/>натуральный</b><small>EPL179 · 33 класс</small></div></div>
        </div>
      </section>

      <section className="finder shell" aria-label="Быстрый поиск"><div><span className="search-icon">⌕</span><input value={query} onChange={e => setQuery(e.target.value)} placeholder="Название, коллекция или артикул"/></div><button onClick={() => document.getElementById("products")?.scrollIntoView({behavior:"smooth"})}>Найти покрытие</button></section>

      <section className="section shell" id="catalog"><div className="section-head"><div><span className="eyebrow">Подберите свой формат</span><h2>Коллекции EGGER</h2></div><a href="#products">Все коллекции <span>→</span></a></div><div className="collections">{collections.map((c,i)=><article className="collection" key={c.name}><img src={c.image} alt={c.name}/><div className="shade"/><span className="number">0{i+1}</span><div className="collection-copy"><small>{c.tag}</small><h3>{c.name}</h3><p>{c.price}</p></div></article>)}</div></section>

      <section className="section products-section" id="products"><div className="shell"><div className="section-head"><div><span className="eyebrow">Выбор покупателей</span><h2>Популярные декоры</h2></div><div className="chips"><button className={classFilter==="Все"?"active":""} onClick={()=>setClassFilter("Все")}>Все</button><button className={classFilter==="32"?"active":""} onClick={()=>setClassFilter("32")}>32 класс</button><button className={classFilter==="33"?"active":""} onClick={()=>setClassFilter("33")}>33 класс</button></div></div><div className="product-grid">{filtered.map(p=><article className="product" key={p.sku}><div className="product-image"><img src={p.image} alt={p.name}/><span>{p.water}</span><button aria-label="Добавить в избранное">♡</button></div><div className="product-copy"><small>{p.sku} · {p.collection}</small><h3>{p.name}</h3><div className="spec-row"><span>{p.cls} класс</span><span>{p.thickness} мм</span><span>{p.tone}</span></div><div className="price"><b>{p.price.toLocaleString("ru-RU")} ₽/м²</b><button onClick={() => setAssistant(true)}>Рассчитать →</button></div></div></article>)}</div>{filtered.length===0&&<div className="empty">Ничего не найдено. Попробуйте изменить запрос или спросите ИИ-консультанта.</div>}</div></section>

      <section className="ai-banner shell"><div><span className="ai-orb">✦</span><div><span className="eyebrow">Персональный подбор</span><h2>Не знаете, какой пол выбрать?</h2><p>Расскажите о комнате, бюджете и стиле — ИИ-консультант подберёт варианты из каталога и рассчитает количество упаковок.</p></div></div><button onClick={() => setAssistant(true)}>Начать подбор <span>→</span></button></section>

      <section className="about shell" id="about"><div className="about-visual"><div className="wood-circle"/><div className="stat"><b>1961</b><span>год основания<br/>компании EGGER</span></div></div><div className="about-copy"><span className="eyebrow">Австрийское качество</span><h2>Пол, созданный<br/>с заботой о будущем</h2><p>В основе ламината EGGER — древесина из ответственно управляемых лесов. Продуманная многослойная конструкция обеспечивает стабильность, долговечность и естественный внешний вид.</p><div className="about-list"><span><b>1</b> Экологичные материалы</span><span><b>2</b> Запатентованные замки</span><span><b>3</b> Декоры с натуральной текстурой</span></div></div></section>

      <section className="info-section" id="delivery"><div className="shell info-grid"><article><span>01</span><h3>Оплата</h3><p>Наличными, банковской картой или по безналичному расчёту для физических и юридических лиц.</p><a href="#contacts">Подробнее →</a></article><article><span>02</span><h3>Доставка</h3><p>Бережно доставим заказ по Москве и Московской области. Отправляем транспортными компаниями по России.</p><a href="#contacts">Условия доставки →</a></article><article><span>03</span><h3>Шоурумы</h3><p>Посмотрите образцы вживую и получите консультацию специалиста в одном из двух московских шоурумов.</p><a href="#contacts">Смотреть адреса →</a></article></div></section>
    </main>

    <footer id="contacts"><div className="shell footer-grid"><div><a className="brand footer-brand" href="#top"><span>EGGER</span><small>LAMINATE</small></a><p>Специализированный магазин<br/>напольных покрытий EGGER.</p></div><div><h4>Каталог</h4><a href="#catalog">Ламинат 32 класса</a><a href="#catalog">Ламинат 33 класса</a><a href="#catalog">Водостойкий</a><a href="#catalog">С фаской</a></div><div><h4>Покупателям</h4><a href="#about">О бренде</a><a href="#delivery">Оплата</a><a href="#delivery">Доставка</a><a href="#contacts">Контакты</a></div><div><h4>Связаться</h4><a className="footer-phone" href="tel:+74957885246">+7 (495) 788-52-46</a><span>Ежедневно 9:00–20:00</span><button onClick={() => setAssistant(true)}>Задать вопрос ИИ</button></div></div><div className="shell copyright"><span>© 2026 Egger Laminate</span><span>Политика конфиденциальности · Публичная оферта</span></div></footer>

    {assistant && <Assistant onClose={() => setAssistant(false)}/>} 
    {cookie && <div className="cookie"><p>Мы используем cookies, чтобы сайт работал быстрее и удобнее.</p><button onClick={()=>setCookie(false)}>Хорошо</button></div>}
  </div>;
}

function Assistant({onClose}:{onClose:()=>void}) {
  const [messages,setMessages]=useState([{role:"bot",text:"Здравствуйте! Я помогу подобрать ламинат EGGER под вашу комнату и рассчитать нужное количество. Для какого помещения выбираете покрытие?"}]);
  const [text,setText]=useState(""); const [loading,setLoading]=useState(false);
  const [userId] = useState(() => `egger_web_${Date.now()}_${Math.random().toString(36).slice(2,9)}`);
  async function send(value?:string){ const message=(value??text).trim(); if(!message||loading)return; setMessages(m=>[...m,{role:"user",text:message}]); setText(""); setLoading(true);
    try { const res=await fetch("/api/ai-sales",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({user_id:userId,message})}); const data=await res.json(); if(!res.ok) throw new Error(); setMessages(m=>[...m,{role:"bot",text:data.response||data.answer||data.message||"Готово. Уточните, пожалуйста, площадь комнаты."}]); } catch { setMessages(m=>[...m,{role:"bot",text:"Сейчас не удалось связаться с помощником. Попробуйте отправить сообщение ещё раз."}]); } finally {setLoading(false)} }
  return <div className="assistant-backdrop" onMouseDown={e=>{if(e.target===e.currentTarget)onClose()}}><section className="assistant" aria-label="ИИ-консультант"><header><div><span className="ai-orb small">✦</span><div><h2>ИИ-консультант</h2><p><i/> Онлайн · знает каталог EGGER</p></div></div><button onClick={onClose} aria-label="Закрыть">×</button></header><div className="messages">{messages.map((m,i)=><div key={i} className={`message ${m.role}`}>{m.text}</div>)}{loading&&<div className="message bot typing"><span/><span/><span/></div>}</div><div className="suggestions"><button onClick={()=>send("Подберите водостойкий ламинат для кухни")}>Для кухни</button><button onClick={()=>send("Рассчитайте ламинат на комнату 18 м²")}>Рассчитать 18 м²</button><button onClick={()=>send("Покажите светлые декоры 33 класса")}>Светлый 33 класс</button></div><form onSubmit={e=>{e.preventDefault();send()}}><textarea value={text} onChange={e=>setText(e.target.value)} placeholder="Напишите, что вы ищете…" rows={1}/><button aria-label="Отправить">↑</button></form><small className="assistant-note">Помощник предлагает товары только из каталога. Цены и наличие уточняйте перед заказом.</small></section></div>
}
