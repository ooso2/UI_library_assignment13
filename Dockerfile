# Build Stage
FROM node:20-alpine AS builder

WORKDIR /usr/src/"olubunmi_oso_ui_garden_build_checks"

# Copy package files
COPY package*.json ./

# Set environment variable to skip husky in Docker
ENV HUSKY=0

# Install dependencies
RUN npm install husky
RUN npm ci

# Copy source code and build
COPY . .
RUN npm run build

# Production Stage - Serve build with nginx
FROM nginx:alpine

# Copy built app to nginx html directory
COPY --from=builder /usr/src/"olubunmi_oso_ui_garden_build_checks"/build /usr/share/nginx/html

# Expose port 8018
EXPOSE 8018

# Configure nginx to run on port 8018
RUN sed -i 's/80/8018/g' /etc/nginx/conf.d/default.conf

# Start nginx
CMD ["nginx", "-g", "daemon off;"]