// Mystery — 10 passages.
// To add a story: append an object to PASSAGES below.

export const PASSAGES = [
  {
    id: 'my-cookies',
    title: 'The Case of the Missing Cookies',
    paras: [
      'Detective Dana had a mystery. Six chocolate chip cookies had been cooling on the counter. Now there were only four. She studied the scene like a real detective. Clue one: tiny crumbs made a trail across the kitchen floor. Clue two: the crumbs led to the living room rug. Clue three: on the rug sat her dog, Waffles, looking very innocent — with a chocolate chip stuck to his nose.',
      '"Waffles!" Dana said. But wait. Dogs should not eat chocolate. Dana counted again and checked the trash. There she found two napkins. "Dad!" she called. Dad peeked around the corner with a guilty smile. "I only took two," he said. "But who framed the dog?" The chip on Waffles\u2019 nose had fallen from Dad\u2019s napkin. Case closed!'
    ],
    questions: [
      { q: 'How many cookies were missing?', choices: ['Six', 'Four', 'Two', 'One'], answer: 2, skill: 'Detail', hint: 'There were six, and then there were four.', explain: 'Six cookies were cooling and only four were left — so two were missing.' },
      { q: 'What clue made Waffles look guilty?', choices: ['He was barking', 'A chocolate chip was stuck to his nose', 'He was hiding', 'He had a napkin'], answer: 1, skill: 'Detail', hint: 'Something was on his nose.', explain: 'The chocolate chip stuck to his nose made Waffles look like the cookie thief.' },
      { q: 'What clue proved Dad took the cookies?', choices: ['Two napkins in the trash', 'Crumbs on his shirt', 'He was still chewing', 'He confessed right away'], answer: 0, skill: 'Detail', hint: 'Dana checked the trash.', explain: 'Dana found two napkins in the trash — one for each missing cookie. That pointed to a person, not a dog.' },
      { q: 'Why did Dana decide Waffles was NOT the thief?', choices: ['Waffles was too small', 'Dogs should not eat chocolate, and the clues pointed elsewhere', 'Waffles was asleep', 'Waffles cannot reach the counter'], answer: 1, skill: 'Inference', hint: 'She remembered a fact about dogs and chocolate, then kept investigating.', explain: 'Dana knew dogs should not eat chocolate, so she looked deeper — and the napkins in the trash pointed to Dad.' },
      { q: 'How did the chip really get on Waffles\u2019 nose?', choices: ['He ate a cookie', 'It fell from Dad\u2019s napkin', 'Dana put it there', 'It flew off the counter'], answer: 1, skill: 'Inference', hint: 'The end of the story solves this little mystery too.', explain: 'The chip fell from Dad\u2019s napkin and landed on Waffles — making the poor dog look guilty by accident.' }
    ]
  },
  {
    id: 'my-footprints',
    title: 'Footprints in the Snow',
    paras: [
      'One winter morning, Eli found a line of small footprints crossing his backyard. They started at the fence, looped twice around the bird feeder, and stopped at the old oak tree. Then they simply vanished. "Footprints can\u2019t just disappear," Eli said. He put on his warmest hat and investigated.',
      'Under the bird feeder, he found sunflower seed shells. On the oak tree, he saw scratches in the bark, going up. Eli grinned and looked into the branches. Two black eyes peeked back at him from a hole in the trunk, and a fluffy gray tail flicked. Mystery solved! The visitor had not vanished at all. It had climbed.'
    ],
    questions: [
      { q: 'Where did the footprints seem to end?', choices: ['At the fence', 'At the bird feeder', 'At the old oak tree', 'At the back door'], answer: 2, skill: 'Detail', hint: 'They stopped somewhere and vanished.', explain: 'The footprints stopped right at the old oak tree and seemed to disappear.' },
      { q: 'What did Eli find under the bird feeder?', choices: ['More footprints', 'Sunflower seed shells', 'A gray tail', 'A hat'], answer: 1, skill: 'Detail', hint: 'The visitor had a snack there.', explain: 'Eli found sunflower seed shells — a clue that the visitor stopped to eat at the feeder.' },
      { q: 'What made the footprints "vanish" at the tree?', choices: ['Snow covered them', 'The animal climbed up the tree', 'The animal flew away', 'They melted'], answer: 1, skill: 'Inference', hint: 'The scratches on the bark went UP.', explain: 'Footprints only show on the ground. The animal climbed the tree, so the trail stopped — the scratches going up gave it away.' },
      { q: 'What animal was the visitor most likely?', choices: ['A rabbit', 'A squirrel', 'A cat', 'A bird'], answer: 1, skill: 'Inference', hint: 'Fluffy gray tail, loves seeds, great climber, lives in tree holes.', explain: 'A fluffy gray tail, a love of sunflower seeds, sharp climbing claws, and a home in a tree hole — all signs point to a squirrel!' },
      { q: 'What kind of thinking helped Eli solve the mystery?', choices: ['Guessing wildly', 'Following clues one by one', 'Asking his mom', 'Waiting for spring'], answer: 1, skill: 'Main idea', hint: 'How did he figure it out?', explain: 'Eli followed the clues — footprints, seed shells, scratches — one by one until they told the whole story. Just like a detective!' }
    ]
  },
  {
    id: 'my-squeak',
    title: 'The Squeak in the Night',
    paras: [
      'Squeak\u2026 squeak\u2026 squeak. Every night, a tiny sound woke Amara up. It seemed to come from inside her bedroom wall. Monsters? Ghosts? Amara was determined to find out. She left a notebook by her bed and wrote down everything: The squeak starts at 9. It stops when I turn on the light. It is loudest near my closet.',
      'On Saturday, Amara and her mom moved the boxes out of the closet. In the corner, behind an old sneaker, they found the answer: Amara\u2019s hamster, Peanut, who had escaped from his cage on Tuesday! He had built a cozy nest from a missing mitten. His little wheel-shaped chew toy squeaked every time he rolled it. "Peanut!" Amara laughed. "You could have just knocked."'
    ],
    questions: [
      { q: 'What woke Amara every night?', choices: ['A barking dog', 'A squeaking sound', 'A cold wind', 'Her alarm clock'], answer: 1, skill: 'Detail', hint: 'It is in the very first line.', explain: 'A tiny squeak, squeak, squeak woke Amara up every night.' },
      { q: 'How did Amara investigate like a detective?', choices: ['She ignored the sound', 'She wrote down clues in a notebook', 'She slept somewhere else', 'She yelled at the wall'], answer: 1, skill: 'Detail', hint: 'She kept something by her bed.', explain: 'Amara wrote down every clue in her notebook — when the squeak started, what stopped it, and where it was loudest.' },
      { q: 'Which clue told Amara WHERE to search?', choices: ['The squeak starts at 9', 'It stops in the light', 'It is loudest near the closet', 'It sounds tiny'], answer: 2, skill: 'Inference', hint: 'Which note points to a place?', explain: 'The squeak was loudest near the closet — so that was the place to look!' },
      { q: 'What was really making the squeak?', choices: ['A ghost', 'A mouse in the wall', 'Peanut rolling his squeaky chew toy', 'The old sneaker'], answer: 2, skill: 'Detail', hint: 'The escaped hamster had a toy.', explain: 'Peanut the escaped hamster was rolling his wheel-shaped chew toy, which squeaked every time it moved.' },
      { q: 'Why did the squeak stop when Amara turned on the light?', choices: ['The toy only worked in the dark', 'Peanut got startled and stopped playing', 'The light fixed the wall', 'It was all a dream'], answer: 1, skill: 'Inference', hint: 'How would a little hamster react to sudden light?', explain: 'When the light snapped on, Peanut most likely froze or hid — so his toy stopped squeaking. The clue fit perfectly once Amara knew the answer!' }
    ]
  },
  {
    id: 'my-fence',
    title: 'Who Painted the Fence?',
    paras: [
      'Mr. Okafor\u2019s old gray fence had been peeling for years. One Saturday he came home from the market — and stopped in his tracks. The fence was bright, beautiful blue! Fresh paint, still a little wet. But who had done it? He asked his neighbor Ms. Ruiz. She just smiled and said, "What a lovely color."',
      'Then Mr. Okafor spotted the clues. Blue fingerprints on his gate, very small ones. A pair of paint-splattered sneakers drying on the porch next door — kid-sized. And a paintbrush poking out of the backpack of Ms. Ruiz\u2019s daughter, Carmen, who had been "too busy to say hello" all afternoon. Mr. Okafor smiled and baked a thank-you pie. Some mysteries are sweet ones.'
    ],
    questions: [
      { q: 'What surprised Mr. Okafor when he came home?', choices: ['His fence was painted bright blue', 'His fence had fallen down', 'His gate was missing', 'A pie was on his porch'], answer: 0, skill: 'Detail', hint: 'He stopped in his tracks when he saw it.', explain: 'His peeling old gray fence had been painted a beautiful bright blue while he was out.' },
      { q: 'Which clue was NOT in the story?', choices: ['Small blue fingerprints', 'Paint-splattered kid-sized sneakers', 'A paintbrush in a backpack', 'A bucket of blue paint in the yard'], answer: 3, skill: 'Detail', hint: 'Three clues were listed. Which one is made up?', explain: 'The story mentions fingerprints, sneakers, and a paintbrush — but never a bucket of paint in the yard.' },
      { q: 'Who most likely painted the fence?', choices: ['Ms. Ruiz', 'Carmen', 'Mr. Okafor himself', 'A painter he hired'], answer: 1, skill: 'Inference', hint: 'Small fingerprints, kid-sized sneakers, and whose backpack?', explain: 'Every clue was kid-sized and pointed to Carmen — the small fingerprints, her sneakers, and the brush in her backpack.' },
      { q: 'Why was Carmen "too busy to say hello" all afternoon?', choices: ['She was shy', 'She was avoiding Mr. Okafor so he would not guess her secret', 'She was angry with him', 'She was doing homework'], answer: 1, skill: 'Inference', hint: 'She was keeping a surprise.', explain: 'Carmen was dodging Mr. Okafor to keep her kind deed a secret — talking to him might have given it away!' },
      { q: 'Why does the story call this a "sweet" mystery?', choices: ['The paint smelled like candy', 'The mystery was about a kind deed, not a crime', 'The pie was sweet', 'It happened in summer'], answer: 1, skill: 'Main idea', hint: 'Was anything bad done here?', explain: 'Instead of finding a wrongdoer, the clues led to a secret act of kindness. A mystery with a kind answer is a sweet one — and it earned Carmen a pie!' }
    ]
  },
  {
    id: 'my-sandwich',
    title: 'The Vanishing Sandwich',
    paras: [
      'At the beach picnic, Jonah set his peanut butter sandwich on his towel and ran to fill his bucket with water. When he came back — no sandwich! Only an empty spot and one small white feather. "Mom, did you take my sandwich?" Mom shook her head. His sister Zoe held up both hands. "Not me!"',
      'Jonah studied the scene. A feather. Three-toed footprints in the sand, like little arrows. A shadow gliding overhead. Then he heard a triumphant "CAW!" from the beach umbrella next door. A big white seagull stood on the umbrella top, with peanut butter smeared on its beak. Jonah sighed. "Next time," he said, "I\u2019m packing my sandwich INSIDE the cooler."'
    ],
    questions: [
      { q: 'What did Jonah find where his sandwich had been?', choices: ['A crab', 'One small white feather', 'His bucket', 'A note'], answer: 1, skill: 'Detail', hint: 'It was small, white, and left behind.', explain: 'All that was left was an empty spot and one small white feather — the thief\u2019s first clue.' },
      { q: 'What were the footprints in the sand like?', choices: ['Big and round', 'Three-toed, like little arrows', 'Shaped like paws', 'There were no footprints'], answer: 1, skill: 'Detail', hint: 'They had three toes.', explain: 'The three-toed, arrow-shaped footprints were bird tracks — another clue!' },
      { q: 'Who took the sandwich?', choices: ['Zoe', 'Mom', 'A seagull', 'A crab'], answer: 2, skill: 'Detail', hint: 'CAW!', explain: 'The seagull on the umbrella had peanut butter on its beak — caught white-beaked!' },
      { q: 'Which clue best PROVED who the thief was?', choices: ['The empty spot', 'The peanut butter on the seagull\u2019s beak', 'The bucket of water', 'The beach umbrella'], answer: 1, skill: 'Inference', hint: 'Which clue connects the thief to the sandwich itself?', explain: 'Feathers and footprints said "bird," but the peanut butter on the beak tied the seagull to Jonah\u2019s exact sandwich. Case closed!' },
      { q: 'What lesson did Jonah learn?', choices: ['Never go to the beach', 'Keep food protected when seagulls are around', 'Seagulls prefer jelly', 'Always share your lunch'], answer: 1, skill: 'Inference', hint: 'What did he say he would do next time?', explain: 'Jonah decided to pack his sandwich inside the cooler next time — where sneaky seagulls cannot reach it.' }
    ]
  },
  {
    id: 'my-note',
    title: 'The Secret Note',
    paras: [
      'Taped inside Lily\u2019s desk was a folded note that read: "Look where the class fish swims." Lily\u2019s heart thumped. A treasure hunt! By the fish tank she found a second note: "Now look where we hang our coats." Behind the coat hooks, a third note waited: "Last stop: the reading corner, under the softest pillow."',
      'Lily lifted the big yellow pillow. There sat a small box with a bow, and a card signed by the whole class. Inside was a bracelet of blue beads — her favorite color. It was Lily\u2019s last week before moving to a new town. Her classmates had turned goodbye into a treasure hunt, so her last week would start with a smile.'
    ],
    questions: [
      { q: 'Where did Lily find the first note?', choices: ['By the fish tank', 'Taped inside her desk', 'Under a pillow', 'In her backpack'], answer: 1, skill: 'Detail', hint: 'Where does the story begin?', explain: 'The first note was taped inside Lily\u2019s desk — that is what started the treasure hunt.' },
      { q: 'In what order did Lily follow the clues?', choices: ['Desk, fish tank, coat hooks, reading corner', 'Reading corner, desk, fish tank, coat hooks', 'Fish tank, desk, reading corner, coat hooks', 'Coat hooks, fish tank, desk, reading corner'], answer: 0, skill: 'Detail', hint: 'Each note named the NEXT stop.', explain: 'The trail went desk \u2192 fish tank \u2192 coat hooks \u2192 reading corner, one clue leading to the next.' },
      { q: 'What was in the box?', choices: ['A goldfish', 'A bracelet of blue beads', 'A pillow', 'Candy'], answer: 1, skill: 'Detail', hint: 'It was Lily\u2019s favorite color.', explain: 'Under the pillow was a box with a blue-bead bracelet and a card signed by the whole class.' },
      { q: 'Why did the class make the treasure hunt?', choices: ['It was Lily\u2019s birthday', 'Lily was moving away, and they wanted to say goodbye in a fun way', 'They lost her bracelet', 'It was a school contest'], answer: 1, skill: 'Inference', hint: 'What was happening in Lily\u2019s last week?', explain: 'Lily was moving to a new town, so her classmates turned their goodbye gift into a happy treasure hunt.' },
      { q: 'How do you think Lily felt at the end?', choices: ['Bored', 'Loved and happy, maybe a little teary', 'Angry about moving', 'Confused by the notes'], answer: 1, skill: 'Inference', hint: 'Her whole class signed the card.', explain: 'A surprise gift and a card from everyone showed Lily how much her class cared — a warm, happy feeling to carry to her new town.' }
    ]
  },
  {
    id: 'my-mailbox',
    title: 'The Mixed-Up Package',
    paras: [
      'A package sat on the Khan family\u2019s porch, but the label was smudged with rain. They could only read: "\u2026 Maple Street" and a first name, "J-something." "It is not ours," said Jasmine, "but maybe we can figure out whose it is." She got paper and made a list of neighbors on Maple Street whose names started with J: Mr. Jones at number 12, Baby Jack at 15, and Coach Jimenez at 21.',
      'The box rattled softly, and one corner smelled like kibble. Mr. Jones had no pets. Baby Jack was a baby. But Coach Jimenez had just adopted a floppy-eared puppy named Churro! Jasmine carried the box to number 21. Churro spun in happy circles the whole time Coach opened his new dog treats. "You are quite the detective," Coach laughed.'
    ],
    questions: [
      { q: 'Why couldn\u2019t the Khans read the label?', choices: ['It was written in code', 'Rain had smudged it', 'The dog chewed it', 'It fell off'], answer: 1, skill: 'Detail', hint: 'The weather did it.', explain: 'Rain had smudged the label, leaving only part of the street name and a first initial.' },
      { q: 'What did Jasmine do first to solve the mystery?', choices: ['Opened the package', 'Made a list of neighbors whose names start with J', 'Called the police', 'Put the box back'], answer: 1, skill: 'Detail', hint: 'She got paper and started writing.', explain: 'Jasmine listed all the Maple Street neighbors with J names — narrowing down the suspects like a detective.' },
      { q: 'Which clues pointed to the real owner?', choices: ['The box rattled and smelled like kibble', 'The box was heavy and cold', 'The box was blue', 'The box hummed'], answer: 0, skill: 'Detail', hint: 'Use your nose and ears.', explain: 'A rattling box that smelled like kibble meant pet food — so the owner needed a pet.' },
      { q: 'Why did Jasmine rule out Mr. Jones and Baby Jack?', choices: ['They were not home', 'Neither one had a pet that needed treats', 'They lived on a different street', 'They did not like packages'], answer: 1, skill: 'Inference', hint: 'The box held dog treats. Who could NOT need those?', explain: 'Mr. Jones had no pets and Baby Jack was a baby — but Coach Jimenez had a brand-new puppy. Only one suspect fit the clues!' },
      { q: 'What is the big idea of this story?', choices: ['Never touch a package', 'Careful thinking can solve everyday mysteries', 'Puppies love mail', 'Rain ruins everything'], answer: 1, skill: 'Main idea', hint: 'What did Coach call Jasmine at the end?', explain: 'Jasmine used clues and careful thinking to get the package home — proving anyone can be a detective in everyday life.' }
    ]
  },
  {
    id: 'my-plant',
    title: 'The Droopy Plant Mystery',
    paras: [
      'Room 6 had a classroom plant named Fernie, and Fernie was in trouble. His leaves were turning yellow and drooping like sad flags. "But we take such good care of him!" said the class. Ms. Park made a chart to investigate. It turned out Fernie was getting LOTS of care. Table One watered him on Mondays. Table Two watered him on Wednesdays. Table Three watered him on Fridays!',
      '"Aha," said Ms. Park. "Can a plant have too much of a good thing?" The class learned that too much water can drown a plant\u2019s roots. They made a new plan: one water helper each week, and a craft stick in the soil to check if Fernie was thirsty first. Three weeks later, Fernie stood tall and green — the happiest plant in school.'
    ],
    questions: [
      { q: 'What was wrong with Fernie?', choices: ['His leaves were yellow and drooping', 'He was growing too fast', 'Bugs were eating him', 'He fell off the shelf'], answer: 0, skill: 'Detail', hint: 'His leaves looked like sad flags.', explain: 'Fernie\u2019s leaves were turning yellow and drooping — a sign something was wrong.' },
      { q: 'What did Ms. Park make to investigate?', choices: ['A magnifying glass', 'A chart', 'A new pot', 'A rain gauge'], answer: 1, skill: 'Detail', hint: 'It helped the class see the watering schedule.', explain: 'Ms. Park made a chart, which revealed that three different tables were all watering Fernie every week.' },
      { q: 'What was really hurting Fernie?', choices: ['Not enough sun', 'Too much water', 'Cold air', 'Loud noises'], answer: 1, skill: 'Inference', hint: 'Three tables, three watering days\u2026', explain: 'Everyone thought they were helping, but three waterings a week was too much — the extra water was drowning Fernie\u2019s roots.' },
      { q: 'What was surprising about the answer to this mystery?', choices: ['Someone was hurting Fernie on purpose', 'Too much CARE was the problem', 'Fernie was fake', 'The janitor did it'], answer: 1, skill: 'Inference', hint: 'Can a plant have too much of a good thing?', explain: 'The surprise was that kindness caused the trouble — everyone caring at once added up to too much water.' },
      { q: 'How did the class fix the problem?', choices: ['They stopped watering forever', 'One helper per week, and a stick to check the soil first', 'They bought a new plant', 'They moved Fernie outside'], answer: 1, skill: 'Detail', hint: 'The new plan had two parts.', explain: 'The class chose one water helper each week and used a craft stick to check if the soil was dry before watering.' }
    ]
  },
  {
    id: 'my-backwards',
    title: 'The Backwards Message',
    paras: [
      'A strange paper appeared on the classroom door of Room 9. The writing looked like alien code: "YTRAP AZZIP." "It\u2019s gibberish," said Ben. "It\u2019s a code," said Ava. She stared at it, turning her head this way and that. Then she noticed something. The last four letters, read from the end backward, spelled A-Z-Z-I-P\u2026 pizza? "Read it in a mirror!" Ava cried.',
      'The class held the paper up to the window\u2019s reflection. Backwards writing turns right again in a mirror — and now the message was clear as day: PIZZA PARTY. Just then their teacher walked in carrying four warm, flat boxes that smelled amazing. "You solved it!" he said. "I wrote it backwards so the surprise would last a little longer."'
    ],
    questions: [
      { q: 'What did the strange paper say?', choices: ['YTRAP AZZIP', 'PIZZA NOW', 'ROOM NINE', 'APRIL FOOLS'], answer: 0, skill: 'Detail', hint: 'It looked like alien code.', explain: 'The paper said "YTRAP AZZIP" — which looked like nonsense at first.' },
      { q: 'How was the message really written?', choices: ['In Spanish', 'Backwards', 'In invisible ink', 'In tiny letters'], answer: 1, skill: 'Detail', hint: 'A mirror made it readable.', explain: 'The message was written backwards — "YTRAP AZZIP" is "PIZZA PARTY" reversed.' },
      { q: 'What clue helped Ava crack the code?', choices: ['The teacher told her', 'The last letters spelled "pizza" backwards', 'She smelled pizza', 'The paper was greasy'], answer: 1, skill: 'Inference', hint: 'She read A-Z-Z-I-P from the end.', explain: 'Ava noticed that reading the letters in reverse spelled "pizza" — which meant the whole message must be backwards.' },
      { q: 'Why does a mirror fix backwards writing?', choices: ['Mirrors are magic', 'A mirror flips the image, turning it right again', 'Mirrors make letters bigger', 'It does not really work'], answer: 1, skill: 'Inference', hint: 'The mirror flips things left-to-right.', explain: 'A mirror flips everything left-to-right. Writing that is already flipped gets flipped BACK — so it reads normally.' },
      { q: 'Why did the teacher write the message backwards?', choices: ['He made a mistake', 'To make the surprise last longer with a fun puzzle', 'He writes everything backwards', 'To trick the principal'], answer: 1, skill: 'Detail', hint: 'He said so at the end.', explain: 'The teacher said he wrote it backwards so the surprise would last a little longer — a puzzle before the party!' }
    ]
  },
  {
    id: 'my-lunchbox',
    title: 'The Switched Lunchboxes',
    paras: [
      'At lunch, Miguel opened his red lunchbox and froze. Inside was a tuna sandwich — but Miguel HATED tuna. Yesterday\u2019s leftover noodles were supposed to be in there. He checked the outside. Red box, silver clasp, small dent on the corner\u2026 wait. HIS red box had a sticker of a rocket on the bottom. This one had no sticker. This was not his lunchbox!',
      'Miguel scanned the cafeteria. At the end of the table, a girl named Sofia stared sadly into an identical red box, holding up his noodles with a puzzled look. Their eyes met, and they both burst out laughing. "Trade?" they said at the same time. From then on, Miguel\u2019s rocket sticker had a friend: Sofia drew a shark on hers.'
    ],
    questions: [
      { q: 'What made Miguel freeze at lunch?', choices: ['His lunchbox was empty', 'He found a tuna sandwich instead of his noodles', 'His lunchbox was blue', 'Someone took his seat'], answer: 1, skill: 'Detail', hint: 'He HATED what was inside.', explain: 'Miguel expected his leftover noodles but found a tuna sandwich — and he hated tuna.' },
      { q: 'How did Miguel prove the box was not his?', choices: ['His name was missing', 'There was no rocket sticker on the bottom', 'It was a different color', 'It had no dent'], answer: 1, skill: 'Detail', hint: 'He checked the bottom of the box.', explain: 'Miguel\u2019s box had a rocket sticker on the bottom. This identical box had none — so it belonged to someone else.' },
      { q: 'How had the mix-up most likely happened?', choices: ['Someone played a prank', 'Two identical red boxes got swapped by accident', 'The lunch lady switched them', 'Miguel grabbed a stranger\u2019s box on the bus'], answer: 1, skill: 'Inference', hint: 'Sofia\u2019s box looked exactly like his.', explain: 'The boxes were identical — red with silver clasps — so somewhere along the way they got accidentally swapped.' },
      { q: 'How did Sofia feel before the trade?', choices: ['Delighted with the noodles', 'Sad and puzzled about her lunch', 'Angry at Miguel', 'Too full to eat'], answer: 1, skill: 'Inference', hint: 'She stared sadly and looked puzzled.', explain: 'Sofia stared sadly into the box and held up the mystery noodles with a puzzled look — she was just as confused as Miguel.' },
      { q: 'How did the kids stop future mix-ups?', choices: ['They bought new boxes', 'They marked their boxes with different stickers', 'They stopped bringing lunch', 'They ate together every day'], answer: 1, skill: 'Detail', hint: 'A rocket and a shark.', explain: 'Miguel already had his rocket sticker, and Sofia drew a shark on hers — now the identical boxes were easy to tell apart.' }
    ]
  }
];
