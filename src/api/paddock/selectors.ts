import * as Luxon from "luxon";
import { createSelector } from 'reselect';

import { 
    AppState,
    Animal, 
    AnimalTransaction, 
    Group, 
    GroupDatedValues, 
    Paddock,
    Allocation,
    calculateValuesForInterval 
} from "../"

interface GetPaddockFeedValuesParams {
    paddock: Paddock;
    interval: Luxon.Interval;
}

const getAnimals = (state: AppState): Animal[] => state.animals;
const getPaddock = (state: AppState, params: GetPaddockFeedValuesParams): Paddock => params.paddock;
const getAllocations = (state: AppState, params: GetPaddockFeedValuesParams): Allocation[] => state.allocations.filter( (allocation) => allocation.paddocks.includes(params.paddock.id) );
const getInterval = (state: AppState, params: GetPaddockFeedValuesParams): Luxon.Interval => params.interval;

/**
 * Fetches the amount of feed a paddock contains for a given period.
 * Includes the feed reducing components from allocations and movements
 */
export const getPaddockFeedValuesForSpan = createSelector(
    [getAnimals, getPaddock, getAllocations, getInterval],
    (animals: Animal[], paddock: Paddock, allocations: Allocation[], interval: Luxon.Interval): GroupDatedValues[] => {
        return [];
    }
)