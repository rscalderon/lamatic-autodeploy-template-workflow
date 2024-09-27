'use client';

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { nightOwl } from 'react-syntax-highlighter/dist/esm/styles/prism';
import Header from '../header';
import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import Confetti from 'react-confetti';

export default function ConfigureDeployWorkflowSuccess() {
  const [workflowName, setWorkflowName] = useState('loading...');
  const [deployedFile, setDeployedFile] = useState('loading...');
  const [celebrate, setCelebrate] = useState(false);
  const celebrationDuration = 10000;

  useEffect(() => {
    toast.success('Your workflow is deployed!');
    setCelebrate(true);
    setTimeout(() => setCelebrate(false), celebrationDuration);
    setWorkflowName(
      sessionStorage.getItem('workflowName') || 'Oops! Something went wrong'
    );
    setDeployedFile(
      sessionStorage.getItem('deployedFile') || 'Oops! Something went wrong'
    );
  }, []);

  return (
    <div className='flex flex-col min-h-screen bg-[#000000]'>
      {celebrate && (
        <Confetti
          width={window.innerWidth}
          height={window.innerHeight * 2}
          numberOfPieces={window.innerWidth / 2}
          gravity={0.07}
          recycle={false}
        />
      )}
      <Header />
      <main className='flex-1 flex flex-col items-center justify-center p-4 md:p-6'>
        <h1 className='text-3xl font-bold tracking-tighter text-white sm:text-4xl md:text-5xl mb-6'>
          Success!
        </h1>
        <p className='mx-auto max-w-[600px] text-gray-400 md:text-xl/relaxed'>
          {workflowName} is now live
        </p>
        <SyntaxHighlighter
          language='yaml'
          style={nightOwl}
          wrapLongLines={true}
          className='mx-auto max-w-[70vw] text-gray-400 md:text-xl/relaxed'
        >
          {deployedFile}
        </SyntaxHighlighter>
        <Link
          href='/'
          className='rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5'
        >
          <Image
            className='dark:invert'
            src='/favicon.ico'
            alt='Vercel logomark'
            width={20}
            height={20}
          />
          Deploy another workflow
        </Link>
        <Toaster />
      </main>
    </div>
  );
}
