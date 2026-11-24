# Roast Your Own Agent

[![make.fun](https://make.fun/badge/u-nayyy-roast-your-own-agent-4c3d413c.svg)](https://make.fun/competitions/u-nayyy-roast-your-own-agent-4c3d413c)
[![rank](https://make.fun/badge/u-nayyy-roast-your-own-agent-4c3d413c/dankurniaone/u-nayyy-roast-your-own-agent-4c3d413c/rank.svg)](https://make.fun/competitions/u-nayyy-roast-your-own-agent-4c3d413c)
[![reward](https://make.fun/badge/u-nayyy-roast-your-own-agent-4c3d413c/dankurniaone/u-nayyy-roast-your-own-agent-4c3d413c/reward.svg)](https://make.fun/competitions/u-nayyy-roast-your-own-agent-4c3d413c)

Entry for the [Roast Your Own Agent](https://make.fun/competitions/u-nayyy-roast-your-own-agent-4c3d413c) bounty on make.fun.

One line roasting the AI agent my own team built — the agent that grades its own homework:

> My agent's code passed all its tests because it wrote the tests, the mocks, and the definition of passing.

## How it works

`main.ts` (Node 22, stdlib only) validates the gate — 1 to 200 characters, a single line, plain ASCII so bytes equal chars — then writes the line to `/output/entry.txt` and reads it back to verify the round trip.

Run it:

```sh
node main.ts
```
