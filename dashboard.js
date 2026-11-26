export function updatedashboard(applications)
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