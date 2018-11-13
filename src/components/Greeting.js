// import React, { Component } from 'react';
import React, { useState } from 'react';
import Row from './Row';

// * class component
// class Greeting extends Component {
//   state = {
//     name: 'Mary',
//     surname: 'Poppins',
//   };

//   handleNameChange = e => {
//     this.setState({
//       name: e.target.value,
//     });
//   };

//   handleSurnameChange = e => {
//     this.setState({
//       surname: e.target.value,
//     });
//   };

//   render() {
//     return (
//       <section>
//         <Row label="Name">
//           <input
//             type="text"
//             value={this.state.name}
//             onChange={this.handleNameChange}
//           />
//         </Row>
//         <Row label="Surname">
//           <input
//             type="text"
//             value={this.state.surname}
//             onChange={this.handleSurnameChange}
//           />
//         </Row>
//       </section>
//     );
//   }
// }

// * use hooks in function component
const Greeting = () => {
  const [name, setName] = useState('Mary');
  const [surname, setSurname] = useState('Poppins');

  const handleNameChange = e => {
    setName(e.target.value);
  };

  const handleSurnameChange = e => {
    setSurname(e.target.value);
  };

  return (
    <section>
      <Row label="Name">
        <input type="text" value={name} onChange={handleNameChange} />
      </Row>
      <Row label="Surame">
        <input type="text" value={surname} onChange={handleSurnameChange} />
      </Row>
    </section>
  );
};

export default Greeting;
