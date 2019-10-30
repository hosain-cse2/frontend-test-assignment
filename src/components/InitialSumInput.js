import React from "react";

export default class InitialSumInput extends React.Component {
    state = {
        initialSum: ""
    }

    onInitialSumSubmit = () => {
        const reg = /^\d+$/;
        const isPositiveNumber = this.state.initialSum && this.state.initialSum >= 0 && reg.test(this.state.initialSum);

        if (this.props.onInitialSumChanged && event.keyCode === 13 && isPositiveNumber) {
            this.props.onInitialSumChanged(this.state.initialSum);
        }
    }

    onInitialSumChanged = (event) => {
        this.setState({initialSum: event.target.value});
    }

    render() {
        return (
            <div>
                Initial sum:
                <span>
                    <input
                        onKeyPress={this.onInitialSumSubmit}
                        onChange={this.onInitialSumChanged}
                        value={this.state.initialSum}
                        type="number"
                        min="0"
                    />
                </span>
            </div>
        );
    }
}