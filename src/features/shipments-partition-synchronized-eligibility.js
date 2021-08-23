/** Resolve synchronized eligibility without mutating the input. */
export async function partitionShipmentsSynchronizedEligibility(values) {
  await Promise.resolve();
  return new Set(values).size;
}
