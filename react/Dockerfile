# Bước 1: Sử dụng Node.js image để xây dựng ứng dụng
FROM node:18 AS build

# Đặt thư mục làm việc
WORKDIR /app

# Sao chép các tệp package.json và package-lock.json
COPY package*.json ./

# Cài đặt các dependencies
RUN npm install

# Sao chép toàn bộ mã nguồn vào thư mục làm việc
COPY . .

# Xây dựng ứng dụng React
RUN npm run build

# Bước 2: Sử dụng Nginx để phục vụ ứng dụng
FROM nginx:alpine

# Sao chép các file build từ container build vào thư mục của Nginx
COPY --from=build /app/build /usr/share/nginx/html

# Cấu hình port mà Nginx sẽ lắng nghe
EXPOSE 3000

# Chạy Nginx
CMD ["nginx", "-g", "daemon off;"]
