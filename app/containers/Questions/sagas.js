import { simpleGet, questionsData } from 'utils/simpleRequest';
import { LOAD_QUESTIONS } from './constants';
import { questionsLoaded, questionsLoadingError } from './actions';

simpleGet(
  "http://localhost:3004/questions",
  LOAD_QUESTIONS,
  questionsLoaded,
  questionsLoadingError
);


// Bootstrap sagas
export default [
  questionsData,
];