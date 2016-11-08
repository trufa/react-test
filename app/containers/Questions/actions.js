/*
 *
 * Questions actions
 *
 */

import {
  DEFAULT_ACTION,
} from './constants';

export function defaultAction() {
  console.log("def actions");
  return {
    type: DEFAULT_ACTION,
  };
}
