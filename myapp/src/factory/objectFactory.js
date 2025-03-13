
import ObjectService from "../service/objectService.js";
import ObjectRepository from "../repository/objectRepository.js";

export default class ObjectFactory {
  static getInstance() {
    const repository = new ObjectRepository();
    const service = new ObjectService({ repository });
    return service;
  }
}