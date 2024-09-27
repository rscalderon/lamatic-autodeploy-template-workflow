import Image from 'next/image';

export default function Footer() {
  return (
    <footer className='flex gap-6 flex-wrap items-center  justify-center'>
      <a
        className='flex items-center gap-2 hover:underline hover:underline-offset-4'
        href='https://lamatic.ai/docs'
        target='_blank'
        rel='noopener noreferrer'
      >
        <Image
          aria-hidden
          src='https://nextjs.org/icons/file.svg'
          alt='File icon'
          width={16}
          height={16}
        />
        Learn
      </a>
      <a
        className='flex items-center gap-2 hover:underline hover:underline-offset-4'
        href='/'
        rel='noopener noreferrer'
      >
        <Image
          aria-hidden
          src='https://nextjs.org/icons/window.svg'
          alt='Window icon'
          width={16}
          height={16}
        />
        Examples
      </a>
      <a
        className='flex items-center gap-2 hover:underline hover:underline-offset-4'
        href='https://lamatic.ai/'
        target='_blank'
        rel='noopener noreferrer'
      >
        <Image
          aria-hidden
          src='https://nextjs.org/icons/globe.svg'
          alt='Globe icon'
          width={16}
          height={16}
        />
        Go to Lamatic.ai →
      </a>
    </footer>
  );
}
