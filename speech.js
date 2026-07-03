// speech.js — optional read-aloud using the browser's built-in Web Speech API.
// No network, no keys. Gracefully no-ops on browsers without speechSynthesis.

export const speechSupported = typeof window !== 'undefined' && 'speechSynthesis' in window;

// Prefer a natural English voice when one is available.
function pickVoice() {
  if (!speechSupported) return null;
  const vs = window.speechSynthesis.getVoices() || [];
  return (
    vs.find(v => /^en/i.test(v.lang) && /(samantha|google us english|jenny|aria|zira|female)/i.test(v.name)) ||
    vs.find(v => /^en[-_]us/i.test(v.lang)) ||
    vs.find(v => /^en/i.test(v.lang)) ||
    null
  );
}

// Warm up the voice list (some browsers load it asynchronously).
if (speechSupported) {
  window.speechSynthesis.getVoices();
  window.speechSynthesis.onvoiceschanged = () => window.speechSynthesis.getVoices();
}

export function isSpeaking() {
  return speechSupported && (window.speechSynthesis.speaking || window.speechSynthesis.pending);
}

export function stopSpeech() {
  if (speechSupported) window.speechSynthesis.cancel();
}

// Speak text at a kid-friendly pace. Calls onStart/onEnd for UI state.
export function speak(text, { onStart, onEnd } = {}) {
  if (!speechSupported || !text) return;
  window.speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(text);
  u.rate = 0.9;      // a touch slower for young readers
  u.pitch = 1.05;
  const v = pickVoice();
  if (v) u.voice = v;
  u.onend = () => { if (onEnd) onEnd(); };
  u.onerror = () => { if (onEnd) onEnd(); };
  if (onStart) onStart();
  window.speechSynthesis.speak(u);
}
