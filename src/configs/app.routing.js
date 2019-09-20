import componentsTpl from '../screens/demo-components/components.template.html';
import componentsCtrl from '../screens/demo-components/components.controller';
import directivesTpl from '../screens/demo-directives/directives.template.html';
import directivesCtrl from '../screens/demo-directives/directives.controller';
import homeTpl from '../screens/homePage/homePage.template.html';
import signupTpl from '../screens/signup/signup.template.html';
import signupCtrl from '../screens/signup/signup.controller';
import subscriptionsTpl from '../screens/subscriptions/subscriptions.template.html';
import subscriptionsCtrl from '../screens/subscriptions/subscriptions.controller';

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
            url:'/demo-directives',
            template: directivesTpl,
            controller: directivesCtrl,
            controllerAs: 'vm'
        })
        .state("components", {
            url:'/demo-components',
            template: componentsTpl,
            controller: componentsCtrl,
            controllerAs: 'vm'
        })
};

routing.$inject = ['$locationProvider', '$stateProvider', '$urlRouterProvider'];