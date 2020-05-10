// from data.js
var tableData = data;

// Get a reference to the table body
var tbody = d3.select("tbody");

// UFO Sighting values for each column
tableData.forEach(function(ufoSighting) {

    // Append one table row `tr` for each UFO Sighting object
    var row = tbody.append("tr");

    Object.entries(ufoSighting).forEach(function([key, value]) {

        // Append a cell to the row for each value
        var cell = row.append("td");
        cell.text(value);
    });
});


// Select the button
var button = d3.select("#filter-btn");
button.on("click", function() {

    tbody.html("");

    // Select the input date get the raw HTML nodes
    var inputElement = d3.select("#datetime");

    // Get the value property of the input date, state, shape
    var inputValue = inputElement.property("value");

    // Filter Data with datetime equal to input value
    var filteredData = tableData.filter(sighting => sighting.datetime === inputValue);


    filteredData.forEach(function(selections) {

        // Append one table row `tr` for each sighting
        var row = tbody.append("tr");
        Object.entries(selections).forEach(function([key, value]) {

            // Append a cell to the row for each value
            var cell = row.append("td");
            cell.text(value);
        });
    });
});