import React from "react";
import PropTypes from "prop-types";
import withData from "../container/withData";

class Table extends React.PureComponent {
    render() {
        const {dataMedian, dataGood, dataBad} = this.props;
        const months = dataMedian.map((v, idx) => idx);

        const rows = months.map((entry, idx) => (
            <tr key={idx} data-test-id={`time-series-${idx}`}>
                <td>{entry}</td>
                <td>{dataGood[idx]}</td>
                <td>{dataMedian[idx]}</td>
                <td>{dataBad[idx]}</td>
            </tr>
        ));

        const tableHeader = React.createElement("tr", {}, [
            React.createElement("th", {key: "month"}, "Month"),
            React.createElement("th", {key: "good"}, "Good performance"),
            React.createElement("th", {key: "median"}, "Median performance"),
            React.createElement("th", {key: "bad"}, "Bad performance")
        ]);

        return (
            <table>
                <thead>
                    {tableHeader}
                </thead>
                <tbody>
                    {rows}
                </tbody>
            </table>
        );
    }

}

Table.defaultProps = {
    riskLevel: 3
};

Table.propTypes = {
    riskLevel: PropTypes.number
};

export default withData(Table);
