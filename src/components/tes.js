import React, { Component } from "react";

// export default class Tes extends Component {
//   constructor() {
//     super();
//     this.state = {
//       title: "belajar react",
//       tahap: "pertama",
//     };
//   }

//   ubahJudul = () => {
//     this.setState({
//       title: "belajar javascript dasar",
//     });
//   };
//   render() {
//     return (
//       <div>
//         <h1>Materi : {this.state.title}</h1>
//         <h2>Tahap : {this.state.tahap}</h2>
//         <button onClick={this.ubahJudul}>ubah Materi</button>
//       </div>
//     );
//   }
// }

// contoh pengguna propss
// beda props dengan state
// state menampung nilai dalam componen sedangkan props menampung nilai dari luar componen

// function Tes({ judul, tahap, kelas }) {
//   return (
//     <div>
//       <h1>Judul : {judul}</h1>
//       <h1>Tahap : {tahap}</h1>
//       <h1> Kelas : {kelas}</h1>
//     </div>
//   );
// }

function Tes() {
  return (
    <div>
      <h1>Judul:</h1>
      {/* <h1>Tahap : {tahap}</h1>
      <h1> Kelas : {kelas}</h1> */}
    </div>
  );
}

export default Tes;
