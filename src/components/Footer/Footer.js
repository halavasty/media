import "./Footer.css";

export const Footer = (props) => {
    
    return (
    <footer className="Footer">
      <div className="Footer__inner">
           <div ElementData={props} className="Element1">Element1</div>
           <div ElementData={props} className="Element2">Element2</div>
           <div ElementData={props} className="Element3">Element3</div>
      </div>
    </footer>
  );
};