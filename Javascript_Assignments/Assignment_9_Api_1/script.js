const veriGetir = async () => {
  try {
    const response = await fetch("./tv-shows.json");
    if (!response.ok) {
      throw new Error("could not fatch data");
    }
    const json = await response.json(response);
    console.log(json);
    ekranaBastir(json);
  } catch (error) {
    console.log(error);
    console.log("try-catch sayesinde koda devam");
  } finally {
    console.log("Thanks!");
  }
};
veriGetir();

function ekranaBastir(data) {
  data.forEach((item) => {
    document.querySelector(".tvShowList").innerHTML += `
    <div class="col-md-3"> 
 <div class="card" >
   <img src=${item.show.image.medium} class="card-img-top">
   <div class="card-body">
     <h5 class="card-title">${item.show.name}</h5> 
      <a class= "btn btn-success"  href=${item.show.url}>Detaylar</a>
     <p> </p>
   </div>
 </div></div> `;
  });
}
