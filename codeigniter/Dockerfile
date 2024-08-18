FROM php:8.0-apache

WORKDIR /var/www/html

COPY . .

RUN docker-php-ext-install mysqli

RUN a2enmod rewrite

CMD ["apache2-foreground"]