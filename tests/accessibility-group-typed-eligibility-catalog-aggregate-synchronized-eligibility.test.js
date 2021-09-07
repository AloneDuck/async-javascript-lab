import assert from 'node:assert/strict';
import { aggregateCatalogSynchronizedEligibility } from '../src/features/catalog-aggregate-synchronized-eligibility.js';
export default async function () { assert.equal(await aggregateCatalogSynchronizedEligibility([2, 4, 6, 8]), 20); }
