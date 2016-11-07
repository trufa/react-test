/**
*
* Question
*
*/

import React from 'react';

import { FormattedMessage } from 'react-intl';
import messages from './messages';


function Question(props) {
  return (
    <div>
      {props.text}
    </div>
  );
}

export default Question;
