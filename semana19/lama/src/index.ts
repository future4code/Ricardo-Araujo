import dotenv from "dotenv";
import express from "express";
import { AddressInfo } from "net";
import { usersRouter } from "./routes/UsersRouter";
import { bandsRouter } from "./routes/BandsRouter";
import { showRouter } from "./routes/ShowRouter";

dotenv.config();
const app = express();
app.use(express.json());

app.use("/", usersRouter);
app.use("/band", bandsRouter);
app.use("/show", showRouter);


const server = app.listen(process.env.PORT || 3000, ()=>{
    if(server){
        const address = server.address() as AddressInfo;
        console.log(`Server is running http://localhost:${address.port}`);
    }else{
        console.error(`Failure upon starting server`);
    };
});