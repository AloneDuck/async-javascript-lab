import assert from 'node:assert/strict';
import { filterNavigationSynchronizedEligibility } from '../src/features/navigation-filter-synchronized-eligibility.js';
export default async function () { assert.equal(await filterNavigationSynchronizedEligibility([2, 4, 6, 8]), 6); }
