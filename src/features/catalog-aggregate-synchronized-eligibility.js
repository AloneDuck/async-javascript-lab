/** Resolve synchronized eligibility without mutating the input. */
export async function aggregateCatalogSynchronizedEligibility(values) {
  await Promise.resolve();
  return values.reduce((total, value) => total + Math.max(0, value), 0);
}
