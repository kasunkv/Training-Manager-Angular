(function () {
    'use strict';

    angular
        .module('trainingManager.factories')
        .factory('notifyFactory', notifyFactory);
    
    function notifyFactory() {
        // Configure toastr options
        toastr.options.closeButton = true;
        toastr.options.progressBar = true;
        toastr.options.positionClass = 'toast-bottom-right';

        return {
            success: function (message) {
                toastr.success(message);
            },
            error: function (message) {
                toastr.error(message);
            },
            info: function (message) {
                toastr.info(message);
            },
            warning: function (message) {
                toastr.warning(message);
            }
        };
    }
})();