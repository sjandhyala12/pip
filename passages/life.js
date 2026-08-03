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
      { q: 'What was Sam worried about?', choices: ['Failing his math test', 'Losing his lunch box', 'His tooth falling out in front of everyone', 'Missing the bus'], answer: 2, skill: 'Detail', hint: 'Why did he keep his mouth closed tight?', explain: 'Sam worried his wobbly tooth would fall out in front of everyone, so he kept his mouth shut tight.' },
      { q: 'Why didn\u2019t Sam answer questions in math?', choices: ['The teacher never called on him', 'He was keeping his mouth closed', 'He did not know the answers', 'He was sleeping'], answer: 1, skill: 'Inference', hint: 'He knew the answer — but what was he afraid would happen if he opened his mouth?', explain: 'Sam knew the answers, but he kept his mouth closed tight because he was afraid his tooth would fall out.' },
      { q: 'What made the tooth finally come out?', choices: ['The teacher pulled it', 'Biting a crunchy apple', 'A sneeze', 'Wiggling it on the bus'], answer: 1, skill: 'Detail', hint: 'It happened at lunch.', explain: 'When Sam bit into a crunchy apple at lunch, the tooth popped right out.' },
      { q: 'How did the other kids act when the tooth came out?', choices: ['They did not notice', 'They laughed at Sam', 'They ran away', 'They cheered for him'], answer: 3, skill: 'Detail', hint: 'Look at what the whole table did.', explain: 'The whole table cheered — losing a tooth was something to celebrate, not something embarrassing.' },
      { q: 'What lesson did Sam learn?', choices: ['Never eat apples', 'Math is scary', 'Things we worry about are often not so bad', 'Teeth should not wiggle'], answer: 2, skill: 'Main idea', hint: 'Sam worried all day — then what happened?', explain: 'Sam spent all day worrying, but the moment he feared turned into the best part of his day. Worries are often bigger in our heads than in real life.' }
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
      { q: 'Why did Nora build the fort?', choices: ['It was raining and she was bored', 'She was camping', 'Theo asked her to', 'Her bed was broken'], answer: 0, skill: 'Detail', hint: 'What was the weather like that morning?', explain: 'Rain kept Nora inside and she was bored — so she came up with the fort idea.' },
      { q: 'What did Nora use to build the fort?', choices: ['A tent from the garage', 'Blankets and kitchen chairs', 'Boxes and tape', 'Pillows and books'], answer: 1, skill: 'Detail', hint: 'She took things from her bed and the kitchen.', explain: 'Nora pulled blankets off her bed and dragged in kitchen chairs to build her fort.' },
      { q: 'What did Nora almost say to Theo?', choices: ['No', 'Yes', 'Go away forever', 'Bring blankets'], answer: 0, skill: 'Detail', hint: 'It was HER fort, after all.', explain: 'Nora almost said no because she built the fort herself — but then she changed her mind.' },
      { q: 'Why do you think Nora let Theo in?', choices: ['Mom made her', 'Theo started crying', 'She was afraid of the dark', 'The fort felt a bit empty alone'], answer: 3, skill: 'Inference', hint: 'How did the fort feel with just one person?', explain: 'The story says the fort felt a bit empty. Nora realized having company might be nicer than having it all to herself.' },
      { q: 'What is the big idea of this story?', choices: ['Rainy days are boring', 'Little brothers are pests', 'Fun is better when you share it', 'Forts need flashlights'], answer: 2, skill: 'Main idea', hint: 'Look at the very last sentence.', explain: 'The last line says it all: the fort was better with two. Sharing made the fun bigger, not smaller.' }
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
      { q: 'What happened to Deja during the race?', choices: ['She tripped and fell', 'She forgot her shoes', 'She won the race', 'She took a wrong turn'], answer: 0, skill: 'Detail', hint: 'Marcus heard a thud behind him.', explain: 'Halfway around the track, Deja tripped and fell while the other runners passed her.' },
      { q: 'What choice did Marcus have to make?', choices: ['To run or walk', 'To race again next year', 'Which shoes to wear', 'To keep racing or go back and help'], answer: 3, skill: 'Inference', hint: 'He looked at the finish line, then turned around.', explain: 'Marcus had to choose between winning the race he had practiced for and helping his fallen friend. He chose his friend.' },
      { q: 'Why did the crowd clap so loudly for Marcus and Deja?', choices: ['They wanted the race to end', 'They admired Marcus\u2019s kindness', 'They finished first', 'It started to rain'], answer: 1, skill: 'Inference', hint: 'They came in last — so the clapping was for something else.', explain: 'The crowd was not clapping for speed. They were clapping for kindness — Marcus gave up his win to help a friend.' },
      { q: 'What do you think Marcus got that was "better" than a ribbon?', choices: ['A second race', 'A new pair of shoes', 'The good feeling of helping a friend', 'A trophy'], answer: 2, skill: 'Inference', hint: 'It is not something you can hold in your hand.', explain: 'Marcus lost the ribbon but kept his friend and did the right thing. That proud, warm feeling is worth more than a prize.' },
      { q: 'What is this story mostly about?', choices: ['Running shoes', 'How to win races', 'Friendship matters more than winning', 'Field day games'], answer: 2, skill: 'Main idea', hint: 'Think about the choice Marcus made and how it ended.', explain: 'The story shows that being a good friend is a bigger win than crossing the finish line first.' }
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
      { q: 'How did Priya feel about show and tell at first?', choices: ['Nervous and scared', 'Bored and sleepy', 'Angry at her teacher', 'Excited and proud'], answer: 0, skill: 'Detail', hint: 'Her stomach flipped like a pancake.', explain: 'Her flipping stomach and shaking hands show Priya was nervous about speaking in front of the class.' },
      { q: 'What did Priya almost do at recess?', choices: ['Lose her rocks', 'Go home early', 'Trade her collection', 'Ask her teacher to skip her turn'], answer: 3, skill: 'Detail', hint: 'She wanted a way out of her turn.', explain: 'Priya was so nervous that she almost asked her teacher to skip her turn.' },
      { q: 'What did the swim coach\u2019s words mean?', choices: ['Brave people are never scared', 'You can be scared and still do the hard thing', 'Never try scary things', 'Swimming is easy'], answer: 1, skill: 'Inference', hint: '"It means you do it anyway."', explain: 'Being brave is not about having no fear — it is about doing the hard thing even while you feel scared.' },
      { q: 'How do we know the class liked Priya\u2019s show and tell?', choices: ['They said "Whoa!" and asked questions', 'They fell asleep', 'They went to recess', 'The story does not say'], answer: 0, skill: 'Inference', hint: 'What happened when she showed the sparkly rock?', explain: 'The class said "Whoa!" and everyone had questions — sure signs they thought her rocks were cool.' },
      { q: 'What is the big idea of this story?', choices: ['Recess is the best part of school', 'Rocks make the best collections', 'Courage means doing it even when you are scared', 'Never speak in class'], answer: 2, skill: 'Main idea', hint: 'Think about what helped Priya walk to the front.', explain: 'Priya was scared, but she did it anyway — and it went wonderfully. That is what courage looks like.' }
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
      { q: 'What was Mateo\u2019s job?', choices: ['Watching the pot', 'Spreading the masa on the husks', 'Cooking the filling', 'Softening the husks'], answer: 1, skill: 'Detail', hint: 'His job used the soft corn dough.', explain: 'Mateo\u2019s job was spreading the masa — the corn dough — evenly onto each husk.' },
      { q: 'Why was this year special for Mateo?', choices: ['It snowed in the kitchen', 'Abuela visited for the first time', 'He ate the most tamales', 'He was finally old enough to help'], answer: 3, skill: 'Detail', hint: 'What could Mateo do this year that he could not before?', explain: 'This year Mateo was finally old enough to have his own job in the tamale kitchen.' },
      { q: 'What did Abuela mean by "despacio"?', choices: ['Delicious', 'Go slowly', 'Give up', 'More dough'], answer: 1, skill: 'Detail', hint: 'The story tells you right after she says it.', explain: 'Despacio means "slowly." Abuela was reminding Mateo to take his time instead of rushing.' },
      { q: 'How did Mateo get better at making tamales?', choices: ['He watched a video', 'Abuela did them for him', 'He kept practicing, one after another', 'He used a machine'], answer: 2, skill: 'Inference', hint: 'Compare his first tamale to his tenth.', explain: 'His first tries were lumpy and skinny, but by the tenth his tamales looked almost like Abuela\u2019s. Practice made him better.' },
      { q: 'What does "it tasted like December" mean?', choices: ['It needed more salt', 'The tamale was cold', 'December is a flavor', 'The tamale tasted like a special family time'], answer: 3, skill: 'Inference', hint: 'What happens in Abuela\u2019s kitchen every December?', explain: 'Tamale day happens every December with the whole family. The taste reminded Mateo of that warm, special tradition.' }
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
      { q: 'What did Kenji find on the bench?', choices: ['A brown wallet', 'An ice cream cone', 'His favorite cap', 'A fluffy white dog'], answer: 0, skill: 'Detail', hint: 'It was brown and had money inside.', explain: 'Kenji found a brown wallet with money and a photo of a lady with her dog.' },
      { q: 'What did Dad mean when he asked, "Is it our money?"', choices: ['He wanted to count it', 'He thought it was fake money', 'He wanted to buy ice cream', 'Keeping it would be wrong because it belongs to someone else'], answer: 3, skill: 'Inference', hint: 'Dad was helping Kenji think about the right thing to do.', explain: 'Dad\u2019s question reminded Kenji that the money belonged to someone else — keeping it would be like taking it.' },
      { q: 'What helped Kenji decide what to do?', choices: ['Dad promised him ice cream', 'He remembered losing his favorite cap', 'A sign in the park', 'The dog barked at him'], answer: 1, skill: 'Detail', hint: 'He remembered a feeling like a rock in his belly.', explain: 'Kenji remembered how awful it felt to lose his cap — and realized the wallet\u2019s owner felt that way right now.' },
      { q: 'How did they know the lady was the wallet\u2019s owner?', choices: ['She showed a ticket', 'The worker knew her', 'She matched the photo — and had the fluffy white dog', 'She was crying'], answer: 2, skill: 'Inference', hint: 'Remember what was in the photo inside the wallet.', explain: 'The photo in the wallet showed a lady with a fluffy white dog — and there she was, dog and all!' },
      { q: 'What is the big idea of this story?', choices: ['Doing the honest thing feels good', 'Ice cream costs too much', 'Dogs can find lost things', 'Never sit on park benches'], answer: 0, skill: 'Main idea', hint: 'How did Kenji feel at the very end?', explain: 'Kenji returned what was not his, and the bad feeling disappeared for everyone. Honesty made both of them feel light and happy.' }
    ]
  },
  {
    id: 'lf-recital', level: 2,
    title: 'The Piano Recital',
    paras: [
      'Ava had practiced her piano song for weeks. But now, sitting backstage at the recital, her hands felt cold and shaky. The room was full of people. What if she forgot the notes? What if she made a mistake in front of everyone? She wished she could just disappear.',
      'When her name was called, Ava walked slowly to the piano. She took a deep breath, just like her teacher had taught her. She placed her fingers on the keys and began. The music came out one note at a time, and soon her hands remembered the way. When she finished, the whole room clapped. Ava smiled \u2014 she had been braver than she felt.'
    ],
    questions: [
      { q: 'How long had Ava practiced her song?', choices: ['A whole year', 'Weeks', 'One day', 'A few minutes'], answer: 1, skill: 'Detail', hint: 'It is in the first sentence.', explain: 'The story says Ava had practiced her piano song for weeks.' },
      { q: 'Why did Ava wish she could disappear?', choices: ['The room was too hot', 'She wanted to go home and sleep', 'She did not like the piano', 'She was nervous about making a mistake in front of everyone'], answer: 3, skill: 'Inference', hint: 'Think about her cold, shaky hands and the crowd.', explain: 'Ava was scared she would forget the notes or make a mistake in front of the crowd \u2014 that nervous feeling made her want to disappear.' },
      { q: 'What did Ava do right before she started playing?', choices: ['Took a deep breath', 'Asked for help', 'Closed the piano', 'Ran off the stage'], answer: 0, skill: 'Detail', hint: 'Her teacher had taught her to do it.', explain: 'Ava took a deep breath, just as her teacher had taught her, before she began to play.' },
      { q: 'Why did the music get easier as she played?', choices: ['The crowd left', 'Someone helped her', 'Her hands remembered all her practice', 'The song got shorter'], answer: 2, skill: 'Why', hint: 'She had practiced for weeks.', explain: 'Because Ava had practiced so much, her hands remembered the way once she began.' },
      { q: 'What is the big idea of this story?', choices: ['Pianos are hard to play', 'You can be brave even when you feel scared', 'Recitals are boring', 'Practice is a waste of time'], answer: 1, skill: 'Main idea', hint: 'Look at the very last sentence.', explain: 'Ava felt scared but played anyway. The story shows you can be brave even when you do not feel brave inside.' }
    ]
  },
  {
    id: 'lf-lastslice', level: 2,
    title: 'The Last Slice',
    paras: [
      'There was one slice of pizza left, and both Ben and his little sister Mia wanted it. Ben was bigger and could have grabbed it first. But Mia\u2019s eyes were already filling with tears. Ben stopped and thought about how he would feel if he ended up with nothing.',
      'Then he had an idea. \u201cLet\u2019s split it,\u201d Ben said. He cut the slice into two pieces. He let Mia pick her piece first, so she knew it was fair. Mia grinned and took her half. Sharing meant Ben got less pizza \u2014 but somehow he felt bigger than ever.'
    ],
    questions: [
      { q: 'What did both Ben and Mia want?', choices: ['The same toy', 'A glass of milk', 'To watch TV', 'The last slice of pizza'], answer: 3, skill: 'Detail', hint: 'There was only one left.', explain: 'Both children wanted the one last slice of pizza.' },
      { q: 'Why did Ben stop before grabbing the slice?', choices: ['He imagined how it would feel to get nothing', 'He dropped it', 'He was not hungry', 'Mom told him to'], answer: 0, skill: 'Inference', hint: 'He thought about Mia\u2019s tears and his own feelings.', explain: 'Ben stopped and imagined how he would feel with nothing \u2014 that helped him understand how Mia felt.' },
      { q: 'How did Ben make the split fair?', choices: ['He took the bigger piece', 'He flipped a coin', 'He let Mia pick her piece first', 'He ate it himself'], answer: 2, skill: 'Detail', hint: 'Who chose first?', explain: 'Ben cut the slice in two and let Mia choose her piece first, so she knew it was fair.' },
      { q: 'Why did Ben feel \u201cbigger than ever\u201d?', choices: ['He won the argument', 'He ate more pizza', 'He had done something kind and generous', 'He grew taller'], answer: 2, skill: 'Why', hint: 'He actually got LESS pizza.', explain: 'Ben got less pizza but felt great because sharing and being generous made him feel good inside.' },
      { q: 'What is the big idea of this story?', choices: ['Always eat fast', 'Pizza is the best food', 'Little sisters cry a lot', 'Sharing can feel better than winning'], answer: 3, skill: 'Main idea', hint: 'Think about how Ben felt at the end.', explain: 'Ben gave up half the pizza but felt wonderful. The story shows that sharing can feel even better than getting your way.' }
    ]
  },
  {
    id: 'lf-newbaby', level: 2,
    title: 'A New Baby at Home',
    paras: [
      'When Mom and Dad brought home the new baby, Leo felt strange. Everyone crowded around his little sister. They talked about how cute she was. Nobody seemed to notice Leo at all. He crossed his arms and went to his room.',
      'Later, Dad sat down beside him. \u201cBeing a big brother is an important job,\u201d Dad said. \u201cThe baby is going to look up to you.\u201d The next morning, when the baby started to cry, Leo made a silly face at her. She stopped and stared, and then a tiny smile appeared. Leo felt proud. Maybe being a big brother would be okay after all.'
    ],
    questions: [
      { q: 'Why did Leo cross his arms and go to his room?', choices: ['He was hungry', 'He felt left out and unnoticed', 'He was tired', 'He wanted to play a game'], answer: 1, skill: 'Inference', hint: 'Everyone was paying attention to the baby, not him.', explain: 'Everyone crowded around the baby and no one noticed Leo, so he felt left out \u2014 that is why he went to his room.' },
      { q: 'What did Dad say being a big brother is?', choices: ['An important job', 'A hard chore', 'No big deal', 'A game'], answer: 0, skill: 'Detail', hint: 'Dad said it while sitting beside Leo.', explain: 'Dad told Leo that being a big brother is an important job.' },
      { q: 'What did Leo do when the baby cried?', choices: ['Covered his ears', 'Called for Mom', 'Made a silly face at her', 'Left the room'], answer: 2, skill: 'Detail', hint: 'It made her stop crying.', explain: 'Leo made a silly face, and the baby stopped crying and even smiled.' },
      { q: 'Why did Leo feel proud?', choices: ['He cleaned his room', 'He made the baby smile and helped her', 'He got a new toy', 'He won a race'], answer: 1, skill: 'Why', hint: 'What happened right before he felt proud?', explain: 'Leo made his baby sister smile and stop crying, and helping her made him feel proud.' },
      { q: 'What is the big idea of this story?', choices: ['Feelings can change as you find your new place', 'New babies are loud', 'Dads know everything', 'Big brothers should stay in their rooms'], answer: 0, skill: 'Main idea', hint: 'Compare how Leo felt at the start and at the end.', explain: 'Leo went from feeling left out to feeling proud. The story shows that hard feelings can change as you find your place.' }
    ]
  },
  {
    id: 'lf-sciencefair', level: 3,
    title: 'The Science Fair Team',
    paras: [
      'Priya, Jack, and Sam were partners for the science fair, and their plan was to build a volcano that really erupted. But right away, they disagreed about everything. Priya wanted it to be tall. Jack wanted it to be colorful. Sam wanted extra baking soda for a giant explosion. Each of them was certain that their own idea was the best, and while they argued, the project went nowhere at all.',
      'Finally, Priya had a thought: what if they tried all three ideas together? So they built the volcano tall, AND painted it in bright colors, AND added Sam\u2019s extra baking soda. On the day of the fair, their volcano erupted in a huge, colorful burst of foam, and the whole class cheered. The three friends realized their project had turned out far better because they combined their ideas instead of fighting over them.'
    ],
    questions: [
      { q: 'What did the team plan to build?', choices: ['A model city', 'A robot', 'A rocket', 'A volcano that erupts'], answer: 3, skill: 'Detail', hint: 'It is in the first sentence.', explain: 'Their plan was to build a volcano that really erupted.' },
      { q: 'Why did the project go nowhere at first?', choices: ['Each person insisted on only their own idea', 'They forgot the baking soda', 'They ran out of supplies', 'The teacher was away'], answer: 0, skill: 'Why', hint: 'Each was sure their own idea was best.', explain: 'The three argued because each was certain their own idea was best, so nothing got done.' },
      { q: 'What did Priya finally suggest?', choices: ['Asking another team for help', 'Giving up', 'Doing only her idea', 'Trying all three ideas together'], answer: 3, skill: 'Detail', hint: 'It combined everyone\u2019s wishes.', explain: 'Priya suggested they try all three ideas together \u2014 tall, colorful, and extra baking soda.' },
      { q: 'Why did the volcano turn out so well in the end?', choices: ['They used a machine', 'They got lucky', 'They combined their ideas and worked as a team', 'They copied another project'], answer: 2, skill: 'Inference', hint: 'What changed after they stopped arguing?', explain: 'Once they combined all three ideas and worked together, the project became far better than any single idea alone.' },
      { q: 'What is the big idea of this story?', choices: ['The tallest idea always wins', 'Working together beats working against each other', 'Science fairs are hard', 'Volcanoes are dangerous'], answer: 1, skill: 'Main idea', hint: 'Think about what fixed their problem.', explain: 'Their arguing got them nowhere; teamwork made a great project. The big idea is that working together beats fighting.' }
    ]
  },
  {
    id: 'lf-movingaway', level: 3,
    title: 'When My Best Friend Moved',
    paras: [
      'Diego and Marcus had been best friends since kindergarten. They built forts, traded snacks, and sat together every single day. So when Marcus\u2019s family announced they were moving to another state, Diego felt like the ground had dropped out from under him. On the last day, the two friends barely knew what to say to each other.',
      'For a week after Marcus left, everything felt gray and lonely. Then a letter arrived in the mailbox, with Marcus\u2019s messy handwriting on the front. Inside was a drawing of their old fort and a promise to write every month. Diego wrote back that very same day. He realized that even far apart, a real friendship does not have to end \u2014 it just has to stretch.'
    ],
    questions: [
      { q: 'How long had Diego and Marcus been friends?', choices: ['Since last year', 'A few weeks', 'Since kindergarten', 'One summer'], answer: 2, skill: 'Detail', hint: 'It is near the start.', explain: 'The boys had been best friends since kindergarten.' },
      { q: 'What does \u201cthe ground had dropped out from under him\u201d mean?', choices: ['Diego fell down', 'The floor broke', 'There was an earthquake', 'Diego felt shocked and upset'], answer: 3, skill: 'Inference', hint: 'It describes a feeling, not a real hole.', explain: 'It is a way of saying Diego felt shocked and deeply upset by the news \u2014 not that the floor really moved.' },
      { q: 'What arrived a week after Marcus left?', choices: ['A letter', 'A visit', 'A phone call', 'A package of snacks'], answer: 0, skill: 'Detail', hint: 'It had messy handwriting on it.', explain: 'A letter arrived in the mailbox with Marcus\u2019s messy handwriting on the front.' },
      { q: 'Why did Diego feel better after the letter?', choices: ['Marcus was moving back', 'It showed the friendship would keep going', 'School was cancelled', 'It had money in it'], answer: 1, skill: 'Why', hint: 'What did the letter promise?', explain: 'The letter\u2019s drawing and its promise to keep writing showed Diego their friendship would continue even far apart.' },
      { q: 'What is the big idea of this story?', choices: ['A real friendship can survive distance', 'Forts are the best', 'Moving is always bad', 'Letters are old-fashioned'], answer: 0, skill: 'Main idea', hint: 'Look at the last sentence.', explain: 'Even though Marcus moved far away, their friendship continued. The big idea is that true friendship can stretch across distance.' }
    ]
  },
  {
    id: 'lf-honesty', level: 3,
    title: 'The Broken Vase',
    paras: [
      'Nia was playing catch inside the house, even though she knew she was not supposed to. The ball slipped from her hands and knocked her mother\u2019s favorite blue vase off the shelf. It shattered into a dozen pieces on the floor. Nia\u2019s heart pounded. She could sweep up the pieces and pretend she knew nothing about it.',
      'For a long moment, Nia stared at the mess. Then she gathered the pieces and went to find her mother. \u201cI broke your vase,\u201d she said, her voice small. \u201cI was playing ball inside. I\u2019m really sorry.\u201d Her mother was sad about the vase, but she hugged Nia anyway. \u201cThank you for telling me the truth,\u201d she said. \u201cThat was the brave thing to do.\u201d Nia still felt bad about the vase, but telling the truth had lifted a heavy weight off her chest.'
    ],
    questions: [
      { q: 'What was Nia doing that she should not have been?', choices: ['Painting the walls', 'Climbing the shelf', 'Playing catch inside the house', 'Cooking dinner'], answer: 2, skill: 'Detail', hint: 'It is what caused the accident.', explain: 'Nia was playing catch inside the house, which she knew she was not supposed to do.' },
      { q: 'Why did Nia\u2019s heart pound after the vase broke?', choices: ['She was excited', 'She was cold', 'She had been running', 'She was scared of getting in trouble'], answer: 3, skill: 'Inference', hint: 'She thought about hiding what happened.', explain: 'Nia\u2019s heart pounded because she was scared \u2014 she even thought about hiding the broken pieces.' },
      { q: 'What did Nia decide to do?', choices: ['Blame someone else', 'Tell her mother the truth', 'Say nothing', 'Hide the pieces'], answer: 1, skill: 'Detail', hint: 'She went to find her mother.', explain: 'Nia chose to gather the pieces and tell her mother the truth about what happened.' },
      { q: 'Why did her mother thank her?', choices: ['The vase was ugly', 'Nia told the truth instead of hiding it', 'Nia cleaned the whole house', 'Nia bought a new vase'], answer: 1, skill: 'Why', hint: 'What did the mother call \u201cbrave\u201d?', explain: 'Her mother thanked Nia for being honest \u2014 telling the truth was the brave thing to do.' },
      { q: 'What is the big idea of this story?', choices: ['Vases break easily', 'Always run away from problems', 'Never play indoors', 'Telling the truth is brave and feels better'], answer: 3, skill: 'Main idea', hint: 'How did Nia feel after telling the truth?', explain: 'Telling the truth lifted a weight off Nia\u2019s chest. The big idea is that honesty is brave and makes you feel better.' }
    ]
  },
  {
    id: 'lf-bikeride', level: 3,
    title: 'The Wobbly Bicycle',
    paras: [
      'Sofia wanted to ride her bike without training wheels more than almost anything. But every time she tried, the bike wobbled and she tumbled onto the grass. After the sixth fall, her knees were scraped and her eyes stung with tears. \u201cI\u2019ll never learn,\u201d she groaned, ready to give up for good.',
      'Her grandfather knelt down beside her. \u201cDo you know how many times I fell before I learned?\u201d he asked. \u201cMore than I could ever count.\u201d He steadied the seat while Sofia climbed back on. This time she pedaled a little farther before wobbling. The next time, farther still. By the end of the afternoon, Sofia was gliding down the sidewalk on her own, wind in her hair, grinning from ear to ear. Every fall, it turned out, had been teaching her how to balance.'
    ],
    questions: [
      { q: 'What did Sofia want to do?', choices: ['Ride her bike without training wheels', 'Fix her bike', 'Ride in the park', 'Win a race'], answer: 0, skill: 'Detail', hint: 'It is her big goal in the first sentence.', explain: 'Sofia wanted to ride her bike without training wheels more than almost anything.' },
      { q: 'Why did Sofia say \u201cI\u2019ll never learn\u201d?', choices: ['She hated bikes', 'Her bike was broken', 'She was frustrated after falling many times', 'It was getting dark'], answer: 2, skill: 'Inference', hint: 'She had just fallen for the sixth time.', explain: 'After six falls and scraped knees, Sofia felt so frustrated that she thought she would never learn.' },
      { q: 'What did her grandfather tell her?', choices: ['That bikes are dangerous', 'To stop trying', 'That he fell many times before he learned too', 'To use training wheels'], answer: 2, skill: 'Detail', hint: 'He talked about his own falls.', explain: 'Her grandfather said he had fallen more times than he could count before he learned.' },
      { q: 'How did each fall actually help Sofia?', choices: ['It taught her how to balance', 'It made her stronger', 'It made her faster', 'It fixed the bike'], answer: 0, skill: 'Inference', hint: 'Read the very last sentence.', explain: 'Each fall was teaching Sofia how to balance, so all that practice \u2014 falls included \u2014 is what let her ride.' },
      { q: 'What is the big idea of this story?', choices: ['Grandparents ride bikes', 'Keep trying \u2014 practice through mistakes leads to success', 'Grass is soft', 'Give up if it is hard'], answer: 1, skill: 'Main idea', hint: 'Sofia almost quit \u2014 then what happened?', explain: 'Sofia nearly gave up, but by trying again and again she learned. The big idea is that sticking with something, even through failure, leads to success.' }
    ]
  }
];

export const PASSAGES = [...KEEP.map(id => LEGACY.find(p => p.id === id)), ...NEW_PASSAGES];
