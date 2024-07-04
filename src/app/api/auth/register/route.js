import User from "@/models/User";
import bcrypt from "bcryptjs";  // lib criptografa senha
import connect from "@/utils/db";
import { NextResponse } from "next/server";

export async function POST(req) {
    try {
        const { name, email, password } = await req.json();

        await connect();

        const emailExists = await User.findOne({ email });
    
        if (emailExists) {
            return NextResponse.json({
                message: "Email já cadastrado!",
                status: 409, // Retornacaso n dê certo
            })
        };

    
        const hashedPassword = await bcrypt.hash(password, 5);

        const newUser = new User ({
            name,
            email,
            password: hashedPassword,
        });

        await newUser.save();

        return NextResponse.json ({
            message: "Usuário criado com sucesso!", 
            status: 201, 
        });

    }   catch (error){
        console.log({ rr});
        return NextResponse.json({
            erro: "Erro ao cadastrar usuário",
            status: 500, 
        });

    }
}






