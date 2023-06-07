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
      <h4 className='text-xl font-bold'>{title}</h4>
      <ul className='mt-2 list-inside text-[1.1rem] font-semibold'>
        {description.map((desc) => (
          <li key={desc} className='list-disc'>
            {desc}
          </li>
        ))}
      </ul>
    </div>
  );
}
