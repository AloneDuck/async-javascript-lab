/** Resolve typed eligibility without mutating the input. */
export async function measureCatalogTypedEligibility(values) {
  await Promise.resolve();
  return values.length ? Math.max(...values) : 0;
}
