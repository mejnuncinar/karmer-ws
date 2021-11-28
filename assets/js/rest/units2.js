var listele=document.getElementById("blogs")
let x= fetch("https://api-karmer.aybu.edu.tr:8080/career-service/public/announcement-api/" ,{
	headers:{
		'Accept-Language': 'tr'
	}
})
.then(response=>response.json())
.then(data=>{
    [data.data].forEach(element => {
       
       
        {
			
			
            listele.innerHTML+=`<h1>${element[0].title}</h1>`
						
						

			
        }
        
    });
});


