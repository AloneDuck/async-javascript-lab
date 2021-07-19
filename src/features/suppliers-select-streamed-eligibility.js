/** Resolve streamed eligibility without mutating the input. */
export async function selectSuppliersStreamedEligibility(values) {
  await Promise.resolve();
  return values.length ? Math.max(...values) - Math.min(...values) : 0;
}
