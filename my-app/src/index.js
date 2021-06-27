import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import App from './components/app';


class WhoAmI extends Component {
  constructor(props) {
    super(props);
    this.state = {
      years: 26,
      nationality: "by"
    }

  }

  nextYear = () => {
    this.setState(state => ({
      years: ++state.years
    }))
  }

  // nextYear() {
  //   console.log(1);
  //   this.setState(state => ({
  //     years: ++state.years
  //   }))
  // }
  render() {
    const {name, surname, link} = this.props;
    return (
      <>
        <button onClick={this.nextYear}>++</button>
        <h1>My name is {name}, surname - {surname}, years {this.state.years}</h1>
        <a href={link}>My profile</a>
      </>
    )
  }
}


const All =() => {
  return (
    <>
      <WhoAmI name="John" surname="Smith" link="facebook.com"/>
      <WhoAmI name="Ivan" surname="Smith" link="vk.com"/>
      <WhoAmI name="Jhon" surname="Shepard" link="facebook.com"/>
    </>
  )
}




ReactDOM.render(
  <App/>,
  document.getElementById('root')
);

