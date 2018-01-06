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

// export class MyImmut extends immut implements TMyImmut{
//     desc: string;
//     id: string;
//     balls: string;

//     constructor(props: TMyImmut) {
//         super(props);
//     }

//     setDesc = (desc: string): MyImmut => {
//         return this.set("desc", desc) as MyImmut;
//     }
// }

// export class MyDevImmut extends MyImmut implements TMyDevImmut {
//     date: Luxon.DateTime;

//     constructor(props: TMyDevImmut) {
//         super(props);
//     }
// }

export type IdType = string;

export abstract class BaseIdObject {
    readonly id: IdType;
    readonly type: string;
    readonly name: string;

    constructor(type: string, name?: string, id: IdType = uuid.v4() ) {
        this.id = id;
        this.type = type;
        this.name = (name ? name : "");
    }

    public clone<T extends BaseIdObject>() {
        return JQuery.extend<any, this>(true, {}, this);
    }

    public set<T extends this | BaseIdObject, K extends keyof T, D>(key: K, value: D): T {
        console.log(this);
        let newObj: T = this.clone();
        console.log(newObj);
        newObj[key] = value;
        return newObj;
    }

    readonly isValid = (): boolean => { return true; };
}

export abstract class BaseDatedObject extends BaseIdObject {
    readonly date: Luxon.DateTime;

    constructor(type: string, date: Luxon.DateTime, name?: string, id?: IdType ) {
        super(type, name, id);
        this.date = date;
    }
}