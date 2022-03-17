const resetbtn = document.querySelector('#reset')
const jokesDiv = document.querySelector('#jokesbg')
const form = document.querySelector("#searchForm")
form.addEventListener('submit', async function (e) {
    e.preventDefault();
    const searchValue = form.elements.search.value;
    const showLink = await axios.get(`https://api.tvmaze.com/search/shows?q=${searchValue}`)
    multiShow(showLink.data)
    form.elements.search.value = "";
})

const multiShow = (shows) => {
    for (let result of shows) {
        if (result.show.image) {
            const tvImage = document.createElement('img');
            tvImage.src = result.show.image.medium
            tvImage.style.margin = "10px";
            jokesDiv.parentNode.insertBefore(tvImage, jokesDiv)
        }
    }
}
function clearImages() {
    imgs = document.querySelectorAll('img');
    for (let eachImg of imgs) {
        eachImg.remove();
    }
}
resetbtn.addEventListener('click', clearImages)



// JOKES JAVASCRIPT
const jokesList = document.querySelector('#jokes')
const jokesBtn = document.querySelector('#jokesbutton')

const getDadJokes = async () => {
    try {
        const headConfig = { headers: { accept: 'application/json' } }
        const eachJoke = await axios.get('https://icanhazdadjoke.com/', headConfig)
        return eachJoke.data.joke
    } catch (err) {
        return 'jokes unavailable!!'
    }
}
const newRandomJoke = async () => {
    const jokeText = await getDadJokes();
    const newLi = document.createElement('li');
    newLi.append(jokeText);
    jokesList.append(newLi)
}
jokesBtn.addEventListener('click', newRandomJoke);



// extend and keywords

class Human{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    into(){
        return `hi,my name is ${this.name} and i am %{this.age} years old`
    }

}