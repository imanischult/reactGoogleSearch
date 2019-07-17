import React from "react";
import "./Searchbar.css";

function Searchbar() {
  return (
    <div className="container">
      <div className="row">
        <div className="col s12">
          <div className="card blue-grey darken-1">
            <div class="row">
              <form class="col s12">
                <div class="row">
                  <div class="input-field col s12">
                    <textarea id="textarea1" class="materialize-textarea" />
                    <a class="search waves-effect waves-light btn">Search</a>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Searchbar;
