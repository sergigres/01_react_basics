import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import JSON from './db.json';

// Components
import Header from './components/header';
import NewsList from './components/news_list';

// This is a component
//const App = () => {
class App extends Component {
    state = {
      news: JSON
    }

  render() {
    console.log(this.state.news);
    //return React.createElement('h1', { className: 'title' }, 'Hello world!!'); // className not class!!
    //return React.createElement('div', {  }, React.createElement('h1', { className: 'title' }, 'Hello world!!'));
    //return <h1>Hello world !!!</h1>
    //return <h1>Hello world !!!</h1><div>hola</div> // Fail!!!
    //return (<div className="theClash"><h1>Hello world !!!</h1><div>hola</div></div>); /*you need to enclosure everything in a tag*/
    return (<div>
              <Header/>
              <NewsList news={this.state.news}/>
            </div>);
  }
}

// We render the component (App) in a DOM selector
ReactDOM.render(<App />, document.querySelector('#root'));
