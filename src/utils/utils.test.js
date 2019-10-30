import {getTimeSeriesData} from "./utils";

describe("Utils: ", () => {
    const cone = {"riskLevel": 5, "mu": 0.0283, "sigma": 0.028};
    const {dataMedian, dataGood, dataBad} = getTimeSeriesData(cone);

    it("\"calculateTimeSeries\" returns expected number of time series data", () => {
        expect(dataMedian.length).toBe(121);
        expect(dataGood.length === dataMedian.length).toBe(true);
        expect(dataBad.length === dataMedian.length).toBe(true);
    });

    it("\"calculateTimeSeries\" returns right time series value", () => {
        expect(dataGood[1]).toBe(10351.994612951046);
        expect(dataMedian[1]).toBe(10215.261634038217);
        expect(dataBad[1]).toBe(10080.33467495262);
    });
});