import Component from 'gia/Component';

export default class Increment extends Component {
    constructor(element) {
        super(element);

        this.index = 0;

        this.ref = {
            button: null,
            display: null,
        };
    }

    mount() {
        // click listener
        this.ref.button.addEventListener('click', this.increment.bind(this));

        // first write
        this.increment();
    }

    increment() {
        this.index++;
        this.ref.display.innerText = this.index;
    }
}