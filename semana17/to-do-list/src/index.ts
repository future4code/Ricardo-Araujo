import express, {Request, Response} from "express";
import {AddressInfo} from "net";

import { sucessMessage, errorMessage } from "./messages";
import {createUser} from "./services/createUser";
import { getUserById } from "./services/getUserById";
import {editUser} from "./services/editUser";

const app = express();
app.use(express.json());

const server = app.listen(process.env.PORT || 3000, () => {
    if (server) {
      const address = server.address() as AddressInfo;
      console.log(`Server is running in http://localhost:${address.port}`);
    } else {
      console.error(`Failure upon starting server.`);
    };
});

/*****************************************************************/

function main(){
  
  // app.put('/user', (req: Request, res: Response)=>{
  //     const {name, nickname, email} = req.body;

  //      createUser(name, nickname, email)
  //     .then(()=>{res.status(200).send({message: sucessMessage.createUser})
  //     })
  //     .catch((error)=>{
  //       res.status(400).send({message: error.mysqlMessage || error.message})
  //     });
  // });



  // app.get('/user/:id', async (req: Request, res: Response)=>{
  //   try{
  //     const id = req.params.id;
  //     const user = await getUserById(id);

  //     if(user===undefined){
  //       throw new Error(errorMessage.getUser);
  //     }else{
  //       res.status(200).send(user);
  //     };
      
  //   }catch (error){
  //     res.status(400).send({
  //       message: error.mysqlMessage || error.message
  //     });
  //   };
  // });


  app.post('/user/edit', async(req: Request, res: Response)=>{
    try{
      const {id, name, nickname} = req.body;
      await editUser(id, name, nickname);

      res.status(200).send({message: sucessMessage.editUser});
    }catch(error){
      res.status(400).send({
        message: error.mysqlMessage || error.message
      });
    };
  });


};

main();