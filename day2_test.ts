import { assertEquals } from "jsr:@std/assert";
import { fuck_it_brute_force_it_is } from "./day2.ts";

const reports_data = [
  //{ data: [], expected: false },
  { data: [7, 6, 4, 2, 1], expected: true },
  { data: [1, 2, 7, 8, 9], expected: false },
  { data: [9, 7, 6, 2, 1], expected: false },
  { data: [1, 3, 2, 4, 5], expected: true },
  { data: [8, 6, 4, 4, 1], expected: true },
  { data: [1, 3, 6, 7, 9], expected: true },
  { data: [5, 4, 5, 6], expected: true },
  { data: [7, 1, 6, 5], expected: true },
  { data: [1, 1, 2, 3, 4], expected: true },

  { data: [1, 1, 1, 30, 31], expected: false },
  { data: [1, 30, 1, 31, 1, 32], expected: false },
  // Edge cases from
  // https://www.reddit.com/r/adventofcode/comments/1h4shdu/2024_day_2_part2_edge_case_finder/
  { data: [48, 46, 47, 49, 51, 54, 56], expected: true },
  { data: [1, 1, 2, 3, 4, 5], expected: true },
  { data: [1, 2, 3, 4, 5, 5], expected: true },
  { data: [5, 1, 2, 3, 4, 5], expected: true },
  { data: [1, 4, 3, 2, 1], expected: true },
  { data: [1, 6, 7, 8, 9], expected: true },
  { data: [1, 2, 3, 4, 3], expected: true },
  { data: [9, 8, 7, 6, 7], expected: true },
  { data: [7, 10, 8, 10, 11], expected: true },
  { data: [29, 28, 27, 25, 26, 25, 22, 20], expected: true },
  { data: [8, 9, 10, 11], expected: true },

  { data: [90, 89, 86, 84, 83, 79], expected: true },
  { data: [97, 96, 93, 91, 85], expected: true },
  { data: [29, 26, 24, 25, 21], expected: true },
  { data: [36, 37, 40, 43, 47], expected: true },
  { data: [43, 44, 47, 48, 49, 54], expected: true },
  { data: [35, 33, 31, 29, 27, 25, 22, 18], expected: true },
  { data: [77, 76, 73, 70, 64], expected: true },
  { data: [68, 65, 69, 72, 74, 77, 80, 83], expected: true },
  { data: [37, 40, 42, 43, 44, 47, 51], expected: true },
  { data: [70, 73, 76, 79, 86], expected: true },

  // MOAR
  { data: [61, 58, 57, 51, 50, 48], expected: false },
  { data: [39, 35, 38, 36, 34], expected: true },
  { data: [1, 2, 3, 4, 5, 10, 5], expected: false },

  { data: [57, 60, 62, 64, 63, 64, 65], expected: true },
  { data: [45, 38, 35, 33, 30, 28, 26, 25], expected: true },
  { data: [59, 61, 63, 67, 68, 69], expected: false },
  { data: [51, 54, 60, 63, 64, 67, 68], expected: false },
  { data: [7, 11, 14, 15, 17, 18], expected: true },
  { data: [28, 34, 36, 38, 40, 42, 43, 45], expected: true },
  { data: [87, 92, 90, 93, 94], expected: true },
  { data: [95, 94, 92, 94, 93, 91, 90, 87], expected: false },
  { data: [87, 84, 82, 78, 75], expected: false },
  { data: [78, 75, 73, 72, 65, 64], expected: false },
  { data: [96, 92, 90, 87, 84], expected: true },
  { data: [64, 59, 57, 55, 54, 52, 50, 48], expected: true },
  { data: [30, 34, 37, 39, 41, 42, 44, 47], expected: true },
  { data: [45, 38, 35, 33, 30, 28, 26, 25], expected: true },
  { data: [34, 38, 37, 39, 41], expected: true },
  { data: [79, 75, 72, 71, 70, 68], expected: true },
  { data: [62, 68, 70, 71, 73], expected: true },
  { data: [25, 26, 27, 29, 33, 36, 39], expected: false },
  { data: [3, 5, 6, 7, 12, 15], expected: false },
  { data: [53, 52, 51, 50, 46, 44, 42], expected: false },
  { data: [61, 58, 57, 51, 50, 48], expected: false },
  { data: [39, 35, 38, 36, 34], expected: true },
  { data: [58, 59, 61, 64, 62, 64], expected: true },

  // fuck these cases in particular
  { data: [79, 82, 83, 82, 81], expected: false },
  { data: [58, 55, 54, 55, 58], expected: false },
  { data: [25, 24, 23, 22, 21, 24, 26], expected: false },
  { data: [8, 11, 13, 11, 9], expected: false },
  { data: [70, 71, 74, 72, 69], expected: false },
  { data: [71, 69, 66, 68, 70], expected: false },
];

for (const r of reports_data) {
  Deno.test(`check_report_safety ${r.data} === ${r.expected}`, () => {
    assertEquals(fuck_it_brute_force_it_is(r.data), r.expected);
  });
}
