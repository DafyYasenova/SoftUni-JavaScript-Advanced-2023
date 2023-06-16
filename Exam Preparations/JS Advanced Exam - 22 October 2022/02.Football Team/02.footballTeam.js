class footballTeam {
    constructor(clubName, country) {
        this.clubName = clubName;
        this.country = country;
        this.invitedPlayers = [];
    }

    newAdditions(footballPlayers) {

        for (let player of footballPlayers) {

            let [name, age, playerValue] = player.split('/');
            age = Number(age);
            playerValue = Number(playerValue);

            let foundPlayer = this.invitedPlayers.find(p => p.name === name);
            if (foundPlayer) {
                if (foundPlayer.playerValue < playerValue) {
                    foundPlayer.playerValue = playerValue;
                }

            } else {
                this.invitedPlayers.push({ name, age, playerValue })
            }
        }
        let result = [];
        this.invitedPlayers.forEach(p => {
            result.push(p.name);
        })
        return `You successfully invite ${result.join(', ')}.`

    }

    signContract(selectedPlayer) {

        let [name, playerOffer] = selectedPlayer.split('/');
        let player = this.invitedPlayers.find(p => p.name === name);

        if (!player) {
            throw new Error(`${name} is not invited to the selection list!`);
        } else {

            let priceDifference = player.playerValue - playerOffer;

            if (player.playerValue > playerOffer) {
                throw new Error(`The manager's offer is not enough to sign a contract with ${player.name}, ${priceDifference} million more are needed to sign the contract!`)
            } else {
                player.playerValue = 'Bought';
            }
        
        }

        return `Congratulations! You sign a contract with ${player.name} for ${playerOffer} million dollars.`
    }
    ageLimit(name, age) {
        let player = this.invitedPlayers.find(p => p.name === name);

        if (!player) {
            throw new Error(`${name} is not invited to the selection list!`);

        } else {

            if (player.age > age) {
                return `${name} is above age limit!`;

            } else if (player.age < age + 5) {
                let ageDifference = age - player.age;
                if (ageDifference < 5 ) {
                    return `${name} will sign a contract for ${ageDifference} years with ${this.clubName} in ${this.country}!`
                }
                return `${name} will sign a full 5 years contract for ${this.clubName} in ${this.country}!`
            }
        }
    }

    transferWindowResult() {

        let result = ["Players list:"];
        let sorted = this.invitedPlayers.sort((a, b) => a.name.localeCompare(b.name));
        sorted.forEach(p => {
            result.push(`Player ${p.name}-${p.playerValue}`)
        });

        return result.join('\n')
    }
}
//Input 1
//  let fTeam = new footballTeam("Barcelona", "Spain");
//  console.log(fTeam.newAdditions(["Kylian Mbappé/23/160", "Lionel Messi/35/50", "Pau Torres/25/52"]));

// Output 1
// You successfully invite Kylian Mbappé, Lionel Messi, Pau Torres.

//Input 2
//  let fTeam = new footballTeam("Barcelona", "Spain");
// console.log(fTeam.newAdditions(["Kylian Mbappé/23/160", "Lionel Messi/35/50", "Pau Torres/25/52"]));
// console.log(fTeam.signContract("Lionel Messi/60"));
// console.log(fTeam.signContract("Kylian Mbappé/240"));
// console.log(fTeam.signContract("Barbukov/10"));

// Output 2
// You successfully invite Kylian Mbappé, Lionel Messi, Pau Torres.
// Congratulations! You sign a contract with Lionel Messi for 60 million dollars.
// Congratulations! You sign a contract with Kylian Mbappé for 240 million dollars. 
// Uncaught Error: Barbukov is not invited to the selection list!


//Input 3
// let fTeam = new footballTeam("Barcelona", "Spain");
// console.log(fTeam.newAdditions(["Kylian Mbappé/23/160", "Lionel Messi/35/50", "Pau Torres/25/52"]));
// console.log(fTeam.ageLimit("Lionel Messi", 33 ));
// console.log(fTeam.ageLimit("Kylian Mbappé", 30));
// console.log(fTeam.ageLimit("Pau Torres", 26));
// console.log(fTeam.signContract("Kylian Mbappé/240"));

// Output 3
// You successfully invite Kylian Mbappé, Lionel Messi, Pau Torres.
// Lionel Messi is above age limit!
// Kylian Mbappé will sign a full 5 years contract for Barcelona in Spain!
// Pau Torres will sign a contract for 1 years with Barcelona in Spain!
// Congratulations! You sign a contract with Kylian Mbappé for 240 million dollars.

//Input 4
// let fTeam = new footballTeam("Barcelona", "Spain");
// console.log(fTeam.newAdditions(["Kylian Mbappé/23/160", "Lionel Messi/35/50", "Pau Torres/25/52"]));
// console.log(fTeam.signContract("Kylian Mbappé/240"));
// console.log(fTeam.ageLimit("Kylian Mbappé", 30));
// console.log(fTeam.transferWindowResult());

// Output 4
// You successfully invite Kylian Mbappé, Lionel Messi, Pau Torres.
// Congratulations! You sign a contract with Kylian Mbappé for 240 million dollars. 
// Kylian Mbappé will sign a full 5 years contract for Barcelona in Spain!
// Players list:
// Player Kylian Mbappé-Bought
// Player Lionel Messi-50
// Player Pau Torres-52

