import { housesService } from "../services/HousesService";
import BaseController from "../utils/BaseController";


export class HousesController extends BaseController{
  constructor(){
    super('/api/houses')
    this.router
      .get("/", this.getAll)
      .get("/:id", this.getOne)
      .post("", this.create)
      .put("/:id", this.edit)
      .delete("/:id", this.delete)
  }
  async getAll(req, res, next) {
     try {
       let data = await housesService.getAll(req.query)
       return res.send(data)
     } catch (error) {
       next(error)
     }
   }
   async getOne(req, res, next) {
      try {
        let data = await housesService.getOne(req.params.id)
        return res.send(data)
      } catch (error) {
        next(error)
      }
    }
    async create(req, res, next) {
       try {
         let data = await housesService.create(req.body)
         return res.send(data)
       } catch (error) {
         next(error)
       }
      }
      async edit(req, res, next) {
         try {
           // this allows us to use the id on the url on the body if it isnt provided
           req.body.id = req.params.id
           let data = await housesService.edit(req.body)
           return res.send(data)
         } catch (error) {
           next(error)
         }
       }
 async delete(req, res, next) {
    try {
      let data = await housesService.delete(req.params.id)
      return res.send(data)
    } catch (error) {
      next(error)
    }
  }


}