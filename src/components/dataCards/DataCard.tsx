import * as React from "react";
import { connect } from "react-redux";

import { AppState, IdType } from "../../api";

import "./dataCards.scss";
import { MinimisedDataCard } from "./MinimisedDataCard";
import { getSelectedObjectId } from "../../api/uiState/index";

// Props you want the resulting component to take (besides the props of the wrapped component)
interface InternalRootProps {
    label: string;
    id: IdType;
    setSelectedId: () => void;
}

//An internal class which is used to store and pass props to CommonRootProps for wrapped classes
interface InternalDataCardState {
    isSelected: boolean;
    isValid: boolean;
}

interface ReduxStateProps {
    selectedId: IdType | undefined;
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
        type ResultProps = OriginalProps & InternalRootProps & ReduxStateProps;
        const result = class DataCardComponent extends React.Component<ResultProps, InternalDataCardState> {
            constructor(props: ResultProps) {
                super(props);
                this.state = {
                    isSelected: this.isObjectSelected(props),
                    isValid: false,
                };
            }

            componentWillReceiveProps(nextProps: Readonly<ResultProps>) {
                this.setState({ isSelected: this.isObjectSelected(nextProps) });
            }

            isObjectSelected = (props: Readonly<ResultProps> | ResultProps): boolean => {
                return (props.id == props.selectedId);
            }

            render(): JSX.Element {
                return (
                    <div className="data-card" onClick={this.props.setSelectedId}>
                        {this.renderMinimisedComponent()}
                        {this.renderSubmit()}
                    </div>
                );
            }

            renderMinimisedComponent(): JSX.Element {
                if (this.state.isSelected) {
                    return (
                        <Component
                            isSelected={this.state.isSelected}
                            setSelected={this.props.setSelectedId}
                            {...this.props}
                            {...this.state}
                        />
                    );
                } else {
                    return (
                        <MinimisedDataCard
                            label={this.props.label}
                        />
                    )
                }
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

        const mapStateToProps = (state: AppState, props: InternalRootProps): ReduxStateProps => {
            return {
                selectedId: getSelectedObjectId(state),
            };
        }

        return connect(mapStateToProps)(result);
    };