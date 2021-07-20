/** Resolve streamed eligibility without mutating the input. */
export async function estimateTablesStreamedEligibility(values) {
  await Promise.resolve();
  return values.reduce((sum, value, position) => sum + value * (position + 1), 0);
}
