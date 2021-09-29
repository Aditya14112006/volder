import { inputValidator } from './inputValidator';

export const validator = (
  volderMap: Map<string, object>,
  input: object | any
) => {
  const errors = {};
  let validInput:boolean = true;

  volderMap.forEach((value: object, key: string, _map) => {

    if (typeof input[key] !== 'undefined') {
      const is_valid_input = inputValidator(input,key , value, errors);
      if(is_valid_input === false && validInput === true) validInput = false;
    }
    // there are code for validate the input prop are required
  });

  return [validInput, errors];
};
