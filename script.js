const btn=document.querySelector("#btn");

btn.onclick=async()=>{

const query=document.querySelector("#search").value;

const response=await fetch("/search?query="+encodeURIComponent(query));

const data=await response.json();

const result=document.querySelector("#result");

result.innerHTML="";

data.items.forEach(item=>{

result.innerHTML+=`
<div>

<a href="${item.link}" target="_blank">

${item.title}

</a>

<p>${item.description}</p>

</div>
`;

});

};