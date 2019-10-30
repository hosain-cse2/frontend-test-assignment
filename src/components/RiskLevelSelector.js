import React from "react";
import PropTypes from "prop-types";
import constants from "../utils/constants";

class RiskLevelSelector extends React.Component {

    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
    }

    onChange(event) {
        const {onChangeRiskLevel} = this.props;
        const riskLevel = parseInt(event.target.value);
        onChangeRiskLevel(riskLevel);
    }

    render() {
        const {maxRiskLevel} = this.props;
        const defultRiskl = constants.riskLevel;
        const options = [];
        for (let k = 1; k <= maxRiskLevel; ++k) {
            options.push(
                <option key={k} value={k}>{k}</option>
            );
        }

        return (
            <div>
                Risk level:
                <select onChange={this.onChange} defaultValue={defultRiskl}>
                    {options}
                </select>
            </div>
        );
    }
}

RiskLevelSelector.defaultProps = {
    maxRiskLevel: 25,
    onChangeRiskLevel: () => {}
};

RiskLevelSelector.propTypes = {
    maxRiskLevel: PropTypes.number,
    onChangeRiskLevel: PropTypes.func
};

export default RiskLevelSelector;
