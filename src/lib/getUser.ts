export async function getUser(name: string) {
  const res = await fetch(`http://localhost:3000/api/user/get?name=${name}`, {
    method: "POST",
    body: JSON.stringify(name),
    cache: "no-cache",
  });
  if (!res.ok) throw new Error("Failed to fetch data");
  return res.json();
}
