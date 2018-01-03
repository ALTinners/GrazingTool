import * as React from "react";
import * as Redux from "redux";
import { connect } from "react-redux";
import { GroupCalendarRow as GroupCalendarRowInternal, GroupCalendarRowProps, ReduxStateProps } from "./GroupCalendarRow";

import { AppState, GroupDatedValues, getGroupValuesForSpan } from "../api";

const mapStateToProps = (state: AppState, props: GroupCalendarRowProps): ReduxStateProps => {
    return {
        groupData: getGroupValuesForSpan(state, props.group),
        transactionsInPeriod: state.transactions.filter(
            (transaction) => {
                return (
                    transaction.date >= state.uiState.stockControlStartDate &&
                    transaction.date <= state.uiState.stockControlEndDate &&
                    transaction.groupId == props.group.id
                );
            }),
    };
}

export const GroupCalendarRow = connect(mapStateToProps)(GroupCalendarRowInternal);