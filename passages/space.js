// Space & Our Planet — 10 passages.
// To add a story: append an object to PASSAGES below.

export const PASSAGES = [
  {
    id: 'sp-moon',
    title: 'The Moon Changes Shape',
    paras: [
      'Some nights the moon looks like a big silver coin. Other nights it looks like a thin banana. Is the moon really changing shape? No! The moon is always a round ball. It makes no light of its own. What we see is sunlight bouncing off the moon, and we can only see the part that is lit up.',
      'As the moon travels around Earth, the sun lights it from different sides. When the lit side faces us, we see a full moon. When the lit side faces away, we can hardly see the moon at all. Watch the sky each night this month — you can see the shapes change like a slow, silent show.'
    ],
    questions: [
      { q: 'What is this story mostly about?', choices: ['Why the moon seems to change shape', 'How astronauts visit the moon', 'Why bananas are curved', 'How coins are made'], answer: 0, skill: 'Main idea', hint: 'The title is a clue — but is the moon really changing?', explain: 'The story explains why the moon looks different on different nights, even though it is always a round ball.' },
      { q: 'Does the moon make its own light?', choices: ['Yes, it glows like a lamp', 'No, sunlight bounces off it', 'Only on cold nights', 'Only when it is full'], answer: 1, skill: 'Detail', hint: 'Where does moonlight really come from?', explain: 'The moon makes no light of its own. What we see is sunlight bouncing off it.' },
      { q: 'When do we see a full moon?', choices: ['When the lit side faces us', 'When the moon is closest', 'Only in summer', 'When there are no clouds'], answer: 0, skill: 'Detail', hint: 'It is about which side we can see.', explain: 'When the sunlit side of the moon faces Earth, we see the whole lit circle — a full moon.' },
      { q: 'What shape is the moon really, all the time?', choices: ['A banana', 'A coin', 'A round ball', 'It keeps changing'], answer: 2, skill: 'Detail', hint: 'The story answers this right away: "Is the moon really changing shape?"', explain: 'The moon is always a round ball. Only the part we can SEE changes.' },
      { q: 'Why can we hardly see the moon some nights?', choices: ['It moved behind the sun', 'The lit side is facing away from us', 'It shrinks', 'Clouds always cover it'], answer: 1, skill: 'Inference', hint: 'Think about which way the lit side is pointing.', explain: 'When the sunlit side faces away from Earth, almost none of the light reaches our eyes — so the moon seems to disappear.' }
    ]
  },
  {
    id: 'sp-mars',
    title: 'A Day on Mars',
    paras: [
      'Mars is called the Red Planet because its ground is covered with rusty red dust. If you stood on Mars, the sky would look butterscotch orange, and the sun would look smaller than it does from Earth. A day on Mars is about as long as ours, but a year lasts almost two Earth years!',
      'Mars is home to the biggest volcano we know of — Olympus Mons. It is almost three times as tall as our tallest mountain. No people have visited Mars yet, but robot rovers roll across it right now, taking pictures and studying the rocks. Maybe someday YOU could be the first person to leave footprints in that red dust.'
    ],
    questions: [
      { q: 'Why is Mars called the Red Planet?', choices: ['It is very hot', 'Its ground is covered with rusty red dust', 'Its sky is red', 'It has red water'], answer: 1, skill: 'Detail', hint: 'Look at what covers the ground.', explain: 'Mars is covered with rusty red dust, which gives it the nickname the Red Planet.' },
      { q: 'What color would the sky look if you stood on Mars?', choices: ['Blue', 'Black', 'Butterscotch orange', 'Green'], answer: 2, skill: 'Detail', hint: 'It is a candy color!', explain: 'The story says the Martian sky would look butterscotch orange — very different from our blue sky.' },
      { q: 'What is Olympus Mons?', choices: ['A robot rover', 'The biggest volcano we know of', 'A city on Mars', 'A red star'], answer: 1, skill: 'Detail', hint: 'It is almost three times taller than our tallest mountain.', explain: 'Olympus Mons is a giant volcano on Mars — the biggest one we know of anywhere.' },
      { q: 'Who explores Mars right now?', choices: ['Astronauts', 'Robot rovers', 'Nobody', 'Mountain climbers'], answer: 1, skill: 'Detail', hint: 'No people have visited yet.', explain: 'Robot rovers roll across Mars right now, taking pictures and studying rocks for scientists on Earth.' },
      { q: 'What does the last sentence suggest?', choices: ['Mars is too far to ever visit', 'Someday people — maybe you — might walk on Mars', 'Robots do not like Mars', 'Footprints last forever'], answer: 1, skill: 'Inference', hint: 'Who might leave footprints in the red dust?', explain: 'Since no one has been to Mars yet, the story imagines that a kid reading today could grow up to be the first person there!' }
    ]
  },
  {
    id: 'sp-sun',
    title: 'Our Star, the Sun',
    paras: [
      'Did you know the sun is a star? It looks much bigger and brighter than the nighttime stars, but that is only because it is much, much closer to us. The sun is a giant ball of super-hot, glowing gas. It is so big that more than a million Earths could fit inside it.',
      'Almost everything on Earth needs the sun. Its light warms our land and oceans. Plants use sunlight to make food, and then animals eat the plants. Even the wind starts with the sun heating the air! Without our star, Earth would be dark, frozen, and still. The sun is truly the engine of our world.'
    ],
    questions: [
      { q: 'What is this story mostly about?', choices: ['Why nighttime stars twinkle', 'How important the sun is to Earth', 'How to stay safe in the sun', 'Why the ocean is warm'], answer: 1, skill: 'Main idea', hint: 'The story calls the sun the "engine of our world."', explain: 'The story explains what the sun is and all the ways life on Earth depends on it.' },
      { q: 'What is the sun made of?', choices: ['Melted rock', 'Super-hot, glowing gas', 'Fire and wood', 'Yellow ice'], answer: 1, skill: 'Detail', hint: 'It is a giant ball of something.', explain: 'The sun is a giant ball of super-hot, glowing gas.' },
      { q: 'Why does the sun look bigger than other stars?', choices: ['It is the biggest star anywhere', 'It is much closer to us', 'It is younger', 'Other stars are hiding'], answer: 1, skill: 'Detail', hint: 'It is about distance, not size.', explain: 'The sun looks huge because it is so much closer to Earth than the other stars.' },
      { q: 'How do plants use the sun?', choices: ['To stay dry', 'To make their food', 'To grow flowers only', 'To make shade'], answer: 1, skill: 'Detail', hint: 'Sunlight helps plants do something important.', explain: 'Plants use sunlight to make food — and then animals eat the plants. The sun feeds almost everything!' },
      { q: 'What would Earth be like without the sun?', choices: ['Dark, frozen, and still', 'Warmer and windier', 'The same as now', 'Brighter at night'], answer: 0, skill: 'Detail', hint: 'The second-to-last sentence paints the picture.', explain: 'Without the sun there would be no light, no warmth, no plant food, and no wind — Earth would be dark, frozen, and still.' }
    ]
  },
  {
    id: 'sp-astronaut',
    title: 'Floating in Space',
    paras: [
      'On the space station, astronauts float like feathers. There is almost no gravity pulling them down, so nothing stays put! Astronauts sleep in bags strapped to the wall so they do not drift away in the night. Their food would float too, so they often eat from pouches with a spoon that sticks to the table with magnets.',
      'Floating looks fun, but it makes muscles lazy. On Earth, your muscles work all day just holding you up. In space they get a vacation — and they start to get weak. So astronauts must exercise about two hours every day, running on a special treadmill with straps that hold them down.'
    ],
    questions: [
      { q: 'Why do astronauts float in the space station?', choices: ['They wear special shoes', 'There is almost no gravity pulling them down', 'The station spins fast', 'They are very light'], answer: 1, skill: 'Detail', hint: 'What is missing up there that we have on Earth?', explain: 'With almost no gravity to pull them down, astronauts and their things float freely.' },
      { q: 'Why do astronauts sleep in bags strapped to the wall?', choices: ['The beds are broken', 'So they do not drift away while sleeping', 'It is warmer', 'To hide from aliens'], answer: 1, skill: 'Why', hint: 'What happens to things that are not held down?', explain: 'Nothing stays put in space! The straps keep sleeping astronauts from floating around the station.' },
      { q: 'Why do muscles get weak in space?', choices: ['Space food is unhealthy', 'Muscles stop working hard because they are not holding the body up', 'It is too cold', 'Astronauts sleep too much'], answer: 1, skill: 'Inference', hint: 'On Earth, what job do your muscles do all day?', explain: 'On Earth, muscles work all day holding you up against gravity. In space that job disappears, so muscles get lazy and weak.' },
      { q: 'How do astronauts keep their muscles strong?', choices: ['They eat extra pouches', 'They exercise about two hours every day', 'They take naps', 'They float more'], answer: 1, skill: 'Detail', hint: 'It involves a special treadmill.', explain: 'Astronauts exercise about two hours a day on machines with straps that hold them down.' },
      { q: 'Why does the treadmill need straps?', choices: ['To count their steps', 'To keep the astronaut from floating off it', 'To make it harder to run', 'To charge the treadmill'], answer: 1, skill: 'Inference', hint: 'Think about what happens the moment an astronaut pushes off with a foot.', explain: 'Every running step would push a floating astronaut right off the treadmill — the straps hold them down so they can run.' }
    ]
  },
  {
    id: 'sp-saturn',
    title: 'The Planet with Rings',
    paras: [
      'Saturn is the show-off of our solar system. It wears thousands of beautiful rings! From far away the rings look solid, like a hula hoop. But they are really made of billions of pieces of ice and rock, all circling the planet together. Some pieces are as small as a snowflake. Others are as big as a house.',
      'Saturn itself is a giant ball of gas — there is no ground to stand on at all. It is so light for its size that it could float in a bathtub, if you could ever find one big enough! Scientists have sent robot spacecraft to fly past Saturn and take pictures. Every picture makes people gasp.'
    ],
    questions: [
      { q: 'What are Saturn\u2019s rings really made of?', choices: ['Solid gold hoops', 'Billions of pieces of ice and rock', 'Clouds and rain', 'Glass'], answer: 1, skill: 'Detail', hint: 'They only LOOK solid from far away.', explain: 'The rings are made of billions of chunks of ice and rock, from snowflake-small to house-big, circling together.' },
      { q: 'How big are the pieces in the rings?', choices: ['All the same size', 'From snowflake-small to house-big', 'Bigger than the moon', 'Too small to see'], answer: 1, skill: 'Detail', hint: 'The story gives the smallest and biggest sizes.', explain: 'Some pieces are as small as snowflakes and others are as big as houses.' },
      { q: 'Why can\u2019t you stand on Saturn?', choices: ['It is too hot', 'It is a giant ball of gas with no ground', 'The rings block the way', 'It spins too fast'], answer: 1, skill: 'Detail', hint: 'What is Saturn made of?', explain: 'Saturn is made of gas. There is no solid ground anywhere to stand on.' },
      { q: 'What does the bathtub sentence tell us about Saturn?', choices: ['It is very light for its size', 'It is full of water', 'It is dirty', 'It is tiny'], answer: 0, skill: 'Inference', hint: 'What kind of things float in a bathtub?', explain: 'Things that float are light for their size. Saturn is so light for its size that it would float — if a big enough tub existed!' },
      { q: 'Why does the story call Saturn a "show-off"?', choices: ['It is the loudest planet', 'Its rings make it look fancy and amazing', 'It moves the fastest', 'It is closest to the sun'], answer: 1, skill: 'Inference', hint: 'What makes people gasp at the pictures?', explain: 'With thousands of beautiful rings, Saturn looks like it is dressed up to be noticed — like a show-off!' }
    ]
  },
  {
    id: 'sp-volcano',
    title: 'Mountains That Wake Up',
    paras: [
      'A volcano looks like a sleeping mountain, but deep below it, the rock is so hot that it has melted into a thick, glowing soup called magma. Sometimes the magma pushes up and up until it bursts out of the top. That is called an eruption! Once magma flows out into the open air, it gets a new name: lava.',
      'Lava can be hotter than a campfire, an oven, and a pizza stone all put together. When it cools, it hardens into brand-new rock. Some islands, like Hawaii, were built by volcanoes erupting under the sea, layer after layer, until the new rock finally poked above the waves.'
    ],
    questions: [
      { q: 'What is magma?', choices: ['Cold mountain rock', 'Melted rock deep underground', 'A kind of cloud', 'Ocean water'], answer: 1, skill: 'Detail', hint: 'It is described as a glowing soup.', explain: 'Magma is rock that is so hot it has melted into a thick, glowing soup deep underground.' },
      { q: 'When does magma get called lava?', choices: ['When it cools down', 'When it flows out into the open air', 'When it turns blue', 'When it goes underwater'], answer: 1, skill: 'Detail', hint: 'The name changes when it leaves the volcano.', explain: 'Underground it is magma; once it bursts out into the open air, we call it lava.' },
      { q: 'What happens when lava cools?', choices: ['It disappears', 'It hardens into new rock', 'It turns into water', 'It floats away'], answer: 1, skill: 'Detail', hint: 'Something brand-new is made.', explain: 'Cooled lava hardens into brand-new rock — that is how volcanoes build new land.' },
      { q: 'How were islands like Hawaii made?', choices: ['People built them', 'Underwater volcanoes erupted layer after layer', 'The ocean pushed sand together', 'They broke off other lands'], answer: 1, skill: 'Detail', hint: 'It happened under the sea, little by little.', explain: 'Volcanoes erupting under the sea piled up rock layer after layer until it rose above the waves as islands.' },
      { q: 'Why does the story call volcanoes "mountains that wake up"?', choices: ['They are quiet until they suddenly erupt', 'They make loud snoring sounds', 'They move around at night', 'They grow taller every day'], answer: 0, skill: 'Inference', hint: 'What does a volcano look like before an eruption?', explain: 'A volcano can sit quietly like it is asleep for years — then an eruption is like the mountain suddenly waking up!' }
    ]
  },
  {
    id: 'sp-raindrop',
    title: 'A Raindrop\u2019s Big Trip',
    paras: [
      'Where does rain come from? Follow one little drop! Our drop starts in the ocean. The sun warms the water until the drop turns into vapor — a gas too small to see — and floats up into the sky. This is called evaporation. High in the cool air, the vapor turns back into a tiny drop of water and joins billions of others. Together they make a cloud.',
      'The drops in the cloud bump together and grow bigger and heavier. When they are too heavy to float, down they fall — rain! Our drop lands in a river that carries it back to the ocean. Then the sun warms it again. The trip never ends. Scientists call this circle the water cycle.'
    ],
    questions: [
      { q: 'What is this story mostly about?', choices: ['How the ocean got salty', 'The trip water takes around the water cycle', 'Why clouds are white', 'How rivers are made'], answer: 1, skill: 'Main idea', hint: 'The story follows one drop through a big circle.', explain: 'The story follows a raindrop through evaporation, clouds, rain, and rivers — the whole water cycle.' },
      { q: 'What is evaporation?', choices: ['Water turning into vapor and floating up', 'Rain falling down', 'A cloud moving', 'A river flowing'], answer: 0, skill: 'Detail', hint: 'It happens when the sun warms the water.', explain: 'When the sun warms water, it turns into vapor — an invisible gas — and floats up. That is evaporation.' },
      { q: 'What is a cloud made of?', choices: ['Cotton', 'Smoke', 'Billions of tiny water drops', 'Cold wind'], answer: 2, skill: 'Detail', hint: 'The vapor turns back into something in the cool air.', explain: 'High in the cool sky, vapor turns back into tiny drops. Billions of them together make a cloud.' },
      { q: 'Why does rain fall from a cloud?', choices: ['The wind pushes it out', 'The drops get too heavy to float', 'The sun melts the cloud', 'Thunder shakes it loose'], answer: 1, skill: 'Why', hint: 'The drops bump together and grow.', explain: 'Drops bump together and get bigger and heavier until they are too heavy to float — then they fall as rain.' },
      { q: 'Why does the story say "the trip never ends"?', choices: ['The drop gets lost', 'The water cycle goes around and around forever', 'Rain never stops falling', 'The drop is very slow'], answer: 1, skill: 'Inference', hint: 'What happens when the drop gets back to the ocean?', explain: 'Back in the ocean, the sun warms the drop and the whole journey starts again. The water cycle is a circle with no end.' }
    ]
  },
  {
    id: 'sp-meteor',
    title: 'Wish on a Shooting Star',
    paras: [
      'A shooting star is not really a star at all! It is a little piece of space rock, sometimes as small as a pebble, falling toward Earth. It moves so fast that the air around it gets super hot, and the rock glows with a bright streak of light. That streak is what we see from the ground.',
      'Most space pebbles burn up completely before they reach the ground, like a sparkler burning out. On some special nights, Earth passes through a whole trail of space dust, and dozens of streaks light up the sky in one night. That is called a meteor shower — nature\u2019s own fireworks show.'
    ],
    questions: [
      { q: 'What is a shooting star really?', choices: ['A baby star', 'A piece of space rock falling toward Earth', 'An airplane', 'A firework'], answer: 1, skill: 'Detail', hint: 'The first sentence says it is NOT a star.', explain: 'A shooting star is really a small piece of space rock — sometimes pebble-sized — falling toward Earth.' },
      { q: 'Why does the falling rock glow?', choices: ['It is made of fire', 'It moves so fast the air around it gets super hot', 'The moon shines on it', 'It has lights inside'], answer: 1, skill: 'Why', hint: 'It is about speed and hot air.', explain: 'The rock falls so fast that the air around it heats up, making the rock glow with a bright streak.' },
      { q: 'What happens to most space pebbles?', choices: ['They land in the ocean', 'They burn up before reaching the ground', 'They bounce back to space', 'They turn into stars'], answer: 1, skill: 'Detail', hint: 'The story compares them to a sparkler.', explain: 'Most burn up completely in the air, like a sparkler burning out, and never reach the ground.' },
      { q: 'What is a meteor shower?', choices: ['Rain made of rocks', 'A night when dozens of streaks light the sky', 'A storm on the moon', 'A cloud of stars'], answer: 1, skill: 'Detail', hint: 'It happens when Earth passes through space dust.', explain: 'When Earth passes through a trail of space dust, dozens of glowing streaks appear in one night — a meteor shower.' },
      { q: 'Why does the story call a meteor shower "nature\u2019s own fireworks show"?', choices: ['It is loud like fireworks', 'Many bright streaks light up the sky like fireworks', 'It happens on holidays', 'It comes in many colors'], answer: 1, skill: 'Inference', hint: 'What does the sky look like with dozens of streaks?', explain: 'Dozens of bright streaks flashing across the dark sky look just like a fireworks show — but made by nature.' }
    ]
  },
  {
    id: 'sp-ocean',
    title: 'The Deep, Dark Ocean',
    paras: [
      'If you looked at Earth from space, you would see mostly blue. That is because oceans cover most of our planet! The ocean has layers, like a giant cake. The top layer is sunny and warm, full of fish, turtles, and coral. But sunlight cannot reach very deep. Far below, the water is icy cold and black as night.',
      'Strange and wonderful creatures live in the deep. Some fish make their own light, just like fireflies, to find food in the dark. Scientists say we have explored only a small part of the deep ocean. There may be creatures down there that no human has ever seen!'
    ],
    questions: [
      { q: 'Why does Earth look mostly blue from space?', choices: ['The sky reflects everywhere', 'Oceans cover most of the planet', 'Earth is made of blue rock', 'It is always raining'], answer: 1, skill: 'Detail', hint: 'What covers most of our planet?', explain: 'Oceans cover most of Earth, so from space our planet looks mostly blue.' },
      { q: 'What is the top layer of the ocean like?', choices: ['Icy and black', 'Sunny and warm, full of life', 'Empty of animals', 'Frozen solid'], answer: 1, skill: 'Detail', hint: 'It is where the sunlight reaches.', explain: 'The top layer is sunny and warm, home to fish, turtles, and coral.' },
      { q: 'Why is the deep ocean dark?', choices: ['The water is dirty', 'Sunlight cannot reach that deep', 'Fish block the light', 'It is nighttime down there'], answer: 1, skill: 'Why', hint: 'What cannot travel all the way down?', explain: 'Sunlight can only reach so far into the water. Far below, no light arrives at all — so it is black as night.' },
      { q: 'How do some deep-sea fish find food in the dark?', choices: ['They make their own light', 'They use flashlights', 'They wait for morning', 'They swim to the top'], answer: 0, skill: 'Detail', hint: 'The story compares them to fireflies.', explain: 'Some deep-sea fish glow with their own light, just like fireflies, to find food in the blackness.' },
      { q: 'What does the last sentence make you think?', choices: ['The deep ocean is boring', 'There are exciting discoveries still waiting down there', 'All sea creatures are known', 'The ocean is shrinking'], answer: 1, skill: 'Inference', hint: 'We have explored only a small part\u2026', explain: 'If we have explored so little, the deep ocean must still hold creatures and surprises no one has ever seen. Exciting!' }
    ]
  },
  {
    id: 'sp-seasons',
    title: 'Why We Have Seasons',
    paras: [
      'Here is a secret about our planet: Earth is tilted! As it travels around the sun each year, our planet leans to one side, like a spinning top that is not quite straight. That little lean is the reason we have seasons.',
      'When your part of Earth is tilted toward the sun, sunlight hits it more directly, and days are longer. That is summer! When your part is tilted away, the light comes in at a slant and days are shorter. That is winter. Here is the strangest part: when it is summer where you live, it is winter on the other side of the world. Somewhere far away, kids are building snowmen in July!'
    ],
    questions: [
      { q: 'What causes Earth\u2019s seasons?', choices: ['Earth moving closer and farther from the sun', 'Earth\u2019s tilt as it travels around the sun', 'The moon blocking sunlight', 'Changing winds'], answer: 1, skill: 'Main idea', hint: 'The story calls it a "little lean."', explain: 'Earth is tilted, and that lean changes how directly sunlight hits each part of the planet — making the seasons.' },
      { q: 'What is Earth compared to?', choices: ['A spinning top that is not quite straight', 'A bouncing ball', 'A giant cake', 'A merry-go-round'], answer: 0, skill: 'Detail', hint: 'It is a toy that spins.', explain: 'The story compares tilted Earth to a spinning top that leans to one side.' },
      { q: 'What happens when your part of Earth tilts toward the sun?', choices: ['Winter comes', 'Sunlight is more direct and days are longer — summer!', 'The sun sets early', 'It starts to snow'], answer: 1, skill: 'Detail', hint: 'Think of the warmest season.', explain: 'Tilted toward the sun, your part of Earth gets direct sunlight and long days — that is summer.' },
      { q: 'When it is summer where you live, what is it on the other side of the world?', choices: ['Also summer', 'Winter', 'Spring', 'No season at all'], answer: 1, skill: 'Detail', hint: 'Kids there are building snowmen in July!', explain: 'The two halves of Earth lean opposite ways, so when one half has summer, the other has winter.' },
      { q: 'Why are winter days shorter and colder?', choices: ['The sun is tired', 'Your part of Earth is tilted away, so light comes in at a slant', 'Clouds block all light', 'Earth spins slower'], answer: 1, skill: 'Inference', hint: 'Which way is your part of Earth leaning in winter?', explain: 'Tilted away from the sun, your part of Earth gets slanted, weaker light and fewer daylight hours — short, cold winter days.' }
    ]
  }
];
