var listele=document.getElementById("units")

let x=fetch("https://api-karmer.aybu.edu.tr:8080/career-service/public/unit-staff-api/?format=json")
.then(response=>response.json())
.then(veri=>{
	let i=0;
	let html = '';
    veri.forEach(element => {
     
            html+=`
			
							<div class="row" style="display: block;padding:5px 0;">
        					<div class="contact-info contact-address">
							
								<div class="col-md-1">
        						
        							<img src="assets/images/aybu-karmer/logo1.png" width="75" alt="Aybü Kar-Mer - Aybü Kariyer Planlaması ve Yönetimi Uygulama ve Araştırma Merkezi">
        						</div>
								
								
								<div class="col-md-7">
							
	        						<a target="new_link" href="${element.unitNameLink}" ><h5 class="info-title" style="margin-top: 20px;">${element.unitName}</h5></a>
	        						
	        					
								</div>
								
							

									
								<div class="col-md-4">`;				
									veri[i].staffs.forEach(element2 => {

									
									
									
										html+=`<h6 class="info-title" style="margin:10px 0;">${element2.title}: <a target="new_blank" href="${element2.cvLink}"> <span style="font-weight: 400;color:#111111;" >${element2.firstName} ${element2.lastName} </span></a></h6>`;
										
									});

									html+=`
									
									</div>
			
						
        					</div>
        				</div>	`;
					
						
					
						
						i++;
						
        
		
		
        
    });

	listele.innerHTML = html;
});


