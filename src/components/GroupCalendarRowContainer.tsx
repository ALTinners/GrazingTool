import * as React from "react";
import * as Redux from "redux";
import { connect } from "react-redux";
import { GroupCalendarRow as GroupCalendarRowInternal, GroupCalendarRowProps, ReduxStateProps } from "./GroupCalendarRow";

import { 
    AppState, 
    GroupDatedValues, 
    getGroupValuesForSpan,
    getTransactions
} from "../api";

const mapStateToProps = (state: AppState, props: GroupCalendarRowProps): ReduxStateProps => {
    return {
        groupData: getGroupValuesForSpan(state, { groupId: props.group.id }),
        transactionsInPeriod: getTransactions(state, {
            groupId: props.group.id,
            before: state.uiState.stockControlInterval.end
        })
    };
}

export const GroupCalendarRow = connect(mapStateToProps)(GroupCalendarRowInternal);