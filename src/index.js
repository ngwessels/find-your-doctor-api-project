import $ from 'jquery';
import './sass/styles.scss';
import { Doctor } from './js/apiCall.js';
import { Info } from './js/backend.js';


// This js file contains all the front-end logic. It will call upon other js files that contain back-end logic



$(document).ready(function() {
  let findDoctor = new Doctor();
  let info = new Info();
  $("form#doctorLookup").submit(function(event) {
    event.preventDefault();
    const myHealthIssue = $("#health").val();
    const myPromise = findDoctor.main(myHealthIssue);
    myPromise.then(function(response) {
      let body = JSON.parse(response);
      findDoctor.add(body);
      info.getInfo(body);
      // $(".results").append(results);
    }, function(error) {
      console.log("There was an error");
    })
  });
});
