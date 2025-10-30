/* eslint-disable no-console */
import { justFunction1, justFunction2 } from './utils';

export function main() {
    console.log(justFunction1() + ' | ' + justFunction2());

    import('./dynamicFunction').then((module) => {
        module.default();
    });
}
