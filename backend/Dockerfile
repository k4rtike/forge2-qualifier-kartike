FROM php:8.4-apache

RUN apt-get update && apt-get install -y \
    git curl zip unzip libsqlite3-dev libzip-dev \
    && docker-php-ext-install pdo pdo_sqlite zip \
    && a2enmod rewrite

COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

WORKDIR /var/www/html
COPY . .

RUN composer install --no-dev --optimize-autoloader
RUN cp .env.example .env
RUN php artisan key:generate --force
RUN touch database/database.sqlite
RUN chmod -R 777 storage database
RUN php artisan migrate --force

EXPOSE 80
CMD ["apache2-foreground"]