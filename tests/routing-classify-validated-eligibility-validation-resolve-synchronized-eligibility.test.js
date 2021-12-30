import assert from 'node:assert/strict';
import { resolveValidationSynchronizedEligibility } from '../src/features/validation-resolve-synchronized-eligibility.js';
export default async function () { assert.equal(await resolveValidationSynchronizedEligibility([2, 4, 6, 8]), 8); }
