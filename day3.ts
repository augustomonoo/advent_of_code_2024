const input = "day3_input.txt";
export function parse_input(data: string) {
  let result = 0;
  let computing = true;
  for (const match of data.matchAll(
    /(do\(\)|don't\(\)|mul\((\d\d?\d?),(\d\d?\d?)\))/g,
  )) {
    if (match[0] === "do()") computing = true;
    else if (match[0] === "don't()") computing = false;
    else if (computing) result += parseInt(match[2]) * parseInt(match[3]);
  }
  return result;
}
if (import.meta.main) {
  const data = await Deno.readTextFile(input);
  console.log(parse_input(data));
}
