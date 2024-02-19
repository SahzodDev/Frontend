

const dayToday = "Tuesday";

switch (dayToday) {
    case "Monday":
        console.log("Color is gray.");
        break;
    case "Tuesday":
        console.log("Color is brown.");
        break;
    case "Wednesday":
        console.log("Color is yellow.");
        break;
    case "Thursday":
        console.log("Color is black.");
        break;
    case "Friday":
        console.log("Color is pink.");
        break;
    case "Saturday":
        console.log("Color is orange.");
        break;
    case "Sunday":
        console.log("Color is green.");
        break;
    default:
        throw new Error("Day is not recognized.");
}

switch (dayToday) {
    case "Monday":
        
    case "Tuesday":
        
    case "Wednesday":
        
    case "Thursday":
        
    case "Friday":
        console.log("Color is gray.");
        break;
    case "Saturday":
        
    case "Sunday":
        console.log("Color is orange.");
        break;
    default:
        throw new Error("Day is not recognized.");
}


switch (num) {
    case 0: {
        let message = "Too small"; 
        break;
    }
    case 10: {
        let message = "small";
        break;
    }  // aynı değişken tekrar tekrar initialize edilecekse scope içinde de switch case yazılaiblir.
    default:
        console.log("----");
}


if (num) {
    let smt = 123; // dışarıdan erişilemez.
}
