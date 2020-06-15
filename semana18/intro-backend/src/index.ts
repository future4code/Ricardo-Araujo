import express from "express";
import {AddressInfo} from "net";
import {Request, Response} from "express";
import {USerDatabase} from "./data/UserDataBase";
import { IdGenerator } from "./services/idGenerator";
import { connect } from "http2";
import { Authenticator } from "./services/Authenticator";

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


function main(){



    




  app.post("/signup", async (req: Request, res: Response)=>{
    try{
      const userDate ={
        email: req.body.email,
        password: req.body.password
      };

      const newId = new IdGenerator;
      const id = newId.generate();
      const newUser = new USerDatabase;

      newUser.createUser(id, userDate.email, userDate.password);

      const authenticator = new Authenticator();
      const token = authenticator.generateToken({id});
      res.status(200).send({token: token})

    }catch(error){
      res.status(400).send({
        message: error.message,
      });
    }
  })

};

main();