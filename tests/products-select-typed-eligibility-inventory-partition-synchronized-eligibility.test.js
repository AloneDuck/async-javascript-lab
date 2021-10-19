import assert from 'node:assert/strict';
import { partitionInventorySynchronizedEligibility } from '../src/features/inventory-partition-synchronized-eligibility.js';
export default async function () { assert.equal(await partitionInventorySynchronizedEligibility([2, 4, 6, 8]), 60); }
