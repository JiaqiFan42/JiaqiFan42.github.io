class Train {
    constructor(color, lightsOn) {
        this.color = color;
        this.lightsOn = lightsOn;
    }
    toggleLights() {
        this.lightsOn = !this.lightsOn;
    }
    lightsStatus() {
        console.log('Lights on?', this.lightsOn);
    }
    getSelf() {
        console.log(this);
    }
    getPrototype() {
        var proto = Object.getPrototypeOf(this);
        console.log(proto);
    }
}

class HighSpeedTrain extends Train {
    constructor(color, lightsOn, passengers, hightSpeedOn) {
        super(color, lightsOn);
        this.passengers = passengers;
        this.hightSpeedOn = hightSpeedOn;
    }
    toggleHighSpeed() {
        this.hightSpeedOn = !this.hightSpeedOn;
    }
    toggleLights() {
        super.toggleLights();
        super.lightsStatus();
        console.log('Lights are 100% operational.');
    }
}

let train1 = new Train('red', false);
// console.log(train1);
// train1.toggleLights();
// train1.lightsStatus();
// train1.getSelf();
// train1.getPrototype()

let highSpeed1 = new HighSpeedTrain(200, false, 'green', false)

train1.toggleLights()
train1.lightsStatus()
highSpeed1.toggleLights()