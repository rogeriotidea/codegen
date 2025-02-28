export default class Util {
  static #transform({ _str: [first, ...rest], upperCase = true }) {
    if (!first) return "";
    const firstLetter = upperCase ? first.toUpperCase() : first.toLowerCase();
    return [firstLetter, ...rest].join("");
  }
  static upperCaseFirstLetter(str) {
    return Util.#transform({ _str: str, upperCase: true });
  }

  static lowerCaseFirstLetter(str) {
    return Util.#transform({ _str: str, upperCase: false });
  }
}
