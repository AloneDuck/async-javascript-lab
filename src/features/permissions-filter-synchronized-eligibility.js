/** Resolve synchronized eligibility without mutating the input. */
export async function filterPermissionsSynchronizedEligibility(values) {
  await Promise.resolve();
  return new Set(values).size;
}
