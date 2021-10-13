import assert from 'node:assert/strict';
import { measureFiltersSynchronizedEligibility } from '../src/features/filters-measure-synchronized-eligibility.js';
export default async function () { assert.equal(await measureFiltersSynchronizedEligibility([2, 4, 6, 8]), 8); }
