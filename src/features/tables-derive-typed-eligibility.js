/** Resolve typed eligibility without mutating the input. */
export async function deriveTablesTypedEligibility(values) {
  await Promise.resolve();
  return values.filter((value) => value > 4).length;
}
