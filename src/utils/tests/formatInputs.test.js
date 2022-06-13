import {
  convertStringToArray,
  convertStringToNumberArray,
} from "../formatInputs";

describe("convert string to array function tests", () => {
  let str = "";
  test("empty string", () => {
    expect(convertStringToArray(str)).toEqual([]);
  });
  test("non-comma-separated string", () => {
    str = "hello world";
    expect(convertStringToArray(str)).toEqual(["hello world"]);
  });
  test("multiple words comma separated  string", () => {
    str = "hello, OSM, world";
    expect(convertStringToArray(str)).toEqual(["hello", "OSM", "world"]);
  });
  test("string starting with #", () => {
    str = "#hello, #OSM, #world";
    expect(convertStringToArray(str)).toEqual(["hello", "OSM", "world"]);
  });
});
