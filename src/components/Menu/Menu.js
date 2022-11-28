import "./Menu.scss";
import { Logo } from "../Menu/Logo";
import { ItemList } from "../Menu/ItemList";

export const Menu = () => {
  return (
    <div className="Menu">

      <Logo />

      <ItemList />

      <p className="Menu-WelcomeText listText"> Welcome To Medea! </p>
      
    </div>
  );
};
