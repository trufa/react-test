/**
*
* QuestionList
*
*/

import React from 'react';

import { FormattedMessage } from 'react-intl';
import Question from 'components/Question';
import messages from './messages';


function QuestionList(props) {

  let list = props.questionList.map((item, index) => (
    <Question text={item.text} key={index}/>
  ));
  return (
    <div>
      {list}
    </div>
  );
}

export default QuestionList;
