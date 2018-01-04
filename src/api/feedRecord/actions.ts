import { createAction } from "typesafe-actions";
import { FeedRecord } from "./classes";

export enum ActionTypes {
    AddFeedRecord = "ADD_FEED_RECORD",
    ModifyFeedRecord = "MODIFY_FEED_RECORD",
    DeleteFeedRecord = "DELETE_FEED_RECORD",
}

export interface FeedRecordAction {
    readonly type: ActionTypes,
    readonly feedRecord: FeedRecord
}

export const addFeedRecord = createAction(ActionTypes.AddFeedRecord,
    (feedRecord: FeedRecord) => { return { type: ActionTypes.AddFeedRecord, feedRecord } }
);

export const modifyFeedRecord = createAction(ActionTypes.ModifyFeedRecord,
    (feedRecord: FeedRecord) => { return { type: ActionTypes.ModifyFeedRecord, feedRecord } }
);

export const deleteFeedRecord = createAction(ActionTypes.DeleteFeedRecord,
    (feedRecord: FeedRecord) => { return { type: ActionTypes.DeleteFeedRecord, feedRecord } }
);

export const actions = {
    addFeedRecord,
    modifyFeedRecord,
    deleteFeedRecord,
}