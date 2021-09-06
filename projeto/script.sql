CREATE DATABASE loja_passagens;
USE loja_passagens;

CREATE TABLE usuarios(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255),
    email VARCHAR(255),
    idade INT
);

CREATE TABLE produtos(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255),
    descricao VARCHAR(255),
    preco FLOAT
);

CREATE TABLE passagens(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    produto INT NOT NULL,
    origem VARCHAR(255),
    destino VARCHAR(255),

    FOREIGN KEY (produto) REFERENCES produtos(id)
);