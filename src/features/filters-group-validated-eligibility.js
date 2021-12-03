/** Resolve validated eligibility without mutating the input. */
export async function groupFiltersValidatedEligibility(values) {
  await Promise.resolve();
  return values.reduce((sum, value) => sum + value, 0);
}
