CREATE DATABASE rusty_naildb;
CREATE TABLE products (
id INT NOT NULL AUTO_INCREMENT,
drink VARCHAR(100) NOT NULL, 
`description` VARCHAR(400) NOT NULL,
unit_price DECIMAL(8,2) NOT NULL,
image VARCHAR(200) NOT NULL,
origin VARCHAR(100),
flavour VARCHAR(100),
fashion VARCHAR(100),
PRIMARY KEY (id)
);

CREATE TABLE shopping_carts (
id INT NOT NULL AUTO_INCREMENT,
quantity TINYINT(100) NOT NULL, 
product_id INT NOT NULL,
total_price DECIMAL (8,2) NOT NULL,
user_id INT NOT NULL, 
PRIMARY KEY (id),
FOREIGN KEY (product_id) REFERENCES products(id) ON UPDATE CASCADE ON DELETE CASCADE,
FOREIGN KEY (user_id) REFERENCES users(id) ON UPDATE CASCADE ON DELETE CASCADE
);
CREATE TABLE bills (
id INT NOT NULL AUTO_INCREMENT,
date_bought DATE NOT NULL, 
total_price DECIMAL(8,2) NOT NULL, 
payment_method_id INT NOT NULL, 
shopping_cart_id INT NOT NULL,
PRIMARY KEY (id),
FOREIGN KEY (payment_method_id) REFERENCES payment_methods(id) ON UPDATE CASCADE ON DELETE CASCADE,
FOREIGN KEY (shopping_cart_id) REFERENCES shopping_carts(id) ON UPDATE CASCADE ON DELETE CASCADE
);
CREATE TABLE payment_methods (
id INT NOT NULL AUTO_INCREMENT,
method VARCHAR(100) NOT NULL,
PRIMARY KEY (id)
);
CREATE TABLE users(
id INT NOT NULL AUTO_INCREMENT, 
full_name VARCHAR(100) NOT NULL,
birthdate DATE,
address VARCHAR(200) NOT NULL, 
phone VARCHAR(100), 
email VARCHAR(100) NOT NULL, 
`role` VARCHAR(100) NOT NULL,
`password` CHAR(60) not null,
PRIMARY KEY (id)
);

INSERT INTO products (id, drink, description, unit_price, image, origin, flavour, fashion)
values (DEFAULT, 'tequila', 'trago fuerte', 150, 'logo-rusty.jpg', 'clasico', 'dulce', 'seco');
 INSERT INTO products (id, drink, description, unit_price, image, origin, flavour, fashion)
values (DEFAULT, 'margarita', 'trago suave', 130, 'logo-rusty.jpg', 'nuestros', 'dulce', 'frutal');
INSERT INTO products (id, drink, description, unit_price, image, origin, flavour, fashion)
values (DEFAULT, 'whisky', 'trago fuerte', 290, 'logo-rusty.jpg', 'clasico', 'aperitivo', 'seco');



INSERT INTO shopping_carts (id, quantity , product_id, total_price, user_id)
values (DEFAULT, 2 , 2, 260, 1);
INSERT INTO shopping_carts (id, quantity , product_id, total_price, user_id)
values (DEFAULT, 1 , 3, 290, 2);

INSERT INTO payment_methods (id, method)
values (DEFAULT, 'efectivo');
INSERT INTO payment_methods (id, method)
values (DEFAULT, 'tarjeta debito');
INSERT INTO payment_methods (id, method)
values (DEFAULT, 'tarjeta credito');

INSERT INTO bills (id, date_bought, total_price, payment_method_id, shopping_cart_id)
values (DEFAULT, '2020-12-03', 260, 1 , 1);
INSERT INTO bills (id, date_bought, total_price, payment_method_id, shopping_cart_id)
values (DEFAULT, '2020-12-03', 290, 1 , 1);

INSERT INTO users (id, full_name, birthdate, address, phone, email, `role`, `password`)
values (DEFAULT, 'sebastian costa', '1988-08-03', 'la pampa 4858', 01111223045, 'seba@digital.com', 'cliente', 12345678);
INSERT INTO users (id, full_name, birthdate, address, phone, email, `role`, `password`)
values (DEFAULT, 'javier mirasson', '2000-04-04', 'montevideo 756', 01111224567, 'javier@digital.com', 'cliente', 12345678 );
INSERT INTO users (id, full_name, birthdate, address, phone, email, `role`, `password`)
values (DEFAULT, 'alejandro profesor', '1985-05-05', 'jujuy 2233', 01111223543, 'alejandro@digital.com', 'admin', 12345678 );


