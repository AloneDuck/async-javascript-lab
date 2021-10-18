import assert from 'node:assert/strict';
import { deriveFulfillmentSynchronizedEligibility } from '../src/features/fulfillment-derive-synchronized-eligibility.js';
export default async function () { assert.equal(await deriveFulfillmentSynchronizedEligibility([2, 4, 6, 8]), 6); }
