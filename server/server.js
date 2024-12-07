import express from "express";
import nodemailer from "nodemailer";
import cors from "cors";

const app = express();
// const port = process.env.PORT || 5173;
const port = process.env.PORT || 443;
// const port = process.env.PORT || 3000;

app.use(
  cors({
    origin: ["*"], // السماح بدومين الموقع
    methods: ["POST"],
    allowedHeaders: ["Content-Type"],
  })
);

app.use(express.json());

const transporter = nodemailer.createTransport({
  host: "smtp.hostinger.com",
  port: 465,
  secure: true,
  auth: {
    user: "contact@shehtatrading.com",
    pass: "@Shehta60607", // تأكد من استخدام كلمة المرور الصحيحة لحساب البريد  بك
  },
});

app.post("/send", async (req, res) => {
  const { name, phone, carModel, carBrand, description } = req.body;

  const whatsappMessage = `السلام عليكم ورحمة الله 🌹\nأهلاً بحضرتك ${name} فى شحتة للتجارة ✨\nتم استقبال طلبك بنجاح بخصوص :\n\nاسم السيارة : ${carBrand}\nموديل السيارة : ${carModel}\nوصف السيارة : ${description}\n\nوجارى المتابعة و ارسال التفاصيل.\n\nشكراً لاهتمامك و نسعى للرد عليك فى اسرع وقت \n\nلتواصل أسرع برجاء الاتصال على :\n01003060607\n\nشحتة للتجارة ✨\nسيارة أحلامك لحد باب البيت ✨\nwww.shehtatrading.com`;

  const whatsappLink = `https://wa.me/2${phone}?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  const mailOptions = {
    from: "contact@shehtatrading.com",
    to: "shamsahmed100@gmail.com",
    subject: "طلب جديد لسيارة",
    html: `
      <p>السلام عليكم <br />
يوجد طلب سيارة جديد من الموقع<br />  www.shehtatrading.com <br /> يحتاج للمراجعة والمتابعة:</p>
      <ul>
        <li><strong>الاسم:</strong> ${name}</li>
        <li><strong>رقم الهاتف:</strong> <a href="${whatsappLink}" target="_blank">${phone}</a></li>
        <li><strong>موديل السيارة:</strong> ${carModel}</li>
        <li><strong>ماركة السيارة:</strong> ${carBrand}</li>
        <li><strong>الوصف:</strong> ${description}</li>
      </ul>
      <p><strong>للتواصل مع العميل عبر WhatsApp:</strong> <a href="${whatsappLink}" target="_blank">اضغط هنا</a></p>
      <hr />
    
      <p>تحياتنا،</p>
      <p>شحتة للتجارة ✨</p>
    `,
  };

  try {
    // إرسال البريد الإلكتروني
    const info = await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "تم إرسال البريد الإلكتروني بنجاح", info });
  } catch (error) {
    res
      .status(500)
      .json({ message: "حدث خطأ في إرسال البريد الإلكتروني", error });
  }
});

// بدء السيرفر
app.listen(port, "0.0.0.0", () => {
  console.log(`الخادم يعمل على http://147.79.118.150:${port}`);
});
