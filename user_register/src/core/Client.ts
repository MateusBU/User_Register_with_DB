export default class Client{
    #id: string
    #name: string
    #age: number

    //# -> private atributes
    constructor(name: string, age: number, id: string = null){
        this.#name = name;
        this.#age = age;
        this.#id =id;
    }

    static empty(){
        return new Client('', 0)
    }

    get id(){
        return this.#id;
    }

    get name(){
        return this.#name;
    }

    get age(){
        return this.#age;
    }
}