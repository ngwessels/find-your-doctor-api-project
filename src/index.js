import 'bootstrap';
import $ from 'jquery';
import '../node_modules/bootstrap/scss/bootstrap.scss';
import './sass/styles.scss';
import { isMath } from './js/example.js';


$(document).ready(function() {
  $("form#calculator").submit(function() {
    let math = new isMath();
    event.preventDefault();
    const result = math.math();
    $("#output").text(result);
  });
});
