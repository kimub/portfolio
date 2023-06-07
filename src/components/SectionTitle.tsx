type Props = {
  title: string;
};

export default function SectionTitle({ title }: Props) {
  return (
    <h2 className='flex flex-col items-center text-center text-3xl font-bold'>
      <strong className='peer'>{title}</strong>
      <div className='h-1 w-16 bg-primary transition-all duration-300 peer-hover:w-24' />
    </h2>
  );
}
