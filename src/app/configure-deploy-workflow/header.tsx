import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function Header() {
  return (
    <header className='flex items-center h-16 px-4 border-b border-gray-800 shrink-0 md:px-6'>
      <Link href='/'>
        <div
          className='flex flex-row items-center justify-start p-0 gap-1'
          data-version='v1'
        >
          <ArrowLeft className='ml-1 h-3 w-3' />
          <p
            className='text_wrapper__i87JK text-sm leading-5 font-normal'
            data-version='v1'
          >
            Back
          </p>
        </div>
      </Link>
    </header>
  );
}
