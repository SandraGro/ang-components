import angular from 'angular';
import TextBold from './text-bold/text-bold.directive';
import ContactCard from './contact-card/contact-card.directive'
import ImgContainer from './img-container/img-container.directive'

export default angular.module('custom.directives', [])
    .directive('textBold', TextBold)
    .directive('contactCard', ContactCard)
    .directive('imgContainer', ImgContainer)
    .name;
