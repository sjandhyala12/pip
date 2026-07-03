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
  },
  {
    id: 'fb-goose', level: 2,
    title: 'The Goose and the Golden Egg',
    paras: [
      'A farmer once had a very special goose. Every single morning, it laid one shining egg made of pure gold. The farmer sold each golden egg and slowly grew rich. But one egg a day was just not enough for him. He wanted to be rich right now.',
      'The greedy farmer thought, \u201cIf the goose can make gold, it must be full of gold inside. I will get it all at once!\u201d So he cut the goose open. But inside, the goose was just like any other goose \u2014 there was no pile of gold at all. Now the goose was gone, and so were the golden eggs. The farmer had lost everything because he could not wait.'
    ],
    questions: [
      { q: 'What did the special goose lay each morning?', choices: ['A plain egg', 'A golden egg', 'A silver coin', 'A feather'], answer: 1, skill: 'Detail', hint: 'It was made of gold.', explain: 'Every morning the goose laid one shining egg made of pure gold.' },
      { q: 'Why was the farmer not happy with one egg a day?', choices: ['The eggs were too small', 'He wanted to be rich right away', 'He did not like gold', 'The goose was noisy'], answer: 1, skill: 'Why', hint: 'He was impatient.', explain: 'One egg a day was not enough for the greedy farmer \u2014 he wanted to be rich right now.' },
      { q: 'Why did the farmer cut the goose open?', choices: ['To cook it', 'He thought it was full of gold inside', 'To set it free', 'To count its feathers'], answer: 1, skill: 'Inference', hint: 'What did he wrongly believe was inside?', explain: 'The farmer believed the goose must be full of gold, so he cut it open to get it all at once.' },
      { q: 'What did the farmer find inside the goose?', choices: ['A mountain of gold', 'No gold \u2014 it was an ordinary goose', 'More eggs', 'A golden feather'], answer: 1, skill: 'Detail', hint: 'It was just like any other goose.', explain: 'Inside, the goose was ordinary \u2014 there was no gold at all.' },
      { q: 'What is the moral of this fable?', choices: ['Geese are magic', 'Being greedy can make you lose what you already have', 'Gold is heavy', 'Farmers work hard'], answer: 1, skill: 'Main idea', hint: 'The farmer ended up with nothing.', explain: 'The farmer\u2019s greed cost him the goose and the eggs. The moral: greed can make you lose what you already have.' }
    ]
  },
  {
    id: 'fb-milkmaid', level: 3,
    title: 'The Milkmaid and Her Pail',
    paras: [
      'A young milkmaid named Patty was walking to the market with a pail of fresh milk balanced carefully on her head. As she walked, she began to daydream. \u201cI\u2019ll sell this milk and buy some eggs,\u201d she thought. \u201cThe eggs will hatch into chickens. I\u2019ll sell the chickens and buy a beautiful new dress. In my lovely dress, everyone at the fair will admire me, and I\u2019ll toss my head proudly at all the boys.\u201d',
      'Lost in her happy daydream, Patty tossed her head right then and there \u2014 just as she had imagined doing at the fair. But the pail tumbled off, and all the milk splashed across the dusty road. With the milk gone, there would be no eggs, no chickens, and no new dress after all. Patty walked home with an empty pail, having learned not to count her chickens before they hatch.'
    ],
    questions: [
      { q: 'What was Patty carrying to the market?', choices: ['A basket of eggs', 'A pail of milk on her head', 'A new dress', 'A cage of chickens'], answer: 1, skill: 'Detail', hint: 'It was balanced on her head.', explain: 'Patty was carrying a pail of fresh milk balanced on her head.' },
      { q: 'What did Patty daydream about buying, in order?', choices: ['Eggs, then chickens, then a new dress', 'A dress, then a house', 'Chickens, then a cow', 'Nothing at all'], answer: 0, skill: 'Detail', hint: 'Follow her chain of plans.', explain: 'Patty planned to buy eggs, which would hatch into chickens, which she would sell to buy a new dress.' },
      { q: 'Why did the milk spill?', choices: ['She tripped on a rock', 'She tossed her head, just like in her daydream', 'A dog bumped her', 'The pail had a hole'], answer: 1, skill: 'Why', hint: 'She acted out her daydream without thinking.', explain: 'Caught up in her daydream, Patty tossed her head as she imagined \u2014 and the pail tumbled off.' },
      { q: 'What did Patty have left in the end?', choices: ['A new dress', 'An empty pail and nothing else', 'A basket of eggs', 'Many chickens'], answer: 1, skill: 'Inference', hint: 'The milk was gone, so the whole plan was gone.', explain: 'With the milk spilled, there were no eggs, chickens, or dress \u2014 Patty had only an empty pail.' },
      { q: 'What is the moral of this fable?', choices: ['Never carry milk', 'Do not count on things that have not happened yet', 'Dresses are expensive', 'Markets are far away'], answer: 1, skill: 'Main idea', hint: 'Think about \u201ccounting chickens before they hatch.\u201d', explain: 'Patty planned on riches she did not have yet, and lost it all. The moral: do not count your chickens before they hatch.' }
    ]
  },
  {
    id: 'fb-dogbone', level: 3,
    title: 'The Dog and His Reflection',
    paras: [
      'A lucky dog had found a big, juicy bone. He carried it proudly in his mouth as he trotted toward home, pleased with his fine prize. On the way, he had to cross a narrow wooden bridge over a still, quiet stream.',
      'As he crossed, the dog happened to look down and saw another dog in the water below, carrying a bone that looked even bigger than his own. Of course, it was only his own reflection \u2014 but the greedy dog did not understand that. Wanting both bones for himself, he opened his mouth to snatch the other one. The moment he did, his own bone dropped into the water with a splash and sank out of sight. By trying to grab more, the dog ended up with nothing at all.'
    ],
    questions: [
      { q: 'What had the dog found?', choices: ['A ball', 'A big, juicy bone', 'A stick', 'A bridge'], answer: 1, skill: 'Detail', hint: 'He carried it proudly.', explain: 'The lucky dog had found a big, juicy bone.' },
      { q: 'What did the dog see in the water?', choices: ['A fish', 'Another dog with a bone', 'His owner', 'A duck'], answer: 1, skill: 'Detail', hint: 'It seemed to have an even bigger bone.', explain: 'He saw what looked like another dog carrying an even bigger bone.' },
      { q: 'What was the \u201cother dog\u201d really?', choices: ['A real dog', 'His own reflection', 'A painting', 'A shadow'], answer: 1, skill: 'Inference', hint: 'He was looking into still water.', explain: 'The \u201cother dog\u201d was only the dog\u2019s own reflection in the calm stream.' },
      { q: 'Why did the dog\u2019s bone fall into the water?', choices: ['It was too heavy', 'He opened his mouth to grab the other bone', 'The bridge broke', 'The wind blew it'], answer: 1, skill: 'Why', hint: 'What happened when he tried to snatch more?', explain: 'When the greedy dog opened his mouth to grab the second bone, his own bone dropped and sank.' },
      { q: 'What is the moral of this fable?', choices: ['Dogs like bones', 'Being greedy can cost you what you already have', 'Bridges are dangerous', 'Water is deep'], answer: 1, skill: 'Main idea', hint: 'The dog wanted more and lost everything.', explain: 'By grabbing for more, the dog lost the bone he had. The moral: greed can cost you what you already have.' }
    ]
  },
  {
    id: 'fb-oakreed', level: 3,
    title: 'The Oak and the Reeds',
    paras: [
      'A mighty oak tree grew beside a river, where thin little reeds swayed at the water\u2019s edge. The proud oak liked to laugh at the reeds. \u201cHow weak you are!\u201d he boomed. \u201cThe smallest breeze makes you bow your heads. I am strong and grand. I never bend for anyone or anything.\u201d',
      'That night, a terrible storm roared through the valley. The wind howled and pushed with all its might. The slender reeds simply bent low and let the wind pass right over them. But the stubborn oak stood stiff and refused to bend \u2014 until, with a great and terrible crack, the mighty tree was torn up by its roots and crashed to the ground. The humble reeds, still swaying gently, understood at last: sometimes it is wiser to bend than to break.'
    ],
    questions: [
      { q: 'What did the proud oak say about the reeds?', choices: ['That they were beautiful', 'That they were weak because they bow to any breeze', 'That they were his friends', 'That they were too tall'], answer: 1, skill: 'Detail', hint: 'He was making fun of them.', explain: 'The oak laughed that the reeds were weak because the smallest breeze made them bow.' },
      { q: 'What did the reeds do during the storm?', choices: ['They broke apart', 'They bent low and let the wind pass over them', 'They blew away', 'They stood stiff'], answer: 1, skill: 'Detail', hint: 'They were flexible.', explain: 'The reeds bent low and let the powerful wind pass right over them.' },
      { q: 'Why did the mighty oak fall?', choices: ['It was too old', 'It stood stiff and refused to bend', 'Lightning hit it', 'The reeds pushed it'], answer: 1, skill: 'Why', hint: 'It would not do what the reeds did.', explain: 'The stubborn oak refused to bend, so the storm tore it up by the roots.' },
      { q: 'Why did the reeds survive the storm?', choices: ['They were lucky', 'Bending let the wind pass over them safely', 'They hid underwater', 'The oak protected them'], answer: 1, skill: 'Inference', hint: 'Their bending had a purpose.', explain: 'By bending, the reeds let the wind pass over them instead of fighting it \u2014 so they were not broken.' },
      { q: 'What is the moral of this fable?', choices: ['Big trees are best', 'Sometimes it is wiser to bend than to break', 'Storms are scary', 'Reeds are useless'], answer: 1, skill: 'Main idea', hint: 'Compare the oak and the reeds.', explain: 'The stiff oak broke while the bending reeds survived. The moral: sometimes it is wiser to bend than to break.' }
    ]
  },
  {
    id: 'fb-foxcrow', level: 3,
    title: 'The Fox and the Crow',
    paras: [
      'A crow perched high on a branch with a large piece of cheese held in her beak. A hungry fox spotted her from below and wanted that cheese for himself. He could not climb the tree, so he decided to use his clever tongue instead. \u201cOh, beautiful crow!\u201d he called sweetly. \u201cYour feathers shine like the night sky. Surely a bird so lovely must also have a wonderful voice. Won\u2019t you please sing just one song for me?\u201d',
      'The crow was so flattered by the fox\u2019s praise that she forgot all about the cheese. She opened her beak wide to sing her very finest \u201cCaw!\u201d \u2014 and the cheese dropped straight down into the waiting fox\u2019s mouth. As he trotted away with his prize, the fox chuckled to himself. The crow had learned a hard lesson: do not trust those who flatter you too much.'
    ],
    questions: [
      { q: 'What did the crow have in her beak?', choices: ['A worm', 'A piece of cheese', 'A twig', 'A berry'], answer: 1, skill: 'Detail', hint: 'The fox wanted it.', explain: 'The crow held a large piece of cheese in her beak.' },
      { q: 'Why did the fox praise the crow\u2019s feathers and voice?', choices: ['He truly admired her', 'To trick her into opening her beak', 'He wanted to be her friend', 'He was bored'], answer: 1, skill: 'Why', hint: 'What was the fox really after?', explain: 'The fox flattered the crow on purpose, hoping she would open her beak to sing \u2014 and drop the cheese.' },
      { q: 'What happened when the crow opened her beak to sing?', choices: ['She sang beautifully', 'The cheese dropped down to the fox', 'She flew away', 'The fox ran off'], answer: 1, skill: 'Detail', hint: 'The fox was waiting below.', explain: 'As soon as the crow opened her beak to sing, the cheese fell straight into the fox\u2019s mouth.' },
      { q: 'Why did the crow lose the cheese?', choices: ['She was clumsy', 'She was so flattered she forgot about the cheese', 'The wind blew it away', 'The fox grabbed it from her'], answer: 1, skill: 'Inference', hint: 'What did the fox\u2019s sweet words do to her?', explain: 'The fox\u2019s flattery made the crow forget the cheese, so she opened her beak and lost it.' },
      { q: 'What is the moral of this fable?', choices: ['Crows cannot sing', 'Do not trust those who flatter you too much', 'Foxes are fast', 'Cheese is tasty'], answer: 1, skill: 'Main idea', hint: 'The fox\u2019s sweet words were a trick.', explain: 'The crow was fooled by the fox\u2019s flattery. The moral: do not trust those who flatter you too much.' }
    ]
  }
];
