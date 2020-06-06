
$(function () {
    ko.applyBindings(modelView);
    modelView.viewCourses();
});
var modelView = {
    Employees: ko.observableArray([]),
    viewCourses: function () {
        var thisObj = this;
        try {
            $.ajax({
                url: '/Employees/ListEmployees',
                type: 'GET',
                dataType: 'json',
                contentType: 'application/json',
                success: function (data) {
                    thisObj.Employees(data); //Here we are assigning values to KO Observable array
                },
                error: function (err) {
                    alert(err.status + " : " + err.statusText);
                }
            });
        } catch (e) {
            window.location.href = '/Employees/Index/';
        }
    }
};