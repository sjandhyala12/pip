// accessories.js — Berry Shop items for The Reading Patch.
//
// Berries a child earns are ALSO a spendable currency here. Each item has:
//   - a `slot` (only one worn item per slot): 'hat' | 'face' | 'neck' | 'buddy' | 'bg'
//   - a `group` (which shop section it appears in)
//   - a `price` in berries, and optional `minStage` (0 egg .. 4 star) to hide it early.
// For overlay slots (hat/face/neck/buddy) give an `art` SVG string drawn in the pet's
// 0 0 200 170 viewBox. For 'bg' give a `bg` CSS background shown behind the pet.
//
// The Berry Shop only opens once a world's pet reaches the "big" stage (index 3).
//
// To add an accessory: copy an object below, give it a unique id, and pick a slot + group.

export const ACCESSORIES = [
  // ---- Hats ----
  { id: 'party', slot: 'hat', group: 'Hats', name: 'Party Hat', price: 12, minStage: 3,
    art: '<polygon points="100,6 79,54 121,54" fill="#F26D9C" stroke="#35315F" stroke-width="3" stroke-linejoin="round"></polygon><polyline points="84,42 90,36 96,42 102,36 108,42" fill="none" stroke="#FFFFFF" stroke-width="2.5" opacity="0.8"></polyline><circle cx="100" cy="7" r="6" fill="#FFD23F" stroke="#35315F" stroke-width="2"></circle>' },
  { id: 'bow', slot: 'hat', group: 'Hats', name: 'Big Bow', price: 12, minStage: 3,
    art: '<path d="M100 42 L76 30 Q72 42 76 54 Z" fill="#F26D9C" stroke="#35315F" stroke-width="3" stroke-linejoin="round"></path><path d="M100 42 L124 30 Q128 42 124 54 Z" fill="#F26D9C" stroke="#35315F" stroke-width="3" stroke-linejoin="round"></path><circle cx="100" cy="42" r="7" fill="#E14E82" stroke="#35315F" stroke-width="2.5"></circle>' },
  { id: 'tophat', slot: 'hat', group: 'Hats', name: 'Top Hat', price: 25, minStage: 3,
    art: '<rect x="68" y="46" width="64" height="8" rx="4" fill="#3A3550" stroke="#35315F" stroke-width="3"></rect><rect x="80" y="16" width="40" height="32" rx="3" fill="#3A3550" stroke="#35315F" stroke-width="3"></rect><rect x="80" y="39" width="40" height="7" fill="#E14E82"></rect>' },
  { id: 'crown', slot: 'hat', group: 'Hats', name: 'Golden Crown', price: 30, minStage: 3,
    art: '<path d="M74 52 L78 24 L92 42 L100 20 L108 42 L122 24 L126 52 Z" fill="#FFC93C" stroke="#35315F" stroke-width="3" stroke-linejoin="round"></path><circle cx="100" cy="34" r="3" fill="#E14E82"></circle><circle cx="80" cy="40" r="2.5" fill="#6B79E8"></circle><circle cx="120" cy="40" r="2.5" fill="#5DB075"></circle>' },

  // ---- Glasses ----
  { id: 'shades', slot: 'face', group: 'Glasses', name: 'Cool Shades', price: 15, minStage: 3,
    art: '<rect x="64" y="80" width="28" height="18" rx="7" fill="#2A2740" stroke="#35315F" stroke-width="3"></rect><rect x="108" y="80" width="28" height="18" rx="7" fill="#2A2740" stroke="#35315F" stroke-width="3"></rect><line x1="92" y1="85" x2="108" y2="85" stroke="#35315F" stroke-width="3"></line>' },
  { id: 'specs', slot: 'face', group: 'Glasses', name: 'Reading Glasses', price: 15, minStage: 3,
    art: '<g fill="#FFFFFF" fill-opacity="0.35" stroke="#35315F" stroke-width="3"><circle cx="80" cy="88" r="13"></circle><circle cx="120" cy="88" r="13"></circle></g><line x1="93" y1="88" x2="107" y2="88" stroke="#35315F" stroke-width="3"></line>' },

  // ---- Scarves (slot: neck) ----
  { id: 'scarf_red', slot: 'neck', group: 'Scarves', name: 'Cozy Red Scarf', price: 18, minStage: 3,
    art: '<path d="M64 118 Q100 137 136 118 L138 129 Q100 150 62 129 Z" fill="#E1584E" stroke="#35315F" stroke-width="3" stroke-linejoin="round"></path><path d="M118 126 l12 24 -13 4 -8 -22 Z" fill="#C7473E" stroke="#35315F" stroke-width="3" stroke-linejoin="round"></path>' },
  { id: 'scarf_stripe', slot: 'neck', group: 'Scarves', name: 'Winter Stripes', price: 18, minStage: 3,
    art: '<path d="M64 118 Q100 137 136 118 L138 129 Q100 150 62 129 Z" fill="#5C7CE0" stroke="#35315F" stroke-width="3" stroke-linejoin="round"></path><path d="M118 126 l12 24 -13 4 -8 -22 Z" fill="#4A67C4" stroke="#35315F" stroke-width="3" stroke-linejoin="round"></path><line x1="74" y1="123" x2="80" y2="131" stroke="#FFFFFF" stroke-width="3"></line><line x1="92" y1="127" x2="98" y2="135" stroke="#FFFFFF" stroke-width="3"></line><line x1="110" y1="127" x2="116" y2="134" stroke="#FFFFFF" stroke-width="3"></line>' },
  { id: 'scarf_teal', slot: 'neck', group: 'Scarves', name: 'Sea-Green Scarf', price: 18, minStage: 3,
    art: '<path d="M64 118 Q100 137 136 118 L138 129 Q100 150 62 129 Z" fill="#3AA6B0" stroke="#35315F" stroke-width="3" stroke-linejoin="round"></path><path d="M118 126 l12 24 -13 4 -8 -22 Z" fill="#2E8A93" stroke="#35315F" stroke-width="3" stroke-linejoin="round"></path>' },

  // ---- Friends (slot: buddy — a little companion beside the pet) ----
  { id: 'buddy_bird', slot: 'buddy', group: 'Friends', name: 'Little Bird', price: 26, minStage: 3,
    art: '<g stroke="#35315F" stroke-width="2.5" stroke-linejoin="round"><ellipse cx="171" cy="141" rx="14" ry="12" fill="#FFC93C"></ellipse><path d="M160 138 q-9 1 -13 7 q10 1 15 -2 Z" fill="#F7A93C"></path><circle cx="176" cy="136" r="6.5" fill="#FFC93C"></circle><path d="M182 137 l8 -1 -6 5 Z" fill="#F08A3C"></path></g><circle cx="177" cy="135" r="1.8" fill="#35315F"></circle>' },
  { id: 'buddy_lady', slot: 'buddy', group: 'Friends', name: 'Ladybug Pal', price: 26, minStage: 3,
    art: '<g stroke="#35315F" stroke-width="2.5"><ellipse cx="172" cy="142" rx="13" ry="11" fill="#E1584E"></ellipse><line x1="172" y1="131" x2="172" y2="153" stroke-width="2.5"></line></g><g fill="#35315F"><circle cx="166" cy="139" r="2"></circle><circle cx="178" cy="139" r="2"></circle><circle cx="167" cy="146" r="2"></circle><circle cx="177" cy="146" r="2"></circle><circle cx="172" cy="131" r="3.5"></circle></g>' },
  { id: 'buddy_fly', slot: 'buddy', group: 'Friends', name: 'Butterfly Friend', price: 28, minStage: 3,
    art: '<g stroke="#35315F" stroke-width="2.2" stroke-linejoin="round"><ellipse cx="166" cy="120" rx="8" ry="10" fill="#8E6FD0"></ellipse><ellipse cx="182" cy="120" rx="8" ry="10" fill="#B49BEA"></ellipse></g><line x1="174" y1="111" x2="174" y2="130" stroke="#35315F" stroke-width="3"></line><path d="M174 111 l-4 -5 M174 111 l4 -5" stroke="#35315F" stroke-width="2"></path>' },

  // ---- Seasonal (mixed slots, grouped together; each shows only in its months) ----
  // `months` are 0-indexed (0 = Jan .. 11 = Dec), matching JS Date#getMonth().
  { id: 'santa_hat', slot: 'hat', group: 'Seasonal', name: 'Santa Hat', price: 30, minStage: 3, months: [11],
    art: '<path d="M70 48 Q78 16 112 20 Q130 22 130 40 L130 50 Z" fill="#E1584E" stroke="#35315F" stroke-width="3" stroke-linejoin="round"></path><rect x="66" y="46" width="66" height="10" rx="5" fill="#FFFFFF" stroke="#35315F" stroke-width="2.5"></rect><circle cx="130" cy="22" r="7.5" fill="#FFFFFF" stroke="#35315F" stroke-width="2.5"></circle>' },
  { id: 'flower_crown', slot: 'hat', group: 'Seasonal', name: 'Flower Crown', price: 28, minStage: 3, months: [2, 3, 4],
    art: '<path d="M70 48 Q100 40 130 48" fill="none" stroke="#5DB075" stroke-width="4"></path><g stroke="#35315F" stroke-width="2"><circle cx="74" cy="44" r="6" fill="#F58AB0"></circle><circle cx="90" cy="37" r="6.5" fill="#F7C948"></circle><circle cx="108" cy="37" r="6.5" fill="#8E6FD0"></circle><circle cx="124" cy="44" r="6" fill="#F58AB0"></circle></g><g fill="#FFFFFF"><circle cx="90" cy="37" r="2"></circle><circle cx="108" cy="37" r="2"></circle></g>' },
  { id: 'pumpkin_buddy', slot: 'buddy', group: 'Seasonal', name: 'Pumpkin Pal', price: 28, minStage: 3, months: [8, 9, 10],
    art: '<g stroke="#35315F" stroke-width="2.5" stroke-linejoin="round"><ellipse cx="172" cy="143" rx="15" ry="12" fill="#F08A3C"></ellipse><path d="M166 143 q0 -9 6 -9 q6 0 6 9" fill="none" stroke-width="1.6"></path><path d="M172 131 q2 -6 7 -5" fill="none" stroke="#5DB075" stroke-width="3"></path></g>' },
  { id: 'snow_bg', slot: 'bg', group: 'Seasonal', name: 'Snow Day', price: 35, months: [11, 0, 1],
    bg: 'radial-gradient(circle at 20% 30%, #FFFFFF 2px, transparent 2.4px), radial-gradient(circle at 68% 22%, #FFFFFF 1.6px, transparent 2px), radial-gradient(circle at 84% 64%, #FFFFFF 2px, transparent 2.4px), radial-gradient(circle at 36% 72%, #FFFFFF 1.6px, transparent 2px), radial-gradient(circle at 54% 46%, #FFFFFF 1.6px, transparent 2px), linear-gradient(#D6ECFB, #B9DCF3)' },
  { id: 'beach_bg', slot: 'bg', group: 'Seasonal', name: 'Beach Day', price: 35, months: [5, 6, 7],
    bg: 'linear-gradient(#BFE9F5 0%, #BFE9F5 56%, #F5E2B0 56%, #EFD188 100%)' },

  // ---- Backgrounds ----
  { id: 'meadow', slot: 'bg', group: 'Backgrounds', name: 'Sunny Meadow', price: 20,
    bg: 'linear-gradient(#DCF3E1, #A6DCB3)' },
  { id: 'sunset', slot: 'bg', group: 'Backgrounds', name: 'Warm Sunset', price: 30,
    bg: 'linear-gradient(#FFE6C0, #F9B69C)' },
  { id: 'night', slot: 'bg', group: 'Backgrounds', name: 'Starry Night', price: 25,
    bg: 'radial-gradient(circle at 22% 26%, #FFFFFF 1.4px, transparent 1.6px), radial-gradient(circle at 70% 18%, #FFFFFF 1.2px, transparent 1.4px), radial-gradient(circle at 82% 60%, #FFFFFF 1.4px, transparent 1.6px), radial-gradient(circle at 34% 70%, #FFFFFF 1.1px, transparent 1.3px), linear-gradient(#2E2A55, #453F79)' },
  { id: 'rainbow', slot: 'bg', group: 'Backgrounds', name: 'Rainbow Sky', price: 35,
    bg: 'linear-gradient(135deg, #FBD1E0, #FDE9C8, #D6F0D8, #D3E4FB)' }
];

// Section order for the shop.
export const SHOP_GROUPS = ['Hats', 'Glasses', 'Scarves', 'Friends', 'Seasonal', 'Backgrounds'];

// A short label for the seasons an item is available (for the Seasonal section note).
export const MONTH_NAMES = ['January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'];

// Is a seasonal item available this month? Non-seasonal items (no `months`) are always available.
export function inSeason(item, month) {
  return !item.months || item.months.includes(month);
}

// Overlay slots drawn on the pet, in back-to-front paint order.
export const OVERLAY_SLOTS = ['buddy', 'neck', 'face', 'hat'];

export const ACC_BY_ID = Object.fromEntries(ACCESSORIES.map(a => [a.id, a]));

// SVG overlay markup for a worn item (empty for backgrounds).
export function accOverlay(id) {
  const a = ACC_BY_ID[id];
  return a && a.art ? a.art : '';
}

// CSS background value for a worn bg item ('' if none/not a bg).
export function accBg(id) {
  const a = ACC_BY_ID[id];
  return a && a.bg ? a.bg : '';
}
