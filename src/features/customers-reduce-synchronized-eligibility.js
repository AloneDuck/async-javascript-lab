/** Resolve synchronized eligibility without mutating the input. */
export async function reduceCustomersSynchronizedEligibility(values) {
  await Promise.resolve();
  return values.reduce((sum, value) => sum + value, 0);
}
