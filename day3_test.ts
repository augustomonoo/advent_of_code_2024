import { assertEquals } from "jsr:@std/assert";
import { parse_input } from "./day3.ts";
const sample =
  "xmul(2,4)&mul[3,7]!^don't()_mul(5,5)+mul(32,64](mul(11,8)undo()?mul(8,5))";

Deno.test("Test parsing", () => {
  assertEquals(parse_input(sample), 48);
});
