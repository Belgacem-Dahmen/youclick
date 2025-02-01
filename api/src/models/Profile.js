const database = require("../config/database"); // MySQL connection

const Profile = {
  // Get a profile by user ID
  async getProfileByUserId(user_id) {
    const query = "SELECT * FROM profiles WHERE user_id = ?";
    try {
      const [rows] = await database.execute(query, [user_id]);
      return rows[0]; // Return the profile if found, otherwise undefined
    } catch (error) {
      throw new Error("Error fetching profile by user ID: " + error.message);
    }
  },

  // Create a new profile
  async create(profileData) {
    console.log(profileData);
    const {
      user_id,
      email,
      username,
      about = null,
      coverphoto = null,
      firstname = null,
      lastname = null,
      country = null,
      address = null,
      city = null,
      state = null,
      zipcode = null,
    } = profileData;

    const query = `
      INSERT INTO profiles 
      (user_id, email, username, about, coverphoto, firstname, lastname, country, address, city, state, zipcode) 
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;

    try {
      const [result] = await database.execute(query, [
        user_id,
        email,
        username,
        about,
        coverphoto,
        firstname,
        lastname,
        country,
        address,
        city,
        state,
        zipcode,
      ]);

      return result.insertId; // Return the ID of the newly created profile
    } catch (error) {
      throw new Error("Error creating profile: " + error.message);
    }
  },
};

module.exports = Profile;
