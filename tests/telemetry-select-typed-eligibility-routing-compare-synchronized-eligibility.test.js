import assert from 'node:assert/strict';
import { compareRoutingSynchronizedEligibility } from '../src/features/routing-compare-synchronized-eligibility.js';
export default async function () { assert.equal(await compareRoutingSynchronizedEligibility([2, 4, 6, 8]), 8); }
