const pet = document.querySelector('#pet');
const controls = document.querySelector('.controls');

let manifest;
let currentAction;
let frameIndex = 0;
let timer;

async function loadManifest() {
  const response = await fetch('../assets/actions.json');
  manifest = await response.json();
  setAction(manifest.defaultAction || 'idle');
}

function getAction(id) {
  return manifest.actions.find((action) => action.id === id) || manifest.actions[0];
}

function setAction(id) {
  const nextAction = getAction(id);
  if (!nextAction || currentAction?.id === nextAction.id) return;

  currentAction = nextAction;
  frameIndex = 0;
  window.clearInterval(timer);
  showFrame();

  const interval = Math.max(60, Math.round(1000 / (currentAction.fps || 8)));
  timer = window.setInterval(showFrame, interval);
}

function showFrame() {
  if (!currentAction || currentAction.frames.length === 0) return;
  pet.src = `../${currentAction.frames[frameIndex]}`;
  frameIndex = (frameIndex + 1) % currentAction.frames.length;
}

controls.addEventListener('click', (event) => {
  const button = event.target.closest('button[data-action]');
  if (button) setAction(button.dataset.action);
});

pet.addEventListener('mouseenter', () => {
  window.jane1Pet?.setIgnoreMouse(false);
});

pet.addEventListener('mouseleave', () => {
  window.jane1Pet?.setIgnoreMouse(false);
});

window.jane1Pet?.onSetAction(setAction);

loadManifest().catch((error) => {
  console.error('Failed to load Jane1 pet actions:', error);
});
