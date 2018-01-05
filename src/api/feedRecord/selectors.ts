import * as Luxon from "luxon";

import {
    AppState,
    IdType,
    FeedRecord,
    filterForId,
    sortByDate
} from "../"
import { filterForDates, DateFilterOptions } from "../common";

interface GetFeedRecordsOptions extends DateFilterOptions {
    paddockId?: IdType;
}

export const getFeedRecords = (state: AppState, options?: GetFeedRecordsOptions): FeedRecord[] => {
    let feedRecords = state.feedRecords;

    if (options) {
        if (options.paddockId) {
            feedRecords = filterForId(feedRecords, "paddockIds", options.paddockId);
        }
        if (options.within || options.before || options.after) {
            feedRecords = filterForDates(feedRecords, options);
        }
    }

    return sortByDate(feedRecords);
}
export const getFeedRecordForId = (state: AppState, id: IdType): FeedRecord | undefined => state.feedRecords.find(feedRecord => feedRecord.id === id); 