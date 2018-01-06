import * as Luxon from "luxon";
import { Option, Options } from "react-select";

import { BaseIdObject, BaseDatedObject, IdType } from "./classes";

export function findItemForId<T extends BaseIdObject>(array: T[], id: IdType | undefined): T | undefined {
    for (let item of array) {
        if (item.id == id) {
            return item;
        }
    }
    return undefined;
}

export function itemsAsReactSelectData<T extends BaseIdObject>(array: T[]): Options<IdType> {
    let options: Options<IdType> = [];
    array.forEach((item: T) => {
        options.push(
            {
                label: item.name,
                value: item.id
            }
        );
    });
    return options;
}

export function filterForId<T extends BaseIdObject, K extends keyof T>(array: T[], key: K, id: IdType): T[] {
    return array.filter(val => val[key] == id);
}

export interface DateFilterOptions {
    readonly within?: Luxon.Interval,
    readonly before?: Luxon.DateTime,
    readonly after?: Luxon.DateTime
}

export function filterForDates<T extends BaseDatedObject>(array: T[], options: DateFilterOptions): T[] {
    if (options.within) {
        return array.filter(value => options.within!.contains(value.date));
    } else if (options.before) {
        return array.filter(value => value.date < options.before!);
    } else if (options.after) {
        return array.filter(value => value.date > options.after!);
    }

    return array;
}

export function sortByDate<T extends BaseDatedObject>(array: T[]): T[] {
    return array.sort( (value1, value2) => { 
        if (value1.date < value2.date) {
            return -1;
        } else if (value1.date > value2.date) {
            return 1;
        } else {
            return 0;
        }
    });
}