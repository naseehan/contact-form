
const firebaseConfig = {
    apiKey: "AIzaSyBmxYfaFhMwdDuVXmRh5pAJdzelmBEjGQ0",
    authDomain: "contactform-eduzell.firebaseapp.com",
    databaseURL: "https://contactform-eduzell-default-rtdb.firebaseio.com",
    projectId: "contactform-eduzell",
    storageBucket: "contactform-eduzell.appspot.com",
    messagingSenderId: "1050698151063",
    appId: "1:1050698151063:web:8d4c602c63326f143125d2"
  };
   
    // initialize firebase
   firebase.initializeApp(firebaseConfig);

//    reference your database
var contactFormDB = firebase.database().ref('contactForm');

document.getElementById("contactForm").addEventListener('submit', submitForm)

function submitForm(e) {
    e.preventDefault();

    var name = getElementVal('name')
    var emailId = getElementVal('emailId')
    var phNumber = getElementVal('phNumber')
    var employmentStatus = getElementVal('employmentStatus')
    var address = getElementVal('address')
    var jobTitles = getElementVal('jobTitles')
    var companies = getElementVal('companies')
    var length = getElementVal('length')
    var degree = getElementVal('degree')
    var school = getElementVal('school')
    var fieldOfStudy = getElementVal('fieldOfStudy')
    var certifications = getElementVal('certifications')
    var date = getElementVal('date')
    var hours = getElementVal('hours')
    var salary = getElementVal('salary')
    var resume = getElementVal('resume')
    var language = getElementVal('language')
    var software = getElementVal('software')
    // var address = getElementVal('address')
    saveMessages(name, emailId, phNumber, address, employmentStatus, jobTitles, companies, length, degree, school, fieldOfStudy, certifications, date, hours, salary, resume, language, software);

     //   enable alert
  document.querySelector(".alert").style.display = "block";

  //   remove the alert
  setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
  }, 3000);

  //   reset the form
  document.getElementById("contactForm").reset();
    // console.log(name, emailId, phNumber,address, employmentStatus, jobTitles, companies, length, degree, school, fieldOfStudy, certifications, date, hours, salary, resume, language, software);
}
    // save form to firebase
    const saveMessages = (name, emailId, phNumber, address, employmentStatus, jobTitles, companies, length, degree, school, fieldOfStudy, certifications, date, hours, salary, resume, language, software) => {
        var newContactForm = contactFormDB.push();

        newContactForm.set({
            name: name,
            emailId: emailId,
            phNumber: phNumber,
            employmentStatus: employmentStatus,
            address: address,
            jobTitles: jobTitles,
            companies: companies,
            length: length,
            degree: degree,
            school: school,
            fieldOfStudy: fieldOfStudy,
            certifications: certifications,
            date: date,
            hours:hours,
            salary: salary,
            resume: resume,
            language: language,
            software: software,


        })
    }


const getElementVal = (id) => {
    return document.getElementById(id).value;
}