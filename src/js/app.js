import Swup from 'swup';
import loadComponents from 'gia/loadComponents';
import components from './components';

// first animate in
setTimeout(function () {
    document.documentElement.classList.remove('is-animating');
}, 100)

// enable components
loadComponents(components);

// enable swup
const swup = new Swup({
    debugMode: true,
});

// reload components for each container after transition
swup.on('contentReplaced', function () {
    document.querySelectorAll('[data-swup]').forEach(function (container) {
        loadComponents(components, container);
    });
});