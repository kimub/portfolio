type Props = {
  title: string;
  description: string[];
  delay: string;
};

export default function ProjectItem({ title, description, delay }: Props) {
  return (
    <div
      data-aos='fade-up'
      data-aos-offset='200'
      data-aos-delay={delay}
      data-aos-duration='1800'
      data-aos-once
    >
      <h4 className='text-xl font-bold md:text-2xl'>{title}</h4>
      <ul className='mt-4 list-inside space-y-2 text-base font-semibold md:text-[1.1rem]'>
        {description.map((desc) => (
          <li key={desc} className='list-disc'>
            {desc}
          </li>
        ))}
      </ul>
    </div>
  );
}
