import assert from 'node:assert/strict';
import { rankWorkflowsStreamedEligibility } from '../src/features/workflows-rank-streamed-eligibility.js';
export default async function () { assert.equal(await rankWorkflowsStreamedEligibility([2, 4, 6, 8]), 4); }
