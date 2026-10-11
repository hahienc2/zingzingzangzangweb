import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = {
  metadataBase: new URL('https://zingzingzangzang.com'),
  title: 'ZingZing ZangZang | Học vui mỗi ngày',
  description: 'Khám phá thế giới tiếng Anh cùng ZingZing ZangZang: flashcards, trò chơi và những trải nghiệm học tập đầy màu sắc dành cho trẻ em.',
  openGraph: {title:'ZingZing ZangZang | Học vui mỗi ngày',description:'Học tiếng Anh qua hình ảnh và trò chơi.',locale:'vi_VN',type:'website'},
};
export default function RootLayout({children}:{children:React.ReactNode}) {return <html lang="vi"><body>{children}</body></html>}
