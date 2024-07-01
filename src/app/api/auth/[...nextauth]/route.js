import User from "@/models/User";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import connect from "@/utils/db";

// Página de configuração de credencias

const options = NextAuth({
  providers: [
    CredentialsProvider({ //Via receber as informações que eu colocar no banco
      id: "Credentials",
      name: "Credentials",
      async authorize(credentials) {
        await connect();

        try {
          const user = await User.findOne({
            email: credentials.email,
          });

          if (user) {
            const validPassword = await bcrypt.compare( // Compare as senhas
              credentials.password,
              user.password
            );

            if (validPassword) { // Se for válido retorne a sessão
              return user;
            } else {
              throw new Error("Credenciais erradas!"); //Se não 
            }
          } else {
            throw new Error("Credenciais erradas!");
          }
        } catch (error) {
          throw new Error(error);
        }
      },
    }),
  ],
  pages: {
    error: "/login",
  },
});

export { options as GET, options as POST };