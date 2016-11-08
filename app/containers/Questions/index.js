/*
 *
 * Questions
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import selectQuestions from './selectors';
import { FormattedMessage } from 'react-intl';
import Helmet from 'react-helmet';
import messages from './messages';
import { loadQuestions } from './actions';

export class Questions extends React.Component { // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
    console.log("comp did mount");
    this.props.loadQuestions();
  }
  render() {
    return (
      <article>
        <Helmet
          title="Home Page"
          meta={[
            { name: 'description', content: 'A React.js Boilerplate application homepage' },
          ]}
        />
        {this.props.questionList}
      </article>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  questionList: selectQuestions()
});

function mapDispatchToProps(dispatch) {
  return {
    loadQuestions: (evt) => {
      dispatch(loadQuestions());
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Questions);
