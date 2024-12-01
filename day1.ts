export const input_filename = "day1_input.txt";

export function parse_location_list(data: string): number[][] {
  const lists: number[][] = [[], []];
  for (const line of data.split("\n")) {
    if (!line) {
      continue;
    }
    const l = line.split("   ");
    lists[0].push(parseInt(l[0]));
    lists[1].push(parseInt(l[1]));
  }
  lists[0].sort();
  lists[1].sort();
  return lists;
}

export function parse_location_list_with_filter(data: string): number[][] {
  const lists: number[][] = [[], []];
  for (const line of data.split("\n")) {
    if (!line) {
      continue;
    }
    const l = line.split(" ").filter((el) => el != "");
    lists[0].push(parseInt(l[0]));
    lists[1].push(parseInt(l[1]));
  }
  lists[0].sort();
  lists[1].sort();
  return lists;
}

export function calculate_total_distance(lists: number[][]): number {
  let total_distance = 0;
  for (let index = 0; index < lists[0].length; index++) {
    total_distance += Math.abs(lists[0][index] - lists[1][index]);
  }
  return total_distance;
}

export function calculate_similarity_score_nested_for(
  lists: number[][],
): number {
  let score = 0;
  for (const l1 of lists[0]) {
    let mult = 0;
    for (const l2 of lists[1]) {
      if (l2 > l1) {
        break;
      }
      if (l2 === l1) {
        mult += 1;
      }
    }
    score += l1 * mult;
  }
  return score;
}

export function calculate_similarity_score_filter(lists: number[][]): number {
  let score = 0;
  for (const l1 of lists[0]) {
    const mult = lists[1].filter(function (el) {
      return el === l1;
    }).length;
    score += l1 * mult;
  }
  return score;
}

if (import.meta.main) {
  const lists = parse_location_list(await Deno.readTextFile(input_filename));
  const total_distance = calculate_total_distance(lists);
  const similarity_score = calculate_similarity_score_nested_for(lists);
  console.log(total_distance);
  console.log(similarity_score);
}
