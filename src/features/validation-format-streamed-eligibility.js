/** Resolve streamed eligibility without mutating the input. */
export async function formatValidationStreamedEligibility(values) {
  await Promise.resolve();
  return values.reduce((total, value) => total + Math.max(0, value), 0);
}
