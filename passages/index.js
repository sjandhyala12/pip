// Category registry. To add a category: import its passages file and add an entry here.
// To add a story to a category: edit that category's file in this folder.
import { PASSAGES as animals } from './animals.js';
import { PASSAGES as life } from './life.js';
import { PASSAGES as space } from './space.js';
import { PASSAGES as mystery } from './mystery.js';
import { PASSAGES as people } from './people.js';
import { PASSAGES as fables } from './fables.js';

export const CATEGORIES = [
  {
    id: 'animals', name: 'Animals & Nature',
    petName: 'Pip', species: 'berry', petKind: 'the berry sprite',
    fill: '#6B79E8', chipBg: '#E3F0E8', chipFg: '#2F7A55', accent: '#5DB075',
    passages: animals
  },
  {
    id: 'life', name: 'Everyday Life',
    petName: 'Waffles', species: 'puppy', petKind: 'the puppy',
    fill: '#C89A6B', chipBg: '#FDEAD8', chipFg: '#A85E23', accent: '#E8A23D',
    passages: life
  },
  {
    id: 'space', name: 'Space & Our Planet',
    petName: 'Zuzu', species: 'alien', petKind: 'the alien',
    fill: '#7ED08A', chipBg: '#E4E9FB', chipFg: '#4453C8', accent: '#6B79E8',
    passages: space
  },
  {
    id: 'mystery', name: 'Mystery',
    petName: 'Otis', species: 'owl', petKind: 'the detective owl',
    fill: '#A98F72', chipBg: '#EDE6F7', chipFg: '#6A4FA3', accent: '#8E6FD0',
    passages: mystery
  },
  {
    id: 'people', name: 'Amazing People',
    petName: 'Bolt', species: 'robot', petKind: 'the robot',
    fill: '#9FB4C7', chipBg: '#FDE3E0', chipFg: '#B44A3B', accent: '#E96A5C',
    passages: people
  },
  {
    id: 'fables', name: 'Fables & Folktales',
    petName: 'Ember', species: 'dragon', petKind: 'the baby dragon',
    fill: '#E8845E', chipBg: '#DDF2F0', chipFg: '#20716A', accent: '#3AA69B',
    passages: fables
  }
];
