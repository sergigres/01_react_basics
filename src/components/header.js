import React, { Component } from 'react';
// import '../css/styles.css'; // it renders the style thing in DOM for every component

const user = {
  name: 'Francis',
  lastName: 'Jones',
  age: 16
}

const getYear = () => {
  const newDate = new Date();
  return newDate.getFullYear();
}

// This is a functional component
const HeaderFunctionalComponent = () => {
  return (
    <div>
      <h3>This is the shit of a Header</h3>
      <p>{user.name} {user.lastName}</p>
      <p>Age {user.age}</p>
      <p>The year is {getYear()}</p>
    </div>
  );
}

// This is a class based functional component
class Header extends Component {

  state = {
    active: 'active',
    keywords: ''
  }

  inputChangeHandler = (event) => {
    const value = event.target.value === '' ? 'active' : 'non-active';
    this.setState({
      active: value,
      keywords: event.target.value
    })
  }


  render() {
    const style = {
      background: 'red'
    }

    if (this.state.keywords != '') {
      style.background = 'blue';
    } else {
      style.background = 'red';
    }

//    const styles = {
//      header: {
//        background: '#03a9f4'
//      },
//      logo: {
//        color: '#fff',
//        fontFamily: 'anton', // js, NOT css names
//        textAlign: 'center'
//      }
//    }
//
//    return (
//      <header style = { styles.header }>
//        <div style= { styles.logo }>Logo</div>
//        <input type="text" />
//      </header>


    return (
      <header className={ this.state.active }>
        <div className='logo' onClick= { () => { console.log('the click')} }>
          Logo
        </div>
        <input type="text" onChange={ this.inputChangeHandler } />
      </header>
        /*<input type="text" onChange={ this.inputChangeHandler } />*/
        /*<input type="text" onChange={ this.inputChangeHandler.bind(this) } />*/ // old school
        /*<input type="text" onChange={ (e) => this.inputChangeHandler(e) } />*/ // fat arrow here
    );
  }
}

export default Header;
