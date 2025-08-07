type Speaker = {
  img: string;
  name: string;
  role: string;
};

type event = {
  slug: string,
  date: string,
  location: string,
  title: string,
  description: string,
  img: string,
  time: string,
  organizer: string,
  phone: string,
  address: string,
  speakers: Speaker[],
}

const events:event[] = [];

export default events;