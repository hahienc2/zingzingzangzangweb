import type {Metadata} from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://zingzingzangzang.com'),
  title: 'Zing Zing Zang Zang | Flashcards tiếng Anh cho bé',
  description: 'Cùng mèo Zing nhìn hình, nghe từ và vui học tiếng Anh qua những bộ thẻ đầy màu sắc.',
  openGraph: {
    title: 'Zing Zing Zang Zang | Flashcards tiếng Anh cho bé',
    description: 'Mỗi tấm thẻ, một điều kỳ diệu!',
    images: ['/images/zingzing-banner.png'],
    locale: 'vi_VN',
    type: 'website',
  },
};

export default function RootLayout({children}: Readonly<{children: React.ReactNode}>) {
  return <html lang="vi"><body>{children}</body></html>;
}
