export const API_KEY = 'e0b1668e-83af-4783-955a-78ee5d6f1a6f';
export const typeMapping = {
     id: 'i',
     type: 'type',
     title: 't',
     search: 's'
};
export const getEventsUrl = (query, type) =>
     `https://rest.bandsintown.com/artists/${query}/events?app_id=1&date=upcoming`;

// `http://www.omdbapi.com/?${type}=${query}&apikey=${API_KEY}`;
