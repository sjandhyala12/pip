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
  },
  {
    id: 'my-locker', level: 2,
    title: 'The Locker Mix-Up',
    paras: [
      'Ella spun the dial on her locker, but it would not open. She tried her combination once, twice, three times. Nothing. Then she noticed something odd: there was a small green sticker on the locker door. Ella\u2019s locker never had a green sticker.',
      'She looked closely at the number on the door: 114. But her locker was number 141! In her hurry that morning, she had walked to the wrong row. Ella laughed at herself, moved one row over, and her real locker \u2014 number 141 \u2014 popped open on the very first try. Mystery solved: the lock was fine all along. Ella had just been standing in the wrong place.'
    ],
    questions: [
      { q: 'What problem did Ella have at first?', choices: ['She lost her books', 'Her locker would not open', 'She forgot her lunch', 'She was late for class'], answer: 1, skill: 'Detail', hint: 'She kept spinning the dial.', explain: 'Ella\u2019s locker would not open, no matter how many times she tried her combination.' },
      { q: 'What odd clue did Ella notice?', choices: ['A green sticker on the door', 'A broken dial', 'A note taped inside', 'A missing handle'], answer: 0, skill: 'Detail', hint: 'Her locker never had one.', explain: 'She noticed a green sticker that her own locker never had \u2014 an important clue.' },
      { q: 'What was the real reason the locker would not open?', choices: ['The lock was broken', 'She was at the wrong locker', 'Someone changed her combination', 'The door was stuck'], answer: 1, skill: 'Inference', hint: 'Compare the number on the door to her real number.', explain: 'The locker said 114, but Ella\u2019s was 141 \u2014 she was simply standing at the wrong locker.' },
      { q: 'What was Ella\u2019s real locker number?', choices: ['114', '141', '411', '144'], answer: 1, skill: 'Detail', hint: 'It is the one that finally opened.', explain: 'Her real locker was number 141, and it opened on the first try.' },
      { q: 'What is the big idea of this mystery?', choices: ['Locks break often', 'Looking closely at clues can solve a puzzle', 'Green stickers are bad luck', 'School lockers are hard'], answer: 1, skill: 'Main idea', hint: 'What helped Ella figure it out?', explain: 'By noticing the sticker and checking the number, Ella solved the mix-up. Careful clue-reading solves the puzzle.' }
    ]
  },
  {
    id: 'my-museum', level: 3,
    title: 'The Museum Mystery',
    paras: [
      'On the class trip to the museum, Ravi noticed something strange about the giant dinosaur display. The sign said the skeleton had been standing in that exact spot for fifty years. But the floor beneath it was bright and shiny, while the floor everywhere else in the room was faded and scuffed from years and years of footsteps.',
      'Ravi raised his hand and asked the guide about it. The guide smiled, looking surprised. \u201cYou have sharp eyes,\u201d she said. \u201cThe real skeleton was moved to a new room just last month. This one is brand new \u2014 a copy made from plastic bones.\u201d Ravi had spotted the truth from a single clue: the floor under a fifty-year-old display would never look that new. A good detective, he decided, notices the things that do not fit.'
    ],
    questions: [
      { q: 'What did the sign near the skeleton claim?', choices: ['The skeleton was fake', 'The skeleton had stood there for fifty years', 'The museum was closing', 'The skeleton could move'], answer: 1, skill: 'Detail', hint: 'It was about time.', explain: 'The sign said the skeleton had been standing in that exact spot for fifty years.' },
      { q: 'What clue did Ravi notice?', choices: ['The floor under the skeleton was bright and shiny', 'The skeleton was too small', 'The lights were off', 'The sign was torn'], answer: 0, skill: 'Detail', hint: 'Compare that floor to the rest of the room.', explain: 'Ravi saw that the floor under the skeleton was bright and new, unlike the worn floor everywhere else.' },
      { q: 'Why was the bright floor so strange?', choices: ['Floors are always shiny', 'A fifty-year-old display should have a worn, faded floor beneath it', 'The room was newly built', 'Someone had just mopped'], answer: 1, skill: 'Why', hint: 'Fifty years of footsteps would do what to a floor?', explain: 'If the display had truly stood there fifty years, the floor beneath would be worn and faded like the rest \u2014 not bright and new.' },
      { q: 'What was the real story behind the skeleton?', choices: ['It had been there fifty years', 'It was a new plastic copy; the real one was moved last month', 'It was stolen', 'It was never real'], answer: 1, skill: 'Inference', hint: 'The guide explained it.', explain: 'The real skeleton was moved to a new room last month, and this one was a brand-new plastic copy \u2014 which is why the floor was new.' },
      { q: 'What is the big idea of this mystery?', choices: ['Museums are boring', 'A good detective notices the things that do not fit', 'Dinosaurs are huge', 'Plastic bones are fake'], answer: 1, skill: 'Main idea', hint: 'What did Ravi decide at the end?', explain: 'Ravi solved it by spotting something that did not fit. The big idea: good detectives notice what does not belong.' }
    ]
  },
  {
    id: 'my-lighthouse', level: 3,
    title: 'The Lighthouse Signal',
    paras: [
      'Every summer, Grandpa told Nora that the old lighthouse across the bay was empty and dark. So one foggy evening, Nora was puzzled to see a light blinking from its tower \u2014 on, off, on, off, in a steady pattern. Nobody was supposed to be out there at all.',
      'Nora grabbed a flashlight and carefully counted the blinks: three short, three long, three short. She had read about that pattern in a book. It was an old distress signal that means \u201chelp!\u201d Nora ran to tell her grandfather, who quickly called the harbor rescue team. It turned out that two fishermen had gotten stranded on the rocks and climbed up to the lighthouse to signal for help. Because Nora noticed the pattern and knew what it meant, the fishermen were rescued that very night.'
    ],
    questions: [
      { q: 'What had Grandpa always said about the lighthouse?', choices: ['It was full of visitors', 'It was empty and dark', 'It was Nora\u2019s to use', 'It was going to be torn down'], answer: 1, skill: 'Detail', hint: 'That is why the light was surprising.', explain: 'Grandpa always said the old lighthouse was empty and dark.' },
      { q: 'Why was the blinking light so puzzling to Nora?', choices: ['It was the wrong color', 'No one was supposed to be out there', 'It was too bright', 'It was daytime'], answer: 1, skill: 'Inference', hint: 'Remember what Grandpa had told her.', explain: 'Since the lighthouse was supposed to be empty and dark, a blinking light meant someone unexpected was there.' },
      { q: 'What pattern of blinks did Nora count?', choices: ['Three short, three long, three short', 'Two long, two short', 'One blink over and over', 'Five quick flashes'], answer: 0, skill: 'Detail', hint: 'She had read about it in a book.', explain: 'Nora counted three short, three long, three short \u2014 a pattern she recognized from a book.' },
      { q: 'What did the blinking pattern mean?', choices: ['\u201cGo away\u201d', '\u201cGood night\u201d', '\u201cHelp!\u201d \u2014 a distress signal', '\u201cThe lighthouse is open\u201d'], answer: 2, skill: 'Detail', hint: 'It is why she called for rescue.', explain: 'The pattern was an old distress signal that means \u201chelp!\u201d' },
      { q: 'What is the big idea of this mystery?', choices: ['Lighthouses are scary', 'Noticing a clue and knowing what it means can save the day', 'Fog is dangerous', 'Fishermen should stay home'], answer: 1, skill: 'Main idea', hint: 'What did Nora\u2019s knowledge lead to?', explain: 'Nora noticed the signal and knew its meaning, so the fishermen were rescued. Knowing what a clue means can save the day.' }
    ]
  },
  {
    id: 'my-recipe', level: 3,
    title: 'The Missing Recipe',
    paras: [
      'Grandma\u2019s famous cookies had a secret ingredient, and she had always promised to teach Max someday. But when Grandma got sick and had to stay in the hospital for a week, Max wanted to bake the cookies himself to cheer her up. The trouble was, the recipe card was missing its most important line \u2014 the secret ingredient had been smudged away.',
      'So Max became a detective in the kitchen. He sniffed the empty cookie jar: it smelled faintly of oranges. He checked the cupboard and found a jar of dried orange peel, half used, sitting right next to the flour. On the calendar, he saw that Grandma always baked on the same day she bought oranges at the market. Max was sure now. He stirred in a spoonful of orange peel, and when Grandma tasted the cookies at the hospital, her eyes went wide. \u201cYou found my secret!\u201d she laughed.'
    ],
    questions: [
      { q: 'Why did Max want to bake the cookies?', choices: ['For a school project', 'To cheer up his sick grandma', 'To sell them', 'For a contest'], answer: 1, skill: 'Detail', hint: 'Grandma was in the hospital.', explain: 'Max wanted to bake the cookies to cheer up Grandma while she was sick in the hospital.' },
      { q: 'What was wrong with the recipe card?', choices: ['It was torn in half', 'The secret ingredient was smudged away', 'It was written in another language', 'It was too old to read'], answer: 1, skill: 'Detail', hint: 'One important line was missing.', explain: 'The most important line \u2014 the secret ingredient \u2014 had been smudged off the card.' },
      { q: 'What clue did the empty cookie jar give Max?', choices: ['It smelled faintly of oranges', 'It had a note inside', 'It was cracked', 'It was full of crumbs'], answer: 0, skill: 'Detail', hint: 'He used his nose.', explain: 'The jar smelled faintly of oranges, which pointed Max toward the secret ingredient.' },
      { q: 'How did Max figure out the secret ingredient?', choices: ['He guessed randomly', 'He put clues together \u2014 the smell, the peel, the calendar', 'Grandma told him', 'He read it online'], answer: 1, skill: 'Inference', hint: 'He gathered several clues.', explain: 'Max combined the orange smell, the half-used orange peel by the flour, and the calendar to conclude the secret was orange peel.' },
      { q: 'What is the big idea of this mystery?', choices: ['Cookies are hard to bake', 'Gathering clues carefully can solve a puzzle', 'Grandmas keep secrets', 'Oranges are healthy'], answer: 1, skill: 'Main idea', hint: 'How did Max find the answer?', explain: 'Max solved the missing-ingredient mystery by gathering and piecing together clues.' }
    ]
  },
  {
    id: 'my-treehouse', level: 3,
    title: 'The Treehouse Clue',
    paras: [
      'The kids in the neighborhood shared a treehouse, and they kept a jar of coins there to buy snacks. One Saturday, the jar was completely empty. Everyone said it was not them, and they started pointing fingers. Zoe decided to figure out what really happened before anyone got blamed unfairly.',
      'She climbed up and looked around very carefully. The coins were gone, but there was no broken lock and no sign that a person had climbed up \u2014 the muddy ladder had no footprints on it at all. Then Zoe spotted a shiny coin wedged high in a nearby branch, and above it, a big, messy nest. She remembered that crows love to collect shiny things. The \u201cthief\u201d was not a person at all. A crow had been carrying the coins away, one by one, to decorate its nest.'
    ],
    questions: [
      { q: 'What did the kids keep in the jar?', choices: ['Marbles', 'Coins to buy snacks', 'Bugs', 'Buttons'], answer: 1, skill: 'Detail', hint: 'It is why it mattered when it went empty.', explain: 'They kept a jar of coins in the treehouse to buy snacks.' },
      { q: 'Why did Zoe decide to investigate?', choices: ['She wanted the coins', 'So no one would get blamed unfairly', 'She was bored', 'Her friends dared her'], answer: 1, skill: 'Why', hint: 'People were already pointing fingers.', explain: 'Kids were blaming each other, so Zoe wanted to find the truth before anyone got blamed unfairly.' },
      { q: 'What did the muddy ladder tell Zoe?', choices: ['Someone had climbed up', 'No person had climbed up \u2014 there were no footprints', 'It was about to break', 'It had been cleaned'], answer: 1, skill: 'Inference', hint: 'What was missing from the mud?', explain: 'The muddy ladder had no footprints, so no person had climbed up to take the coins.' },
      { q: 'Who was the real \u201cthief\u201d?', choices: ['A neighbor kid', 'A crow', 'A squirrel', 'The wind'], answer: 1, skill: 'Detail', hint: 'It liked shiny things and built a nest.', explain: 'A crow, which loves shiny things, had been carrying the coins to its nest.' },
      { q: 'What is the big idea of this mystery?', choices: ['Crows are pests', 'Careful clues can clear someone who was wrongly blamed', 'Treehouses are unsafe', 'Never keep coins outside'], answer: 1, skill: 'Main idea', hint: 'What did Zoe\u2019s investigating prevent?', explain: 'By reading the clues, Zoe found the real culprit and kept her friends from being blamed unfairly.' }
    ]
  },
  {
    id: 'my-garden', level: 3,
    title: 'The Garden Bandit',
    paras: [
      'Mr. Alvarez was upset. Every morning, some of the ripe tomatoes in his garden were gone, with only a few chewed bits left behind. He was sure a neighbor kid was sneaking in to take them. But his granddaughter Lucia asked if she could look for clues before he accused anyone.',
      'Lucia examined the garden like a detective. The fence had no gate left open, and the only gap under it was far too small for a person to fit through. In the soft dirt she found tiny paw prints with sharp claw marks, leading straight to a hole beneath the fence. That night, the family watched quietly from the window and saw a fat raccoon squeeze through the gap and help itself to a tomato. Lucia had solved it: the garden bandit had four legs and a striped tail, and no kid was to blame after all.'
    ],
    questions: [
      { q: 'What kept disappearing from the garden?', choices: ['Ripe tomatoes', 'Flowers', 'Garden tools', 'Water'], answer: 0, skill: 'Detail', hint: 'Only chewed bits were left.', explain: 'Every morning, ripe tomatoes were gone, with only chewed bits left behind.' },
      { q: 'Why did Lucia want to look for clues first?', choices: ['She loved tomatoes', 'So her grandfather would not blame a kid unfairly', 'She was hungry', 'Her grandfather asked her to'], answer: 1, skill: 'Why', hint: 'Mr. Alvarez was about to accuse someone.', explain: 'Lucia wanted to find the truth before her grandfather blamed a neighbor kid who might be innocent.' },
      { q: 'What did Lucia find in the soft dirt?', choices: ['A shoe print', 'Tiny paw prints with claw marks', 'A dropped tomato', 'A key'], answer: 1, skill: 'Detail', hint: 'They led to a hole under the fence.', explain: 'She found tiny paw prints with sharp claw marks leading to a hole beneath the fence.' },
      { q: 'Who was the real garden bandit?', choices: ['A neighbor kid', 'A raccoon', 'A rabbit', 'A dog'], answer: 1, skill: 'Inference', hint: 'It had a striped tail and four legs.', explain: 'The clues \u2014 and the family\u2019s late-night watch \u2014 revealed a raccoon was taking the tomatoes.' },
      { q: 'What is the big idea of this mystery?', choices: ['Raccoons are cute', 'Gather evidence before blaming someone', 'Tomatoes grow fast', 'Fences keep out everything'], answer: 1, skill: 'Main idea', hint: 'What did Lucia do before anyone was accused?', explain: 'Lucia looked for evidence before anyone was blamed, and it revealed the true culprit. Gather proof before pointing fingers.' }
    ]
  }
];
