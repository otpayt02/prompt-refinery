param(
  [Parameter(Mandatory = $true)]
  [string]$ProjectPath,

  [string]$ProfileName = "project_profile_template"
)

$ErrorActionPreference = "Stop"

$PackageRoot = Split-Path -Parent $MyInvocation.MyCommand.Path
if (!(Test-Path -LiteralPath $ProjectPath)) {
  throw "ProjectPath does not exist: $ProjectPath"
}

$TargetRoot = Join-Path $ProjectPath ".prompt-loop"
$TargetTemplates = Join-Path $TargetRoot "templates"
New-Item -ItemType Directory -Force -Path $TargetTemplates | Out-Null

Copy-Item -LiteralPath (Join-Path $PackageRoot "copy_into_project\AGENTS.prompt-loop.md") -Destination (Join-Path $TargetRoot "AGENTS.prompt-loop.md") -Force
Copy-Item -LiteralPath (Join-Path $PackageRoot "templates\codex_state_wrapper.md") -Destination (Join-Path $TargetTemplates "codex_state_wrapper.md") -Force
Copy-Item -LiteralPath (Join-Path $PackageRoot "templates\review_state_wrapper.md") -Destination (Join-Path $TargetTemplates "review_state_wrapper.md") -Force
Copy-Item -LiteralPath (Join-Path $PackageRoot "templates\refined_next_prompt_wrapper.md") -Destination (Join-Path $TargetTemplates "refined_next_prompt_wrapper.md") -Force

$ProfileSource = Join-Path $PackageRoot "templates\project_profile_template.md"
if ($ProfileName -eq "karen-dict-scrape") {
  $ProfileSource = Join-Path $PackageRoot "project_profiles\karen-dict-scrape.project_profile.md"
}
Copy-Item -LiteralPath $ProfileSource -Destination (Join-Path $TargetRoot "project_profile.md") -Force

Write-Output "Installed Codex reviewer loop files into $TargetRoot"
Write-Output "Next: merge .prompt-loop/AGENTS.prompt-loop.md into AGENTS.md if this project already uses AGENTS.md."