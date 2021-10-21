/** Resolve typed eligibility without mutating the input. */
export async function partitionRoutingTypedEligibility(values) {
  await Promise.resolve();
  return new Set(values).size;
}
