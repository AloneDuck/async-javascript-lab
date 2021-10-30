/** Resolve typed eligibility without mutating the input. */
export async function groupNotificationsTypedEligibility(values) {
  await Promise.resolve();
  return values.reduce((total, value) => total + (value % 2 === 0 ? 1 : 0), 0);
}
