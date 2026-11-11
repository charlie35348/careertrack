applications = [
    {
         company: "Google",
            jobrole: "Software Engineer",
            salary: 120000,
            location: "London",
            applicationstatus: "Rejected",
            sponsorsavailable: true
    },
    {
        company: "Microsoft",
        jobrole: "Data Scientist",
        salary: 110000,
        location: "Seattle",
        applicationstatus: "Interview",
        sponsorsavailable: false
    },
    {
        company: "Amazon",
        jobrole: "Product Manager",
        salary: 130000,
        location: "New York",
        applicationstatus: "Accepted",
        sponsorsavailable: false
    },
    {
        company: "Databricks",
        jobrole: "Data Engineer",
        salary: 125000,
        location: "San Francisco",
        applicationstatus: "Accepted",
        sponsorsavailable: true
    },
    {
        company: "Capgemini",
        jobrole: "Business Analyst",
        salary: 90000,
        location: "London",
        applicationstatus: "Rejected",
        sponsorsavailable: false
    }
]

for(const a of applications)
{
    console.log(`Company: ${a.company}`);
    console.log(`Job Role: ${a.jobrole}`);
    console.log(`Salary: £${a.salary}`);
    console.log(`Location: ${a.location}`);
    console.log(`Application Status: ${a.applicationstatus}`);
    console.log(`Sponsorship Available: ${a.sponsorsavailable}`);
    console.log("-------------------------------");
}

console.log(applications[0]);

applications[0].applicationstatus = "Interview";

console.log(applications[0]);

const x=applications.filter(y=>y.applicationstatus==="Accepted");
console.log(x);

const z=applications.find(a=>a.company==="Google");
console.log(z);

const m=applications.map(a=>a.company);
console.log(m);

console.log(`Total number of applications: ${applications.length}`);

const a1=applications.filter(a=>a.applicationstatus==="Interview");
console.log(`Total number of interview applications: ${a1.length}`);

const a2=applications.filter(a=>a.applicationstatus==="Rejected");
console.log(`Total number of rejected applications: ${a2.length}`);

const a3=applications.filter(a=>a.sponsorsavailable===true);
console.log(`Total number of applications with sponsorship available: ${a3.length}`);

const a4=applications.reduce((s,a)=>s+a.salary,0)/applications.length;
console.log(`Average salary of all applications: £${a4}`);
