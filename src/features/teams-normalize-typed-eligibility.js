/** Resolve typed eligibility without mutating the input. */
export async function normalizeTeamsTypedEligibility(values) {
  await Promise.resolve();
  return values.length ? Math.max(...values) - Math.min(...values) : 0;
}
