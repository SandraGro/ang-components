import angular from 'angular';
import 'angular-animate';
import 'angular-material';
import 'angular-material-icons';
import 'angular-messages';
import 'angular-ui-router';

import 'angular-material/angular-material.scss';
import 'roboto-fontface/css/roboto/sass/roboto-fontface-regular.scss';

import './app.scss';

import configuration from './configs/app.config';
import routing from './configs/app.routing';
import { AppComponent } from './app.component';

angular
    .module('app.module', [
        'ngMaterial',
        'ngMdIcons',
        'ngAnimate',
        'ngMessages',
        'ui.router'
    ])
    .config(configuration)
    .config(routing)
    .component('appComponent', AppComponent);

document.addEventListener('DOMContentLoaded', () => angular.bootstrap(document, ['app.module']));