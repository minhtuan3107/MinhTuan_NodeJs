import mongoose from "mongoose";
mongoose.set('strictQuery', true);
async function connect (){
    try{
        let connection = await mongoose.connect(process.env.MONGO_URI)
        console.log("Ket noi ok");
        return connection;
    }catch(e){
        console.log(e);
        console.log("Loi khong the ket noi");
    }
}
export default connect;