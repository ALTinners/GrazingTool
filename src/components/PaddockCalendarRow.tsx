import * as React from "react";
import * as Redux from "redux";
import { connect } from "react-redux";
import * as Luxon from "luxon";

import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Legend, CartesianGrid, Tooltip, ReferenceLine, Label, TooltipProps, TooltipPayload } from "recharts";

import { 
    AppState,
    Group, 
    GroupDatedValues, 
    Animal, 
    AnimalTransaction,
    AnimalTransactionPair,
    Paddock,
    getGroupValuesForSpan,
} from "../api";
import "./App.scss";

interface PaddockCalendarRowPayload extends TooltipPayload {
    payload: GroupDatedValues;
}

interface PaddockCalendarRowTooltipProps extends TooltipProps {
    payload?: PaddockCalendarRowPayload[]
}

class PaddockCalendarRowTooltip extends React.Component<PaddockCalendarRowTooltipProps, {}> {

    constructor(props: PaddockCalendarRowTooltipProps) {
        super(props);
        this.state = {};
    }

    render(): JSX.Element | null {
        let transactions: AnimalTransactionPair[] = [];
        if (this.props.payload && this.props.payload.length > 0) {
            let payload: GroupDatedValues = this.props.payload[0].payload as GroupDatedValues;
            transactions = payload.transactions;

            return (
                <div className="custom-tooltip">
                    <p className="label">{`${this.props.label}`}</p>
                    <p className="desc">{`Numbers: ${payload.headCount}`}</p>
                    <p className="desc">{`Requirements: ${payload.requirement}`}</p>
                    <p className="desc">{`Value: ${payload.value}`}</p>
                    {this.renderTransactions(transactions)}
                </div>
            );
        }
        else {
            return null;
        }
    }

    renderTransactions(transactions: AnimalTransactionPair[]): JSX.Element[] {
        return transactions.map((pair) => {
            if (pair.animal) {
                return <p key={pair.transaction.id} >{`${pair.transaction.headCount} ${pair.animal.name}`}</p>
            } else {
                return <p key={pair.transaction.id} >{`${pair.transaction.headCount} Referenced Animal is not found`}</p>
            }
        });
    }
}

export interface PaddockCalendarRowProps {
    paddock: Paddock;
}

export interface ReduxStateProps {

}

type Props = PaddockCalendarRowProps & ReduxStateProps;

class PaddockCalendarRowInternal extends React.Component<Props, {}> {

    constructor(props: Props) {
        super(props);
        this.state = {};
    }

    render(): JSX.Element {
        return (
            <div className="calendar-row">
                <div className="group-details">
                    {this.props.paddock.name}
                </div>
                <div className="chart-container">
                    <div className="chart-container-inner">
                        <ResponsiveContainer width="100%" height="100%">
                            <AreaChart
                                height={200}
                                width={200}
                                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                                <Area
                                    key={this.props.paddock.name}
                                    type="monotone"
                                    stroke="#aa0044"
                                    fill="#aa0044"
                                    dataKey="requirement"
                                    dot={false}
                                    activeDot={{ r: 0 }}
                                    isAnimationActive={true}
                                />
                                <XAxis dataKey="date" />
                                <YAxis domain={[0, 100]} />
                                <CartesianGrid strokeDasharray="3 3" />
                                <Tooltip content={<PaddockCalendarRowTooltip />} />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state: AppState, props: PaddockCalendarRowProps): ReduxStateProps => {
    return {

    };
}

export const PaddockCalendarRow = connect(mapStateToProps)(PaddockCalendarRowInternal);