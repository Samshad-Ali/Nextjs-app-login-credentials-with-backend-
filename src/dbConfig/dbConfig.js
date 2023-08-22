import mongoose from "mongoose";

export async function connecting() {
  try {
    // const uri=process.env.MONGO_URI;
    const DBuri = `mongodb+srv://sam606166:l1CkXyqpQrwRv8L0@cluster0.m2l1aqc.mongodb.net/?retryWrites=true&w=majority`
    await mongoose.connect(DBuri);
    const connection = mongoose.connection;
    connection.on('connected',()=>{
        console.log("MongoDB is connected successfullly");
    })
    connection.on('error',(err)=>{
        console.log("MongoDB connection error : ",err);
        process.exit();
    })
    console.log("connected with Database...! ",mongoose.connection);
  } catch (error) {
    console.log(error);
  }
};
