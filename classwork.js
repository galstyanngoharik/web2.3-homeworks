//Notification system
class NotificationCenter {
    constructor() {
        this.subscribers = [];
    }
    subscribe(app) {
    if (!this.subscribers.includes(app)) {
        this.subscribers.push(app);
    }
     return "App subscribed";
}
    
    unsubscribe(app) {
        this.subscribers = this.subscribers.filter(s => s !== app); 
        return "App unsubscribed";
    }
    notifyAll(message) {
         return this.subscribers.map(app => app.receive(message));
    }
}
    class App {
        constructor(name) {
            this.name = name;
        }
        receive(message) {
        return `${this.name} received ${message}`;    
        }
    }
class Telegram extends App {
    constructor(name) { super(name); }
}
class Instagram extends App {
    constructor(name) { super(name); }
    
}

    class Facebook extends App {
    constructor(name) { super(name); }
   
}

    const center = new NotificationCenter();

const facebook = new Facebook("Facebook");
const instagram = new Instagram("Instagram");
const telegram = new Telegram("Telegram");

console.log(center.subscribe(facebook));   // "App subscribed"
console.log(center.subscribe(instagram));  // "App subscribed"
console.log(center.notifyAll("New post added"));
// Facebook and Instagram should receive the message

console.log(center.unsubscribe(instagram)); // "App unsubscribed"

console.log(center.notifyAll("Story updated"));
// only Facebook should receive the message

//cinema


class TV {
    #state = false;
turnOn() {
    this.#state = !this.#state
    return "TV turned on";
}
turnOff() {
    this.#state = !this.#state;
    return "TV turned off";
}
}
class SoundSystem {
    #state = false;
turnOn() {
    this.#state = !this.#state
    return "sound system turned on";
}
turnOff() {
    this.#state = !this.#state;
    return "sound system turned off";
}
}
class Light {
#state = false;
turnOn() {
    this.#state = !this.#state
    return "lights turned on";
}
turnOff() {
    this.#state = !this.#state;
    return "lights turned off";
}
}

class CinemaFacade {
    constructor(TV, soundSystem, lights) {
        this.TV = TV;
        this.soundSystem = soundSystem;
        this.lights = lights;
    }
watchmovie() {

}
endmovie() {

}
}
const tv = new TV();
const sound = new SoundSystem();
const lights = new Lights();

const cinema = new CinemaFacade(tv, sound, lights);

console.log(cinema.watchMovie());
// TV turned on
// Sound system turned on
// Lights dimmed
// "Movie mode activated"

console.log(cinema.endMovie());
// TV turned off
// Sound system turned off
// Lights restored
// "Movie mode deactivated"

