import Logo from '../assets/images/foodVilla.png'

const Title = () => {
  return (
    <a href="/">
      <img
        className="logo"
        alt="logo"
        src={Logo}
      />
    </a>
  );
};
export default Title;