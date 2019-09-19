import angular from 'angular';
import { SubscriptionCard } from './subscription-card/subscription-card.component';
import { HelpDialog } from './help-dialog/help-dialog.component';

export default angular.module('custom.components', [])
    .component('subscriptionCard', SubscriptionCard)
    .component('helpDialog', HelpDialog)
    .name;