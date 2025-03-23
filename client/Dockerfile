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
FROM node:20-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

# Step 2: Serve with Nginx
FROM nginx:stable-alpine

# Copy built files to Nginx html folder
COPY --from=builder /app/dist /usr/share/nginx/html

# Copy default nginx config (optional)
# You can skip this if you're not customizing nginx.conf
# COPY nginx.conf /etc/nginx/nginx.conf

# Expose port 80
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]