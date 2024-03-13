class SaleManager {
    constructor({name, age, sector}) {
        this.name = name
        this.age = age
        this.sector = sector
        this.post = 'Sales manager'
    }

    responsability () {
        console.log('to sale')
    }
}

class SaleDirector extends SaleManager {
    constructor(options) {
        super(options)
        this.post = 'Sales Director'
        this.experienta = options.experienta
    }

    responsability() {
        super.responsability()
        console.log('Conducator')
    }

    get experientaInfo () {
        return `Experienta de lucru a lui ${this.name} este de ${this.experienta} ani.`
    }

    set experientaInfo(newValue) {
         this.experienta = newValue
    }
}

class SaleManagerExpert extends SaleDirector {
    constructor(options) {
        super(options)
        this.post = 'Sales Manager Expert'
        this.specializare = options.specializare
    }

    responsability() {
        super.responsability()
        console.log('Expert in management')
    }

    get specializareInfo() {
        return `Specializarea lui ${this.name} este in ${this.specializare}.`
    }

    set specializareInfo(newValue) {
        this.specializare = newValue
    }
}

class SaleManagerTrainer extends SaleDirector {
    constructor(options) {
        super(options)
        this.post = 'Sales Manager Trainer'
        this.cursuri = options.cursuri
    }

    responsability() {
        super.responsability()
        console.log('Antrenor de echipa')
    }

    get cursuriInfo() {
        return `Cursurile pe care le-a urmat ${this.name} sunt ${this.cursuri}.`
    }

    set cursuriInfo(newValue) {
        this.cursuri = newValue
    }
}

const andrei = new SaleManagerExpert({name: 'Andrei', age: 32, sector: 'Botanica', experienta: 5, specializare: 'marketing'})
const sergiu = new SaleManagerTrainer({name: 'sergiu', age: 35, sector: 'buiucani', experienta: 7, cursuri: 'management, leadership'})

console.log(andrei)
console.log(sergiu)