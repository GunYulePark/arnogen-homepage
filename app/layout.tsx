import type { Metadata } from 'next';
import { Noto_Sans_KR, Plus_Jakarta_Sans } from 'next/font/google';
import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import './globals.css';
const sans=Noto_Sans_KR({variable:'--font-sans',subsets:['latin'],weight:['400','500','600','700']});
const display=Plus_Jakarta_Sans({variable:'--font-display',subsets:['latin'],weight:['500','600','700','800']});
export const metadata:Metadata={title:{default:'아르노젠 | 바이오 CDMO',template:'%s | 아르노젠'},description:'바이오의약품 개발과 생산을 연결하는 아르노젠의 CDMO 솔루션을 소개합니다.'};
export default function RootLayout({children}:Readonly<{children:React.ReactNode}>){return <html lang="ko"><body className={`${sans.variable} ${display.variable}`}><a href="#main" className="skip-link">본문으로 바로가기</a><Header/><main id="main">{children}</main><Footer/></body></html>}
