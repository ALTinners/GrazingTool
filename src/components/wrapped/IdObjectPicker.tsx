import * as React from "react";
import * as ReactSelect from "react-select";

import {
    BaseIdObject,
    IdType,
    itemsAsReactSelectData,
} from "../../api"
import { BaseIdObjectProps } from "../../api/common/index";

interface IdObjectPickerProps<T extends BaseIdObjectProps> {
    objects: T[];
    selectedId: IdType | undefined;
    onSelect: (id: IdType | undefined) => void;
}

export class IdObjectPicker<T extends BaseIdObjectProps> extends React.Component<IdObjectPickerProps<T>, {}> {

    constructor(props: IdObjectPickerProps<T>) {
        super(props);
        this.state = {
        };
    }

    setIdValue = (newValue: ReactSelect.Option<IdType> | null) => {
        let id: IdType | undefined = (newValue !== null ? newValue.value : undefined);
        this.props.onSelect(id);
    }
    render(): JSX.Element {
        return (
            <ReactSelect.Creatable
                className="item-selector"
                options={itemsAsReactSelectData(this.props.objects)}
                value={this.props.selectedId}
                onChange={this.setIdValue}
            />
        );
    }
}