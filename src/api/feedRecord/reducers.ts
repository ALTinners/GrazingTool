import { Reducer, combineReducers } from "redux";
import { getType } from "typesafe-actions";

import { FeedRecord } from "./classes";
import * as Actions from "./actions";

export type State = FeedRecord[];

const initialState: State = [];

const feedRecords = (state: State = initialState, action: Actions.FeedRecordAction): State => {
    switch (action.type) {
        case (getType(Actions.addFeedRecord)):
            return state.concat([action.feedRecord]);
        case (getType(Actions.modifyFeedRecord)):
            return state.map((feedRecord: FeedRecord) => { return (feedRecord.id == action.feedRecord.id ? action.feedRecord : feedRecord) });
        case (getType(Actions.deleteFeedRecord)):
            return state.filter((feedRecord: FeedRecord) => feedRecord.id !== action.feedRecord.id);
        default:
            return state;
    }
}

export const reducer = feedRecords;