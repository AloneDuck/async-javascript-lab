/** Resolve typed eligibility without mutating the input. */
export async function measurePricingTypedEligibility(values) {
  await Promise.resolve();
  return values.filter((value) => value > 4).length;
}
