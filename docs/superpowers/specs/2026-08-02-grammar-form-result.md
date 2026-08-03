# Grammar Form Result — Vosk Miscue Detection

Date: 2026-08-03

Decision: **use the word-loop grammar form**:

```js
JSON.stringify([...new Set(words), '[unk]'])
```

The phrase form is not used. It did detect the skipped word in Trial B, but Trial C returned
`beaver` at low confidence for a substitution where the child said `big`. With the app's
conservative confidence gate, that would be forgiven and the real error could slide through.
The word-loop form passed the decisive omission trial and returned `[unk]` for substitution
and invention.

## Word-Loop Form

```text
form=words
trial=A Clean read
said=the beaver builds a strong dam
heard:
the  1.00
beaver  1.00
builds  1.00
a  1.00
strong  1.00
a  0.55
dam  1.00

form=words
trial=B Omission
said=the beaver builds a dam
heard:
the  1.00
beaver  1.00
builds  1.00
a  1.00
dam  1.00

form=words
trial=C Substitution
said=the beaver builds a big dam
heard:
the  1.00
beaver  1.00
builds  1.00
a  1.00
[unk]  1.00
dam  1.00

form=words
trial=D Invention
said=the beaver builds a florp dam
heard:
the  1.00
beaver  1.00
builds  1.00
a  1.00
[unk]  1.00
```

## Phrase Form

```text
form=phrase
trial=A Clean read
said=the beaver builds a strong dam
heard:
beaver  1.00
builds  1.00
a  1.00
strong  1.00
dam  1.00

form=phrase
trial=B Omission
said=the beaver builds a dam
heard:
the  1.00
beaver  1.00
builds  1.00
a  0.54
dam  1.00

form=phrase
trial=C Substitution
said=the beaver builds a big dam
heard:
the  1.00
beaver  1.00
builds  1.00
a  1.00
beaver  0.52
dam  1.00

form=phrase
trial=D Invention
said=the beaver builds a florp dam
heard:
the  1.00
the  1.00
beaver  1.00
builds  1.00
a  0.63
[unk]  1.00
```

## Reasoning

Trial B was the blocking gate for omission detection. Both forms omitted `strong` when the
reader skipped it, so omission detection is viable.

The word-loop form is the better fit for this app because:

- Trial B: `strong` was absent when skipped.
- Trial C: `big` surfaced as `[unk]` with high confidence.
- Trial D: `florp` surfaced as `[unk]`.

The phrase form is rejected because Trial C produced a low-confidence in-grammar word rather
than `[unk]`. Since the app deliberately forgives low-confidence mismatches, that behavior
works against the central goal of catching invented/substituted words without false
corrections.
