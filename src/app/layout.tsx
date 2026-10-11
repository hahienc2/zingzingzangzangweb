import type {Metadata} from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://zingzingzangzang.com'),
  title: 'Zing Zing Zang Zang | Game Studio tại Hà Nội',
  description: 'Studio game tại Hà Nội phát triển những trải nghiệm tương tác vui nhộn, giàu hình ảnh và thân thiện với trẻ em.',
  openGraph: {
    title: 'Zing Zing Zang Zang | Game Studio tại Hà Nội',
    description: 'Chúng mình làm game để mỗi giờ học thành một cuộc phiêu lưu.',
    images: ['/images/zingzing-logo.jpg'],
    locale: 'vi_VN',
    type: 'website',
  },
};

export default function RootLayout({children}: Readonly<{children: React.ReactNode}>) {
  return <html lang="vi"><body>{children}</body></html>;
}
