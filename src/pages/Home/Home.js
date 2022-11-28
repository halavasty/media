import "./Home.scss";
import { Header } from "../../components/Header";
import { Menu } from "../../components/Menu";
import { Footer } from '../../components/Footer'
import { Play } from "../../components/Play";

export const Home = () => {
  return (
    <div className="Home">
      <Menu />
      <Header />
      <Play />
      <Footer />
    </div>
  );
};
