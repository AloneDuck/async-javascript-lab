/** Resolve typed eligibility without mutating the input. */
export async function reduceAccountsTypedEligibility(values) {
  await Promise.resolve();
  return values.reduce((sum, value) => sum + value, 0);
}
