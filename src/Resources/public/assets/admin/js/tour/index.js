import tour from './tour.js';
import welcome from './welcome.js';
import menu from './menu.js';
import country from './country.js';

tour.addSteps([
    ...welcome,
    ...menu,
    ...country
]);

const start = () => {
    if ('false' === localStorage.getItem('gheb.sylius.tour.plugin.isActive')) {
        console.log('[tour] is disabled');
        return;
    }

    const currentStep = localStorage.getItem('gheb.sylius.tour.plugin.currentStep') ?? '/';
    const currentPage = window.location.pathname;

    if (currentStep.startsWith(currentPage, 0)) {
        console.log(`[tour] start from ${currentStep}`);
        tour.show(currentStep);
    } else if (tour.getById(currentPage)) {
        // it seem we lost our way... let's start fresh here.
        console.log('[tour] fresh start');
        tour.show(currentPage);
    }
};

const headerMenu = $(`
<div class="ui floated simple dropdown icon item" id="gheb-sylius-tour-activation">
    <i class="question circle icon ${'false' === localStorage.getItem('gheb.sylius.tour.plugin.isActive') ? 'grey': 'green'}"></i>
</div>
`);

headerMenu.click(function() {
       if ('false' === localStorage.getItem('gheb.sylius.tour.plugin.isActive')) {
           console.log('[tour] enable tour');
           $(this).children('i').toggleClass('green', true);
           $(this).children('i').toggleClass('grey', false);
           localStorage.setItem('gheb.sylius.tour.plugin.isActive', true);
           start();
       } else {
           console.log('[tour] disable tour');
           $(this).children('i').toggleClass('green', false);
           $(this).children('i').toggleClass('grey', true);
           localStorage.setItem('gheb.sylius.tour.plugin.isActive', false);
           tour.cancel();
       }
    }
);

$('#sylius-version-notification').before(headerMenu);

start();
