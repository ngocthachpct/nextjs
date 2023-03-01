
import React from "react";

function Searchbar (){
  
      return (
<div className="top-nav-search">
            <form>
              <input type="text" className="form-control" placeholder />
              <button className="btn" type="submit"><i className="fas fa-search" /></button>
            </form>
          </div>

      );
}

export default Searchbar;