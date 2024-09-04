import { useEffect, useState } from 'react';
import Chart from 'react-google-charts';


// historicalData passed as props
const LineChart = ({historicalData}) => {
(historicalData);

/* react-google-charts expects the data to be provided in a two-dimensional array format.
The first inner array (i.e., ['Date', 'Prices']) represents the header row, which defines the names of the columns in the chart. In this case, "Date" will be the label for the x-axis and "Prices" for the y-axis.

inside the useEffect, the state is updated with the actual data. For each entry in historicalData.prices, a new array is added to dataCopy, where the first element is the formatted date, and the second is the price.
After all entries are added, dataCopy will look something like this:
[
  ['Date', 'Prices'],
  ['MM/DD', price1],
  ['MM/DD', price2],

This structure allows react-google-charts to correctly map the dates to the x-axis and prices to the y-axis.
If historicalData.prices looks like:
[
  [1693708800000, 50000],
  [1693795200000, 50500],
  [1693881600000, 51000]
]
After processing, dataCopy would be:
[
  ['Date', 'Prices'],
  ['09/02', 50000],
  ['09/03', 50500],
  ['09/04', 51000]
]
*/

const [data, setData] = useState([['Date', 'Prices']]);

useEffect(() => {
let dataCopy = [['Date', 'Prices']];

if(historicalData.prices) {
    historicalData.prices.map((item) => {
      /*prices is array that holds two data first timestamp and second prices in array so data is array inside prices array like below. so need to access lik item[0] for date and item[1] for prices
[
  [1693708800000, 50000],
  [1693795200000, 50500],
  [1693881600000, 51000]
] */
        // item[0] is date from historicalData
        // toLocaleDateString().slice to change date te string and get just month and day.
        // item[0] pushed to Date whereas item[1] pushed to Prices in dataCopy
        dataCopy.push([`${new Date(item[0]).toLocaleDateString().slice(0, -5)}`,item[1]])
    });
    setData(dataCopy);
}
}, [historicalData]);

  return (
    // using css format provided by Chart
    <Chart
      chartType="LineChart"
      data={data}
      height="100%"
      width="60%"
      legendToggle
    />
  )
}

export default LineChart;
