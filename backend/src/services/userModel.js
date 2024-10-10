import pool from "../config/connectDB.js";

const getALLUser = async () => {
    const [row, fields] = await pool.execute("SELECT * FROM `user`");
    console.log("aaaaaaaaaaaaaaa");
    
    return row;
};
const createNewUser = async () => {
        const [result] = await pool.execute(
            "INSERT INTO `user` (username, email, password) VALUES (?, ?, ?)",
            [username, email, password]
        );
        return result;
  
};
export default getALLUser 