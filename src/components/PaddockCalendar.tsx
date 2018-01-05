import * as React from "react";
import { connect } from "react-redux";
import * as Luxon from "luxon";

import { AppState, Paddock } from "../api";

import { PaddockCalendarRow } from "./PaddockCalendarRow";

import "./App.scss";

interface PaddockCalendarProps {
    paddocks: Paddock[];
}

type Props = PaddockCalendarProps;

interface PaddockCalendarState {
    date: Luxon.DateTime;
}

class PaddockCalendarInternal extends React.Component<Props, PaddockCalendarState> {

    constructor(props: Props) {
        super(props);
        this.state = {
            date: Luxon.DateTime.fromJSDate(new Date())
        };
    }

    render(): JSX.Element {
        return (
            <div className="content-container">
                <div className="row-list-container">
                    {this.renderGroupRows()}
                </div>
            </div>
        );
    }

    renderGroupRows(): JSX.Element[] {
        return this.props.paddocks.map((paddock: Paddock) => {
            return (
                <div key={paddock.id}>
                    <PaddockCalendarRow 
                        paddock={paddock} 
                    />
                </div>
            )
        });
    }
}

function mapStateToProps(state: AppState): PaddockCalendarProps {
    return {
        paddocks: state.paddocks
    };
}

export const PaddockCalendar = connect(mapStateToProps)(PaddockCalendarInternal);