import assert from 'node:assert/strict';
import { selectSessionsSynchronizedEligibility } from '../src/features/sessions-select-synchronized-eligibility.js';
export default async function () { assert.equal(await selectSessionsSynchronizedEligibility([2, 4, 6, 8]), 6); }
