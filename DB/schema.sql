create database IF NOT EXISTS burgers_db;

use burgers_db;

create Table if NOT EXISTS burgers (
id int not null AUTO_INCREMENT,
burger_name varchar(255) not null,
devoured boolean,
PRIMARY KEY (id)
);