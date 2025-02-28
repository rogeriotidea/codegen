const componentNameAnchor = "$$componentName";
import Util from "./../util.js";

const template = `
export default class $$componentNameRepository {
  constructor() {}

  create(data) {
    return Promise.reject("Not implemented");
  }

  read(query) {
    return Promise.reject("Not implemented");
  }

  update(id, data) {
    return Promise.reject("Not implemented");
  }

  delete(id) {
    return Promise.reject("Not implemented");
  }
}`;

export function repositoryTemplate(componentName) {
  return {
    fileName: `${componentName}Repository`,
    template: template.replaceAll(
      componentNameAnchor,
      Util.upperCaseFirstLetter(componentName)
    ),
  };
}
