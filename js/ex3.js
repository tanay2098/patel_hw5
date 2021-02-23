const studentList = [
    {
        firstName: "Allan",
        lastName: "Able",
        scores: [95, 85, 92, 98]
    },
    {
        firstName: "Amy",
        lastName: "Alexander",
        scores: [80, 88, 100]
    },
    {
        firstName: "Betty",
        lastName: "Barns",
        scores: [70, 80, 90, 100]
    },
    {
        firstName: "Bob",
        lastName: "Bones",
        scores: [75, 85, 95, 85]
    },
    {
        firstName: "Cindy",
        lastName: "Chase",
        scores: [95, 90, 92, 98]
    },
    {
        firstName: "Charles",
        lastName: "Chips",
        scores: [88, 99, 90]
    },
];
const filter=(studentList,func)=>studentList.filter(func);
const cLastNameResults=studentList.filter(x=>x.lastName.startsWith('C'))
                        .map(x=>{
                            return{
                                firstName:x.firstName,
                                lastName:x.lastName,
                                minScore:Math.min(...x.scores),
                                maxScore:x.scores.reduce((max,value)=>Math.max(max,value),-99),
                                avg_score:x.scores.reduce((sum,value)=>sum+value,0)/x.scores.length
                            };
                        });
console.log(cLastNameResults);