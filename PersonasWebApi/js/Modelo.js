(function() {
    var persona = function (nombre, edad, foto) {
        this.nombre = nombre;
        this.edad = edad;
        this.foto = foto || "http://1.bp.blogspot.com/_qI-X7SaThsU/RfC2npBoScI/AAAAAAAAACg/uvsIjrnD8vc/s400/battux.png";
    };

    WinJS.Namespace.define("Modelo", { Persona: persona });

})();