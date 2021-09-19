/** Resolve typed eligibility without mutating the input. */
export async function scheduleCheckoutTypedEligibility(values) {
  await Promise.resolve();
  return values.filter((value) => value > 4).length;
}
