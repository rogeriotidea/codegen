import { expect, describe, test, jest, beforeEach } from "@jest/globals";
import Util from "./../../src/util.js";

describe("#Util - String", () => {
  beforeEach(() => {
    jest.restoreAllMocks();
    jest.clearAllMocks();
  });

  test("#upperCaseFirstLetter should transform the first letter in upperCase", () => {
    const data = "hello";
    const expected = "Hello";
    const result = Util.upperCaseFirstLetter(data);
    expect(result).toBe(expected);
  });

  test("#lowerCaseFirstLetter should transform the first letter in lowerCase", () => {
    const data = "Hello";
    const expected = "hello";
    const result = Util.lowerCaseFirstLetter(data);
  });

  test("#lowerCaseFirstLetter give an empty string it should return empty", () => {
    const data = "";
    const expected = "";
    const result = Util.lowerCaseFirstLetter(data);
    expect(result).toBe(expected);
  });

  test("#upperCaseFirstLetter give an empty string it should return empty", () => {
    const data = "";
    const expected = "";
    const result = Util.upperCaseFirstLetter(data);
    expect(result).toBe(expected);
  });
});
