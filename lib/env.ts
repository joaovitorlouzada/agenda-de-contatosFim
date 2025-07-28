export function requireEnv(name: string): string {
  const v = process.env[name];
  if (!v) {
    throw new Error(`Env var ${name} is missing`);
  }
  return v;
}
