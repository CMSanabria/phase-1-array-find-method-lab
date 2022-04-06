// code your solution here
function superbowlWin(record){
    const finalResult =
    record.find(element => element.result === 'W')
    return finalResult ?
    finalResult.year : undefined
}