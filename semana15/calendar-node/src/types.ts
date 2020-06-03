import * as moment from "moment";

export type event={
    name: string,
    description: string,
    dateStart: moment.Moment,
    dateEnd: moment.Moment,
};