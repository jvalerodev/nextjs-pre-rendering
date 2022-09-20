export const getAllEvents = async () => {
  const res = await fetch(`${process.env.FIREBASE_URL}/events.json`);
  const data = await res.json();
  const events = getEventArray(data);

  return events;
};

export const getFeaturedEvents = async () => {
  const res = await fetch(`${process.env.FIREBASE_URL}/events.json?orderBy="isFeatured"&equalTo=true`);
  const data = await res.json();
  const events = getEventArray(data);

  return events;
};

export const getEventById = async id => {
  const res = await fetch(`${process.env.FIREBASE_URL}/events.json?orderBy="$key"&equalTo="${id}"`);
  const data = await res.json();
  const event = { ...data[id] };

  return event;
};

export const getFilteredEvents = async (year, month) => {
  const days = getDaysInMonth(year, month);
  const start = `${year}-${month}-1`;
  const end = `${year}-${month}-${days}`;

  const res = await fetch(`${process.env.NEXT_PUBLIC_FIREBASE_URL}/events.json?orderBy="date"&startAt="${start}"&endAt="${end}"`);
  const data = await res.json();
  const events = getEventArray(data);

  return events;
};

export const getEventArray = eventObject => {
  return Object.keys(eventObject).map(key => ({
    id: key,
    ...eventObject[key]
  }));
};

export const getDaysInMonth = (year, month) => {
  return new Date(year, month, 0).getDate();
};