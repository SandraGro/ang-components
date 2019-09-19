import homeTpl from '../screens/homePage/homePage.template.html';
import directivesTpl from '../screens/directives/directives.template.html';
import directivesCtrl from '../screens/directives/directives.controller';
import subscriptionsTpl from '../screens/subscriptions/subscriptions.template.html';
import subscriptionsCtrl from '../screens/subscriptions/subscriptions.controller';
import signupTpl from '../screens/signup/signup.template.html';
import signupCtrl from '../screens/signup/signup.controller';

export default function routing($locationProvider, $stateProvider, $urlRouterProvider) {
    $locationProvider.html5Mode(true);

    $stateProvider
        .state("home", {
            url:'/',
            template: homeTpl
        })
        .state("signup", {
            url:'/signup',
            template: signupTpl,
            controller: signupCtrl,
            controllerAs: 'vm'
        })
        .state("subscriptions", {
            url:'/subscriptions',
            template: subscriptionsTpl,
            controller: subscriptionsCtrl,
            controllerAs: 'vm'
        })
        .state("directives", {
            url:'/directives',
            template: directivesTpl,
            controller: directivesCtrl,
            controllerAs: 'vm'
        })
};

routing.$inject = ['$locationProvider', '$stateProvider', '$urlRouterProvider'];