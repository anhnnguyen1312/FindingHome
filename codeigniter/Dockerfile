# Sử dụng image PHP có sẵn
FROM php:7.4-apache

# Thiết lập thư mục làm việc
WORKDIR /var/www/html

# Sao chép mã nguồn của CodeIgniter vào container
COPY . .

# Cài đặt các dependency cần thiết (ví dụ: MySQLi)
RUN docker-php-ext-install mysqli

# Khởi động Apache
CMD ["apache2-foreground"]
