import $ from 'jquery';


// This example.js should contain all the back-end logic, the index.js is the front end-logic

export class Doctor {
  constructor() {
    this.data;

  }

  location(healthIssue) {
    let url = "https://api.betterdoctor.com/2016-03-01/doctors?query=" + healthIssue + "&location=";
    let search = "45.5122%2C-122.6587%2C100&user_location=45.4888%2C-122.8013&skip=0&limit=10&user_key=" + process.env.exports.apikey;
    let result = url + search;
    return url + search;
  }

  add(doctorInfo) {
    this.data = doctorInfo;
  }

  main(healthIssue) {
    let that = this;
    return new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      let url = that.location(healthIssue);
      request.onload = function() {
        if (this.status === 200) {
          resolve(request.response);
        } else {
          reject(error(request.statusText));
        }
      }
      request.open("GET", url, true);
      request.send();
    });
  }
}
