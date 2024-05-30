# Sử dụng image node chính thức để tạo bản build
FROM node:14 AS build

# Tạo và đặt thư mục làm việc
WORKDIR /app

# Sao chép package.json và package-lock.json
COPY package*.json ./

# Cài đặt các dependencies
RUN npm install

# Sao chép toàn bộ mã nguồn vào thư mục làm việc
COPY . .

# Xây dựng ứng dụng React
RUN npm run build

# Sử dụng image nginx chính thức để phục vụ ứng dụng
FROM nginx:alpine

# Sao chép file build từ giai đoạn trước sang nginx để phục vụ
COPY --from=build /app/build /usr/share/nginx/html

# Expose cổng 80 để truy cập
EXPOSE 80

# Chạy nginx
CMD ["nginx", "-g", "daemon off;"]
