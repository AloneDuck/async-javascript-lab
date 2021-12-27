import assert from 'node:assert/strict';
import { formatSuppliersSynchronizedEligibility } from '../src/features/suppliers-format-synchronized-eligibility.js';
export default async function () { assert.equal(await formatSuppliersSynchronizedEligibility([2, 4, 6, 8]), 20); }
