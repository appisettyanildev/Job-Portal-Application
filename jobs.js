const jobs = [
{
title:"Frontend Developer",
company:"Google",
location:"Hyderabad"
},
{
title:"Backend Developer",
company:"Amazon",
location:"Bangalore"
},
{
title:"Data Analyst",
company:"Microsoft",
location:"Pune"
},
{
title:"Python Developer",
company:"Infosys",
location:"Chennai"
}
];

const container =
document.getElementById("jobsContainer");

function displayJobs(data){

container.innerHTML="";

data.forEach(job=>{

container.innerHTML += `
<div class="job-card">
<h3>${job.title}</h3>
<p>${job.company}</p>
<p>${job.location}</p>
<button>Apply Now</button>
</div>
`;

});
}

displayJobs(jobs);

document
.getElementById("search")
.addEventListener("keyup",e=>{

const keyword =
e.target.value.toLowerCase();

const filtered =
jobs.filter(job =>
job.title.toLowerCase().includes(keyword)
);

displayJobs(filtered);

});
