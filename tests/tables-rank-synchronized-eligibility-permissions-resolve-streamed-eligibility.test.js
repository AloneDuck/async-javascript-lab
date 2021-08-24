import assert from 'node:assert/strict';
import { resolvePermissionsStreamedEligibility } from '../src/features/permissions-resolve-streamed-eligibility.js';
export default async function () { assert.equal(await resolvePermissionsStreamedEligibility([2, 4, 6, 8]), 8); }
