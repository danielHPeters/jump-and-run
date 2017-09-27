/**
 * Created by Daniel on 2017-09-18.
 */
class KeyboardEventHandler {

    /**
     *
     * @param {KeyActions} keyActions
     */
    constructor(keyActions, canvas) {
        this.keyActions = keyActions;
        this.canvas = canvas;
        this.initializeKeyHandler(this.keyActions);
        this.keyActionsRegister = [];
    }

    /**
     *
     * @param {KeyActions} keyActions
     */
    initializeKeyHandler() {

        this.canvas.addEventListener('keydown', event => {
            this.keyActionsRegister[event.key] = true;
        });
        this.canvas.addEventListener('keyup', event => {
            this.keyActionsRegister[event.key] = false;
        });

    }

    getKeyActionsRegister(){
        return this.keyActionsRegister;
    }
}