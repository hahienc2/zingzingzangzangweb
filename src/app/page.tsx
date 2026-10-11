'use client';

import Image from 'next/image';
import {useState} from 'react';
import {
  ArrowRight, BookOpen, Brain, CheckCircle2, ChevronRight, Gamepad2,
  Heart, Lightbulb, Mail, MapPin, Menu, Palette, Play, Rocket,
  ShieldCheck, Sparkles, Star, Users, X,
} from 'lucide-react';

const values = [
  {icon: Heart, title: 'Niềm vui dẫn đường', text: 'Mỗi sản phẩm bắt đầu từ câu hỏi: làm thế nào để người chơi muốn khám phá thêm?', tone: 'red'},
  {icon: Lightbulb, title: 'Học qua trải nghiệm', text: 'Kiến thức được đưa vào trò chơi một cách tự nhiên, dễ hiểu và vừa sức.', tone: 'yellow'},
  {icon: ShieldCheck, title: 'Thân thiện với trẻ nhỏ', text: 'Hình ảnh trong sáng, thao tác rõ ràng và trải nghiệm phù hợp với lứa tuổi.', tone: 'green'},
];

const process = [
  {number: '01', title: 'Lắng nghe', text: 'Tìm hiểu điều trẻ thích và điều phụ huynh quan tâm.'},
  {number: '02', title: 'Thử nghiệm', text: 'Biến bài học thành những vòng chơi ngắn, trực quan.'},
  {number: '03', title: 'Chăm chút', text: 'Hoàn thiện hình ảnh, âm thanh và từng phản hồi nhỏ.'},
  {number: '04', title: 'Cùng lớn lên', text: 'Tiếp tục cải thiện sản phẩm từ trải nghiệm thực tế.'},
];

function Brand({footer = false}: {footer?: boolean}) {
  return (
    <a className={`brand ${footer ? 'brand-footer' : ''}`} href="#trang-chu" aria-label="Zing Zing Zang Zang - Trang chủ">
      <span className="brand-logo-wrap"><Image src="/images/zingzing-logo.jpg" alt="" width={58} height={58} priority={!footer} /></span>
      <span className="brand-copy"><strong>Zing Zing<br />Zang Zang</strong><small>GAME STUDIO</small></span>
    </a>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header className="site-header">
        <div className="container nav-wrap">
          <Brand />
          <nav className={`nav-links ${menuOpen ? 'nav-open' : ''}`} aria-label="Điều hướng chính">
            <a onClick={closeMenu} href="#trang-chu">Trang chủ</a>
            <a onClick={closeMenu} href="#ve-studio">Về studio</a>
            <a onClick={closeMenu} href="#san-pham">Sản phẩm</a>
            <a onClick={closeMenu} href="#cach-lam-game">Cách làm game</a>
            <a onClick={closeMenu} href="#lien-he">Liên hệ</a>
          </nav>
          <a className="nav-cta" href="#san-pham">Xem sản phẩm <ArrowRight size={17} /></a>
          <button className="menu-toggle" onClick={() => setMenuOpen((open) => !open)} aria-label={menuOpen ? 'Đóng menu' : 'Mở menu'} aria-expanded={menuOpen}>
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </header>

      <main>
        <section id="trang-chu" className="hero">
          <div className="hero-cloud cloud-left" /><div className="hero-cloud cloud-right" />
          <div className="container hero-grid">
            <div className="hero-copy">
              <span className="eyebrow"><Sparkles size={16} /> GAME STUDIO TẠI HÀ NỘI, VIỆT NAM</span>
              <h1>Chúng mình làm game<br />để mỗi giờ học thành<br /><span>một cuộc phiêu lưu.</span></h1>
              <p>Zing Zing Zang Zang là studio phát triển game và sản phẩm tương tác dành cho trẻ em — vui nhộn, giàu hình ảnh và luôn khơi gợi trí tò mò.</p>
              <div className="hero-actions">
                <a className="btn btn-primary" href="#san-pham">Khám phá sản phẩm <ArrowRight size={19} /></a>
                <a className="btn btn-white" href="#ve-studio"><Play size={17} fill="currentColor" /> Gặp đội ngũ Zing</a>
              </div>
              <div className="hero-tags">
                <span><Gamepad2 /> Game giáo dục</span><span><Palette /> Thiết kế thân thiện</span><span><MapPin /> Hà Nội</span>
              </div>
            </div>
            <div className="hero-art" aria-label="Mèo Zing, nhân vật đại diện của studio">
              <span className="art-star star-one">★</span><span className="art-star star-two">✦</span><span className="art-dot dot-one" /><span className="art-dot dot-two" />
              <div className="hero-sun" /><div className="hero-ring" />
              <Image className="hero-cat" src="/images/zing-cat.png" alt="Mèo Zing đang đọc sách" width={1254} height={1254} priority />
              <div className="hello-card"><span>👋</span><div><strong>Xin chào, mình là Zing!</strong><small>Cùng chơi, cùng học nhé.</small></div></div>
            </div>
          </div>
          <div className="hero-hill hill-back" /><div className="hero-hill hill-front" />
        </section>

        <section className="studio-strip" aria-label="Giới thiệu nhanh">
          <div className="container strip-grid">
            <div><span className="strip-icon blue"><Gamepad2 /></span><p><strong>Studio game sáng tạo</strong><small>Ý tưởng nhỏ, thế giới lớn</small></p></div>
            <div><span className="strip-icon red"><Heart /></span><p><strong>Dành cho trẻ em</strong><small>Vui vẻ, gần gũi, dễ tiếp cận</small></p></div>
            <div><span className="strip-icon green"><MapPin /></span><p><strong>Made in Hà Nội</strong><small>Việt Nam</small></p></div>
          </div>
        </section>

        <section id="ve-studio" className="section about-section">
          <div className="container about-layout">
            <div className="about-visual">
              <div className="logo-card"><Image src="/images/zingzing-logo.jpg" alt="Logo Zing Zing Zang Zang" width={512} height={512} /></div>
              <span className="float-card card-games"><Gamepad2 /><strong>Play</strong></span>
              <span className="float-card card-learn"><BookOpen /><strong>Learn</strong></span>
              <span className="float-card card-grow"><Rocket /><strong>Grow</strong></span>
            </div>
            <div className="about-copy">
              <span className="section-kicker">VỀ ZING ZING ZANG ZANG</span>
              <h2>Một studio nhỏ với<br /><span>những giấc mơ đầy màu sắc.</span></h2>
              <p>Chúng mình là một studio game tại Hà Nội, tập trung xây dựng những trải nghiệm số tích cực cho trẻ em và gia đình.</p>
              <p>Ở Zing Zing Zang Zang, game không chỉ để giải trí. Đó còn là nơi bé được quan sát, thử nghiệm, ghi nhớ và tự tin khám phá thế giới theo nhịp riêng của mình.</p>
              <div className="about-note"><Star fill="currentColor" /><div><strong>Sứ mệnh của chúng mình</strong><span>Biến việc học thành một trải nghiệm đáng mong chờ mỗi ngày.</span></div></div>
            </div>
          </div>
        </section>

        <section id="san-pham" className="section products-section">
          <div className="container">
            <div className="section-heading light-heading">
              <span className="section-kicker">SẢN PHẨM CỦA STUDIO</span>
              <h2>Những thế giới nhỏ<br /><span>do chúng mình tạo nên.</span></h2>
              <p>Mỗi sản phẩm là một cách mới để trẻ vừa chơi, vừa học và tìm thấy niềm vui trong việc khám phá.</p>
            </div>
            <article className="featured-product">
              <div className="product-image-wrap">
                <Image className="product-banner" src="/images/zingzing-banner.png" alt="Banner ứng dụng Zing Zing Zang Zang Flashcards" width={1794} height={876} />
                <span className="product-badge">SẢN PHẨM ĐẦU TIÊN</span>
              </div>
              <div className="product-copy">
                <span className="product-type"><BookOpen size={17} /> ỨNG DỤNG HỌC TƯƠNG TÁC</span>
                <h3>Zing Zing Zang Zang<br /><span>Flashcards</span></h3>
                <p>Ứng dụng giúp trẻ làm quen với từ vựng tiếng Anh qua hình ảnh sinh động, âm thanh và những hoạt động ngắn đầy màu sắc.</p>
                <ul>
                  <li><CheckCircle2 /> Hình ảnh trực quan, dễ ghi nhớ</li>
                  <li><CheckCircle2 /> Cách chơi đơn giản, thân thiện</li>
                  <li><CheckCircle2 /> Đồng hành cùng mascot mèo Zing</li>
                </ul>
                <a className="btn btn-yellow" href="https://www.zingzingzangzang.com/#trang-chu" target="_blank" rel="noreferrer">Mở Flashcards <ArrowRight size={19} /></a>
              </div>
            </article>
            <div className="next-worlds">
              <div className="next-copy"><span className="section-kicker">ĐANG TRÊN BÀN VẼ</span><h3>Nhiều cuộc phiêu lưu mới<br />đang được ươm mầm.</h3><p>Studio tiếp tục khám phá các ý tưởng game về ngôn ngữ, tư duy và kỹ năng dành cho trẻ nhỏ.</p></div>
              <div className="concept-grid">
                <div><span>🧩</span><strong>Chơi để tư duy</strong><small>Ý tưởng game logic</small></div>
                <div><span>🌏</span><strong>Khám phá thế giới</strong><small>Ý tưởng game kiến thức</small></div>
                <div><span>🎵</span><strong>Nghe và cảm nhận</strong><small>Ý tưởng game âm thanh</small></div>
              </div>
            </div>
          </div>
        </section>

        <section className="section values-section">
          <div className="container">
            <div className="section-heading">
              <span className="section-kicker">ĐIỀU CHÚNG MÌNH TIN TƯỞNG</span>
              <h2>Game hay bắt đầu từ<br /><span>cảm xúc thật.</span></h2>
            </div>
            <div className="values-grid">
              {values.map(({icon: Icon, ...value}) => <article className={`value-card value-${value.tone}`} key={value.title}><span><Icon /></span><h3>{value.title}</h3><p>{value.text}</p></article>)}
            </div>
          </div>
        </section>

        <section id="cach-lam-game" className="section process-section">
          <div className="container process-layout">
            <div className="process-intro">
              <span className="section-kicker">CÁCH CHÚNG MÌNH LÀM GAME</span>
              <h2>Từ một câu hỏi nhỏ<br />đến <span>một thế giới vui.</span></h2>
              <p>Chúng mình kết hợp giáo dục, thiết kế và công nghệ trong một quy trình gọn gàng, luôn đặt trải nghiệm của trẻ ở trung tâm.</p>
              <div className="team-pill"><Users /><span><strong>Một đội ngũ đa kỹ năng</strong>Thiết kế · Nội dung · Công nghệ</span></div>
            </div>
            <div className="process-list">
              {process.map((item, index) => <div className="process-item" key={item.number}><span className="process-number">{item.number}</span><div><strong>{item.title}</strong><p>{item.text}</p></div>{index < process.length - 1 && <span className="process-line" />}</div>)}
            </div>
          </div>
        </section>

        <section id="lien-he" className="contact-section">
          <div className="container contact-panel">
            <span className="contact-star star-left">★</span><span className="contact-star star-right">✦</span>
            <div className="contact-copy">
              <span className="section-kicker">KẾT NỐI VỚI STUDIO</span>
              <h2>Cùng tạo nên một<br />thế giới thật vui!</h2>
              <p>Bạn muốn hợp tác, chia sẻ ý tưởng hoặc chỉ đơn giản là nói lời chào? Chúng mình rất vui được lắng nghe.</p>
              <div className="contact-actions"><a className="btn btn-yellow" href="mailto:hello@zingzingzangzang.com"><Mail size={18} /> Gửi email cho chúng mình</a><span><MapPin size={18} /> Hà Nội, Việt Nam</span></div>
            </div>
            <Image className="contact-cat" src="/images/zing-cat.png" alt="" width={1254} height={1254} />
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-grid">
          <div className="footer-intro"><Brand footer /><p>Studio game tại Hà Nội xây dựng những trải nghiệm học tập vui nhộn và đầy màu sắc cho trẻ em.</p></div>
          <div className="footer-column"><h3>Studio</h3><a href="#ve-studio">Về chúng mình</a><a href="#cach-lam-game">Cách làm game</a><a href="#lien-he">Liên hệ</a></div>
          <div className="footer-column"><h3>Sản phẩm</h3><a href="https://www.zingzingzangzang.com/#trang-chu" target="_blank" rel="noreferrer">Flashcards</a><a href="#san-pham">Dự án tiếp theo</a></div>
          <div className="footer-column"><h3>Thông tin</h3><span><MapPin size={15} /> Hà Nội, Việt Nam</span><a href="mailto:hello@zingzingzangzang.com">hello@zingzingzangzang.com</a><a href="/privacy-policy">Chính sách riêng tư</a></div>
        </div>
        <div className="container footer-bottom"><span>© {new Date().getFullYear()} Zing Zing Zang Zang.</span><span>Made with joy in Hanoi, Vietnam.</span></div>
      </footer>
    </>
  );
}
