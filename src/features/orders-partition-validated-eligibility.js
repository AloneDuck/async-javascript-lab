/** Resolve validated eligibility without mutating the input. */
export async function partitionOrdersValidatedEligibility(values) {
  await Promise.resolve();
  return new Set(values).size;
}
