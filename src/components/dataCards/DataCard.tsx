import * as React from "react";

import "./dataCards.scss";

// Props you want the resulting component to take (besides the props of the wrapped component)
interface InternalRootProps {

}

//An internal class which is used to store and pass props to CommonRootProps for wrapped classes
interface InternalDataCardState {
    isSelected: boolean;
    isValid: boolean;
}

// Props passed to a wrapped component. Need to be &-ed with the actual component's props
export interface DataCardProps extends InternalDataCardState {
    setSelected: () => void;
    setValid?: (valid: boolean) => void;
}

export const makeDataCard = () =>
    <OriginalProps extends {}>(
        Component: (React.ComponentClass<OriginalProps & DataCardProps>
            | React.StatelessComponent<OriginalProps & DataCardProps>)
    ) => {
        type ResultProps = OriginalProps & InternalRootProps;
        const result = class DataCardComponent extends React.Component<ResultProps, InternalDataCardState> {
            constructor(props: ResultProps) {
                super(props);
                this.state = {
                    isSelected: false,
                    isValid: false,
                };
            }

            render(): JSX.Element {
                return (
                    <div className="data-card">
                        <Component
                            isSelected={this.state.isSelected}
                            setSelected={() => { this.setState({ isSelected: !this.state.isSelected }) }}
                            // setValid={(isValid: boolean) => { console.log(isValid); this.setState({ isValid }) }}
                            {...this.props}
                            {...this.state}
                        />
                        {this.renderSubmit()}
                    </div>
                );
            }

            renderSubmit(): JSX.Element | null {
                if (this.state.isValid) {
                    return (
                        <button>
                            OK
                        </button>
                    );
                } else {
                    return null;
                }
            }
        };

        return result;
    };