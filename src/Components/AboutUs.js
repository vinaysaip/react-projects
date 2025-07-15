import User from "./User";
import UserClass from "./UserClass";

const AboutUs = () => {
  return (
    <div className="p-4 m-4 flex flex-col">
      <h1 className="text-3xl font-bold pb-2">About Me</h1>
      <p>
        We are a team of passionate developers dedicated to building amazing web
        applications.
      </p>
      <p>
        Our mission is to create user-friendly and efficient software solutions
        that meet the needs of our clients.
      </p>
      <p>
        We believe in continuous learning and improvement, and we strive to stay
        updated with the latest technologies.
      </p>
      <div className="team">
        <UserClass name={"Vinay"} location={"Hyderabad"} />
      </div>
    </div>
  );
};

export default AboutUs;
