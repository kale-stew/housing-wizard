import { createStore } from 'redux';
import reducer  from './ducks/reducer';

export default createStore(reducer);
// this is what it's supposed to look like
// and that's it. idk 