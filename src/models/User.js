import mongoose from "mongoose";

 //Propriedade

const userSchema = new mongoose.Schema(
    {
        name: {type: String, required: true}, //obrigatório
        email: {type: String, required: true, unique: true}, //obrigatório e único
        password: {type: String, required: true}, //obrigatório e único
    },
    {timestamps: true} // segundo parâmetro do schema, qunado eu crio um usuário ele armazena esse data automaticamente, e quando altero, ele tbm altera essa data
);

export default mongoose.models.user || mongoose.model("user", userSchema); // contsante verifica se já n esta estanciado, para que n estancie 2 vezes o esquema



// esse arquivo é responsável pelo. esquema da tabela