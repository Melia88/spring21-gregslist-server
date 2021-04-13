import {dbContext} from "../db/DbContext"
import {BadRequest} from "../utils/Errors"

class HousesService {
 async getAll(query = {}) {
    return await dbContext.Houses.find(query)
  }
 async getOne(id) {
    let data = await dbContext.Houses.findOne({_id: id})
    if (!data){
      throw new BadRequest("No ID for you!")
    }
    return (data)
  }
 async create(body) {
    return await dbContext.Houses.create(body)
  }
 async edit(body) {
    let data = await dbContext.Houses.findOneAndUpdate({_id: body.id}, body, {new: true})
    if(!data){
      throw new BadRequest("Wrong ID cant edit!")
    }
    return data
  }
 async delete(id) {
    let data = await dbContext.Houses.findOneAndDelete({_id: id})
    if(!data){
      throw new BadRequest("ID not valid, NOT deleted!")
    }
    return "Its been deleted!"
  }

}

export const housesService = new HousesService();