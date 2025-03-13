
export default class ObjectService {
    constructor ({ repository: objectRepository }){
        this.objectRepository = objectRepository
    }

    create(data) {
        return this.objectRepository.create(data)
    }
    
    read(query) {
        return this.objectRepository.read(query)
    }
    
    update(id, data) {
        return this.objectRepository.update(id, data)
    }
    
    delete(id) {
        return this.objectRepository.delete(id)
    }
}