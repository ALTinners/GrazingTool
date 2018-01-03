import * as React from "react";

import "./App.scss";

// Props you want the resulting component to take (besides the props of the wrapped component)
interface InternalRootProps {
    exitDialog: (e?: React.MouseEvent<HTMLDivElement>) => void;     
}

//An internal class which is used to store and pass props to CommonRootProps for wrapped classes
interface InternalOverlayState {

}

// Props passed to a wrapped component. Need to be &-ed with the actual component's props
export interface OverlayProps {
    exitDialog: (e?: React.MouseEvent<HTMLDivElement>) => void;     
}

export const makeOverlay = () =>
    <OriginalProps extends {}>(
        Component: (React.ComponentClass<OriginalProps & OverlayProps>
            | React.StatelessComponent<OriginalProps & OverlayProps>)
    ) => {
        type ResultProps = OriginalProps & InternalRootProps;
        const result = class OverlayComponent extends React.Component<ResultProps, InternalOverlayState> {
            constructor(props: ResultProps) {
                super(props);
                this.state = {

                };
            }

            render(): JSX.Element {
                return (
                    <div className="overlay" onClick={this.props.exitDialog}>
                        <Component    
                            exitDialog={this.props.exitDialog}                        
                            {...this.props}
                            {...this.state}
                        />                        
                    </div>
                );
            }
        };

        return result;
    };