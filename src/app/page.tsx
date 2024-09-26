import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { okaidia } from 'react-syntax-highlighter/dist/esm/styles/prism';
import Image from 'next/image';
import Link from 'next/link';
import Footer from './footer';
import workflowTemplates from '@/lib/workflow-templates';

export default function Home() {
  return (
    <div className='text-center items-center justify-items-center min-h-screen p-8 pb-20 gap-2 sm:p-20 font-[family-name:var(--font-geist-sans)] '>
      <main className='grid gap-4 mb-10 row-start-2 items-center sm:items-center'>
        <h1 className='text-white text-3xl mb-10 font-semibold'>
          Lamatic workflow template
        </h1>
        <h2 className='text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]'>
          Click below to deploy the following YAML file:
        </h2>
        <SyntaxHighlighter language='yaml' style={okaidia}>
          {workflowTemplates.octoOrgCI}
        </SyntaxHighlighter>

        <div className='flex justify-center gap-4  sm:flex-row'>
          <Link
            className='rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5'
            href='/configure-deploy-workflow/'
          >
            <Image
              className='dark:invert'
              src='/favicon.ico'
              alt='Vercel logomark'
              width={20}
              height={20}
            />
            Deploy with Lamatic
          </Link>
          {/* <a
            className='rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5'
            href='https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app'
            target='_blank'
            rel='noopener noreferrer'
          >
            <Image
              className='dark:invert'
              src='/favicon.ico'
              alt='Vercel logomark'
              width={20}
              height={20}
            />
            Next.js inspiration
          </a> */}
          {/* <a
            className='rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44'
            href='https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app'
            target='_blank'
            rel='noopener noreferrer'
          >
            Read our docs
          </a> */}
        </div>
      </main>
      <Footer />
    </div>
  );
}
