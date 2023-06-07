import ParallaxText from '@/components/ParallaxText';

export default function Parallax() {
  return (
    <div className='py-32'>
      <ParallaxText baseVelocity={-1}>
        ヽ(´▽`)ﾉヽ(´▽`)ﾉヽ(´▽`)ﾉヽ(´▽`)ﾉヽ(´▽`)ﾉヽ(´▽`)ﾉ
      </ParallaxText>
      <ParallaxText baseVelocity={1}>
        ヽ(´▽`)ﾉヽ(´▽`)ﾉヽ(´▽`)ﾉヽ(´▽`)ﾉヽ(´▽`)ﾉヽ(´▽`)ﾉ
      </ParallaxText>
    </div>
  );
}
