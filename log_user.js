// ฟังก์ชันส่ง log การอ่านหนังสือไปยัง server
function sendReadLog(userId, bookId, timestamp) {
  const logData = {
    user: userId,
    book: bookId,
    time: timestamp
  };

  fetch('http://localhost:3000/log', {  // เปลี่ยน URL เป็น server จริงของคุณ
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(logData)
  })
  .then(response => {
    if (response.ok) {
      console.log('Log saved successfully');
    } else {
      console.error('Failed to save log');
    }
  })
  .catch(err => {
    console.error('Error sending log:', err);
  });
}

// ตัวอย่างเรียกใช้งาน
// สมมติ userId และ bookId ได้มาจากระบบ login และหน้าหนังสือ
const userId = 'user123';
const bookId = 'book456';
const timestamp = new Date().toISOString();

sendReadLog(userId, bookId, timestamp);
