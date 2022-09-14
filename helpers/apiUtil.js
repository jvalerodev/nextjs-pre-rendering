export const getFeaturedEvents = async () => {
  const res = await fetch(`${process.env.FIREBASE_URL}/events.json?orderBy="isFeatured"&equalTo=true`);
  const data = await res.json();

  const events = Object.keys(data).map(key => ({
    id: key,
    ...data[key]
  }));

  return events;
};