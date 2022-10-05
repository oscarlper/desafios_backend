let instance;

class SingletonClass {
    constructor() {
        this.value = Math.floor(Math.random(1)*1e10);
    }

    printValue() {
        console.log(this.value);
    }

    static getInstance() {
        if (!instance) {
        instance = new SingletonClass();
        }

        return instance;
    }
}

export default SingletonClass;



