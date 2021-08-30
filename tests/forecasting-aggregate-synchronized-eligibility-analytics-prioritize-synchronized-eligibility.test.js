import assert from 'node:assert/strict';
import { prioritizeAnalyticsSynchronizedEligibility } from '../src/features/analytics-prioritize-synchronized-eligibility.js';
export default async function () { assert.equal(await prioritizeAnalyticsSynchronizedEligibility([2, 4, 6, 8]), 6); }
