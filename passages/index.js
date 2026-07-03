// Category registry. To add a category: import its passages file and add an entry here.
// To add a story to a category: edit that category's file in this folder.
//
// DIFFICULTY LEVELS (1 Starter / 2 Growing / 3 Challenge) are derived automatically
// from each passage's reading difficulty (a Flesch–Kincaid-style grade estimate), so new
// stories get a level for free. To pin a story to a specific level, add `level: 1|2|3` to
// its passage object and it wins over the estimate.
import { PASSAGES as animals } from './animals.js';
import { PASSAGES as life } from './life.js';
import { PASSAGES as space } from './space.js';
import { PASSAGES as mystery } from './mystery.js';
import { PASSAGES as people } from './people.js';
import { PASSAGES as fables } from './fables.js';

// Level metadata, shared with the UI.
export const LEVELS = {
  1: { name: 'Starter',   blurb: 'Shorter stories, simpler words',     color: '#5DB075', bg: '#E7F5EE', fg: '#2F7A55' },
  2: { name: 'Growing',   blurb: 'Longer stories, more to keep track of', color: '#E8A23D', bg: '#FFF4DC', fg: '#A86E1F' },
  3: { name: 'Challenge', blurb: 'Rich vocabulary and longer sentences',  color: '#8E6FD0', bg: '#EDE6F7', fg: '#6A4FA3' }
};

// --- reading-difficulty estimate -> level -------------------------------------
function syllables(w) {
  w = w.toLowerCase().replace(/[^a-z]/g, '');
  if (w.length <= 3) return 1;
  w = w.replace(/(?:[^laeiouy]es|ed|[^laeiouy]e)$/, '').replace(/^y/, '');
  const m = w.match(/[aeiouy]{1,2}/g);
  return m ? m.length : 1;
}
function gradeEstimate(paras) {
  const text = paras.join(' ');
  const sentences = (text.match(/[.!?]+/g) || []).length || 1;
  const words = text.match(/[A-Za-z']+/g) || [];
  const wc = words.length || 1;
  const syl = words.reduce((n, w) => n + syllables(w), 0);
  return 0.39 * (wc / sentences) + 11.8 * (syl / wc) - 15.59;
}
function levelFor(p) {
  if (p.level === 1 || p.level === 2 || p.level === 3) return p.level; // manual override
  const g = gradeEstimate(p.paras);
  if (g < 2.9) return 1;
  if (g < 3.9) return 2;
  return 3;
}
// Stamp a level onto every passage, then order each world easiest-first.
// The sort is stable, so stories keep their original order within a level.
[animals, life, space, mystery, people, fables].forEach(list => {
  list.forEach((p, i) => { p.level = levelFor(p); p._order = i; });
  list.sort((a, b) => (a.level - b.level) || (a._order - b._order));
});

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
