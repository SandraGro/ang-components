import angular from 'angular';
import { SubscriptionCard } from './subscription-card/subscription-card.component';

export default angular.module('custom.components', [])
    .component('subscriptionCard', SubscriptionCard)
    .name;