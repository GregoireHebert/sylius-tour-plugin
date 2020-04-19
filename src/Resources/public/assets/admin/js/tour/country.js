import tour from "./tour.js";

export default [
    {
        id: '/admin/countries/',
        title: translate('Create a country.'),
        text: translate('First click on create'),
        attachTo: {
            element: 'a[href="/admin/countries/new"]',
            on: 'left'
        },
        advanceOn: {
            selector: 'a[href="/admin/countries/new"]',
            event: 'click'
        },
    },
    {
        id: '/admin/countries/new',
        title: translate('Create a country.'),
        text: translate('Select your country'),
        attachTo: {
            element: '#sylius_country_code',
            on: 'bottom'
        },
        advanceOn: {
            selector: '#sylius_country_code',
            event: 'blur'
        },
    },
    {
        id: '/admin/countries/new/province',
        title: translate('Create a country.'),
        text: translate('And now add a province'),
        attachTo: {
            element: 'a[data-form-collection="add"]',
            on: 'bottom'
        },
        advanceOn: {
            selector: 'a[data-form-collection="add"]',
            event: 'click'
        },
    },
    {
        id: '/admin/countries/new/province/code',
        title: translate('Create a country.'),
        text: translate('you need to set a code (FR-FR for france). You wont be able to change it.'),
        beforeShowPromise: async () => {
            await new Promise(r => setTimeout(r, 200));
        },
        attachTo: {
            element: '#sylius_country_provinces_0_code',
            on: 'bottom'
        },
        advanceOn: {
            selector: '#sylius_country_provinces_0_code',
            event: 'blur'
        },
    },
    {
        id: '/admin/countries/new/province/name',
        title: translate('Create a country.'),
        text: translate('you need to set a name (France). That might be changed later.'),
        attachTo: {
            element: '#sylius_country_provinces_0_name',
            on: 'bottom'
        },
        advanceOn: {
            selector: '#sylius_country_provinces_0_name',
            event: 'blur'
        },
    },
    {
        id: '/admin/countries/new/province/abbreviation',
        title: translate('Create a country.'),
        text: translate('And eventually an abbreviation (FR).'),
        attachTo: {
            element: '#sylius_country_provinces_0_abbreviation',
            on: 'bottom'
        },
        advanceOn: {
            selector: '#sylius_country_provinces_0_abbreviation',
            event: 'blur'
        },
    },
    {
        id: '/admin/countries/new/province/submit',
        title: translate('Create a country.'),
        text: translate('Then click Create :)'),
        attachTo: {
            element: 'button[type="submit"]',
            on: 'top'
        },
        advanceOn: {
            selector: 'button[type="submit"]',
            event: 'click'
        },
    },
    {
        id: '/admin/countries/1/edit',
        title: translate('Create a country.'),
        text: translate('Congratulation your first country has been created'),
        buttons: [
            {
                text: translate('Continue'),
                action: tour.next
            }
        ]
    }
];
