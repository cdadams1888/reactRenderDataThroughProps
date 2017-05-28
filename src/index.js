// The index component has one responsibility... it renders a top level component to the DOM.
import React from 'react';
import ReactDOM from 'react-dom';

import data from './testData';
import App from './components/App';

ReactDOM.render(
    <App contests={data.Contests} />,
    document.getElementById('root')
);









// const Header = ({ message }) => {
//     return (
//         <h2 className="text-center">
//             {message}
//         </h2>
//     );
// };
//
// const App = (props) => {
//     return (
//         <div>
//             <Header message="Naming Contests"/>
//             <div>
//                 ...
//             </div>
//         </div>
//     )
// };
//
// // Prop Validation.
// App.propTypes = {
//     headerMessage: React.PropTypes.string.isRequired
// };
//
//
//
// ReactDOM.render(
//     <App headerMessage="Hello props!" />,
//     document.getElementById('root')
// );

// If validation does not pass, this will be thrown as  default.
// App.defaultProps = {
//     headerMessage: 'Hello!!'
// };

// ReactDOM.render(
//     <h2 className="text-center">
//         Hello React with JSX!!
//     </h2>,
//     document.getElementById('root')
// );

// const color = Math.random() > 0.5 ? 'green' : 'red';
//
// ReactDOM.render(
//     <h2 style={{color: color}}>Hello React with JSX!! -- {Math.random()}</h2>,
//   document.getElementById('root')
// );


