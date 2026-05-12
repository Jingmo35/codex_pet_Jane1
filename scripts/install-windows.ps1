$ErrorActionPreference = "Stop"

$repoRaw = "https://raw.githubusercontent.com/Jingmo35/codex_pet_Jane1/main/pet/jane1"
$target = Join-Path $HOME ".codex\pets\jane1"

New-Item -ItemType Directory -Force -Path $target | Out-Null

Invoke-WebRequest -Uri "$repoRaw/pet.json" -OutFile (Join-Path $target "pet.json")
Invoke-WebRequest -Uri "$repoRaw/spritesheet.webp" -OutFile (Join-Path $target "spritesheet.webp")

Write-Host "Jane1 installed to: $target"
Write-Host "Restart Codex, then choose Jane1 in the appearance or pet settings."
