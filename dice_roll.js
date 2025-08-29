function is_critical(num_sides, dice_val) {
    return num_sides == dice_val;
}

function roll_dice(num_sides) {
    const min = 1;
    const inclusive = num_sides + 1;
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(inclusive);
    val = Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
    return val;
}

function main() {
    const num_sides = Number(document.getElementById("num_sides").value);
    const num_dice = Number(document.getElementById("num_dice").value);
    const threshold = Number(document.getElementById("threshold").value);
    var count = 0;
    var critical = 0;

    for (let a = 0; a < num_dice; a++) {
        let dice_val = roll_dice(num_sides);

        if (is_critical(num_sides, dice_val)) {
            critical++;
            continue;
        } 
        
        if (dice_val >= threshold) {
            count++;
        }
        
    }
    alert(count + " hits\n" + critical + " critical hits");
}