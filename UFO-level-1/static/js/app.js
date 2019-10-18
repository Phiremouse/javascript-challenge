// from data.js
var tableData = data;

// YOUR CODE HERE!
var FilterBtn = d3.select('#filter-btn');
var tbody = d3.select('tbody');

// todo: cant get this work 
// var FilterField = d3.select('.form-control');

//todo: capitalize city names, states, country
//todo:transform special characters into symbols again


function HandleChange(event){
    var InputElement= d3.select('#datetime');
    var InputValue = InputElement.property('value');
    var filterdata = tableData.filter(date => date.datetime===InputValue);   
    filterdata.forEach((element)=>{
        var row = tbody.append('tr');
        Object.entries(element).forEach(([key,value]) => {
            var cell = row.append('td');
            cell.text(value);
        });
    });    
};

FilterBtn.on("click",HandleChange);

//todo: cant get this to work 
// FilterField.on('change',HandleChange);
