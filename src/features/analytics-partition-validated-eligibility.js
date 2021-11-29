/** Resolve validated eligibility without mutating the input. */
export async function partitionAnalyticsValidatedEligibility(values) {
  await Promise.resolve();
  return values.reduce((sum, value, position) => sum + value * (position + 1), 0);
}
