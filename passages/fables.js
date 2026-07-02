// Fables & Folktales — 10 retold classics.
// To add a story: append an object to PASSAGES below.

export const PASSAGES = [
  {
    id: 'fb-tortoise',
    title: 'The Tortoise and the Hare',
    paras: [
      'Hare was the fastest animal in the meadow, and he never let anyone forget it. "Slowpoke!" he teased Tortoise. "You take an hour to cross the garden!" Tortoise blinked slowly and said, "Let\u2019s race." Everyone laughed — everyone except Tortoise.',
      'At the starting line, Hare zoomed off in a cloud of dust. He was so far ahead that he stopped for a snack, then stretched out under a shady tree for a little nap. Meanwhile, Tortoise walked on. Step. Step. Step. He passed the snoozing Hare without a sound. When Hare woke up and dashed for the finish, Tortoise was already there. "Slow and steady wins the race," Tortoise said. Hare never teased him again.'
    ],
    questions: [
      { q: 'Why did everyone laugh when Tortoise said "Let\u2019s race"?', choices: ['Tortoise told a joke', 'A slow tortoise racing a fast hare seemed silly', 'Hare fell down', 'The race was cancelled'], answer: 1, skill: 'Inference', hint: 'Who was the fastest animal in the meadow?', explain: 'Everyone thought a slowpoke racing the fastest animal was a joke. They found out otherwise!' },
      { q: 'Why did Hare stop during the race?', choices: ['He hurt his foot', 'He was so far ahead he had a snack and a nap', 'He forgot the way', 'He waited for Tortoise'], answer: 1, skill: 'Detail', hint: 'He felt like he had plenty of time.', explain: 'Hare was so sure he would win that he stopped to snack and nap under a shady tree.' },
      { q: 'How did Tortoise win?', choices: ['He took a shortcut', 'He kept moving steadily without stopping', 'He rode on a bird', 'Hare quit the race'], answer: 1, skill: 'Detail', hint: 'Step. Step. Step.', explain: 'Tortoise never stopped. His slow, steady steps carried him past the sleeping Hare all the way to the finish.' },
      { q: 'What mistake did Hare make?', choices: ['Running too slowly', 'Being so overconfident that he stopped trying', 'Starting too late', 'Racing at night'], answer: 1, skill: 'Inference', hint: 'What did being SO sure of winning make him do?', explain: 'Hare\u2019s speed was not the problem — his overconfidence was. He was so sure of winning that he stopped racing.' },
      { q: 'What is the lesson of this fable?', choices: ['Never race a tortoise', 'Slow and steady effort beats talent that quits', 'Naps are bad', 'Snacks slow you down'], answer: 1, skill: 'Main idea', hint: 'Tortoise says it at the finish line.', explain: '"Slow and steady wins the race" — keeping at something beats being talented but careless.' }
    ]
  },
  {
    id: 'fb-lionmouse',
    title: 'The Lion and the Mouse',
    paras: [
      'A tiny mouse accidentally ran across the nose of a sleeping lion. The lion woke with a roar and trapped her under one giant paw. "Please let me go," squeaked the mouse. "Someday I will help you!" The lion laughed — how could a tiny mouse ever help the king of beasts? But he was amused, so he lifted his paw.',
      'Weeks later, hunters caught the lion in a net of strong ropes. He roared and thrashed, but the ropes held tight. Then he heard a tiny voice: "Hold still!" It was the mouse. With her sharp little teeth, she chewed through the ropes, one by one, until the lion was free. "You laughed at me once," said the mouse. "But even a small friend can be a great friend."'
    ],
    questions: [
      { q: 'Why did the lion laugh at the mouse?', choices: ['She told a funny joke', 'The idea of a tiny mouse helping him seemed impossible', 'She tickled his nose', 'He laughed at everyone'], answer: 1, skill: 'Inference', hint: 'He was the king of beasts; she was tiny.', explain: 'The lion could not imagine ever needing help from someone so small — the idea seemed ridiculous to him.' },
      { q: 'Why did the lion let the mouse go?', choices: ['She escaped on her own', 'He was amused by her promise', 'He was afraid of her', 'Hunters scared him away'], answer: 1, skill: 'Detail', hint: 'Her promise made him chuckle.', explain: 'The mouse\u2019s bold promise amused the lion, so he lifted his paw and let her go.' },
      { q: 'What trouble did the lion get into?', choices: ['He fell in a river', 'Hunters trapped him in a rope net', 'He lost his roar', 'He got stuck in a cave'], answer: 1, skill: 'Detail', hint: 'Roaring and thrashing could not fix it.', explain: 'Hunters caught the lion in a net of strong ropes that even his strength could not break.' },
      { q: 'How did the mouse free the lion?', choices: ['She untied the knots', 'She chewed through the ropes with her teeth', 'She called other animals', 'She scared the hunters'], answer: 1, skill: 'Detail', hint: 'Her small size came with sharp little tools.', explain: 'Her sharp little teeth did what the lion\u2019s big muscles could not — she chewed through the ropes one by one.' },
      { q: 'What is the lesson of this fable?', choices: ['Never nap outside', 'Even a small friend can be a great friend', 'Mice are dangerous', 'Lions need better nets'], answer: 1, skill: 'Main idea', hint: 'The mouse says it at the end.', explain: 'No one is too small to help, and no kindness is wasted. The little mouse saved the mighty lion.' }
    ]
  },
  {
    id: 'fb-wolf',
    title: 'The Boy Who Cried Wolf',
    paras: [
      'A shepherd boy watched the village sheep on a lonely hill. One boring afternoon, he grinned and shouted down to the village: "WOLF! A wolf is attacking the sheep!" The villagers dropped everything and ran up the hill — and found the boy laughing. "You should have seen your faces!" A few days later, he played the trick again. Again the villagers ran. Again the boy laughed.',
      'Then one evening, a real wolf crept out of the woods, eyes glowing. "WOLF!" the boy screamed. "WOLF! PLEASE!" Down in the village, the people shook their heads. "He will not fool us a third time," they said, and stayed home. The boy learned the hardest lesson of his life that night: when you lie for fun, people stop believing you — even when you finally tell the truth.'
    ],
    questions: [
      { q: 'Why did the boy first cry "wolf"?', choices: ['He saw a real wolf', 'He was bored and wanted to trick the villagers', 'He was practicing', 'A sheep told him to'], answer: 1, skill: 'Detail', hint: 'It was a boring afternoon.', explain: 'There was no wolf at all — the bored boy just wanted the fun of fooling everyone.' },
      { q: 'How did the villagers feel after the second trick?', choices: ['They thought it was funny', 'They stopped trusting the boy', 'They bought more sheep', 'They hired a guard'], answer: 1, skill: 'Inference', hint: 'What did they say when the third cry came?', explain: 'Being fooled twice used up their trust. By the third cry, they were sure it was another trick.' },
      { q: 'Why didn\u2019t the villagers come when the real wolf appeared?', choices: ['They were asleep', 'They believed it was another trick', 'They were afraid of wolves', 'They could not hear him'], answer: 1, skill: 'Detail', hint: '"He will not fool us a third time."', explain: 'The boy\u2019s lies had taught the villagers not to believe him — so his true cry sounded like just another trick.' },
      { q: 'What was the boy\u2019s cry like the third time?', choices: ['A joke, like before', 'Real and desperate', 'Quiet and calm', 'A song'], answer: 1, skill: 'Inference', hint: 'He screamed "PLEASE!"', explain: 'This time the fear was real — you can hear it in his desperate "WOLF! PLEASE!" But it was too late for anyone to believe him.' },
      { q: 'What is the lesson of this fable?', choices: ['Wolves are sneaky', 'If you lie for fun, people won\u2019t believe your truth', 'Never watch sheep alone', 'Villagers are slow'], answer: 1, skill: 'Main idea', hint: 'What did the lies cost the boy?', explain: 'Every lie spends a little of people\u2019s trust. The boy spent all of his — and when he needed to be believed most, none was left.' }
    ]
  },
  {
    id: 'fb-ant',
    title: 'The Ant and the Grasshopper',
    paras: [
      'All summer long, Ant marched back and forth, carrying kernels of corn and seeds to her nest. Grasshopper lounged in the sun, fiddling his cheerful tunes. "Come dance!" he called. "Why work on such a beautiful day?" Ant wiped her forehead. "Winter is coming," she said. "I am storing food while there is food to store." Grasshopper laughed and played on.',
      'Then winter came, white and hungry. The fields were bare and frozen. Grasshopper, shivering and starving, knocked at Ant\u2019s door. Inside, Ant\u2019s pantry was stacked to the ceiling. Ant shared her food with a sigh — but she made Grasshopper a deal: "Next summer, you will work beside me in the morning. After that, we can BOTH dance all afternoon."'
    ],
    questions: [
      { q: 'What did Ant do all summer?', choices: ['Danced to Grasshopper\u2019s music', 'Stored food for the winter', 'Slept in the sun', 'Built a boat'], answer: 1, skill: 'Detail', hint: 'She marched back and forth carrying things.', explain: 'Ant spent the summer carrying corn and seeds into her nest to store for winter.' },
      { q: 'Why didn\u2019t Grasshopper store any food?', choices: ['He could not find any', 'He chose to play instead, not thinking ahead', 'Ant took it all', 'He was saving money'], answer: 1, skill: 'Inference', hint: '"Why work on such a beautiful day?"', explain: 'There was plenty of food in summer — Grasshopper just chose fun now over planning for later.' },
      { q: 'What happened to Grasshopper when winter came?', choices: ['He flew south', 'He was cold and starving', 'He found his own food', 'He slept until spring'], answer: 1, skill: 'Detail', hint: 'The fields were bare and frozen.', explain: 'With the fields empty and frozen, Grasshopper had nothing — he came to Ant\u2019s door shivering and starving.' },
      { q: 'What deal did Ant make with Grasshopper?', choices: ['He must leave and never return', 'Next summer he will work mornings, then they both dance afternoons', 'He must give her his fiddle', 'He must guard the nest'], answer: 1, skill: 'Detail', hint: 'It mixes work AND dancing.', explain: 'Ant shared her food but asked Grasshopper to work beside her next summer — mornings for work, afternoons for dancing together.' },
      { q: 'What is the lesson of this fable?', choices: ['Never dance or play', 'Prepare ahead, and there is time for both work and play', 'Winter is unfair', 'Ants are stronger than grasshoppers'], answer: 1, skill: 'Main idea', hint: 'Look at Ant\u2019s deal — does she say fun is bad?', explain: 'The story is not against fun — it is for thinking ahead. Do the work first, and you can enjoy playtime without worry.' }
    ]
  },
  {
    id: 'fb-crow',
    title: 'The Clever Crow',
    paras: [
      'On a burning hot day, a thirsty crow found a tall pitcher with a little water at the bottom. She pushed her beak inside — too short! The water sat far below, impossible to reach. She tried tipping the pitcher, but it was too heavy. Most birds would have flown away. This crow sat and thought.',
      'Then she spotted a pile of pebbles. She picked one up, dropped it into the pitcher, and — plip! — the water rose a tiny bit. She dropped another. And another. Pebble by pebble, plip by plip, the water climbed higher and higher, until at last it reached the top. The crow drank her fill and flew off, leaving a pitcher full of stones behind.'
    ],
    questions: [
      { q: 'What problem did the crow have?', choices: ['She was lost', 'Water was in the pitcher but too low to reach', 'The pitcher was empty', 'Another bird chased her'], answer: 1, skill: 'Detail', hint: 'Her beak was too short for what?', explain: 'There WAS water in the pitcher, but it sat too far down for her beak to reach.' },
      { q: 'What did the crow try first?', choices: ['Dropping pebbles', 'Tipping the pitcher over', 'Calling for help', 'Breaking the pitcher'], answer: 1, skill: 'Detail', hint: 'It was too heavy for this plan.', explain: 'First she tried tipping the pitcher, but it was too heavy to move.' },
      { q: 'How did the pebbles solve the problem?', choices: ['They broke the pitcher', 'Each pebble made the water rise a little higher', 'They cooled the water', 'They scared away other birds'], answer: 1, skill: 'Detail', hint: 'Plip! What happened to the water level?', explain: 'Every pebble took up space at the bottom, pushing the water up bit by bit until the crow could reach it.' },
      { q: 'What made this crow different from most birds?', choices: ['She was bigger', 'She stopped and THOUGHT instead of giving up', 'She did not need water', 'She had a longer beak'], answer: 1, skill: 'Inference', hint: 'Most birds would have flown away\u2026', explain: 'The crow\u2019s body was ordinary — her thinking was special. She stayed with the problem until an idea came.' },
      { q: 'What is the lesson of this fable?', choices: ['Pitchers should be shorter', 'Thinking and small steps can solve big problems', 'Crows like pebbles', 'Never drink from pitchers'], answer: 1, skill: 'Main idea', hint: 'Pebble by pebble, plip by plip\u2026', explain: 'Clever thinking plus patient little steps — one pebble at a time — solved a problem that force could not.' }
    ]
  },
  {
    id: 'fb-stonesoup',
    title: 'Stone Soup',
    paras: [
      'A hungry traveler arrived in a village where every door stayed shut. Times were hard, and each family hid its food. The traveler smiled, filled a big pot with water in the town square, lit a fire, and dropped in one smooth stone. "What are you making?" asked a curious boy. "Stone soup!" said the traveler. "It is delicious — though it is even better with a bit of cabbage."',
      'The boy ran home for a cabbage. A woman heard "delicious" and brought two carrots. Someone else offered potatoes, then an onion, then a chicken bone, then a pinch of salt. The pot bubbled and the smell drifted down every street until the whole village stood in the square, spoons in hand. Everyone ate a warm dinner that night. And it all came from one stone — plus a little bit from everyone.'
    ],
    questions: [
      { q: 'Why did the villagers keep their doors shut at first?', choices: ['It was raining', 'Times were hard and they hid their food', 'They were sleeping', 'They did not like soup'], answer: 1, skill: 'Detail', hint: 'Each family was protecting something.', explain: 'Times were hard, so each family hid its food and kept its door closed to strangers.' },
      { q: 'What did the traveler put in the pot first?', choices: ['A cabbage', 'A smooth stone', 'A chicken', 'Salt'], answer: 1, skill: 'Detail', hint: 'It gives the soup its name.', explain: 'The traveler started with just water and one smooth stone — "stone soup!"' },
      { q: 'Why did the villagers start bringing food?', choices: ['The traveler paid them', 'Curiosity and the promise of delicious soup drew them in', 'They were ordered to', 'They wanted the stone'], answer: 1, skill: 'Inference', hint: '"It is even better with a bit of cabbage\u2026"', explain: 'Each villager wanted to make the exciting soup a little better — one small offering at a time, curiosity beat hiding.' },
      { q: 'What really made the soup delicious?', choices: ['The magic stone', 'Everyone\u2019s small contributions combined', 'The traveler\u2019s secret spice', 'Boiling it a long time'], answer: 1, skill: 'Inference', hint: 'What was in the pot by the end?', explain: 'The stone flavored nothing! Cabbage, carrots, potatoes, onion, and salt — a little from everyone made a feast for everyone.' },
      { q: 'What is the lesson of this story?', choices: ['Stones make good soup', 'When everyone shares a little, everyone gets a lot', 'Travelers cannot be trusted', 'Soup needs salt'], answer: 1, skill: 'Main idea', hint: 'One stone — plus a little bit from everyone.', explain: 'Alone, each family had a hungry night. Sharing together, the village had a feast. Small gifts add up when everyone gives.' }
    ]
  },
  {
    id: 'fb-windsun',
    title: 'The Wind and the Sun',
    paras: [
      'The Wind and the Sun argued about who was stronger. "Watch this," huffed the Wind, pointing to a traveler on the road below. "Whoever makes him take off his coat is the strongest." The Sun agreed and slipped behind a cloud. The Wind blew and BLEW, colder and harder, until trees bent sideways. But the harder the wind blew, the tighter the man pulled his coat around him.',
      'At last the Wind gave up, out of breath. The Sun came out from behind the cloud and simply shone — warm, gentle, and steady. The traveler unbuttoned his collar. The sun kept shining. Soon the man smiled, wiped his forehead, and took his coat right off. "You see," said the Sun, "gentleness can do what force cannot."'
    ],
    questions: [
      { q: 'What contest did the Wind and Sun agree on?', choices: ['Who could shine brighter', 'Who could make the traveler remove his coat', 'Who could bend the most trees', 'Who could make it rain'], answer: 1, skill: 'Detail', hint: 'It was about the traveler\u2019s coat.', explain: 'They agreed: whoever could make the traveler take off his coat was the stronger one.' },
      { q: 'What happened when the Wind blew harder?', choices: ['The coat flew off', 'The man held his coat tighter', 'The man ran home', 'The sun got angry'], answer: 1, skill: 'Detail', hint: 'The Wind\u2019s plan backfired.', explain: 'The colder and harder the Wind blew, the tighter the man wrapped his coat around himself.' },
      { q: 'How did the Sun win?', choices: ['By burning the coat', 'By shining warm and steady until the man chose to remove it', 'By hiding behind a cloud', 'By asking politely'], answer: 1, skill: 'Detail', hint: 'The Sun did not force anything.', explain: 'The Sun just shone gently. As the man grew warm, he took the coat off himself — no force needed.' },
      { q: 'Why did the Wind\u2019s way fail?', choices: ['The Wind was too weak', 'Force made the man protect himself even more', 'The coat was glued on', 'The man liked wind'], answer: 1, skill: 'Inference', hint: 'What do you do when someone pushes you?', explain: 'Pushing hard made the man hold on harder. Force often makes people dig in instead of giving in.' },
      { q: 'What is the lesson of this fable?', choices: ['Wear a coat on windy days', 'Gentleness can succeed where force fails', 'The sun is hotter than wind', 'Never argue with the weather'], answer: 1, skill: 'Main idea', hint: 'The Sun says it at the end.', explain: 'Warmth and gentleness persuaded where blasting force failed. Kindness is often the strongest move.' }
    ]
  },
  {
    id: 'fb-grapes',
    title: 'The Fox and the Grapes',
    paras: [
      'A hungry fox trotted through an orchard and stopped beneath a vine heavy with fat purple grapes. His mouth watered. He jumped — and missed. He backed up, ran, and leaped with all his might — still too high. He tried again and again, until his legs wobbled and his breath came in puffs.',
      'Finally the fox gave one last hop, missed one last time, and sat down in the dust. He looked up at the beautiful grapes, put his nose in the air, and trotted away muttering, "I did not want them anyway. They are probably sour." But we all saw him jumping, didn\u2019t we? The grapes were sweet. It was only his words that were sour.'
    ],
    questions: [
      { q: 'What did the fox want?', choices: ['A nap in the orchard', 'The grapes on the vine', 'To race another fox', 'Water from a stream'], answer: 1, skill: 'Detail', hint: 'His mouth watered when he saw them.', explain: 'The hungry fox wanted the fat purple grapes hanging on the vine.' },
      { q: 'How hard did the fox try to get them?', choices: ['He gave up right away', 'He jumped again and again until he was worn out', 'He asked for help', 'He climbed the vine'], answer: 1, skill: 'Detail', hint: 'His legs wobbled and his breath came in puffs.', explain: 'The fox jumped over and over, backing up and leaping with all his might, until he was exhausted.' },
      { q: 'What did the fox say as he left?', choices: ['"I will return tomorrow"', '"They are probably sour"', '"Those were delicious"', '"Someone help me"'], answer: 1, skill: 'Detail', hint: 'He put his nose in the air first.', explain: 'The fox pretended he never wanted the grapes: "They are probably sour," he muttered.' },
      { q: 'Why did the fox REALLY say the grapes were sour?', choices: ['He tasted one', 'He was covering up his disappointment about failing', 'A bird told him', 'They were green'], answer: 1, skill: 'Inference', hint: 'We all saw him jumping, didn\u2019t we?', explain: 'The fox could not reach the grapes, so he pretended they were not worth wanting. Talking down what we cannot have can feel easier than admitting we are disappointed.' },
      { q: 'What is the lesson of this fable?', choices: ['Grapes grow too high', 'It is silly to pretend you never wanted what you could not get', 'Foxes hate fruit', 'Jumping is good exercise'], answer: 1, skill: 'Main idea', hint: 'Whose words were "sour" at the end?', explain: 'The fable pokes fun at "sour grapes" — pretending something is bad just because we could not have it. It is more honest to admit disappointment.' }
    ]
  },
  {
    id: 'fb-redhen',
    title: 'The Little Red Hen',
    paras: [
      'The Little Red Hen found some grains of wheat in the farmyard. "Who will help me plant this wheat?" she asked. "Not I," yawned the cat. "Not I," mumbled the dog. "Not I," squeaked the mouse. "Then I will plant it myself," said the hen. And she did. All season she asked for help — watering the wheat, cutting the wheat, carrying it to the mill, baking the flour into bread. Every time, the same three answers: "Not I." "Not I." "Not I."',
      'At last, the smell of fresh warm bread floated across the farmyard. "Who will help me EAT this bread?" asked the hen. "I will!" cried the cat. "I will!" barked the dog. "I will!" squeaked the mouse. The Little Red Hen shook her head. "You would not help me work, so you will not share the reward. My chicks and I will eat it." And they did — every last delicious crumb.'
    ],
    questions: [
      { q: 'What did the hen find in the farmyard?', choices: ['A loaf of bread', 'Grains of wheat', 'A bag of flour', 'Corn seeds'], answer: 1, skill: 'Detail', hint: 'It is what bread starts as.', explain: 'She found grains of wheat — the very beginning of a loaf of bread.' },
      { q: 'How did the cat, dog, and mouse answer every request for help?', choices: ['"Maybe later"', '"Not I"', '"Ask the farmer"', '"We are too small"'], answer: 1, skill: 'Detail', hint: 'The same two words, every time.', explain: 'At every step — planting, watering, cutting, milling, baking — the answer was always "Not I."' },
      { q: 'When did the three animals finally offer to help?', choices: ['At planting time', 'When the bread smelled ready to eat', 'When it rained', 'They never offered'], answer: 1, skill: 'Detail', hint: 'A delicious smell changed their minds.', explain: 'They only volunteered for the FUN part — eating the warm bread they had done nothing to make.' },
      { q: 'Why wouldn\u2019t the hen share the bread?', choices: ['There was not enough', 'They refused all the work, so they don\u2019t share the reward', 'She forgot to ask them', 'The bread was burnt'], answer: 1, skill: 'Inference', hint: 'Think about what fair means here.', explain: 'Sharing the reward is fair when you share the work. The three friends skipped every job, so they missed the prize too.' },
      { q: 'What is the lesson of this story?', choices: ['Bread is hard to make', 'If you want to share the reward, help with the work', 'Hens are selfish', 'Cats hate wheat'], answer: 1, skill: 'Main idea', hint: 'Work first, reward after.', explain: 'The story teaches that rewards belong to those who do the work — pitching in earns you a place at the table.' }
    ]
  },
  {
    id: 'fb-mice',
    title: 'Town Mouse and Country Mouse',
    paras: [
      'Country Mouse invited his cousin from the city to visit. He served simple food — barley, roots, and a berry for dessert — in his quiet little burrow. Town Mouse nibbled politely, then wrinkled his nose. "Cousin, you live so plainly! Come with me to the city and see what fine living really is."',
      'In the city house, the mice feasted on cake crumbs, cheese, and jam on a grand table. "Now THIS is life!" said Town Mouse. Suddenly — BANG! A door flew open, a huge cat streaked toward them, and the cousins dove into a crack in the wall, hearts pounding. That night, Country Mouse packed his little bag. "Thank you, cousin. But I would rather eat barley in peace than cake in fear." And home he went.'
    ],
    questions: [
      { q: 'What food did Country Mouse serve?', choices: ['Cake and jam', 'Barley, roots, and a berry', 'Cheese and crackers', 'Soup and bread'], answer: 1, skill: 'Detail', hint: 'Simple food in a quiet burrow.', explain: 'Country Mouse served plain, simple food — barley, roots, and a berry for dessert.' },
      { q: 'Why did Town Mouse invite his cousin to the city?', choices: ['To show him what fine living was', 'To help him move', 'To meet the cat', 'To find a job'], answer: 0, skill: 'Detail', hint: 'He thought the country was too plain.', explain: 'Town Mouse thought country life was too simple and wanted to show off the city\u2019s fine food and grand rooms.' },
      { q: 'What ruined the city feast?', choices: ['The food ran out', 'A huge cat burst in and chased them', 'The lights went out', 'They got a stomachache'], answer: 1, skill: 'Detail', hint: 'BANG! went the door.', explain: 'A door flew open and a huge cat came streaking toward them — they barely escaped into a crack in the wall.' },
      { q: 'What did Country Mouse mean by "barley in peace" over "cake in fear"?', choices: ['He hates cake', 'A simple, safe life beats a fancy, dangerous one', 'Barley is tastier than cake', 'He was still hungry'], answer: 1, skill: 'Inference', hint: 'What came WITH the fancy food?', explain: 'The city\u2019s riches came with constant danger. Country Mouse decided a plain life you can enjoy calmly is better than luxury you enjoy in fear.' },
      { q: 'What is the lesson of this fable?', choices: ['Cities are always bad', 'A simple life in peace can be worth more than riches with worry', 'Never visit relatives', 'Cats live in cities'], answer: 1, skill: 'Main idea', hint: 'It is about what makes a good life.', explain: 'The fable asks what really matters: fancy things, or feeling safe and content? For Country Mouse, peace won easily.' }
    ]
  }
];
