class JobOffers {
    constructor(employer, position) {
        this.employer = employer;
        this.position = position;
        this.jobCandidates = [];
    }
    jobApplication(candidates) {
        for (let person of candidates) {
            let [name, education, yearsExperience] = person.split('-');
            yearsExperience = Number(yearsExperience);

            let foundPerson = this.jobCandidates.find(p => p.name === name);
            if (!foundPerson) {
                this.jobCandidates.push({ name, education: education.trim(), yearsExperience });

            } else {
                if (foundPerson.yearsExperience < yearsExperience) {
                    foundPerson.yearsExperience = yearsExperience;
                }

            }
        }
        let res = [];
        this.jobCandidates.forEach(p => res.push(p.name));
        return `You successfully added candidates: ${res.join(', ')}.`
    }

    jobOffer(chosenPerson) {

        let index = chosenPerson.indexOf('-');
        let name = chosenPerson.substring(0, index);
        let minimalExperience = Number(chosenPerson.substring(index + 1));
        let foundPerson = this.jobCandidates.find(p => p.name === name);

        if (!foundPerson) {
            throw new Error(`${name} is not in the candidates list!`);
        }
        if (minimalExperience > foundPerson.yearsExperience) {
            throw new Error(`${foundPerson.name} does not have enough experience as ${this.position}, minimum requirement is ${minimalExperience} years.`)
        } 
            foundPerson.yearsExperience = 'hired';
        

        return `Welcome aboard, our newest employee is ${foundPerson.name}.`
    }
    salaryBonus(name) {
        let currentName = this.jobCandidates.find(p => p.name === name);
        if (!currentName) {
            throw new Error(` ${name} is not in the candidates list!`);
        }

        if (currentName.education === "Bachelor") {
            return `${name} will sign a contract for ${this.employer}, as ${this.position} with a salary of $50,000 per year!`
        } else if (currentName.education === "Master") {
            return `${name} will sign a contract for ${this.employer}, as ${this.position} with a salary of $60,000 per year!`
        } else {
            return `${name} will sign a contract for ${this.employer}, as ${this.position} with a salary of $40,000 per year!`
        }
    }

    candidatesDatabase() {
        if (this.jobCandidates.length === 0) {
            throw new Error(`Candidate Database is empty!`)
        }
        let result = ["Candidates list:"];
        this.jobCandidates
        .sort((a, b) => a.name.localeCompare(b.name))
        .forEach(p => {
            result.push(`${p.name}-${p.yearsExperience}`)
        })
        return result.join('\n');
    }
}

// let Jobs = new JobOffers ("Google", "Strategy Analyst");
// console.log(Jobs.jobApplication(["John Doe-Bachelor-10", "Peter Parker-Master-5", "Daniel Jones- Bachelor-18"]));
// Output 1
// You successfully added candidates: John Doe, Peter Parker, Daniel Jones.
// Input 2
// let Jobs = new JobOffers("Google", "Strategy Analyst");
// console.log(Jobs.jobApplication(["John Doe-Bachelor-10", "Peter Parker-Master-5", "Daniel Jones- Bachelor-18"]));
// console.log(Jobs.jobOffer("John Doe-8"));
// console.log(Jobs.jobOffer("Peter Parker-4"));
// console.log(Jobs.jobOffer("John Jones-8"));

let Jobs = new JobOffers ("Google", "Strategy Analyst");
 console.log(Jobs.jobApplication(["John Doe-Bachelor-10", "Peter Parker-Master-5", "Daniel Jones- Bachelor-18"]));
 console.log(Jobs.jobOffer("John Doe-8"));
 console.log(Jobs.jobOffer("Peter Parker-4"));
 console.log(Jobs.salaryBonus("John Doe"));
 console.log(Jobs.salaryBonus("Peter Parker"));


// Output 3
// You successfully added candidates: John Doe, Peter Parker, Daniel Jones.
// Welcome aboard, our newest employee is John Doe.
// Welcome aboard, our newest employee is Peter Parker.
// John Doe will sign a contract for Google, as Strategy Analyst with a salary of $50,000 per year!
// Peter Parker will sign a contract for Google, as Strategy Analyst with a salary of $60,000 per year!
