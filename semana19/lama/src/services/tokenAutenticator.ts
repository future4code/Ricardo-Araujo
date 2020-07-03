import * as jwt from "jsonwebtoken";
import {dataTokenInput} from "../models/tokenInput";

export class tokenAuthenticator{
    private static REFRESH_EXPIRES_IN = "1y";
    private static ACCESS_EXPIRES_IN = "1day";

    public generateAccessToken(data: dataTokenInput):string{
        return jwt.sign(data, process.env.JWT_KEY as string,{
            expiresIn: tokenAuthenticator.ACCESS_EXPIRES_IN,
        });
    };

    public getData (token: string): dataTokenInput {
        const payload = jwt.verify(token, process.env.JWT_KEY as string) as any;
        const result = {
            id: payload.id,
            role: payload.role
        };
        return result;
    };
};

