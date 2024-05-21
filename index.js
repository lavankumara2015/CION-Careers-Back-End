
const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");
const app = express();
const jwt = require("jsonwebtoken");
const { hash, compare } = require("bcrypt");
const TokenKey = "xyzzyx12345";
const nodemailer = require("nodemailer");
require("dotenv").config();
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json());


//CORS Error (Access-Control-Allow-Origin)
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  next();
});

// port connection
app.listen(3004, () => {
  console.log("Server is running at loc");
});


const connection = mysql.createConnection({
  host: "bxwdallaour5ndfjyhra-mysql.services.clever-cloud.com",
  database: "bxwdallaour5ndfjyhra",
  user: "uykqbfs93zredemh",
  password: "NawmScGm3OBBPMRUCfVw",
  port: 3306,
});





// const createTablesQuery = `CREATE TABLE IF NOT EXISTS admin (
//   id INT AUTO_INCREMENT PRIMARY KEY,
//   hiring_manager_name VARCHAR(50),
//   hiring_manager_email VARCHAR(50),
//   department VARCHAR(50),
//   hiring_manager_password int
// )`;


// const createTablesQuery = `CREATE TABLE IF NOT EXISTS applicant_credentials (
//   applicant_id int auto_increment primary key,
//   applicant_name varchar(50),
//   applicant_email varchar(50),
//   applicant_password Text,
//   applicant_cv text
// )`;


// const createTablesQuery = `CREATE TABLE IF NOT EXISTS careers (
//   role_id INT AUTO_INCREMENT PRIMARY KEY,
//        department VARCHAR(255),
//        role VARCHAR(255),
//      location VARCHAR(255),
//      experience VARCHAR(255),
//        Eligibility VARCHAR(255),
//        skill_required TEXT,
//         job_description TEXT,
//         hiring_manager VARCHAR(255),
//         hiring_manager_email VARCHAR(255),
//         role_icon_url TEXT,
//        status VARCHAR(50) DEFAULT 'Open'
// )`;


// const createTablesQuery = `CREATE TABLE IF NOT EXISTS applicant_details (
//   role_id INT NOT NULL,
//      role VARCHAR(255) NOT NULL,
//     department VARCHAR(255) NOT NULL,
//      first_name VARCHAR(100) NOT NULL,
//      last_name VARCHAR(100) NOT NULL,
//      mobile_number VARCHAR(13) NOT NULL,
//      years_of_experience INT NOT NULL,
//      DOB TEXT,
//      highest_graduation VARCHAR(100) NOT NULL,
//      graduation_year YEAR NOT NULL,
//      CGPA DECIMAL(4,2),
//     current_address TEXT NOT NULL,
//     reason_for_applying TEXT NOT NULL,
//     applicant_email VARCHAR(255) NOT NULL,
//     status VARCHAR(50) DEFAULT 'Applied'
// )`;


// connection.query(createTablesQuery, (error, results, fields) => {
//   if (error) {
//     console.error("Error creating admin table: " + error.stack);
//     return;
//   }
//   console.log("Table admin created successfully");
//  });



  // const createTablesQuery = `
  //  SELECT * FROM users
  // `;
  // connection.query(createTablesQuery, (error, results, fields) => {
  //   if (error) {
  //     console.error("Error creating allleads table: " + error.stack);
  //     return;
  //   }
  //   console.log("Table users  created successfully");
  //   console.log(results);
  // });


  // const insertQuery = `INSERT INTO admin (id,hiring_manager_name,hiring_manager_email,department,hiring_manager_password) VALUES (1,'Veera Vardhan','veera123@gmail.com','Human Resources',12345),
  // (2,'Ruthwik','Ruthwik1234@gmail.com','Digital team',12345),
  // (3,'Nishant','Nishant1234@gmail.com','Human Resources',12345)`;


// const insertQuery = `INSERT INTO applicant_credentials (applicant_id,applicant_name,applicant_email,applicant_password,applicant_cv) VALUES (1,'Lavan kumar Adicherla','lavankumara2015@gmail.com','$2b$10$jHbHkRDGU/njrfcjJQS62ejaBvNPRQBVU3VS2baON8DdAYh.ZhV2S','C:\\fakepath\\1-MB (2).pdf')`;


// const insertQuery = `INSERT INTO careers (role_id,department,role,location,experience,Eligibility,skill_required,job_description,hiring_manager,hiring_manager_email,role_icon_url,status) 
// VALUES (1,'Accounts/Financial','Accounts Executive','Hyderabad','2-5 years ','B.com/Mcom/MBA','<ul><li>Proven working experience as Accounting Executive, Accounting Supervisor or Finance Manager.</li><li>Advanced computer skills on MS Office, accounting software like Tally and databases.</li><li>Proven knowledge of bookkeeping and accounting principles, practices, standards, laws and regulations.</li><li>Attention to detail and accuracy.</li><li>Ability to direct and supervise.</li><li>Ability travel across centers</li><li>Ability to prepare MIS reports</li></ul>','<ul><li>Manage and oversee the daily accounts operations.</li><li>Invoice preparation according to MOU with partner hospitals</li><li>Cash receipts, General ledger, Payroll and utilities, Treasury, budgeting</li><li>Vendor bills verification and process for payments</li><li>Daily collection follow-up with centers and reconciliation with books</li><li>Bank reconciliations and passing daily receipts and payment entries</li><li>Handling Accounts Receivables and Payables ; Preparation of aging statements</li><li>Monthly tax returns/filing.</li><li>Monitor and analyse accounting data and produce financial reports or statements</li><li>Coordinate and complete annual audits</li><li>Meet financial accounting objectives</li><li>Establish and maintain physical files and records to document transactions</li><li>Coordinate with partner hospitals and follow up regarding receivables.</li><li>Month and end-year process, Accounts payable/receivable</li><li>Coordination with internal departments for smooth flow of work</li></ul>','Veera Vardhan','veera123@gmail.com','sales-logo.webp','Open'),
//  (2,'Operations','Cancer Coach','Hyderabad','1-3 years','MBA – Hospital Management / Hospital Administration Bachelor of Dental Sciences ; Doctor of Pharmacy','<ul><li>Knowledge of medical terminologies, patient counselling and computer skills is desired.</li><li>Excellent communication skills, patience and energy along with ability to converse fluently in 2-3 languages is a must (Telugu,&nbsp;English, Hindi).</li><li>Persuasion, Verbal Communication, Health Promotion and Maintenance, Patient Services, Building Relationships, Resolving Conflict, Coordination, Listening, Scheduling, Teamwork.</li><li>Ability to learn quicklyand handle multiple tasks whenever required.</li></ul>','<ul><li>Promotes patient\'s independence by establishing patient care goals; teaching patients, and families to understand conditions, medications, and self-care skills and answering questions.</li><li>Maintain a cooperative relationship amongst health care team members by communicating information; responding to requests; building rapport; participating in team problem-solving methods.</li><li>Counsel clients and patients, individually and in group sessions, to assist in overcoming dependencies, adjusting to life, and making changes</li><li>Knowledge management and support to the care team.&nbsp;</li></ul>','Veera Vardhan','veera123@gmail.com','coach-logo.webp','Open'),
//  (3,'Digital team','Content Writing Intern','Hyderabad','0-1 years','B.Tech','<ul><li>Excellent English writing skills, with a strong command of grammar, spelling, and punctuation.</li><li>Ability to learn on the job and adapt quickly to new tasks and challenges.</li><li>Self-motivated and able to work independently, while also collaborating effectively with team members.</li><li>Proficiency in prompting and utilizing AI platforms, such as ChatGPT, to enhance content creation.</li><li>Strong research skills to validate data found on the internet and AI platforms.</li><li>Effective communication skills to interact with doctors, staff, and other stakeholders.</li><li>Detail-oriented with a focus on accuracy and delivering high-quality content.</li></ul>','<ul><li>Identify keywords: Conduct research to find underexplored keywords and incorporate them into valuable articles.</li><li>White paper writing: Collaborate with doctors and staff to create insightful white papers on our cutting-edge procedures.</li><li>Communication template creation: Develop effective communication templates for various channels.</li><li>Documentation: Work with internal stakeholders to document processes and best practices.</li></ul>','Ruthwik','Ruthwik1234@gmail.com','Intern-logo.webp','Open'),
//  (4,'Pharmacy','Clinical Pharmacist','Hyderabad','2-4 years ','Pharma D/B Pharm/M Pharm','<ul><li>Good communication skills, patience and energy along with ability to converse fluently in English, Hindi and Telugu is a must.</li><li>Should possess ability to persuade through good communication skills.&nbsp;</li></ul><p>Ability to work closely with doctors and understand their needs from the&nbsp;</p>','<ul><li>Documents activities consistent with clinic Guidelines and maintains a safe and clean working environment</li><li>Understands oncology medications and can dispense drugs as prescribed by the treating oncologist</li><li>Demonstrates competency in maintaining computerized medication profiles and processing medication lists for cart filling and IV admixtures.</li><li>Maintains the medications in alphabetical order, by category, by generic name wise and by brand.</li><li>Coordinate with the drug distributor to ensure ordering of complex Oncology medications as needed by the patients</li><li>Maintains the operation of the unit dose area and drug mixing room. Competent dispensing medications per procedures and laws.</li><li>Evaluates appropriateness of medication orders for patients of all ages, diseases, and conditions. Responds to inappropriate orders appropriately.</li><li>Provides therapeutic drug monitoring education, provides drug information to patients and provides patient education as identified and as requested.</li><li>Participates in clinical and interdisciplinary patient care team as directed by center head</li><li>Has a good idea of oncology drug market, their adverse reactions and special needs according to patient needs.&nbsp;</li></ul>','Nishant','Nishant1234@gmail.com','nutritionist-logo.webp','Open'),
//  (5,'Marketing ','Marketing Executive (male)','Hyderabad','0-3 years min','B.Tech','<ul><li>Knowledge of medical terminologies.</li><li>Good sales performance track record.</li><li>Excellent communication skills, patience, and energy.</li><li>Ability to communicate fluently in 2-3 languages is a must.</li><li>Should have strong integrity and leadership traits.</li><li>Building relationships, resolving conflict, collaboration, scheduling, teamwork.</li></ul><p>Ability to learn quickly and handle multiple tasks whenever required.</p>','<ul><li>Develop network throughout hospitals, clinics, polyclinics, and other healthcare providers in their allotted catchment area.</li><li>Regular follow up with specialist and hospital doctors etc.</li><li>Arranging appointments with doctors which may include pre-arranged appointments or regular calling.</li><li>Facilitating medical conferences.</li><li>Developing growth strategies and plans for increasing opportunities.</li><li>Identify and develop new and existing referral sources to develop successful referring relationships.</li><li>Conducting marketing activities to increase brand awareness and gain new doctor relationships.</li><li>Maintain marketing collateral inclusive of presentation templates.</li><li>Support, facilitate, and implement a local marketing plan.</li><li>Process and develop requests, monthly reports, and process invoices.</li><li>Keep up to date with the key research activities of the organization.</li><li>Develop in-depth knowledge of services provided and value proposition.</li></ul><p>Following industry trends locally and internationally&nbsp;</p>','Nishant','Nishant1234@gmail.com','facilitiesboy-logo.webp','Open'),
//  (6,'Nursing','Nurse','Hyderabad','1-3 years in Clinical Practice','Graduation, BSc/MSc/GNM (Nursing)','<ul><li>Experience in nursing for critical care patients.</li><li>Must possess the abilities to work independently, demonstrate effective time management skills, and to prioritise effectively.</li><li>Excellent communication and interpersonal skills with all levels of internal and external customers necessary.Ability to converse fluently in 2-3 languages is a must (Telugu, English, Hindi).</li><li>Plan, organise, and carry out nursing activities while understanding physical, mental and emotional state of the patient.</li><li>Attends staff meetings and in-service training sessions for continues education.</li></ul><p>Individual must be self-motivated/self-directed, patience and energy.</p>','<ul><li>Oncology Nurse for cancer patients with the goal of helping patients overcome health care system barriers and facilitate timely access to home or centre based services.</li><li>Visit and observe assigned patients and their families to discover, define, act on and/or report causes of health problems.</li><li>Demonstrated excellence in nursing assessment, home care planning and problem-solving skills.</li><li>Must be able to lift or transfer patients, medical supplies, and equipment.</li><li>Work effectively with patients and families to assist them in satisfactory solution of health problems.</li><li>Ability to deal effectively with change within the unstructured nature of health coaching and remain focused and perform other related work as required.</li></ul><p>Coordinate with doctors and related department leads to plan administrative activities. Oncology home care discharge planning experience preferred.</p>','Veera Vardhan','veera123@gmail.com','nurse-logo.webp','Open'),
//  (7,'Psychologist','Clinical Psychonoclogist','Hyderabad','1-3 years in Clinical Practice','MSc Health Psychology','<ul><li>Cumulative 1-2 years experience of counselling specialpopulations</li><li>Preferred health coach experience</li><li>Demonstrate strong intrest towards treating oncology patients</li><li>Effective interviewing and counselling skills&nbsp;</li><li>Able to converse in Telugu, Hindi and English</li></ul><p>Ability to work effectively as part of an integrated team</p>','<ul><li>Identify relevant signs and symptoms of psychological conditions in cancer paitents in order to comprehensively assess, diagnose, and manage the patient’s condition</li><li>Diagnose and develop treatment plans in collaboration with the Doctor Panel and medical coaches that reflects the standard of practice within the organisation</li><li>Provide psychotherapy, counseling education, cognitive, retraining, behavior management and / or crisis intervention as needed to treat the patient’s condition</li><li>Write clinical reports to adequately capture the patient condition and following treatment plan</li><li>Provide patient’s relatives/caregivers with information concerning the management of the patient at home</li><li>Give input and help to implement new programs for the treatment, training or rehabilitation of cancer patients within the organisation</li></ul><p>Review literature for trends in clinical and non-clinical psychological health issues</p>','Veera Vardhan','veera123@gmail.com','psychologist-logo.webp','Open'),
//  (8,'Screening','Screening Coach ','Hyderabad','1-3 years','Degree in Business, Social Work, Public ','<ul><li>Excellent communication skills, patience and enthusiasm along with ability to converse fluently in 2-3 languages is a must (Telugu, English and Hindi).&nbsp;</li><li>Knowledge of basic medical terminologies</li><li>Adept computer skills (MS Office) is required.&nbsp;</li><li>Comfortable with making regular calls to screening participants and potential partner camp hosts</li><li>Comfortable with travelling in and around Hyderabad</li><li>Verbal communication, health promotion and maintenance, patient services, building relationships, resolving conflict, coordination, listening, scheduling and teamwork.&nbsp;</li><li>Ability to learn quickly and handle multiple tasks whenever required.&nbsp;</li></ul><p>Track record of good sales performance&nbsp;</p>','<ul><li>Assist the Screening Manager in developing and implementing an integrated screening program for breast, oral and cervical cancers.&nbsp;</li><li>Help organize and execute regular screening camps in Hyderabad North, South, West and Vizag areas. Expectation is to organize 3 camps per week in Hyderabad and 3 camps per week in Vizag.</li><li>Manage electronic documentation and billing via Salesforce of all screening participants.&nbsp;</li><li>Maintain a cooperative relationship amongst health care team members; building rapport and participating in team problem-solving methods.&nbsp;</li><li>Provide knowledge management and support to the clinical care and administrative teams.</li><li>Work closely with screening manager to develop eye-catching and effective marketing materials, collateral and educational materials for the screening program.&nbsp;</li><li>Follow-up with participants post-event to schedule consultations and diagnostics.</li><li>Ensure that screening camps are conducting ethically and with high quality.</li><li>Developing growth strategies and plans for increasing opportunities.</li><li>Supporting and conducting marketing activities to increase brand awareness&nbsp;</li><li>Process and develop monthly reports on activities and outcomes</li><li>Keep up-to-date with the key research activities of the organization.</li><li>Develop in-depth knowledge of services provided and value proposition.</li></ul><p>Follow and setindustry trends locally and internationally as appropriate</p>','Veera Vardhan','veera123@gmail.com','coach-logo.webp','Open')`;

// const insertQuery = `INSERT INTO applicant_details (role_id,role,department,first_name,last_name,mobile_number,years_of_experience,DOB,highest_graduation,graduation_year,CGPA,current_address,reason_for_applying,applicant_email,status) VALUES
// (1,'Accounts Executive','Accounts/Financial','Lavan kumar','Adicherla','8096255759',1,'1999-01-12','b.tech',2024,80.00,'Sircilla','qqqqqqqqqq','lavankumara2015@gmail.com','Rejected'),
// (1,'Accounts Executive','Accounts/Financial','Lavan kumar','Adicherla','8096255759',1,'1999-01-12','b.tech',2024,80.00,'Sircilla','qqqqqqqqqq','lavankumara2015@gmail.com','Rejected'),
// (8,'Screening Coach ','Screening','Lavan kumar','Adicherla','8096255759',1,'1999-01-12','b.tech',2024,80.00,'Sircilla','qqqqqqqqqqqqq','lavankumara2015@gmail.com','Applied'),
// (7,'Clinical Psychonoclogist','Psychologist','Lavan kumar','Adicherla','8096255759',1,'1999-01-12','b.tech',2024,80.00,'Sircilla','qqqqqqqqqqq','lavankumara2015@gmail.com','Applied'),
// (6,'Nurse','Nursing','Lavan kumar','Adicherla','8096255759',1,'1999-01-12','b.tech',2024,80.00,'Sircilla','qqqqqqqqqqqqqqqq','lavankumara2015@gmail.com','Applied');`

// connection.query(insertQuery, (error, results, fields) => {
//   if (error) {
//     console.error("Error inserting data: " + error.stack);
//     return;
//   }
//   console.log("Data inserted successfully");
// });


//Database Connection
// const connection = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "122000",
//   database: "cion_careers",
// });

connection.connect((err) => {
  if (err) {
    console.error("Error connecting to database: " + err.stack);
    return;
  }
  console.log("Connected to database as id " + connection.threadId);
});

//Middleware (userAuthentication)
const userAuthentication = (request, response, next) => {
  try {
    const authorization = request.headers.authorization;
    console.log(authorization)
    let token;
    if (authorization !== undefined) {
      token = authorization.split(" ")[1];
    }

    if (token === undefined) {
      response.status(400);
      response.send({ msg: "Missing Token" });
    } else {
      jwt.verify(token, TokenKey, (err, payload) => {
        if (err) {
          response.status(400);
          response.send({ msg: "Invalid Token" });
        } else {

          request.email_id = payload.email_id;
          request.password = payload.password;
          next();
        }
      });
    }
  } catch (error) {
    console.log(`Error occured in Middleware: ${error}`);
  }
};

//applicant-login route
app.post("/applicant-login", (req, res) => {
  const { email_id, password } = req.body;
  connection.query(
    `SELECT * FROM applicant_credentials WHERE applicant_email = ?`,
    [email_id],
    async (err, results) => {
      if (err) {
        console.error("Error executing query", err);
        return res.status(500).send("Internal Server Error");
      }
      if (results.length === 0) {
        return res.status(401).send({
          msg: "Email is not registered",
        });
      }
      const user = results[0];
      let userIsMatched = await compare(password, user.applicant_password);
      if (userIsMatched) {
        let payload = {
          email_id,
          password,
        };
        let token = await jwt.sign(payload, TokenKey);
        return res.status(200).send({
          msg: "Login successful",
          token: token,
        });
      } else {
        return res.status(401).send({
          msg: "Invalid credentials",
        });
      }
    }
  );
});


app.post("/add-roleDetails", (req, res) => {
  const {
    department,
    role,
    location,
    experiences,
    Eligibility,
    skill_required,
    job_description,
    hiring_manager,
    hiring_manager_email,
    role_logo_url,
  } = req.body;
  connection.query(
    `INSERT INTO careers (department, role, location, experience, Eligibility, skill_required, job_description, hiring_manager, hiring_manager_email, role_icon_url) 
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
    [
      department,
      role,
      location,
      experiences,
      Eligibility,
      skill_required,
      job_description,
      hiring_manager,
      hiring_manager_email,
      role_logo_url,
    ],
    (err, results) => {
      if (err) {
        console.error("Error executing query", err);
        return res.status(500).send("Internal Server Error");
      }
      return res.status(200).send("Role details added successfully");
    }
  );
});


app.get("/show-roleDetails",  (req, res) => {
  connection.query(
    `SELECT * FROM careers WHERE status = 'Open' ORDER BY role_id DESC;`,
    (err, results) => {
      if (err) {
        console.error("Error executing query", err);
        return res.status(500).send("Internal Server Error");
      }
      if (results.length === 0) {
        return res.status(404).send("No data found");
      }
      return res.status(200).json(results);
    }
  );
});


app.get("/get-JDDetails/:id", (req, res) => {
  const { id } = req.params;
  connection.query(
    `SELECT role,role_id,job_description,skill_required,department,Eligibility,experience,location FROM careers WHERE role_id = ${id}`,
    (err, results) => {
      if (err) {
        console.error("Error executing query", err);
        return res.status(500).send("Internal Server Error");
      }
      if (results.length === 0) {
        return res.status(500).send("No data found");
      }
      return res.status(200).json(results);
    }
  );
});


app.post("/add_applicant-credentials", (req, res) => {
  const { applicant_name, applicant_email, applicant_password } = req.body;
  connection.query(
    `SELECT * FROM applicant_credentials WHERE applicant_email = ?`,
    [applicant_email],
    async (err, results) => {
      if (err) {
        console.error("Error executing query", err);
        return res.status(500).send("Internal Server Error");
      }
      if (results.length > 0) {
        return res.status(400).send("Email already exists");
      }
      const hashedPassword = await hash(applicant_password, 10);
      connection.query(
        `INSERT INTO applicant_credentials (applicant_name, applicant_email, applicant_password) VALUES (?, ?, ?)`,
        [applicant_name, applicant_email, hashedPassword],
        (err, results) => {
          if (err) {
            console.error("Error executing query", err);
            return res.status(500).send("Internal Server Error");
          }
          return res.status(200).send("Applicant details added successfully");
        }
      );
    }
  );
});


app.get("/get-applicationDetails", userAuthentication, (req, res) => {
  try {
    const { email_id } = req;
    connection.query(
      `SELECT * FROM applicant_details where applicant_email="${email_id}"`,
      (err, results) => {
        if (err) {
          return res
            .status(500)
            .send("Data Base Error" + "get-applicationDetails");
        }
        if (results.length === 0) {
          return res.status(500).send("No data found");
        }
        return res.status(200).json(results);
      }
    );
  } catch (error) {
    console.log(error + "get-applicationDetails");
  }
});


app.get("/get-applicationProfileDetails", userAuthentication, (req, res) => {
  try {
    const { email_id } = req;
    connection.query(
      `SELECT * FROM applicant_details where applicant_email="${email_id}"  LIMIT 1`,
      (err, results) => {
        if (err) {
          return res
            .status(500)
            .send("Data Base Error");
        }
        if (results.length === 0) {
          return res.status(500).send("No data found");
        }
        return res.status(200).json(results);
      }
    );
  } catch (error) {
    console.log(error);
  }
});


app.put('/update-profileDetails',(req,res)=>{
  try {
    const {field, newValue, email} = req.body;
    connection.query(`UPDATE applicant_details SET ${field}  = '${newValue}' WHERE applicant_email = '${email}'`,
      (err, results) => {
        if(err){
          return res.status(500).send("Data Base Error");
        }else{
          return res.status(200).json({message:"update successfully"});
        }
      }
    )
  } catch (error) {
    res.status(400).json({message:"update profile details error"})
  }
})

// nodemailer function (send otp to email)
function sendEmail({ recipient_email, OTP }) {
  return new Promise((resolve, reject) => {
    var transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.MY_EMAIL,
        pass: process.env.MY_PASSWORD,
      },
      tls: {
        ciphers: "SSLv3",
        minVersion: "TLSv1.2",
      },
    });

    const mail_configs = {
      from: process.env.MY_EMAIL,
      to: recipient_email,
      subject: "Testing PASSWORD RECOVERY",
      html: `<!DOCTYPE html>
<html lang="en" >
<head>
  <meta charset="UTF-8">
  <title>OTP Email</title>
  

</head>
<body>
<div style="font-family: Helvetica, Arial, sans-serif; min-width: 1000px; overflow: auto; line-height: 2;">
  <div style="margin: 50px auto; width: 70%; padding: 20px 0;">
    <div style="border-bottom: 1px solid #eee;">
      <a href="#" style="font-size: 1.4em; color: #00466a; text-decoration: none; font-weight: 600;">CION Cancer Clinics</a>
    </div>
    <p style="font-size: 1.1em;">Hi,</p>
    <p>Thank you for choosing CION Cancer Clinics. Use the following OTP to complete your Password Recovery Procedure. OTP is valid for 5 minutes.</p>
    <h2 style="background: #00466a; margin: 0 auto; width: max-content; padding: 0 10px; color: #fff; border-radius: 4px;">${OTP}</h2>
    <p style="font-size: 0.9em;">Regards,<br />CION Cancer Clinics</p>
    <hr style="border: none; border-top: 1px solid #eee;" />
    <div style="float: right; padding: 8px 0; color: #aaa; font-size: 0.8em; line-height: 1; font-weight: 300;">
      <p>CION Cancer Clinics </p>
      <p>Jubile Hills Check Post</p>
      <p>Hyderabad, Telangana</p>
    </div>
  </div>
</div>

  
</body>
</html>`,
    };
    transporter.sendMail(mail_configs, (error, info) => {
      if (error) {
        return reject({ message: `An error has occurred` });
      }
      return resolve({ message: "Email sent successfully" });
    });
  });
}

app.post("/applicant_forgot_Password", (req, res) => {
  const { recipient_email, OTP } = req.body;
  connection.query(
    "SELECT * FROM applicant_credentials WHERE applicant_email = ?",
    [recipient_email],
    (err, results) => {
      if (err) {
        console.error(err);
        return res.status(500).send("Internal server error");
      }
      if (results.length === 0) {
        return res.status(404).send("Email not found");
      }
      sendEmail({ recipient_email, OTP })
        .then((response) => res.send(response.message))
        .catch((error) => res.status(500).send(error.message));
    }
  );
});

//applicant email verification route
app.post("/applicant_verifyEmail", async (req, res) => {
  const { recipient_email, OTP } = req.body;
  try {
    await sendEmail({ recipient_email, OTP });
    res.status(200).send("Email sent successfully");
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).send("Internal server error");
  }
});


app.put("/applicantSetNewPassword", async (req, res) => {
  try {
    const { applicant_emailID } = req.body;
    const { ConfirmPassword } = req.body;
    const hashedPassword = await hash(ConfirmPassword, 10);
    const query = `UPDATE applicant_credentials SET applicant_password = ? WHERE applicant_email = ?`;
    connection.query(query, [hashedPassword, applicant_emailID], (err, result) => {
      if (err) {
        console.error(err);
        res.status(500).send({ error: "Internal server error" });
        return;
      }
      res.send({
        msg: "Updated Successfully",
      });
    });
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: "Internal server error" });
  }
});


app.post("/get-additional-details", (req, res) => {
  const { email } = req.body;
  connection.query(
    "SELECT * FROM applicant_details WHERE applicant_email = ?",
    [email],
    (err, results) => {
      if (err) {
        return res
          .status(500)
          .json({ message: "Failed to fetch additional details" });
      }
      if (results.length === 0) {
        return res
          .status(404)
          .json({ message: "No details found for the provided email" });
      }
      res.status(200).json(results[0]);
    }
  );
});


app.post("/Submit-details", async (req, res) => {
  const {
    email,
    Password,
    reasonForApplying,
    cv_uploaded,
    applicantRegisterDetails,
  } = req.body;

  try {
    const hashedPassword = Password ? await hash(Password, 10) : null;
    let parsedApplicantRegisterDetails = applicantRegisterDetails;
    if (typeof applicantRegisterDetails === "string") {
      parsedApplicantRegisterDetails = JSON.parse(applicantRegisterDetails);
    }

    const {
      role,
      role_id,
      department,
      firstname,
      lastname,
      dob,
      cgpa,
      highest_graduation,
      graduation_year,
      current_address,
      experience,
      mobile_number,
    } = parsedApplicantRegisterDetails;

    if (!role_id || !role || !department) {
      return res.status(400).json({ message: "Missing required applicant details." });
    }

    const insertApplicantDetailsQuery = `
      INSERT INTO applicant_details (
        role_id, role, department, first_name, last_name, mobile_number, years_of_experience,
        DOB, highest_graduation, graduation_year, CGPA, current_address, reason_for_applying,
        applicant_email
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;

    connection.query(
      insertApplicantDetailsQuery,
      [
        role_id,
        role,
        department,
        firstname,
        lastname,
        mobile_number,
        experience,
        dob,
        highest_graduation,
        graduation_year,
        cgpa,
        current_address,
        reasonForApplying,
        email,
      ],
      (err, results) => {
        if (err) {
          console.error("Error executing applicant details query:", err);
          return res.status(500).json({
            message: "Applicant details not added, please check once.",
          });
        }

        const checkUniqueEmailQuery = `
          SELECT applicant_email FROM applicant_credentials WHERE applicant_email = ?`;
        connection.query(checkUniqueEmailQuery, [email], (err, results) => {
          if (err) {
            console.error("Error checking for unique email:", err);
            return res.status(500).json({ message: "Error checking applicant credentials." });
          }

          if (results.length === 0) {
            const insertApplicantCredentialsQuery = `
              INSERT INTO applicant_credentials(applicant_name, applicant_email, applicant_password, applicant_cv)
              VALUES (?, ?, ?, ?)`;

            connection.query(
              insertApplicantCredentialsQuery,
              [`${firstname} ${lastname}`, email, hashedPassword, cv_uploaded],
              (err, results) => {
                if (err) {
                  console.error("Error executing applicant credentials query:", err);
                  return res.status(500).json({
                    message: "Applicant credentials not added, please check once.",
                  });
                }

                const payload = { email_id: email, password: Password };
                const token = jwt.sign(payload, TokenKey, { expiresIn: "1h" });
                return res.status(200).json({
                  message: "Applicant details and credentials added successfully",
                  token: token,
                });
              }
            );
          } else {
            const payload = { email_id: email, password: Password };
            const token = jwt.sign(payload, TokenKey, { expiresIn: "1h" });

            const updateCVQuery = `UPDATE applicant_credentials SET applicant_cv = ? WHERE applicant_email = ?`;
            connection.query(updateCVQuery, [cv_uploaded, email], (err, result) => {
              if (err) {
                console.error("Error updating CV:", err);
                return res.status(500).json({ message: "CV update failed" });
              }
              return res.status(200).json({
                message: "Applicant details added, credentials already exist and CV updated",
                token: token,
              });
            });
          }
        });
      }
    );
  } catch (error) {
    console.error("Error processing request:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});


app.get("/get-adminDashboard-data/:email", async (req, res) => {
  const { email } = req.params;
  try {
    const getHRDetails = await new Promise((resolve, reject) => {
      connection.query(
        'SELECT * FROM admin WHERE hiring_manager_email = ?',
        [email],
        (err, result) => {
          if (err) {
            return reject(err);
          }
          resolve(result);
        }
      );
    });

    if (getHRDetails.length > 0) {
      const hrDetail = getHRDetails[0];
      if (hrDetail.department === "Human Resources") {
        const getAllDetails = await new Promise((resolve, reject) => {
          connection.query(
            'SELECT * FROM applicant_details',
            (err, result) => {
              if (err) {
                return reject(err);
              }
              resolve(result);
            }
          );
        });
        return res.status(200).json(getAllDetails);
      }else{
        const getUserDetails = await new Promise((resolve, reject) => {
          connection.query(
            `SELECT * FROM applicant_details 
             JOIN admin ON applicant_details.department = admin.department 
             WHERE hiring_manager_email = ?`,
            [email],
            (err, result) => {
              if (err) {
                return reject(err);
              }
              resolve(result);
            }
          );
        });
        return res.status(200).json(getUserDetails);
      }
    } else {
      return res.status(404).json({ message: "Admin not found" });
    }
  } catch (err) {
    console.error("Error fetching data:", err);
    return res.status(500).json({ message: "Internal Server Error" });
  }
});


app.get("/get-careers_data-table/:email", async (req, res) => {
  try {
    const { email } = req.params;

    const hrDetail = await new Promise((resolve, reject) => {
      connection.query(
        `SELECT * FROM admin WHERE hiring_manager_email = ?`,
        [email],
        (err, result) => {
          if (err) {
            return reject(err);
          }
          resolve(result);
        }
      );
    });

    if (hrDetail.length > 0) {
      const hr = hrDetail[0];
      if (hr.department === "Human Resources") {
        const getAllDetails = await new Promise((resolve, reject) => {
          connection.query(`SELECT * FROM careers ORDER BY role_id DESC;`, (err, result) => {
            if (err) {
              return reject(err);
            }
            resolve(result);
          });
        });
        return res.status(200).json(getAllDetails);
      } else {
        const getUserDetails = await new Promise((resolve, reject) => {
          connection.query(
            `SELECT * 
            FROM admin 
            JOIN careers ON admin.department = careers.department 
            WHERE admin.hiring_manager_email = ?`,
            [email],
            (err, result) => {
              if (err) {
                return reject(err);
              }
              resolve(result);
            }
          );
        });
        return res.status(200).json(getUserDetails);
      }
    } else {
      return res.status(404).json({ message: "Admin not found" });
    }
  } catch (error) {
    console.error("Error executing query", error);
    return res.status(500).send("Internal Server Error");
  }
});

// update role status
app.put('/update-careersStatus',(req,res)=>{
  try {
    const {field, newValue, role_id} = req.body;

    connection.query(`UPDATE careers SET ${field}  = '${newValue}' WHERE role_id = '${role_id}'`,
      (err, results) => {
        if(err){
          return res.status(500).send("Data Base Error");
        }else{
          return res.status(200).json({message:"update successfully"});
        }
      }
    )
  } catch (error) {
    res.status(400).json({message:"update careers status error"})
  }
})

// update application status
app.put('/update-applicationStatus',(req,res)=>{
  try {
    const {field, newValue, role_id} = req.body;

    connection.query(`UPDATE applicant_details SET ${field}  = '${newValue}' WHERE role_id = '${role_id}'`,
      (err, results) => {
        if(err){
          return res.status(500).send("Data Base Error");
        }else{
          return res.status(200).json({message:"update successfully"});
        }
      }
    )
  } catch (error) {
    res.status(400).json({message:"update application Status error"})
  }
})

//Hiring Manager Login
app.post("/admin-login",async (req, res) => {
  const { email, password } = req.body;

  const query = 'SELECT * FROM admin WHERE hiring_manager_email = ?';
  connection.query(query, [email], (err, result) => {
    if (err) {
      return res.status(500).send({ message: "Database Error" });
    }
    if (result.length === 0) {
      return res.status(401).send({ message: "Invalid Email" });
    }
    else{
      if (result[0].hiring_manager_password === parseInt(password)) {
        return res.status(200).send({ message: "Login successfully", data: result[0] });
      } else {
        return res.status(401).send({ message: "Invalid Password" });
      }
    }
  });
});


app.get("/get-SelectedApplicationDetails/:id", (req,res)=>{
  try {
    const {id} = req.params;
    const query = 'SELECT * FROM applicant_details WHERE role_id = ?';
    connection.query(query,[id],(err,result)=>{
      if(err){
        return res.status(500).send({message:"Database Error"})
        }
        else{
          return res.status(200).json({message:"get application Details successfully",data:result})
          }
          })
          } catch (error) {
            res.status(400).json({message:"get application Details error"})
          }
      })