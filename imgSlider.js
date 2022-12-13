// immediately invoked function expression

(function() {
  const pictures = [
    "../../public/images/core-img/slidArticle.jpg", 
	"../../public/images/core-img/slidCat.jpg", 
	"../../public/images/core-img/slidPort.jpg", 
    "../../public/images/core-img/slidProject.jpg", 
	"../../public/images/core-img/slidProject2.jpg", 
	"../../public/images/core-img/slidThesis.jpg", 
    "../../public/images/core-img/slidWrit.jpg", 
	"../../public/images/Paintings/Portraits_small/Rihanna.jpg", 
	"../../public/images/Paintings/Portraits_small/Oprah.jpg", 
	"../../public/images/Paintings/Portraits_small/LeratuOprah.jpg", 
	"../../public/images/Paintings/Portraits_small/Quola1.jpg", 
	"../../public/images/Paintings/Portraits_small/MandBama.jpg", 
	"../../public/images/Paintings/mixMedia_small/FashionTrends11.JPG", 
	"../../public/images/Paintings/mixMedia_small/RootFashion1.JPG", 
	"../../public/images/Paintings/mixMedia_small/RootFashion2.JPG", 
	"../../public/images/Paintings/mixMedia_small/RootFashion3.JPG", 
	"../../public/images/Paintings/mixMedia_small/RootFashion4.JPG", 
	"../../public/images/Paintings/mixMedia_small/RootFashion7.JPG", 
	"../../public/images/Paintings/rootForms_small/Fiesta1.jpg", 
	"../../public/images/Paintings/rootForms_small/Fiesta2.jpg", 
	"../../public/images/Paintings/rootForms_small/Fiesta3.jpg", 
	"../../public/images/Paintings/rootForms_small/Fiesta4.jpg", 
	"../../public/images/Paintings/rootForms_small/ForestWisdom1.jpg", 
	"../../public/images/Paintings/rootForms_small/ForestWisdom2.jpg", 
	"../../public/images/Paintings/rootForms_small/ForestWisdom3.jpg", 
	"../../public/images/Paintings/rootForms_small/ForestWisdom4.jpg", 
	"../../public/images/Paintings/rootForms_small/GermiGold1.jpg", 
	"../../public/images/Paintings/rootForms_small/GermiGold2.jpg", 
	"../../public/images/Paintings/rootForms_small/GermiGold3.jpg", 
	"../../public/images/Paintings/Scenery_small/BeachsidXchange1.jpg", 
	"../../public/images/Paintings/Scenery_small/LastSupper.jpg", 
	"../../public/images/Paintings/Scenery_small/BeyondSky.jpg", 
	"../../public/images/Paintings/SemiAbstract_small/NorthernArch3.jpg", 
	"../../public/images/Paintings/Abstract_small/Echoes1.jpg", 
	"../../public/images/Paintings/Abstract_small/Echoes2.jpg", 
	"../../public/images/Paintings/Abstract_small/Echoes3.jpg", 
	"../../public/images/Paintings/Abstract_small/Echoes4.jpg", 
	"../../public/images/Paintings/Abstract_small/Echoes5.jpg", 
	"../../public/images/Paintings/Abstract_small/Echoes6.jpg", 
	"../../public/images/Paintings/Abstract_small/highVoltage1.jpg", 
	"../../public/images/Paintings/Abstract_small/highVoltage2.jpg", 
	"../../public/images/Paintings/Abstract_small/Kandinsky1.jpg", 
	"../../public/images/Paintings/Abstract_small/Kandinsky2.jpg"
  ]; 

  //select both left and right button. Add event listeners
  const buttons = document.querySelectorAll('.btn');
  const imageDIV = document.querySelector('.img-container');
  let counter = 0;
  
  buttons.forEach(function(button){
    button.addEventListener('click', function(e){
      if (button.classList.contains('btn-left')){
        counter--;
        if(counter < 0){
          counter = pictures.length -1;
        }
        imageDIV.style.backgroundImage = `url('${pictures[counter]}')`;
      }
      
      if (button.classList.contains('btn-right')){
        counter++
        if(counter > pictures.length -1){
          counter = 0;
        }
        imageDIV.style.backgroundImage = `url('${pictures[counter]}')`;
      }
    })
  })
})();
