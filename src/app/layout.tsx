import './globals.css';
import localFont from '@next/font/local';

export const metadata = {
  title: '김유범 포트폴리오',
  description: '김유범 포트폴리오',
};

const pretendard = localFont({
  src: [
    {
      path: '../../public/fonts/Pretendard-Thin.woff',
      weight: '100',
    },
    {
      path: '../../public/fonts/Pretendard-ExtraLight.woff',
      weight: '200',
    },
    {
      path: '../../public/fonts/Pretendard-Light.woff',
      weight: '300',
    },
    {
      path: '../../public/fonts/Pretendard-Regular.woff',
      weight: '400',
    },
    {
      path: '../../public/fonts/Pretendard-Medium.woff',
      weight: '500',
    },
    {
      path: '../../public/fonts/Pretendard-SemiBold.woff',
      weight: '600',
    },
    {
      path: '../../public/fonts/Pretendard-Bold.woff',
      weight: '700',
    },
    {
      path: '../../public/fonts/Pretendard-ExtraBold.woff',
      weight: '800',
    },
    {
      path: '../../public/fonts/Pretendard-Black.woff',
      weight: '900',
    },
  ],
  variable: '--font-pretendard',
});

type Props = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Props) {
  return (
    <html
      className={`scroll-smooth ${pretendard.variable} font-sans`}
      lang='ko'
    >
      <body>{children}</body>
    </html>
  );
}
