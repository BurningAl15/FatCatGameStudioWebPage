// EventService - Using local db.json instead of external API
const DB_PATH = process.env.NODE_ENV === 'production'
  ? '/FatCatGameStudioWebPage/db.json'
  : '/db.json';

let cachedData = null;

async function loadDatabase() {
  if (cachedData) {
    return cachedData;
  }

  try {
    const response = await fetch(DB_PATH);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    cachedData = data;
    return data;
  } catch (error) {
    console.error('Error loading database:', error);
    throw error;
  }
}

export default {
  async getEvents() {
    try {
      const db = await loadDatabase();
      // Return in axios-compatible format
      return { data: db.games || [] };
    } catch (error) {
      console.error('Error getting events:', error);
      return { data: [] };
    }
  },

  async getEvent(id) {
    try {
      const db = await loadDatabase();
      const game = (db.games || []).find(g => g.id === parseInt(id));
      if (!game) {
        throw new Error(`Game with id ${id} not found`);
      }
      // Return in axios-compatible format
      return { data: game };
    } catch (error) {
      console.error('Error getting event:', error);
      throw error;
    }
  }
};
