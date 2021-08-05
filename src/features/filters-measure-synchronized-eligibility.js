/** Resolve synchronized eligibility without mutating the input. */
export async function measureFiltersSynchronizedEligibility(values) {
  await Promise.resolve();
  return values.length ? Math.max(...values) : 0;
}
