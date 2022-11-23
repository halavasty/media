import "./Header.scss";
import { Arrows } from "./Arrows"
import { HeaderTitle } from "./HeaderTitle";
import { Dropdown } from "./Dropdown";

export const Header = () => {
  return (
    <div className="Header">
      <header className="Header__inner">
        <Dropdown />
        <Arrows />
        <HeaderTitle />
      </header>
    </div>
  );
};
