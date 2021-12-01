/** Resolve validated eligibility without mutating the input. */
export async function summarizeCatalogValidatedEligibility(values) {
  await Promise.resolve();
  return new Set(values).size;
}
