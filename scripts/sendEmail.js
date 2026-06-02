require('dotenv').config();
const freshers=require('./../models/fresher_model.js')
const nodemailer=require("nodemailer")
const HOST=process.env.EMAIL_USER
const KEY=process.env.EMAIL_PASS

const sendEmails= async()=>{
    const dataF= await freshers.find();
    const transporter= nodemailer.createTransport({
        service:"gmail",
        auth:{
            user: HOST,
            pass: KEY
        }
    });
    try{
        for(const i of dataF){
            if(!i.email) continue;
            const newEmail=i.email;
            
            const mailContents={
                from:HOST,
                to: newEmail,
                subject: "Welcome to NERIST – Admission & Counselling Assistance from NEMSU",
                text:`
Dear Candidates,

Greetings from the NERIST MANIPUR STUDENTS' UNION (NEMSU).

Congratulations to all the candidates who have qualified in NEE and secured the opportunity to join the North Eastern Regional Institute of Science and Technology (NERIST). On behalf of NEMSU, we warmly welcome all students and parents to the NERIST family.

NEMSU is a student body committed to the welfare, guidance, and support of Manipuri students studying at NERIST. Our union actively assists students in matters related to academics, accommodation, counselling, admission procedures, and campus adjustment. We aim to help every fresher feel comfortable, supported, and connected throughout their journey at NERIST.

We would also like to inform all candidates that members of NEMSU will be present during the admission and counselling process at NERIST to assist and guide students whenever required. Candidates and guardians may freely approach us for help regarding document verification, hostel-related information, campus guidance, or any other queries.

For students whose names are currently in the waiting list, we sincerely request you not to be disheartened. There are still chances of selection during subsequent rounds and spot admissions depending on seat availability. We encourage you to stay updated and complete all required formalities properly.

Candidates are also requested to fill up the counselling form provided by the institute through the link that will be shared along with this email/message. All counselling procedures, reporting instructions, important dates, and admission guidelines are clearly mentioned in the attached counselling letter issued by the institute. Therefore, candidates are advised to read the attached file carefully before reporting for counselling.

Required Documents for Candidates:

1. Class X, XII, and Diploma Pass Certificate, as applicable; Migration Certificate, Institute Leaving
Certificate, Mark Sheets of all Semesters of Diploma, etc. Aggregate Marks for NEE-III in
Diploma 3 Years should be 60% or above.

2. SC/ST/OBC/EWS/PWD certificate (if applicable) issued by the Competent Authority (Deputy
Commissioner or an Authorized Revenue Officer) in support of your claim. PWD candidates
must bring the proper Medical Certificate clearly mentioning the locomotor disability and its
percentage. The NCL/EWS Certificate should not be older than a year from the date of issue.

3. A Permanent Resident Certificate (PRC) is mandatory if you have applied for the state quota of
the North East Region. The certificate should be issued by the Competent Authority (Deputy
Commissioner or an Authorized Revenue Officer) and bear the name, designation, signature with
date, and office seal of the issuing officer.

4. Aadhaar Card of the candidate.

5. SBI Bank Account No. with a photocopy of the Pass Book, if available or else the student is
required to open a bank account in the SBI after admission.

6. Legal Guardianship Certificate/Affidavit from first class magistrate, if applicable.

7. Parent/Legal Guardian’s Income Certificate from the Competent Authority of the respective
District.

8. Medical Fitness Certificate of the candidate as per the format attached.

If you have any doubts or require any assistance regarding admission, counselling, accommodation, or campus-related matters, please feel free to contact NEMSU at any time. We will always be ready to help and guide you.

We wish all candidates the very best for their admission process and future academic journey at NERIST. We look forward to welcoming you all to the NERIST family.

With regards,

Hemam Naresh Singh,
General Secretary,
NERIST MANIPUR STUDENTS' UNION (NEMSU),
North Eastern Regional Institute of Science and Technology (NERIST),
Contact: +91 93628 43841

                `,
                attachments:[{
                    filename: "common-counselling-letter.pdf",
                    path: "../backend/files/common-counselling-letter.pdf"
                }]
            }
            const status=await transporter.sendMail(mailContents);
            if(status.response){
                console.log("Email sent to: ", newEmail)
            }
        }

        

    }catch(error){
        console.log(error.message)
    }
    
    
}

module.exports=sendEmails;