import SectionTitle from './SectionTitle';
import { AiFillGithub } from 'react-icons/ai';

export default function Contact() {
  return (
    <section id='contact' className='wrapper px-8 py-24'>
      <SectionTitle title='Contact' />
      <div className='flex justify-center p-24'>
        <a href='https://github.com/kimub' target='_blank'>
          <AiFillGithub
            size='64'
            className='cursor-pointer hover:fill-primary'
          />
        </a>
      </div>
    </section>
  );
}
