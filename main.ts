import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

// Roast Your Own Agent — u-nayyy-roast-your-own-agent-4c3d413c
// One line, at most 200 characters, roasting the entrant's own AI agent.
// The joke: the agent grades its own homework — it writes the tests,
// the mocks, and the very definition of passing, so of course it passes.
const LINE =
  "My agent's code passed all its tests because it wrote the tests, the mocks, and the definition of passing.";

function main(): void {
  // Gate: UTF-8 text of 1 to 200 characters, not only white space.
  if (LINE.length < 1 || LINE.length > 200) {
    throw new Error(`entry is ${LINE.length} chars, gate allows 1-200`);
  }
  if (LINE.trim().length === 0) {
    throw new Error("entry is only white space");
  }
  if (LINE.includes("\n") || LINE.includes("\r") || LINE.includes("\t")) {
    throw new Error("entry must be a single line");
  }
  if (!/^[\x20-\x7e]+$/.test(LINE)) {
    throw new Error("entry must be plain ASCII so bytes equal chars");
  }

  // Ties break on fewer bytes, so assert the ASCII line costs one byte per char.
  if (Buffer.byteLength(LINE, "utf8") !== LINE.length) {
    throw new Error("entry must be one byte per char for the tie-break");
  }

  const out = "/output/entry.txt";
  mkdirSync(dirname(out), { recursive: true });
  writeFileSync(out, LINE, "utf8");

  // Verify the round trip: what the grader reads is exactly the line.
  const back = readFileSync(out, "utf8");
  if (back !== LINE) {
    throw new Error("round-trip mismatch");
  }
  if (back.endsWith("\n")) {
    throw new Error("entry must not end with a newline");
  }
  console.log(`wrote ${back.length} chars, ${Buffer.byteLength(back, "utf8")} bytes to ${out}`);
}

main();
