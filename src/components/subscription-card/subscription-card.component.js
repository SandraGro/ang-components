import template from './subscription-card.tpl.html';
import controller from './subscription-card.controller';

export const SubscriptionCard = {
    template,
    replace: true,
    controller,
    controllerAs: 'vm',
    bindings: {
        logo: '<',
        title: '<',
        description: '<',
        onSubscribe: '&',
        onCancel: '&'
    }
};
