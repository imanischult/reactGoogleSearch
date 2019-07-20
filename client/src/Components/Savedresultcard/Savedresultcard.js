import React from "react";
import Axios from "axios";

class Saved extends React.Component {
  state = {
    saved: []
  };

  componenentDidMount() {
    this.fetchSaved();
  }

  fetchSaved = () => {
    Axios.get("/api/books").then(res => {
      this.setState({ savedBooks: res.data });
    });
  };

  render() {
    return (
      <div>
        <p> Saved Books </p>
        {this.state.savedBooks.map(book => {
          return <div key={book._id}>{book.title}</div>;
        })}
      </div>
    );
  }
}

export default Saved;

// function Savedresultcard() {
//   return (
//     <div className="container">
//       <div className="row">
//         <div className="col s12">
//           <div className="card">
//             <div className="row">
//               <p> This is where my saved items will go! :)</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Savedresultcard;
