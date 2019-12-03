import template from './img-container.tpl.html'
import controller from './img-container.controller'

export default function ImgContainer() {
    return {
        restrict: 'E',
        template,
        controller,
        controllerAs: 'vm',
        bindToController: true,
        scope: {
            src: '<'
        }
    }
}
