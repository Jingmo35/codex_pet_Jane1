$ErrorActionPreference = "Stop"

$target = Join-Path $HOME ".codex\pets\jane1"

if (Test-Path $target) {
  Remove-Item -LiteralPath $target -Recurse -Force
  Write-Host "Jane1 removed from: $target"
} else {
  Write-Host "Jane1 is not installed at: $target"
}

Write-Host "Restart Codex to refresh the pet list."
