import Swup from 'swup';
import DebugPlugin from '@swup/debug-plugin';
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
    linkSelector: 'a[href^="' + window.location.origin + '"]:not([data-no-swup]), a[href^="/"]:not([data-no-swup]), a[href^="./"]:not([data-no-swup]), a[href^="#"]:not([data-no-swup])',
    plugins: [new DebugPlugin()],
});

// reload components for each container after transition
swup.on('contentReplaced', function () {
    document.querySelectorAll('[data-swup]').forEach(function (container) {
        loadComponents(components, container);
    });
});
