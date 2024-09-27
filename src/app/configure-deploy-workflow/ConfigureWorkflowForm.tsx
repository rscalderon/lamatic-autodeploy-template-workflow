'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

import workflowTemplates from '@/lib/workflow-templates';
import { variablesCollection } from '@/lib/types';
import { fillTemplateAndReturn } from '@/lib/utils';
import toast, { Toaster } from 'react-hot-toast';

interface ConfigureWorkflowFormProps {
  randomName: string;
}

export default function ConfigureWorkflowForm({
  randomName,
}: ConfigureWorkflowFormProps) {
  const router = useRouter();

  const [workflowName, setWorkflowName] = useState(randomName);

  const { environmentVars } = workflowTemplates.slackConfluenceVectorSearch;

  const initialVarCollection: variablesCollection = {};
  for (const variable of environmentVars) {
    initialVarCollection[variable] = '';
  }

  const [variables, setVariables] = useState({ ...initialVarCollection });

  const handleChange = (environmentVar: string, updatedVar: string) => {
    const newVars = { ...variables };
    newVars[environmentVar] = updatedVar;
    setVariables(newVars);
  };

  const formInputCollection = environmentVars.map((environmentVar) => (
    <Input
      className='bg-gray-900 border-gray-800 text-white'
      id='git-repository'
      key={environmentVar}
      placeholder={environmentVar}
      value={variables[environmentVar]}
      onChange={(e) => handleChange(environmentVar, e.target.value)}
    />
  ));
  const handleDeployClick = () => {
    if (!workflowName) {
      toast.error('Your new workflow needs a name!');
      setWorkflowName(randomName);
      return;
    }
    if (Object.values(variables).includes('')) {
      toast.error('Some environment variables are missing');
      return;
    }
    sessionStorage.setItem('workflowName', workflowName);
    sessionStorage.setItem(
      'deployedFile',
      fillTemplateAndReturn(
        variables,
        workflowTemplates.slackConfluenceVectorSearch.file
      )
    );
    return router.push('/configure-deploy-workflow/success');
  };

  return (
    <div className='space-y-4'>
      <div className='space-y-2'>
        <Label className='text-white' htmlFor='project-name'>
          Name your workflow
        </Label>
        <Input
          className='bg-gray-900 border-gray-800 text-white'
          id='project-name'
          value={workflowName}
          placeholder='Name your workflow'
          onChange={(e) => setWorkflowName(e.target.value)}
        />
      </div>
      <div className='space-y-2'>
        <Label className='text-white' htmlFor='git-repository'>
          Workflow scope
        </Label>
        <select
          title='Workflow Scope'
          className='flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50bg-gray-900 border-gray-800 text-white'
        >
          <option value='personal'>Personal</option>
          <option value='my-team'>My Team</option>
          <option value='my-other-team'>My Other Team</option>
          <option value='my-organization'>My Organization</option>
        </select>
      </div>
      <div className='space-y-2'>
        <Label className='text-white' htmlFor='git-repository'>
          Environment variables
        </Label>
        {formInputCollection}
      </div>
      <Button
        className='w-full bg-white text-black hover:bg-gray-200'
        onClick={handleDeployClick}
      >
        Deploy
      </Button>
      <Toaster />
    </div>
  );
}
