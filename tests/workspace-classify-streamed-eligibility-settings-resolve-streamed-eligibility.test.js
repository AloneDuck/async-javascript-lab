import assert from 'node:assert/strict';
import { resolveSettingsStreamedEligibility } from '../src/features/settings-resolve-streamed-eligibility.js';
export default async function () { assert.equal(await resolveSettingsStreamedEligibility([2, 4, 6, 8]), 5); }
