const ValidatorModule = (function () {
    let format = 'HTML5';

    // private Methode
    function validate() {
        console.log('Validierung gestartet: ' + format);
        validationFinished();
    }

    // private Methode
    function validationFinished() {
        console.log('Validierung beendet: ' + format);
    }

    // √∂ffentliche API
    return {
        // √∂ffentliche Referenz auf die private Methode
        validate: validate
    }
})();

ValidatorModule.validate();
