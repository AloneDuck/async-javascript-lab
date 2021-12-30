/** Resolve validated eligibility without mutating the input. */
export async function rankReportsValidatedEligibility(values) {
  await Promise.resolve();
  return values.reduce((total, value) => total + (value % 2 === 0 ? 1 : 0), 0);
}
