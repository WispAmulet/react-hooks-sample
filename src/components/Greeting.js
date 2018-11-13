import React, { useState, useContext, useEffect } from 'react';
import { ThemeContext, LocaleContext } from './context';
import Row from './Row';

// * class component
// class Greeting extends React.Component {
//   state = {
//     name: 'Mary',
//     surname: 'Poppins',
//     width: window.innerWidth,
//   };

//   componentDidMount() {
//     document.title = `${this.state.name} ${this.state.surname}`;
//     window.addEventListener('resize', this.handleResize);
//   }

//   componentDidUpdate() {
//     document.title = `${this.state.name} ${this.state.surname}`;
//   }

//   componentWillUnmount() {
//     window.removeEventListener('resize', this.handleResize);
//   }

//   handleResize = () => {
//     this.setState({
//       width: window.innerWidth,
//     });
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
//               {locale => <Row label="Language">{locale}</Row>}
//             </LocaleContext.Consumer>
//             <Row label="Width">{this.state.width}</Row>
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

  useEffect(() => {
    document.title = `${name} ${surname}`;
  });

  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    // setWidth(window.innerWidth); // ! Don't use this...
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  });

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
      <Row label="Width">{width}</Row>
    </section>
  );
};

export default Greeting;
