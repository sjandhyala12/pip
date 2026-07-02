// Animals & Nature — 10 passages. The first 6 live in ../passages.js (the original library).
// To add a story: append an object to NEW_PASSAGES below.
import { PASSAGES as LEGACY } from '../passages.js';

const KEEP = ['beaver', 'hummingbird', 'hermitcrab', 'leaves', 'octopus', 'camel'];

const NEW_PASSAGES = [
  {
    id: 'bees',
    title: 'The Dancing Bees',
    paras: [
      'A honeybee cannot talk, but she can dance! When a bee finds a patch of sweet flowers, she flies back to her hive to tell the others. She walks in a wiggly pattern called the waggle dance. The direction of her dance shows which way to fly. The length of her wiggle shows how far away the flowers are.',
      'The other bees crowd around and feel the dance with their antennae. Then off they zoom, straight to the flowers, without a single wrong turn. Scientists studied bees for many years to crack this secret code. A dance that works like a map — how amazing is that?'
    ],
    questions: [
      { q: 'What is this story mostly about?', choices: ['How bees make honey', 'How bees use a dance to share directions', 'Why flowers smell sweet', 'How scientists train bees'], answer: 1, skill: 'Main idea', hint: 'What does the waggle dance do for the other bees?', explain: 'The whole story explains how the waggle dance tells other bees which way to fly and how far to go.' },
      { q: 'What does the direction of the dance show?', choices: ['How sweet the flowers are', 'Which way to fly', 'What time it is', 'How big the hive is'], answer: 1, skill: 'Detail', hint: 'Direction in the dance matches direction in the sky.', explain: 'The story says the direction of her dance shows which way the other bees should fly.' },
      { q: 'What does the length of the wiggle show?', choices: ['How far away the flowers are', 'How many bees should go', 'How old the bee is', 'How fast to fly'], answer: 0, skill: 'Detail', hint: 'A longer wiggle means a longer trip.', explain: 'The length of the wiggle tells the bees how far away the flowers are.' },
      { q: 'How do the other bees learn the dance?', choices: ['They watch from far away', 'They feel it with their antennae', 'They hear the buzzing', 'They read a map'], answer: 1, skill: 'Detail', hint: 'They crowd in close and use a body part.', explain: 'The bees crowd around and feel the dance with their antennae — like reading with a gentle touch.' },
      { q: 'Why does the story call the dance a "secret code"?', choices: ['Bees hide it from other bees', 'It carries a message that took people years to understand', 'Only the queen may dance', 'It changes every day'], answer: 1, skill: 'Inference', hint: 'How long did scientists study it?', explain: 'The dance carries a hidden message, and it took scientists many years to figure it out — just like cracking a code.' }
    ]
  },
  {
    id: 'fireflies',
    title: 'Lights in the Dark',
    paras: [
      'On summer nights, tiny lights blink on and off above the grass. They are fireflies! A firefly makes light inside its own body. The light is cool, not hot like a lamp. Fireflies flash their lights to talk to each other. Each kind of firefly has its own special pattern of flashes, like a secret password.',
      'A firefly sits in the grass and watches the sky. When it sees the right pattern, it flashes back: over here! If you catch a firefly gently in your hands, you can watch it glow. Then open your fingers and let it fly home to keep talking with its light.'
    ],
    questions: [
      { q: 'What is this story mostly about?', choices: ['How fireflies use light to talk', 'Why summer nights are warm', 'How lamps are made', 'Where grass grows best'], answer: 0, skill: 'Main idea', hint: 'What do fireflies do with their flashes?', explain: 'The story is all about how fireflies make light and use flashing patterns to talk to each other.' },
      { q: 'How is a firefly\u2019s light different from a lamp\u2019s light?', choices: ['It is much brighter', 'It is cool, not hot', 'It is blue', 'It never turns off'], answer: 1, skill: 'Detail', hint: 'Think about touching a lamp that has been on a while.', explain: 'The story says a firefly\u2019s light is cool, while a lamp\u2019s light gets hot.' },
      { q: 'What is special about each kind of firefly\u2019s flashes?', choices: ['They are all exactly the same', 'Each kind has its own pattern', 'They only flash in the rain', 'They spell out words'], answer: 1, skill: 'Detail', hint: 'The story compares it to a password.', explain: 'Each kind of firefly has its own special pattern of flashes, like a secret password.' },
      { q: 'Why does a firefly in the grass flash back?', choices: ['It is scared of the dark', 'It saw the right pattern and is answering', 'It wants people to catch it', 'It is charging its light'], answer: 1, skill: 'Inference', hint: 'It was watching the sky, waiting for something.', explain: 'When the firefly sees the right pattern, it flashes back to answer — like saying "over here!"' },
      { q: 'What does the story ask you to do after catching a firefly?', choices: ['Keep it in a jar', 'Let it fly home', 'Give it to a friend', 'Feed it grass'], answer: 1, skill: 'Detail', hint: 'Open your fingers and\u2026', explain: 'The story says to open your fingers and let the firefly fly home so it can keep talking with its light.' }
    ]
  },
  {
    id: 'penguindad',
    title: 'The Bravest Babysitter',
    paras: [
      'Emperor penguins live in Antarctica, the coldest place on Earth. When the mother penguin lays one egg, she is very hungry. She must walk far across the ice to find food in the sea. So the father penguin takes over. He rolls the egg onto the tops of his feet and covers it with a warm flap of skin, like a feather blanket.',
      'For two whole months, the father stands in the freezing wind. He does not eat. He barely moves. All the fathers huddle together in a big group to stay warm, taking turns on the cold outside edge. When the mother returns with food, the egg cracks open — and a fluffy gray chick meets its brave dad.'
    ],
    questions: [
      { q: 'What is this story mostly about?', choices: ['How penguin fathers protect the egg', 'How penguins swim', 'Why Antarctica has ice', 'What penguin chicks eat'], answer: 0, skill: 'Main idea', hint: 'Who is the "bravest babysitter" in the title?', explain: 'The story is about the father penguin, who keeps the egg warm and safe for two months.' },
      { q: 'Where does the father keep the egg?', choices: ['In a nest of stones', 'On top of his feet, under a flap of skin', 'Buried in the snow', 'Under his wing'], answer: 1, skill: 'Detail', hint: 'It is somewhere that keeps the egg off the ice.', explain: 'He rolls the egg onto his feet and covers it with a warm flap of skin, like a blanket.' },
      { q: 'Why does the mother penguin leave?', choices: ['She does not like the cold', 'She must find food in the sea', 'She is looking for a new home', 'She wants to play'], answer: 1, skill: 'Detail', hint: 'How does she feel after laying the egg?', explain: 'After laying the egg she is very hungry, so she walks to the sea to find food.' },
      { q: 'Why do the fathers huddle in a big group?', choices: ['To share stories', 'To stay warm in the freezing wind', 'To hide the eggs', 'To watch for the mothers'], answer: 1, skill: 'Why', hint: 'What is the weather like where they stand?', explain: 'Huddling close together helps the fathers stay warm — and they even take turns standing on the cold outside edge.' },
      { q: 'What does taking turns on the outside edge show about the penguins?', choices: ['They are fair and help each other', 'They like the wind', 'They are fighting for space', 'They are lost'], answer: 0, skill: 'Inference', hint: 'The outside is the coldest spot. Why switch?', explain: 'No penguin has to stay in the coldest spot forever. Taking turns shows they share the hard job fairly.' }
    ]
  },
  {
    id: 'armadillo',
    title: 'The Animal in Armor',
    paras: [
      'The armadillo looks like a little knight. Its back is covered with hard plates of armor, with bands in the middle that bend so it can move. The word armadillo means "little armored one." When danger comes close, one kind of armadillo can roll itself into a tight ball. Its soft belly hides inside, and only the hard shell shows.',
      'Armadillos have strong claws made for digging. They dig burrows to sleep in and dig for their dinner too — ants, beetles, and worms. An armadillo\u2019s eyes are weak, but its nose is powerful. It can smell a tasty bug hiding under the dirt, then dig it up in a flash!'
    ],
    questions: [
      { q: 'What is this story mostly about?', choices: ['How knights wore armor', 'The special body of the armadillo', 'Why bugs live underground', 'How to dig a burrow'], answer: 1, skill: 'Main idea', hint: 'Every paragraph tells about the armadillo\u2019s body and what it can do.', explain: 'The story describes the armadillo\u2019s armor, its rolling trick, its claws, and its powerful nose.' },
      { q: 'What does the word armadillo mean?', choices: ['Little digger', 'Little armored one', 'Ball animal', 'Ant eater'], answer: 1, skill: 'Detail', hint: 'It matches what the animal looks like.', explain: 'The story says armadillo means "little armored one" — a perfect name for an animal in armor.' },
      { q: 'Why can the armadillo bend even with hard armor?', choices: ['Its armor is soft', 'It has bands in the middle that bend', 'It takes the armor off', 'It never bends'], answer: 1, skill: 'Detail', hint: 'Look for what is in the middle of its back.', explain: 'The bands in the middle of its armor can bend, so the armadillo can move and even roll up.' },
      { q: 'Why does the armadillo roll into a ball?', choices: ['To roll down hills faster', 'To keep its soft belly safe from danger', 'To take a nap', 'To trick bugs'], answer: 1, skill: 'Why', hint: 'What hides inside when it rolls up?', explain: 'Rolling up hides its soft belly inside, so only the hard shell shows. Danger cannot reach the soft part!' },
      { q: 'How does an armadillo find bugs it cannot see?', choices: ['It listens for footsteps', 'It smells them under the dirt', 'It asks other armadillos', 'It waits for them to come out'], answer: 1, skill: 'Inference', hint: 'Its eyes are weak, but another body part is powerful.', explain: 'Its eyes are weak, but its powerful nose can smell a bug hiding under the dirt — then its claws dig it up.' }
    ]
  }
];

export const PASSAGES = [...KEEP.map(id => LEGACY.find(p => p.id === id)), ...NEW_PASSAGES];
