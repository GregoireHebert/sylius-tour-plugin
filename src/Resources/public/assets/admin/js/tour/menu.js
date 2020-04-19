import tour from './tour.js';
export default [
    {
        id: '/admin/menu/catalog',
        title: translate('The Catalog menu'),
        text: translate('The catalog allows to define your products, the categories they are in, the relation between them and your inventory as well.'),
        attachTo: {
            element: 'div.item:nth-child(2)',
            on: 'right'
        },
        buttons: [
            {
                text: translate('Next'),
                action: tour.next
            }
        ]
    },
    {
        id: '/admin/menu/sales',
        title: translate('The Sales menu'),
        text: translate('The Sales regroup everything you need to check on the passed and current orders, the completed and pending payments with a quick action to complete the the sent and pending shipments with a quick action to complete them'),
        attachTo: {
            element: 'div.item:nth-child(3)',
            on: 'right'
        },
        buttons: [
            {
                text: translate('Next'),
                action: tour.next
            }
        ]
    },
    {
        id: '/admin/menu/customer',
        title: translate('The Customer menu'),
        text: translate('The customer menu allows to handle your customers. they can be guests or registered customer. In addition you can have multiple groups to classify your shop users allowing you to define specific offers.'),
        attachTo: {
            element: 'div.item:nth-child(4)',
            on: 'right'
        },
        buttons: [
            {
                text: translate('Next'),
                action: tour.next
            }
        ]
    },
    {
        id: '/admin/menu/marketing',
        title: translate('The Marketing menu'),
        text: translate('The marketing allows you to manage the promotions and coupons, and the product reviews as well.'),
        attachTo: {
            element: 'div.item:nth-child(5)',
            on: 'right'
        },
        buttons: [
            {
                text: 'Next',
                action: tour.next
            }
        ]
    },
    {
        id: '/admin/menu/configuration',
        title: translate('The Configuration menu'),
        text: translate('/admin/menu/configuration/text'),
        attachTo: {
            element: 'div.item:nth-child(6)',
            on: 'right'
        },
        buttons: [
            {
                text: 'Next',
                action: tour.next
            }
        ]
    },
    {
        id: '/admin/menu/configuration/countries',
        title: translate('Where are we selling?'),
        text: translate('Let\'s set the country where we are going to start selling.'),
        attachTo: {
            element: 'div.item:nth-child(6) .item:nth-child(2)',
            on: 'right'
        },
        buttons: [
            {
                text: translate('Go'),
                action: () => { window.location = '/admin/countries'; }
            }
        ]
    },
];
