import "./Menu.scss";
import { Logo } from "../Menu/Logo";
import { ItemList } from "../Menu/ItemList";

export const Menu = () => {
  return (
    <div className="Menu">

      <Logo />

      <nav className="Menu-List">
        <ItemList />
      </nav>

      <p className="WelcomeText listText"> Welcome To Medea! </p>
      
    </div>
  );
};
