function superbowlWin (record) {
    let found = record.find(element => element.result === "W") 
    if (found === undefined) {
        return undefined
    }
    else if (found.result === 'W') { 
    return found.year}
}  