FROM php:8.1-apache

WORKDIR /var/www/html

COPY . .

RUN docker-php-ext-install mysqli

RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

RUN composer install

RUN composer require firebase/php-jwt

RUN a2enmod rewrite

CMD ["apache2-foreground"]
