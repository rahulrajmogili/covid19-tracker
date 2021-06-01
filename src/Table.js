import React from "react";
import "./Table.css";

function Table({ countries }) {
  return (
    <div className="table">
      {countries.map(
        (
          { country, cases } // --> always use () when using html dom inside a react funtion hook
        ) => (
          <tr>
            <td>{country}</td>
            <td>{cases}</td>
          </tr>
        )
      )}
    </div>
  );
}

export default Table;
