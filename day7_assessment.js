const applications = [
    {
        Company: "Google",
        Jobrole: "Software Engineer",
        Salary: 120000,
        Location: "London",
        Applicationstatus: "Rejected",
        Sponsorsavailable: true
    },
    {
        Company: "Microsoft",
        Jobrole: "Data Scientist",
        Salary: 110000,
        Location: "Seattle",
        Applicationstatus: "Interview",
        Sponsorsavailable: false
    },
    {
        Company: "Amazon",
        Jobrole: "Product Manager",
        Salary: 130000,
        Location: "New York",
        Applicationstatus: "Accepted",
        Sponsorsavailable: false
    },
    {
        Company: "Databricks",
        Jobrole: "Data Engineer",
        Salary: 125000,
        Location: "San Francisco",
        Applicationstatus: "Accepted",
        Sponsorsavailable: true
    },
    {
        Company: "Capgemini",
        Jobrole: "Business Analyst",
        Salary: 90000,
        Location: "London",
        Applicationstatus: "Rejected",
        Sponsorsavailable: false
    },
    {
        Company: "Facebook",
        Jobrole: "Software Engineer",
        Salary: 115000,
        Location: "London",
        Applicationstatus: "Interview",
        Sponsorsavailable: true
    }

]

function displayapplication(application) {
    console.log("-------------------------------");
    console.log(`Company Name: ${application.Company}`);
    console.log(`Job Role: ${application.Jobrole}`);
    console.log(`Salary: ${application.Salary}`);
    console.log(`Location: ${application.Location}`);
    console.log(`Application Status: ${application.Applicationstatus}`);
    console.log(`Sponsorship Available: ${application.Sponsorsavailable}`);
     console.log("-------------------------------");
}

for (const application of applications) {
    displayapplication(application);
}

function updateApplicationStatus(application, newStatus) {
    application.Applicationstatus= newStatus;
    console.log(`Updated Application Status for ${application.Company}: ${application.Applicationstatus}`);
}

updateApplicationStatus(applications[0], "Interview");

function getApplicationsByStatus(status){
    const filteredApplications=applications.filter(app=>app.Applicationstatus===status);
    console.log(`Applications with status ${status}:`);
    console.log(filteredApplications);
    console.log(`Summary of companies with status ${status}:${filteredApplications.length}`)
}

getApplicationsByStatus("Accepted");

function addApplication(application){
    applications.push(application);
}
 addApplication({
    Company: "Netflix",
    Jobrole: "Software Engineer",
    Salary: 140000,
    Location: "Los Angeles",
    Applicationstatus: "Interview",
    Sponsorsavailable: true
});
for (const application of applications) {
    displayapplication(application);
}

function getCompanyNames(app){
    const companies=app.map(a=>a.Company);
    console.log(`Company Names: ${companies}`);
}
getCompanyNames(applications);

function avgsalary(app){
    const avg=app.reduce((sum,a)=>sum+a.Salary,0)/app.length;
    console.log(`Average Salary of all applications: £${avg}`);
}
avgsalary(applications);

function finalstatistics(app){
    const totalApplications=app.length;
    const interviewApplications=app.filter(a=>a.Applicationstatus==="Interview").length;
    const rejectedApplications=app.filter(a=>a.Applicationstatus==="Rejected").length;
    const sponsorshipAvailable=app.filter(a=>a.Sponsorsavailable===true).length;
    
    console.log(`Total number of applications: ${totalApplications}`);
    console.log(`Total number of interview applications: ${interviewApplications}`);
    console.log(`Total number of rejected applications: ${rejectedApplications}`);
    console.log(`Total number of applications with sponsorship available: ${sponsorshipAvailable}`); 
}

finalstatistics(applications);