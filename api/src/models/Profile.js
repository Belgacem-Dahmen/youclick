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

  // Update an existing profile
  async update(user_id, updateData) {
    const allowedFields = [
      "username",
      "about",
      "coverphoto",
      "firstname",
      "lastname",
      "country",
      "address",
      "city",
      "state",
      "zipcode",
    ];
    const fields = Object.keys(updateData).filter((field) =>
      allowedFields.includes(field)
    );

    if (fields.length === 0) {
      throw new Error("No valid fields to update");
    }

    const setClause = fields.map((field) => `${field} = ?`).join(", ");
    const values = fields.map((field) => updateData[field]);
    values.push(user_id);

    const query = `UPDATE profiles SET ${setClause} WHERE user_id = ?`;

    try {
      const [result] = await database.execute(query, values);
      return result.affectedRows; // Number of rows updated
    } catch (error) {
      throw new Error("Error updating profile: " + error.message);
    }
  },
};

module.exports = Profile;
