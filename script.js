class Circle {
    #radius

    constructor (radius) {
        this.#radius = radius;
    }

    getArea() {
        return Math.PI * Math.pow(this.#radius, 2)
    }

    getC() {
        return 2 * Math.PI * this.#radius
    }
}

class Rectangle {
    #length;
    #breadth;

    constructor (length, breadth) {
        this.#length = length;
        this.#breadth = breadth;
    }

    getArea() {
        return this.#length * this.#breadth
    }

    getPerim() {
        return (this.#length + this.#breadth) * 2
    }

    getRatio() {
        return this.getArea() / this.getPerim()
    }
}

class Text {
    constructor (text) {
        this.text = text
    }

    getNofSymbols() {
        return this.text.replace(/\s/g, '').length
    }

    getNofLetters() {
        return Array.from(this.text).filter(e => {
            return /[A-Z|a-z]/.test(e) ? true : false
        }).length
    }

    getArrayofWords() {
       return this.text.split(/[^\w+]/).filter(elem => elem.length > 0)
    }

    getArrayofSentences() {
        return this.text.split(/\.+/g).filter(elem => elem.length > 0)
    }
}


