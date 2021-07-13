export async function resolveInitialSnapshot(values) { await Promise.resolve(); return values.reduce((sum, value) => sum + value, 0); }
