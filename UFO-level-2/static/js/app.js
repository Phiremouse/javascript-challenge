// from data.js
var tableData = data;

// YOUR CODE HERE!
// from data.js
var tableData = data;

// YOUR CODE HERE!
var FilterBtn = d3.select('#filter-btn');
var tbody = d3.select('tbody');
var FilterField = d3.select('input');

//todo:transform special characters into symbols again

function HandleChange(event){
    tbody.text('');
    var InputElement= d3.select('#datetime');
    var InputValue = InputElement.property('value');
    var filterdata = tableData.filter(date => date.datetime===InputValue);   
    filterdata.forEach((element)=>{
        var row = tbody.append('tr');
        Object.entries(element).forEach(([key,value]) => {
            var cell = row.append('td');
            if (key==='country'||key==='state'){
                tempval=value.toUpperCase();
                cell.text(tempval);
            }
            else{
                MyString = value;
                tempvalue=MyString[0].toUpperCase() + MyString.slice(1)
                cell.text(tempvalue);
            }
        });
    });    
};

function MyEnter(event){
    if(event.key===13){
        HandleChange(event);
    }
}

FilterBtn.on("click",HandleChange);
FilterField.on('change',HandleChange);
FilterField.on('pressed',MyEnter);