import template from './subscription-card.tpl.html';
import controller from './subscription-card.controller';

export const SubscriptionCard = {
    template,
    controller,
    controllerAs: 'vm',
    bindings: {
        title: '<',
        logo: '<',
        description: '<',
        onSubscribe: '&'
    }
};

