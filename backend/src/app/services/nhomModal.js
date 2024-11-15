

import pool from "../../config/connectDB.js";
class nhomModel {

  async getALLNhom() {
    const [nhoms, fields] = await pool.execute("SELECT * FROM `nhom`")
    
    return nhoms;
  };


  async getNhomById(id) {
    const [nhom] = await pool.execute("SELECT * FROM `nhom` WHERE id = ?", [id]);
    
    return nhom ? nhom[0] : null;
  };

  async createNewNhom(ten) {
          const [result] = await pool.execute(
              "INSERT INTO `nhom` ten) VALUES (?)",
              [ten]
          );
          return result;
  };

  
  async updateNhom(ten,idnhom) {
    const [result] = await pool.execute(
        'UPDATE nhom SET ten = ? WHERE idnhom = ?',
        [ten,idnhom]
      )
    return result 
  }
  
  async deleteNhom (id) {
    const [result] =
      await pool.execute(
        'DELETE FROM nhom WHERE id = ?',
        [id]
      )
    return result
  }


}

export default new nhomModel()