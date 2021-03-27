function rand(number) {
    return Math.floor(Math.random() * number)
}

const pets = {
    greeting:   ['Hi', 'Hello', 'Hey', 'Yo', 'Hi there', 'Bonjour', 'Hola', 'Konnichiwa'],
    name:       ['Rocket', 'Henry', 'Daisy', 'Arthur', 'Lupin', 'Dave', 'Brewster', 'Taz', 'Ham Sandwich'],
    species:    ['Dog', 'Cat', 'Rabbit', 'Bird', 'Turtle', 'Pig', 'Goat'],
    trait:      ['funniest', 'cutiest', 'most brilliant', 'fastest', 'cleverest', 'most intelligent'],
    activity:   ['walking', 'skateboarding', 'swimming', 'running', 'sleeping', 'singing', 'listening to music', 'watching netflix', 'playing pranks'],
    food:       ['spinach', 'ham burgers', 'fish', 'desert', 'pizza', 'salad', 'enchiladas', 'sausages'],
    location:   ['Great Britain', 'America', 'Spain', 'Germany', 'France', 'New York', 'London', 'Bangkok']
}

const constructMessage = (pet) => {
    const greeting  = pet.greeting[rand(pet.greeting.length)];
    const name      = pet.name[rand(pet.name.length)];
    const species   = pet.species[rand(pet.species.length)];
    const trait     = pet.trait[rand(pet.trait.length)];
    const activity  = pet.activity[rand(pet.activity.length)];
    const location  = pet.location[rand(pet.location.length)];
    const food      = pet.food[rand(pet.food.length)];
    const age       = rand(15) + 1;

    const messages = [
        `${greeting}, my name is ${name}, I am ${age} years old, I live in ${location} and my favorite food is ${food}. I am the ${trait} ${species} in ${location} who loves ${activity} alot.`,
        `${greeting}, I'm ${name}, the ${trait} ${species} in all of ${location}, I'm ${age} years old and I love eating ${food} and ${activity} with my ${species} friends.`,
        `${greeting}, I'm a ${species} called ${name}, I'm ${age} years old from ${location} who loves ${food} and ${activity} with my human. People say I am the ${trait} ${species} on the planet.`,
    ]

    return pet = {
        title: `${name} the ${species}`,
        imageSrc: `${species.toLowerCase()}/${rand(4) + 1}.jpg`,
        message: messages[rand(messages.length)]
    }
}
const pet = constructMessage(pets);

const img = document.createElement("img");
img.src = 'images/' + pet.imageSrc;
img.classList = 'images';
document.getElementById("img").appendChild(img);
document.getElementById("title").innerHTML = pet.title;
document.getElementById("message").innerHTML = pet.message;