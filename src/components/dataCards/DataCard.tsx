import * as React from "react";

import "./dataCards.scss";

// Props you want the resulting component to take (besides the props of the wrapped component)
interface InternalRootProps {

}

//An internal class which is used to store and pass props to CommonRootProps for wrapped classes
interface InternalDataCardState {
    isSelected: boolean
}

// Props passed to a wrapped component. Need to be &-ed with the actual component's props
export interface DataCardProps {
    isSelected: boolean;
    setSelected: () => void;
}

export const makeDataCard = () =>
    <OriginalProps extends {}>(
        Component: (React.ComponentClass<OriginalProps & DataCardProps>
            | React.StatelessComponent<OriginalProps & DataCardProps>)
    ) => {
        type ResultProps = OriginalProps & InternalRootProps;
        const result = class OverlayComponent extends React.Component<ResultProps, InternalDataCardState> {
            constructor(props: ResultProps) {
                super(props);
                this.state = {
                    isSelected: false
                };
            }

            render(): JSX.Element {
                return (
                    <div className="data-card">
                        <Component
                            isSelected={this.state.isSelected}
                            setSelected={() => { this.setState({ isSelected: !this.state.isSelected }) }}
                            {...this.props}
                            {...this.state}
                        />
                    </div>
                );
            }
        };

        return result;
    };