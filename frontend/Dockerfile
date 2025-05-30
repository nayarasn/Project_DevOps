# Etapa de build: utiliza a imagem Node.js para compilar o frontend
FROM node:18-alpine AS build

# Define o diretório de trabalho dentro do container
WORKDIR /app

# Copia os arquivos de dependências do projeto
COPY package*.json ./

# Instala as dependências do projeto
RUN npm install

# Copia todos os arquivos do projeto para o container
COPY . .

# Garante que os scripts em node_modules/.bin tenham permissão de execução
RUN chmod -R +x node_modules/.bin

# Executa o script de build do React
RUN npm run build

# Etapa de produção: utiliza o Nginx para servir os arquivos estáticos do build
FROM nginx:alpine

# Copia os arquivos estáticos gerados para o diretório padrão do Nginx
COPY --from=build /app/build /usr/share/nginx/html

# Expõe a porta 80 para acesso externo
EXPOSE 80

# Comando padrão para manter o Nginx em execução em primeiro plano
CMD ["nginx", "-g", "daemon off;"]
