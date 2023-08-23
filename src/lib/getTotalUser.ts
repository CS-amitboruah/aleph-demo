export async function getTotalUser() {
  const res = await fetch('http://localhost:3000/api/user/getTotal');
  if (!res.ok) throw new Error('Failed to fetch data');
  return res.json();
}
