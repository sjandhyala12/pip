# vendor/

`vosk.js` - vosk-browser 0.0.8, Apache-2.0, from https://github.com/ccoreilly/vosk-browser

Vendored rather than loaded from a CDN because the app makes no third-party requests, and
because the package is pre-1.0 with a single maintainer. It is one self-contained UMD file
with the Kaldi WASM base64-embedded, so there is no separate `.wasm` to fetch.

To update: `npm pack vosk-browser@<version>` and copy `package/dist/vosk.js` here.
