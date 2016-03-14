;(function(BC){
    // Base service
    var AJAX_GLOBAL_CONFIG = {
        customizedHeaders: {}
    };
    function BaseService(){

    }
    
    BaseService.prototype.doGet = function(url) {
        var deferr = $.Deferred();
        $.ajax(url, {
            method: 'GET',
            headers: AJAX_GLOBAL_CONFIG.customizedHeaders
        }).done(function(data, status, res){
            deferr.resolve(data);
        }).fail(function(res, err, errMsg){
            deferr.reject(res, err, errMsg);
        });

        return deferr;
    };
    BaseService.prototype.doPost = function(url, params) {
        var deferr = $.Deferred();
        $.ajax(url, {
            method: 'POST',
            data: params,
            headers: AJAX_GLOBAL_CONFIG.customizedHeaders
        }).done(function(data, status, res){
            deferr.resolve(data);
        }).fail(function(res, err, errMsg){
            deferr.reject(res, err, errMsg);
        });

        return deferr;
    };

    BC.BaseService = BaseService;
}(window.BC))