import {
  atom,
} from 'recoil';

export default atom({
  key: 'testActualGradeState', // unique ID (with respect to other atoms/selectors)
  default: 0, // default value (aka initial value)
});