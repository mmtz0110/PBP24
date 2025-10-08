let studentScore = [
    {name : 'Andi', score : 90},
    {name : 'Rudi', score : 80},
    {name : 'Dira', score : 100}
];

let highest = studentScore[0];

for (let i = 1; i < studentScore.length; i++) {
    if (studentScore[i].score > highest.score) {
        highest = studentScore[i];
    }
}

console.log("Siswa dengan nilai tertinggi:");
console.log("Nama: " + highest.name);
console.log("Nilai: " + highest.score);