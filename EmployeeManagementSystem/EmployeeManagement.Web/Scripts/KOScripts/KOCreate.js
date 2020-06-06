$(function () {
    ko.applyBindings(modelCreate);
});


var modelCreate = {
    EmployeeID: ko.observable(),
    FirstName: ko.observable(),
    LastName: ko.observable(),
    Address: ko.observable(),
    Gender: ko.observable(),
    createEmployee: function () {
        try {
            $.ajax({
                url: '/Employees/Create',
                type: 'post',
                dataType: 'json',
                data: ko.toJSON(this), //Here the data wil be converted to JSON
                contentType: 'application/json',
                success: successCallback,
                error: errorCallback
            });
        } catch (e) {
            window.location.href = '/Employees/Index/';
        }
    }
};
function successCallback(data) {
    window.location.href = '/Employees/ListEmployees/';
}
function errorCallback(err) {
    window.location.href = '/Employees/Index/';
}