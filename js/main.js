$(document).ready(function () {
   $("#btn_people").click(function() {
    
    const URLGET = "https://randomuser.me/api/";
    

    $.get(URLGET, function (response, estado, state) {

        if(state.status === 200){
            
            
    
            let person = response.results[0];
            let date = person.dob.date.slice(0,10);
           
              console.log(person);
      
            $("#card").remove();
            $("#principal_box").prepend(`
                        <div class="card" id="card">
                        <div class="header_card">
                                <img class="imgClient" src="${person.picture.large}" alt="">
                            <div>
                                <h3 class="name">${person.name.first}</h3>
                                <h3>${person.name.last}</h3>
                            
                            </div>      
                        </div>
                        <div class="body_card">
                            <p class="info">Birthday date: <samp class="dates">${date}</samp></p>
                            <p class="info">Age:  <samp class="dates">${person.dob.age}</samp></p>
                            <P class="info">Gender:  <samp class="dates">${person.gender}</samp></P>
                            <P class="info">Phone:  <samp class="dates">${person.cell}</samp></P>
                            <P class="info">City:  <samp class="dates">${person.location.city}</samp> Country: <samp class="dates">${person.location.country}</samp> </P>
                            <P class="info">Adress:  <samp class="dates">${person.location.street.name} ${person.location.street.number}</samp></P>
                            <P class="info">Email:  <samp class="dates">${person.email}</samp></P>
                        </div>
                        <div class="foother_card"></div>
                    </div>         
                      `);


                $("#btn_X").removeClass("btn_X_Display");
      
                  } else console.log('Fallo el pedido');
              });

    });

    $("#btn_X").click(function() {
        $("#card").remove();
        $("#btn_X").addClass("btn_X_Display");
    });
});

