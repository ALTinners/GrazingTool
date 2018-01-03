import * as React from "react";
import { createStore } from 'redux';
import { Provider, connect } from "react-redux";
import { composeWithDevTools } from 'redux-devtools-extension';

import { AppState, reducer } from "../api";

import HeaderNavButton from "./HeaderNavButton";
import UserDetails from "./UserDetails";
import { Sidebar } from "./Sidebar";
import { StockCalendar } from "./StockCalendar";
import { DataEditor } from "./DataEditor";
import { AddTransactionDialog } from "./AddTransactionDialog";

import "./App.scss";

enum MainContentSelection {
    Home = "Home",
    Stock = "Stock",
    Grazing = "Grazing",
    Estimates = "Estimates"
}

enum DialogContentSelection {
    None = "None",
    AddTransaction = "AddTransaction"
}

interface AppProps {

}

interface UiState {
    mainContentSelection: MainContentSelection;
    dialogContentSelection: DialogContentSelection;
}

const store = createStore<AppState>(
    reducer,
    composeWithDevTools(
        
    )
);

export class App extends React.Component<AppProps, UiState> {

    constructor(props: AppProps) {
        super(props);

        this.state = {
            mainContentSelection: MainContentSelection.Stock,
            dialogContentSelection: DialogContentSelection.None,
        };
    }

    exitDialog = (e?: React.MouseEvent<HTMLDivElement>): void => {
        this.setState({
            dialogContentSelection: DialogContentSelection.None
        })
    }

    addTransaction = (e?: React.MouseEvent<HTMLButtonElement>): void => {
        this.setState({
            dialogContentSelection: DialogContentSelection.AddTransaction
        })
    }

    render(): JSX.Element {
        return (
            <Provider store={store} >
                <div className="main-container">
                    <div className="main-header">
                        <h1>An icon here</h1>
                        {this.renderHeaderNavItems()}
                        <UserDetails
                            username="Username"
                        />
                    </div>
                    <div className="center-body">
                        <Sidebar
                            addTransaction={this.addTransaction}
                        />
                        <div className="center-content">
                            {this.renderCenterContent()}
                        </div>
                    </div>
                    { /*Maybe a footer?? */}
                    {this.renderDialog()}
                </div>
            </Provider>
        );
    }

    renderCenterContent(): JSX.Element {
        let content = this.state.mainContentSelection;
        if (content === MainContentSelection.Stock) {
            return (
                <StockCalendar
                />
            );
        } else {
            return (
                <DataEditor
                />
            );
        }
    }

    renderHeaderNavItems(): JSX.Element[] {
        return ([
            <HeaderNavButton
                label="Stock"
                key="Stock"
                onClick={() => { this.setState({ mainContentSelection: MainContentSelection.Stock }) }}
            />,
            <HeaderNavButton
                label="Grazing"
                key="Grazing"
                onClick={() => { this.setState({ mainContentSelection: MainContentSelection.Grazing }) }}
            />,
            <HeaderNavButton
                label="Estimates"
                key="Estimates"
                onClick={() => { this.setState({ mainContentSelection: MainContentSelection.Estimates }) }}
            />,
        ]);
    }

    renderDialog(): JSX.Element | null {
        if (this.state.dialogContentSelection == DialogContentSelection.AddTransaction) {
            return (
                <AddTransactionDialog
                    exitDialog={this.exitDialog}
                />
            );
        } else {
            return null;
        }
    }
}