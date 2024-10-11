import pool from "../config/connectDB.js";
class userModel {

  async getALLUser() {
    const [users, fields] = await pool.execute("SELECT * FROM `user`")
    
    return users;
  };
  async getUser(id) {
    const [user] = await pool.execute("SELECT * FROM `user` WHERE id = ?", [id]);
    
    return user.length > 0 ? user[0] : null;
  };
  async createNewUser(username, password, fullname, address, sex, email) {
          const [result] = await pool.execute(
              "INSERT INTO `user` (username, password, fullname, address, sex, email) VALUES (?, ?, ?, ?, ?, ?)",
              [username, password, fullname, address, sex, email]
          );
          return result;
  };
  async updateUser(password, fullname, address, sex, email, id) {
    const [result] = await pool.execute(
        'UPDATE user SET password = ?, fullname = ?, address = ?, sex = ?, email = ? WHERE id = ?',
        [password, fullname, address, sex, email, id]
      )
    return result 
  }
  
  async deleteUser (id) {
    const [result] =
      await pool.execute(
        'DELETE FROM user WHERE id = ?',
        [id]
      )
    return result
  }


}

export default new userModel()