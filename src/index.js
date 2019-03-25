import $ from 'jquery';
import { Doctor } from './js/apiCall.js';
import { Info } from './js/backend.js';
import './sass/styles.scss';


// This js file contains all the front-end logic. It will call upon other js files that contain back-end logic



$(document).ready(function() {
  let info = new Info();
  let findDoctor = new Doctor();
  $("form#doctorLookup").submit(function(event) {
    event.preventDefault();
    const myHealthIssue = $("#health").val();
    const city = $("#city").val();
    const state = $("#state").val();
    const myPromise = findDoctor.getCoords(city, state);
    myPromise.then(function(response) {
      let body2 = JSON.parse(response);
      console.log(body2);
      let coords = findDoctor.findCoords(body2);
      const myPromise2 = findDoctor.main(myHealthIssue, coords);
      myPromise2.then(function(response) {
        let body = JSON.parse(response);
        main(body);
      }, function(error) {
        console.log("There was an error");
        $(".form").hide();
        $(".results").text("It appears there is an error. We are not able to get any doctor information at this time");


      })
    }, function(error) {
      console.log("There was an error getting coords");
      $(".results").text("IT appears there is an error. We are not able to find your location at this time.");
    });
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
