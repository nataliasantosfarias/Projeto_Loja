Este é um projeto [Next.js](https://nextjs.org/) iniciado com [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Como começar

Primeiro, execute o servidor de desenvolvimento:

```bash
npm run dev
# or
yarn dev 
# starting the application
# or
pnpm dev
# or
bun dev
```

Abra [http://localhost:3000](http://localhost:3000) com o seu navegador para ver o resultado.

Você pode começar a editar a página modificando `app/page.js`. A página é actualizada automaticamente à medida que o ficheiro é editado.

Este projeto utiliza [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) para otimizar e carregar automaticamente o Inter, um tipo de letra personalizado do Google.

## Saiba mais

Para saber mais sobre o Next.js, dê uma olhada nos seguintes recursos:

- [Documentação do Next.js](https://nextjs.org/docs) - saiba mais sobre os recursos e a API do Next.js.
- Aprenda Next.js] (https://nextjs.org/learn) - um tutorial interativo do Next.js.

Pode consultar [o repositório Next.js GitHub](https://github.com/vercel/next.js/) - os seus comentários e contribuições são bem-vindos!

Alguns passos/comando para desenvolvimento do projeto

Instala a biblioteca do formik ultilizando o instalador de pacotes YARN

```yarn add formik yup``` 

## Implantar no Vercel

A maneira mais fácil de implantar seu aplicativo Next.js é usar a [Plataforma Vercel](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) dos criadores do Next.js.

Confira nossa [Next.js deployment documentation](https://nextjs.org/docs/deployment) para mais detalhes.

vercel --prod
npm run build