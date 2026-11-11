const companies = ['Google','Microsoft','Amazon','Databricks','Capgemini']
for (let a=0; a<companies.length;a++)
{
    console.log(`Company number ${a+1}:${companies[a]}`)
}

companies.push('Accenture');
console.log(companies);
companies.pop()
console.log(companies);
console.log(companies.includes('Apple'));
console.log(companies.includes('Microsoft'));

console.log(companies.length);