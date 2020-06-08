# Exercicio 01

a. VARCHAR: utilizado para escrever string, deve ser especificado o numero de caracteres entre parenteses/ DATE: utilizado para escrever datas no formato YYYY-MM-DD.

`CREATE TABLE Actor (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR (255) NOT NULL,
    salary FLOAT NOT NULL,
    birth_date DATE NOT NULL,
	gender VARCHAR(6) NOT NULL
);`

b. SHOW DATABASES: retorna os bancos de dados que tenho acesso / SHOW TABLES: retornas as tabelas que tenho acesso.

SHOW DATABASES;

SHOW TABLES;


c. DESCRIBE: retorna a estrutura a da tabela, sendo os campos, tipos, etc.

DESCRIBE Actor;


# Exercicio 02

a.
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "002", 
  "Glória Pires",
  1200000,
  "1963-08-23", 
  "female"
);

b. 15:25:41	INSERT INTO Actor (id, name, salary, birth_date, gender) VALUES(   "002",    "Glória Pires",   1200000,   "1963-08-23",    "female" )	Error Code: 1062. Duplicate entry '002' for key 'PRIMARY'	0.032 sec

"entrada duplicada, para uma chave privada"

c. 15:30:56	INSERT INTO Actor (id, name, salary) VALUES(   "003",    "Fernanda Montenegro",   300000,   "1929-10-19",    "female" )	Error Code: 1136. Column count doesn't match value count at row 1	0.031 sec


"estamos descrevendo 3 entradas e passando 5 valores, sendo que a tabela necessita que todos os valores sejam não nulos"

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "003", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);



d. 15:33:38	INSERT INTO Actor (id, salary, birth_date, gender) VALUES(   "004",   400000,   "1949-04-18",    "male" )	Error Code: 1364. Field 'name' doesn't have a default value	0.016 sec

"não passamos o nome como valor, sendo este parametro obrigatório"

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "004", 
  "Antônio Fagundes",
  400000,
  "1949-04-18", 
  "male"
);


e. 15:34:45	INSERT INTO Actor (id, name, salary, birth_date, gender) VALUES(   "005",    "Juliana Paes",   719333.33,   1979-03-26,    "female" )	Error Code: 1292. Incorrect date value: '1950' for column 'birth_date' at row 1	0.031 sec

"birth_date não esta sendo passado entre aspas"

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "005", 
  "Juliana Paes",
  719333.33,
  "1979-03-26", 
  "female"
);

# Exercicio 03

a. SELECT * from Actor WHERE gender = "female"

b. SELECT salary from Actor WHERE name = "Tony Ramos";

c. SELECT * from Actor WHERE gender = "invalid";

"retornou uma linha com todos os valores nulos, já que nosso genero não pode ser nulo"

d. SELECT id, name, salary from Actor WHERE salary >= 500000;

e. 16:00:35	SELECT id, nome from Actor WHERE id = "002" LIMIT 0, 1000	Error Code: 1054. Unknown column 'nome' in 'field list'	0.031 sec

"estamos tentando acessar a coluna nome, deveria ser name"

# Exercicio 04

a. SELECT * FROM Actor
WHERE (name LIKE "A%" OR name LIKE "J%") AND salary > 300000

"olhe em toda a tabela Actor e me retorne nomes que comecem com A ou J e tenham salario maior que 300000"

b. SELECT * FROM Actor
WHERE name NOT LIKE "A%" AND salary > 350000;

c. SELECT * FROM Actor WHERE name LIKE "%G%" OR "%g%";

d. SELECT * FROM Actor WHERE (name LIKE "%G%" OR name LIKE "%g%" OR name LIKE "%A%" OR name LIKE "%a%") AND (salary BETWEEN 350000 AND 900000) ; 

# Exercicio 05

a. CREATE TABLE Movies (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR (255) NOT NULL,
    synopsis VARCHAR(1000) NOT NULL,
    movie_premiere DATE,
	review INT
);

"obs. Os tipos de dados ntext, text e image serão removidos em uma versão futura do SQL Server."

INSERT INTO Movies (id, name, synopsis, movie_premiere, review)
VALUE(
	"004",
    "O Auto da Compadecida",
    "O Auto da Compadecida é um filme brasileiro de comédia dramática lançado em 2000. Dirigido por Guel Arraes e com roteiro de Adriana Falcão, João Falcão e do próprio diretor, o filme é baseado na peça teatral Auto da Compadecida de 1955 de Ariano Suassuna",
    "2000/09/15",
    10
);

# Exercicio 06

a. SELECT name,review FROM Movies WHERE id = "004";

b. SELECT * FROM Movies WHERE name LIKE "%Dona%";

c. SELECT id,name,synopsis FROM Movies WHERE review > 7;

# Exercicio 07

a. SELECT * FROM Movies WHERE name LIKE "%vida%";

b. SELECT * FROM Movies WHERE name OR synopsis LIKE "%depois%" ;

c. SELECT * FROM Movies WHERE movie_premiere <= CURDATE();

d. SELECT * FROM Movies WHERE (movie_premiere <= CURDATE()) AND (name OR synopsis LIKE "%depois%" ) AND (review > 7);