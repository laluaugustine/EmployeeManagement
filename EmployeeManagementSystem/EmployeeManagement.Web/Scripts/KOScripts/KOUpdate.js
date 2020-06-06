var parsedSelectedEmployee = $.parseJSON(selectedEmployee);
$(function () {
    ko.validation.init({

        registerExtenders: true,
        messagesOnModified: true,
        insertMessages: true,
        parseInputAttributes: true,
        errorClass: 'errorStyle',
        messageTemplate: null

    }, true);
    modelUpdate.errors = ko.validation.group(modelUpdate);
    ko.applyBindings(modelUpdate);
});
var modelUpdate = {
    EmployeeID: ko.observable(parsedSelectedEmployee.EmployeeID).extend({ required: true }),
    FirstName: ko.observable(parsedSelectedEmployee.FirstName).extend({ required: true, minLength: 2, maxLength: 40 }),
    LastName: ko.observable(parsedSelectedEmployee.LastName).extend({ required: true, minLength: 2, maxLength: 40 }),
    Address: ko.observable(parsedSelectedEmployee.Address),
    updateEmployee: function () {
        try {
                $.ajax({
                    url: '/Employees/Update',
                    type: 'POST',
                    //dataType: 'json',
                    data: ko.toJSON(this),
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
    $('div.alert-success').hide();
    $('div.alert-danger').hide();
    //if (viewModel.errors().length === 0) {
    //    //alert('Thank you');    
    //    $('div.alert-success').show();
    //} 
    window.location.href = '/Employees/Index/';
}
function errorCallback(err) {
    $('div.alert-success').hide();
    $('div.alert-danger').hide();

        //alert('Please check your submission');    
        $('div.alert-danger').show();
    
    //window.location.href = '/Employees/Index/';
}