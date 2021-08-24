import assert from 'node:assert/strict';
import { deriveReturnsStreamedEligibility } from '../src/features/returns-derive-streamed-eligibility.js';
export default async function () { assert.equal(await deriveReturnsStreamedEligibility([2, 4, 6, 8]), 2); }
