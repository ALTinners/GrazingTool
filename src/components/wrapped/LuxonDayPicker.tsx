import * as React from "react";
import * as Luxon from "luxon";
import DayPicker from "react-day-picker"

interface LuxonDayPickerProps {
    date: Luxon.DateTime;
    onDayClick: (date: Luxon.DateTime) => void;
}

export class LuxonDayPicker extends React.Component<LuxonDayPickerProps, {}> {

    constructor(props: LuxonDayPickerProps) {
        super(props);
        this.state = {
        };
    }

    onDayClick = (date: Date) => {
        this.props.onDayClick(Luxon.DateTime.fromJSDate(date));
    }

    render(): JSX.Element {
        return (
            <DayPicker
                selectedDays={this.props.date.toJSDate()}
                onDayClick={this.onDayClick}
            />
        );
    }
}