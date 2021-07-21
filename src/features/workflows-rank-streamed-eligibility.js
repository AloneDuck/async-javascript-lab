/** Resolve streamed eligibility without mutating the input. */
export async function rankWorkflowsStreamedEligibility(values) {
  await Promise.resolve();
  return values.reduce((total, value) => total + (value % 2 === 0 ? 1 : 0), 0);
}
