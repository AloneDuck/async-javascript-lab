/** Resolve streamed eligibility without mutating the input. */
export async function partitionTeamsStreamedEligibility(values) {
  await Promise.resolve();
  return new Set(values).size;
}
