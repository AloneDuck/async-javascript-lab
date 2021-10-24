/** Resolve typed eligibility without mutating the input. */
export async function classifyShipmentsTypedEligibility(values) {
  await Promise.resolve();
  return values.reduce((sum, value) => sum + value, 0);
}
