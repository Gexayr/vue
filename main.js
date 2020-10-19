const car = (name, model, owner, year, phone, image) => ({name, model, owner, year, phone, image});
const log = (text, date = new Date()) => ({text, date});

const cars = [
    car('Ford', 'Focus', 'Max', 2016, '+374 93 11 37 20', 'images/focus.jpg'),
    car('Ford', 'Mondeo', 'Vladimir', 2018, '+374 98 11 37 20', 'images/mondeo.jpeg'),
    car('Porshe', 'Panamera', 'Irina', 2015, '+374 77 11 37 20', 'images/panamera.jpeg')
];
new Vue({
    el: '#app',
    data: {
        cars: cars,
        car: cars[0],
        selectCarIndex: 0,
        phoneVisibility: false,
        search: '',
        modalVisibility: false,
        logs: []
    },
    methods: {
        selectCar (index) {
            this.car = cars[index];
            this.selectCarIndex = index;
        },
        buyCar () {
            this.modalVisibility = false
            this.logs.push(
                log(`Success order: ${this.car.name} - ${this.car.model}`)
            )
        }
    },
    computed: {
        phoneBtnText() {
            return this.phoneVisibility ? 'Hide phone' : 'Show phone';
        },
        filteredCars() {
            return this.cars.filter( car => {
                return car.name.toLowerCase().indexOf(this.search.toLowerCase()) > -1 || car.model.toLowerCase().indexOf(this.search.toLowerCase()) > -1
            });
        }
    },
    filters: {
        date(value) {
            return value.toLocaleString();
        }
    }
});