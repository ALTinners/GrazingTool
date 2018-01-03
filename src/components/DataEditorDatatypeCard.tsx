import * as React from "react";
import * as Redux from "redux";
import { connect } from "react-redux";

import { AppState, Animal, Group, Paddock, AllDatatypes, mapDatatypeToString } from "../api";
import "./App.scss";

interface DataEditorProps {
    datatype: AllDatatypes;
    setDatatype: (data: AllDatatypes) => void;
}

type Props = DataEditorProps;


export class DataEditorDatatypeCard extends React.Component<Props, {}> {
    constructor(props: Props) {
        super(props);
        this.state = {};
    }

    render(): JSX.Element {
        return (
            <div className="data-card" onClick={ () => this.props.setDatatype(this.props.datatype) } >
                {mapDatatypeToString(this.props.datatype)}
            </div>
        );
    }
}