import * as React from "react";
import { connect } from "react-redux";
import * as Luxon from "luxon";

import { AppState, Animal, Group } from "../api";

import { GroupCalendarRow } from "./GroupCalendarRowContainer";

import "./App.scss";

interface StockCalendarProps {
    groups: Group[];
}

type Props = StockCalendarProps;

interface StockCalendarState {
    date: Luxon.DateTime;
}

class StockCalendarInternal extends React.Component<Props, StockCalendarState> {

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
        return this.props.groups.map((group: Group) => {
            return (
                <div key={group.id}>
                    <GroupCalendarRow 
                        group={group} 
                    />
                </div>
            )
        });
    }
}

function mapStateToProps(state: AppState): StockCalendarProps {
    console.log(state);
    return {
        groups: state.groups
    };
}

export const StockCalendar = connect(mapStateToProps)(StockCalendarInternal);