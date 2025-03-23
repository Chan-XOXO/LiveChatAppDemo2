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
FROM node:18-alpine as builder

WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy all other frontend files
COPY . .

# Build the app
RUN npm run build

# Step 2: Serve the build with NGINX
FROM nginx:stable-alpine

# Copy built frontend (from builder stage) to NGINX public folder
COPY --from=builder /app/dist /usr/share/nginx/html

# Optionally copy custom NGINX config
# COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]