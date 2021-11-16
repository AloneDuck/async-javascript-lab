/** Resolve validated eligibility without mutating the input. */
export async function scheduleAccessibilityValidatedEligibility(values) {
  await Promise.resolve();
  return values.filter((value) => value > 4).length;
}
