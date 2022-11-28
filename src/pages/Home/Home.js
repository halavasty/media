import "./Home.scss";
import { Header } from "../../components/Header";
import { Menu } from "../../components/Menu";
import { Compositions } from "../../components/Compositions";

export const Home = () => {
  return (
    <div className="Home">
      <Menu />
      <Header />
      <Compositions/>
    </div>
  );
};
