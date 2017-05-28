import React from 'react';
import Header from './Header';
import ContestPreview from './ContestPreview';


class App extends React.Component {
    state = {
        pageHeader: 'Naming Contests'
    };

    // Life Cycle Methods
    componentDidMount() {
        // DO AJAX FETCHING HERE
        // Timers, listeners, etc in here.
        console.log('did Mount');
        // this.setState({
        //     contests: data.contests
        // });
    }

    componentWillUnmount() {
        // Clean Timers, listeners, etc in here.
        console.log('will Unmount');
    }

    render() {
        return (
            <div className="App">
                <Header message={this.state.pageHeader} />
            <div>
                <ContestPreview {...this.props.contests[0]} />
            </div>
            </div>
        )
    }
};


export default App;













// Life Cycle Methods
// componentDidMount() {
        // DO AJAX FETCHING HERE
        // Timers, listeners, etc in here.
//     console.log('did Mount');
// }
//
// componentWillUnmount() {
        // Clean Timers, listeners, etc in here.
//     console.log('will Unmount');
// }

//
// class App extends React.Component {
//     state = { test: 37 };
//     render() {
//         return (
//             <div className="App">
//                 <Header message="Naming Contests" />
//                 <div>
//                     {this.state.test}
//                 </div>
//             </div>
//         )
//     }
// };

//
// class App extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = { test: 42 };
//     }
//
//     render() {
//         return (
//             <div className="App">
//                 <Header message="Naming Contests" />
//                 <div>
//                     {this.state.test}
//                 </div>
//             </div>
//         )
//     }
// };

// Use this Syntax if you need to introduce STATE, or if you need the life cycle methods of the component.
// class App extends React.Component {
//     render() {
//         return (
//             <div className="App">
//                 <Header message="Naming Contests" />
//                 <div>
//                     ----
//                 </div>
//             </div>
//         )
//     }
// };