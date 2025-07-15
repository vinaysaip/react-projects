import instagramIcon from "../utils/images/instagram.png";
import linkedinIcon from "../utils/images/linkedin.png";
import twitterIcon from "../utils/images/twitter.png";
import githubIcon from "../utils/images/github.png";
const ContactUs = () => {
  return (
    <div className="p-4 m-4 flex flex-col">
      <h1 className="text-3xl font-bold">Contact Me..</h1>
      <p className="text-xl pt-3">Feel free to reach out to me....</p>
      <div className="flex pt-4 gap-8">
        <div className="w-8 h-8">
          <a href="https://www.instagram.com/vinay_sai_p" target="_blank">
            <img src={instagramIcon} alt="Instagram" />
          </a>
        </div>
        <div className="w-8 h-8">
          <a
            href="https://www.linkedin.com/in/vinay-sai-211452212"
            target="_blank"
          >
            <img src={linkedinIcon} alt="LinkedIn" />
          </a>
        </div>
        <div className="w-7 h-8">
          <a href="https://twitter.com/vinaysai545" target="_blank">
            <img src={twitterIcon} alt="Twitter" />
          </a>
        </div>
        <div className="w-8 h-8">
          <a href="https://github.com/vinaysaip" target="_blank">
            <img src={githubIcon} alt="Twitter" />
          </a>
        </div>
      </div>
    </div>
  );
};
export default ContactUs;
