fetch('http://localhost:3000/characters')
.then(res => res.json())
.then(data =>{
    const ulElement = document.getElementById("ulElement");//Creates a ulElement variable that is assighned the "ul" element in the html .
    //Created a for each loops that loops through the data in the db.json file.
    data.forEach((character)=> {

        let animalList = document.createElement("li");// Created a variable called animalList that is assighned a new element with the list tag.
        animalList.textContent = character.name//The animalList variable loops through the data and takes the textcontent of the name key in the db.json file.

        ulElement.appendChild(animalList)//The ulElemennt I had assighned the list tag takes in the names of the animal names and lists them in the html page.

        let aninmalName = document.createElement("div");//The animalName variable is assighned a new div element.  
        let image = document.createElement("img");//The image variable is assighneda new image element. 
        let vote = document.createElement("div");//The vote variable is assighneda new div element.
        

        //The animalList list is added for an event listener that upon clicking, it brings up the information of the animal.
        animalList.addEventListener('click',()=>{
            // aninmalName.textContent = character.name;
            image.src = character.image;
            vote.innerHTML = `vote: ${character.votes}`;
        })
        

        //The vote is assighned an event listener that allows the user to make a vote upon clicking and adds 1.
        vote.addEventListener('click',()=>{
            return character.votes +=1;
        })

    
        //On the animalList, the animalName , image and vote are added to the list.
        animalList.appendChild(aninmalName);
        animalList.appendChild(image);
        animalList.appendChild(vote);


        console.log(image);
        

        //The reset button is added for an event listener that rests the page upon clicking.
        let resetButton =document.getElementById("resetButton");
        resetButton.addEventListener('click',()=>{
            location.reload();
        })

        




    }


    )


})