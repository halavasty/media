import "./Menu.scss";
import { Logo } from "../Menu/Logo";
import { ItemList } from "../Menu/ItemList";

export const Menu = () => {
  return (
      <div className="Menu">
          <div className="Menu-wrapper">
          <Logo />
          <nav className="Menu-List">
            <ItemList />
          </nav>
        </div>
      <p className="Menu-WelcomeText listText"> Welcome To Medea! </p>
      
    </div>
  );
};
