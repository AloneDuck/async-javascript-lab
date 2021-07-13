import assert from 'node:assert/strict';
import { resolveInitialSnapshot } from '../src/features/initial-snapshot.js';
export default async function () { assert.equal(await resolveInitialSnapshot([2, 4, 6, 8]), 20); }
