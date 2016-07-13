import React, { PropTypes } from 'react';
import bgTexture            from '../assets/images/bg-texture.jpg';

function Button(props){
  return (
    <button type='button'
      className='btn btn-lg btn-border home-button margin-sm'
      onClick={props.onContinue}>
      {props.children}
    </button>
  );
}

export default function Home(props){
  return (
    <div style={{backgroundImage: `url(${bgTexture})`}} className='home-container full-size'>
      <h1 className='home-header'>My New App</h1>
      <Button onContinue={props.onContinue}>Continue to App</Button>
    </div>
  );
}

Home.propTypes = {
  onContinue: PropTypes.func.isRequired
}
