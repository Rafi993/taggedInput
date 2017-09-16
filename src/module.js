import angular from 'angular'
import tagInput from './tagdirective';
import './index.scss';

let anguTagInput = angular.module('angularTagInput', [])
  .directive('tagInput', tagInput)
  .name

export default anguTagInput;