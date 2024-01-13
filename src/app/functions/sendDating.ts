const obj = {
  userId: 110,
  name: "catarina",
};

export const sendDating = async () => {
  await fetch(`${process.env.NEXT_PUBLIC_API_URL}/post`, {
    method: "POST",
    cache: "no-store",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(obj),
  });
};
