export class Order {
    constructor(
        public title: string,
        public quantity: number,
        public date: Date,
        public contact: string
    ) {}
}

export class User {
    constructor(
        public email: string,
        public firstname: string,
        public lastname: string,
        public password: string
    ) {}
}