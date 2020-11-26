import { adjectives, nouns } from './words';

export const generateSecret = () => {
  const randomNumber = Math.floor(Math.random() * adjectives.length);
  console.log(randomNumber);
  return `${adjectives[randomNumber]}${nouns[randomNumber]}`;
};
