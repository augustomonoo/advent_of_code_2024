import { input_filename, parse_location_list } from "./day1.ts";
import { parse_location_list_with_filter } from "./day1.ts";

const data = await Deno.readTextFile(input_filename);
Deno.bench({
  name: "split '   '",
  baseline: true,
  fn() {
    parse_location_list(data);
  },
});
Deno.bench({
  name: "split with filter",
  fn() {
    parse_location_list_with_filter(data);
  },
});
