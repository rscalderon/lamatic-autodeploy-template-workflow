import workflowTemplates from '@/lib/workflow-templates';
import ConfigureWorkflowForm from './ConfigureWorkflowForm';
import Header from './header';
import { randomNameGenerator } from '@/lib/utils';

export default function ConfigureWorkflowPage() {
  const randomName = randomNameGenerator();
  return (
    <div className='flex flex-col min-h-screen bg-[#000000]'>
      <Header />
      <main className='flex-1 flex flex-col items-center justify-center p-4 md:p-6'>
        <div className='w-full max-w-2xl space-y-8'>
          <div className='space-y-2 text-center'>
            <h1 className='text-3xl font-bold tracking-tighter text-white sm:text-4xl md:text-5xl'>
              You{`'`}re almost done.
            </h1>
            <p className='mx-auto max-w-[600px] text-gray-400 md:text-xl/relaxed'>
              Please follow the steps to configure your workflow and deploy it.
            </p>
          </div>
          <ConfigureWorkflowForm randomName={randomName} />
          <div className='space-y-4 text-center'>
            <div className='relative'>
              <div className='absolute inset-0 flex items-center'>
                <span className='w-full border-t border-gray-800' />
              </div>
              <div className='relative flex justify-center text-xs uppercase'>
                <span className='bg-[#000000] px-2 text-gray-400'>
                  Workflow Details
                </span>
              </div>
            </div>
            <div className='space-y-2'>
              <p className='text-lg font-medium text-white'>
                {workflowTemplates.slackConfluenceVectorSearch.name}
              </p>
              <p className='text-sm text-gray-400'>
                Get started with Lamatic.ai in seconds.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
