import React, { useEffect } from "react";
import { connect } from 'react-redux';
import { FetchColors } from '../actions';

// import axios from "axios";

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";

const BubblePage = props => {
  const dispatch = props.dispatch;

  // const [colorList, setColorList] = useState([]);

  useEffect( () => {
    async function getColors() {
      await dispatch( FetchColors() );
    }
    getColors();
  }, [ dispatch ] );
  
  return (
    <>
      {/* <ColorList colors={ colorList } updateColors={ setColorList } />
      <Bubbles colors={ colorList } /> */}
      <ColorList />
      <Bubbles />
    </>
  );
};

export default connect( state => state )( BubblePage );
