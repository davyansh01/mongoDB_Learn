import mongoose, { Schema } from "mongoose";

// Define Schema:⬇️
// refrence by StackOverFlow⬇️
// const databseSchema = new Schema();
// databseSchema.add({
//   name: { type: String, required: true, trim: true },
//   ratings: { type: Number, required: true, min: 1, max: 5 },
//   money: {
//     type: mongoose.decimal128,
//     required: true,
//     validate: (v) => v >= 10,
//   },
//   genra: { type: Array },
//   isActive: { type: Boolean },
//   Comments: [
//     { value: { type: String }, published: { type: Date, default: Date.now } },
//   ],
// });
// const databseSchema = new mongoose.Schema({
//   name: { type: String, required: true, trim: true },
//   ratings: { type: Number, required: true, min: 1, max: 5 },
//   money: {
//     type: mongoose.decimal128,
//     required: true,
//     validate: (v) => v >= 10,
//   },
//   genra: { type: Array },
//   isActive: { type: Boolean },
//   Comments: [
//     { value: { type: String }, published: { type: Date, default: Date.now } },
//   ],
// });
// const movieModel = mongoose.model("Movie", databseSchema);

// const createDoc = async () => {
//   try {
//     const m1 = new movieModel({
//       name: "Extraction 2",
//       ratings: 4,
//       money: 60,
//       genra: ["action", "adventure"],
//       isActive: true,
//       Comments: [{ value: "This is an amazing movie" }],

//     });
//     const m2 = new movieModel({
//       name: "Eternals",
//       ratings: 4,
//       money: 600,
//       genra: ["action", "adventure"],
//       isActive: true,
//       Comments: [{ value: "amazing movie" }],

//     });
//     const m3 = new movieMod3l({
//       name: "Extraction",
//       ratings: 4,
//       money: 6000,
//       genra: ["action", "adventure"],
//       isActive: true,
//       Comments: [{ value: "This is an action movie" }],

//     });
//     const m4 = new movieModel({
//       name: "Deadpool",
//       ratings: 4,
//       money: 12500,
//       genra: ["action", "adventure"],
//       isActive: true,
//       Comments: [{ value: "No death movie" }],

//     });
//     const m5 = new movieModel({
//       name: "Interstaller",
//       ratings: 4,
//       money: 60,
//       genra: ["Sci-fi", "adventure"],
//       isActive: true,
//       Comments: [{ value: "Best space movie" }],

//     });
//     // const result = await m1.save(); // for inserting single documenst we use await .save() method
//     const result = await movieModel.insertMany([m1,m2,m3,m4,m5])
//     console.log(result);
//   } catch (error) {
//     console.log(error);
//   }
// };

// Retriving all Data⬇️

// const AllDoc = async () => {
//   try {
//     const result = await movieModel.find() // find() Method give all the data or selecting all the document
//     // Iterate Over:
//     result.forEach((movie)=>{
//       console.log(movie.name)
//     })
//   } catch (error) {
//     console.log(error);
//   }
// };

// Retrive sinlge Document⬇️
// const SingleDoc = async () => {
//   try {
//     const result = await movieModel.findById() // in findById("id",field) it give the single document with specify field
//     // await moviesModel.find().limit() // we can specify the limit how much data we want
//     // await moviesModel.find().skin(2) // by specify 2 in the skip it skips the first two documents
//     // await moviesModel.find().countDocuments() // it return the count of our documents 
//     // await moviesModel.find().count({name:1}) // by specify name:1 is sort in ascending order ,when provide -1 sort in descding order

//     //Comparison Operators in Mongoos⬇️
//     // await moviesModel.find({money:{%lt:1000}}) // less Than Operator
//     // await moviesModel.find({money:{%gt:1000}}) // greater Than Operator
//     // await moviesModel.find({money:{%ne:1000}}) // Not Included Operator // it not include that movie which havr money = 1000

//     // Logical Operator⬇️
//     // await moviesModel.find({$and:[{money:1000},{ratings:4}]}) $and And Operator:
//     // await moviesModel.find({$or:[{money:1000},{ratings:4}]}) $or or Operator:
//   } catch (error) {
//     console.log(error)
//   }
// };

// Updating Documnets⬇️
// in this we have two methods
// 1. updateOne()
// 2. updateMany()
// const UpdateById= async(id)=>{
//   try {
//     const result = await movieModel.updateOne({_id:id},{name:"dev_webdev"}) // it upadte by providing the _id
//     // what does it update ? change the movie name of the given id to "dev-webdev "
//     // await movieModel.updateMany({ratings:5},{name:"5 Star Movies"}) // it update all the movie name who's rating is 5
//   } catch (error) {
//     console.log(error)
//   }
// }

// Deleting Document⬇️
// 1. deleteOne() it this u can specify anything like name,ratings,money etc:
// 2.deleteMany()
// 3.findByIdAndDelete()

// const deletedoc = async()=>{
//   const result = await movieModel.findByIdAndDelete() // inside u can provide id for a specific movie and it will be deleted form the database
  // await movieModel.deleteMany({ratings:4}) it delete all movies who's rating is 4:
// }

// export { UpdateById ,SingleDoc, AllDoc, deletedoc };
