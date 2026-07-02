// pets/index.js — assembles the per-animal art and exposes petSVG().
// To add an animal: create pets/<name>.js exporting { egg, hatch, kid, big, star },
// import it here, and add it to SPECIES below.

import { berry } from './berry.js';
import { puppy } from './puppy.js';
import { alien } from './alien.js';
import { owl } from './owl.js';
import { robot } from './robot.js';
import { dragon } from './dragon.js';

const SPECIES = { berry, puppy, alien, owl, robot, dragon };

/* species: berry | puppy | alien | owl | robot | dragon
   stage:   egg | hatch | kid | big | star
   fill:    hex body color */
export function petSVG(species, stage, fill) {
  const art = SPECIES[species];
  return `<svg viewBox="0 0 200 170" class="pet-svg">${art[stage](fill)}</svg>`;
}
