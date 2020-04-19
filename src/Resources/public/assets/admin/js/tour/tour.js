const tour = new Shepherd.Tour({
    useModalOverlay: true,
    exitOnEsc: true,
    keyboardNavigation: false,
});

tour.options.defaultStepOptions = {
    classes: 'shadow-md bg-purple-dark',
    scrollTo: true,
    buttons: [
        {
            text: translate('Next'),
            action: tour.next
        },
        {
            text: translate('Close'),
            secondary: true,
            action: tour.hide
        }
    ]
};

export default tour;
