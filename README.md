Task 1 - Clean up, refactor and write tests (Solution)
------------------------------------------------------

What is done
------------

1. Added eslint rule to enforece same kind of coding style all over the app source code.

2. Rearrange the folder structure

3. Added "getTimeSeriesData" funciton and moved the calcuation of median, good and bad into it. That reduce the duplicate code in both table.js and chart.js

4. Added an HOC withData.js that isolate the access of data we get from the api call and the calculation of median, good and bad from both table.js and chart.js. also reduce duplicate code.

5. Added four tests.

Two for the utils.js file ensure that it returns right amount of records, in this case, since total year is 10 fixed in the app the function "getTimeSeriesData" should return always 10*12+1 = 121. Also testing that it is returning the correct value based on a specific mocked data {"riskLevel": 5, "mu": 0.0283, "sigma": 0.028}.

Two for the table.js file ensure that the component is rendered and total number of row is 121.

What more could be done
-----------------------

1. The naming convention of the files. All the class file name should be CamelCase. More granularity on folder structure e.g. separate folder for all files related to table component.

2. Adding more tests e.g for chart component or for the HOC or app.js files or other components.




Task 2 - Integrate an API
-------------------------

1. Removed the cones.json file to get the data, instead use the api call http://localhost:3000/api/cones to get the data when the app.js component is loaded. In this case we do not have to call the api every time we change the risk level or initial sum. And pass the data via the context. Moved the api call to a separate file api.js.




Task 3 - Add a new feature
--------------------------

1. Added InitialSumInput.js to add the flexibility so that the user can also input initialSum. Also added some check for the input field like input can not be blank or non numaric.




Note
----

Have not consider the css design.