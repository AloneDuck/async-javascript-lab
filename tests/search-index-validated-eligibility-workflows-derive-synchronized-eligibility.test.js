import assert from 'node:assert/strict';
import { deriveWorkflowsSynchronizedEligibility } from '../src/features/workflows-derive-synchronized-eligibility.js';
export default async function () { assert.equal(await deriveWorkflowsSynchronizedEligibility([2, 4, 6, 8]), 2); }
