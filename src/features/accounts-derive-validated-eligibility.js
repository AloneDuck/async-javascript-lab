/** Resolve validated eligibility without mutating the input. */
export async function deriveAccountsValidatedEligibility(values) {
  await Promise.resolve();
  return values.length ? Math.max(...values) - Math.min(...values) : 0;
}
