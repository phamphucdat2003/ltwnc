import { exec } from 'child_process';

const xamppPath = 'D:\\Xampp\\';

// Hàm khởi động Apache
async function startApache() {
    const command = `"${xamppPath}apache_start.bat"`;
    await exec(command);
}

// Hàm khởi động MySQL
async function startMySQL() {
    const command = `"${xamppPath}mysql_start.bat"`;
    await exec(command);
}

// Hàm khởi động cả Apache và MySQL
async function startXampp() {
  try {
    await startApache();
    await startMySQL();
    console.log("Apache và MySQL SUCCESS");
  } catch (error) {
    console.error("Lỗi khi khởi động XAMPP:", error.message);
  }
}

export default startXampp;