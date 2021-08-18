import assert from 'node:assert/strict';
import { aggregateTelemetryStreamedEligibility } from '../src/features/telemetry-aggregate-streamed-eligibility.js';
export default async function () { assert.equal(await aggregateTelemetryStreamedEligibility([2, 4, 6, 8]), 6); }
