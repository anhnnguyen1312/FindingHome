# Sử dụng image PHP có sẵn
FROM php:8.0-apache

# Thiết lập thư mục làm việc
WORKDIR /var/www/html

# Sao chép mã nguồn của CodeIgniter vào container
COPY . .

# Cài đặt các dependency cần thiết (ví dụ: MySQLi)
RUN docker-php-ext-install mysqli

# Bật module rewrite trong Apache
RUN a2enmod rewrite

# Khởi động Apache
CMD ["apache2-foreground"]
