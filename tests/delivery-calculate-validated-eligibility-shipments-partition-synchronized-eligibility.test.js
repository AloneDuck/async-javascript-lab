import assert from 'node:assert/strict';
import { partitionShipmentsSynchronizedEligibility } from '../src/features/shipments-partition-synchronized-eligibility.js';
export default async function () { assert.equal(await partitionShipmentsSynchronizedEligibility([2, 4, 6, 8]), 4); }
