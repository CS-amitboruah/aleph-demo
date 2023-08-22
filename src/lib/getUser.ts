export async function getUser(slug: string) {
  const res = await fetch("http://localhost:3000/api/user/get/");
  if (!res.ok) throw new Error("Failed to fetch data");
  return res.json();
}
