import assert from 'node:assert/strict';
import { compareShipmentsStreamedEligibility } from '../src/features/shipments-compare-streamed-eligibility.js';
export default async function () { assert.equal(await compareShipmentsStreamedEligibility([2, 4, 6, 8]), 8); }
