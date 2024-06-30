import mongoose from "mongoose"; //importação do mongo

export default async function connect() { //função que acessa varíavel do arquivo .env
    try {
        await mongoose.connect(process.env.MONGO);
        console.log('database connected')
    } catch (error) {
        console.log('database error', error)
        throw new Error("error");
    }
}
