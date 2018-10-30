import Component from 'gia/Component';

export default class SeparateText extends Component {
    constructor(element) {
        super(element);

        this.options = {
            delay: 0.3,
        };
    }

    mount() {
        let newContent = "";
        this.element.innerText.split(' ').forEach(function (word, index) {
            newContent += `<span><span style="animation-delay: ${ index * this.options.delay + 0.4 }s">${ word }</span></span> `;
        }.bind(this));
        this.element.innerHTML = newContent;
    }
}