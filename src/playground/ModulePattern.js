// let ValidatorModule = ValidatorModule || (function () {
let ValidatorModule = (function () {
    // private Variable
    let format = 'HTML5';

    // √∂ffentliche API
    return {
        // √∂ffentliche Funktion
        validate: function() {
            console.log('Validierung gestartet: ' + format);
        }
    }
})();

ValidatorModule.validate(); // Ausgabe: HTML5
ValidatorModule.format = 'SGML';
ValidatorModule.validate(); // Ausgabe: HTML5
