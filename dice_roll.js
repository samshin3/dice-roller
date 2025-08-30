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

function threshold_by_cmp(strength, toughness) {
    if (strength >= toughness * 2) {
        return 2;
    } else if (strength > toughness) {
        return 3;
    } else if (strength == toughness) {
        return 4;
    } else if (strength * 2 <= toughness) {
        return 6;
    } else {
        return 5;
    }
}

function main() {
    const num_sides = Number(document.getElementById("num_sides").value);
    const num_dice = Number(document.getElementById("num_dice").value);
    const strength = Number(document.getElementById("strength").value);
    const toughness = Number(document.getElementById("toughness").value);
    const hit_wound = String(document.getElementById("hit_wound").value);
    let threshold;

    if (hit_wound === "hit") {
        threshold = Number(document.getElementById("threshold").value);
    } else {
        threshold = threshold_by_cmp(strength, toughness);
    }

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

    document.getElementById("hits").innerHTML = "Hits: " + count;
    document.getElementById("critical").innerHTML = "Critical Hits: " + critical;
    document.getElementById("threshold_result").innerHTML = "Threshold: " + threshold;
}