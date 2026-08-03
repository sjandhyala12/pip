/* meter.js — live microphone level display.
 *
 * Pure drawing: no audio APIs, no DOM lookups beyond the canvas it is given.
 * Whoever owns the microphone feeds it 0..1 levels (see listen.js onLevel).
 * Kept separate from listen.js so the audio path has no opinion about pixels.
 */

const QUIET = 0.18;          // below this, reading is too soft to recognise well
const INK   = '#35315F';
const GOOD  = '#5DB075';
const SOFT  = '#E8A23D';
const IDLE  = '#DCD3BE';

/* Attach a rolling bar-graph meter to a <canvas>.
 * Returns { push, clear, destroy }. */
export function createMeter(canvas, { bars = 28 } = {}) {
  if (!canvas || !canvas.getContext) return { push() {}, clear() {}, destroy() {} };

  const history = new Array(bars).fill(0);
  let raf = null, w = 0, h = 0, dead = false;

  function resize() {
    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();
    // Fall back to attribute size if the element is laid out at zero.
    const cssW = rect.width || canvas.clientWidth || 240;
    const cssH = rect.height || canvas.clientHeight || 28;
    w = Math.max(1, Math.round(cssW * dpr));
    h = Math.max(1, Math.round(cssH * dpr));
    if (canvas.width !== w || canvas.height !== h) {
      canvas.width = w;
      canvas.height = h;
    }
  }

  function draw() {
    raf = null;
    if (dead) return;
    resize();
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    ctx.clearRect(0, 0, w, h);

    const gap = Math.max(1, Math.round(w / bars * 0.28));
    const bw = Math.max(1, (w - gap * (bars - 1)) / bars);
    const mid = h / 2;

    for (let i = 0; i < bars; i++) {
      const v = history[i];
      // Always draw something so the meter reads as "present, listening"
      // rather than looking broken when the room is silent.
      const amp = Math.max(0.045, v);
      const bh = amp * (h * 0.92);
      const x = i * (bw + gap);
      const newest = i === bars - 1;

      ctx.fillStyle = v <= 0.02 ? IDLE : (v < QUIET ? SOFT : GOOD);
      ctx.globalAlpha = newest ? 1 : 0.35 + 0.65 * (i / bars);
      roundRect(ctx, x, mid - bh / 2, bw, bh, Math.min(bw / 2, 3));
      ctx.fill();
    }
    ctx.globalAlpha = 1;
  }

  function roundRect(ctx, x, y, rw, rh, r) {
    const rr = Math.min(r, rw / 2, rh / 2);
    ctx.beginPath();
    if (ctx.roundRect) { ctx.roundRect(x, y, rw, rh, rr); return; }
    ctx.moveTo(x + rr, y);
    ctx.arcTo(x + rw, y, x + rw, y + rh, rr);
    ctx.arcTo(x + rw, y + rh, x, y + rh, rr);
    ctx.arcTo(x, y + rh, x, y, rr);
    ctx.arcTo(x, y, x + rw, y, rr);
    ctx.closePath();
  }

  function schedule() {
    if (raf == null && !dead) raf = requestAnimationFrame(draw);
  }

  schedule();   // paint the idle state immediately

  return {
    /* Feed a 0..1 level. Drawing is coalesced to one paint per frame, so this
     * is safe to call straight from an audio callback. */
    push(level) {
      history.push(Math.max(0, Math.min(1, level || 0)));
      history.shift();
      schedule();
    },
    clear() { history.fill(0); schedule(); },
    destroy() {
      dead = true;
      if (raf != null) cancelAnimationFrame(raf);
      raf = null;
    }
  };
}

export { QUIET as QUIET_LEVEL };
