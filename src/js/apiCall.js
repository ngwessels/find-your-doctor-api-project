import $ from 'jquery';


// This example.js should contain all the back-end logic, the index.js is the front end-logic

export class Doctor {
  constructor() {
    this.data;

  }

  location(healthIssue, lat, lng) {
    let url = "https://api.betterdoctor.com/2016-03-01/doctors?query=" + healthIssue + "&location=";
    let search = lat + "%2C" + lng + "%2C100&user_location=" + lat + "%2C" + lng + "&skip=0&limit=10&user_key=" + process.env.exports.apiKey;
    let result = url + search;
    return url + search;
  }

  add(doctorInfo) {
    this.data = doctorInfo;
  }


  coords(city, state) {
    let string = this.combine(city, state);
    const url = "https://maps.googleapis.com/maps/api/geocode/json?address="+ string + "&key=" + process.env.google_geocode_api;
    return url;
  }

  combine(city, state) {
    let newStreet;
    let newCity = city;
    let newState = state;
    if(newStreet) {
      for(let i = 0; i < 20; i++) {
        newStreet = newStreet.replace(" ", "+");
      }
    }
    for(let i = 0; i < 20; i++) {
      newCity = newCity.replace(" ", "+");
    }
    for(let i = 0; i < 20; i++) {
      newState = newState.replace(" ", "+");
    }
    let string;
    if(newStreet) {
      string = newStreet + ",+" + newCity + ",+" + newState;
    } else {
      string = newCity + ",+" + newState;
    }
    return string;
  }


  findCoords(input) {
    let lat = input.results[0].geometry.location.lat;
    let lng = input.results[0].geometry.location.lng;
    let country = input.results[0].address_components[3].long_name;
    let array = [];
    console.log(country);
    if(country !== "United States") {
      $(".results").text("Sorry we only serve the United States.");
    } else {
      array = [lat, lng];
    }
    return array;
  }

  getCoords(city, state) {
    let that = this;
    return new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      let url = that.coords(city, state);
      request.onload = function() {
        if (this.status === 200) {
          resolve(request.response);
        } else {
          reject(error(request.statusText));
        }
      }
      request.open("GET", url, true);
      request.send();
    })
  }

  main(healthIssue, coords) {
    let lat = coords[0];
    let lng = coords[1];
    let that = this;
    return new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      let url = that.location(healthIssue, lat, lng);
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
