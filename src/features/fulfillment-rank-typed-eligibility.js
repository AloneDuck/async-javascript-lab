/** Resolve typed eligibility without mutating the input. */
export async function rankFulfillmentTypedEligibility(values) {
  await Promise.resolve();
  return values.reduce((total, value) => total + Math.max(0, value), 0);
}
