import Image from "mui-image";
import logo from "../../static/imgs/pokeball.png";

const Logo = () => {
  return (
    <Image
      src={logo}
      width="auto"
      height="auto"
      fit="fill"
      duration={0}
      style={{ paddingTop: 35 }}
    ></Image>
  );
};

export default Logo;
