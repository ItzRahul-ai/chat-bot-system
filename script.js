function chat() {
    // variable declear
    var input = document.getElementById("input").value;
    let finalInput = input.toLowerCase();
    let botPrint = document.getElementById("botPrint");
    let userPrint = document.getElementById("userPrint");

    // main function
    if (finalInput == "hi" || finalInput == "hii" || finalInput == "hey" || finalInput == "heyy") {
        userPrint.innerText = input;
        botPrint.innerText = "Hello! How can i help you?";
    }
    else if (finalInput == "good morning" || finalInput == "gm" || finalInput == "goodmorning" || finalInput == "gdm") {
        userPrint.innerText = input;
        botPrint.innerText = "Hello! good morning.";
    }
    else if (finalInput == "good night" || finalInput == "gn" || finalInput == "g98" || finalInput == "gdn") {
        userPrint.innerText = input;
        botPrint.innerText = "Hello! good night.";
    }
    else if (finalInput == "what you do for me" || finalInput == "what you do" || finalInput == "you can do for me" || finalInput == "what you will do") {
        userPrint.innerText = input;
        botPrint.innerText = "I will do everything for you, like that: chat with you, easy your work, something else.";
    }
     else if(finalInput=="how are you" || finalInput=="are you" || finalInput=="are you fine" || finalInput=="evrything is fine") {
        userPrint.innerText = input;
        botPrint.innerText = "Everything is fine, what's you ?";
    }
     else if(finalInput=="fine" || finalInput=="ok" || finalInput=="thik" || finalInput=="all right") {
        userPrint.innerText = input;
        botPrint.innerText = "So what's your plan today?";
    }
    else if(finalInput=="what's your name?" || finalInput=="your name" || finalInput=="your name is" || finalInput=="What's your name") {
        userPrint.innerText = input;
        botPrint.innerText = "I am a chat bot, I was made for chat with you, and i will do make esay your life.";
    }
     else if(finalInput=="tell me a joke." || finalInput=="joke" || finalInput=="jokes sonao" || finalInput=="ask ke a joke") {
        userPrint.innerText = input;
        botPrint.innerText = "Sorry! now i can't do this but i learn it as soon as possiable.";
    }
     else if(finalInput=="whats the weather today?" || finalInput=="todays wether" || finalInput=="whats the weather today" || finalInput=="today weather") {
        userPrint.innerText = input;
        botPrint.innerText = "Sorry! now i can't do this but i learn it as soon as possiable.";
    }
     else if(finalInput=="set a reminder" || finalInput=="reminder" || finalInput=="i want to set a reminder") {
        userPrint.innerText = input;
        botPrint.innerText = "Sorry! now i can't do this but i learn it as soon as possiable.";
    }
     else if(finalInput=="who is cheif minister of india" || finalInput=="indias cheif minister" ) {
        userPrint.innerText = input;
        botPrint.innerText = "Cheif minister of india is- Mamta Banarjee.";
    }
     else if(finalInput=="who is the prime minister of india" || finalInput=="indias prime minister" || finalInput=="prime minister of india") {
        userPrint.innerText = input;
        botPrint.innerText = "Cheif minister of india is- Narendra Damodardas Modi.";
    }
     else if(finalInput=="trancelate" || finalInput=="i want to trancelate" || finalInput=="you can fo trancelate laguages") {
        userPrint.innerText = input;
        botPrint.innerText = "Afcourse! what you can trancelate?, English to Hindi, English to Spanish, English to Bengali.";
    }
      else if(finalInput=="english to hindi" || finalInput=="to hindi" || finalInput=="hindi") {
             userPrint.innerText = input;
        botPrint.innerText = "Sorry! now i can't do this but i learn it as soon as possiable.";
         }
        else if(finalInput=="english to Bengali" || finalInput=="to Bengali" || finalInput=="Bengali") {
             userPrint.innerText = input;
        botPrint.innerText = "Sorry! now i can't do this but i learn it as soon as possiable.";
         }
         else if(finalInput=="english to Spanish" || finalInput=="to Spanish" || finalInput=="Spanish") {
             userPrint.innerText = input;
        botPrint.innerText = "Sorry! now i can't do this but i learn it as soon as possiable.";
         }
    
         else if(finalInput=="dip" || finalInput=="rahul" || finalInput=="sandip" || finalInput=="sndp" || finalInput=="surjo" || finalInput=="sagar" || finalInput=="sonu") {
            userPrint.innerText = input;
                   botPrint.innerText = "Hey '"+input+"' what's up! Are you fine?"
         }

    else {
        userPrint.innerText = input;
        botPrint.innerText = "Invalid input, Please try anyway.";
    }
}