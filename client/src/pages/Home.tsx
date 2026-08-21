/* Design: Editorial JurÃ­dico ContemporÃ¢neo â€” composiÃ§Ã£o assimÃ©trica, marfim + vinho ameixa, tipografia editorial e CTAs discretos. */
import { useEffect, useState } from "react";
import {
  ArrowUpRight,
  CalendarDays,
  Check,
  ChevronDown,
  Clock3,
  Instagram,
  MapPin,
  Menu,
  MessageCircle,
  Scale,
  ShieldCheck,
  X,
} from "lucide-react";

const whatsapp = "https://wa.me/5521988127439?text=OlÃ¡%2C%20Dra.%20Maria%20Pratta.%20Gostaria%20de%20agendar%20uma%20orientaÃ§Ã£o.";

const practiceAreas = [
  {
    number: "01",
    title: "Direito Trabalhista",
    text: "OrientaÃ§Ã£o estratÃ©gica para relaÃ§Ãµes de trabalho, verbas, rescisÃµes e situaÃ§Ãµes que exigem uma leitura cuidadosa dos seus direitos.",
  },
  {
    number: "02",
    title: "Direito PrevidenciÃ¡rio",
    text: "AnÃ¡lise de benefÃ­cios, aposentadorias e caminhos possÃ­veis para que cada etapa seja conduzida com clareza e seguranÃ§a.",
  },
  {
    number: "03",
    title: "Direito do Consumidor",
    text: "AtuaÃ§Ã£o em conflitos com bancos, telefonia, serviÃ§os essenciais, compras online e outras relaÃ§Ãµes de consumo.",
  },
  {
    number: "04",
    title: "Direito de FamÃ­lia",
    text: "Atendimento sensÃ­vel e objetivo para divÃ³rcio, inventÃ¡rio, partilha e decisÃµes que pedem orientaÃ§Ã£o de confianÃ§a.",
  },
];

const process = [
  ["01", "VocÃª conta o que aconteceu", "A primeira conversa Ã© um espaÃ§o de escuta, sem julgamento e com linguagem simples."],
  ["02", "Analisamos o caminho", "A situaÃ§Ã£o Ã© organizada para identificar direitos, riscos e alternativas possÃ­veis."],
  ["03", "VocÃª decide com clareza", "Com orientaÃ§Ã£o estratÃ©gica, vocÃª entende o prÃ³ximo passo e segue com mais seguranÃ§a."],
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell">
      <header className={`site-header ${scrolled ? "site-header--scrolled" : ""}`}>
        <a className="brand" href="#inicio" onClick={closeMenu}>
          <span className="brand-mark"><img src="/images/logo-maria.png" alt="" /></span>
          <span className="brand-copy"><strong>Maria Pratta</strong><small>Advocacia autoral</small></span>
        </a>
        <button className="menu-toggle" aria-label={menuOpen ? "Fechar menu" : "Abrir menu"} onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
        <nav className={`main-nav ${menuOpen ? "main-nav--open" : ""}`}>
          <a href="#atuacao" onClick={closeMenu}>AtuaÃ§Ã£o</a>
          <a href="#sobre" onClick={closeMenu}>A abordagem</a>
          <a href="#processo" onClick={closeMenu}>Como funciona</a>
          <a href="#contato" onClick={closeMenu}>Contato</a>
          <a className="nav-cta" href={whatsapp} target="_blank" rel="noreferrer" onClick={closeMenu}>Falar com a Dra. <ArrowUpRight size={15} /></a>
        </nav>
      </header>

      <main>
        <section id="inicio" className="hero-section">
          <div className="hero-image" aria-hidden="true" />
          <div className="hero-overlay" />
          <div className="container hero-content">
            <div className="hero-kicker"><span /> Advocacia trabalhista & previdenciÃ¡ria</div>
            <h1>Seu caso merece<br /><em>clareza</em> antes<br />de qualquer decisÃ£o.</h1>
            <p className="hero-lede">OrientaÃ§Ã£o jurÃ­dica prÃ³xima, estratÃ©gica e humana para vocÃª atravessar momentos importantes com mais seguranÃ§a.</p>
            <div className="hero-actions">
              <a className="button button--primary" href={whatsapp} target="_blank" rel="noreferrer">Agendar orientaÃ§Ã£o <ArrowUpRight size={18} /></a>
              <a className="text-link" href="#atuacao">ConheÃ§a as Ã¡reas de atuaÃ§Ã£o <ChevronDown size={16} /></a>
            </div>
          </div>
          <a className="scroll-cue" href="#atuacao" aria-label="Rolar para Ã¡reas de atuaÃ§Ã£o"><span>Scroll para explorar</span><ChevronDown size={18} /></a>
        </section>

        <section className="trust-strip">
          <div className="container trust-grid">
            <div className="trust-intro"><span className="eyebrow">Um atendimento que comeÃ§a por vocÃª</span><strong>Direito explicado<br />com humanidade.</strong></div>
            <div className="trust-item"><ShieldCheck size={22} /><div><strong>EstratÃ©gia clara</strong><span>DecisÃµes orientadas por anÃ¡lise.</span></div></div>
            <div className="trust-item"><MessageCircle size={22} /><div><strong>Contato direto</strong><span>ComunicaÃ§Ã£o prÃ³xima com a advogada.</span></div></div>
            <div className="trust-item"><CalendarDays size={22} /><div><strong>Atendimento online</strong><span>Comodidade em todo o Brasil.</span></div></div>
          </div>
        </section>

        <section id="atuacao" className="section section--areas">
          <div className="container">
            <div className="section-heading section-heading--split"><div><span className="eyebrow">Ãreas de atuaÃ§Ã£o</span><h2>ExperiÃªncia para<br /><em>organizar</em> o caminho.</h2></div><p>Nem sempre Ã© fÃ¡cil saber por onde comeÃ§ar. A atuaÃ§Ã£o da Dra. Maria combina conhecimento tÃ©cnico com uma conversa que cabe na vida real.</p></div>
            <div className="areas-list">
              {practiceAreas.map((area) => <article className="area-card" key={area.number}><span className="area-number">{area.number}</span><div><h3>{area.title}</h3><p>{area.text}</p><a href={whatsapp} target="_blank" rel="noreferrer">Entender como posso ser orientado <ArrowUpRight size={16} /></a></div></article>)}
            </div>
          </div>
        </section>

        <section id="sobre" className="section section--about">
          <div className="container about-grid">
            <div className="about-visual"><img src="/images/foto-maria.webp" alt="Dra. Maria Pratta em ambiente profissional" /><span className="visual-caption">Escuta, estratÃ©gia<br />e presenÃ§a.</span></div>
            <div className="about-copy"><span className="eyebrow">A abordagem Maria Pratta</span><h2>Mais do que responder: <em>entender.</em></h2><p>Todo caso carrega uma histÃ³ria, uma urgÃªncia e uma pessoa que precisa ser ouvida. Por isso, o atendimento comeÃ§a organizando o que parece confuso â€” para que vocÃª entenda seus direitos e escolha os prÃ³ximos passos com tranquilidade.</p><p>O trabalho Ã© desenvolvido com atendimento online em todo o Brasil e, quando necessÃ¡rio, tambÃ©m de forma presencial em SÃ£o JoÃ£o de Meriti, no Rio de Janeiro.</p><a className="button button--outline" href={whatsapp} target="_blank" rel="noreferrer">Conversar sobre meu caso <ArrowUpRight size={18} /></a></div>
          </div>
        </section>

        <section id="processo" className="section section--process">
          <div className="container"><div className="section-heading"><span className="eyebrow">Como funciona</span><h2>Um prÃ³ximo passo<br /><em>de cada vez.</em></h2></div><div className="process-grid">{process.map(([number, title, text]) => <div className="process-card" key={number}><span className="process-number">{number}</span><span className="process-line" /><h3>{title}</h3><p>{text}</p></div>)}</div></div>
        </section>

        <section className="section section--cta">
          <div className="container cta-box"><div><span className="eyebrow">OrientaÃ§Ã£o inicial</span><h2>Quando vocÃª entende<br />o caminho, tudo muda.</h2></div><a className="button button--light" href={whatsapp} target="_blank" rel="noreferrer">Agendar pelo WhatsApp <ArrowUpRight size={18} /></a></div>
        </section>

        <section id="contato" className="section section--contact">
          <div className="container contact-grid"><div className="contact-intro"><span className="eyebrow">Contato</span><h2>Vamos conversar<br /><em>com calma.</em></h2><p>Agende um horÃ¡rio para contar o que aconteceu. O primeiro passo Ã© mais simples quando vocÃª nÃ£o precisa dar sozinho.</p><a className="button button--primary" href={whatsapp} target="_blank" rel="noreferrer"><MessageCircle size={18} /> Falar pelo WhatsApp</a><a className="instagram-link" href="https://instagram.com/advogada.mariapratta" target="_blank" rel="noreferrer"><Instagram size={17} /> @advogada.mariapratta</a></div><div className="contact-details"><div className="detail-item"><Clock3 size={21} /><div><span className="eyebrow">HorÃ¡rio de atendimento</span><strong>Segunda a sexta</strong><p>09h Ã s 17h<br /><small>Sexta-feira atÃ© 16h</small></p></div></div><div className="detail-item"><MapPin size={21} /><div><span className="eyebrow">Atendimento presencial</span><strong>Centro Â· SÃ£o JoÃ£o de Meriti/RJ</strong><p>Avenida AutomÃ³vel Clube, 63<br />Sala 311</p></div></div><div className="detail-item"><Scale size={21} /><div><span className="eyebrow">TambÃ©m online</span><strong>Em todo o Brasil</strong><p>ComunicaÃ§Ã£o direta e anÃ¡lise Ã¡gil do seu caso.</p></div></div></div></div>
        </section>
      </main>

      <footer className="site-footer"><div className="container footer-grid"><a className="brand" href="#inicio"><span className="brand-mark"><img src="/images/logo-maria.png" alt="" /></span><span className="brand-copy"><strong>Maria Pratta</strong><small>Advocacia autoral</small></span></a><p>DrÂª Maria I. C. Pratta<br />Advogada Trabalhista e PrevidenciÃ¡ria</p><span className="footer-note">Â© {new Date().getFullYear()} Maria Pratta Advocacia</span></div></footer>
    </div>
  );
}

