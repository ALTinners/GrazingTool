import * as JQuery from "jquery";
import * as uuid from "uuid";
import * as Luxon from "luxon";
import * as Immutable from "immutable";

interface TMyImmut {
    desc: string;
    id: string;
    balls: string;
}

interface TMyDatedImmut extends TMyImmut {
    date: Luxon.DateTime;
}

interface TMyDevImmut extends TMyDatedImmut {
    firstName: string;
    lastName: string;
}

class SecImmut extends Immutable.Record({

})
{

}

export const MyImmut = <T extends TMyImmut>(defaultValues: T) => class MyImmuty extends Immutable.Record({
    ...(defaultValues as TMyImmut)
}) implements TMyImmut {
    desc: string;
    id: string;
    balls: string;

    setDesc = (desc: string): MyImmuty => {
        return this.set("desc", desc) as MyImmuty;
    }
}

const MyDatedImmut = <T extends TMyDatedImmut>(defaultValues: T) => class MyDatedImmut extends MyImmut({
    ...(defaultValues as TMyDatedImmut)
}) {
    date: Luxon.DateTime;

    setDate = (date: Luxon.DateTime): MyDatedImmut => {
        return this.set("date", date) as MyDatedImmut;
    }
}

export class MyDevImmut extends MyDatedImmut({
    desc: "",
    id: "",
    balls: "",
    date: Luxon.DateTime.fromJSDate(new Date),
    firstName: "gays",
    lastName: "no willy"
}) implements TMyDevImmut {
    firstName: string;
    lastName: string;

    constructor(props: TMyDevImmut) {
        super(props);
    }

    fullName() {
        return this.firstName + ' ' + this.lastName
    }
}


export type IdType = string;

export interface BaseIdObjectProps {
    readonly id?: IdType;
    readonly type?: string;
    readonly name?: string;
    [key: string]: any;
}

export const BaseIdObject = (defaultValues: any) => class BaseIdObjectClass extends Immutable.Record({
    id: uuid.v4(),
    type: "UNDEFINED",
    name: "",
    ...defaultValues,
}) {
    readonly id: IdType;
    readonly type: string;
    readonly name: string;

    constructor(props: any) {   //Fixme for baseIdprops
        super({
            id: uuid.v4(),
            ...props}
        );
    }

    public clone<T extends BaseIdObjectClass>() {
        return JQuery.extend<any, this>(true, {}, this);
    }

    public set<T extends this | BaseIdObjectClass, K extends keyof T, D>(key: K, value: D): T {
        // console.log(this);
        // let newObj: T = this.clone();
        // console.log(newObj);
        // newObj[key] = value;
        return super.set(key, value) as T;
    }

    public isValid = (): boolean => { return true; };
}

export interface BaseDatedObjectProps extends BaseIdObjectProps {
    readonly date: Luxon.DateTime;
}

// export class BaseDatedObject extends BaseIdObject {
//     readonly date: Luxon.DateTime;

//     constructor(props: any) {
//         super(props);
//     }

//     readonly isValid = (): boolean => { return this.date.isValid; };
// }
export const BaseDatedObject = (defaultValues: any) => class BaseDatedObjectClass extends BaseIdObject({
    date: Luxon.DateTime.fromJSDate(new Date),
    ...(defaultValues)
}) {
    date: Luxon.DateTime;
}