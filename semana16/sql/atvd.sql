
## CREATE TABLE Actor(
-- id VARCHAR(255) PRIMARY KEY,
-- name VARCHAR (255) NOT NULL,
-- salary FLOAT NOT NULL,
-- birth_date DATE NOT NULL,
-- gender VARCHAR(6) NOT NULL
-- );

-- INSERT INTO Actor (id,name,salary, birth_date, gender)
-- VALUE(
-- "002",
-- "Gloria Pires",
-- 2200000,
-- "1948-08-25",
-- "Famele"
-- );
-- INSERT INTO Actor (id, name, salary, birth_date, gender)
-- VALUES(
--   "003", 
 -- "John Doe",
 -- 600000,
 -- "1955-10-02", 
 -- "male"
-- );

-- INSERT INTO Actor (id, name, salary, birth_date, gender)
-- VALUES(
--   "004", 
--  "Jane Doe",
  -- 1000000,
 -- "1966-12-25", 
 -- "female"
-- );

-- CREATE TABLE Movie (
   -- id VARCHAR(255) PRIMARY KEY,
   -- name VARCHAR (255) NOT NULL,
   -- synopsy TEXT NOT NULL,
   -- release_date DATE NOT NULL,
   -- rating TINYINT NOT NULL
-- );

INSERT INTO Movie (id, name, synopsy, release_date, rating)
VALUES(
  "001",
  "Se Eu Fosse Você",
  "Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos",
  "2006-01-06",
  7
);

INSERT INTO Movie (id, name, synopsy, release_date, rating)
VALUES(
  "0002",
  "Doce de mãe",
  "Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela",
  "2012-12-27",
  10
);

INSERT INTO Movie (id, name, synopsy, release_date, rating)
VALUES(
  "003",
  "Dona Flor e Seus Dois Maridos",
  "Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce",
  "2017-11-02",
  8
);

INSERT INTO Movie (id, name, synopsy, release_date, rating)
VALUES(
  "004",
  "Teste",
  "Sinopse de teste",
  "2021-05-24",
  5
);


SET SQL_SAFE_UPDATES = 0;

ALTER TABLE Actor ADD favorite_ice_cream_flavor VARCHAR(255);
ALTER TABLE Actor ADD type VARCHAR(255) DEFAULT "NotDirector";

ALTER TABLE Actor DROP COLUMN salary;

ALTER TABLE Actor CHANGE gender sex VARCHAR(6);

ALTER TABLE Actor CHANGE gender gender VARCHAR(255);

ALTER TABLE Actor CHANGE gender gender VARCHAR(100);

UPDATE Actor
SET name = "Moacyr Franco"
WHERE id = "123";

UPDATE Actor
SET 
	name = "Moacyr Franco",
	birth_date = "2020-02-10"
WHERE id = "003";

UPDATE Actor
SET name = "JULIANA PÃES"
WHERE name = "Juliana Paes";

UPDATE Actor
SET 
name = "Moacyr Franco",
birth_date = "2020-02-10",
salary = 600000,
gender = "male"
WHERE id = "005";

DELETE FROM Actor WHERE name = "Fernanda Montenegro";

DELETE FROM Actor
WHERE
	gender = "male" AND
	salary > 1000000;
    
    SELECT MAX(salary) FROM Actor;
    
    SELECT MIN(salary) FROM Actor WHERE gender = "female";
    
    SELECT COUNT(*) FROM Actor WHERE gender = "female";
    
    SELECT SUM(salary) FROM Actor;
    
    SELECT * FROM Actor
WHERE gender = 'female'
ORDER BY name ASC
LIMIT 4;
    
    SELECT * FROM Actor LIMIT 3;
    SELECT * FROM Actor ORDER BY name ASC;
    
    SELECT id, name FROM Actor
ORDER BY name DESC;
    
    
