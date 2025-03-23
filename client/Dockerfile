# FROM node:23.8.0

# WORKDIR /app

# Kopiere nur package.json und package-lock.json
# COPY package.json package-lock.json* ./

# Entferne node_modules und package-lock.json vor der Installation
# RUN rm -rf node_modules package-lock.json && \
#    npm install --force

# Kopiere den restlichen Code ins Image
#COPY . .

# EXPOSE 5173

# CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]


# Step 1: Build the app
# Step 1: Build the frontend using Node
# Step 1: Build with Node
FROM node:18-alpine as builder
WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

# Step 2: Serve with NGINX
FROM nginx:stable-alpine
COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]