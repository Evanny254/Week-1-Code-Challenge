function studentGrade(marks) {
    if (marks > 79 && marks <=100){
    return "A";
    //Marks between 80 and 100
    }else if (marks >= 60 && marks <= 79) {
        return "B";
    //Marks between 60 and 79 
    }else if (marks >= 50 && marks <= 59){
        return "C";
    //Marks between 50 and 59 
    }else if (marks >= 40 && marks <= 49) {
    return "D";
     //Marks between 40 and 59 
    }else if (marks <= 39 && marks >= 0) {
        return "E";
    //Marks between 0 and 39 
    }else {
        return "invalid grade";
    //Marks not defined, not within the range 0-100 
    }
} 