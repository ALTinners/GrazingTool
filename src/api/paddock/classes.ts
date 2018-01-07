import * as Luxon from "luxon";

import { BaseIdObject, BaseIdObjectProps } from "../common";

export enum Datatypes {
    Paddock = "PADDOCK",
    PaddockFeedValues = "PADDOCK_FEED_VALUES"
}

export interface GrowthRateType {
    growthRate: number;
    date: Luxon.DateTime;   
};

export interface PaddockProps extends BaseIdObjectProps {
    name: string;
    growthRates: GrowthRateType[];
}

export class Paddock extends BaseIdObject({
    type: Datatypes.Paddock,
    growthRates: undefined
})  {
    name: string;
    growthRates: GrowthRateType[];

    constructor(props: PaddockProps) {
        super({
            type: Datatypes.Paddock,
            ...props
        });
    }

    readonly isValid = (): boolean => {
        let datesValid: boolean = true;
        this.growthRates.forEach( (rate) => {
            datesValid = datesValid && rate.date.isValid;
        });
        return datesValid;
    }
}

interface DatedPaddockFeedValuesProps extends BaseIdObjectProps {
    dateString: string;
    feedValue: number;
}

// export class DatedPaddockFeedValues extends BaseIdObject {
//     dateString: string;
//     feedValue: number;

//     constructor(props: DatedPaddockFeedValuesProps) {
//         super({
//             type: Datatypes.PaddockFeedValues,
//             ...props
//         })
//     }

//     readonly isValid = (): boolean => { return true; }
// }

export type PaddockClasses = Paddock; //| DatedPaddockFeedValues;