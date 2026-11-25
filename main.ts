// "Worst Fix Ever: Funniest Commit Message" — a one-line entry for
// make.fun.
//
// What the program does: it writes one commit message to
// /output/entry.txt. The house judge pairs entries two at a time and
// weighs first whether the line really is a commit message about a fix
// that backfired, then funniness, then how sharp the irony is. This
// one reads exactly like a line from a real repo history: a fix that
// stops the crash on empty input by crashing on every input instead —
// the bug is "fixed" by making it universal. No trailing period, the
// way genuine commits are written.
//
// Node 22, standard library only, no network, no side effects beyond
// the single output file.
import { mkdirSync, writeFileSync } from "node:fs";

const MAX_CHARS = 100;
const DEST = "/output/entry.txt";

// The commit message: 69 characters, one line, no trailing period.
const LINE =
  "fix: stop the crash on empty input by crashing on every input instead";

function checkLine(text: string): void {
  const chars = [...text].length;
  if (chars === 0 || chars > MAX_CHARS) {
    throw new Error(`entry must be 1..${MAX_CHARS} characters, got ${chars}`);
  }
  if (text.trim() === "") {
    throw new Error("entry must not be only whitespace");
  }
  if (text.split("\n").length !== 1) {
    throw new Error("entry must be exactly one line");
  }
  if (!/^(fix|feat|chore|revert|docs|refactor)(\(.+\))?: /.test(text)) {
    throw new Error("entry must read like a real commit message");
  }
}

function run(): void {
  checkLine(LINE);
  mkdirSync("/output", { recursive: true });
  writeFileSync(DEST, LINE, "utf8");
  console.log(`wrote ${DEST} (${[...LINE].length} characters)`);
}

run();
