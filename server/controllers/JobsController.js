import { jobsService } from "../services/JobsService";
import BaseController from "../utils/BaseController";


export class JobsController extends BaseController{
  constructor(){
    super('/api/jobs')
    this.router
      .get("/", this.getAll)
      .get("/:id", this.getOne)
      .post("", this.create)
      .put("/:id", this.edit)
      .delete("/:id", this.delete)
  }
  async getAll(req, res, next) {
     try {
       let data = await jobsService.getAll(req.query)
       return res.send(data)
     } catch (error) {
       next(error)
     }
   }
   async getOne(req, res, next) {
      try {
        let data = await jobsService.getOne(req.params.id)
        return res.send(data)
      } catch (error) {
        next(error)
      }
    }
    async create(req, res, next) {
       try {
         let data = await jobsService.create(req.body)
         return res.send(data)
       } catch (error) {
         next(error)
       }
      }
      async edit(req, res, next) {
         try {
           // this allows us to use the id on the url on the body if it isnt provided
           req.body.id = req.params.id
           let data = await jobsService.edit(req.body)
           return res.send(data)
         } catch (error) {
           next(error)
         }
       }
 async delete(req, res, next) {
    try {
      let data = await jobsService.delete(req.params.id)
      return res.send(data)
    } catch (error) {
      next(error)
    }
  }


}