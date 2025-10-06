let studentData = {
    name: "Andi",
    javaScore: 80,
    pythonScore: 100,
    jsScore: 80,
    infoStudent: function(){
        return(
            "Name: " + this.name + "\n" +
            "Java Score: " + this.javaScore + "\n" +
            "Python Score: " + this.pythonScore + "\n" +
            "JS Score: " + this.jsScore
        );
    }
}

studentData.idNumber = "1102020";
console.log(studentData);