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
  },
  {
    id: 'an-catnap', level: 1,
    title: 'Why Cats Sleep So Much',
    paras: [
      'Have you ever seen a cat curled up asleep in a warm, sunny spot? Cats sleep a lot. Most cats sleep for twelve to sixteen hours every day. That is more than half the day! Long ago, wild cats had to hunt for their food, and hunting takes a lot of energy. So cats rested to save that energy up.',
      'House cats do not need to hunt, but they still love to nap. A sleeping cat can wake up fast if it hears a tiny sound. Its ears turn to listen, even when its eyes are closed. So when your cat is napping, it is really just resting \u2014 ready to jump up and play.'
    ],
    questions: [
      { q: 'What is this story mostly about?', choices: ['How to feed a cat', 'Why cats sleep so much', 'Where cats like to hide', 'How fast cats run'], answer: 1, skill: 'Main idea', hint: 'Look at the title and what most sentences describe.', explain: 'Almost every sentence explains why cats sleep for so many hours. That is the main idea.' },
      { q: 'How many hours do most cats sleep each day?', choices: ['About two hours', 'Four to six hours', 'Twelve to sixteen hours', 'All day and all night'], answer: 2, skill: 'Detail', hint: 'It is more than half the day.', explain: 'The story says most cats sleep twelve to sixteen hours a day \u2014 more than half the day!' },
      { q: 'Why did wild cats rest so much?', choices: ['They were lazy', 'To save energy for hunting', 'Because it was always dark', 'To stay warm'], answer: 1, skill: 'Why', hint: 'What does hunting take a lot of?', explain: 'Hunting takes a lot of energy, so wild cats rested to save that energy up for the hunt.' },
      { q: 'What can a cat do even while it is sleeping?', choices: ['Eat its food', 'Run in circles', 'Wake up fast at a tiny sound', 'Climb a tree'], answer: 2, skill: 'Detail', hint: 'Think about the cat\u2019s ears.', explain: 'A sleeping cat can wake up fast if it hears a tiny sound \u2014 its ears keep listening.' },
      { q: 'What do the cat\u2019s turning ears show us?', choices: ['The cat is cold', 'The cat is still listening while it rests', 'The cat is hungry', 'The cat is dreaming'], answer: 1, skill: 'Inference', hint: 'The eyes are closed, but the ears still move.', explain: 'Even with its eyes shut, the cat\u2019s ears turn toward sounds \u2014 a sign it is still listening and ready to move.' }
    ]
  },
  {
    id: 'an-ducklings', level: 1,
    title: 'The Ducklings\u2019 First Walk',
    paras: [
      'A mother duck sat on her eggs for many days. One morning, the eggs began to crack. Out came the fluffy ducklings, one by one. The very first thing they saw was their mother. From that moment on, they followed her everywhere.',
      'The mother duck led her babies to the pond. The ducklings walked in a line behind her, like a little parade. When she stepped into the water, they jumped in too. Baby ducks can swim right away! Staying close to their mother keeps them safe.'
    ],
    questions: [
      { q: 'What happened to the eggs one morning?', choices: ['They rolled away', 'They began to crack', 'They turned blue', 'They floated on the pond'], answer: 1, skill: 'Detail', hint: 'It is how the ducklings came out.', explain: 'One morning the eggs began to crack, and out came the fluffy ducklings.' },
      { q: 'What was the first thing the ducklings saw?', choices: ['The pond', 'The sun', 'Their mother', 'A fish'], answer: 2, skill: 'Detail', hint: 'It is who they followed after.', explain: 'The very first thing the ducklings saw was their mother, and they followed her from then on.' },
      { q: 'Why do the ducklings follow their mother?', choices: ['She has food in her feathers', 'Staying close keeps them safe', 'She is the fastest', 'They like the color of her feathers'], answer: 1, skill: 'Why', hint: 'The last sentence tells you.', explain: 'The story says staying close to their mother keeps the ducklings safe.' },
      { q: 'What does \u201clike a little parade\u201d mean?', choices: ['They walked in a neat line', 'They played music', 'They marched to school', 'They carried flags'], answer: 0, skill: 'Inference', hint: 'How were the ducklings walking behind their mother?', explain: 'A parade moves in a line, so \u201clike a little parade\u201d means the ducklings walked in a neat row behind their mother.' },
      { q: 'What is this story mostly about?', choices: ['How ponds are made', 'Baby ducks following their mother', 'How to swim', 'Why eggs are white'], answer: 1, skill: 'Main idea', hint: 'What do the ducklings do the whole time?', explain: 'The whole story is about newly hatched ducklings following their mother and staying safe.' }
    ]
  },
  {
    id: 'an-snail', level: 1,
    title: 'The Snail Carries Its House',
    paras: [
      'A snail moves very, very slowly. It glides along on one soft foot. Wherever it goes, it carries its home on its back. That home is a hard, curled shell.',
      'When the day is hot and dry, the snail hides inside its shell to stay cool and wet. When it rains, the snail comes back out. A snail is never far from home, because home goes wherever the snail goes!'
    ],
    questions: [
      { q: 'How does a snail move?', choices: ['On two legs', 'On one soft foot', 'By rolling', 'By hopping'], answer: 1, skill: 'Detail', hint: 'It glides along.', explain: 'A snail glides along slowly on one soft foot.' },
      { q: 'What does the snail carry on its back?', choices: ['A leaf', 'Its babies', 'Its shell home', 'Some food'], answer: 2, skill: 'Detail', hint: 'It is hard and curled.', explain: 'The snail carries its home \u2014 a hard, curled shell \u2014 on its back.' },
      { q: 'Why does a snail hide in its shell on hot days?', choices: ['To sleep', 'To stay cool and wet', 'To hide from birds', 'To eat'], answer: 1, skill: 'Why', hint: 'Hot and dry days are hard for a soft snail.', explain: 'On hot, dry days the snail hides in its shell to stay cool and wet.' },
      { q: 'Why is a snail never far from home?', choices: ['It never moves', 'Its home lives in a tree', 'It carries its home with it', 'It has a very short path'], answer: 2, skill: 'Inference', hint: 'Where is the snail\u2019s home?', explain: 'Because the snail carries its shell home on its back, home goes wherever the snail goes.' },
      { q: 'What is this story mostly about?', choices: ['A snail and its shell home', 'How rain falls', 'Why snails are slow', 'What snails eat'], answer: 0, skill: 'Main idea', hint: 'What does the shell keep coming up?', explain: 'The story is all about the snail and the shell home it carries everywhere.' }
    ]
  },
  {
    id: 'an-rabbit', level: 1,
    title: 'The Rabbit\u2019s Big Ears',
    paras: [
      'A rabbit has two long ears that stand up tall. Those big ears are not just for looks. They help the rabbit hear soft sounds from far away. A rabbit can often hear a fox creeping closer before it can see it.',
      'The ears do another job too. On hot days, they help the rabbit cool down. Warm blood moves through the thin ears, and the air carries the heat away. Big ears help a rabbit stay safe and stay cool.'
    ],
    questions: [
      { q: 'What is this story mostly about?', choices: ['How rabbits hop', 'How a rabbit\u2019s big ears help it', 'What rabbits eat', 'Where foxes live'], answer: 1, skill: 'Main idea', hint: 'Both jobs the story talks about are about one body part.', explain: 'The story explains two ways a rabbit\u2019s big ears help it \u2014 hearing danger and staying cool.' },
      { q: 'What can a rabbit hear before it sees it?', choices: ['A bird singing', 'A fox creeping closer', 'The wind', 'Rain falling'], answer: 1, skill: 'Detail', hint: 'It is something dangerous.', explain: 'A rabbit can often hear a fox creeping closer before it can even see it.' },
      { q: 'What is the second job the ears do?', choices: ['Help the rabbit dig', 'Help the rabbit cool down', 'Help the rabbit jump', 'Help the rabbit eat'], answer: 1, skill: 'Detail', hint: 'It matters on hot days.', explain: 'On hot days, the thin ears help the rabbit cool down.' },
      { q: 'How can a rabbit stay safe from a fox?', choices: ['It hears the danger far away', 'It runs in circles', 'It hides under water', 'It scares the fox'], answer: 0, skill: 'Why', hint: 'Big ears do what job first?', explain: 'Because its big ears hear soft sounds from far away, the rabbit can notice a fox and get away in time.' },
      { q: 'Why do the thin ears help the rabbit cool off?', choices: ['They flap like fans', 'Air carries heat away from the blood inside', 'They block the sun', 'They hold cold water'], answer: 1, skill: 'Inference', hint: 'Warm blood moves through the ears \u2014 then what?', explain: 'Warm blood flows through the thin ears, and the moving air carries that heat away, cooling the rabbit down.' }
    ]
  },
  {
    id: 'an-ladybug', level: 1,
    title: 'Spots on the Ladybug',
    paras: [
      'A ladybug is a tiny red beetle with little black spots. Those bright colors are a warning. They tell birds, \u201cDo not eat me \u2014 I taste bad!\u201d Because of this, most birds leave ladybugs alone.',
      'Ladybugs are good friends to gardens. They eat tiny bugs called aphids that hurt plants. One ladybug can eat many aphids in a single day. Farmers are always happy to see ladybugs on their crops.'
    ],
    questions: [
      { q: 'What do the ladybug\u2019s bright colors tell birds?', choices: ['\u201cCome and play\u201d', '\u201cDo not eat me \u2014 I taste bad\u201d', '\u201cI am lost\u201d', '\u201cIt is spring\u201d'], answer: 1, skill: 'Detail', hint: 'The colors are a warning.', explain: 'The bright red and black colors warn birds that the ladybug tastes bad.' },
      { q: 'What is this story mostly about?', choices: ['How beetles fly', 'Ladybugs and how they help gardens', 'Why birds are hungry', 'How plants grow'], answer: 1, skill: 'Main idea', hint: 'Think about what ladybugs do for gardens.', explain: 'The story is about ladybugs \u2014 their warning colors and how they help gardens by eating pests.' },
      { q: 'What do ladybugs eat?', choices: ['Leaves', 'Flowers', 'Tiny bugs called aphids', 'Seeds'], answer: 2, skill: 'Detail', hint: 'These bugs hurt plants.', explain: 'Ladybugs eat aphids \u2014 tiny bugs that hurt plants.' },
      { q: 'Why are farmers happy to see ladybugs?', choices: ['They are pretty', 'They eat the bugs that hurt plants', 'They make honey', 'They scare away birds'], answer: 1, skill: 'Why', hint: 'What do ladybugs do to garden pests?', explain: 'Ladybugs eat aphids that damage crops, so farmers are glad to have them around.' },
      { q: 'Why do most birds leave ladybugs alone?', choices: ['Ladybugs are too fast', 'The bright colors warn that they taste bad', 'Ladybugs are too big', 'Birds cannot see red'], answer: 1, skill: 'Inference', hint: 'What did the colors warn?', explain: 'The bright warning colors tell birds the ladybug tastes bad, so the birds stay away.' }
    ]
  },
  {
    id: 'an-migration', level: 3,
    title: 'The Butterfly That Flies to Mexico',
    paras: [
      'Each autumn, something astonishing happens across North America. Millions of orange-and-black monarch butterflies begin an enormous journey south. Though a single monarch weighs less than a paper clip, some of them travel almost three thousand miles to reach the very same warm forests high in the mountains of Mexico.',
      'What makes it truly remarkable is that no single butterfly has ever made the trip before. The monarchs that fly south in the fall are the great-grandchildren of the ones that flew north the spring before. Somehow, with no map and no guide, they find the exact same trees their ancestors used. Scientists believe the butterflies use the position of the sun, and even the Earth\u2019s magnetic field, like a tiny built-in compass to steer their incredible voyage.'
    ],
    questions: [
      { q: 'What is this passage mostly about?', choices: ['How butterflies grow wings', 'The amazing journey monarch butterflies make', 'Why Mexico is warm', 'How to catch a butterfly'], answer: 1, skill: 'Main idea', hint: 'The whole passage follows one long trip.', explain: 'The passage describes the monarchs\u2019 astonishing migration south and how they find their way.' },
      { q: 'How far do some monarch butterflies travel?', choices: ['A few miles', 'About one hundred miles', 'Almost three thousand miles', 'Around the whole world'], answer: 2, skill: 'Detail', hint: 'The number is compared to a paper clip\u2019s weight.', explain: 'Some monarchs travel almost three thousand miles, even though each one weighs less than a paper clip.' },
      { q: 'Where do the monarchs spend the winter?', choices: ['In caves', 'In warm forests in the mountains of Mexico', 'Under the snow', 'In people\u2019s gardens'], answer: 1, skill: 'Detail', hint: 'It is warm and high up.', explain: 'The butterflies fly to the same warm forests high in the mountains of Mexico each year.' },
      { q: 'Why is it surprising that the monarchs find the right trees?', choices: ['The trees move every year', 'No butterfly has ever made the trip before', 'They fly at night', 'The forests are hidden'], answer: 1, skill: 'Inference', hint: 'Who were the fall butterflies\u2019 great-grandparents?', explain: 'The butterflies making the trip are great-grandchildren of the last ones to fly north, so none of them has ever seen the route \u2014 yet they still find the exact trees.' },
      { q: 'What do scientists think helps the monarchs steer?', choices: ['Road signs', 'Other animals leading the way', 'The sun and the Earth\u2019s magnetic field', 'The smell of the flowers'], answer: 2, skill: 'Detail', hint: 'The passage compares it to a built-in compass.', explain: 'Scientists believe monarchs use the sun\u2019s position and the Earth\u2019s magnetic field, like a built-in compass, to find their way.' }
    ]
  }
];

export const PASSAGES = [...KEEP.map(id => LEGACY.find(p => p.id === id)), ...NEW_PASSAGES];
