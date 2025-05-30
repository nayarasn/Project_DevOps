# Imagem base
FROM node:18-alpine

# Diretório de trabalho dentro do container
WORKDIR /app

# Copiar package.json e instalar dependências
COPY package*.json ./
RUN npm install

# Copiar o restante da aplicação
COPY . .

# Porta que o container vai expor
EXPOSE 5000

# Comando para iniciar o servidor
CMD ["node", "index.js"]
