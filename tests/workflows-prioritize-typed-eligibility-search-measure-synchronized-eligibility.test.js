import assert from 'node:assert/strict';
import { measureSearchSynchronizedEligibility } from '../src/features/search-measure-synchronized-eligibility.js';
export default async function () { assert.equal(await measureSearchSynchronizedEligibility([2, 4, 6, 8]), 2); }
