import React from "react";
import ConeContext from "../utils/coneContext";
import { getTimeSeriesData } from "../utils/utils";

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
                            if (cone) {
                                const {dataMedian, dataGood, dataBad} = getTimeSeriesData(cone, this.props.initialSum);
                                return <DecoratedComponent {...this.props} dataMedian={dataMedian} dataGood={dataGood} dataBad={dataBad} />;
                            }
                            return null;
                        }
                    }
                </ConeContext.Consumer>
            );
        }
    };
}
