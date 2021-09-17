import assert from 'node:assert/strict';
import { groupCheckoutSynchronizedEligibility } from '../src/features/checkout-group-synchronized-eligibility.js';
export default async function () { assert.equal(await groupCheckoutSynchronizedEligibility([2, 4, 6, 8]), 4); }
