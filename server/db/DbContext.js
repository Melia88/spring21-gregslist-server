import mongoose from "mongoose";
import CarSchema from "../models/Car";
import ValueSchema from "../models/Value";
import HousesSchema from "../models/House"
import JobsSchema from "../models/Job"


// this is where models get registered and access from the db
class DbContext {
  Values = mongoose.model("Value", ValueSchema);
  Cars = mongoose.model("Car", CarSchema);

  Houses = mongoose.model("House", HousesSchema);
  Jobs = mongoose.model("Job", JobsSchema);
}

export const dbContext = new DbContext();
