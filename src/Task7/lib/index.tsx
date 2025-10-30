import { now } from 'lodash';
import { mathFunction } from './math';
import { stringFunction } from './string';

export function someLib() {
    return <div>{stringFunction() + ' ' + mathFunction() + ' ' + now()}</div>;
}
