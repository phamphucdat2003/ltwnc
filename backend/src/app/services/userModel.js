

import {pool} from "../../config/connectDB.js";
class userModel {

  async getALLUser() {
    const [users, fields] = await pool.execute("SELECT * FROM `user`")
    
    return users;
  };


  async getUserById(id) {
    const [user] = await pool.execute("SELECT * FROM `user` WHERE id = ?", [id]);
    
    return user ? user[0] : null;
  };


  async getUserByUsername(username) {
    const [user] = await pool.execute("SELECT * FROM `user` WHERE username = ?", [username]);
    
    return user ? user[0] : null;
  };



  async createNewUser(username, password, fullname, address, sex, email, role) {
          const [result] = await pool.execute(
              "INSERT INTO `user` (username, password, fullname, address, sex, email, role) VALUES (?, ?, ?, ?, ?, ?, ?)",
              [username, password, fullname, address, sex, email, role]
          );
          return result;
  };

  
  async updateUser(fullname, address, sex, email, id) {
    const [result] = await pool.execute(
        'UPDATE user SET fullname = ?, address = ?, sex = ?, email = ? WHERE id = ?',
        [fullname, address, sex, email, id]
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