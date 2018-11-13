import React, { useState, useContext } from 'react';
import { ThemeContext, LocaleContext } from './context';
import Row from './Row';

// * class component
// class Greeting extends React.Component {
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
//       <ThemeContext.Consumer>
//         {theme => (
//           <section className={theme}>
//             <Row label="Name">
//               <input
//                 type="text"
//                 value={this.state.name}
//                 onChange={this.handleNameChange}
//               />
//             </Row>
//             <Row label="Surname">
//               <input
//                 type="text"
//                 value={this.state.surname}
//                 onChange={this.handleSurnameChange}
//               />
//             </Row>
//             <LocaleContext.Consumer>
//               {locale => <Row label="Locale">{locale}</Row>}
//             </LocaleContext.Consumer>
//           </section>
//         )}
//       </ThemeContext.Consumer>
//     );
//   }
// }

// * use hooks in function component
const Greeting = () => {
  const [name, setName] = useState('Mary');
  const [surname, setSurname] = useState('Poppins');
  const theme = useContext(ThemeContext);
  const locale = useContext(LocaleContext);

  const handleNameChange = e => {
    setName(e.target.value);
  };

  const handleSurnameChange = e => {
    setSurname(e.target.value);
  };

  return (
    <section className={theme}>
      <Row label="Name">
        <input type="text" value={name} onChange={handleNameChange} />
      </Row>
      <Row label="Surame">
        <input type="text" value={surname} onChange={handleSurnameChange} />
      </Row>
      <Row label="Language">{locale}</Row>
    </section>
  );
};

export default Greeting;
