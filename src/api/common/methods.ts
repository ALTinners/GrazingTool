import { Option, Options } from "react-select";

import { BaseIdObject, IdType } from "./classes";

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
    })
    return options;
}