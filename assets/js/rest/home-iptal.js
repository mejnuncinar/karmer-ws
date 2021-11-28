var listele=document.getElementById("home")
fetch("https://api-karmer.aybu.edu.tr:8080/career-service/public/announcement-api/" ,{
	headers:{
		'Accept-Language': 'tr'
	}
})
.then(response=>response.json())
.then(data=>{
	let x = data.data
	$index =0;
    let html = '';
	
	x.forEach(element => {
		
      
		
			
            html+=`
			
			<div class="slide-part">
                        <div class="container">
                            <div class="row align-items-center">
                                <div class="col-lg-4 order-last">
                                    <div class="img-part">
                                        <img src="${element.image}" alt="">
                                    </div>
                                </div>
                                <div class="col-lg-8 pr-50">
                                    <div class="content">
                                        <div class="sub-title wow bounceInLeft" data-wow-delay="300ms" data-wow-duration="2000ms">${element.creationDate}</div>
                                        <h1 class="title wow fadeInRight" data-wow-delay="600ms" data-wow-duration="2000ms">${element.title}</h1>
                                        <div class="sl-btn wow fadeInUp" data-wow-delay="900ms" data-wow-duration="2000ms">
                                            <a class="readon orange-btn" href="#">Detaylar</a>
                                        </div>
                                    </div>
                                </div>  
                            </div>
                        </div>
                    </div>`;
						 
		
  
			

		
        
    });

    listele.innerHTML = html; 
});


