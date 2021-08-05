import assert from 'node:assert/strict';
import { estimateTablesStreamedEligibility } from '../src/features/tables-estimate-streamed-eligibility.js';
export default async function () { assert.equal(await estimateTablesStreamedEligibility([2, 4, 6, 8]), 60); }
