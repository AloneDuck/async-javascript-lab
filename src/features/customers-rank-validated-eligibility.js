/** Resolve validated eligibility without mutating the input. */
export async function rankCustomersValidatedEligibility(values) {
  await Promise.resolve();
  return values.reduce((total, value) => total + Math.max(0, value), 0);
}
