type Props = {
  title: string;
  description: string[];
};

export default function ProjectItem({ title, description }: Props) {
  return (
    <div>
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
