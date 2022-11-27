import "./Home.scss";
import { Header } from "../../components/Header";
import { Menu } from "../../components/Menu";
import { Footer } from '../../components/Footer'

export const Home = () => {
  return (
    <div className="Home">
      <Menu />
      <Header />
      <Footer />
    </div>
  );
};
