import weatherApp from "../images/weather-app2.png";
import weatherMobile from "../images/weather-mobile.png";

const weather = {
  link: "https://sage-jalebi-b44e5a.netlify.app/",
  title: "Weather app",
  image: weatherApp,
  imageAlt: "Screenshot of weather app",
  mobileImage: weatherMobile,
  par1: <p>This app was the final project for the SheCodes Plus workshop.</p>,
  par2: (
    <p>
      It fetches data from the OpenWeather API based on a city search or the
      user's current location. Although not required by the project, I set the
      time and date to match the timezone of the location being searched for
      rather than the user's timezone. For example; it is 9am in Sydney,
      Australia but when I search for Kyiv the time in the weather app shows me
      that it is 2am in Kyiv. I did this because I think the current weather
      conditions are more meaningful if you have the current time.
    </p>
  ),
  par3: (
    <p>
      I also added a night theme to the project, which is conditional on the
      local sunrise and sunset time. Again, using the Sydney versus Kyiv
      example, at 9am in Sydney the site would have a light blue background and
      black text. A search for Kyiv (where the local time was 2am) would change
      the page to a navy blue background and white text.{" "}
    </p>
  ),
  buttonText: "Launch weather app",
};
export { weather };
