const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({
    service: 'gmail', // 사용하고자 하는 서비스
    host: 'smtp.gmail.com', // host를 gmail로 설정
    port: 587,
    secure: false,
    auth: {
        user: '97lyle@gmail.com ', // Gmail 주소 입력
        pass: 'uebxicdvvjapodab' // 앱 비밀번호 입력
    }
})


//이메일 폼 표시
const showEmailForm = (req, res) => {
    res.render('email');
}


// const mailOptions = {
//     to: '97lyle@gmail.com',
//     subject: userName,
//     text: userName + '노드 패키지 nodemailer를 이용해 보낸 이메일임'
// };

// transporter.sendMail(mailOptions, (error, info) => {
//     if (error) {
//         console.error(error);
//     } else {
//         console.log('Email Sent : ', info);
//     }
// })

const sendEmail = async (req, res) => {
    const { to, subject, message } = req.body;
  
    try {
      const mailOptions = {
        to,
        subject,
        text: message,
      };
  
      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: '이메일이 전송되었습니다.' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: '이메일 전송 중 오류가 발생했습니다.' });
    }
  };

module.exports = { showEmailForm, sendEmail };