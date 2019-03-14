import 'bootstrap';
import $ from 'jquery';
import '../node_modules/bootstrap/scss/bootstrap.scss';
import './sass/styles.scss';
import { math } from './js/example.js';


$(document).ready(function() {
  $("form#calculator").submit(function() {
    debugger;
    event.preventDefault();
    const result = math();
    $("#output").text(result);
  });
});
