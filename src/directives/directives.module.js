import angular from 'angular';
import TextCapitalize from './text-capitalize/text-capitalize.directive';

export default angular.module('custom.directives', [])
    .directive('textCapitalize', TextCapitalize)
    .name;
