let n = 5;

for (let i = 0; i < n; i++) {
    let row = "";

    // Leading spaces
    for (let j = 0; j < i; j++) {
        row += " ";
    }

    // Left side numbers
    for (let j = 0; j < n - i; j++) {
        row += (j + 1) + " ";
    }

    // Right side numbers
    for (let j = n - i - 2; j >= 0; j--) {
        row += (j + 1) + " ";
    }

    console.log(row.trim());
}
