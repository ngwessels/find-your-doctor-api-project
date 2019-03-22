# _Find Your Doctor_

_Published_ **March 22nd 2018**<br>
_Author_ **Nate Wessels**

1. [Description](#description)
1. [Installation](#installation)
1. [Known Bugs](#known-bugs)
1. [Technologies Used](#technologies-used)
1. [License](#license)

### Description
_This application is using the BetterDoctor API to get doctor information, and using the Google Geocode API to get address coordinates. Type in your health issue, city and state and it will return back to you results_

### Installation
* Clone from https://github.com/ngwessels/.git
* Get Your own BetterDoctor API Key at https://developer.betterdoctor.com/
* Get Your own Google Geocode API Key at https://developers.google.com/maps/documentation/
* Run `$ npm install`
* Type `touch .env`
* Paste `exports.apikey = [Your BetterDoctor APIKey Here]` into the .env file
* Pase `google_geocode_api = [Your Google Geocode APIKey Here]` into the .env file
* Run `$ npm run build`
* Run `$ npm run start`


### Known Bugs
* None identified

### Support and Contact Details

_Contact Nate Wesses at nwessels16@gmail.com_

### Technologies Used
* HTML
* Javascript with jQuery
* Tested with Karma and Jasmine
* API's

### License


_Copyright (c) 2019 Nate Wessels, Epicodus_

_Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:_

_The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software._

_THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE._
