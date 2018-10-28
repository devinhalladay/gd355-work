/*
 * @name Weather
 * @frame 720,280
 * @description This example grabs JSON weather data from apixu.com.
 * You will need to include the
 * <a href="http://p5js.org/reference/#/libraries/p5.dom">p5.dom library</a>
 * for this example to work in your own project.
*/

// A wind direction vector
var wind;
// Circle position
var position;

var weatherImg;
var weather;
var currentTemp;
var tempColor;

function preload() {
  var url = 'https://api.apixu.com/v1/current.json?key=75c212f8bedc44bab82171225181710&q=21201';
  var weather = loadJSON(url, gotWeather);
}

function setup() {
  createCanvas(600, 400);
  // Request the data from apixu.com
  var url = 'https://api.apixu.com/v1/current.json?key=75c212f8bedc44bab82171225181710&q=21201';
  loadJSON(url, gotWeather);
  // Circle starts in the middle
  position = createVector(width/2, height/2);


  // wind starts as (0,0)
  wind = createVector();


  // colorMode(HSL);

  // var tempMaptoH = map(currentTemp, 0, 90, 0, 360);
  // colorTemp = 30 + 240 * (30 - currentTemp) / 60;

  // background(colorTemp, 70, 50);

  if (currentTemp > 60) {
  	background('#F7AC57');
  } else {
   	background('#0091c2 ');
  }
}

function draw() {
  // Move in the wind's direction
  position.add(wind);

  if(frameCount % 40 == 0) {
    image(weatherImg, position.x, position.y);
  }

  if (position.x > width)  position.x = 0;
  if (position.x < 0)      position.x = width;
  if (position.y > height) position.y = 0;
  if (position.y < 0)      position.y = height;

}

function gotWeather(weather) {
  weatherImg = loadImage(weather.current.condition.icon);

  // Get the angle (convert to radians)
  var angle = radians(Number(weather.current.wind_degree));
  // Get the wind speed
  var windmag = Number(weather.current.wind_mph);

  // Make a vector
  wind = p5.Vector.fromAngle(angle);
  currentTemp = weather.current.temp_c;

  console.log(currentTemp);
}
