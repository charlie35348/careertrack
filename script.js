const form = document.querySelector('#applicationform');
const company=document.querySelector('#company');
const jobrole=document.querySelector('#jobRole');
const salary=document.querySelector('#salary');
const status=document.querySelector('#status');
const applicationtable=document.querySelector('#applicationtable');

const savedapplication = localStorage.getItem("careertrackapplications")

let applications;
if(savedapplication){
    applications=JSON.parse(savedapplication);
}
else{
    applications=[

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
    }]
    saveapplication();
}

function renderApplication(applicationlist = applications)
{
    applicationtable.replaceChildren()
    for(const application of applicationlist){
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
        const actioncell= document.createElement('td')

        const editButton = document.createElement("button");
        editButton.textContent="Edit";
        editButton.addEventListener('click',function(){editrow(application.id);});

        const deleteButton=document.createElement("button");
        deleteButton.textContent="Delete";
        deleteButton.addEventListener('click',function(){deleterow(application.id);});

       

        editButton.classList.add('edit-button');
        deleteButton.classList.add('delete-button')
        actioncell.appendChild(editButton);
        actioncell.appendChild(deleteButton);
        row.appendChild(actioncell)


        applicationtable.appendChild(row);

         
    }
    
}

renderApplication();

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
    saveapplication();
    renderApplication();

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


function deleterow(id)
{
    const confirmed=confirm("Are you sure you wanna delete this application?")
    if(!confirmed){
        return;
    }
     applications=applications.filter(a=>a.id!==id);
     saveapplication();
    renderApplication();
    updatedashboard();
}

function editrow(id)
{
    const application=applications.find(a=>a.id==id);
    if(!application)return;;
    const newstat = prompt("Enter your latest application status:",application.status);
    if(newstat===null) return;
    application.status=newstat;
    saveapplication();
    renderApplication();
    updatedashboard();

}   

const sinput = document.querySelector("#searchinput")
const statfilter=document.querySelector("#statfilter")
const sorti=document.querySelector("#sortBy")

sinput.addEventListener('input',applyfilters)
statfilter.addEventListener('change',applyfilters)
sorti.addEventListener("change",applyfilters)

function applyfilters(){
    const st = sinput.value.toLowerCase();
    const fst=statfilter.value;

    const filteredoutput=applications.filter(a=>{
        const matchedinput=
        a.company.toLowerCase().includes(st) || a.jobRole.toLowerCase().includes(st)

        const matchedstatus=
        fst=== "All" ||
        a.status===fst;

        return matchedinput && matchedstatus

        
        })
        if (sorti.value==="salaryHigh"){
            filteredoutput.sort((a,b) => b.salary-a.salary);
        }
        else if (sorti.value==="salaryLow"){
            filteredoutput.sort((a,b) => a.salary-b.salary);
        }
        else if (sorti.value==="companyAZ"){
            filteredoutput.sort((a,b)=> a.company.localeCompare(b.company))

    }
    renderApplication(filteredoutput);
};

function saveapplication(){
    localStorage.setItem("careertrackapplications",JSON.stringify(applications));
}