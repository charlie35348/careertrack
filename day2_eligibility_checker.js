const company="Google";
const salary=32000;
const sponsorship=true;
const experience=false;
const applicationStatus="Applied";

if (salary<=28000){
    console.log("Salary requirement met");
}
else
{
    console.log('Salary requirement not met');
}

if (sponsorship===true)
{
    console.log('Sponsorship available');
}
else
{
    console.log('Sponsorship not available');
}

if((salary<=28000 && sponsorship===true )|| (experience === true))
{
    console.log('Eligible for the role');
}
else{
    console.log('Not eligible for the role');
}

if(applicationStatus==="Applied")
{
    console.log('Waiting for response');
}
else if (applicationStatus==="Interview")
{
    console.log('Prepare for interview');
}
else if (   applicationStatus==="Rejected")
{
    console.log('Application rejected');
}
else{
    console.log('Unknown application status');
}