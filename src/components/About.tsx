import SectionTitle from './SectionTitle';

export default function About() {
  return (
    <section id='about' className='wrapper space-y-28 px-8 py-24 md:px-16'>
      <SectionTitle title='About' />
      <div className='space-y-24'>
        <div
          className='space-y-4'
          data-aos='fade-up'
          data-aos-offset='200'
          data-aos-delay='300'
          data-aos-duration='1800'
          data-aos-once
        >
          <h3 className='text-2xl font-bold md:text-3xl'>
            저는 이런 <span className='text-primary'>사람</span>입니다.
          </h3>
          <div className='space-y-1 text-base font-semibold md:text-lg'>
            <p>타인의 의견을 경청하며 좋은 의견은 적극적으로 수용합니다.</p>
            <p>
              프로젝트에 필요한 기술과 트렌드를 따라가기 위해 꾸준히 학습합니다.
            </p>
            <p>
              반복되는 코드를 줄이고 코드의 재사용성을 높이기 위해 늘 고민하고
              해답을 찾아냅니다.
            </p>
          </div>
        </div>
        <div
          className='space-y-4 md:ml-24 lg:ml-48'
          data-aos='fade-up'
          data-aos-offset='200'
          data-aos-delay='600'
          data-aos-duration='1800'
          data-aos-once
        >
          <h3 className='text-2xl font-bold md:text-3xl'>
            저는 다음과 같은 <span className='text-primary'>목표</span>를 가지고
            있습니다.
          </h3>
          <div className='space-y-1 text-base font-semibold md:text-lg'>
            <p>1년 차에는 맡은 일을 완벽히 완수하는 것</p>
            <p>
              2 ~ 3년 차에는 1년 차에 했던 일을 보다 나은 방법으로 완수하고
              동료들에게 문제의 해결책을 찾는데 도움을 주는 것
            </p>
            <p>
              4 ~ 5년 차에는 더 나은 성과를 내기 위해 문제와 해결책을 직접
              찾아내고 동료들과의 협업을 이끄는 것
            </p>
          </div>
        </div>
        <div
          className='space-y-4 md:ml-48 lg:ml-96'
          data-aos='fade-up'
          data-aos-offset='200'
          data-aos-delay='900'
          data-aos-duration='1800'
          data-aos-once
        >
          <h3 className='text-2xl font-bold md:text-3xl'>
            저는 이런 <span className='text-primary'>기술</span>을 다루고
            있습니다.
          </h3>
          <div className='space-y-1 text-base font-semibold md:text-lg'>
            <p>HTML, CSS, TailwindCSS, JavaScript, TypeScript, React, NextJS</p>
          </div>
        </div>
      </div>
    </section>
  );
}
