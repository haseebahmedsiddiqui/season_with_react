import React from 'react';

const Spinner = (props) => {
  return (
   
      <div class="ui active inverted dimmer">
        <div class="ui massive text loader">{props.message}</div>
        {/* if you want to add your loader */}
        {/* <img src="logo.gif" alt="Hello" /> */}
      </div>
     
  );
};

Spinner.defaultProps = {
    message : "Loading..."
}
export default Spinner;