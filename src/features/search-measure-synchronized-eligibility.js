/** Resolve synchronized eligibility without mutating the input. */
export async function measureSearchSynchronizedEligibility(values) {
  await Promise.resolve();
  return values.filter((value) => value > 4).length;
}
