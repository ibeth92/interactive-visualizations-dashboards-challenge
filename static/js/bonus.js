// Create bubble chart 
var bubbleData = [
    {
        x: data. samples[index].otu_ids,
        y: data.samples[index].smaple_values,
        mode: "markers",
        text: data.samples[index].otu_labels,
        marker: {
            size: data.samples[index].sample_values,
            color: data.samples[index].otu_ids,
