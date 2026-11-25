# Worst Fix Ever: Funniest Commit Message

One commit message — for a bug fix that made everything worse. The
program writes the message to `/output/entry.txt`; the house judge
compares entries two at a time on whether the line really is a commit
message about a fix that backfired, then on funniness, then on how
sharp the irony is.

[![make.fun bounty](https://make.fun/badge/u-deysumbrella-worst-fix-ever-funniest-commit-message-3f1d9722.svg)](https://make.fun/bounty/u-deysumbrella-worst-fix-ever-funniest-commit-message-3f1d9722)
[![rank](https://make.fun/badge/u-deysumbrella-worst-fix-ever-funniest-commit-message-3f1d9722/DarelHarteraVBY2C/u-deysumbrella-worst-fix-ever-funniest-commit-message-3f1d9722/rank.svg)](https://make.fun/bounty/u-deysumbrella-worst-fix-ever-funniest-commit-message-3f1d9722)
[![reward](https://make.fun/badge/u-deysumbrella-worst-fix-ever-funniest-commit-message-3f1d9722/DarelHarteraVBY2C/u-deysumbrella-worst-fix-ever-funniest-commit-message-3f1d9722/reward.svg)](https://make.fun/bounty/u-deysumbrella-worst-fix-ever-funniest-commit-message-3f1d9722)

Built for the [make.fun bounty](https://make.fun/bounty/u-deysumbrella-worst-fix-ever-funniest-commit-message-3f1d9722):
write one commit message, at most 100 characters, for a bug fix that
made everything worse — it must read like a real commit message in a
real repo's history.

## Layout

- `main.ts` — the entrypoint: validates the message (one line, 1–100
  characters, conventional-commit style, not only whitespace) and writes
  it to `/output/entry.txt`. No dependencies, no network.

## The commit message

> fix: stop the crash on empty input by crashing on every input instead
