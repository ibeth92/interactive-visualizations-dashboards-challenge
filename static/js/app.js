// Create function for data plotting
function dataPlots(id) {

// Read in samples.json and call function to populate dropdown menu
// Create object for filtering and populate it with data from samples.json
    d3.json("Data/samples.json").then((data) => {
        let testData = data;
        let filteredData = testData.metadata.filter(meta => meta.id ==id);
// Clear html in order to popoulate with data
        let index = d3.select("#sample-metadata");
        index.html("")
// Append to bring in key and value data from dempgraphics info
        Object.entries(filteredData[0]).forEach(
            ([key, value]) => d3.select("#sample-metadata")
            .append("p")
            .text(`${key}: ${value}`)
        );
