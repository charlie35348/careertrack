function displayapplication(cn,jr,s,as)
{
    console.log("Here is your application details:");
    console.log("-------------------------------");
    console.log(`Company Name: ${cn}`);
    console.log(`Job Role: ${jr}`);
    console.log(`Salary: ${s}`);
    console.log(`Application Status: ${as}`);
}

displayapplication('Google','Software Engineer',120000,'Pending');
displayapplication('Microsoft','Data Scientist',130000,'Accepted');
displayapplication('Amazon','Cloud Engineer',125000,'Rejected');

function checkannualSalary(ms)
{
    return ms*12;
}

console.log(checkannualSalary(120000));
console.log(checkannualSalary(130000));
console.log(checkannualSalary(2500));

function checkstatus(s)
{
    if (s==='Accepted'){
        return 'Congratulations! Your application has been accepted.';
    }
    else if (s==='Rejected'){
        return 'We regret to inform you that your application has been rejected.';
    }
    else if (s==='Pending'){
        return 'Your application is still under review. Please wait for further updates.';
    }
    else if (s==='Interview'){
        return 'Your application has been shortlisted for an interview. Please check your email for further instructions.';
    }

    else{
        return 'Invalid status. Please check your application status again.';
    }
}

console.log(checkstatus('Accepted'));
console.log(checkstatus('Rejected'));

function sponsorcheck(s)
{
    if (s===true){
        return 'Sponsorship is available for this job role.';
    }
    else{
        return 'No sponsorship is available for this job role.';
    }
}
 console.log(sponsorcheck(true));
 console.log(sponsorcheck(false));