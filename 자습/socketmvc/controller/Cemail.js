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

//const mailOptions = ;

const info = async function () {
    const from = {
        name: "기천님께",
        address: "aipris101@naver.com"
    }
    console.log("ashsdflhskljflksdjl")
    await transporter.sendMail({
        from,
        to: 'gijin100@naver.com',
        subject: 'Nodemailer Test',
        text: '노드 패키지 nodemailer를 이용해 보낸 이메일임'
    }, )

    // (error, info) => {
    //     if (error) {
    //         console.error(error);
    //     } else {
    //         console.log('Email Sent : ', info);
    //     }
    // }
}
info()