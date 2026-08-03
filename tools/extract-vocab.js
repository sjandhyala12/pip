// Extracts the model's symbol table to data/model-vocab.txt.
// Run once: node tools/extract-vocab.js /tmp/vosk-model-small-en-us-0.15/graph/Gr.fst
import fs from 'node:fs';

const src = process.argv[2];
if (!src) {
  console.error('usage: node tools/extract-vocab.js <path/to/Gr.fst>');
  process.exit(1);
}

const b = fs.readFileSync(src);
const vocab = new Set();
let off = 0;
while (off + 12 <= b.length) {
  const len = b.readInt32LE(off);
  if (len > 0 && len <= 80 && off + 4 + len + 8 <= b.length) {
    const s = b.slice(off + 4, off + 4 + len);
    let ok = true;
    for (const c of s) {
      if (c < 0x21 || c > 0x7e) { ok = false; break; }
    }
    if (ok) {
      vocab.add(s.toString('latin1').toLowerCase());
      off += 4 + len + 8;
      continue;
    }
  }
  off++;
}
for (const w of ['the', 'she', 'with', '[unk]']) {
  if (!vocab.has(w)) {
    console.error(`FAILED: '${w}' missing - parse is wrong, not the vocabulary`);
    process.exit(1);
  }
}
fs.writeFileSync('data/model-vocab.txt', [...vocab].sort().join('\n'));
console.log(`wrote data/model-vocab.txt (${vocab.size} symbols)`);
