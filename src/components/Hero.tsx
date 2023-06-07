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
        <div className='wrapper flex h-screen flex-col justify-between text-9xl font-bold text-white'>
          <h2 className='origin-center translate-x-40 translate-y-40 rotate-12 text-8xl text-white'>
            Hello!
          </h2>
          <h2 className='origin-center translate-x-[32rem] translate-y-12 -rotate-12 text-8xl'>
            클라우드 개발자
          </h2>
          <h2 className='origin-center translate-x-12 translate-y-80 rotate-[13deg]'>
            김유범<span className='text-7xl'>입니다!</span>
          </h2>
          <p className='origin-center translate-x-[52rem] -rotate-12 text-4xl'>
            ヽ(´▽`)ﾉ
          </p>
          <div className='flex w-full justify-center p-8'>
            <a href='#about'>
              <Image src={cloud} alt='about-link' width={64} height={64} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
