import constants from "./constants";

function mapDate({ t, mu, sigma, fee, initialSum, monthlySum }) {
    const yearlyReturn = mu - fee;
    const monthlyReturn = yearlyReturn / 12;
    const month = t * 12;

    const median = initialSum * Math.exp(yearlyReturn * t) + monthlySum * Math.exp(monthlyReturn * (month - Math.floor(month))) * (Math.exp(monthlyReturn * Math.floor(month)) - 1.0) / (Math.exp(monthlyReturn) - 1.0);

    return {
        median: median,
        upper95: Math.exp(Math.log(median) + Math.sqrt(t) * sigma * 1.645),
        lower05: Math.exp(Math.log(median) - Math.sqrt(t) * sigma * 1.645)
    };
}

const calculateTimeSeries = ({ years, mu, sigma, fee, initialSum, monthlySum }) => {

    const series = [];
    for (let k = 0; k <= 12 * years; ++k) {
        series.push(mapDate({ t: k / 12, mu, sigma, fee, initialSum, monthlySum }));
    }

    const allSeries = {
        median: [],
        upper95: [],
        lower05: []
    };

    for (let k = 0; k < series.length; k++) {
        allSeries.median.push({ y: series[k].median, x: series[k].x });
        allSeries.upper95.push({ y: series[k].upper95, x: series[k].x });
        allSeries.lower05.push({ y: series[k].lower05, x: series[k].x });
    }

    return allSeries;
};

const getTimeSeriesData = (cone, initialSum) => {
    initialSum = initialSum ? initialSum : constants.initialSum;
    const {mu, sigma} = cone;
    const fee = 0.01;

    const timeSeries = calculateTimeSeries({
        mu,
        sigma,
        years: 10,
        initialSum: initialSum,
        monthlySum: 200,
        fee
    });

    const dataMedian = timeSeries.median.map(v => v.y);
    const dataGood = timeSeries.upper95.map(v => v.y);
    const dataBad = timeSeries.lower05.map(v => v.y);

    return {dataMedian, dataGood, dataBad};
};

export {getTimeSeriesData};
