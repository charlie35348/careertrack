const form = document.querySelector('#applicationform');
const company=document.querySelector('#company');
const jobrole=document.querySelector('#jobRole');
const salary=document.querySelector('#salary');
const status=document.querySelector('#status');
const applicationtable=document.querySelector('#applicationtable');
const applications = [
    {
        id: 1,
        company: "Google",
        jobRole: "Software Engineer",
        salary: 40000,
        status: "Applied"
    },
    {
        id: 2,
        company: "Microsoft",
        jobRole: "Data Engineer",
        salary: 45000,
        status: "Interview"
    },
    {
        id: 3,
        company: "Amazon",
        jobRole: "Data Analyst",
        salary: 35000,
        status: "Rejected"
    },
    {
        id: 4,
        company: "Ladera Technology",
        jobRole: "Data Engineer",
        salary: 43000,
        status: "Offer"
    }
];

function renderApplicateion()
{
    applicationtable.replaceChildren()
    for(const application of applications){
        const row = document.createElement("tr");

        const companycell=document.createElement("td");
        companycell.textContent=application.company;
        row.appendChild(companycell);

        const jobcell=document.createElement("td");
        jobcell.textContent=application.jobRole;
        row.appendChild(jobcell);

        const salarycell=document.createElement("td");
        salarycell.textContent=Number(application.salary).toLocaleString("en-GB",{
        style:"currency",
        currency:"GBP",
        maximumFractionDigits:0
    });
        row.appendChild(salarycell)

        const statuscell=document.createElement("td");
        statuscell.textContent=application.status;
        console.log(application.status)
        if(application.status ==="Offer")
        {
            statuscell.classList.add('offer')
        }
        else if(application.status==="Rejected")
        {
            statuscell.classList.add('rejected')
        }
        else if(application.status==="Interview")
        {
            statuscell.classList.add('interview')
        }
        else if(application.status==="Applied")
        {
            statuscell.classList.add('applied')
        }
        row.appendChild(statuscell);
        applicationtable.appendChild(row);

      
    
    }
    
}

renderApplicateion();


form.addEventListener('submit',function(event){
    event.preventDefault();
    const newApplication = {
        id: Date.now(),
        company: company.value.trim(),
        jobRole: jobrole.value.trim(),
        salary: Number(salary.value),
        status: status.value
    };


    applications.push(newApplication);
    renderApplicateion();

    updatedashboard();
    form.reset();

})

function updatedashboard()
{
    const applied = applications.filter(a=>a.status==="Applied").length;
    const rejected = applications.filter(a=>a.status==="Rejected").length;
    const offer = applications.filter(a=>a.status==="Offer").length;
    const interview = applications.filter(a=>a.status==="Interview").length;

    document.querySelector("#ac").textContent=applied;
    document.querySelector("#rc").textContent=rejected;
    document.querySelector("#ic").textContent=interview;
    document.querySelector("#oc").textContent=offer;


}


