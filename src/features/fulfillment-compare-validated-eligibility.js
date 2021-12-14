/** Resolve validated eligibility without mutating the input. */
export async function compareFulfillmentValidatedEligibility(values) {
  await Promise.resolve();
  return values.length ? Math.max(...values) : 0;
}
