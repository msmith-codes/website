
function createStory() 
{
    let nameOfBusiness = document.getElementById("nameOfBusiness").value;
    let city = document.getElementById("city").value;
    let typeOfAnimal = document.getElementById("typeOfAnimal").value;
    let presentContinuousVerb = document.getElementById("presentContinuousVerb").value;

    let story = `
        Mr. M. Palin <br>
        Owner, ${nameOfBusiness} <br>
        ${city}, England <br>
        <br>
        Dear Mr. Palin, <br>
        I am writing  this letter to complain about the service at <br>
        your ${nameOfBusiness}. <br>
        I recently purchased a ${typeOfAnimal} at this boutique. Once <br>
        I returned home, I discovered that the ${typeOfAnimal} was <br>
        quite dead. When I tried to return it, the clerk said that it was <br>
        not dead, merely ${presentContinuousVerb}. I assure you that this <br>
        ${typeOfAnimal} is not ${presentContinuousVerb} but is indeed <br>
        quite dead. <br>
        <br>
        I appreciate your quick resolution of this matter.
        <br>
        Sincerely,
        <br>
        J. Cleese.
    `

    document.getElementById("story").innerHTML = story;
}