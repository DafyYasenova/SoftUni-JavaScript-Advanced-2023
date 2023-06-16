class Triathlon {
    constructor(competitionName) {
        this.competitionName = competitionName;
        this.participants = {};
        this.listOfFinalists = [];
    }
    addParticipant(participantName, participantGender) {

        if (this.participants.hasOwnProperty(participantName)) {
            return `${participantName} has already been added to the list`;

        } else {
            this.participants[participantName] = participantGender;
            return `A new participant has been added - ${participantName}`;
        }
    }
    completeness(participantName, condition) {
        let currentName = this.participants.hasOwnProperty(participantName);
        if (!currentName) {
            throw new Error(`${participantName} is not in the current participants list`)
        } else {

            if (condition < 30) {
                throw new Error(`${participantName} is not well prepared and cannot finish any discipline`);
            }
            let completedCount = Math.floor(condition / 30);

            if (completedCount < 3) {
                return `${participantName} could only complete ${completedCount} of the disciplines`;
            }

            let currentGender = this.participants[participantName];
            this.listOfFinalists.push({ participantName, participantGender: currentGender });
            delete this.participants[participantName];

            return `Congratulations, ${participantName} finished the whole competition`;

        }
    }
    rewarding(participantName) {
        let currentName = this.listOfFinalists.find(n => n.participantName === participantName);

        if (!currentName) {
            return `${participantName} is not in the current finalists list`;
        }
        return `${participantName} was rewarded with a trophy for his performance`;

    }

    showRecord(criteria) {
        if (this.listOfFinalists.length === 0) {
            return `There are no finalists in this competition`;

        }
        if (criteria == 'male' || criteria == 'female') {
            let finalist = this.listOfFinalists.find(p => p.participantGender === criteria)
            return `${finalist.participantName} is the first ${criteria} that finished the ${this.competitionName} triathlon`;

        } else if (criteria === 'all') {
            let result = [];
            result.push(`List of all ${this.competitionName} finalists:`);

            let sorted = this.listOfFinalists.sort((a, b) => a.participantName.localeCompare(b.participantName))
            sorted.forEach(p => result.push(p.participantName))
             return result.join('\n');
             
        } else {
            return `There are no ${participantGender}'s that finished the competition`
        }
    }

}

//Input 1
// const contest = new Triathlon("Dynamos");
// console.log(contest.addParticipant("Peter", "male"));
// console.log(contest.addParticipant("Sasha", "female"));
// console.log(contest.addParticipant("Peter", "male"));

// Output 1
// A new participant has been added - Peter
// A new participant has been added - Sasha
// Peter has already been added to the list

//Input 2
// const contest = new Triathlon("Dynamos");
// console.log(contest.addParticipant("Peter", "male"));
// console.log(contest.addParticipant("Sasha", "female"));
// console.log(contest.addParticipant("George", "male"));
// console.log(contest.completeness("Peter", 100));
// console.log(contest.completeness("Sasha", 70));
// console.log(contest.completeness("George", 20));

// Output 2
// A new participant has been added - Peter
// A new participant has been added - Sasha
// A new participant has been added - George
// Congratulations, Peter finished the whole competition
// Sasha could only complete 2 of the disciplines
// Uncaught Error: George is not well prepared and cannot finish any discipline

//Input 3
// const contest = new Triathlon("Dynamos");
// console.log(contest.addParticipant("Peter", "male"));
// console.log(contest.addParticipant("Sasha", "female"));
// console.log(contest.completeness("Peter", 100));
// console.log(contest.completeness("Sasha", 70));
// console.log(contest.rewarding("Peter"));
// console.log(contest.rewarding("Sasha"));

// Output 3
// A new participant has been added - Peter
// A new participant has been added - Sasha
// Congratulations, Peter finished the whole competition
// Sasha could only complete 2 of the disciplines
// Peter was rewarded with a trophy for his performance
// Sasha is not in the current finalists list

//Input 4
// const contest = new Triathlon("Dynamos");
// console.log(contest.showRecord("all"));

// Output 4
// There are no finalists in this competition

//Input 5
// const contest = new Triathlon("Dynamos");
// console.log(contest.addParticipant("Peter", "male"));
// console.log(contest.addParticipant("Sasha", "female"));
// console.log(contest.completeness("Peter", 100));
// console.log(contest.completeness("Sasha", 90));
// console.log(contest.rewarding("Peter"));
// console.log(contest.rewarding("Sasha"));
// console.log(contest.showRecord("all"));

// Output 5
// A new participant has been added - Peter
// A new participant has been added - Sasha
// Congratulations, Peter finished the whole competition
// Congratulations, Sasha finished the whole competition
// Peter was rewarded with a trophy for his performance
// Sasha was rewarded with a trophy for his performance
// List of all Dynamos finalists:
// Peter
// Sasha
 
// Input 6
const contest = new Triathlon("Dynamos");
console.log(contest.addParticipant("Peter", "male"));
console.log(contest.addParticipant("Sasha", "female"));
console.log(contest.addParticipant("George", "male"));
console.log(contest.completeness("Peter", 100));
console.log(contest.completeness("Sasha", 90));
console.log(contest.completeness("George", 95));
console.log(contest.rewarding("Peter"));
console.log(contest.rewarding("Sasha"));
console.log(contest.rewarding("George"));
console.log(contest.showRecord("male"));

//Output 6
// A new participant has been added - Peter
// A new participant has been added - Sasha
// A new participant has been added - George
// Congratulations, Peter finished the whole competition
// Congratulations, Sasha finished the whole competition
// Congratulations, George finished the whole competition
// Peter was rewarded with a trophy for his performance
// Sasha was rewarded with a trophy for his performance
// George was rewarded with a trophy for his performance
// Peter is the first male that finished the Dynamos triathlon
