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
  return file.replace(/\*([^*]+)\*/g, (match, p1) => variables[p1] || p1);
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
