commandInputElement = undefined;
window.onload = function () {
    commandInputElement = document.getElementById("commandInput");
    commandInputElement.addEventListener("focusout", function () {
        commandInputElement.focus();
    });
    commandInputElement.focus();
    commandInputElement.addEventListener("input", function () {
        commandCompand.updateText(commandInputElement.value);
    });
    document.onkeydown = function (e) {
        if (e&&e.keyCode)
        {
            switch (e.keyCode) {
                case 13://enter
                    commandCompand.submit();
            }
        }
    }; 
};
