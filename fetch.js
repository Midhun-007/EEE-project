/*fetch("https://pokeapi.co/api/v2/pokemon/midhun")
    .then(response =>response.json())
    .then(data => console.log(data.weight))
    .catch(error => console.log(error))*/
/*async function name() {
    try {
        const response= await fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
        const data=await response.json()
        console.log(data.sprites.front_default)
    } catch (error) {
        console.log({'Error':error})
    }
}
name()// dont forget to call the function
*/
var h1=document.getElementById("hi")
async function name() {
    try {
        const response=await fetch("file:///C:/Users/Midhun.S/OneDrive/Desktop/EEE%20project/study/index.html/get-data")
        h1.textContent=response
        console.log(response)
    } catch (error) {
        
    }
}
