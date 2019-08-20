import angular from 'angular';
import TextBold from './text-bold/text-bold.directive';

export default angular.module('custom.directives', [])
    .directive('textBold', TextBold)
    .name;
