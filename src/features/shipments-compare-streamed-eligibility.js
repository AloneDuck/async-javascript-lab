/** Resolve streamed eligibility without mutating the input. */
export async function compareShipmentsStreamedEligibility(values) {
  await Promise.resolve();
  return values.length ? Math.max(...values) : 0;
}
