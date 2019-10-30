import React from "react";
import ConeContext from "../utils/coneContext";

export default function withData(DecoratedComponent) {

    return class extends React.PureComponent {

        state = {
            cones: []
        }

        render() {
            return (
                <ConeContext.Consumer>
                    {
                        context => {
                            const cone = context.cones.find(cone => this.props.riskLevel === cone.riskLevel);
                            return cone ?
                                <DecoratedComponent {...this.props} cone={cone} /> :
                                null;
                        }
                    }
                </ConeContext.Consumer>
            );
        }
    };
}
