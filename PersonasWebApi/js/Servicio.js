(function() {
    var url_base = "http://webapipersonas.azurewebsites.net/api/";

    function add(persona) {

        var opc = {
            type: "POST",
            url: url_base + "personas",
            data: JSON.stringify(persona),
            responseType: "json",
            headers: {"content-Type":"application/json"}

        };

        return WinJS.xhr(opc);


    };

    function get() {
        var opc = {
            type: "GET",
            url: url_base + "personas",
            responseType: "json"

        };

        return WinJS.xhr(opc);
    }

    WinJS.Namespace.define("Servicio", {Add:add,Get:get});


})();