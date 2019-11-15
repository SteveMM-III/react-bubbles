import React, { useState, useEffect } from "react";
import { connect } from 'react-redux';
import { fetchColors } from '../actions';

// import axios from "axios";

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";

const BubblePage = props => {
  const dispatch = props.dispatch;

  const [colorList, setColorList] = useState([]);

  useEffect( () => {
    async function getColors() {
      await dispatch( fetchColors() );
    }
    getColors();
    setColorList( props.colors );
  }, [ dispatch ] );
  
  return (
    <>
      <ColorList colors={ colorList } updateColors={ setColorList } />
      <Bubbles colors={ colorList } />
    </>
  );
};

export default connect( state => state )( BubblePage );
