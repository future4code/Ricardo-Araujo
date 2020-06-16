# Exercicio 01

a. é uma chave que relaciona o conteúdo de uma linha da tabela, com o conteúdo de outra linha.

b.

INSERT INTO Rating (id, comment, rate, movie_id)
VALUES("001", "Engraçado" , 8, "001"), 
	  ("002", "não vi, mas deve ser bom" , 7, "002"); 

c.
14:48:12	INSERT INTO Rating (id, comment, rate, movie_id) VALUES("003", "não existe" , 8, "003")	Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails (`hamilton_ricardo_araujo`.`Rating`, CONSTRAINT `Rating_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Movies` (`id`))	0.031 sec


Ele acusa falha no foreign key, já que não existe correspondente na tabela de filmes.

d. 
ALTER TABLE Movies DROP column rating;

e.
14:57:57	DELETE FROM Movies WHERE id = "001"	Error Code: 1451. Cannot delete or update a parent row: a foreign key constraint fails (`hamilton_ricardo_araujo`.`Rating`, CONSTRAINT `Rating_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Movies` (`id`))	0.031 sec

Ele acusa erro ao deletar, pois ele não consegue deletar uma linha que contém uma chave estrangeira.

# Exercicio 02

a. Ela cria um tabela que correlaciona uma lista de atores a uma lista de filmes;

b. 
INSERT INTO MovieCast(movie_id, actor_id)
VALUES(
		"004",
    "002"
);

c.
15:19:28	INSERT INTO MovieCast(movie_id, actor_id) VALUES(   "023",     "002" )	Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails (`hamilton_ricardo_araujo`.`MovieCast`, CONSTRAINT `MovieCast_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Movies` (`id`))	0.031 sec

Ele não conseguiu criar a linha, pois não existe correlação na tabela de atores.

d.
15:20:55	DELETE FROM Actor WHERE id = "001"	Error Code: 1451. Cannot delete or update a parent row: a foreign key constraint fails (`hamilton_ricardo_araujo`.`MovieCast`, CONSTRAINT `MovieCast_ibfk_2` FOREIGN KEY (`actor_id`) REFERENCES `Actor` (`id`))	0.032 sec

Ele não pode apagar dados que estão correlacionados com outras tabelas.

# Exercicio 03 

a. on representa a condição que relaciona as tabelas, para juntas as mesmas.

b.

SELECT Movies.id, Movies.name, Rating.rate FROM Movies
INNER JOIN Rating ON Movies.id = Rating.movie_id;

# Exercicio 04

a. 
SELECT Movies.id, Movies.name, Rating.rate, Rating.comment FROM Movies LEFT JOIN Rating on Movies.id = Rating.movie_id;

b. 
SELECT Movies.id, Movies.name, MovieCast.actor_id FROM Movies LEFT JOIN MovieCast on Movies.id = MovieCast.movie_id;

c.
SELECT AVG(Rating.rate), Movies.id, Movies.name FROM Movies LEFT JOIN Rating ON Movies.id = Rating.movie_id
GROUP BY (Movies.id);

# Exercicio 05

a.
Queremos trazer a relação de 3 tabelas, por isto estamos usando 2 join.

b.
SELECT Movies.id AS movie_id, Movies.name AS movie_name, Actor.id AS actor_name, Actor.id AS actor_name FROM Movies LEFT JOIN MovieCast ON Movies.id = MovieCast.movie_id 
JOIN Actor ON Actor.id = MovieCast.actor_id;

c.

tras a relação de dados de 3 tabelas distintas

d. 
SELECT Movies.name AS movie_name, Actor.name, Rating.rate, Rating.comment AS actor_name FROM Movies 
LEFT JOIN MovieCast ON Movies.id = MovieCast.movie_id 
LEFT JOIN Actor ON Actor.id = MovieCast.actor_id
RIGHT JOIN Rating ON  Movies.id = Rating.movie_id;

# Exercicio 06

a.

CREATE TABLE Oscar (
		id VARCHAR(255) PRIMARY KEY,
    comment TEXT NOT NULL,
    movie_id VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES Movies(id)
);

não entendi a pergunta. Mas vi na dica dizendo ser M:N

b.

INSERT INTO Oscar(id, comment, movie_id)
VALUE("001", "filme do ano", "001");

c.

SELECT * FROM Movies LEFT JOIN Oscar ON Movies.id = Oscar.movie_id;
