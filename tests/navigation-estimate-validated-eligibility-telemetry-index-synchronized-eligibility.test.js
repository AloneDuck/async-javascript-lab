import assert from 'node:assert/strict';
import { indexTelemetrySynchronizedEligibility } from '../src/features/telemetry-index-synchronized-eligibility.js';
export default async function () { assert.equal(await indexTelemetrySynchronizedEligibility([2, 4, 6, 8]), 5); }
