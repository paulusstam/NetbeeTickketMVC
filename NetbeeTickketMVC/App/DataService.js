NetBeeTicketApp.factory('DataService',
    ["$http",
        function ($http) {

            var getCustomers = function () {

              return  $http.get("Customer/GetCustomers");
                    };

            var getCustomer = function (id) {
                if (id == 123) {
                    return {
                    fullName: "Klarinogampros",
                    email: "klarino@gmail.com",
                    subscriptionType: "Annual",
                    subscriptionDate: "27/06/2017",
                    isSubscribed: true
                    };
            }
            return undefined;
        };

        var insertCustomer = function (newCustomer) {
            return $http.post("Customer/Create", newCustomer)
        };

        var updateCustomer = function (customer) {
            return true;
        };

        return {
            insertCustomer: insertCustomer,
            updateCustomer: updateCustomer,
            getCustomer: getCustomer,
            getCustomers: getCustomers
        };
            
    }]);

    
