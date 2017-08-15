import template from './subscription-card.tpl.html';

export const SubscriptionCard = {
    template,
    controllerAs: 'vm',
    bindings: {
        title: '<',
        logo: '<',
        description: '<'
    }
};

