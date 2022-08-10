const twoToFour = [`Azul`, `7 Wonders Duel`, `Oceans`, `Everdell`, `Settlers of Catan`];

const fivePlus = [`Betrayal at House on the Hill`, `7 Wonders`, `Everdell Expansion`, `The Crew`, `Mysterium`];

const partyGame = [`Wavelength`, `Pictionary`, `Codenames`, `One Night: Werewolf`, `Throw Throw Burrito`];

const getGameRecs = () => {
    let recOne = twoToFour[(Math.floor(Math.random()*5))];
    let recTwo = fivePlus[(Math.floor(Math.random()*5))];
    let recThree = partyGame[(Math.floor(Math.random()*5))];

    console.log(`2 to 4 player Game: ${recOne}
5+ Player Game: ${recTwo}
Party Game: ${recThree}`)
};

getGameRecs();