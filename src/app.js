import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Menu from "./components/menu";
import RiskLevelSelector from "./components/RiskLevelSelector";
import Table from "./components/table";
import Chart from "./components/chart";
import InitialSumInput from "./components/InitialSumInput";

import ConeContext from "./utils/coneContext";
import constants from "./utils/constants";

import { getData } from "./api/api";

export default class App extends React.Component {

    state = {
        riskLevel: constants.riskLevel,
        initialSum: constants.initialSum,
        cones: []
    }

    componentDidMount() {
        getData().then(cones => {
            this.setState({cones});
        });
    }

    onChangeRiskLevel = (riskLevel) => {
        this.setState({riskLevel});
    }

    onInitialSumChanged = (initialSum) => {
        this.setState({initialSum});
    }

    render() {
        const {riskLevel, initialSum} = this.state;
        return (
            <ConeContext.Provider value={{cones: this.state.cones}}>
                <Router>
                    <div>
                        <Menu />
                        <RiskLevelSelector onChangeRiskLevel={this.onChangeRiskLevel} />
                        <InitialSumInput onInitialSumChanged={this.onInitialSumChanged} />
                        <Route exact path="/" component={() => <Table riskLevel={riskLevel} initialSum={initialSum} />} />
                        <Route path="/table" component={() => <Table riskLevel={riskLevel} initialSum={initialSum} />} />
                        <Route path="/chart" component={() => <Chart riskLevel={riskLevel} initialSum={initialSum} />} />
                    </div>
                </Router>
            </ConeContext.Provider>
        );
    }

}
