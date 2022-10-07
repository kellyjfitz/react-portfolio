import dictionaryPic from "../images/dictionary.JPG";
import dictionaryMobile from "../images/dictionaryMobile.JPG";

const dictionary = {
  link: "https://spectacular-malabi-b71e1e.netlify.app/",
  title: "Dictionary app",
  image: dictionaryPic,
  imageAlt: "Screenshot of dictionary app",
  mobileImage: dictionaryMobile,
  text: (
    <div>
      <p>
        This dictionary app is built using React and fetches data from the Free
        Dictionary and Pexels APIs.
      </p>
      <p>
        I used the Howler library to allow users to play the word pronounciation
        without having to navigate away from the page.
      </p>
    </div>
  ),
  buttonText: "Go to dictionary",
};
export { dictionary };
