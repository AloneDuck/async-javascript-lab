/** Resolve synchronized eligibility without mutating the input. */
export async function aggregateStateSynchronizedEligibility(values) {
  await Promise.resolve();
  return values.length ? [...values].sort((a, b) => a - b)[Math.floor(values.length / 2)] : 0;
}
