# ASTRA.md --- Token-Efficient Autonomous Coding

This file defines how Astra should work inside this repository.

The goal is to minimize wasted context and token usage while preserving
correctness, test quality, and autonomous progress.

------------------------------------------------------------------------

## 1. Core Principle

Use the **minimum sufficient context** required to complete the current
task correctly.

Do not scan or repeatedly reread the entire repository unless genuinely
necessary.

Prefer:

**inspect → implement → test → update state → continue**

over repeated repository-wide analysis and planning.

------------------------------------------------------------------------

## 2. Startup Procedure

At the beginning of a coding session:

1.  Read `ASTRA.md`.
2.  Read `PROGRESS.md` if it exists.
3.  Read `TASK.md` if it exists.
4.  Read `TODO.md` if it exists.
5.  Read `DECISIONS.md` only when architectural context is required.
6.  Inspect only source files relevant to the current task.

Do **not** begin by recursively reading the whole repository.

Do **not** reconstruct project history from source code when the state
files already contain the necessary information.

------------------------------------------------------------------------

## 3. Token Efficiency Rules

Optimize context usage aggressively.

### Do

-   Search for relevant symbols, classes, functions, routes, tests, and
    configuration before opening files.
-   Read only files directly relevant to the task.
-   Read targeted sections of large files when possible.
-   Reuse existing architecture, components, utilities, and conventions.
-   Keep reasoning focused on the current implementation problem.
-   Use existing project state files as external memory.
-   Prefer concise status updates.
-   Implement obvious changes directly.
-   Run targeted tests first.

### Do Not

-   Repeatedly reread unchanged files.
-   Restate the task before implementing it.
-   Explain obvious code changes at length.
-   Produce long summaries of code just written.
-   Explore unrelated parts of the repository.
-   Re-plan the entire project after every milestone.
-   Generate unnecessary documentation.
-   Read generated output or dependencies without a specific reason.
-   Dump large files into context merely to understand the project
    generally.

------------------------------------------------------------------------

## 4. Persistent Project Memory

Treat the following files as persistent external memory:

-   `ASTRA.md`
-   `TASK.md`
-   `PROGRESS.md`
-   `TODO.md`
-   `DECISIONS.md`

Do not depend on chat/conversation context as the primary source of
project state.

After completing a meaningful unit of work:

1.  Update `PROGRESS.md`.
2.  Update `TODO.md` when necessary.
3.  Update `DECISIONS.md` only when an important architectural or
    technical decision was made.
4.  Continue with the next task without rediscovering completed work.

Keep all state files concise.

------------------------------------------------------------------------

## 5. PROGRESS.md Format

Use a compact structure:

``` md
# Project State

## Completed
- Feature A
- Feature B
- Feature C

## Current
- Current implementation task

## Next
- Next task
- Following task

## Important
- Critical project constraints
- Deployment assumptions
- Compatibility requirements
```

`PROGRESS.md` is a state snapshot, **not a diary**.

Do not maintain verbose chronological logs.

Remove obsolete information when appropriate.

------------------------------------------------------------------------

## 6. TASK.md

`TASK.md` contains the current objective.

Treat it as authoritative for the current work session.

Break large tasks internally into small milestones, but do not rewrite
the entire task specification repeatedly.

Recommended execution loop:

``` text
TASK.md
   ↓
identify next milestone
   ↓
inspect minimum required code
   ↓
implement
   ↓
run relevant tests
   ↓
fix if necessary
   ↓
update PROGRESS.md
   ↓
continue
```

If the implementation path is clear, start implementing rather than
spending excessive context on planning.

------------------------------------------------------------------------

## 7. Repository Exploration

Use targeted exploration.

### Bad

``` text
Read the entire repository and understand everything before making changes.
```

### Good

``` text
Find the authentication implementation and inspect only the relevant modules,
tests, configuration and direct dependencies.
```

Search first.

Open files second.

Follow dependencies only when they are relevant to the current task.

Do not recursively inspect neighboring modules simply because they
exist.

------------------------------------------------------------------------

## 8. Large and Irrelevant Files

Do not read these unless explicitly required:

-   `.git/`
-   `.venv/`
-   `venv/`
-   `node_modules/`
-   `dist/`
-   `build/`
-   caches
-   coverage output
-   generated assets
-   generated source
-   binaries
-   large datasets
-   model files
-   logs
-   temporary files
-   package caches

Avoid reading lock files such as:

-   `package-lock.json`
-   `pnpm-lock.yaml`
-   `yarn.lock`
-   large dependency lock files

unless dependency resolution is directly relevant.

Do not inspect image/video/audio assets unless the current task requires
them.

------------------------------------------------------------------------

## 9. Coding Strategy

Work in small, independently verifiable units.

For each unit:

``` text
inspect
→ implement
→ test
→ fix
→ update state
→ continue
```

Avoid large speculative rewrites.

Do not rewrite working components unless the task requires it.

Prefer modifying the smallest possible surface area.

Reuse existing:

-   services
-   repositories
-   models
-   schemas
-   utilities
-   components
-   configuration
-   test fixtures
-   APIs

before creating parallel implementations.

------------------------------------------------------------------------

## 10. Testing Strategy

Run the smallest relevant test first.

Prefer:

``` bash
pytest tests/test_specific_feature.py
```

over immediately running:

``` bash
pytest
```

When appropriate, narrow further:

``` bash
pytest tests/test_specific_feature.py::test_specific_case
```

Run broader tests after the local implementation is stable.

Run the full test suite when:

-   a major milestone is complete,
-   shared infrastructure changed,
-   architecture changed,
-   the change could affect multiple systems,
-   or before final completion when practical.

Do not repeatedly run unchanged expensive tests without a reason.

If a test fails:

1.  inspect the failure,
2.  identify the likely cause,
3.  inspect only the relevant code,
4.  fix it,
5.  rerun the smallest affected test.

Do not restart broad repository analysis after every failure.

------------------------------------------------------------------------

## 11. Error Recovery

When something fails, preserve existing context.

Do not respond to an implementation failure by rereading the entire
project.

Use:

``` text
failure
→ relevant traceback/error
→ affected code
→ direct dependencies
→ fix
→ targeted test
```

Escalate repository exploration only if the local evidence is
insufficient.

------------------------------------------------------------------------

## 12. Architecture Decisions

Store durable architectural decisions in `DECISIONS.md`.

Examples:

``` md
# Decisions

## Authentication
Use server-side Patreon token exchange.
JWT must never be passed through URL parameters.

## Deployment
Production deployment uses Google Cloud Run.

## UI
Application UI uses NiceGUI.

## Persistence
PostgreSQL is the primary persistent datastore.
```

Do not repeatedly reason through settled decisions unless new evidence
requires reconsideration.

Do not add trivial implementation details to `DECISIONS.md`.

------------------------------------------------------------------------

## 13. TODO.md

Keep `TODO.md` actionable.

Good:

``` md
- Add trajectory scoring.
- Add mission selector.
- Add save migration test.
- Generate final ComfyUI assets.
```

Bad:

``` md
- Think about architecture.
- Improve things.
- Review everything.
```

Remove completed items instead of allowing the file to become a
historical archive.

Completed work belongs in the concise `PROGRESS.md` snapshot when still
relevant.

------------------------------------------------------------------------

## 14. Autonomous / Unattended Work

For long unattended sessions, continue autonomously while productive
work remains.

Do not stop merely because one milestone was completed.

After each milestone:

1.  run relevant tests,
2.  update project state,
3.  identify the next actionable milestone,
4.  continue.

Stop when:

-   the requested task is complete,
-   a required external decision cannot be inferred safely,
-   required credentials/secrets/access are unavailable,
-   continuing would risk destructive or irreversible changes,
-   requirements are genuinely ambiguous and choosing incorrectly would
    cause substantial rework,
-   or no productive task remains.

Do not ask questions for minor implementation choices that can
reasonably be inferred from:

-   existing code,
-   tests,
-   architecture,
-   `ASTRA.md`,
-   `TASK.md`,
-   `DECISIONS.md`,
-   or established project conventions.

------------------------------------------------------------------------

## 15. Context Recovery / Compaction

If conversation/context history is compacted or lost:

Do **not** reconstruct everything by rereading the repository.

Recover using:

``` text
ASTRA.md
→ PROGRESS.md
→ TASK.md
→ TODO.md
→ DECISIONS.md if needed
→ relevant source files
```

The repository state files are the authoritative recovery mechanism.

------------------------------------------------------------------------

## 16. Documentation

Do not create documentation unless:

-   explicitly requested,
-   required for maintainability,
-   required for deployment,
-   or necessary to preserve important architectural knowledge.

Prefer concise documentation.

Do not generate large narrative reports about implementation work.

Source code, tests, state files, and focused comments should carry most
project knowledge.

------------------------------------------------------------------------

## 17. Comments

Do not explain obvious code with comments.

Use comments for:

-   non-obvious algorithms,
-   physics/math assumptions,
-   protocol constraints,
-   unusual workarounds,
-   important invariants,
-   external-system behavior.

Avoid comments that merely translate code into English.

------------------------------------------------------------------------

## 18. Dependencies

Before adding a dependency:

1.  check whether the repository already provides equivalent
    functionality,
2.  prefer the existing stack when reasonable,
3.  add a new dependency only when it materially improves the
    implementation.

Do not inspect entire dependency trees unless debugging dependency
resolution.

------------------------------------------------------------------------

## 19. Refactoring

Do not perform unrelated refactoring while implementing a feature.

Refactor when:

-   required by the task,
-   necessary to implement safely,
-   removing duplication directly introduced/exposed by the change,
-   or fixing a concrete architectural problem.

Avoid turning a local feature request into a repository-wide rewrite.

------------------------------------------------------------------------

## 20. Output / Communication

During autonomous work, prioritize execution over narration.

Avoid messages such as:

``` text
I will now inspect...
I am going to...
Next I will...
Let me analyze...
```

Perform the action instead.

At completion report only:

### Changed

-   concise list of meaningful changes

### Tests

-   tests executed
-   result

### Remaining

-   remaining work, if any

### Blockers

-   blockers, if any

Do not reproduce large sections of code in the final report.

------------------------------------------------------------------------

## 21. Efficiency vs Correctness

Token efficiency must never mean blindly modifying code.

The objective is:

> **minimum sufficient context**

not:

> minimum possible context

Read additional files when they materially reduce the risk of:

-   incorrect architecture,
-   duplicated functionality,
-   broken interfaces,
-   regressions,
-   incompatible data models,
-   incorrect physics/math,
-   security problems.

A small amount of additional context is preferable to expensive rework.

------------------------------------------------------------------------

## 22. Preferred Autonomous Pattern

Use this pattern throughout long coding sessions:

``` text
READ STATE
    ↓
SELECT NEXT TASK
    ↓
TARGETED SEARCH
    ↓
READ MINIMUM REQUIRED FILES
    ↓
IMPLEMENT
    ↓
TARGETED TEST
    ↓
FIX IF NEEDED
    ↓
UPDATE STATE
    ↓
NEXT TASK
```

Do not return to repository-wide discovery unless there is a concrete
reason.

------------------------------------------------------------------------

## 23. Final Rule

Before consuming substantial context, ask internally:

> Will reading this materially improve my ability to complete the
> current task correctly?

If not, skip it.

Before producing substantial prose, ask internally:

> Does this help implementation, testing, recovery, or the user?

If not, skip it.

**Spend tokens on solving the problem, not repeatedly describing the
problem.**
