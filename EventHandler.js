
function EventHandler(input) {
    this.array = input;
    this.getEventsBetweenDates = function (start, end) {
        const result = this.array.filter(starting => Date.parse(starting.dateStart) >= Date.parse(start) && Date.parse(starting.dateEnd) <= Date.parse(end));
        return result;
    }

    this.getByMonth = function (month) {
        var m = String(month);
        if (m <= 9) {
            var temp = "0" + m;
            m = temp;
        }

        const regex = new RegExp('/' + m + '/');
        const result = this.array.filter(starting => regex.test(starting.dateStart));
        return result;
    }

    this.getUniqueAndSort = function () {
        var newArr;
        newArr = this.array.filter(FilterUnique); //Call to helper function
        newArr.sort(sortArr); //Call to helper function
        return newArr;
    }


}
//CODE BELOW DOES NOT WORK FOR TASK 2 : Could not figure it out
/*
EventHandler.prototype.getByMonth = function(month)
{
    var newEvent = new EventHandler(this);

    return newEvent.getByMonth(month);
};

EventHandler.prototype.getEventsBetweenDates = function(start, end)
{
    var newEvent = new EventHandler(this);

    return newEvent.getEventsBetweenDates(start, end);
};

EventHandler.prototype.getUniqueAndSort = function()
{
    var newEvent = new EventHandler(this);


    return newEvent.getUniqueAndSort();
};*/
//***********************************************************************************************************


//Helper function to sort
function sortArr(a, b) {
    return Date.parse(a.dateStart) - Date.parse(b.dateStart);
}

//Helper function to filter
var start = [];
var end = [];
function FilterUnique(input) {

    if (!((start.includes(input.dateStart)) && (end.includes(input.dateEnd)))) {
        start.push(input.dateStart);
        end.push(input.dateEnd);
        return input;
    }
}


