let SwitchButton = function () {
    this.status = true;
    this.connect = function (ElectricLamp) {
        this.lamp = ElectricLamp;
    };
    this.switchOn = function () {
        this.status=true;
        this.lamp.status = true;
    };
    this.switchOff = function () {
        this.status=false;
        this.lamp.status = false;
    };
    this.checkButton =function () {
        if (this.status){
            console.log("ON");
        } else {
            console.log("off");
        }
    };
};
let ElectricLamp = function () {
    this.status = true;
    this.turnOn = function () {
        this.status = true;
    };
    this.turnOff = function () {
        this.status = false;
    };
    this.checkStatus=function () {
        if (this.status){
            alert("ON");
        } else {
            alert("off")
        }
    };
};
let switchButton= new SwitchButton();
let electricLamp=new ElectricLamp();
function on() {
    switchButton.connect(electricLamp);
    switchButton.switchOn();
    switchButton.checkButton();
    electricLamp.checkStatus();
}
function off() {
    switchButton.connect(electricLamp);
    switchButton.switchOff();
    switchButton.checkButton();
    electricLamp.checkStatus();
}