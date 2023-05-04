
async function api2() {

    let url = await fetch('https://api.pokemontcg.io/v2/cards?q=name:gardevoir');

    let result = await url.json();

    console.log(result.data);

    let output = result.data;

 let body = document.querySelector('body')

 let parent = document.createElement('div')
 parent.classList.add('container')
 body.append(parent)

 for (let i of output){
  

  let card = document.createElement('div')
  card.classList.add('card')
  parent.append(card)

  let cardheader = document.createElement('div')
  cardheader.classList.add('card-header')
  card.append(cardheader)

  let cardbody = document.createElement('div')
  cardbody.classList.add('card-body')
  card.append(cardbody)

  let footer = document.createElement('div')
  footer.classList.add('card-footer')
  card.append(footer)


    try{
        //  number:
        let para = document.createElement('p')
        para.innerText = "Rank : " + i.number
        footer.append(para)
    //    console.log(i.number)

       //  name:
        
         let head = document.createElement('h1')
         head.innerText = i.name
         cardheader.append(head);
        //   console.log(i.name)
          
   
       //  hp:
       let para2 = document.createElement('p')
        para2.innerText = "HP : " + i.hp
        footer.append(para2)
    //    console.log(i.hp)
          
   
       //  images:

       let img = document.createElement('img')
       img.setAttribute('src',i.images.small )
       cardbody.append(img)

        
    //    console.log(i.images.small)
        
   
       //  damage:

       let para3 = document.createElement('p')
        para3.innerText = "Attack : " + i.attacks[0].damage
        footer.append(para3)

    //    console.log(i.attacks[0].damage)
    }
    catch{

    }


    
     
 }


}

api2();