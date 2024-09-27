import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { variablesCollection } from './types';
import { adjectives, animals } from './random-names-seed';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function fillTemplateAndReturn(
  variables: variablesCollection,
  file: string
) {
  let newFile = '';

  for (let i = 0; i < file.length; i++) {
    if (file[i] === '*') {
      i++;
      let newVar = '';
      while (file[i] !== '*') {
        newVar += file[i++];
      }
      newVar = variables[newVar] || newVar;
      newFile += newVar;
    } else {
      newFile += file[i];
    }
  }
  return newFile;
}

export const randomNameGenerator = () => {
  const randomOne = adjectives[Math.round(Math.random() * adjectives.length)];
  const randomTwo = animals[Math.round(Math.random() * animals.length)];
  let output = randomOne + '-' + randomTwo;
  if (randomTwo === randomOne) {
    const randomThree = animals[Math.round(Math.random() * animals.length)];
    output = randomOne + '-' + randomThree;
  }

  return output;
};
