import template from './subscription-card.tpl.html';

export const SubscriptionCard = {
    template,
    replace: true,
    controllerAs: 'vm',
    bindings: {
        logo: '<',
        title: '<',
        description: '<',
        onSubscribe: '&',
        onCancel: '&'
    }
};