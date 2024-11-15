

import pool from "../../config/connectDB.js";
class sanphamModel {
  
  async getALLSanpham() {
    const [sanphams, fields] = await pool.execute("SELECT * FROM `sanpham`")
    
    return sanphams;
  };


  async getSanphamById(id) {
    const [sanpham] = await pool.execute("SELECT * FROM `sanpham` WHERE id = ?", [id]);
    
    return sanpham ? sanpham[0] : null;
  };


  async getSanphamByTen(ten) {
    const [sanpham] = await pool.execute("SELECT * FROM `sanpham` WHERE ten = ?", [ten]);
    
    return sanpham ? sanpham[0] : null;
  };



  async createNewSanpham(ten, gia, hinhanh, mota, idnhom) {
          const [result] = await pool.execute(
              "INSERT INTO `sanpham` (ten, gia, hinhanh, mota, idnhom) VALUES (?, ?, ?, ?, ?)",
              [ten, gia, hinhanh, mota, idnhom]
          );
          return result;
  };

  
  async updateSanpham(ten, gia, hinhanh, mota, idnhom) {
    const [result] = await pool.execute(
        'UPDATE sanpham SET ten = ?, gia = ?, hinhanh = ?, mota = ?, idnhom = ? WHERE id = ?',
        [ten, gia, hinhanh, mota, idnhom]
      )
    return result 
  }
  
  async deleteSanpham (id) {
    const [result] =
      await pool.execute(
        'DELETE FROM sanpham WHERE id = ?',
        [id]
      )
    return result
  }


}

export default new sanphamModel()