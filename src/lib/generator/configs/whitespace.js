import { configSpliter } from '../config-spliter';
import { assertType } from '../../utils/assert-type';

export const setupWhitespace = (optionConfigs) => {
  if (optionConfigs.hasOwnProperty('whitespace')) {
    if (Array.isArray(optionConfigs.whitespace)) {
      configSpliter('whitespace', 'boolean', optionConfigs);
    } else {
        assertType(optionConfigs.whitespace, 'boolean', 'whitespace property');
    }
  }
};