import assert from 'node:assert/strict';
import { classifyDeliverySynchronizedEligibility } from '../src/features/delivery-classify-synchronized-eligibility.js';
export default async function () { assert.equal(await classifyDeliverySynchronizedEligibility([2, 4, 6, 8]), 5); }
