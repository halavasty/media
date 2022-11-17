import "./Search.scss";
import React from "react";
import { ReactComponent as SearchLogo } from './search.svg';


export const Search = () => {

 function getSearch(e){
  console.log(e.target.value);
 }

  return (
      <div className="Search">
        <SearchLogo className="SearchLogo" />
        <input onChange={getSearch} type="text" className="Search_Box listText" placeholder="Search"/>
      </div>
  );
};
