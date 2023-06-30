fetch('http://localhost:3000/characters')
.then(res => res.json())
.then(data =>{
    const ulElement = document.getElementById("ulElement")
    
    data.forEach((character)=> {

        let animalList = document.createElement("li");
        animalList.textContent = character.name

        ulElement.appendChild(animalList)

        let aninmalName = document.createElement("div");
        let image = document.createElement("img");
        let vote = document.createElement("div");

        animalList.addEventListener('click',()=>{
            // aninmalName.textContent = character.name;
            image.src = character.image;
            vote.innerHTML = `vote: ${character.votes}`;
        })

        vote.addEventListener('click',()=>{
            return character.votes +=1;
        })

    

        animalList.appendChild(aninmalName);
        animalList.appendChild(image);
        animalList.appendChild(vote);


        console.log(image);

        let resetButton =document.getElementById("resetButton");
        resetButton.addEventListener('click',()=>{
            location.reload();
        })

        




    }


    )


})