/** Resolve typed eligibility without mutating the input. */
export async function measureForecastingTypedEligibility(values) {
  await Promise.resolve();
  return values.length ? Math.max(...values) : 0;
}
