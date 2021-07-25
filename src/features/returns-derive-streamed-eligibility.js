/** Resolve streamed eligibility without mutating the input. */
export async function deriveReturnsStreamedEligibility(values) {
  await Promise.resolve();
  return values.filter((value) => value > 4).length;
}
