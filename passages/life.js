// Everyday Life — 10 passages. The first 4 live in ../passages.js (the original library).
// To add a story: append an object to NEW_PASSAGES below.
import { PASSAGES as LEGACY } from '../passages.js';

const KEEP = ['newkid', 'lemonade', 'librarybook', 'garden'];

const NEW_PASSAGES = [
  {
    id: 'wobblytooth',
    title: 'The Wobbly Tooth',
    paras: [
      'Sam\u2019s front tooth had been wobbly for a week. He wiggled it at breakfast. He wiggled it on the bus. During math, it felt looser than ever, and Sam started to worry. What if it fell out right in front of everyone? He kept his mouth closed tight, even when he knew the answer to a question.',
      'At lunch, Sam bit into a crunchy apple — and there it was! His tooth sat in his hand like a tiny pearl. The whole table cheered. His teacher gave him a small treasure box to keep it safe. Losing a tooth in front of everyone was not scary after all. It was the best part of his day.'
    ],
    questions: [
      { q: 'What was Sam worried about?', choices: ['Failing his math test', 'His tooth falling out in front of everyone', 'Missing the bus', 'Losing his lunch box'], answer: 1, skill: 'Detail', hint: 'Why did he keep his mouth closed tight?', explain: 'Sam worried his wobbly tooth would fall out in front of everyone, so he kept his mouth shut tight.' },
      { q: 'Why didn\u2019t Sam answer questions in math?', choices: ['He did not know the answers', 'He was keeping his mouth closed', 'He was sleeping', 'The teacher never called on him'], answer: 1, skill: 'Inference', hint: 'He knew the answer — but what was he afraid would happen if he opened his mouth?', explain: 'Sam knew the answers, but he kept his mouth closed tight because he was afraid his tooth would fall out.' },
      { q: 'What made the tooth finally come out?', choices: ['Biting a crunchy apple', 'Wiggling it on the bus', 'A sneeze', 'The teacher pulled it'], answer: 0, skill: 'Detail', hint: 'It happened at lunch.', explain: 'When Sam bit into a crunchy apple at lunch, the tooth popped right out.' },
      { q: 'How did the other kids act when the tooth came out?', choices: ['They laughed at Sam', 'They cheered for him', 'They did not notice', 'They ran away'], answer: 1, skill: 'Detail', hint: 'Look at what the whole table did.', explain: 'The whole table cheered — losing a tooth was something to celebrate, not something embarrassing.' },
      { q: 'What lesson did Sam learn?', choices: ['Never eat apples', 'Things we worry about are often not so bad', 'Teeth should not wiggle', 'Math is scary'], answer: 1, skill: 'Main idea', hint: 'Sam worried all day — then what happened?', explain: 'Sam spent all day worrying, but the moment he feared turned into the best part of his day. Worries are often bigger in our heads than in real life.' }
    ]
  },
  {
    id: 'blanketfort',
    title: 'The Rainy Day Fort',
    paras: [
      'Rain tapped on the windows all Saturday morning. "I\u2019m bored," sighed Nora. Then she had an idea. She pulled every blanket off her bed and dragged the kitchen chairs into the living room. Soon a wobbly fort stood in the corner, with a flashlight glowing inside like a campfire.',
      'Her little brother Theo peeked in. "Can I come in too?" Nora almost said no — it was HER fort. But the fort did feel a bit empty. "Only if you bring snacks," she said. Theo raced back with crackers and two juice boxes. They read comic books in the glow of the flashlight while the rain drummed on. The fort was better with two.'
    ],
    questions: [
      { q: 'Why did Nora build the fort?', choices: ['It was raining and she was bored', 'Theo asked her to', 'She was camping', 'Her bed was broken'], answer: 0, skill: 'Detail', hint: 'What was the weather like that morning?', explain: 'Rain kept Nora inside and she was bored — so she came up with the fort idea.' },
      { q: 'What did Nora use to build the fort?', choices: ['Boxes and tape', 'Blankets and kitchen chairs', 'Pillows and books', 'A tent from the garage'], answer: 1, skill: 'Detail', hint: 'She took things from her bed and the kitchen.', explain: 'Nora pulled blankets off her bed and dragged in kitchen chairs to build her fort.' },
      { q: 'What did Nora almost say to Theo?', choices: ['Yes', 'No', 'Bring blankets', 'Go away forever'], answer: 1, skill: 'Detail', hint: 'It was HER fort, after all.', explain: 'Nora almost said no because she built the fort herself — but then she changed her mind.' },
      { q: 'Why do you think Nora let Theo in?', choices: ['Mom made her', 'The fort felt a bit empty alone', 'Theo started crying', 'She was afraid of the dark'], answer: 1, skill: 'Inference', hint: 'How did the fort feel with just one person?', explain: 'The story says the fort felt a bit empty. Nora realized having company might be nicer than having it all to herself.' },
      { q: 'What is the big idea of this story?', choices: ['Rainy days are boring', 'Forts need flashlights', 'Fun is better when you share it', 'Little brothers are pests'], answer: 2, skill: 'Main idea', hint: 'Look at the very last sentence.', explain: 'The last line says it all: the fort was better with two. Sharing made the fun bigger, not smaller.' }
    ]
  },
  {
    id: 'bigrace',
    title: 'The Big Race',
    paras: [
      'It was field day, and Marcus had practiced for the big race all month. When the whistle blew, he shot ahead of everyone. Halfway around the track, he heard a thud behind him. His friend Deja had tripped and fallen. The other runners zoomed past her.',
      'Marcus slowed down. He looked at the finish line, so close. Then he turned around and ran back. "Grab my hand," he said, pulling Deja up. They crossed the finish line together — dead last. But the crowd clapped louder for them than for the winner. Marcus did not get a ribbon that day. He got something better.'
    ],
    questions: [
      { q: 'What happened to Deja during the race?', choices: ['She won the race', 'She tripped and fell', 'She forgot her shoes', 'She took a wrong turn'], answer: 1, skill: 'Detail', hint: 'Marcus heard a thud behind him.', explain: 'Halfway around the track, Deja tripped and fell while the other runners passed her.' },
      { q: 'What choice did Marcus have to make?', choices: ['Which shoes to wear', 'To keep racing or go back and help', 'To run or walk', 'To race again next year'], answer: 1, skill: 'Inference', hint: 'He looked at the finish line, then turned around.', explain: 'Marcus had to choose between winning the race he had practiced for and helping his fallen friend. He chose his friend.' },
      { q: 'Why did the crowd clap so loudly for Marcus and Deja?', choices: ['They finished first', 'They admired Marcus\u2019s kindness', 'It started to rain', 'They wanted the race to end'], answer: 1, skill: 'Inference', hint: 'They came in last — so the clapping was for something else.', explain: 'The crowd was not clapping for speed. They were clapping for kindness — Marcus gave up his win to help a friend.' },
      { q: 'What do you think Marcus got that was "better" than a ribbon?', choices: ['A trophy', 'A new pair of shoes', 'The good feeling of helping a friend', 'A second race'], answer: 2, skill: 'Inference', hint: 'It is not something you can hold in your hand.', explain: 'Marcus lost the ribbon but kept his friend and did the right thing. That proud, warm feeling is worth more than a prize.' },
      { q: 'What is this story mostly about?', choices: ['How to win races', 'Friendship matters more than winning', 'Field day games', 'Running shoes'], answer: 1, skill: 'Main idea', hint: 'Think about the choice Marcus made and how it ended.', explain: 'The story shows that being a good friend is a bigger win than crossing the finish line first.' }
    ]
  },
  {
    id: 'showandtell',
    title: 'Show and Tell',
    paras: [
      'On Friday it was Priya\u2019s turn for show and tell. She brought her rock collection, but her stomach flipped like a pancake. Speaking in front of the whole class made her hands shake. At recess, she almost asked her teacher to skip her turn.',
      'Then Priya remembered what her swim coach always said: "Being brave doesn\u2019t mean you\u2019re not scared. It means you do it anyway." Priya took a deep breath and walked to the front. Her voice was quiet at first, then stronger. When she showed her rock that sparkled like glitter, the class said "Whoa!" Everyone had questions. Priya smiled all the way back to her seat.'
    ],
    questions: [
      { q: 'How did Priya feel about show and tell at first?', choices: ['Excited and proud', 'Nervous and scared', 'Bored and sleepy', 'Angry at her teacher'], answer: 1, skill: 'Detail', hint: 'Her stomach flipped like a pancake.', explain: 'Her flipping stomach and shaking hands show Priya was nervous about speaking in front of the class.' },
      { q: 'What did Priya almost do at recess?', choices: ['Lose her rocks', 'Ask her teacher to skip her turn', 'Go home early', 'Trade her collection'], answer: 1, skill: 'Detail', hint: 'She wanted a way out of her turn.', explain: 'Priya was so nervous that she almost asked her teacher to skip her turn.' },
      { q: 'What did the swim coach\u2019s words mean?', choices: ['Brave people are never scared', 'You can be scared and still do the hard thing', 'Swimming is easy', 'Never try scary things'], answer: 1, skill: 'Inference', hint: '"It means you do it anyway."', explain: 'Being brave is not about having no fear — it is about doing the hard thing even while you feel scared.' },
      { q: 'How do we know the class liked Priya\u2019s show and tell?', choices: ['They said "Whoa!" and asked questions', 'They fell asleep', 'They went to recess', 'The story does not say'], answer: 0, skill: 'Inference', hint: 'What happened when she showed the sparkly rock?', explain: 'The class said "Whoa!" and everyone had questions — sure signs they thought her rocks were cool.' },
      { q: 'What is the big idea of this story?', choices: ['Rocks make the best collections', 'Courage means doing it even when you are scared', 'Never speak in class', 'Recess is the best part of school'], answer: 1, skill: 'Main idea', hint: 'Think about what helped Priya walk to the front.', explain: 'Priya was scared, but she did it anyway — and it went wonderfully. That is what courage looks like.' }
    ]
  },
  {
    id: 'tamales',
    title: 'Tamale Day',
    paras: [
      'Every December, Abuela turns her kitchen into a tamale factory, and this year Mateo was finally old enough to help. Abuela gave everyone a job. Mama cooked the filling. Tío Rico softened the corn husks in warm water. Mateo\u2019s job was spreading the masa — the soft corn dough — onto each husk, nice and even.',
      'Mateo\u2019s first tamale looked like a lumpy pillow. His second was too skinny. "Despacio," Abuela said gently. "Slowly." By the tenth one, Mateo\u2019s tamales looked almost as neat as hers. When the steaming pot finally opened, the whole family cheered. Mateo bit into a warm tamale he had made himself. It tasted like December.'
    ],
    questions: [
      { q: 'What was Mateo\u2019s job?', choices: ['Cooking the filling', 'Spreading the masa on the husks', 'Softening the husks', 'Watching the pot'], answer: 1, skill: 'Detail', hint: 'His job used the soft corn dough.', explain: 'Mateo\u2019s job was spreading the masa — the corn dough — evenly onto each husk.' },
      { q: 'Why was this year special for Mateo?', choices: ['He was finally old enough to help', 'It snowed in the kitchen', 'He ate the most tamales', 'Abuela visited for the first time'], answer: 0, skill: 'Detail', hint: 'What could Mateo do this year that he could not before?', explain: 'This year Mateo was finally old enough to have his own job in the tamale kitchen.' },
      { q: 'What did Abuela mean by "despacio"?', choices: ['Give up', 'Go slowly', 'More dough', 'Delicious'], answer: 1, skill: 'Detail', hint: 'The story tells you right after she says it.', explain: 'Despacio means "slowly." Abuela was reminding Mateo to take his time instead of rushing.' },
      { q: 'How did Mateo get better at making tamales?', choices: ['He watched a video', 'He kept practicing, one after another', 'Abuela did them for him', 'He used a machine'], answer: 1, skill: 'Inference', hint: 'Compare his first tamale to his tenth.', explain: 'His first tries were lumpy and skinny, but by the tenth his tamales looked almost like Abuela\u2019s. Practice made him better.' },
      { q: 'What does "it tasted like December" mean?', choices: ['The tamale was cold', 'The tamale tasted like a special family time', 'December is a flavor', 'It needed more salt'], answer: 1, skill: 'Inference', hint: 'What happens in Abuela\u2019s kitchen every December?', explain: 'Tamale day happens every December with the whole family. The taste reminded Mateo of that warm, special tradition.' }
    ]
  },
  {
    id: 'foundwallet',
    title: 'The Wallet on the Bench',
    paras: [
      'Kenji and his dad were leaving the park when Kenji spotted a brown wallet on a bench. Inside was more money than Kenji had ever seen, and a photo of a lady with a fluffy white dog. "We could buy so much ice cream," Kenji whispered. Dad raised an eyebrow. "Is it our money?" he asked.',
      'Kenji thought about how he felt when he lost his favorite cap — like a rock was sitting in his belly. Someone was feeling that way right now. They took the wallet to the park office. Just then, a worried lady hurried in, a fluffy white dog trotting behind her. Her whole face changed when she saw the wallet. "You found it!" she cried. She shook Kenji\u2019s hand. The rock-in-the-belly feeling was gone — for both of them.'
    ],
    questions: [
      { q: 'What did Kenji find on the bench?', choices: ['A fluffy white dog', 'A brown wallet', 'An ice cream cone', 'His favorite cap'], answer: 1, skill: 'Detail', hint: 'It was brown and had money inside.', explain: 'Kenji found a brown wallet with money and a photo of a lady with her dog.' },
      { q: 'What did Dad mean when he asked, "Is it our money?"', choices: ['He wanted to count it', 'Keeping it would be wrong because it belongs to someone else', 'He wanted to buy ice cream', 'He thought it was fake money'], answer: 1, skill: 'Inference', hint: 'Dad was helping Kenji think about the right thing to do.', explain: 'Dad\u2019s question reminded Kenji that the money belonged to someone else — keeping it would be like taking it.' },
      { q: 'What helped Kenji decide what to do?', choices: ['He remembered losing his favorite cap', 'Dad promised him ice cream', 'The dog barked at him', 'A sign in the park'], answer: 0, skill: 'Detail', hint: 'He remembered a feeling like a rock in his belly.', explain: 'Kenji remembered how awful it felt to lose his cap — and realized the wallet\u2019s owner felt that way right now.' },
      { q: 'How did they know the lady was the wallet\u2019s owner?', choices: ['She showed a ticket', 'She matched the photo — and had the fluffy white dog', 'She was crying', 'The worker knew her'], answer: 1, skill: 'Inference', hint: 'Remember what was in the photo inside the wallet.', explain: 'The photo in the wallet showed a lady with a fluffy white dog — and there she was, dog and all!' },
      { q: 'What is the big idea of this story?', choices: ['Never sit on park benches', 'Doing the honest thing feels good', 'Ice cream costs too much', 'Dogs can find lost things'], answer: 1, skill: 'Main idea', hint: 'How did Kenji feel at the very end?', explain: 'Kenji returned what was not his, and the bad feeling disappeared for everyone. Honesty made both of them feel light and happy.' }
    ]
  }
];

export const PASSAGES = [...KEEP.map(id => LEGACY.find(p => p.id === id)), ...NEW_PASSAGES];
