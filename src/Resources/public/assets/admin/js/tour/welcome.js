import tour from './tour.js';

export default [
    {
        id: '/admin/',
        name: 'welcome',
        title: translate('Welcome to your new e-commerce Website'),
        text: translate('If you know what you are doing you can skip this tour. Otherwise, follow this guide for a tour, shall we?'),
        buttons: [
            {
                text: translate('Yes'),
                action: tour.next
            },
            {
                text: translate('Leave the tour'),
                secondary: true,
                action: tour.complete
            }
        ]
    },
    {
        id: '/admin/dashboard',
        name: translate('welcome'),
        title: translate('Welcome to your new e-commerce Website'),
        text: translate('You are in the manager favourite page: total sales, average basket value, number of orders, number of customers new orders and new customers.'),
        buttons: [
            {
                text: translate('Continue'),
                action: tour.next
            }
        ]
    }
];
