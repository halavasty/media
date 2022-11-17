import "./Logo.scss";
import { ReactComponent as MyLogo } from './logo.svg';
//src/components/Menu/Logo/logo.svg
export const Logo = () => {
  return (
    <div className="Logo">
      <MyLogo />
      <p className="LogoText"> Medea® </p>
    </div>
  );
};
