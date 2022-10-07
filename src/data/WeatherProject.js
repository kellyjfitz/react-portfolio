import weatherApp from "../images/weather-app2.png";
import weatherMobile from "../images/weather-mobile.png";

const weather = {
  link: "https://curious-pony-385bce.netlify.app/",
  title: "Weather app",
  image: weatherApp,
  imageAlt: "Screenshot of weather app",
  mobileImage: weatherMobile,
  text: (
    <div>
      <p>
        I first built this app with vanilla javascript as part of the SheCodes
        Plus course but later rebuilt it with React.
      </p>
      ,
      <p>
        It fetches data from the OpenWeather API based on a city search or the
        user's current location. Although not required by the project, I set the
        time and date to match the timezone of the location being searched for
        rather than the user's timezone. For example; it is 9am in Sydney,
        Australia but when I search for Kyiv the time in the weather app shows
        me that it is 2am in Kyiv. I did this because I think the current
        weather conditions are more meaningful if you have the current time.
      </p>
    </div>
  ),
  buttonText: "Launch weather app",
};
export { weather };
