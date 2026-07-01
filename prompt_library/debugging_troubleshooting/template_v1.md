---
template_id: debugging_troubleshooting_v1
family: debugging_troubleshooting
display_name: Debugging Troubleshooting Prompt Template
version: 1
status: active
recommended_mode: minimal_token_efficiency
---

# Debugging Troubleshooting Prompt Template — v1

## Purpose

Diagnose failures, isolate root causes, and produce the smallest safe fix with clear verification steps.

## Required context fields

- `symptom`: What is failing.
- `error_output`: Exact error text if available.
- `environment`: OS, runtime, framework, versions.
- `recent_changes`: What changed before the issue appeared.
- `expected_behavior`: What should happen instead.

## Preferred output structure

1. Likely cause.
2. Evidence.
3. Smallest safe fix.
4. Commands to verify.
5. Next fallback if the fix fails.

## Critique dimensions

- Is the diagnosis grounded in evidence?
- Is the fix minimal?
- Are verification steps concrete?
