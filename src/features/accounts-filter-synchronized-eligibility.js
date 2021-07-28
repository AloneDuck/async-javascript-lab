/** Resolve synchronized eligibility without mutating the input. */
export async function filterAccountsSynchronizedEligibility(values) {
  await Promise.resolve();
  return new Set(values).size;
}
