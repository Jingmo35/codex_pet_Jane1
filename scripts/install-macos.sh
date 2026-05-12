#!/usr/bin/env bash
set -euo pipefail

repo_raw="https://raw.githubusercontent.com/Jingmo35/codex_pet_Jane1/main/pet/jane1"
target="$HOME/.codex/pets/jane1"

mkdir -p "$target"

curl -fsSL "$repo_raw/pet.json" -o "$target/pet.json"
curl -fsSL "$repo_raw/spritesheet.webp" -o "$target/spritesheet.webp"

echo "Jane1 installed to: $target"
echo "Restart Codex, then choose Jane1 in the appearance or pet settings."
