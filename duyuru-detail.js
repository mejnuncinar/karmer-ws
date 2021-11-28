var id = sessionStorage.getItem("id");
  if (window.location.hash == "#en") {
      
      
      var listele=document.getElementById("blog-detail")
fetch("https://api-karmer.aybu.edu.tr:8080/career-service/public/announcement-api/?id="+id ,{
	headers:{
		'Accept-Language': 'en'
	}
})
.then(response=>response.json())
.then(data=>{
	[data].forEach(element => {
	
		
		
       
        {
			
			
            listele.innerHTML+=`                   <div class="blog-deatails row">
			
				    <div class="col-md-4 ">
					  <div class="bs-img mt-30 " >
                            <a><img src="${element.image}" alt="Aybü Kar-Mer - Aybü Kariyer Planlaması ve Yönetimi Uygulama ve Araştırma Merkezi"></a>
                        </div>
						
					</div>
					
					 <div class="col-md-8">
					      <div class="blog-full mt-30">
						   <h2  class="title mb-10">${element.title}</h2><hr>
						    <div class="blog-desc">
                               ${element.article}
							   
                           </div>
                           <ul class="single-post-meta">
                               <li>
                                   <span class="p-date"> <i class="fa fa-calendar-check-o"></i> ${element.creationDate} </span>
                               </li> 
                             
                               <li class="Post-cate">
                                   <div class="tag-line">
                                       <i class="fa fa-book"></i>
                                       <a>${element.type.label}</a>
                                   </div>
                               </li>
                              
                           </ul>
                         
                         
                        
                          
                       </div>
					 </div>
					 
					 
					 
					 
                   </div>`
						 
						

			
        }
        
    });
});
      
      
  }
  else{
      
      var listele=document.getElementById("blog-detail")
fetch("https://api-karmer.aybu.edu.tr:8080/career-service/public/announcement-api/?id="+id ,{
	headers:{
		'Accept-Language': 'tr'
	}
})
.then(response=>response.json())
.then(data=>{
	[data].forEach(element => {
	
		
		
       
        {
			
			
            listele.innerHTML+=`                   <div class="blog-deatails row">
			
				    <div class="col-md-4 ">
					  <div class="bs-img mt-30 " >
                            <a><img src="${element.image}" alt="Aybü Kar-Mer - Aybü Kariyer Planlaması ve Yönetimi Uygulama ve Araştırma Merkezi"></a>
                        </div>
						
					</div>
					
					 <div class="col-md-8">
					      <div class="blog-full mt-30">
						   <h2  class="title mb-10">${element.title}</h2><hr>
						    <div class="blog-desc">
                               ${element.article}
							   
                           </div>
                           <ul class="single-post-meta">
                               <li>
                                   <span class="p-date"> <i class="fa fa-calendar-check-o"></i> ${element.creationDate} </span>
                               </li> 
                             
                               <li class="Post-cate">
                                   <div class="tag-line">
                                       <i class="fa fa-book"></i>
                                       <a>${element.type.label}</a>
                                   </div>
                               </li>
                              
                           </ul>
                         
                         
                        
                          
                       </div>
					 </div>
					 
					 
					 
					 
                   </div>`
						 
						

			
        }
        
    });
});
  }



