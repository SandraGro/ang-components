import template from './contact-card.tpl.html'
import controller from './contact-card.controller'

export default function ContactCard() {
    return {
        restrict: 'E',
        template,
        controller,
        controllerAs: 'vm',
        bindToController: true,
        scope: {
            company: '@',
            name: '=',
            position: '<'
        }
    }
}
