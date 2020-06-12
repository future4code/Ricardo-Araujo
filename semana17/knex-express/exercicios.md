# Exercicio 01

a. retorna um objeto com as informações do id informado
`RowDataPacket {
  id: '001',
  name: 'Tony Ramos',
  salary: 400000,
  birth_date: 1948-08-25T03:00:00.000Z,
  gender: 'male'
}`


b. 

`export const getActorById = async (id: string): Promise<void> => {   
    try{
        const result = await connection.raw(`
        SELECT * FROM Actor WHERE id = '${id}'
      `)
    
        return console.log(result[0][0]);

    }catch(error){
        console.error(error.message);
    };
};`

c. 

`export const getQuantityByGender = async (gender: string): Promise<void> => {   
    try{
        const result = await connection.raw(`
        SELECT gender, COUNT(*) AS quantity FROM Actor WHERE gender = '${gender}'
      `)
    
        return console.log(result[0][0]);

    }catch(error){
        console.error(error.message);
    };
};`


# Exercicio 02

a.
`
export const updateSalaryById = async(id: string, salary: number):Promise<void>=>{
    try{
        const result = await connection.update({
            salary: salary}).into("Actor").where("id", `${id}`);

        console.log("Salario alterado com sucesso");
    }catch(error){
        console.error(error.message);
    };
};`

b.

`export const deleteActorById = async(id:string): Promise<void>=>{
    try{
        const result = await connection.delete().into("Actor").where("id", `${id}`);

        console.log(`Usuario ${id} deletado com sucesso`);
    }catch(error){
        console.error(error.message);
    };
};`

c.
`export const getAvgSalaryByGender = async(gender: string): Promise<void>=>{
    try{
        const result = await connection.avg("salary").into("Actor").where({gender: gender});

        return console.log(result);

    }catch(error){
        console.error(error.message);
    };
};`

# Exercicio 03

a. o id que estamos passando como path esta sendo considerado como um request, então para acessar sua propriedade usamos este caminho.

b. são condicionais de comportamento para cada caso de resposta do servidor.

c. 

