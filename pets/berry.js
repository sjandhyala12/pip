// pets/berry.js — SVG art for the berry sprite.
// One method per growth stage: egg, hatch, kid, big, star.
// Each returns the pet body as SVG markup; the fill argument is the body color.
// Edit any stage here without affecting the other animals.

export const berry = {
  egg(fill) {
    return `
    <ellipse cx="100" cy="145" rx="62" ry="12" fill="#35315F" opacity="0.08"></ellipse>
    <ellipse cx="100" cy="88" rx="52" ry="64" fill="#F6E9D4" stroke="#35315F" stroke-width="5"></ellipse>
    <circle cx="82" cy="70" r="6" fill="${fill}" opacity="0.45"></circle>
    <circle cx="116" cy="95" r="8" fill="${fill}" opacity="0.45"></circle>
    <circle cx="94" cy="118" r="5" fill="${fill}" opacity="0.45"></circle>
    <polyline points="70,52 80,44 88,54 98,42 106,52" fill="none" stroke="#35315F" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></polyline>`;
  },

  hatch(fill) {
    return `
    <ellipse cx="100" cy="148" rx="62" ry="12" fill="#35315F" opacity="0.08"></ellipse>
    <circle cx="100" cy="82" r="40" fill="${fill}" stroke="#35315F" stroke-width="5"></circle>
    <path d="M100 44 Q100 26 84 20 Q98 18 104 28 Q106 16 122 16 Q112 26 106 40 Z" fill="#5DB075" stroke="#35315F" stroke-width="4" stroke-linejoin="round"></path>
    <circle cx="88" cy="76" r="5.5" fill="#35315F"></circle>
    <circle cx="112" cy="76" r="5.5" fill="#35315F"></circle>
    <circle cx="90" cy="74" r="1.8" fill="#FFFFFF"></circle>
    <circle cx="114" cy="74" r="1.8" fill="#FFFFFF"></circle>
    <path d="M92 92 Q100 99 108 92" fill="none" stroke="#35315F" stroke-width="4" stroke-linecap="round"></path>
    <path d="M52 108 L60 122 L72 110 L84 124 L96 110 L108 124 L120 110 L132 124 L144 108 L148 130 Q148 150 100 150 Q52 150 52 130 Z" fill="#F6E9D4" stroke="#35315F" stroke-width="5" stroke-linejoin="round"></path>`;
  },

  kid(fill) {
    return `
    <ellipse cx="100" cy="152" rx="60" ry="12" fill="#35315F" opacity="0.08"></ellipse>
    <ellipse cx="100" cy="98" rx="52" ry="50" fill="${fill}" stroke="#35315F" stroke-width="5"></ellipse>
    <path d="M100 50 Q100 32 84 26 Q98 24 104 34 Q106 22 122 22 Q112 32 106 46 Z" fill="#5DB075" stroke="#35315F" stroke-width="4" stroke-linejoin="round"></path>
    <circle cx="84" cy="90" r="6" fill="#35315F"></circle>
    <circle cx="116" cy="90" r="6" fill="#35315F"></circle>
    <circle cx="86" cy="88" r="2" fill="#FFFFFF"></circle>
    <circle cx="118" cy="88" r="2" fill="#FFFFFF"></circle>
    <ellipse cx="72" cy="106" rx="7" ry="5" fill="#F2A3B3" opacity="0.8"></ellipse>
    <ellipse cx="128" cy="106" rx="7" ry="5" fill="#F2A3B3" opacity="0.8"></ellipse>
    <path d="M90 108 Q100 117 110 108" fill="none" stroke="#35315F" stroke-width="4" stroke-linecap="round"></path>`;
  },

  big(fill) {
    return `
    <ellipse cx="100" cy="156" rx="66" ry="12" fill="#35315F" opacity="0.08"></ellipse>
    <ellipse cx="100" cy="98" rx="58" ry="56" fill="${fill}" stroke="#35315F" stroke-width="5"></ellipse>
    <ellipse cx="42" cy="112" rx="12" ry="9" fill="${fill}" stroke="#35315F" stroke-width="5"></ellipse>
    <ellipse cx="158" cy="112" rx="12" ry="9" fill="${fill}" stroke="#35315F" stroke-width="5"></ellipse>
    <path d="M100 44 Q100 26 82 20 Q98 18 103 29 Q106 16 124 18 Q112 26 105 42 Z" fill="#5DB075" stroke="#35315F" stroke-width="4" stroke-linejoin="round"></path><path d="M96 46 Q80 38 66 44 Q80 52 96 50 Z" fill="#5DB075" stroke="#35315F" stroke-width="4" stroke-linejoin="round"></path>
    <circle cx="82" cy="88" r="6.5" fill="#35315F"></circle>
    <circle cx="118" cy="88" r="6.5" fill="#35315F"></circle>
    <circle cx="84" cy="86" r="2.2" fill="#FFFFFF"></circle>
    <circle cx="120" cy="86" r="2.2" fill="#FFFFFF"></circle>
    <ellipse cx="68" cy="106" rx="8" ry="5.5" fill="#F2A3B3" opacity="0.8"></ellipse>
    <ellipse cx="132" cy="106" rx="8" ry="5.5" fill="#F2A3B3" opacity="0.8"></ellipse>
    <path d="M88 106 Q100 120 112 106" fill="none" stroke="#35315F" stroke-width="4" stroke-linecap="round"></path>`;
  },

  star(fill) {
    return `
    <ellipse cx="100" cy="158" rx="68" ry="12" fill="#35315F" opacity="0.08"></ellipse>
    <path d="M100 22 l5 11 12 1.5 -9 8.5 2.5 12 -10.5 -6 -10.5 6 2.5 -12 -9 -8.5 12 -1.5 Z" fill="#FFB93E" stroke="#35315F" stroke-width="4" stroke-linejoin="round"></path>
    <path d="M62 44 Q48 36 36 42 Q48 50 62 48 Z" fill="#5DB075" stroke="#35315F" stroke-width="4" stroke-linejoin="round"></path><path d="M138 44 Q152 36 164 42 Q152 50 138 48 Z" fill="#5DB075" stroke="#35315F" stroke-width="4" stroke-linejoin="round"></path>
    <ellipse cx="100" cy="102" rx="60" ry="56" fill="${fill}" stroke="#35315F" stroke-width="5"></ellipse>
    <ellipse cx="40" cy="116" rx="12" ry="9" fill="${fill}" stroke="#35315F" stroke-width="5"></ellipse>
    <ellipse cx="160" cy="116" rx="12" ry="9" fill="${fill}" stroke="#35315F" stroke-width="5"></ellipse>
    <path d="M76 90 Q82 84 88 90" fill="none" stroke="#35315F" stroke-width="5" stroke-linecap="round"></path>
    <path d="M112 90 Q118 84 124 90" fill="none" stroke="#35315F" stroke-width="5" stroke-linecap="round"></path>
    <ellipse cx="66" cy="108" rx="8" ry="5.5" fill="#F2A3B3" opacity="0.8"></ellipse>
    <ellipse cx="134" cy="108" rx="8" ry="5.5" fill="#F2A3B3" opacity="0.8"></ellipse>
    <path d="M86 108 Q100 124 114 108" fill="none" stroke="#35315F" stroke-width="4" stroke-linecap="round"></path>
    <circle cx="34" cy="70" r="3" fill="#FFB93E"></circle>
    <circle cx="168" cy="66" r="3" fill="#FFB93E"></circle>
    <circle cx="152" cy="150" r="3" fill="#FFB93E"></circle>`;
  }
};
