	function ids(id) {
		
	
		sessionStorage.setItem("id", id);
		window.location.href = "blog-detay.html";
			
}

 if (window.location.hash == "#en") {
     
     var listele=document.getElementById("blogs")
fetch("https://api-karmer.aybu.edu.tr:8080/career-service/public/blog-api/" ,{
	headers:{
		'Accept-Language': 'en'
	}
})
.then(response=>response.json())
.then(data=>{

	let x = data.data
	
	x.forEach(element => {

        {
					
			
            listele.innerHTML+=`<div class="col-lg-4 mb-30">
                                    <div class="blog-item">
                                        <div  style=" text-align: center;" class="blog-img">
                                            <a onclick="ids('${element.uuid}');"><img  class="mobile-img-res" style="cursor: pointer;" src="${element.image}" alt="Aybü Kar-Mer - Aybü Kariyer Planlaması ve Yönetimi Uygulama ve Araştırma Merkezi"></a>
                                        </div>
                                        <div class="blog-content">
                                            <h3 class="blog-title"><a onclick="ids('${element.uuid}');">${element.title}</a></h3>
                                            <div class="blog-meta">
                                                <ul class="btm-cate">
                                                    <li>
                                                        <div class="blog-date">
                                                            <i class="fa fa-calendar-check-o"></i> ${element.creationDate}                                                        
                                                        </div>
                                                    </li>
                                                  
                                                    <li>
                                                        <div class="tag-line">
                                                            <i class="fa fa-book"></i>
                                                            <a href="#">${element.type.label}</a> 
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div class="blog-desc">   
                                                ${element.article} ...                           
                                            </div>
                                            <div class="blog-button">
                                                <a class="blog-btn" onclick="ids('${element.uuid}');">Detaylar</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>`
						 
						

			
        }
        
    });
});

 }
 else{
     var listele=document.getElementById("blogs")
fetch("https://api-karmer.aybu.edu.tr:8080/career-service/public/blog-api/" ,{
	headers:{
		'Accept-Language': 'tr'
	}
})
.then(response=>response.json())
.then(data=>{

	let x = data.data
	
	x.forEach(element => {

        {
					
			
            listele.innerHTML+=`<div class="col-lg-4 mb-30">
                                    <div class="blog-item">
                                        <div  style=" text-align: center;" class="blog-img">
                                            <a onclick="ids('${element.uuid}');"><img  class="mobile-img-res" style="cursor: pointer;" src="${element.image}" alt="Aybü Kar-Mer - Aybü Kariyer Planlaması ve Yönetimi Uygulama ve Araştırma Merkezi"></a>
                                        </div>
                                        <div class="blog-content">
                                            <h3 class="blog-title"><a onclick="ids('${element.uuid}');">${element.title}</a></h3>
                                            <div class="blog-meta">
                                                <ul class="btm-cate">
                                                    <li>
                                                        <div class="blog-date">
                                                            <i class="fa fa-calendar-check-o"></i> ${element.creationDate}                                                        
                                                        </div>
                                                    </li>
                                                  
                                                    <li>
                                                        <div class="tag-line">
                                                            <i class="fa fa-book"></i>
                                                            <a href="#">${element.type.label}</a> 
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div class="blog-desc">   
                                                ${element.article} ...                           
                                            </div>
                                            <div class="blog-button">
                                                <a class="blog-btn" onclick="ids('${element.uuid}');">Detaylar</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>`
						 
						

			
        }
        
    });
});

     
 }
     
 }


