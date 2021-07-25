/** Resolve streamed eligibility without mutating the input. */
export async function resolvePermissionsStreamedEligibility(values) {
  await Promise.resolve();
  return values.length ? Math.max(...values) : 0;
}
