import img from "../../../assets/react-core-concepts.png";
import "./Header.css";

const descContent = [
  "Full Stack Developer",
  "MERN Stack Developer",
  "Web Application Developer",
];
const generateDeveloper = (max) => {
  return Math.floor(Math.random() * (max + 1));
};
const Header = () => {
  const description = descContent[generateDeveloper(2)];
  return (
    <header>
      <img src={img} alt="logo" />
      <h1>Husain Basic React App</h1>
      <p>{description}</p>
    </header>
  );
};
export default Header;
