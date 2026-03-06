# Orbitforge Workflows

## Workflow A: Regeneration
- Modify `data/tasks.json`.
- Run `node scripts/generate_summary.js`.
- Confirm clean diff for expected output semantics.

## Workflow B: Validation
- Run `node scripts/verify_summary.js`.
- If it fails, regenerate and inspect changes.

## Workflow C: Intentional Change Example
- Add a new task in `tasks.json` with a new owner.
- Regenerate summary.
- Confirm `byOwner` and `totalPoints` updated.
