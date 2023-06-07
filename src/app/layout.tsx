import './globals.css';

type Props = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Props) {
  return (
    <html className='scroll-smooth' lang='ko'>
      <head>
        <title>김유범</title>
        <meta name='description' content='김유범 포트폴리오' />
        <link
          rel='icon'
          href='https://res.cloudinary.com/dhfkiaac8/image/upload/v1686148517/%ED%8F%AC%ED%8A%B8%ED%8F%B4%EB%A6%AC%EC%98%A4/favicon_fqjm3y.ico'
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
