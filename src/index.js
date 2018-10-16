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
      news: JSON,
      filtered: []
    }

    getKeyword = (event) => {
      //console.log(event.target.value);
      let filtered = this.state.news.filter( (item) => {
        return item.title.indexOf(event.target.value) > -1;
      });
      this.setState({ filtered });
    }

  render() {
    //console.log(this.state.news);
    //return React.createElement('h1', { className: 'title' }, 'Hello world!!'); // className not class!!
    //return React.createElement('div', {  }, React.createElement('h1', { className: 'title' }, 'Hello world!!'));
    //return <h1>Hello world !!!</h1>
    //return <h1>Hello world !!!</h1><div>hola</div> // Fail!!!
    //return (<div className="theClash"><h1>Hello world !!!</h1><div>hola</div></div>); /*you need to enclosure everything in a tag*/
    return (<div>
              <Header keywords={this.getKeyword}/>
              <NewsList news={this.state.filtered.length === 0 ? this.state.news : this.state.filtered }/>
            </div>);
  }
}

// We render the component (App) in a DOM selector
ReactDOM.render(<App />, document.querySelector('#root'));
