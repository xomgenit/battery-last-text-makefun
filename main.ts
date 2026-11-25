import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The battery's farewell, built as two beats: the sacrifice, then the
// sign-off. A last text should sound like someone leaving on their own
// terms, not like a status report.
//
// Why this lands: the battery does not complain about dying — it brags
// about what it spent its last energy on. Keeping the alarm alive is a
// specific, selfless job, and "You're welcome" turns the death into a
// favour the charger can never repay. Goodbye is the period at the end
// of a life, not the start of a complaint.
const sacrifice = "I spent my last percent keeping your alarm alive.";
const signOff = "You're welcome. Goodbye.";

const entry = [sacrifice, signOff].join(" ");

// Gate: one line, 1-200 characters, plain UTF-8 text.
if (entry.length < 1 || entry.length > 200 || entry.includes("\n")) {
  throw new Error(`entry must be 1-200 chars on one line, got ${entry.length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "out";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), entry, "utf8");
