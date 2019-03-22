import $ from 'jquery';
import './sass/styles.scss';
import { Doctor } from './js/apiCall.js';
import { Info } from './js/backend.js';


// This js file contains all the front-end logic. It will call upon other js files that contain back-end logic



$(document).ready(function() {
  let info = new Info();
  let findDoctor = new Doctor();
  $("form#doctorLookup").submit(function(event) {
    event.preventDefault();
    const myHealthIssue = $("#health").val();
    const myPromise = findDoctor.main(myHealthIssue);
    myPromise.then(function(response) {
      let body = JSON.parse(response);
      main(body);
    }, function(error) {
      console.log("There was an error");
    })
  });
});

function main(body) {
  $(".results").empty();
  let info = new Info();
  let findDoctor = new Doctor();
  findDoctor.add(body);
  let results = info.getInfo(body);
  let text = info.displayInfo(results);
  $(".results").append(text);
}
