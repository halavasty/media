import "./Menu.css";
import { Logo } from "../Menu/Logo";
import { ItemList } from "../Menu/ItemList";

export const Menu = () => {
  return (
    <div className="Menu">

      <Logo />

      <nav className="Menu-List">
        <ItemList />
      </nav>

    </div>
  );
};
