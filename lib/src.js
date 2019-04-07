//Create a Pixi Application
let app = new PIXI.Application({
    antialias: true,    // default: false
    transparent: false, // default: false
    resolution: 1       // default: 1
}
);
app.renderer.view.style.position = "absolute";
app.renderer.view.style.display = "block";
app.renderer.autoResize = true;
app.renderer.resize(window.innerWidth, window.innerHeight);
//Add the canvas that Pixi automatically created for you to the HTML document
document.body.appendChild(app.view);

let commandCompand={
    textPixi: undefined,
    cursorPixi: undefined,
    cursorActive: true,
    init: function () {
        this.textPixi = new PIXI.Text('>', {
            fontFamily: 'Monospace',
            fontSize: '18px',
            fill: '#FFFFFF',
            stroke: '#FFFFFF',
            wordWrap: false,
            align: 'left'
        }
        );
        this.textPixi.x = 2;
        this.textPixi.y = 15;
        this.cursorPos = 1;
        //cursorPixi = new PIXI.
        this.registery();
    },
    updateText: function (input) {
        this.textPixi.text = ">"+input;
    },
    submit: function () {

    },
    removeText: function (isBackSpace) {
        if (isBackSpace) {
            if (this.cursorPos !== 1) {
                this.textPixi.text = this.textPixi.text.slice(0, this.cursorPos - 1) + this.textPixi.text.slice(this.cursorPos);
                --this.cursorPos;
                updateCursor();
            }
        }
        else {
            console.log(1);
        }
    },
    getCursorPos: function () {
        return commandInputElement.selectionStart;
    },
    updateCursor: function () {

    },
    registery() {
        app.stage.addChild(this.textPixi);
    }

};

commandCompand.init();