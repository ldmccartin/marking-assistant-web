import {
  atom,
} from 'recoil';

export default atom({
  key: 'maxPossibleGradeState', // unique ID (with respect to other atoms/selectors)
  default: 0, // default value (aka initial value)
});