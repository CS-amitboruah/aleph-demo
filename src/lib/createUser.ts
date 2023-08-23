export async function createUser(values: any) {
  const res = await fetch('/api/user/create', {
    method: 'POST',
    body: JSON.stringify(values),
  });
  if (!res.ok) throw new Error('Failed to create user.');
  return await res.json();
}
