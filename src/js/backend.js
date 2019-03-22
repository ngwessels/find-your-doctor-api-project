import $ from 'jquery';
import { Doctor } from './apiCall.js';

export class Info{

  displayInfo(input) {
    let length = input.length;
    let string;
    for(let i = 0; i < length; i++) {
      let doctor = input[i];
      if(doctor[6]) {
        string = string + "<div class='doctorInfo'><p>FirstName: " + doctor[0] + "</p><p>LastName: " + doctor[1] + "</p><img src='" + doctor[2] + "' alt=''><p>Address: " + doctor[3] + "</p><p>Phone: " + doctor[4] + "</p><p>New Patients Accepted: " + doctor[5] + "</p><p>Website: " + doctor[6] + "</p></div>";
      } else {
        string = string + "<div class='doctorInfo'><p>FirstName: " + doctor[0] + "</p><p>LastName: " + doctor[1] + "</p><img src='" + doctor[2] + "' alt=''><p>Address: " + doctor[3] + "</p><p>Phone: " + doctor[4] + "</p><p>New Patients Accepted: " + doctor[5] + "</p><p>Website: None Found</p></div>";
      }
    }
    return string;
  }
  getInfo(input) {
    let length = input.data.length;
    let object = [];
    if(input.data[0]) {
      for(let i = 0; i < length; i++) {
        let array = [];
        let results = input.data[i];
        let firstName = results.profile.first_name;
        let lastName = results.profile.last_name;
        let picture = results.profile.image_url;
        let street = results.practices[0].visit_address.street;
        let city = results.practices[0].visit_address.city;
        let state = results.practices[0].visit_address.state_long;
        let zip = results.practices[0].visit_address.zip;
        let phone = results.practices[0].phones[0].number;
        let newPatients = results.practices[0].accepts_new_patients;
        let website = results.practices[0].website;
        let address = street + " " + city + ", " + state + " " + zip;
        array = [firstName, lastName, picture, address, phone, newPatients, website];
        object[i] = array;
      }
      return object;

    } else {
      $(".results").text("Sorry there are no doctors who are able to help with this condition");

    }
  }

}
