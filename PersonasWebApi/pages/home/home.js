(function () {
    "use strict";
    var datos = new WinJS.Binding.List([]);
    WinJS.Namespace.define("Datos", { Personas: datos });

    function update(res) {


        datos.splice(0, datos.length);

      

        for (var per in res) {
            datos.push(res[per]);
        }

    }

    WinJS.UI.Pages.define("/pages/home/home.html", {
        // This function is called whenever a user navigates to this page. It
        // populates the page elements with the app's data.
        ready: function (element, options) {
            Servicio.Get().done(function(res) {

                update(JSON.parse(res.response));

            });
        }
    });
})();
