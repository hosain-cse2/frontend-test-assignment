import React from "react";

export default class InitialSumInput extends React.Component {
    state = {
        initialSum: ""
    }

    onInitialSumSubmit = () => {
        if (this.props.onInitialSumChanged && event.keyCode === 13) {
            this.props.onInitialSumChanged(this.state.initialSum);
        }
    }

    onInitialSumChanged = (event) => {
        this.setState({initialSum: event.target.value});
    }

    render() {
        return (
            <div>
                <span>
                    Initial sum:
                </span>
                <span>
                    <input
                        onKeyPress={this.onInitialSumSubmit}
                        onChange={this.onInitialSumChanged}
                        value={this.state.initialSum}
                        type="number"
                    />
                </span>
            </div>
        );
    }
}