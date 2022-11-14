import "./Home.css";
import { Header } from "../../components/Header";
import { Menu } from "../../components/Menu";
import { Logo } from "../../components/Menu/Logo";

export const Home = () => {
  return (
    <div className="Home">
      <Header />
      <Logo />
      <Menu />
    </div>
  );
};
