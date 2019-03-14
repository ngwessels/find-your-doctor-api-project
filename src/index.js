import 'bootstrap';
import $ from 'jquery';
import '../node_modules/bootstrap/scss/bootstrap.scss';
import './sass/styles.scss';
import { isMath } from './js/example.js';


// This js file contains all the front-end logic. It will call upon other js files that contain back-end logic



$(document).ready(function() {
  $("form#calculator").submit(function() {
    let math = new isMath();
    event.preventDefault();
    const result = math.math();
    $("#output").text(result);
  });
});
