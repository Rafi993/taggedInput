import angular from 'angular';
import AppComponent from './app.component';
import angularTagInput from './module';

angular.module('app', [angularTagInput])
  .component('app', AppComponent); 