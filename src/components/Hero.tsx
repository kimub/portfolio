import hero from '../../public/hero.jpg';
import cloud from '../../public/cloud.svg';
import Image from 'next/image';

export default function Hero() {
  return (
    <section
      id='home'
      className='h-screen w-full overflow-hidden bg-cover bg-fixed bg-no-repeat'
      style={{ backgroundImage: `url(${hero.src})` }}
    >
      <div className='h-screen w-screen bg-layer'>
        <div className='wrapper flex h-screen flex-col justify-between font-bold text-white'>
          <h2 className='origin-center translate-x-[10%] translate-y-20 rotate-12 text-[32vw] text-white md:text-[24vw] lg:text-[10vw]'>
            Hello!
          </h2>
          <h2 className='origin-center translate-x-[10%] translate-y-24 -rotate-12 text-[14vw] md:translate-x-[10%] md:translate-y-16 md:text-[13vw] lg:text-[8vw]'>
            클라우드 개발자
          </h2>
          <h2 className='origin-center translate-x-[8%] translate-y-16 -rotate-12 text-[14vw] md:translate-x-[16%] md:translate-y-8 md:text-[16vw] lg:text-[8vw]'>
            김유범
            <span className='text-[10vw] md:text-[7vw] lg:text-[5vw]'>
              입니다!
            </span>
          </h2>
          <p className='origin-center translate-x-[60%] translate-y-4 -rotate-12 text-[8vw] md:-translate-y-24 md:translate-x-[34rem] md:text-[5vw] lg:translate-x-[52rem]  lg:text-[3vw]'>
            ヽ(´▽`)ﾉ
          </p>
          <div className='relative flex w-full flex-col items-center justify-center space-y-4 p-8 md:flex-row md:space-y-0'>
            <a href='#about' className='animate-bounce'>
              <Image src={cloud} alt='about-link' width={64} height={64} />
            </a>
            <p className='right-8 text-base font-semibold md:absolute'>
              Designed by Freefik
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
