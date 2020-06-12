# Exercicio 01

a.
`ALTER TABLE Actors DROP COLUMN salary;`

Apaga a coluna de salarios

b.
`ALTER TABLE Actors CHANGE gender sex VARCHAR(6);`

Troca o tipo da variavel da coluna genero, para uma string de no máximo 6 caracteres. O nome da coluna gender será trocado para sex.

c. 
`ALTER TABLE Actors CHANGE gender gender VARCHAR(255);`

Altera o numero de caracteres da coluna gender para 255 caracteres.

d.
`ALTER TABLE Actor CHANGE gender gender VARCHAR(100);`

# Exercicio 02

a.
`UPDATE Actor SET name = "New Name" birth_date = "New Birth_date" WHERE id = "003"`

b.
`UPDATE Actor SET name = "JULIANA PÃES" WHERE name = "Juliana Paes"`

c.
`UPDATE Actor SET name = "New Name", birth_date = "New Birth_date", salary="New Salary" gender= "new gender" WHERE id = "005"`

d.
` 14:16:44	UPDATE Actor SET name = "Teste" WHERE id = "123"	0 row(s) affected Rows matched: 0  Changed: 0  Warnings: 0	0.032 sec
`
Alterou zero linhas e zero colunas, já que não existe este ID

# Exercício 03

a.
`DELETE FROM Actor WHERE name = "Fernanda Montenegro"`

b.
`DELETE FROM Actor WHERE (gender = "male") AND (salary > 1000000);`

# Exercício 04

a.
`SELECT MAX(salary), name FROM Actor GROUP BY name;`

b.
`SELECT MIN(salary), name FROM Actor GROUP BY name;`

c.
`SELECT COUNT(*), gender FROM Actor WHERE gender="female" GROUP BY gender;`

d.
`SELECT SUM(salary) FROM Actor;`

# Exercicio 05

a.
Retorna uma tabela com duas colunas, sendo a primeira a quantidade de cada genero que ele encontrar e na segunda linha ele tras o valor do genero.

b.
`SELECT name, id FROM Actor ORDER BY name DESC;`

c.
`SELECT name, salary FROM Actor ORDER BY salary;`

d.
`SELECT name, salary FROM Actor ORDER BY salary DESC LIMIT 3;`

e.
`SELECT AVG(salary), gender FROM Actor GROUP BY gender;`

# Exercicio 06

a.
`ALTER TABLE Movies ADD playing_limit_date DATE;`

b.
`ALTER TABLE Movies CHANGE review rating FLOAT;`

c.
`UPDATE Movies SET playing_limit_date = "2020-06-30" WHERE id="004";`
`UPDATE Movies SET playing_limit_date = "2007-06-30" WHERE id="001";`

d.
`DELETE FROM Movies WHERE id = "003";`

`15:01:37	UPDATE Movies SET synopsis = "nova sinopse" WHERE id="003"	0 row(s) affected Rows matched: 0  Changed: 0  Warnings: 0	0.015 sec
`
foram alteradas zero linhas.

# Exercicio 07

a.
`SELECT name, rating FROM Movies WHERE rating > 7.5;`

b.
`SELECT AVG(rating) FROM Movies;`

c.
`SELECT COUNT(*) FROM Movies WHERE playing_limit_date > CURDATE();`

d.
`SELECT COUNT(*) FROM Movies WHERE movie_premiere > CURDATE();`

e.
`SELECT MAX(rating), name FROM Movies GROUP BY name;`

f.
`SELECT MIN(rating) FROM Movies;`

# Exercicio 08

a.
`SELECT * FROM Movies ORDER BY name ASC;`

b.
`SELECT * FROM Movies ORDER BY name DESC LIMIT 5;`

c.
`SELECT * FROM Movies WHERE playing_limit_date >= CURDATE() ORDER BY playing_limit_date;`

d.
`SELECT * FROM Movies ORDER BY rating DESC LIMIT 3;`