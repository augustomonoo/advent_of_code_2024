export const input_filename = "day2_input.txt";

export function parse_reports(data: string): number[][] {
  const levels: number[][] = [];
  for (const line of data.split("\n")) {
    if (!line) {
      continue;
    }
    levels.push(line.split(" ").map((i) => parseInt(i)));
  }
  return levels;
}

export function very_dumb_validation(report: number[]): boolean {
  const differences = [];
  let previous;
  for (let index = 0; index < report.length; index++) {
    if (previous === undefined) {
      previous = report[index];
      continue;
    }
    differences.push(previous - report[index]);
    previous = report[index];
  }
  if (differences.length === 0) {
    return true;
  }
  const incr = differences.filter((el) => el > 0).length > 0;
  const decr = differences.filter((el) => el < 0).length > 0;
  const repeats = differences.filter((el) => el === 0).length > 0;
  const large_gaps =
    differences.map((el) => Math.abs(el)).filter((el) => el > 3).length > 0;

  if (incr && decr) {
    return false;
  }
  if (repeats) {
    return false;
  }
  if (large_gaps) {
    return false;
  }
  return true;
}

export function fuck_it_brute_force_it_is(report: number[]) {
  for (let index = 0; index < report.length; index++) {
    if (very_dumb_validation(report.toSpliced(index, 1))) {
      return true;
    }
  }
  return false;
}

if (import.meta.main) {
  const reports = parse_reports(await Deno.readTextFile(input_filename));
  console.log(
    reports.map((r) => fuck_it_brute_force_it_is(r)).filter((el) => el).length,
  );
}
