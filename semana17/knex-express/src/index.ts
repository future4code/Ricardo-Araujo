import express from "express";
import {AddressInfo} from "net";
import {Request, Response} from "express";
import {getActorById} from "./services/getActorById";
import {getActorByName} from "./services/getActorByName";
import {getQuantityByGender} from "./services/getQuantityByGender";
import {updateSalaryById} from "./services/updateSalaryById";
import {deleteActorById} from "./services/deleteActorById";
import {getAvgSalaryByGender} from "./services/getAvgSalaryByGender";

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
    // getActorById("001");
    // getActorByName("Glória Pires");
    // getQuantityByGender("male");
    // updateSalaryById("001", 4400);
    // deleteActorById("005");
    // getAvgSalaryByGender("male");
};

main();


app.get("/actor/:id", async (req: Request, res: Response) => {
    try {
      const id = req.params.id;
      const actor = await getActorById(id);
  
      res.status(200).send(actor)
    } catch (err) {
      res.status(400).send({
        message: err.message,
      });
    };
});