// Passage library for Pip's Reading Patch.
// To add a passage: copy an object below, give it a unique id, and add it to the array.
// Each passage: { id, title, topic ('animals' | 'life'), paras: [strings], questions: [5] }
// Each question: { q, choices: [4 strings], answer: index 0-3, skill, hint, explain }

export const PASSAGES = [
  {
    id: 'beaver',
    title: 'The Busy Beaver',
    topic: 'animals',
    paras: [
      "Beavers are nature's builders. A beaver uses its strong front teeth to cut down small trees. Then it drags the branches into a stream and piles them up with mud and stones. This pile is called a dam. The dam blocks the water and makes a quiet pond.",
      "In the middle of the pond, the beaver builds its home, called a lodge. The door of the lodge is hidden underwater, so hungry wolves and bears cannot get inside. A beaver's front teeth never stop growing. All that chewing keeps them just the right size!"
    ],
    questions: [
      { q: 'What is this story mostly about?', choices: ['How wolves hunt for food', 'How beavers build dams and homes', 'Why ponds are quiet places', 'How trees grow near streams'], answer: 1, skill: 'Main idea', hint: 'Think about what the beaver is doing in almost every sentence.', explain: 'Almost every sentence tells us how the beaver builds — its dam and its lodge. That makes building the main idea.' },
      { q: 'What does a beaver use to cut down trees?', choices: ['Its flat tail', 'Its sharp claws', 'Its strong front teeth', 'Mud and stones'], answer: 2, skill: 'Detail', hint: 'Look back at the second sentence of the story.', explain: 'The story says a beaver uses its strong front teeth to cut down small trees.' },
      { q: "What is a beaver's home called?", choices: ['A dam', 'A den', 'A nest', 'A lodge'], answer: 3, skill: 'Detail', hint: 'The dam blocks the water. The home has a different name.', explain: 'The dam makes the pond, but the home in the middle of the pond is called a lodge.' },
      { q: 'Why is the door of the lodge hidden underwater?', choices: ['So the beaver can swim faster', 'To keep hungry animals out', 'To let fish come inside', 'Because the beaver likes the dark'], answer: 1, skill: 'Why', hint: 'What does the story say wolves and bears cannot do?', explain: 'The story says the underwater door keeps wolves and bears from getting inside. It is like a secret entrance!' },
      { q: "Why don't a beaver's front teeth get too long?", choices: ['They stop growing when the beaver is grown', 'The beaver files them on stones', 'All the chewing keeps them the right size', 'The dentist trims them'], answer: 2, skill: 'Inference', hint: 'The teeth never stop growing — so what wears them down?', explain: 'The teeth never stop growing, but chewing wood wears them down. So all that building keeps them just the right size.' }
    ]
  },
  {
    id: 'hummingbird',
    title: 'The Tiny Helicopter',
    topic: 'animals',
    paras: [
      'Have you ever seen a bird fly backward? A hummingbird can! Hummingbirds are some of the smallest birds in the world. Some are no bigger than your thumb. Their wings beat about fifty times every second. The wings move so fast that they make a humming sound. That is how the hummingbird got its name.',
      'Hummingbirds drink a sweet juice from flowers called nectar. Flying that fast takes lots of energy, so a hummingbird eats all day long. At night, it rests very deeply to save its energy for tomorrow.'
    ],
    questions: [
      { q: 'What is this story mostly about?', choices: ['How flowers make nectar', 'What makes hummingbirds special', 'Why birds sleep at night', 'How helicopters fly'], answer: 1, skill: 'Main idea', hint: 'The whole story lists amazing things about one animal.', explain: 'Every part of the story shares something special about hummingbirds — their size, speed, and eating habits.' },
      { q: 'How did the hummingbird get its name?', choices: ['It hums little songs', 'Its fast wings make a humming sound', 'It was named after a person', 'It lives near humming bees'], answer: 1, skill: 'Detail', hint: 'What sound do the fast-beating wings make?', explain: 'The story says the wings move so fast they make a humming sound — and that is where the name comes from.' },
      { q: 'What do hummingbirds drink from flowers?', choices: ['Rainwater', 'Honey', 'Nectar', 'Sap'], answer: 2, skill: 'Detail', hint: 'The story calls it a sweet juice.', explain: 'The sweet juice inside flowers is called nectar, and it is a hummingbird\u2019s favorite food.' },
      { q: 'Why does a hummingbird eat all day long?', choices: ['It is always bored', 'Flying so fast uses lots of energy', 'The flowers close at night', 'It shares food with its babies'], answer: 1, skill: 'Why', hint: 'What does the story say flying that fast takes?', explain: 'Beating your wings fifty times a second takes lots of energy, so hummingbirds must keep refueling all day.' },
      { q: 'Why do you think a hummingbird rests so deeply at night?', choices: ['To save its energy for tomorrow', 'Because it is afraid of the dark', 'So owls cannot hear it', 'Because nectar makes it sleepy'], answer: 0, skill: 'Inference', hint: 'Think about how much energy it used all day.', explain: 'After using so much energy flying, deep rest lets the hummingbird save up energy for another busy day.' }
    ]
  },
  {
    id: 'hermitcrab',
    title: 'A New Shell for Hermit Crab',
    topic: 'animals',
    paras: [
      'A hermit crab does not grow its own shell. Its body is soft and needs a hard home, so it borrows empty shells it finds on the beach. As the crab grows bigger, its shell gets too tight. Then it must find a bigger one.',
      'Sometimes hermit crabs line up next to a new shell, from biggest crab to smallest. When the biggest crab moves into the new shell, the next crab takes the one it left behind. Everyone gets a bigger home! Scientists call this a shell swap. It shows that even little animals can work together.'
    ],
    questions: [
      { q: 'What is this story mostly about?', choices: ['How hermit crabs find and share shells', 'How shells are made', 'Where crabs like to swim', 'What scientists do at the beach'], answer: 0, skill: 'Main idea', hint: 'Both paragraphs talk about the same thing: shells.', explain: 'The whole story is about how hermit crabs borrow shells and even swap them with each other.' },
      { q: 'Why does a hermit crab need to borrow a shell?', choices: ['Its own shell is too heavy', 'Its body is soft and needs a hard home', 'It likes to collect pretty things', 'Shells help it swim faster'], answer: 1, skill: 'Detail', hint: 'What does the story say about the crab\u2019s body?', explain: 'The story says the crab\u2019s body is soft, so it needs a hard borrowed shell to stay safe.' },
      { q: 'When does a hermit crab need a bigger shell?', choices: ['When winter comes', 'When it grows and the shell gets too tight', 'When the shell gets dirty', 'When it makes a new friend'], answer: 1, skill: 'Detail', hint: 'What happens as the crab grows bigger?', explain: 'As the crab grows, its old shell gets too tight — like shoes you have outgrown.' },
      { q: 'In a shell swap, what happens after the biggest crab moves into the new shell?', choices: ['The other crabs go home', 'The next crab takes the shell it left behind', 'The crabs race to the water', 'The smallest crab keeps the new shell'], answer: 1, skill: 'Detail', hint: 'The crabs are in a line for a reason.', explain: 'Each crab takes the shell the crab before it left behind — so everyone moves up to a bigger home.' },
      { q: 'What does the shell swap show us?', choices: ['Crabs are afraid of each other', 'Big crabs always win', 'Even little animals can work together', 'Shells are hard to find'], answer: 2, skill: 'Inference', hint: 'The last sentence gives a big clue.', explain: 'By lining up and trading shells, every crab gets a better home. That only works because they work together.' }
    ]
  },
  {
    id: 'leaves',
    title: 'Why Leaves Change Color',
    topic: 'animals',
    paras: [
      'In summer, leaves are green because they are full of something called chlorophyll. Chlorophyll helps a tree use sunlight to make its food. In fall, the days grow shorter and colder. The tree gets ready to rest for the winter, so it stops making chlorophyll.',
      'When the green fades away, other colors that were hiding in the leaf can finally show. That is why we see yellow, orange, and red leaves in the fall. The bright colors were there all along — they were just covered up by green!'
    ],
    questions: [
      { q: 'What is this story mostly about?', choices: ['Why leaves change color in fall', 'How to rake leaves', 'Why winter is cold', 'How trees drink water'], answer: 0, skill: 'Main idea', hint: 'The title is a big clue!', explain: 'The story explains step by step why green leaves turn yellow, orange, and red in the fall.' },
      { q: 'What makes leaves green in summer?', choices: ['Rainwater', 'Chlorophyll', 'Green paint from the sun', 'Cold air'], answer: 1, skill: 'Detail', hint: 'It is a long word from the first sentence.', explain: 'Leaves are full of chlorophyll in summer, and chlorophyll is what makes them green.' },
      { q: 'What does chlorophyll help a tree do?', choices: ['Grow taller roots', 'Use sunlight to make food', 'Drop its leaves', 'Stay warm in winter'], answer: 1, skill: 'Detail', hint: 'It has to do with sunlight.', explain: 'The story says chlorophyll helps the tree use sunlight to make its food.' },
      { q: 'Why does the tree stop making chlorophyll in fall?', choices: ['It runs out of green', 'It is getting ready to rest for winter', 'The leaves ask it to stop', 'Birds eat the chlorophyll'], answer: 1, skill: 'Why', hint: 'What is the tree getting ready to do?', explain: 'Days get shorter and colder, so the tree gets ready to rest for winter and stops making chlorophyll.' },
      { q: 'Where do the yellow and red colors come from?', choices: ['The cold air paints them', 'They fall from the sky', 'They were hiding in the leaf all along', 'Squirrels bring them'], answer: 2, skill: 'Inference', hint: 'The last sentence says the colors were "covered up."', explain: 'The bright colors were in the leaf the whole time — the green was just covering them up until it faded.' }
    ]
  },
  {
    id: 'octopus',
    title: 'The Great Escape',
    topic: 'animals',
    paras: [
      'An octopus named Ozzy lived in a big glass tank at an aquarium. Octopuses are very smart, and Ozzy was the smartest of all. One night, a worker forgot to close the top of the tank all the way.',
      'An octopus has no bones, so it can squeeze its soft body through very small spaces. Ozzy slipped through the gap, slid across the floor, and found a little drainpipe. The pipe led straight to the ocean. In the morning, the workers found only a wet trail. Ozzy was home in the sea at last.'
    ],
    questions: [
      { q: 'What did the worker forget to do?', choices: ['Feed Ozzy dinner', 'Turn off the lights', 'Close the top of the tank', 'Clean the glass'], answer: 2, skill: 'Detail', hint: 'It happened one night, at the top of the tank.', explain: 'The worker forgot to close the top of the tank all the way — and that gap was Ozzy\u2019s way out.' },
      { q: 'How could Ozzy fit through such small spaces?', choices: ['He was a baby octopus', 'He has no bones, so his body can squeeze', 'He broke the glass', 'He used a magic trick'], answer: 1, skill: 'Detail', hint: 'What does the story say an octopus does not have?', explain: 'Octopuses have no bones, so their soft bodies can squeeze through spaces much smaller than they are.' },
      { q: 'Where did the drainpipe lead?', choices: ['To another tank', 'To the parking lot', 'To the ocean', 'To the gift shop'], answer: 2, skill: 'Detail', hint: 'It is where an octopus would most want to go.', explain: 'The pipe led straight to the ocean — the perfect exit for an escaping octopus.' },
      { q: 'How did the workers know what had happened?', choices: ['They watched Ozzy leave', 'They found a wet trail', 'Ozzy left a note', 'Another octopus told them'], answer: 1, skill: 'Inference', hint: 'What did they find in the morning?', explain: 'The only clue left behind was a wet trail across the floor — the marks of a soft, wet body sliding to the pipe.' },
      { q: 'What does this story show about octopuses?', choices: ['They are very smart', 'They are afraid of water', 'They like living in tanks', 'They sleep all night'], answer: 0, skill: 'Inference', hint: 'Think about the clever plan Ozzy made.', explain: 'Ozzy noticed the gap, squeezed out, and found a pipe to the sea. Only a very smart animal could plan an escape like that!' }
    ]
  },
  {
    id: 'camel',
    title: 'Ship of the Desert',
    topic: 'animals',
    paras: [
      "The desert is a hard place to live. It is hot and dry, and water is hard to find. But camels have special ways to stay safe there. A camel's hump is full of fat, not water. When there is no food, the camel's body uses the fat in its hump for energy.",
      'Camels have long eyelashes that keep blowing sand out of their eyes. Their wide, flat feet do not sink into the soft sand. A thirsty camel can drink a whole bathtub of water in ten minutes! No wonder people call camels the ships of the desert.'
    ],
    questions: [
      { q: 'What is this story mostly about?', choices: ['How hot the desert is', 'How camels are built to live in the desert', 'How to sail a ship', 'Why sand is soft'], answer: 1, skill: 'Main idea', hint: 'Every sentence tells about something special camels have.', explain: 'The story lists all the special ways a camel\u2019s body helps it live in the hot, dry desert.' },
      { q: "What is inside a camel's hump?", choices: ['Water', 'Fat', 'Sand', 'Bones'], answer: 1, skill: 'Detail', hint: 'Many people guess wrong on this one — check the story!', explain: 'Lots of people think it is water, but the story says the hump is full of fat, which the body uses for energy.' },
      { q: 'Why do camels have long eyelashes?', choices: ['To look pretty', 'To keep blowing sand out of their eyes', 'To shade them from the moon', 'To feel for food'], answer: 1, skill: 'Why', hint: 'The desert wind blows something around.', explain: 'The desert is full of blowing sand, and long eyelashes work like little brooms to keep it out of a camel\u2019s eyes.' },
      { q: 'How do wide, flat feet help a camel?', choices: ['They help it run on ice', 'They keep it from sinking into soft sand', 'They help it climb trees', 'They make it swim faster'], answer: 1, skill: 'Inference', hint: 'Think about walking on a soft, sandy beach.', explain: 'Wide, flat feet spread the camel\u2019s weight out, so it can walk on soft sand without sinking in.' },
      { q: 'How much water can a thirsty camel drink in ten minutes?', choices: ['A small cup', 'A whole bathtub', 'A swimming pool', 'A raindrop'], answer: 1, skill: 'Detail', hint: 'It is a lot — the story compares it to something in your house.', explain: 'The story says a thirsty camel can drink a whole bathtub of water in just ten minutes!' }
    ]
  },
  {
    id: 'newkid',
    title: 'The New Kid',
    topic: 'life',
    paras: [
      "On Monday, a new boy named Omar joined Ms. Lee's class. At recess, Omar stood by the fence all alone and watched the others play soccer. Jade noticed him from across the field. She remembered her own first week at a new school. Her stomach had felt like it was full of butterflies.",
      "Jade picked up the ball and walked over. 'We need one more player,' she said. 'Want to be on my team?' Omar's face lit up like a lamp. By the end of recess, Omar had scored a goal — and Jade had made a brand-new friend."
    ],
    questions: [
      { q: 'What is this story mostly about?', choices: ['How to play soccer', 'Being kind to someone new', 'What Ms. Lee teaches', 'Recess rules at school'], answer: 1, skill: 'Main idea', hint: 'Think about what Jade chose to do, and why.', explain: 'The heart of the story is Jade noticing a lonely new kid and being kind — that kindness turns into a friendship.' },
      { q: 'How do you think Omar felt standing by the fence?', choices: ['Excited and proud', 'Lonely and left out', 'Angry at the other kids', 'Sleepy and bored'], answer: 1, skill: 'Inference', hint: 'He was all alone, just watching the others play.', explain: 'The story does not say "lonely," but Omar stood alone watching everyone else play — that is how someone left out feels.' },
      { q: 'Why did Jade understand how Omar felt?', choices: ['She read his mind', 'Omar told her', 'She remembered being new at school too', 'Ms. Lee explained it'], answer: 2, skill: 'Why', hint: 'What did Jade remember from her own life?', explain: 'Jade remembered her own first week at a new school and those butterflies in her stomach — so she knew just how Omar felt.' },
      { q: 'What does "his face lit up like a lamp" mean?', choices: ['His face turned red', 'He suddenly looked very happy', 'The sun was shining on him', 'He was embarrassed'], answer: 1, skill: 'Inference', hint: 'A lamp turning on makes everything bright.', explain: 'When a face "lights up," it means a big, bright, happy look — Omar was thrilled to be asked to play.' },
      { q: 'What happened by the end of recess?', choices: ['Omar scored a goal and made a friend', 'The game was rained out', 'Jade went back inside', 'Omar decided not to play'], answer: 0, skill: 'Detail', hint: 'The last sentence tells you two good things.', explain: 'The story ends with Omar scoring a goal and Jade making a brand-new friend — a win for both of them.' }
    ]
  },
  {
    id: 'lemonade',
    title: "Maya's Lemonade Stand",
    topic: 'life',
    paras: [
      "Maya wanted to buy her dog Biscuit a soft new bed, but she only had two dollars. 'You could earn the rest,' Dad said. So Maya set up a lemonade stand on the corner. The first day, the sun was hiding behind clouds, and nobody came. Maya wanted to give up.",
      "The next day was hot and sunny. Maya added a big, colorful sign: ICE-COLD LEMONADE, 50 CENTS. Cars stopped. Neighbors came. By dinner time, her jar was heavy with coins. Maya counted twelve dollars — enough for the bed! Biscuit sniffed the jar and wagged his tail."
    ],
    questions: [
      { q: 'Why did Maya want to earn money?', choices: ['To buy a video game', 'To buy Biscuit a new bed', 'To go to the movies', 'To buy more lemons'], answer: 1, skill: 'Detail', hint: 'It was something for her dog.', explain: 'Maya wanted to buy her dog Biscuit a soft new bed, but she only had two dollars.' },
      { q: 'Why do you think nobody came on the first day?', choices: ['The lemonade was too sour', 'It was cloudy, so no one wanted a cold drink', 'The stand was closed', 'It was a school day'], answer: 1, skill: 'Inference', hint: 'Where was the sun that day?', explain: 'The sun was hiding behind clouds. People mostly want ice-cold lemonade on hot, sunny days.' },
      { q: 'What did Maya add on the second day?', choices: ['Free cookies', 'A big, colorful sign', 'Music and balloons', 'A second table'], answer: 1, skill: 'Detail', hint: 'It told people what she was selling.', explain: 'Maya made a big, colorful sign that said ICE-COLD LEMONADE, 50 CENTS — and it helped people notice her stand.' },
      { q: 'What lesson does this story teach?', choices: ['Always drink lemonade', 'Give up if the first day is bad', 'Keep trying, even when things start badly', 'Dogs like money jars'], answer: 2, skill: 'Inference', hint: 'Maya wanted to give up — but what did she do instead?', explain: 'Maya almost gave up after a bad first day, but she tried again with a new idea and it worked. Keep trying!' },
      { q: 'How do we know the second day went well?', choices: ['Her jar was heavy with coins', 'Dad bought all the lemonade', 'It started to rain', 'The story does not say'], answer: 0, skill: 'Inference', hint: 'What was the jar like by dinner time?', explain: 'By dinner, the jar was heavy with coins — twelve dollars! A heavy jar means lots of customers came.' }
    ]
  },
  {
    id: 'librarybook',
    title: 'The Missing Library Book',
    topic: 'life',
    paras: [
      "Leo's library book was due on Friday, but it was nowhere to be found. He looked under his bed. He dug through his backpack. He even checked the fridge, just in case. No book.",
      "Then Leo's little sister Rosa walked in, holding the book like a treasure. 'I wanted to see the dinosaur pictures,' she said in a small voice. Leo felt his face get hot. He wanted to yell. Instead, he took a slow, deep breath. 'Next time, just ask me,' he said. 'We can read it together.' Rosa smiled, and they turned to page one."
    ],
    questions: [
      { q: 'When was the library book due?', choices: ['Monday', 'Wednesday', 'Friday', 'Saturday'], answer: 2, skill: 'Detail', hint: 'It is in the very first sentence.', explain: 'The story starts by telling us the book was due on Friday.' },
      { q: 'Why did Rosa speak in a small voice?', choices: ['She had a sore throat', 'She felt nervous and sorry', 'She was telling a secret', 'She was sleepy'], answer: 1, skill: 'Inference', hint: 'She took the book without asking. How would that feel?', explain: 'Rosa knew she had taken the book without asking. A small voice shows she felt nervous and a little sorry.' },
      { q: 'What does "Leo felt his face get hot" tell us?', choices: ['He had a fever', 'He was getting angry', 'The room was warm', 'He was blushing at a joke'], answer: 1, skill: 'Inference', hint: 'He wanted to yell right after.', explain: 'A hot face and wanting to yell are signs of anger. Leo was mad that Rosa took his book.' },
      { q: 'Why did Leo take a slow, deep breath?', choices: ['To smell dinner cooking', 'To calm down instead of yelling', 'To blow out candles', 'Because he was tired from looking'], answer: 1, skill: 'Why', hint: 'What did he want to do before the breath — and what did he do after?', explain: 'Leo wanted to yell, but the deep breath helped him calm down so he could speak kindly instead.' },
      { q: 'What is the big idea of this story?', choices: ['Always check the fridge first', 'Little sisters cause trouble', 'You can choose to stay calm when you are angry', 'Library books are easy to lose'], answer: 2, skill: 'Main idea', hint: 'Think about the choice Leo made at the end.', explain: 'Leo felt angry but chose to breathe, stay calm, and be kind. The story shows that anger is a feeling — and calm is a choice.' }
    ]
  },
  {
    id: 'garden',
    title: "Grandpa's Garden",
    topic: 'life',
    paras: [
      "Every Saturday, Ruby helped Grandpa in his garden. In spring, they pushed tiny seeds into the dark soil. 'Now we wait,' Grandpa said. Waiting was the hard part. Ruby checked the garden every single day, but for weeks she saw only dirt.",
      "Then one morning, little green sprouts poked up in a row, like a tiny parade. All summer, Ruby watered the plants and pulled the weeds. By fall, the vines were heavy with fat orange pumpkins. 'Good things take time,' Grandpa said. Ruby picked the biggest pumpkin, and it took both arms to carry it."
    ],
    questions: [
      { q: 'When did Ruby and Grandpa plant the seeds?', choices: ['In spring', 'In summer', 'In fall', 'In winter'], answer: 0, skill: 'Detail', hint: 'It is the season when gardens begin.', explain: 'The story says that in spring, they pushed tiny seeds into the dark soil.' },
      { q: 'Why was waiting so hard for Ruby?', choices: ['She was excited and could not wait to see the plants', 'She did not like the garden', 'Grandpa made her wait inside', 'She forgot about the seeds'], answer: 0, skill: 'Inference', hint: 'She checked the garden every single day!', explain: 'Ruby checked every single day — that shows she was excited and could hardly wait for the seeds to grow.' },
      { q: 'What jobs did Ruby do all summer?', choices: ['Picked apples and raked leaves', 'Watered the plants and pulled the weeds', 'Built a fence and painted it', 'Fed the birds and washed the car'], answer: 1, skill: 'Detail', hint: 'Two jobs, in the second paragraph.', explain: 'All summer, Ruby watered the plants and pulled the weeds to help the pumpkins grow.' },
      { q: 'What did Grandpa mean by "good things take time"?', choices: ['Clocks move slowly in gardens', 'Being patient can lead to something wonderful', 'Pumpkins only grow on Saturdays', 'Waiting is a waste of time'], answer: 1, skill: 'Inference', hint: 'Think about the long wait — and the big pumpkins at the end.', explain: 'The seeds took months of waiting and care, but they became wonderful pumpkins. Patience paid off!' },
      { q: 'What is this story mostly about?', choices: ['How to carry a pumpkin', 'Being patient while good things grow', 'Why weeds are bad', 'What Grandpa does on Saturdays'], answer: 1, skill: 'Main idea', hint: 'The story starts with waiting and ends with a reward.', explain: 'From tiny seeds to giant pumpkins, the whole story is about patience — waiting and working for something good.' }
    ]
  }
];
