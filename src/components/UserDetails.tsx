import * as React from "react";
import { MyImmut, MyDevImmut } from "../api";
import * as Luxon from "luxon"

import "./App.scss";

interface UserDetailsProps {
    username: string
}

export default class UserDetails extends React.Component<UserDetailsProps, {}> {

    constructor(props: UserDetailsProps) {
        super(props);

        this.state = {};
    }

    testImmut = () => {
        // let i: MyDevImmut = new MyDevImmut({desc:"hello", id: "joe", balls:"Ilovey", date: Luxon.DateTime.fromJSDate(new Date), firstName: "redmayne", lastName: "gyppy"})
        // console.log(i);
        // console.log(i.fullName());
        // let j: MyDevImmut = i.setDesc("trannies in finland!") as MyDevImmut;
        // console.log(i.desc);
        // console.log(j.desc);
        // console.log(j instanceof MyDevImmut);
        // console.log(i.date);
        // console.log(i.setDate(Luxon.DateTime.fromJSDate(new Date)).date)
        // console.log( (i.change<MyDevImmut>("firstName", "NO PAENUS") as MyDevImmut).fullName() );
    }

    render(): JSX.Element {
        return (
            <div className="user-details-container" onClick={this.testImmut}>
                {this.props.username}
            </div>
        );
    }
}