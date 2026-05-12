const fs = require('node:fs');
const path = require('node:path');

const root = path.resolve(__dirname, '..');
const manifestPath = path.join(root, 'assets', 'actions.json');
const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));

if (!Array.isArray(manifest.actions) || manifest.actions.length === 0) {
  throw new Error('assets/actions.json must contain at least one action.');
}

for (const action of manifest.actions) {
  if (!action.id || !Array.isArray(action.frames) || action.frames.length === 0) {
    throw new Error(`Action ${action.id || '<missing id>'} has no frames.`);
  }

  for (const frame of action.frames) {
    const framePath = path.join(root, frame);
    if (!fs.existsSync(framePath)) {
      throw new Error(`Missing frame for ${action.id}: ${frame}`);
    }
  }
}

console.log(`Validated ${manifest.actions.length} actions for ${manifest.name}.`);
