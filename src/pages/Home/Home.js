import "./Home.scss";
import { Header } from "../../components/Header";
import { Menu } from "../../components/Menu";

export const Home = () => {
  return (
    <div className="Home">
      <Menu />
      <Header />
    </div>
  );
};
