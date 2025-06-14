// code your solution here
function superbowlWin(record){
    const win =record.find(game=> game.result==="W");
    return win ?win.year:undefined;
}
//Example usage;
const broncosRecord =[
    {year:2013, team:"Denver Broncos", result:"L"},
    {year: 2015, team:"Denver Broncos", result:"W"},
    {year:2017, team:"Denver Broncos", result:"L"}

];
console.log(superbowlWin(broncosRecord)); //output: 2015
