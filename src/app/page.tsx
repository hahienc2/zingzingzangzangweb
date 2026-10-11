'use client';

import Image from 'next/image';
import {useState} from 'react';
import {
  ArrowRight, BookOpen, Check, ChevronRight, Gamepad2, Headphones, Heart,
  Menu, MousePointer2, Play, ShieldCheck, Sparkles, Star, Volume2, X,
} from 'lucide-react';

const learningSteps = [
  {icon: BookOpen, number: '01', title: 'Nhìn hình', description: 'Bắt đầu với hình ảnh lớn, gần gũi và đầy màu sắc.', tone: 'red'},
  {icon: Headphones, number: '02', title: 'Nghe từ', description: 'Làm quen với âm thanh và cách phát âm tiếng Anh.', tone: 'blue'},
  {icon: Gamepad2, number: '03', title: 'Chơi vui', description: 'Ghi nhớ tự nhiên qua những thử thách nhỏ thú vị.', tone: 'green'},
];

const sampleCards = [
  {emoji: '🍎', word: 'Apple', meaning: 'Quả táo', tone: 'card-red'},
  {emoji: '🐝', word: 'Bee', meaning: 'Chú ong', tone: 'card-blue'},
  {emoji: '⭐', word: 'Star', meaning: 'Ngôi sao', tone: 'card-yellow'},
  {emoji: '🌳', word: 'Tree', meaning: 'Cái cây', tone: 'card-green'},
];

const experiences = [
  {emoji: '🎯', title: 'Đoán từ bí mật', text: 'Nhìn hình và chọn từ đúng.'},
  {emoji: '🔗', title: 'Nối cặp thật nhanh', text: 'Ghép từ tiếng Anh với hình ảnh.'},
  {emoji: '🧠', title: 'Lật thẻ trí nhớ', text: 'Tìm các cặp thẻ giống nhau.'},
  {emoji: '🎧', title: 'Nghe và chọn', text: 'Lắng nghe rồi tìm đúng đáp án.'},
];

function Brand({footer = false}: {footer?: boolean}) {
  return (
    <a className={`brand ${footer ? 'brand-footer' : ''}`} href="#trang-chu" aria-label="Zing Zing Zang Zang Flashcards - Trang chủ">
      <span className="brand-logo-wrap">
        <Image src="/images/zingzing-logo.jpg" alt="" width={56} height={56} priority={!footer} />
      </span>
      <span className="brand-copy">
        <strong>Zing Zing<br />Zang Zang</strong>
        <small>FLASHCARDS</small>
      </span>
    </a>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeCard, setActiveCard] = useState(0);
  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header className="site-header">
        <div className="container nav-wrap">
          <Brand />
          <nav className={`nav-links ${menuOpen ? 'nav-open' : ''}`} aria-label="Điều hướng chính">
            <a onClick={closeMenu} href="#trang-chu">Trang chủ</a>
            <a onClick={closeMenu} href="#cach-hoc">Cách học</a>
            <a onClick={closeMenu} href="#bo-the">Bộ thẻ</a>
            <a onClick={closeMenu} href="#tro-choi">Trò chơi</a>
            <a onClick={closeMenu} href="#ve-chung-minh">Về chúng mình</a>
          </nav>
          <a className="nav-cta" href="#bo-the">Khám phá ngay <ArrowRight size={17} /></a>
          <button className="menu-toggle" onClick={() => setMenuOpen((value) => !value)} aria-label={menuOpen ? 'Đóng menu' : 'Mở menu'} aria-expanded={menuOpen}>
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </header>

      <main>
        <section id="trang-chu" className="hero">
          <div className="cloud cloud-one" /><div className="cloud cloud-two" />
          <div className="container hero-inner">
            <div className="hero-banner-frame">
              <Image className="hero-banner" src="/images/zingzing-banner.png" alt="Mèo Zing vui học cùng bộ thẻ Apple, Bee, Star và Tree" width={1794} height={876} priority />
              <div className="hero-shine" />
            </div>
            <div className="hero-message">
              <span className="eyebrow"><Sparkles size={16} /> HỌC TỪ MỚI THEO CÁCH THẬT VUI</span>
              <h1>Mỗi tấm thẻ,<br /><span>một điều kỳ diệu!</span></h1>
              <p>Cùng mèo Zing nhìn hình, nghe từ và chơi những trò chơi nhỏ để tiếng Anh trở thành niềm vui mỗi ngày.</p>
              <div className="hero-actions">
                <a className="btn btn-primary" href="#bo-the">Mở bộ thẻ đầu tiên <ArrowRight size={19} /></a>
                <a className="btn btn-white" href="#cach-hoc"><Play size={17} fill="currentColor" /> Xem cách học</a>
              </div>
              <div className="safe-note"><ShieldCheck size={18} /> Nội dung trong sáng, thân thiện với trẻ nhỏ</div>
            </div>
          </div>
          <div className="grass grass-back" /><div className="grass grass-front" />
        </section>

        <section className="quick-benefits" aria-label="Điểm nổi bật">
          <div className="container benefit-grid">
            <div><span className="benefit-icon orange"><BookOpen /></span><p><strong>Dễ nhìn, dễ nhớ</strong><small>Minh họa sinh động</small></p></div>
            <div><span className="benefit-icon blue"><Volume2 /></span><p><strong>Nghe và làm quen</strong><small>Học bằng nhiều giác quan</small></p></div>
            <div><span className="benefit-icon green"><Heart /></span><p><strong>Mỗi ngày một chút</strong><small>Nuôi dưỡng hứng thú học tập</small></p></div>
          </div>
        </section>

        <section id="cach-hoc" className="section how-section">
          <div className="container">
            <div className="section-heading">
              <span className="section-kicker">3 BƯỚC NHỎ CÙNG MÈO ZING</span>
              <h2>Nhìn một chút, nghe một chút,<br /><span>nhớ thật lâu!</span></h2>
              <p>Mỗi hoạt động được chia thành những bước ngắn gọn để bé luôn cảm thấy nhẹ nhàng và hào hứng.</p>
            </div>
            <div className="steps-grid">
              {learningSteps.map(({icon: Icon, ...step}, index) => (
                <article className={`step-card step-${step.tone}`} key={step.number}>
                  <span className="step-number">{step.number}</span><span className="step-icon"><Icon /></span>
                  <h3>{step.title}</h3><p>{step.description}</p>
                  {index < learningSteps.length - 1 && <ChevronRight className="step-arrow" aria-hidden="true" />}
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="bo-the" className="section cards-section">
          <div className="container cards-layout">
            <div className="cards-copy">
              <span className="section-kicker">BỘ THẺ ĐẦU TIÊN</span>
              <h2>Chạm vào từng thẻ,<br /><span>gọi tên thế giới!</span></h2>
              <p>Từ quả táo đỏ đến chú ong nhỏ, những hình ảnh quen thuộc giúp bé kết nối từ mới với thế giới xung quanh.</p>
              <div className="cards-points">
                <div><Check /> Hình minh họa lớn, rõ ràng</div><div><Check /> Từ tiếng Anh ngắn gọn, dễ đọc</div><div><Check /> Chủ đề gần gũi với bé</div>
              </div>
              <p className="demo-note"><MousePointer2 size={17} /> Chọn một thẻ bên cạnh để xem thử</p>
            </div>
            <div className="flashcard-stage" aria-live="polite">
              <div className={`big-flashcard ${sampleCards[activeCard].tone}`}>
                <span className="card-star">★</span><span className="card-emoji" role="img" aria-label={sampleCards[activeCard].meaning}>{sampleCards[activeCard].emoji}</span>
                <strong>{sampleCards[activeCard].word}</strong><small>{sampleCards[activeCard].meaning}</small>
                <button className="sound-button" aria-label={`Nghe từ ${sampleCards[activeCard].word}`}><Volume2 /></button>
              </div>
              <div className="card-tabs" aria-label="Chọn thẻ mẫu">
                {sampleCards.map((card, index) => <button className={activeCard === index ? 'active' : ''} onClick={() => setActiveCard(index)} key={card.word} aria-label={`Xem thẻ ${card.word}`} aria-pressed={activeCard === index}>{card.emoji}</button>)}
              </div>
            </div>
          </div>
        </section>

        <section id="tro-choi" className="section games-section">
          <div className="container">
            <div className="section-heading">
              <span className="section-kicker">VỪA HỌC VỪA CHƠI</span>
              <h2>Trò chơi nhỏ,<br /><span>niềm vui thật to!</span></h2>
              <p>Những ý tưởng hoạt động giúp giờ làm quen với từ mới thêm nhiều tiếng cười.</p>
            </div>
            <div className="games-grid">
              {experiences.map((game, index) => <article className={`game-card game-${index + 1}`} key={game.title}><span className="game-number">0{index + 1}</span><span className="game-emoji">{game.emoji}</span><h3>{game.title}</h3><p>{game.text}</p><span className="game-link">Khám phá ý tưởng <ChevronRight size={16} /></span></article>)}
            </div>
          </div>
        </section>

        <section id="ve-chung-minh" className="section story-section">
          <div className="container story-layout">
            <div className="mascot-wrap">
              <span className="mascot-spark spark-one">★</span><span className="mascot-spark spark-two">✦</span><span className="mascot-spark spark-three">●</span><div className="mascot-sun" />
              <Image className="mascot-image" src="/images/zing-cat.png" alt="Mèo Zing đang vui vẻ đọc sách" width={1254} height={1254} />
            </div>
            <div className="story-copy">
              <span className="section-kicker">XIN CHÀO, MÌNH LÀ ZING!</span>
              <h2>Người bạn nhỏ đồng hành<br />trong mỗi <span>giờ học vui.</span></h2>
              <p>Zing Zing Zang Zang được xây dựng với mong muốn mang đến trải nghiệm làm quen tiếng Anh gần gũi, giàu hình ảnh và đầy niềm vui cho trẻ nhỏ.</p>
              <p>Chúng mình tin rằng sự tò mò là khởi đầu của việc học. Vì thế, mỗi tấm thẻ và hoạt động đều hướng tới cảm giác: bé muốn nhìn thêm, nghe thêm và khám phá thêm.</p>
              <div className="story-values"><div><Star fill="currentColor" /> Tươi sáng</div><div><Heart fill="currentColor" /> Gần gũi</div><div><Sparkles /> Khơi gợi tò mò</div></div>
            </div>
          </div>
        </section>

        <section className="final-cta">
          <div className="container final-panel">
            <span className="final-star final-star-one">★</span><span className="final-star final-star-two">★</span>
            <div className="final-copy"><span className="section-kicker">SẴN SÀNG CÙNG MÈO ZING?</span><h2>Mở thẻ ra,<br />mở cả thế giới!</h2><p>Một hành trình học tiếng Anh đầy màu sắc đang chờ bé khám phá.</p><a className="btn btn-yellow" href="#bo-the">Bắt đầu khám phá <ArrowRight size={19} /></a></div>
            <Image className="final-mascot" src="/images/zing-cat.png" alt="" width={1254} height={1254} />
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-grid">
          <div className="footer-intro"><Brand footer /><p>Thế giới học tiếng Anh vui nhộn, nơi trí tò mò được nuôi dưỡng qua từng hình ảnh và trò chơi.</p></div>
          <div className="footer-column"><h3>Khám phá</h3><a href="#cach-hoc">Cách học</a><a href="#bo-the">Bộ thẻ</a><a href="#tro-choi">Trò chơi</a></div>
          <div className="footer-column"><h3>Thông tin</h3><a href="#ve-chung-minh">Về chúng mình</a><a href="/privacy-policy">Chính sách riêng tư</a></div>
          <div className="footer-column"><h3>Liên hệ</h3><a href="mailto:hello@zingzingzangzang.com">hello@zingzingzangzang.com</a><span>zingzingzangzang.com</span></div>
        </div>
        <div className="container footer-bottom"><span>© {new Date().getFullYear()} Zing Zing Zang Zang.</span><span>Làm bằng niềm vui cho những bạn nhỏ ham học.</span></div>
      </footer>
    </>
  );
}
