#!/usr/bin/env bash
set -euo pipefail

target="$HOME/.codex/pets/jane1"

if [ -d "$target" ]; then
  rm -rf "$target"
  echo "Jane1 removed from: $target"
else
  echo "Jane1 is not installed at: $target"
fi

echo "Restart Codex to refresh the pet list."
