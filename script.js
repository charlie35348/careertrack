const form = document.querySelector('#applicationform');
const company=document.querySelector('#company');
const jobrole=document.querySelector('#jobRole');
const salary=document.querySelector('#salary');
const status=document.querySelector('#status');
const applicationtable=document.querySelector('#applicationtable');

form.addEventListener('submit',function(event){
    event.preventDefault();
    const newrow=document.createElement('tr');

    const companycell=document.createElement('td');
    companycell.textContent=company.value;
    newrow.appendChild(companycell);

    const jobcell=document.createElement('td');
    jobcell.textContent=(jobrole.value);
    newrow.appendChild(jobcell);

    const salarycell=document.createElement('td');
    salarycell.textContent=Number(salary.value);
    newrow.appendChild(salarycell);

    const statuscell=document.createElement('td');
    statuscell.textContent=status.value;
    console.log(status.value);
        if(status.value==="Offer"){
        statuscell.classList.add('offer');
    }
    else if(status.value==="Rejected"){
        statuscell.classList.add('rejected');
    }
    else if(status.value==="Interview"){
        statuscell.classList.add('interview');
    }
    else if(status.value==="Applied"){
        statuscell.classList.add('applied');
    }
    newrow.appendChild(statuscell);


    applicationtable.appendChild(newrow);

})