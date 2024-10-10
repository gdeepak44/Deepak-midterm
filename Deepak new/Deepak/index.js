function P_Pubilcation(){
    const home_page = document.getElementById('home_Page')
    home_page.style.display="none";
    const paper_pub = document.getElementById('photo');
    paper_pub.style.display="none";

    const biography = document.getElementById('Einstein_Biography');
    biography.style.display="none";

    const hobbies = document.getElementById('Hobbies_Section');
    hobbies.style.display="none";

    const paper_public = document.getElementById('Papper_publications');
    paper_public.style.display="block";

    
    
}

function Einstein_logo(){
    const paper_public = document.getElementById('Papper_publications');
    paper_public.style.display="none";

    
    const paper_pub = document.getElementById('photo');
    paper_pub.style.display="none";

    const biography = document.getElementById('Einstein_Biography');
    biography.style.display="none";

    const hobbies = document.getElementById('Hobbies_Section');
    hobbies.style.display="none";

    const home_page = document.getElementById('home_Page');
    home_page.style.display="block";

  
}

function Gallery(){
    const paper_public = document.getElementById('Papper_publications');
    paper_public.style.display="none";

    const home_page = document.getElementById('home_Page')
    home_page.style.display="none";

    const biography = document.getElementById('Einstein_Biography');
    biography.style.display="none";

    const hobbies = document.getElementById('Hobbies_Section');
    hobbies.style.display="none";

    const photo = document.getElementById('photo');
    photo.style.display="block";
}

function Hobbies(){
    const paper_public = document.getElementById('Papper_publications');
    paper_public.style.display="none";

    const home_page = document.getElementById('home_Page')
    home_page.style.display="none";

    const biography = document.getElementById('Einstein_Biography');
    biography.style.display="none";

    const photo = document.getElementById('photo');
    photo.style.display="none";

    const hobbies = document.getElementById('Hobbies_Section');
    hobbies.style.display="block";
    
}


function continue_reading(){
    const paper_public = document.getElementById('Papper_publications');
    paper_public.style.display="none";

    const home_page = document.getElementById('home_Page')
    home_page.style.display="none";

    const photo = document.getElementById('photo');
    photo.style.display="none";

    const hobbies = document.getElementById('Hobbies_Section');
    hobbies.style.display="none";

    const biography = document.getElementById('Einstein_Biography');
    biography.style.display="block";


}
function manage_menu() {
    var x = document.getElementById("mob-nav");
    if (x.style.display === "block" ) {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }