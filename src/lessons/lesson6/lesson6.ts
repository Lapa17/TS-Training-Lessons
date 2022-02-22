console.log('Lesson 6');

// Class
// https://learn.javascript.ru/classes
// https://medium.com/front-stories/%D0%BA%D0%B0%D0%BA-%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%B0%D1%8E%D1%82-%D0%BA%D0%BB%D0%B0%D1%81%D1%81%D1%8B-%D0%B2-javascript-7978c0003f1d
// https://www.typescriptlang.org/docs/handbook/classes.html
// https://www.youtube.com/watch?v=BASquaxab_w
// https://www.youtube.com/watch?v=uLY9GXGMXaA

// Task 01
// Создайте структуру с именем student, содержащую поля: имя и фамилия, номер группы, успеваемость (массив из пяти элементов).
// Создать массив из десяти элементов такого типа, упорядочить записи по возрастанию среднего балла.
// Добавить возможность вывода фамилий и номеров групп студентов, имеющих оценки, равные только 4 или 5.

interface IStudent {
    name: string,
    forname: string,
    groupNumber: number,
    academicPerformance: number[],
    averageMark: number
}

class Student implements IStudent {
    name: string
    forname: string
    groupNumber: number
    academicPerformance: number[]
    averageMark: number
    constructor(name: string, forname: string, groupNumber: number, academicPerformance: number[]) {
        this.name = name
        this.forname = forname
        this.groupNumber = groupNumber
        this.academicPerformance = academicPerformance
        this.averageMark = this.academicPerformance.reduce((acc, curr) => acc + curr) / this.academicPerformance.length
    }
    private static sortStudent(st1: IStudent, st2: IStudent) {
        if (st1.averageMark > st2.averageMark) {
            return 1;
        } else if (st1.averageMark < st2.averageMark) {
            return -1;
        } else {
            return 0;
        }
    }
    static sort(arr: Array<IStudent>) {
        const temp = [...arr];
        return temp.sort(this.sortStudent);
    }
    private static filterStudents(students: IStudent[]) {
        const result: Array<IStudent> = [];
        students.map(st => !st.academicPerformance.find(mark => mark <= 3) ? result.push(st) : st)
        return result
    }
    static getGoodStudents(students: IStudent[]) {
        this.filterStudents(students).map(st => {
            console.log(`Student name: ${st.name}, student group: ${st.groupNumber}`)
        })
    }
}
let students = [];
students.push(new Student('Eugene', 'Sheuchuk', 1, [4, 4, 2, 4, 4]));
students.push(new Student('Vlad', 'Bizin', 2, [5, 5, 5, 5, 5]));
students.push(new Student('Hanna', 'Kicel', 3, [4, 5, 4, 5, 5]));
students.push(new Student('Nick', 'Stone', 4, [3, 4, 3, 5, 3]));
students.push(new Student('Alex', 'Page', 5, [3, 4, 3, 3, 4]));
students.push(new Student('Test', 'Testovich', 6, [3, 5, 3, 5]));

Student.getGoodStudents(students)
console.log(Student.sort(students))

// Task 02
// Создать класс с двумя переменными. Добавить конструктор с входными параметрами и инициализирующий члены класса по умолчанию.
// Можно ли создать метод на экземпляре класса который будет удалять сам экземпляр класса?
// Можно ли создать метод класса который будет удалять экземпляр класса?
class PersonTask2 {
    name: string
    age: number
    constructor(name: string = 'Pasha', age: number = 24) {
        this.name = name
        this.age = age
    }
}


// Task 03
// Составить описание класса для представления времени. Предусмотреть возможности установки времени и изменения его отдельных
// полей (час, минута, секунда) с проверкой допустимости вводимых значений. В случае недопустимых значений полей выбрасываются исключения.
// Создать методы изменения времени на заданное количество часов, минут и секунд.
// Создать метод выводящий время в строке формата HH:MM:SS
// Создать класс по вышеуказанному описанию

interface ITime {
    hours: number;
    minutes: number;
    seconds: number;
    setHours: (hours: number) => void | Error;
    setMinutes: (minutes: number) => void | Error;
    setSeconds: (seconds: number) => void | Error;
}

class Time implements ITime {
    hours: number;
    minutes: number;
    seconds: number;

    constructor(hours: number, minutes: number, seconds: number) {
        this.hours = this.checkHours(hours);
        this.minutes = this.checkMinutes(minutes);
        this.seconds = this.checkSeconds(seconds);
    }

    private checkHours(h: number) {
        if (h < 0 || h >= 24) throw new Error('incorrect value of an hour');
        return h;
    }

    setHours(h: number) {
        this.hours = this.checkHours(h);
    }

    private checkMinutes(h: number) {
        if (this.isLessZeroOrMoreThanSixty(h)) throw new Error('incorrect value of minutes');
        return h;
    }

    setMinutes(m: number) {
        this.minutes = this.checkMinutes(m);
    }

    private checkSeconds(s: number) {
        if (this.isLessZeroOrMoreThanSixty(s)) throw new Error('incorrect value of seconds');
        return s;
    }

    setSeconds(s: number) {
        this.seconds = this.checkSeconds(s);
    }

    private isLessZeroOrMoreThanSixty(n: number) {
        return n < 0 || n >= 60;
    }

    getTime() {
        return `${this.formatNumber(this.hours)}:${this.formatNumber(this.minutes)}:${this.formatNumber(this.seconds)}`;
    }
    private formatNumber(n: number) {
        return n >= 10 ? n : '0' + n;
    }
}

// Task 04
// Класс Покупатель: Фамилия, Имя, Адрес, Номер банковского счета;
// Методы: установка значений атрибутов, получение значений атрибутов, вывод информации.
// Создать массив объектов данного класса.
// Вывести список покупателей в алфавитном порядке и список покупателей, у которых номер кредитной карточки находится в заданном диапазоне.

interface ICustomer {
    name: string
    forname: string
    adress: string
    bankNumber: number
    print: Function
}

class Customer implements ICustomer {
    name: string
    forname: string
    adress: string
    bankNumber: number
    constructor(name: string, forname: string, adress: string, bankNumber: number) {
        this.name = name
        this.forname = forname
        this.adress = adress
        this.bankNumber = bankNumber
    }
    setName(name: string) { this.name = name }
    setForname(forname: string) { this.forname = forname }
    setAdress(adress: string) { this.adress = adress }
    setBankNumber(bankNumber: number) { this.bankNumber = bankNumber }
    getName() { return this.name }
    getForname() { return this.forname }
    getAdress() { return this.adress }
    getBankNumber() { return this.bankNumber }
    print() {
        console.log(`${this.name} ${this.forname}, Address - ${this.adress}, Account - ${this.bankNumber}`);
    }
    private static sort(c1: ICustomer, c2: ICustomer) {
        if (c1.name > c2.name) {
            return 1;
        } else if (c1.name < c2.name) {
            return -1;
        } else {
            return 0;
        }
    }
    static alphabetNameFilter(customers: ICustomer[]) {
        [...customers].sort(Customer.sort).forEach(c => c.print());
    }
    static bankNumberFilter(customers: ICustomer[]) {
        const result: Array<ICustomer> = [];
        customers.map(cs => cs.bankNumber >= 100 && cs.bankNumber <= 1000 ? result.push(cs) : cs)
        return result
    }
    printNeedableCustomers() {

    }
}

let customers = [];
customers.push(new Customer('Pavel', 'Laparevich', 'Minsk', 1234))
customers.push(new Customer('Andrey', 'Stasevich', 'Grodno', 200))
customers.push(new Customer('Ruslan', 'Petrovich', 'Mogilev', 14))
customers.push(new Customer('Artyom', 'Korj', 'Minsk', 434))

customers[0].setName('Pashka')
console.log(Customer.alphabetNameFilter(customers))
console.log(Customer.bankNumberFilter(customers))
// Task 05
// Создать класс машина - имеющий марку, число цилиндров, мощность. Определить конструктор и функцию печати.
// Создать производный класс – грузовик, имеющий грузоподъемность кузова.
// Определить функции переназначения марки и грузоподъемности.

interface ICar {
    brand: string
    numberOfCilinders: number
    power: number
}

class Car implements ICar {
    brand: string
    numberOfCilinders: number
    power: number
    constructor(brand: string, numberOfCilinders: number, power: number) {
        this.brand = brand
        this.numberOfCilinders = numberOfCilinders
        this.power = power
    }
    print() {
        console.log(`Марка авто: ${this.brand}, число цилиндров: ${this.numberOfCilinders}, мощность: ${this.power}`)
    }
}
let bmw = new Car('bmw', 6, 194)
bmw.print()

class Truck extends Car {
    carrying: number;
    constructor(brand: string, cylinderCount: number, power: number, carrying: number) {
        super(brand, cylinderCount, power);
        this.carrying = carrying;
    }
    setBrand(brand: string) {
        this.brand = brand
    }
    setCarrying(value: number) {
        this.carrying = value
    }
}

let truck = new Truck('Mersedes', 8, 200, 1000)
truck.setBrand('BMW')
truck.setCarrying(2000)
console.log(truck)

// just a plug
export default () => {
};