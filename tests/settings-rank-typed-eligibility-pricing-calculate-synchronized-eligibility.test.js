import assert from 'node:assert/strict';
import { calculatePricingSynchronizedEligibility } from '../src/features/pricing-calculate-synchronized-eligibility.js';
export default async function () { assert.equal(await calculatePricingSynchronizedEligibility([2, 4, 6, 8]), 4); }
