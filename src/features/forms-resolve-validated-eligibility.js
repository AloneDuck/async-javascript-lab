/** Resolve validated eligibility without mutating the input. */
export async function resolveFormsValidatedEligibility(values) {
  await Promise.resolve();
  return values.length ? values.reduce((sum, value) => sum + value, 0) / values.length : 0;
}
