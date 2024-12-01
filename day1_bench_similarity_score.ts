import { input_filename } from "./day1.ts";
import { parse_location_list } from "./day1.ts";
import { calculate_similarity_score_nested_for } from "./day1.ts";
import { calculate_similarity_score_filter } from "./day1.ts";

const lists = parse_location_list(await Deno.readTextFile(input_filename));

Deno.bench({
  name: "nested for",
  baseline: true,
  fn() {
    calculate_similarity_score_nested_for(lists);
  },
});
Deno.bench({
  name: "for with nested filter",
  fn() {
    calculate_similarity_score_filter(lists);
  },
});
