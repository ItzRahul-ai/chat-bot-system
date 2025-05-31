// chat bot part
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
    else if (finalInput == "how are you" || finalInput == "are you" || finalInput == "are you fine" || finalInput == "evrything is fine") {
        userPrint.innerText = input;
        botPrint.innerText = "Everything is fine, what's you ?";
    }
    else if (finalInput == "fine" || finalInput == "ok" || finalInput == "thik" || finalInput == "all right") {
        userPrint.innerText = input;
        botPrint.innerText = "So what's your plan today?";
    }
    else if (finalInput == "what's your name?" || finalInput == "your name" || finalInput == "your name is" || finalInput == "whats your name" || finalInput == "what is your name") {
        userPrint.innerText = input;
        botPrint.innerText = "I am a chat bot, I was made for chat with you, and i will do make esay your life.";
    }
    else if (finalInput == "whats the weather today?" || finalInput == "todays wether" || finalInput == "whats the weather today" || finalInput == "today weather") {
        userPrint.innerText = input;
        botPrint.innerText = "Sorry! now i can't do this but i learn it as soon as possiable.";
    }
    else if (finalInput == "set a reminder" || finalInput == "reminder" || finalInput == "i want to set a reminder") {
        userPrint.innerText = input;
        botPrint.innerText = "Sorry! now i can't do this but i learn it as soon as possiable.";
    }
    else if (finalInput == "who is cheif minister of india" || finalInput == "indias cheif minister") {
        userPrint.innerText = input;
        botPrint.innerText = "Cheif minister of india is- Mamta Banarjee.";
    }
    else if (finalInput == "dip" || finalInput == "rahul" || finalInput == "sandip" || finalInput == "sndp" || finalInput == "surjo" || finalInput == "sagar" || finalInput == "sonu") {
        userPrint.innerText = input;
        botPrint.innerText = "Hey '" + input + "' what's up! Are you fine?"
    }
    else if (finalInput == "how are you" || finalInput == "how r u" || finalInput == "how you doing" || finalInput == "how is it going") {
        botPrint.innerText = "I'm great, thank you! How about you?";
        userPrint.innerText = input;
    }
    else if (finalInput == "what's your name" || finalInput == "your name" || finalInput == "who are you" || finalInput == "may i know your name") {
        botPrint.innerText = "I'm your chatbot assistant.";
        userPrint.innerText = input;
    }
    else if (finalInput == "what can you do" || finalInput == "what do you do" || finalInput == "how can you help me") {
        botPrint.innerText = "I can help you with chatting, answering questions, and soon even more!";
        userPrint.innerText = input;
    }
    else if (finalInput == "tell me a joke" || finalInput == "joke" || finalInput == "funny joke" || finalInput == "make me laugh") {
        botPrint.innerText = "Why don’t skeletons fight each other? They don’t have the guts!";
        userPrint.innerText = input;
    }
    else if (finalInput == "what time is it" || finalInput == "current time" || finalInput == "time please" || finalInput == "tell me time") {
        botPrint.innerText = "The current time is: " + new Date().toLocaleTimeString();
        userPrint.innerText = input;
    }
    else if (finalInput == "what day is today" || finalInput == "what is the date" || finalInput == "today date" || finalInput == "tell me date") {
        botPrint.innerText = "Today's date is: " + new Date().toLocaleDateString();
        userPrint.innerText = input;
    }
    else if (finalInput == "where are you from" || finalInput == "your location" || finalInput == "where do you live") {
        botPrint.innerText = "I live in the cloud! 🌐";
        userPrint.innerText = input;
    }
    else if (finalInput == "thank you" || finalInput == "thanks" || finalInput == "thx" || finalInput == "thank you so much") {
        botPrint.innerText = "You're welcome!";
        userPrint.innerText = input;
    }
    else if (finalInput == "bye" || finalInput == "goodbye" || finalInput == "see you" || finalInput == "talk to you later") {
        botPrint.innerText = "Goodbye! Have a great day!";
        userPrint.innerText = input;
    }
    else if (finalInput == "time" || finalInput == "what time is it" || finalInput == "current time" || finalInput == "show time" || finalInput == "tell me the time") {
        botPrint.innerText = "Current time is: " + new Date().toLocaleTimeString();
        userPrint.innerText = input;
    }
    else if (finalInput == "date" || finalInput == "today date" || finalInput == "what is the date" || finalInput == "current date" || finalInput == "date today") {
        botPrint.innerText = "Today's date is: " + new Date().toLocaleDateString();
        userPrint.innerText = input;
    }
    else if (finalInput == "joke" || finalInput == "tell me a joke" || finalInput == "make me laugh" || finalInput == "funny joke" || finalInput == "say a joke") {
        botPrint.innerText = "Why don’t skeletons fight each other? They don’t have the guts!";
        userPrint.innerText = input;
    }
    else if (finalInput == "what can you do" || finalInput == "your functions" || finalInput == "help me" || finalInput == "how can you help" || finalInput == "your skills" || finalInput == "what do you do") {
        botPrint.innerText = "I can chat, help answer questions, and support basic tasks!";
        userPrint.innerText = input;
    }
    else if (finalInput == "how are you" || finalInput == "are you okay" || finalInput == "how do you feel" || finalInput == "you fine" || finalInput == "what's up") {
        botPrint.innerText = "I'm doing great, thanks! How about you?";
        userPrint.innerText = input;
    }
    else if (finalInput == "capital of india" || finalInput == "what is capital of india" || finalInput == "indian capital") {
        botPrint.innerText = "The capital of India is New Delhi.";
        userPrint.innerText = input;
    }
    else if (finalInput == "prime minister of india" || finalInput == "who is pm of india" || finalInput == "india's prime minister" || finalInput == "current pm") {
        botPrint.innerText = "The Prime Minister of India is Narendra Modi.";
        userPrint.innerText = input;
    }
    else if (finalInput == "i love food" || finalInput == "food lover" || finalInput == "i like food" || finalInput == "do you like food" || finalInput == "favorite food") {
        botPrint.innerText = "I love food chats! What's your favorite dish?";
        userPrint.innerText = input;
    }
    else if (finalInput == "do you like pizza" || finalInput == "is pizza good" || finalInput == "pizza fan" || finalInput == "tell me about pizza") {
        botPrint.innerText = "Pizza is a classic! Do you like it too?";
        userPrint.innerText = input;
    }
    else if (finalInput == "what should i eat" || finalInput == "suggest me food" || finalInput == "what to eat" || finalInput == "best dinner") {
        botPrint.innerText = "I can't eat, but I'd recommend pasta!";
        userPrint.innerText = input;
    }
    else if (finalInput == "what is ai" || finalInput == "tell me about ai" || finalInput == "explain artificial intelligence" || finalInput == "ai meaning") {
        botPrint.innerText = "AI is fascinating. It's helping the world evolve!";
        userPrint.innerText = input;
    }
    else if (finalInput == "what is chatgpt" || finalInput == "who made you" || finalInput == "chatgpt info" || finalInput == "chatgpt developer") {
        botPrint.innerText = "ChatGPT is a language model developed by OpenAI.";
        userPrint.innerText = input;
    }
    else if (finalInput == "latest iphone" || finalInput == "iphone news" || finalInput == "new iphone" || finalInput == "apple iphone") {
        botPrint.innerText = "The latest iPhone has amazing camera features.";
        userPrint.innerText = input;
    }
    else if (finalInput == "best place to travel" || finalInput == "suggest travel destination" || finalInput == "where to travel" || finalInput == "romantic places") {
        botPrint.innerText = "Paris is known as the city of love!";
        userPrint.innerText = input;
    }
    else if (finalInput == "do you travel" || finalInput == "have you travelled" || finalInput == "do you go on trips") {
        botPrint.innerText = "I can't travel, but I'd love to hear your travel stories!";
        userPrint.innerText = input;
    }
    else if (finalInput == "travel in india" || finalInput == "places in india" || finalInput == "indian travel spots") {
        botPrint.innerText = "India has incredible diversity and beautiful places to visit.";
        userPrint.innerText = input;
    }
    else if (finalInput == "what is love" || finalInput == "define love" || finalInput == "meaning of love" || finalInput == "explain love") {
        botPrint.innerText = "Love is a beautiful feeling. Tell me more!";
        userPrint.innerText = input;
    }
    else if (finalInput == "favorite fruit" || finalInput == "best fruit" || finalInput == "fruit you like" || finalInput == "healthy fruits") {
        botPrint.innerText = "I love mangoes, they’re delicious!";
        userPrint.innerText = input;
    }
    else if (finalInput == "what is blockchain" || finalInput == "explain blockchain" || finalInput == "blockchain meaning" || finalInput == "how does blockchain work") {
        botPrint.innerText = "Blockchain is a decentralized ledger technology used in cryptocurrencies.";
        userPrint.innerText = input;
    }
    else if (finalInput == "top tourist spots" || finalInput == "best places to visit" || finalInput == "popular travel destinations") {
        botPrint.innerText = "Some great spots include Bali, Paris, and New York!";
        userPrint.innerText = input;
    }
    else if (finalInput == "how to propose" || finalInput == "love advice" || finalInput == "relationship tips") {
        botPrint.innerText = "Be honest and heartfelt, that always works best.";
        userPrint.innerText = input;
    }
    else if (finalInput == "best programming language" || finalInput == "learn programming" || finalInput == "coding languages") {
        botPrint.innerText = "Python is great for beginners and powerful enough for pros!";
        userPrint.innerText = input;
    }
    else if (finalInput == "football" || finalInput == "soccer" || finalInput == "favorite sport") {
        botPrint.innerText = "Football is exciting! Do you have a favorite team?";
        userPrint.innerText = input;
    }
    else if (finalInput == "best movie" || finalInput == "movie recommendations" || finalInput == "good movies") {
        botPrint.innerText = "You should watch Inception or The Shawshank Redemption!";
        userPrint.innerText = input;
    }
    else if (finalInput == "how to stay fit" || finalInput == "fitness tips" || finalInput == "workout ideas") {
        botPrint.innerText = "Regular exercise and a balanced diet are key!";
        userPrint.innerText = input;
    }
    else if (finalInput == "motivational quotes" || finalInput == "inspire me" || finalInput == "words of encouragement") {
        botPrint.innerText = "Believe you can and you're halfway there.";
        userPrint.innerText = input;
    }
    else if (finalInput == "what is cloud computing" || finalInput == "cloud computing meaning" || finalInput == "explain cloud computing") {
        botPrint.innerText = "Cloud computing allows you to store and access data over the internet.";
        userPrint.innerText = input;
    }
    else if (finalInput == "best restaurants" || finalInput == "good restaurants" || finalInput == "restaurant near me" || finalInput == "recommend food places") {
        botPrint.innerText = "I suggest trying local food joints for the best flavors!";
        userPrint.innerText = input;
    }
    else if (finalInput == "latest tech news" || finalInput == "tech updates" || finalInput == "new technology") {
        botPrint.innerText = "Tech is evolving fast with AI and VR leading the way!";
        userPrint.innerText = input;
    }
    else if (finalInput == "travel tips" || finalInput == "how to travel cheap" || finalInput == "budget travel") {
        botPrint.innerText = "Plan ahead, book early, and travel off-season to save money.";
        userPrint.innerText = input;
    }
    else if (finalInput == "how to say i love you" || finalInput == "love confession tips" || finalInput == "express love") {
        botPrint.innerText = "Speak from the heart, and be genuine.";
        userPrint.innerText = input;
    }
    else if (finalInput == "programming help" || finalInput == "code help" || finalInput == "debugging tips") {
        botPrint.innerText = "Check your syntax carefully and use online resources!";
        userPrint.innerText = input;
    }
    else if (finalInput == "best sports player" || finalInput == "top athletes" || finalInput == "famous sportspeople") {
        botPrint.innerText = "Legends like Messi and Serena Williams inspire millions.";
        userPrint.innerText = input;
    }
    else if (finalInput == "new movies" || finalInput == "movie release" || finalInput == "upcoming movies") {
        botPrint.innerText = "Keep an eye out for the latest blockbuster releases this year!";
        userPrint.innerText = input;
    }
    else if (finalInput == "daily workout" || finalInput == "fitness routine" || finalInput == "exercise plan") {
        botPrint.innerText = "Consistency is key—start with 30 minutes a day!";
        userPrint.innerText = input;
    }
    else if (finalInput == "quotes about success" || finalInput == "success sayings" || finalInput == "how to succeed") {
        botPrint.innerText = "Success is the sum of small efforts repeated day in and day out.";
        userPrint.innerText = input;
    }
    else if (finalInput == "what is cryptocurrency" || finalInput == "crypto meaning" || finalInput == "explain bitcoin") {
        botPrint.innerText = "Cryptocurrency is a digital currency secured by cryptography.";
        userPrint.innerText = input;
    }
    else if (finalInput == "best desserts" || finalInput == "sweet food" || finalInput == "favorite dessert") {
        botPrint.innerText = "Chocolate cake and ice cream are classic favorites!";
        userPrint.innerText = input;
    }
    else if (finalInput == "how does 5g work" || finalInput == "what is 5g" || finalInput == "5g technology") {
        botPrint.innerText = "5G is the fifth generation of mobile networks, offering faster speeds and lower latency.";
        userPrint.innerText = input;
    }
    else if (finalInput == "top travel apps" || finalInput == "best travel apps" || finalInput == "travel planning apps") {
        botPrint.innerText = "Apps like Google Maps, Airbnb, and TripIt make travel easy and fun!";
        userPrint.innerText = input;
    }
    else if (finalInput == "how to impress crush" || finalInput == "dating tips" || finalInput == "how to get a girlfriend") {
        botPrint.innerText = "Be yourself, listen well, and show genuine interest.";
        userPrint.innerText = input;
    }
    else if (finalInput == "learn java" || finalInput == "java tutorials" || finalInput == "how to code in java") {
        botPrint.innerText = "Start with basics like variables, loops, and objects. Practice a lot!";
        userPrint.innerText = input;
    }
    else if (finalInput == "olympics" || finalInput == "sports events" || finalInput == "international sports") {
        botPrint.innerText = "The Olympics gather athletes worldwide every four years to compete!";
        userPrint.innerText = input;
    }
    else if (finalInput == "best action movies" || finalInput == "action movie suggestions" || finalInput == "top action films") {
        botPrint.innerText = "Try movies like John Wick, Mad Max, and The Dark Knight.";
        userPrint.innerText = input;
    }
    else if (finalInput == "yoga benefits" || finalInput == "why do yoga" || finalInput == "yoga for beginners") {
        botPrint.innerText = "Yoga improves flexibility, strength, and mental calmness.";
        userPrint.innerText = input;
    }
    else if (finalInput == "how to stay motivated" || finalInput == "motivation tips" || finalInput == "keep me motivated") {
        botPrint.innerText = "Set clear goals, celebrate small wins, and keep a positive mindset.";
        userPrint.innerText = input;
    }
    else if (finalInput == "what is machine learning" || finalInput == "explain machine learning" || finalInput == "ml meaning") {
        botPrint.innerText = "Machine learning lets computers learn from data without explicit programming.";
        userPrint.innerText = input;
    }
    else if (finalInput == "healthy snacks" || finalInput == "snack ideas" || finalInput == "best snacks") {
        botPrint.innerText = "Try nuts, fruits, or yogurt for a healthy snack!";
        userPrint.innerText = input;
    }
    else if (finalInput == "what is iot" || finalInput == "internet of things" || finalInput == "iot meaning") {
        botPrint.innerText = "IoT connects everyday devices to the internet for smarter living.";
        userPrint.innerText = input;
    }
    else if (finalInput == "cheap flights" || finalInput == "flight deals" || finalInput == "best flight booking sites") {
        botPrint.innerText = "Websites like Skyscanner and Kayak help you find great deals.";
        userPrint.innerText = input;
    }
    else if (finalInput == "how to say sorry" || finalInput == "apology tips" || finalInput == "best way to apologize") {
        botPrint.innerText = "Be sincere and honest, and take responsibility.";
        userPrint.innerText = input;
    }
    else if (finalInput == "best python tutorials" || finalInput == "learn python" || finalInput == "python coding help") {
        botPrint.innerText = "Check out Codecademy or freeCodeCamp for beginner-friendly lessons.";
        userPrint.innerText = input;
    }
    else if (finalInput == "famous athletes" || finalInput == "best sports stars" || finalInput == "sports legends") {
        botPrint.innerText = "Legends like Michael Jordan and Usain Bolt inspire many.";
        userPrint.innerText = input;
    }
    else if (finalInput == "latest movies" || finalInput == "new movie releases" || finalInput == "what movies to watch") {
        botPrint.innerText = "Check out streaming platforms for the latest hits.";
        userPrint.innerText = input;
    }
    else if (finalInput == "home workout" || finalInput == "exercise at home" || finalInput == "fitness without gym") {
        botPrint.innerText = "Bodyweight exercises like push-ups and squats are effective.";
        userPrint.innerText = input;
    }
    else if (finalInput == "inspirational quotes" || finalInput == "quotes to live by" || finalInput == "daily motivation") {
        botPrint.innerText = "‘The only limit to our realization of tomorrow is our doubts of today.’";
        userPrint.innerText = input;
    }
    else if (finalInput == "what is virtual reality" || finalInput == "vr meaning" || finalInput == "explain vr") {
        botPrint.innerText = "VR immerses you in a simulated environment using special gear.";
        userPrint.innerText = input;
    }
    else if (finalInput == "best coffee" || finalInput == "coffee types" || finalInput == "coffee recommendations") {
        botPrint.innerText = "Espresso and cold brew are popular choices among coffee lovers.";
        userPrint.innerText = input;
    }
    else if (finalInput == "what is ai" || finalInput == "artificial intelligence meaning" || finalInput == "explain ai") {
        botPrint.innerText = "AI is technology that simulates human intelligence processes.";
        userPrint.innerText = input;
    }
    else if (finalInput == "top travel destinations 2025" || finalInput == "popular vacation spots" || finalInput == "best places to travel") {
        botPrint.innerText = "Japan, Italy, and New Zealand are trending travel destinations.";
        userPrint.innerText = input;
    }
    else if (finalInput == "how to say i love you in different languages" || finalInput == "love in french" || finalInput == "love phrases") {
        botPrint.innerText = "'Je t’aime' means 'I love you' in French.";
        userPrint.innerText = input;
    }
    else if (finalInput == "best coding websites" || finalInput == "learn coding online" || finalInput == "coding practice sites") {
        botPrint.innerText = "Try sites like LeetCode, HackerRank, and freeCodeCamp.";
        userPrint.innerText = input;
    }
    else if (finalInput == "world cup winners" || finalInput == "fifa champions" || finalInput == "best soccer teams") {
        botPrint.innerText = "Brazil and Germany have won multiple FIFA World Cups.";
        userPrint.innerText = input;
    }
    else if (finalInput == "best comedy movies" || finalInput == "funny films" || finalInput == "comedy movie suggestions") {
        botPrint.innerText = "You might enjoy 'The Hangover' or 'Superbad'.";
        userPrint.innerText = input;
    }
    else if (finalInput == "benefits of meditation" || finalInput == "how to meditate" || finalInput == "meditation tips") {
        botPrint.innerText = "Meditation reduces stress and improves concentration.";
        userPrint.innerText = input;
    }
    else if (finalInput == "how to stay positive" || finalInput == "positivity tips" || finalInput == "stay motivated daily") {
        botPrint.innerText = "Focus on gratitude and surround yourself with positive people.";
        userPrint.innerText = input;
    }
    else if (finalInput == "what is cryptocurrency mining" || finalInput == "crypto mining meaning" || finalInput == "how to mine bitcoin") {
        botPrint.innerText = "Mining validates crypto transactions and creates new coins.";
        userPrint.innerText = input;
    }
    else if (finalInput == "best pizza toppings" || finalInput == "favorite pizza" || finalInput == "pizza ideas") {
        botPrint.innerText = "Pepperoni, mushrooms, and extra cheese are always a hit!";
    }
    else if (finalInput == "what is augmented reality" || finalInput == "ar meaning" || finalInput == "explain ar") {
        botPrint.innerText = "AR overlays digital content onto the real world using devices like smartphones.";
    }
    else if (finalInput == "cheap hotel booking" || finalInput == "best hotel deals" || finalInput == "hotel booking tips") {
        botPrint.innerText = "Use websites like Booking.com or Agoda for the best prices.";
    }
    else if (finalInput == "how to maintain a relationship" || finalInput == "relationship advice" || finalInput == "keep love alive") {
        botPrint.innerText = "Communication and trust are the foundation of a strong relationship.";
    }
    else if (finalInput == "learn javascript" || finalInput == "javascript tutorials" || finalInput == "js coding help") {
        botPrint.innerText = "Start with understanding variables, functions, and events.";
    }
    else if (finalInput == "best basketball players" || finalInput == "top nba stars" || finalInput == "famous basketball players") {
        botPrint.innerText = "Michael Jordan and LeBron James are basketball legends.";
    }
    else if (finalInput == "latest netflix shows" || finalInput == "popular tv series" || finalInput == "best streaming shows") {
        botPrint.innerText = "Try watching 'Stranger Things' or 'The Crown'.";
    }
    else if (finalInput == "daily stretching routine" || finalInput == "simple stretches" || finalInput == "morning stretch tips") {
        botPrint.innerText = "Stretch your neck, arms, and legs gently every morning.";
    }
    else if (finalInput == "famous motivational speakers" || finalInput == "who inspires you" || finalInput == "best self help gurus") {
        botPrint.innerText = "Tony Robbins and Brene Brown inspire millions worldwide.";
    }
    else if (finalInput == "how to protect online privacy" || finalInput == "online security tips" || finalInput == "internet safety") {
        botPrint.innerText = "Use strong passwords, enable two-factor authentication, and beware of phishing.";
    }
    else if (finalInput == "best sushi places" || finalInput == "sushi restaurants" || finalInput == "where to eat sushi") {
        botPrint.innerText = "Try local Japanese restaurants or specialty sushi bars!";
    }
    else if (finalInput == "how to improve wifi speed" || finalInput == "boost internet speed" || finalInput == "slow wifi fix") {
        botPrint.innerText = "Restart your router, limit connected devices, and move closer to the router.";
    }
    else if (finalInput == "top tourist spots in europe" || finalInput == "best places to visit europe" || finalInput == "europe travel guide") {
        botPrint.innerText = "Paris, Rome, Barcelona, and Amsterdam are must-see cities.";
    }
    else if (finalInput == "how to apologize sincerely" || finalInput == "best apology" || finalInput == "say sorry properly") {
        botPrint.innerText = "Be honest, admit your mistake, and express regret clearly.";
    }
    else if (finalInput == "learn python programming" || finalInput == "python basics" || finalInput == "python for beginners") {
        botPrint.innerText = "Start with syntax, variables, and simple programs.";
    }
    else if (finalInput == "best football players" || finalInput == "top soccer stars" || finalInput == "famous footballers") {
        botPrint.innerText = "Messi, Ronaldo, and Neymar are among the greatest.";
    }
    else if (finalInput == "new netflix movies" || finalInput == "popular netflix films" || finalInput == "netflix recommendations") {
        botPrint.innerText = "'Extraction' and 'The Irishman' are popular choices.";
    }
    else if (finalInput == "daily meditation tips" || finalInput == "how to meditate daily" || finalInput == "meditation routine") {
        botPrint.innerText = "Start with 5 minutes a day focusing on your breath.";
    }
    else if (finalInput == "how to stay motivated at work" || finalInput == "work motivation" || finalInput == "productivity tips") {
        botPrint.innerText = "Set clear goals, take breaks, and reward yourself.";
    }
    else if (finalInput == "what is blockchain" || finalInput == "blockchain meaning" || finalInput == "explain blockchain") {
        botPrint.innerText = "Blockchain is a secure, decentralized ledger of transactions.";
    }
    else if (finalInput == "best vegan recipes" || finalInput == "vegan meal ideas" || finalInput == "easy vegan food") {
        botPrint.innerText = "Try chickpea curry, quinoa salad, and tofu stir fry.";
    }
    else if (finalInput == "how to fix slow computer" || finalInput == "pc running slow" || finalInput == "speed up laptop") {
        botPrint.innerText = "Clear cache, uninstall unused apps, and scan for viruses.";
    }
    else if (finalInput == "top beach destinations" || finalInput == "best beaches to visit" || finalInput == "beach vacation spots") {
        botPrint.innerText = "Maldives, Bali, and Hawaii are perfect beach escapes.";
    }
    else if (finalInput == "how to confess love" || finalInput == "love confession ideas" || finalInput == "express feelings") {
        botPrint.innerText = "Be honest, choose the right moment, and speak from your heart.";
    }
    else if (finalInput == "learn html and css" || finalInput == "web development basics" || finalInput == "how to make website") {
        botPrint.innerText = "Start with HTML structure and CSS for styling.";
    }
    else if (finalInput == "best cricket players" || finalInput == "famous cricketers" || finalInput == "top cricket stars") {
        botPrint.innerText = "Sachin Tendulkar and Virat Kohli are legends in cricket.";
    }
    else if (finalInput == "popular tv shows 2025" || finalInput == "best series to watch" || finalInput == "top tv shows") {
        botPrint.innerText = "'The Witcher' and 'Bridgerton' are trending shows.";
    }
    else if (finalInput == "how to do yoga at home" || finalInput == "yoga exercises" || finalInput == "yoga routine for beginners") {
        botPrint.innerText = "Start with simple stretches and breathing exercises.";
    }
    else if (finalInput == "quotes about happiness" || finalInput == "inspirational happiness quotes" || finalInput == "sayings on joy") {
        botPrint.innerText = "'Happiness is not by chance, but by choice.'";
    }
    else if (finalInput == "what is cloud computing" || finalInput == "cloud services" || finalInput == "explain cloud computing") {
        botPrint.innerText = "Cloud computing lets you use internet-based servers for storage and processing.";
    }
    else if (finalInput == "best smoothie recipes" || finalInput == "healthy smoothies" || finalInput == "smoothie ideas") {
        botPrint.innerText = "Try blending banana, spinach, and almond milk for a tasty smoothie.";
    }
    else if (finalInput == "how to clear cache" || finalInput == "clear browser data" || finalInput == "delete cache") {
        botPrint.innerText = "Go to browser settings and clear browsing data and cache.";
    }
    else if (finalInput == "top mountain destinations" || finalInput == "best mountains to visit" || finalInput == "mountain trekking spots") {
        botPrint.innerText = "The Alps, Himalayas, and Rockies offer amazing views.";
    }
    else if (finalInput == "how to maintain friendship" || finalInput == "friendship advice" || finalInput == "keep friends happy") {
        botPrint.innerText = "Communicate often, be honest, and support each other.";
    }
    else if (finalInput == "learn data science" || finalInput == "data science tutorials" || finalInput == "how to become data scientist") {
        botPrint.innerText = "Start with Python, statistics, and machine learning basics.";
    }
    else if (finalInput == "best tennis players" || finalInput == "top tennis stars" || finalInput == "famous tennis players") {
        botPrint.innerText = "Roger Federer and Serena Williams are tennis icons.";
    }
    else if (finalInput == "popular documentaries" || finalInput == "best documentaries" || finalInput == "must watch documentaries") {
        botPrint.innerText = "'The Last Dance' and 'Our Planet' are highly recommended.";
    }
    else if (finalInput == "how to do cardio at home" || finalInput == "home cardio workout" || finalInput == "cardio exercises") {
        botPrint.innerText = "Try jumping jacks, high knees, and burpees.";
    }
    else if (finalInput == "motivational speeches" || finalInput == "best motivational talks" || finalInput == "inspiring speeches") {
        botPrint.innerText = "Look up speeches by Eric Thomas and Les Brown.";
    }
    else if (finalInput == "what is nft" || finalInput == "nft meaning" || finalInput == "explain nft") {
        botPrint.innerText = "NFTs are unique digital assets stored on the blockchain.";
    }
    else if (finalInput == "best salad recipes" || finalInput == "healthy salads" || finalInput == "easy salad ideas") {
        botPrint.innerText = "Try Caesar salad or Greek salad with fresh veggies.";
    }
    else if (finalInput == "how to speed up android" || finalInput == "android slow fix" || finalInput == "make android faster") {
        botPrint.innerText = "Clear app cache, uninstall unused apps, and restart your phone.";
    }
    else if (finalInput == "top city breaks" || finalInput == "best cities for weekend" || finalInput == "city travel ideas") {
        botPrint.innerText = "Visit cities like New York, Paris, or Tokyo for exciting weekend trips.";
    }
    else if (finalInput == "how to get over breakup" || finalInput == "breakup advice" || finalInput == "healing from breakup") {
        botPrint.innerText = "Give yourself time, stay active, and seek support from friends.";
    }
    else if (finalInput == "learn machine learning" || finalInput == "machine learning tutorials" || finalInput == "machine learning basics") {
        botPrint.innerText = "Start with Python, datasets, and simple algorithms.";
    }
    else if (finalInput == "best soccer teams" || finalInput == "top football clubs" || finalInput == "famous soccer clubs") {
        botPrint.innerText = "FC Barcelona, Real Madrid, and Manchester United are popular clubs.";
    }
    else if (finalInput == "best thriller movies" || finalInput == "thriller film suggestions" || finalInput == "top thriller movies") {
        botPrint.innerText = "'Gone Girl' and 'Shutter Island' are great thriller movies.";
    }
    else if (finalInput == "how to meditate for anxiety" || finalInput == "meditation for stress" || finalInput == "calm anxiety meditation") {
        botPrint.innerText = "Focus on deep breathing and mindfulness to reduce anxiety.";
    }
    else if (finalInput == "quotes about friendship" || finalInput == "friendship sayings" || finalInput == "friends quotes") {
        botPrint.innerText = "'A friend is someone who knows all about you and still loves you.'";
    }
    else if (finalInput == "what is 3d printing" || finalInput == "3d printing meaning" || finalInput == "explain 3d printing") {
        botPrint.innerText = "3D printing creates physical objects layer by layer from digital models.";
    }
    else if (finalInput == "best pasta recipes" || finalInput == "easy pasta dishes" || finalInput == "pasta ideas") {
        botPrint.innerText = "Try spaghetti carbonara or penne arrabbiata for delicious pasta.";
    }
    else if (finalInput == "how to fix wifi not working" || finalInput == "wifi issues" || finalInput == "internet connection problems") {
        botPrint.innerText = "Restart your router, check cables, and contact your ISP if needed.";
    }
    else if (finalInput == "top wildlife safaris" || finalInput == "best safari destinations" || finalInput == "wildlife tours") {
        botPrint.innerText = "Explore safaris in Kenya, South Africa, or Tanzania for amazing wildlife.";
    }
    else if (finalInput == "how to express gratitude" || finalInput == "ways to say thank you" || finalInput == "gratitude quotes") {
        botPrint.innerText = "Express thanks sincerely and often, and appreciate the little things.";
    }
    else if (finalInput == "learn css grid" || finalInput == "css grid tutorial" || finalInput == "how to use css grid") {
        botPrint.innerText = "CSS Grid helps you create flexible web layouts easily.";
    }
    else if (finalInput == "best pizza toppings" || finalInput == "popular pizza flavors" || finalInput == "pizza ideas") {
        botPrint.innerText = "Try pepperoni, mushrooms, olives, or classic margherita.";
    }
    else if (finalInput == "how to backup iphone" || finalInput == "iphone backup guide" || finalInput == "save iphone data") {
        botPrint.innerText = "Use iCloud or connect to iTunes for a full backup.";
    }
    else if (finalInput == "top asian countries to visit" || finalInput == "best travel in asia" || finalInput == "asia travel guide") {
        botPrint.innerText = "Japan, Thailand, Vietnam, and Indonesia are popular destinations.";
    }
    else if (finalInput == "how to say i love you" || finalInput == "love confession tips" || finalInput == "express love") {
        botPrint.innerText = "Be honest, genuine, and choose the right moment.";
    }
    else if (finalInput == "learn javascript basics" || finalInput == "javascript for beginners" || finalInput == "start with javascript") {
        botPrint.innerText = "Begin with variables, functions, and simple DOM manipulation.";
    }
    else if (finalInput == "famous basketball players" || finalInput == "top nba stars" || finalInput == "best basketball players") {
        botPrint.innerText = "Michael Jordan, LeBron James, and Kobe Bryant are legends.";
    }
    else if (finalInput == "best comedy movies" || finalInput == "funny movies to watch" || finalInput == "comedy film recommendations") {
        botPrint.innerText = "'Superbad' and 'The Hangover' are hilarious comedies.";
    }
    else if (finalInput == "daily stretching routine" || finalInput == "stretch exercises" || finalInput == "simple stretches") {
        botPrint.innerText = "Include hamstring, quad, and shoulder stretches.";
    }
    else if (finalInput == "how to stay focused" || finalInput == "focus tips" || finalInput == "increase concentration") {
        botPrint.innerText = "Minimize distractions, set clear goals, and take breaks.";
    }
    else if (finalInput == "what is cryptocurrency" || finalInput == "cryptocurrency explained" || finalInput == "crypto basics") {
        botPrint.innerText = "Cryptocurrency is digital money secured by cryptography.";
    }
    else if (finalInput == "best smoothie bowl recipes" || finalInput == "smoothie bowl ideas" || finalInput == "healthy smoothie bowls") {
        botPrint.innerText = "Blend acai, banana, and berries, topped with granola.";
    }
    else if (finalInput == "how to delete facebook account" || finalInput == "remove facebook profile" || finalInput == "delete fb") {
        botPrint.innerText = "Go to Facebook settings > Your Facebook Information > Delete Account.";
    }
    else if (finalInput == "top camping spots" || finalInput == "best camping locations" || finalInput == "camping destinations") {
        botPrint.innerText = "Try Yosemite, Banff, or the Grand Canyon.";
    }
    else if (finalInput == "how to build self confidence" || finalInput == "increase confidence" || finalInput == "boost self esteem") {
        botPrint.innerText = "Practice positive self-talk and set achievable goals.";
    }
    else if (finalInput == "learn react js" || finalInput == "react tutorial" || finalInput == "react for beginners") {
        botPrint.innerText = "Start with components, props, and state management.";
    }
    else if (finalInput == "best swimmers in the world" || finalInput == "top olympic swimmers" || finalInput == "famous swimmers") {
        botPrint.innerText = "Michael Phelps is the most decorated Olympic swimmer.";
    }
    else if (finalInput == "popular action movies" || finalInput == "best action films" || finalInput == "action movie recommendations") {
        botPrint.innerText = "'John Wick' and 'Mad Max: Fury Road' are thrilling action movies.";
    }
    else if (finalInput == "how to do pilates at home" || finalInput == "pilates exercises" || finalInput == "beginner pilates") {
        botPrint.innerText = "Start with core strengthening and breathing control.";
    }
    else if (finalInput == "quotes about success" || finalInput == "motivational success quotes" || finalInput == "success sayings") {
        botPrint.innerText = "'Success usually comes to those who are too busy to be looking for it.'";
    }
    else if (finalInput == "what is artificial intelligence" || finalInput == "ai meaning" || finalInput == "explain ai") {
        botPrint.innerText = "AI refers to machines that can perform tasks requiring human intelligence.";
    }
    else if (finalInput == "best cake recipes" || finalInput == "easy cake ideas" || finalInput == "homemade cake recipes") {
        botPrint.innerText = "Try chocolate lava cake or classic vanilla sponge.";
    }
    else if (finalInput == "how to fix iphone battery" || finalInput == "iphone battery drain fix" || finalInput == "iphone battery tips") {
        botPrint.innerText = "Lower screen brightness and disable background app refresh.";
    }
    else if (finalInput == "top european cities" || finalInput == "best cities to visit europe" || finalInput == "europe travel ideas") {
        botPrint.innerText = "Visit Paris, Rome, and Prague for a memorable trip.";
    }
    else if (finalInput == "how to deal with stress" || finalInput == "stress relief tips" || finalInput == "manage stress") {
        botPrint.innerText = "Practice relaxation, exercise, and talk to friends.";
    }
    else if (finalInput == "learn sql basics" || finalInput == "sql tutorial" || finalInput == "database query language") {
        botPrint.innerText = "Start with SELECT statements and filtering data.";
    }
    else if (finalInput == "best baseball players" || finalInput == "top mlb stars" || finalInput == "famous baseball players") {
        botPrint.innerText = "Babe Ruth and Derek Jeter are baseball legends.";
    }
    else if (finalInput == "popular reality shows" || finalInput == "best reality tv" || finalInput == "top reality shows") {
        botPrint.innerText = "'Survivor' and 'The Voice' are very popular reality shows.";
    }
    else if (finalInput == "how to do home workout" || finalInput == "workout exercises at home" || finalInput == "home fitness routine") {
        botPrint.innerText = "Try bodyweight exercises like push-ups, squats, and planks.";
    }
    else if (finalInput == "motivational books" || finalInput == "best self help books" || finalInput == "inspirational books") {
        botPrint.innerText = "'The Power of Habit' and 'Atomic Habits' are great reads.";
    }
    else if (finalInput == "what is iot" || finalInput == "internet of things meaning" || finalInput == "explain iot") {
        botPrint.innerText = "IoT connects everyday objects to the internet for data exchange.";
    }
    else if (finalInput == "best burger recipes" || finalInput == "easy burger ideas" || finalInput == "homemade burger") {
        botPrint.innerText = "Try classic cheeseburger or spicy chicken burger.";
    }
    else if (finalInput == "how to fix slow mac" || finalInput == "mac running slow" || finalInput == "speed up macbook") {
        botPrint.innerText = "Clear cache, uninstall unused apps, and update macOS.";
    }
    else if (finalInput == "top island vacations" || finalInput == "best islands to visit" || finalInput == "island travel destinations") {
        botPrint.innerText = "Check out Bali, Maldives, or Seychelles.";
    }
    else if (finalInput == "how to be a good listener" || finalInput == "improve listening skills" || finalInput == "active listening tips") {
        botPrint.innerText = "Pay attention, avoid interrupting, and give feedback.";
    }
    else if (finalInput == "learn machine learning python" || finalInput == "python ml tutorial" || finalInput == "ml with python") {
        botPrint.innerText = "Use libraries like scikit-learn and TensorFlow to start.";
    }
    else if (finalInput == "best hockey players" || finalInput == "top nhl stars" || finalInput == "famous hockey players") {
        botPrint.innerText = "Wayne Gretzky and Sidney Crosby are hockey greats.";
    }
    else if (finalInput == "popular animated movies" || finalInput == "best cartoons" || finalInput == "top animated films") {
        botPrint.innerText = "'Toy Story' and 'Frozen' are fan favorites.";
    }
    else if (finalInput == "how to do pilates" || finalInput == "pilates exercises" || finalInput == "beginner pilates routine") {
        botPrint.innerText = "Focus on core and breathing techniques.";
    }
    else if (finalInput == "quotes about life" || finalInput == "inspirational life quotes" || finalInput == "life sayings") {
        botPrint.innerText = "'Life is what happens when you're busy making other plans.'";
    }
    else if (finalInput == "what is 5g technology" || finalInput == "5g explained" || finalInput == "5g network meaning") {
        botPrint.innerText = "5G is the next-gen wireless network for faster data speeds.";
    }
    else if (finalInput == "best chocolate desserts" || finalInput == "easy chocolate recipes" || finalInput == "chocolate ideas") {
        botPrint.innerText = "Try chocolate mousse or brownies.";
    }
    else if (finalInput == "how to reset android phone" || finalInput == "android factory reset" || finalInput == "reset android") {
        botPrint.innerText = "Go to Settings > System > Reset options > Factory reset.";
    }
    else if (finalInput == "top usa cities" || finalInput == "best cities to visit usa" || finalInput == "usa travel guide") {
        botPrint.innerText = "New York, Los Angeles, and Chicago are top picks.";
    }
    else if (finalInput == "how to reduce anxiety" || finalInput == "anxiety coping tips" || finalInput == "manage anxiety") {
        botPrint.innerText = "Practice mindfulness and breathing exercises.";
    }
    else if (finalInput == "learn css animations" || finalInput == "css animation tutorial" || finalInput == "how to do css animations") {
        botPrint.innerText = "Use @keyframes and animation properties.";
    }
    else if (finalInput == "best golf players" || finalInput == "top golf stars" || finalInput == "famous golfers") {
        botPrint.innerText = "Tiger Woods and Jack Nicklaus are golfing legends.";
    }
    else if (finalInput == "popular cooking shows" || finalInput == "best cooking tv" || finalInput == "cooking show recommendations") {
        botPrint.innerText = "'MasterChef' and 'The Great British Bake Off' are popular.";
    }
    else if (finalInput == "how to do hiit workout" || finalInput == "hiit exercises" || finalInput == "high intensity interval training") {
        botPrint.innerText = "Alternate intense bursts of activity with short rests.";
    }
    else if (finalInput == "motivational quotes for work" || finalInput == "work motivation quotes" || finalInput == "inspirational work quotes") {
        botPrint.innerText = "'Don’t watch the clock; do what it does. Keep going.'";
    }
    else if (finalInput == "what is blockchain" || finalInput == "blockchain technology" || finalInput == "explain blockchain") {
        botPrint.innerText = "Blockchain is a decentralized ledger for secure transactions.";
    }
    else if (finalInput == "best salad recipes" || finalInput == "easy salad ideas" || finalInput == "healthy salads") {
        botPrint.innerText = "Try Caesar salad or quinoa and kale salad.";
    }
    else if (finalInput == "how to update windows 10" || finalInput == "windows update guide" || finalInput == "update pc") {
        botPrint.innerText = "Go to Settings > Update & Security > Windows Update.";
    }
    else if (finalInput == "top beaches in the world" || finalInput == "best beaches" || finalInput == "famous beaches") {
        botPrint.innerText = "Check out Bora Bora, Maldives, and Maui.";
    }
    else if (finalInput == "how to improve memory" || finalInput == "memory enhancement tips" || finalInput == "boost brain power") {
        botPrint.innerText = "Practice puzzles, sleep well, and stay mentally active.";
    }
    else if (finalInput == "learn python data science" || finalInput == "python for data science tutorial" || finalInput == "data science basics") {
        botPrint.innerText = "Focus on libraries like pandas, numpy, and matplotlib.";
    }
    else if (finalInput == "best tennis players" || finalInput == "top tennis stars" || finalInput == "famous tennis players") {
        botPrint.innerText = "Roger Federer, Serena Williams, and Rafael Nadal are greats.";
    }
    else if (finalInput == "popular fantasy movies" || finalInput == "best fantasy films" || finalInput == "fantasy movie recommendations") {
        botPrint.innerText = "'Harry Potter' and 'Lord of the Rings' are classic fantasies.";
    }
    else if (finalInput == "how to meditate" || finalInput == "meditation techniques" || finalInput == "beginner meditation") {
        botPrint.innerText = "Start with deep breathing and focus on the present moment.";
    }
    else if (finalInput == "quotes about friendship" || finalInput == "friendship sayings" || finalInput == "inspirational friendship quotes") {
        botPrint.innerText = "'A real friend is one who walks in when the rest walk out.'";
    }
    else if (finalInput == "what is cloud computing" || finalInput == "cloud computing explained" || finalInput == "cloud services meaning") {
        botPrint.innerText = "Cloud computing delivers computing services over the internet.";
    }
    else if (finalInput == "best pasta recipes" || finalInput == "easy pasta ideas" || finalInput == "homemade pasta dishes") {
        botPrint.innerText = "Try spaghetti carbonara or penne arrabiata.";
    }
    else if (finalInput == "how to clean laptop screen" || finalInput == "laptop screen cleaning tips" || finalInput == "clean computer screen") {
        botPrint.innerText = "Use a microfiber cloth with gentle cleaner, avoid sprays directly.";
    }
    else if (finalInput == "top mountain hikes" || finalInput == "best hiking trails" || finalInput == "mountain trekking spots") {
        botPrint.innerText = "Try the Inca Trail, Appalachian Trail, or Mont Blanc hike.";
    }
    else if (finalInput == "how to improve communication skills" || finalInput == "communication tips" || finalInput == "better communication") {
        botPrint.innerText = "Practice active listening and clear expression.";
    }
    else if (finalInput == "learn node js" || finalInput == "node js tutorial" || finalInput == "node js for beginners") {
        botPrint.innerText = "Start with setting up Node environment and creating servers.";
    }
    else if (finalInput == "best soccer players" || finalInput == "top football stars" || finalInput == "famous soccer players") {
        botPrint.innerText = "Lionel Messi and Cristiano Ronaldo are top footballers.";
    }
    else if (finalInput == "popular drama series" || finalInput == "best drama shows" || finalInput == "top drama tv shows") {
        botPrint.innerText = "'Breaking Bad' and 'Game of Thrones' are highly acclaimed.";
    }
    else if (finalInput == "how to do yoga at home" || finalInput == "yoga poses beginners" || finalInput == "home yoga routine") {
        botPrint.innerText = "Try downward dog, child’s pose, and warrior poses.";
    }
    else if (finalInput == "motivational speeches" || finalInput == "best motivational videos" || finalInput == "inspirational speeches") {
        botPrint.innerText = "Listen to speeches by Tony Robbins or Les Brown.";
    }
    else if (finalInput == "what is augmented reality" || finalInput == "ar meaning" || finalInput == "augmented reality explained") {
        botPrint.innerText = "AR overlays digital content onto the real world.";
    }
    else if (finalInput == "best smoothie recipes" || finalInput == "healthy smoothie ideas" || finalInput == "smoothie making tips") {
        botPrint.innerText = "Combine fruits, yogurt, and a bit of honey.";
    }
    else if (finalInput == "best coffee types" || finalInput == "popular coffee flavors" || finalInput == "types of coffee") {
        botPrint.innerText = "Try espresso, latte, cappuccino, or cold brew.";
    }
    else if (finalInput == "how to clear cache" || finalInput == "clear browser cache" || finalInput == "delete cache") {
        botPrint.innerText = "Go to browser settings and clear browsing data.";
    }
    else if (finalInput == "top tourist attractions" || finalInput == "best places to visit" || finalInput == "famous tourist spots") {
        botPrint.innerText = "Eiffel Tower, Great Wall of China, Machu Picchu are must-see places.";
    }
    else if (finalInput == "how to express love" || finalInput == "ways to say i love you" || finalInput == "love messages") {
        botPrint.innerText = "Use heartfelt words, small gifts, or spend quality time.";
    }
    else if (finalInput == "learn python basics" || finalInput == "python programming for beginners" || finalInput == "start python coding") {
        botPrint.innerText = "Begin with variables, loops, and functions.";
    }
    else if (finalInput == "famous football players" || finalInput == "top soccer stars" || finalInput == "best footballers") {
        botPrint.innerText = "Messi, Ronaldo, Neymar are some of the best footballers.";
    }
    else if (finalInput == "best horror movies" || finalInput == "scary movie recommendations" || finalInput == "top horror films") {
        botPrint.innerText = "'The Conjuring' and 'It' are top horror movies.";
    }
    else if (finalInput == "how to do cardio workout" || finalInput == "cardio exercises" || finalInput == "best cardio routine") {
        botPrint.innerText = "Try running, jumping jacks, or cycling.";
    }
    else if (finalInput == "motivational quotes for students" || finalInput == "inspirational quotes for study" || finalInput == "study motivation") {
        botPrint.innerText = "'Success is the sum of small efforts, repeated day in and day out.'";
    }
    else if (finalInput == "what is virtual reality" || finalInput == "vr meaning" || finalInput == "explain virtual reality") {
        botPrint.innerText = "VR immerses you in a simulated environment via headsets.";
    }
    else if (finalInput == "best dessert recipes" || finalInput == "easy dessert ideas" || finalInput == "homemade sweets") {
        botPrint.innerText = "Try chocolate cake, cheesecake, or fruit tart.";
    }
    else if (finalInput == "how to protect privacy online" || finalInput == "online safety tips" || finalInput == "internet security") {
        botPrint.innerText = "Use strong passwords, avoid suspicious links, and enable 2FA.";
    }
    else if (finalInput == "top music festivals" || finalInput == "best music events" || finalInput == "popular concerts") {
        botPrint.innerText = "Coachella, Glastonbury, and Tomorrowland are popular festivals.";
    }
    else if (finalInput == "how to deal with heartbreak" || finalInput == "coping with breakups" || finalInput == "moving on from love") {
        botPrint.innerText = "Focus on self-care, talk with friends, and give yourself time.";
    }
    else if (finalInput == "learn html css" || finalInput == "web development basics" || finalInput == "start coding website") {
        botPrint.innerText = "Start with HTML tags and CSS styling.";
    }
    else if (finalInput == "best cricketers" || finalInput == "top cricket players" || finalInput == "famous cricket stars") {
        botPrint.innerText = "Sachin Tendulkar, Virat Kohli, and M.S. Dhoni are legends.";
    }
    else if (finalInput == "popular animated series" || finalInput == "best cartoons" || finalInput == "top animated shows") {
        botPrint.innerText = "'Rick and Morty' and 'Avatar: The Last Airbender' are favorites.";
    }
    else if (finalInput == "how to improve posture" || finalInput == "posture correction tips" || finalInput == "good posture exercises") {
        botPrint.innerText = "Keep back straight, shoulders relaxed, and strengthen core muscles.";
    }
    else if (finalInput == "quotes about happiness" || finalInput == "happiness sayings" || finalInput == "inspirational happiness quotes") {
        botPrint.innerText = "'Happiness depends upon ourselves.' – Aristotle";
    }
    else if (finalInput == "what is cloud storage" || finalInput == "cloud storage meaning" || finalInput == "explain cloud storage") {
        botPrint.innerText = "It lets you save data on remote servers accessible online.";
    }
    else if (finalInput == "best vegan recipes" || finalInput == "easy vegan meals" || finalInput == "plant based recipes") {
        botPrint.innerText = "Try lentil soup, vegan tacos, or quinoa salad.";
    }
    else if (finalInput == "how to speed up internet" || finalInput == "internet slow fix" || finalInput == "boost wifi speed") {
        botPrint.innerText = "Restart router, clear cache, and limit connected devices.";
    }
    else if (finalInput == "top national parks" || finalInput == "best nature reserves" || finalInput == "famous parks") {
        botPrint.innerText = "Yellowstone, Banff, and Kruger are beautiful national parks.";
    }
    else if (finalInput == "how to overcome fear" || finalInput == "fear management tips" || finalInput == "conquer fears") {
        botPrint.innerText = "Face your fears gradually and practice deep breathing.";
    }
    else if (finalInput == "learn java basics" || finalInput == "java programming for beginners" || finalInput == "start java coding") {
        botPrint.innerText = "Begin with variables, loops, and object-oriented concepts.";
    }
    else if (finalInput == "best basketball teams" || finalInput == "top nba teams" || finalInput == "famous basketball clubs") {
        botPrint.innerText = "Lakers, Bulls, and Celtics have historic NBA success.";
    }
    else if (finalInput == "popular reality tv shows" || finalInput == "best reality programs" || finalInput == "top reality shows") {
        botPrint.innerText = "'The Bachelor' and 'Survivor' are widely watched.";
    }
    else if (finalInput == "how to do strength training" || finalInput == "strength exercises" || finalInput == "build muscle workout") {
        botPrint.innerText = "Focus on weight lifting, resistance bands, and proper form.";
    }
    else if (finalInput == "motivational quotes for work" || finalInput == "work inspiration" || finalInput == "stay motivated at job") {
        botPrint.innerText = "'Success is not final, failure is not fatal: It is the courage to continue that counts.'";
    }
    else if (finalInput == "what is machine learning" || finalInput == "machine learning explained" || finalInput == "ml definition") {
        botPrint.innerText = "ML is AI that learns from data without explicit programming.";
    }
    else if (finalInput == "best soup recipes" || finalInput == "easy soup ideas" || finalInput == "homemade soups") {
        botPrint.innerText = "Try tomato soup, chicken noodle, or butternut squash soup.";
    }
    else if (finalInput == "how to reset iphone" || finalInput == "iphone factory reset" || finalInput == "reset apple phone") {
        botPrint.innerText = "Go to Settings > General > Reset > Erase All Content and Settings.";
    }
    else if (finalInput == "top city skylines" || finalInput == "best urban views" || finalInput == "famous cityscapes") {
        botPrint.innerText = "New York, Dubai, and Hong Kong have iconic skylines.";
    }
    else if (finalInput == "how to stay motivated" || finalInput == "motivation tips" || finalInput == "keep motivation high") {
        botPrint.innerText = "Set clear goals, track progress, and reward yourself.";
    }
    else if (finalInput == "learn c++ basics" || finalInput == "c++ programming for beginners" || finalInput == "start c++ coding") {
        botPrint.innerText = "Begin with variables, loops, and pointers.";
    }
    else if (finalInput == "best soccer teams" || finalInput == "top football clubs" || finalInput == "famous soccer teams") {
        botPrint.innerText = "FC Barcelona, Real Madrid, and Manchester United are famous.";
    }
    else if (finalInput == "popular science shows" || finalInput == "best science documentaries" || finalInput == "top science programs") {
        botPrint.innerText = "'Cosmos' and 'Planet Earth' are top science shows.";
    }
    else if (finalInput == "how to do meditation" || finalInput == "meditation techniques" || finalInput == "meditation for beginners") {
        botPrint.innerText = "Start with deep breathing and focus on your senses.";
    }
    else if (finalInput == "quotes about courage" || finalInput == "courage sayings" || finalInput == "inspirational courage quotes") {
        botPrint.innerText = "'Courage is resistance to fear, mastery of fear—not absence of fear.'";
    }
    else if (finalInput == "what is internet of things" || finalInput == "iot meaning" || finalInput == "explain iot") {
        botPrint.innerText = "IoT connects devices to the internet to communicate and share data.";
    }
    else if (finalInput == "best sandwich recipes" || finalInput == "easy sandwich ideas" || finalInput == "homemade sandwiches") {
        botPrint.innerText = "Try club sandwich, grilled cheese, or BLT.";
    }
    else if (finalInput == "how to protect from viruses" || finalInput == "computer virus protection" || finalInput == "anti virus tips") {
        botPrint.innerText = "Install antivirus, avoid suspicious downloads, and update software.";
    }
    else if (finalInput == "top comedy movies" || finalInput == "best funny films" || finalInput == "popular comedies") {
        botPrint.innerText = "'Superbad' and 'The Hangover' are hilarious comedies.";
    }
    else if (finalInput == "how to cook rice" || finalInput == "rice cooking tips" || finalInput == "perfect rice recipe") {
        botPrint.innerText = "Use 1:2 rice to water ratio and cook covered on low heat.";
    }
    else if (finalInput == "learn sql basics" || finalInput == "sql tutorial for beginners" || finalInput == "start sql coding") {
        botPrint.innerText = "Begin with SELECT statements and database basics.";
    }
    else if (finalInput == "best winter destinations" || finalInput == "top winter vacation spots" || finalInput == "cold weather travel") {
        botPrint.innerText = "Try Switzerland, Iceland, or Canada for winter holidays.";
    }
    else if (finalInput == "how to improve sleep" || finalInput == "better sleep tips" || finalInput == "sleep hygiene") {
        botPrint.innerText = "Maintain a schedule, avoid screens, and keep room dark.";
    }
    else if (finalInput == "learn javascript basics" || finalInput == "javascript for beginners" || finalInput == "start javascript coding") {
        botPrint.innerText = "Start with variables, functions, and events.";
    }
    else if (finalInput == "best romantic movies" || finalInput == "top love films" || finalInput == "popular romance movies") {
        botPrint.innerText = "'The Notebook' and 'Pride & Prejudice' are classic romances.";
    }
    else if (finalInput == "how to boost immune system" || finalInput == "immune system tips" || finalInput == "stay healthy") {
        botPrint.innerText = "Eat healthy, exercise, and get enough sleep.";
    }
    else if (finalInput == "what is artificial intelligence" || finalInput == "ai meaning" || finalInput == "explain ai") {
        botPrint.innerText = "AI is machines performing tasks that require human intelligence.";
    }
    else if (finalInput == "best breakfast recipes" || finalInput == "easy breakfast ideas" || finalInput == "healthy breakfast") {
        botPrint.innerText = "Try oatmeal, smoothies, or avocado toast.";
    }
    else if (finalInput == "how to learn guitar" || finalInput == "guitar lessons" || finalInput == "beginner guitar tips") {
        botPrint.innerText = "Start with basic chords and practice daily.";
    }
    else if (finalInput == "top historical places" || finalInput == "best historical sites" || finalInput == "famous history landmarks") {
        botPrint.innerText = "The Colosseum, Taj Mahal, and Great Pyramids are iconic.";
    }
    else if (finalInput == "how to reduce stress" || finalInput == "stress management tips" || finalInput == "relaxation techniques") {
        botPrint.innerText = "Try meditation, exercise, and deep breathing.";
    }
    else if (finalInput == "learn react js" || finalInput == "react tutorial" || finalInput == "start react coding") {
        botPrint.innerText = "Begin with components, props, and state management.";
    }
    else if (finalInput == "best video games" || finalInput == "top gaming titles" || finalInput == "popular games") {
        botPrint.innerText = "'The Legend of Zelda' and 'Minecraft' are favorites.";
    }
    else if (finalInput == "how to make pizza" || finalInput == "pizza recipe" || finalInput == "homemade pizza") {
        botPrint.innerText = "Prepare dough, add sauce, cheese, toppings, and bake.";
    }
    else if (finalInput == "top motivational speakers" || finalInput == "best self help speakers" || finalInput == "famous motivational people") {
        botPrint.innerText = "Tony Robbins and Les Brown are inspiring speakers.";
    }
    else if (finalInput == "how to write resume" || finalInput == "resume tips" || finalInput == "job application resume") {
        botPrint.innerText = "Include your skills, experience, and tailor to job description.";
    }
    else if (finalInput == "best workout apps" || finalInput == "top fitness apps" || finalInput == "exercise apps") {
        botPrint.innerText = "Try MyFitnessPal, Nike Training Club, or Fitbit.";
    }
    else if (finalInput == "how to learn spanish" || finalInput == "spanish language basics" || finalInput == "start spanish lessons") {
        botPrint.innerText = "Begin with common phrases, vocabulary, and practice daily.";
    }
    else if (finalInput == "what is cryptocurrency" || finalInput == "crypto meaning" || finalInput == "explain cryptocurrency") {
        botPrint.innerText = "Cryptocurrency is digital currency secured by cryptography.";
    }
    else if (finalInput == "best ways to save money" || finalInput == "money saving tips" || finalInput == "personal finance advice") {
        botPrint.innerText = "Create budget, cut unnecessary expenses, and invest wisely.";
    }
    else if (finalInput == "how to get rid of acne" || finalInput == "acne treatment tips" || finalInput == "clear skin advice") {
        botPrint.innerText = "Keep skin clean, use suitable products, and consult dermatologist.";
    }
    else if (finalInput == "learn data structures" || finalInput == "data structure basics" || finalInput == "start learning algorithms") {
        botPrint.innerText = "Focus on arrays, linked lists, stacks, and queues.";
    }
    else if (finalInput == "best books to read" || finalInput == "top novels" || finalInput == "must read books") {
        botPrint.innerText = "'To Kill a Mockingbird' and '1984' are timeless classics.";
    }
    else if (finalInput == "how to bake cake" || finalInput == "cake baking tips" || finalInput == "easy cake recipes") {
        botPrint.innerText = "Mix flour, sugar, eggs, bake at 350°F for 30 minutes.";
    }
    else if (finalInput == "top comedy actors" || finalInput == "famous comedians" || finalInput == "best comedy stars") {
        botPrint.innerText = "Jim Carrey, Robin Williams, and Kevin Hart are hilarious.";
    }
    else if (finalInput == "how to do laundry" || finalInput == "laundry tips" || finalInput == "washing clothes") {
        botPrint.innerText = "Separate colors, use right detergent, and choose proper cycle.";
    }
    else if (finalInput == "learn photoshop basics" || finalInput == "photoshop tutorial" || finalInput == "start photoshop editing") {
        botPrint.innerText = "Start with layers, selections, and basic photo retouching.";
    }
    else if (finalInput == "best camping spots" || finalInput == "top camping locations" || finalInput == "popular camping sites") {
        botPrint.innerText = "Yosemite, Banff, and Zion National Park are great camping spots.";
    }
    else if (finalInput == "how to build self confidence" || finalInput == "self confidence tips" || finalInput == "boost confidence") {
        botPrint.innerText = "Practice positive self-talk and set small goals.";
    }
    else if (finalInput == "best pizza toppings" || finalInput == "popular pizza flavors" || finalInput == "pizza ideas") {
        botPrint.innerText = "Try pepperoni, mushrooms, olives, or pineapple.";
    }
    else if (finalInput == "how to update windows" || finalInput == "windows update steps" || finalInput == "check for windows updates") {
        botPrint.innerText = "Go to Settings > Update & Security > Windows Update.";
    }
    else if (finalInput == "top travel hacks" || finalInput == "travel tips" || finalInput == "travel advice") {
        botPrint.innerText = "Pack light, book early, and keep digital copies of documents.";
    }
    else if (finalInput == "how to say i love you" || finalInput == "ways to express love" || finalInput == "romantic phrases") {
        botPrint.innerText = "Use words, acts of kindness, and thoughtful surprises.";
    }
    else if (finalInput == "learn python advanced" || finalInput == "python decorators" || finalInput == "python generators") {
        botPrint.innerText = "Explore functions like decorators, generators, and context managers.";
    }
    else if (finalInput == "famous tennis players" || finalInput == "top tennis stars" || finalInput == "best tennis players") {
        botPrint.innerText = "Roger Federer, Serena Williams, and Rafael Nadal are legends.";
    }
    else if (finalInput == "best sci-fi movies" || finalInput == "science fiction films" || finalInput == "top sci-fi movies") {
        botPrint.innerText = "'Blade Runner' and 'Interstellar' are must-watch sci-fi.";
    }
    else if (finalInput == "how to lose weight fast" || finalInput == "quick weight loss tips" || finalInput == "fast fat loss") {
        botPrint.innerText = "Combine healthy diet, regular exercise, and hydration.";
    }
    else if (finalInput == "motivational quotes for athletes" || finalInput == "sports motivation" || finalInput == "athlete quotes") {
        botPrint.innerText = "'Hard work beats talent when talent doesn’t work hard.'";
    }
    else if (finalInput == "what is blockchain" || finalInput == "blockchain meaning" || finalInput == "explain blockchain") {
        botPrint.innerText = "Blockchain is a decentralized ledger for secure digital transactions.";
    }
    else if (finalInput == "best smoothie recipes" || finalInput == "easy smoothies" || finalInput == "healthy smoothie ideas") {
        botPrint.innerText = "Try banana, spinach, and berry smoothies.";
    }
    else if (finalInput == "how to fix wifi connection" || finalInput == "wifi troubleshooting" || finalInput == "wifi not working") {
        botPrint.innerText = "Restart router, check cables, and reset network settings.";
    }
    else if (finalInput == "top beach destinations" || finalInput == "best beaches to visit" || finalInput == "popular beach spots") {
        botPrint.innerText = "Maldives, Bali, and Bora Bora are beautiful beach destinations.";
    }
    else if (finalInput == "how to overcome anxiety" || finalInput == "anxiety relief tips" || finalInput == "manage anxiety") {
        botPrint.innerText = "Practice mindfulness, breathing exercises, and seek support.";
    }
    else if (finalInput == "learn java advanced" || finalInput == "java streams" || finalInput == "java concurrency") {
        botPrint.innerText = "Dive into streams API, multithreading, and lambda expressions.";
    }
    else if (finalInput == "best nba players" || finalInput == "top basketball stars" || finalInput == "basketball legends") {
        botPrint.innerText = "Michael Jordan, LeBron James, and Kobe Bryant are iconic players.";
    }
    else if (finalInput == "popular reality shows 2024" || finalInput == "top reality tv" || finalInput == "new reality shows") {
        botPrint.innerText = "'Love Island' and 'The Masked Singer' are trending.";
    }
    else if (finalInput == "how to do yoga at home" || finalInput == "yoga beginner tips" || finalInput == "home yoga routine") {
        botPrint.innerText = "Start with sun salutations and focus on breathing.";
    }
    else if (finalInput == "quotes about success" || finalInput == "success sayings" || finalInput == "inspirational success quotes") {
        botPrint.innerText = "'Success usually comes to those who are too busy to be looking for it.'";
    }
    else if (finalInput == "what is augmented reality" || finalInput == "ar meaning" || finalInput == "explain augmented reality") {
        botPrint.innerText = "AR overlays digital info onto the real world through devices.";
    }
    else if (finalInput == "best salad recipes" || finalInput == "healthy salads" || finalInput == "easy salad ideas") {
        botPrint.innerText = "Try Caesar, Greek, or quinoa salads.";
    }
    else if (finalInput == "how to protect personal data" || finalInput == "data privacy tips" || finalInput == "keep data safe") {
        botPrint.innerText = "Use strong passwords, avoid public wifi, and update software.";
    }
    else if (finalInput == "top standup comedians" || finalInput == "best comedy specials" || finalInput == "popular comedians") {
        botPrint.innerText = "Dave Chappelle and Ali Wong have great specials.";
    }
    else if (finalInput == "how to cook pasta" || finalInput == "pasta cooking tips" || finalInput == "perfect pasta recipe") {
        botPrint.innerText = "Boil water, add salt, cook pasta until al dente.";
    }
    else if (finalInput == "learn sql advanced" || finalInput == "sql joins tutorial" || finalInput == "complex sql queries") {
        botPrint.innerText = "Understand joins, subqueries, and indexes.";
    }
    else if (finalInput == "best spring travel spots" || finalInput == "top places to visit in spring" || finalInput == "spring vacation ideas") {
        botPrint.innerText = "Japan, Netherlands, and Washington D.C. bloom beautifully in spring.";
    }
    else if (finalInput == "how to improve focus" || finalInput == "focus tips" || finalInput == "stay focused") {
        botPrint.innerText = "Limit distractions, take breaks, and prioritize tasks.";
    }
    else if (finalInput == "learn javascript advanced" || finalInput == "js async await" || finalInput == "javascript promises") {
        botPrint.innerText = "Master asynchronous programming with promises and async/await.";
    }
    else if (finalInput == "best romantic songs" || finalInput == "love songs" || finalInput == "popular romantic music") {
        botPrint.innerText = "'Perfect' by Ed Sheeran and 'All of Me' by John Legend.";
    }
    else if (finalInput == "how to boost metabolism" || finalInput == "metabolism tips" || finalInput == "increase metabolism") {
        botPrint.innerText = "Exercise, eat protein-rich foods, and stay hydrated.";
    }
    else if (finalInput == "what is deep learning" || finalInput == "deep learning explained" || finalInput == "neural networks meaning") {
        botPrint.innerText = "Deep learning is a subset of AI using neural networks.";
    }
    else if (finalInput == "best brunch recipes" || finalInput == "easy brunch ideas" || finalInput == "popular brunch dishes") {
        botPrint.innerText = "Try avocado toast, pancakes, or eggs benedict.";
    }
    else if (finalInput == "how to learn piano" || finalInput == "piano lessons" || finalInput == "beginner piano tips") {
        botPrint.innerText = "Start with scales, simple songs, and practice regularly.";
    }
    else if (finalInput == "top world heritage sites" || finalInput == "best unesco sites" || finalInput == "famous heritage landmarks") {
        botPrint.innerText = "Machu Picchu, Petra, and Angkor Wat are UNESCO sites.";
    }
    else if (finalInput == "how to reduce anxiety" || finalInput == "anxiety coping strategies" || finalInput == "calm anxiety") {
        botPrint.innerText = "Try breathing exercises, mindfulness, and physical activity.";
    }
    else if (finalInput == "learn react advanced" || finalInput == "react hooks" || finalInput == "react state management") {
        botPrint.innerText = "Explore hooks like useState, useEffect, and context API.";
    }
    else if (finalInput == "best mobile games" || finalInput == "top android games" || finalInput == "popular iphone games") {
        botPrint.innerText = "'Among Us' and 'Call of Duty Mobile' are very popular.";
    }
    else if (finalInput == "how to make burgers" || finalInput == "burger recipe" || finalInput == "homemade burger") {
        botPrint.innerText = "Grill patties, add cheese, lettuce, tomato, and your favorite sauce.";
    }
    else if (finalInput == "top self help books" || finalInput == "best personal development books" || finalInput == "motivational books") {
        botPrint.innerText = "'Atomic Habits' and 'The Power of Now' are highly recommended.";
    }
    else if (finalInput == "how to write cover letter" || finalInput == "cover letter tips" || finalInput == "job application letter") {
        botPrint.innerText = "Highlight your skills, tailor to job, and keep it concise.";
    }
    else if (finalInput == "best fitness trackers" || finalInput == "top activity trackers" || finalInput == "fitness bands") {
        botPrint.innerText = "Fitbit, Garmin, and Apple Watch are popular trackers.";
    }
    else if (finalInput == "how to learn french" || finalInput == "french language basics" || finalInput == "start french lessons") {
        botPrint.innerText = "Learn common phrases, grammar, and practice speaking.";
    }
    else if (finalInput == "what is nft" || finalInput == "nft meaning" || finalInput == "explain nft") {
        botPrint.innerText = "NFTs are unique digital assets stored on blockchain.";
    }
    else if (finalInput == "best budgeting apps" || finalInput == "personal finance apps" || finalInput == "money management apps") {
        botPrint.innerText = "Try Mint, YNAB, or PocketGuard.";
    }
    else if (finalInput == "how to treat cold" || finalInput == "common cold remedies" || finalInput == "cure cold fast") {
        botPrint.innerText = "Rest, hydrate, and use over-the-counter medicines.";
    }
    else if (finalInput == "learn algorithms basics" || finalInput == "algorithms for beginners" || finalInput == "start algorithms study") {
        botPrint.innerText = "Focus on sorting, searching, and recursion.";
    }
    else if (finalInput == "best fiction books" || finalInput == "top novels to read" || finalInput == "popular fiction novels") {
        botPrint.innerText = "'Harry Potter' and 'The Great Gatsby' are favorites.";
    }
    else if (finalInput == "how to bake bread" || finalInput == "bread baking tips" || finalInput == "homemade bread recipe") {
        botPrint.innerText = "Mix flour, yeast, water; knead and let rise before baking.";
    }
    else if (finalInput == "top comedy tv shows" || finalInput == "best sitcoms" || finalInput == "funny tv series") {
        botPrint.innerText = "'Friends' and 'The Office' are classic sitcoms.";
    }
    else if (finalInput == "how to iron clothes" || finalInput == "clothes ironing tips" || finalInput == "best way to iron") {
        botPrint.innerText = "Set right temperature and iron in smooth motions.";
    }
    else if (finalInput == "learn illustrator basics" || finalInput == "adobe illustrator tutorial" || finalInput == "start illustrator") {
        botPrint.innerText = "Start with pen tool, shapes, and layers.";
    }
    else if (finalInput == "best hiking trails" || finalInput == "top hiking spots" || finalInput == "popular hiking routes") {
        botPrint.innerText = "Appalachian Trail, Inca Trail, and Pacific Crest Trail are famous.";
    }
    else if (finalInput == "how to improve memory" || finalInput == "memory tips" || finalInput == "boost brain power") {
        botPrint.innerText = "Get enough sleep, exercise, and practice memory games.";
    }
    else if (finalInput == "how to make coffee" || finalInput == "coffee recipe" || finalInput == "best way to brew coffee") {
        botPrint.innerText = "Use fresh beans, correct grind size, and clean equipment for best coffee.";
    }
    else if (finalInput == "what is cloud computing" || finalInput == "cloud computing meaning" || finalInput == "explain cloud computing") {
        botPrint.innerText = "Cloud computing is delivering computing services over the internet.";
    }
    else if (finalInput == "best countries to visit in summer" || finalInput == "summer travel destinations" || finalInput == "top summer vacation spots") {
        botPrint.innerText = "Consider Greece, Spain, or Canada for summer trips.";
    }
    else if (finalInput == "how to write a poem" || finalInput == "poetry tips" || finalInput == "start writing poems") {
        botPrint.innerText = "Focus on emotions, use imagery, and play with rhythm.";
    }
    else if (finalInput == "what is artificial intelligence" || finalInput == "ai meaning" || finalInput == "explain artificial intelligence") {
        botPrint.innerText = "AI is the simulation of human intelligence in machines.";
    }
    else if (finalInput == "best breakfast ideas" || finalInput == "healthy breakfast recipes" || finalInput == "easy breakfast meals") {
        botPrint.innerText = "Try oatmeal, smoothies, or eggs with toast.";
    }
    else if (finalInput == "how to protect yourself from viruses" || finalInput == "computer virus protection" || finalInput == "virus removal tips") {
        botPrint.innerText = "Use antivirus software, update regularly, avoid suspicious links.";
    }
    else if (finalInput == "top cities for nightlife" || finalInput == "best party cities" || finalInput == "popular nightlife spots") {
        botPrint.innerText = "New York, Berlin, and Ibiza are famous nightlife cities.";
    }
    else if (finalInput == "how to apologize properly" || finalInput == "apology tips" || finalInput == "best way to say sorry") {
        botPrint.innerText = "Be sincere, acknowledge mistake, and offer to make amends.";
    }
    else if (finalInput == "learn machine learning" || finalInput == "machine learning basics" || finalInput == "start machine learning") {
        botPrint.innerText = "Begin with linear regression, classification, and datasets.";
    }
    else if (finalInput == "best horror movies" || finalInput == "scary movies list" || finalInput == "top horror films") {
        botPrint.innerText = "'The Conjuring' and 'Hereditary' are popular horror movies.";
    }
    else if (finalInput == "how to grow plants indoors" || finalInput == "indoor gardening tips" || finalInput == "best indoor plants") {
        botPrint.innerText = "Use proper light, water moderately, and choose hardy plants.";
    }
    else if (finalInput == "how to save money" || finalInput == "money saving tips" || finalInput == "budgeting advice") {
        botPrint.innerText = "Track expenses, cut unnecessary costs, and set goals.";
    }
    else if (finalInput == "what is cryptocurrency" || finalInput == "cryptocurrency explained" || finalInput == "crypto meaning") {
        botPrint.innerText = "Cryptocurrency is digital currency using encryption for transactions.";
    }
    else if (finalInput == "best tv shows to binge" || finalInput == "popular tv series" || finalInput == "top shows to watch") {
        botPrint.innerText = "'Breaking Bad' and 'Stranger Things' are binge-worthy.";
    }
    else if (finalInput == "how to do meditation" || finalInput == "meditation for beginners" || finalInput == "start meditation") {
        botPrint.innerText = "Find a quiet place, focus on breathing, and relax your mind.";
    }
    else if (finalInput == "how to start a blog" || finalInput == "blogging tips" || finalInput == "create a blog") {
        botPrint.innerText = "Choose a niche, pick a platform, and start writing regularly.";
    }
    else if (finalInput == "best ways to study" || finalInput == "study tips" || finalInput == "how to focus while studying") {
        botPrint.innerText = "Use Pomodoro technique, take notes, and avoid distractions.";
    }
    else if (finalInput == "how to do a resume" || finalInput == "resume writing tips" || finalInput == "create resume") {
        botPrint.innerText = "Highlight skills, use clear format, and tailor to job.";
    }
    else if (finalInput == "best video games 2024" || finalInput == "popular games this year" || finalInput == "top new games") {
        botPrint.innerText = "'Elden Ring' and 'Hogwarts Legacy' are popular choices.";
    }
    else if (finalInput == "how to do makeup" || finalInput == "makeup tips for beginners" || finalInput == "easy makeup tutorials") {
        botPrint.innerText = "Start with foundation, concealer, and a simple eye look.";
    }
    else if (finalInput == "best apps for productivity" || finalInput == "productivity tools" || finalInput == "apps to stay focused") {
        botPrint.innerText = "Try Todoist, Notion, or Trello for productivity.";
    }
    else if (finalInput == "how to improve english" || finalInput == "learn english fast" || finalInput == "english speaking tips") {
        botPrint.innerText = "Practice daily, watch movies, and read books.";
    }
    else if (finalInput == "how to cook rice" || finalInput == "rice cooking tips" || finalInput == "best way to cook rice") {
        botPrint.innerText = "Rinse rice, add water, cook covered on low heat.";
    }
    else if (finalInput == "top fashion trends 2024" || finalInput == "latest fashion styles" || finalInput == "popular clothing trends") {
        botPrint.innerText = "Oversized blazers, neon colors, and retro styles are trending.";
    }
    else if (finalInput == "how to fix a bike" || finalInput == "bike repair tips" || finalInput == "basic bike maintenance") {
        botPrint.innerText = "Check tires, chain, brakes and lubricate moving parts.";
    }
    else if (finalInput == "best books for kids" || finalInput == "children's book recommendations" || finalInput == "popular kids books") {
        botPrint.innerText = "'Harry Potter' and 'The Cat in the Hat' are great reads.";
    }
    else if (finalInput == "how to learn guitar" || finalInput == "guitar lessons" || finalInput == "beginner guitar tips") {
        botPrint.innerText = "Start with chords, strumming patterns, and practice daily.";
    }
    else if (finalInput == "how to improve sleep" || finalInput == "better sleep tips" || finalInput == "sleep hygiene") {
        botPrint.innerText = "Maintain routine, avoid screens before bed, and relax.";
    }
    else if (finalInput == "best places to eat in new york" || finalInput == "famous nyc restaurants" || finalInput == "new york food spots") {
        botPrint.innerText = "Try Katz's Delicatessen, Le Bernardin, or Joe's Pizza.";
    }
    else if (finalInput == "how to build a website" || finalInput == "website building tips" || finalInput == "create a website") {
        botPrint.innerText = "Use platforms like WordPress or Wix, pick a domain.";
    }
    else if (finalInput == "top tech gadgets 2024" || finalInput == "latest gadgets" || finalInput == "popular tech devices") {
        botPrint.innerText = "Smartphones with foldable screens and AI assistants are popular.";
    }
    else if (finalInput == "how to become a better writer" || finalInput == "writing tips" || finalInput == "improve writing skills") {
        botPrint.innerText = "Read regularly, write daily, and get feedback.";
    }
    else if (finalInput == "best ways to stay healthy" || finalInput == "health tips" || finalInput == "healthy lifestyle advice") {
        botPrint.innerText = "Eat balanced diet, exercise regularly, and sleep well.";
    }
    else if (finalInput == "how to learn data science" || finalInput == "data science tutorials" || finalInput == "start data science") {
        botPrint.innerText = "Master statistics, python, and data visualization.";
    }
    else if (finalInput == "best dog breeds" || finalInput == "popular dog types" || finalInput == "friendly dog breeds") {
        botPrint.innerText = "Labrador, Golden Retriever, and Beagle are great choices.";
    }
    else if (finalInput == "how to bake a cake" || finalInput == "cake baking tips" || finalInput == "easy cake recipe") {
        botPrint.innerText = "Mix ingredients well, preheat oven, and bake at correct temp.";
    }
    else if (finalInput == "how to improve communication skills" || finalInput == "communication tips" || finalInput == "better speaking skills") {
        botPrint.innerText = "Practice active listening, be clear and concise.";
    }
    else if (finalInput == "best way to study math" || finalInput == "math study tips" || finalInput == "how to learn math") {
        botPrint.innerText = "Practice problems daily and understand concepts deeply.";
    }
    else if (finalInput == "how to start investing" || finalInput == "investing for beginners" || finalInput == "stock market tips") {
        botPrint.innerText = "Start with small amounts, diversify, and research companies.";
    }
    else if (finalInput == "best travel apps" || finalInput == "travel planning apps" || finalInput == "apps for travelers") {
        botPrint.innerText = "Use Google Maps, TripAdvisor, and Skyscanner.";
    }
    else if (finalInput == "how to do skincare" || finalInput == "skincare routine" || finalInput == "best skincare tips") {
        botPrint.innerText = "Cleanse, moisturize, and apply sunscreen daily.";
    }
    else if (finalInput == "what is virtual reality" || finalInput == "vr meaning" || finalInput == "explain virtual reality") {
        botPrint.innerText = "VR is an immersive digital experience via headsets.";
    }
    else if (finalInput == "best ways to reduce stress" || finalInput == "stress relief tips" || finalInput == "how to manage stress") {
        botPrint.innerText = "Exercise, meditate, and maintain social connections.";
    }
    else if (finalInput == "how to improve creativity" || finalInput == "creativity exercises" || finalInput == "boost creative thinking") {
        botPrint.innerText = "Try brainstorming, mind mapping, and exploring new hobbies.";
    }
    else if (finalInput == "best podcasts 2024" || finalInput == "popular podcasts" || finalInput == "top podcasts") {
        botPrint.innerText = "'The Daily' and 'Stuff You Should Know' are great podcasts.";
    }
    else if (finalInput == "how to learn photography" || finalInput == "photography tips" || finalInput == "beginner photography") {
        botPrint.innerText = "Understand lighting, composition, and practice shooting.";
    }
    else if (finalInput == "how to become a chef" || finalInput == "chef career tips" || finalInput == "culinary school advice") {
        botPrint.innerText = "Gain experience, attend culinary school, and practice recipes.";
    }
    else if (finalInput == "best documentaries" || finalInput == "top documentaries" || finalInput == "must watch documentaries") {
        botPrint.innerText = "'Planet Earth' and 'The Last Dance' are highly recommended.";
    }
    else if (finalInput == "how to learn meditation" || finalInput == "meditation benefits" || finalInput == "meditation techniques") {
        botPrint.innerText = "Start with guided sessions and focus on your breath.";
    }
    else if (finalInput == "best online courses" || finalInput == "free online classes" || finalInput == "top e-learning platforms") {
        botPrint.innerText = "Try Coursera, edX, and Udemy for quality courses.";
    }
    else if (finalInput == "how to start a business" || finalInput == "business startup tips" || finalInput == "entrepreneurship basics") {
        botPrint.innerText = "Create a plan, research market, and secure funding.";
    }
    else if (finalInput == "how to write a novel" || finalInput == "novel writing tips" || finalInput == "start writing a book") {
        botPrint.innerText = "Outline plot, develop characters, and write daily.";
    }
    else if (finalInput == "how to boil eggs" || finalInput == "egg boiling tips" || finalInput == "best way to cook eggs") {
        botPrint.innerText = "Boil eggs for 9-12 minutes depending on desired yolk firmness.";
    }
    else if (finalInput == "what is blockchain" || finalInput == "explain blockchain" || finalInput == "blockchain meaning") {
        botPrint.innerText = "Blockchain is a decentralized ledger for secure transactions.";
    }
    else if (finalInput == "top tourist places in india" || finalInput == "best places to visit india" || finalInput == "famous tourist spots india") {
        botPrint.innerText = "Taj Mahal, Jaipur, Kerala, and Goa are top destinations in India.";
    }
    else if (finalInput == "how to say i love you" || finalInput == "love confession tips" || finalInput == "express love") {
        botPrint.innerText = "Be honest and sincere; say it from your heart.";
    }
    else if (finalInput == "best workout routines" || finalInput == "exercise plans" || finalInput == "fitness workouts") {
        botPrint.innerText = "Combine cardio, strength training, and flexibility exercises.";
    }
    else if (finalInput == "how to start yoga" || finalInput == "yoga for beginners" || finalInput == "yoga poses") {
        botPrint.innerText = "Begin with basic poses like downward dog and child's pose.";
    }
    else if (finalInput == "what is machine learning" || finalInput == "machine learning definition" || finalInput == "explain ml") {
        botPrint.innerText = "Machine learning lets computers learn patterns from data.";
    }
    else if (finalInput == "best pizza toppings" || finalInput == "popular pizza ingredients" || finalInput == "favorite pizza toppings") {
        botPrint.innerText = "Pepperoni, mushrooms, and olives are popular pizza toppings.";
    }
    else if (finalInput == "how to improve memory" || finalInput == "memory tips" || finalInput == "increase brain power") {
        botPrint.innerText = "Get enough sleep, eat healthy, and practice brain exercises.";
    }
    else if (finalInput == "how to learn coding" || finalInput == "coding for beginners" || finalInput == "programming tips") {
        botPrint.innerText = "Start with Python or JavaScript and practice small projects.";
    }
    else if (finalInput == "best beaches in the world" || finalInput == "top beach destinations" || finalInput == "famous beaches") {
        botPrint.innerText = "Maldives, Bora Bora, and Maui are stunning beach spots.";
    }
    else if (finalInput == "how to deal with stress" || finalInput == "stress management tips" || finalInput == "relaxation techniques") {
        botPrint.innerText = "Try deep breathing, exercise, and take breaks.";
    }
    else if (finalInput == "best romantic movies" || finalInput == "top love films" || finalInput == "romantic film recommendations") {
        botPrint.innerText = "'The Notebook' and 'Pride & Prejudice' are classic romantic movies.";
    }
    else if (finalInput == "how to cook pasta" || finalInput == "pasta cooking tips" || finalInput == "best way to boil pasta") {
        botPrint.innerText = "Use plenty of salted water and cook until al dente.";
    }
    else if (finalInput == "what is augmented reality" || finalInput == "explain ar" || finalInput == "augmented reality meaning") {
        botPrint.innerText = "AR overlays digital info on the real world through devices.";
    }
    else if (finalInput == "how to improve public speaking" || finalInput == "public speaking tips" || finalInput == "speak confidently") {
        botPrint.innerText = "Practice, prepare well, and engage your audience.";
    }
    else if (finalInput == "best vegan recipes" || finalInput == "vegan food ideas" || finalInput == "easy vegan meals") {
        botPrint.innerText = "Try quinoa salad, chickpea curry, and roasted veggies.";
    }
    else if (finalInput == "how to learn spanish" || finalInput == "spanish learning tips" || finalInput == "best way to learn spanish") {
        botPrint.innerText = "Practice daily, use apps, and immerse yourself in the language.";
    }
    else if (finalInput == "how to create a youtube channel" || finalInput == "start youtube channel" || finalInput == "youtube tips for beginners") {
        botPrint.innerText = "Choose a niche, create content regularly, and engage viewers.";
    }
    else if (finalInput == "best smartphones 2025" || finalInput == "latest phone models" || finalInput == "top mobile phones") {
        botPrint.innerText = "Check out Apple iPhone 15 and Samsung Galaxy S25.";
    }
    else if (finalInput == "how to meditate daily" || finalInput == "daily meditation tips" || finalInput == "meditation routine") {
        botPrint.innerText = "Start with 5-10 mins daily focusing on breath and awareness.";
    }
    else if (finalInput == "how to do SEO" || finalInput == "seo tips" || finalInput == "search engine optimization") {
        botPrint.innerText = "Optimize keywords, create quality content, and build backlinks.";
    }
    else if (finalInput == "best hiking trails" || finalInput == "top trekking places" || finalInput == "famous hiking spots") {
        botPrint.innerText = "Try the Appalachian Trail, Inca Trail, and Pacific Crest Trail.";
    }
    else if (finalInput == "how to make money online" || finalInput == "online income ideas" || finalInput == "work from home tips") {
        botPrint.innerText = "Try freelancing, affiliate marketing, or selling products online.";
    }
    else if (finalInput == "how to learn chess" || finalInput == "chess basics" || finalInput == "chess for beginners") {
        botPrint.innerText = "Learn piece movements, openings, and basic tactics.";
    }
    else if (finalInput == "best makeup brands" || finalInput == "top cosmetics brands" || finalInput == "popular makeup products") {
        botPrint.innerText = "MAC, Maybelline, and Fenty Beauty are popular brands.";
    }
    else if (finalInput == "how to do photography editing" || finalInput == "photo editing tips" || finalInput == "best photo editors") {
        botPrint.innerText = "Use Lightroom or Photoshop to enhance your photos.";
    }
    else if (finalInput == "what is 5g technology" || finalInput == "explain 5g" || finalInput == "5g network") {
        botPrint.innerText = "5G is the latest mobile network with faster speeds and low latency.";
    }
    else if (finalInput == "how to learn guitar chords" || finalInput == "guitar chord tutorials" || finalInput == "beginner guitar chords") {
        botPrint.innerText = "Start with basic chords like C, G, D, and practice switching.";
    }
    else if (finalInput == "best movies 2025" || finalInput == "upcoming movies" || finalInput == "new film releases") {
        botPrint.innerText = "'Avatar 3' and 'Guardians of the Galaxy Vol. 3' are upcoming hits.";
    }
    else if (finalInput == "how to fix wifi issues" || finalInput == "wifi troubleshooting" || finalInput == "internet problems fix") {
        botPrint.innerText = "Restart router, check cables, and update firmware.";
    }
    else if (finalInput == "best gift ideas" || finalInput == "gift suggestions" || finalInput == "unique gifts") {
        botPrint.innerText = "Personalized items, gadgets, and experiences make great gifts.";
    }
    else if (finalInput == "how to do calligraphy" || finalInput == "calligraphy tips" || finalInput == "learn calligraphy") {
        botPrint.innerText = "Practice strokes with a brush pen or nib and steady your hand.";
    }
    else if (finalInput == "best fitness apps" || finalInput == "top workout apps" || finalInput == "exercise tracking apps") {
        botPrint.innerText = "Try MyFitnessPal, Fitbit, or Nike Training Club.";
    }
    else if (finalInput == "how to start podcast" || finalInput == "podcasting tips" || finalInput == "make a podcast") {
        botPrint.innerText = "Pick a topic, record episodes, and publish on platforms.";
    }
    else if (finalInput == "best coffee shops near me" || finalInput == "popular cafes nearby" || finalInput == "good coffee places") {
        botPrint.innerText = "Try local favorites and check reviews on Google Maps.";
    }
    else if (finalInput == "how to do hair care" || finalInput == "hair care routine" || finalInput == "best hair tips") {
        botPrint.innerText = "Use suitable shampoo, avoid heat damage, and moisturize.";
    }
    else if (finalInput == "how to become a programmer" || finalInput == "programming career tips" || finalInput == "learn programming") {
        botPrint.innerText = "Practice coding daily and build projects to learn.";
    }
    else if (finalInput == "best ways to reduce weight" || finalInput == "weight loss tips" || finalInput == "healthy weight loss") {
        botPrint.innerText = "Combine balanced diet with regular exercise.";
    }
    else if (finalInput == "how to write a cover letter" || finalInput == "cover letter tips" || finalInput == "best cover letter") {
        botPrint.innerText = "Be concise, highlight skills, and tailor to job description.";
    }
    else if (finalInput == "best online games" || finalInput == "popular multiplayer games" || finalInput == "top online games") {
        botPrint.innerText = "'Fortnite', 'Among Us', and 'Call of Duty' are very popular.";
    }
    else if (finalInput == "how to clean house fast" || finalInput == "house cleaning tips" || finalInput == "quick cleaning hacks") {
        botPrint.innerText = "Declutter first, use multi-purpose cleaners, and organize.";
    }
    else if (finalInput == "best laptops 2025" || finalInput == "top laptops" || finalInput == "new laptop models") {
        botPrint.innerText = "Check MacBook Pro, Dell XPS, and HP Spectre.";
    }
    else if (finalInput == "how to improve writing skills" || finalInput == "writing improvement tips" || finalInput == "better writing") {
        botPrint.innerText = "Read regularly, write daily, and seek feedback.";
    }
    else if (finalInput == "best places to travel solo" || finalInput == "solo travel destinations" || finalInput == "safe solo trips") {
        botPrint.innerText = "Japan, Iceland, and New Zealand are great for solo travelers.";
    }
    else if (finalInput == "how to bake bread" || finalInput == "bread baking tips" || finalInput == "easy bread recipe") {
        botPrint.innerText = "Mix flour, yeast, water, and let dough rise before baking.";
    }
    else if (finalInput == "best programming languages" || finalInput == "popular coding languages" || finalInput == "languages to learn") {
        botPrint.innerText = "Python, JavaScript, and Java are versatile programming languages.";
    }
    else if (finalInput == "how to take care of pets" || finalInput == "pet care tips" || finalInput == "caring for pets") {
        botPrint.innerText = "Provide good food, regular vet checkups, and lots of love.";
    }
    else if (finalInput == "best salads recipes" || finalInput == "healthy salad ideas" || finalInput == "easy salad recipes") {
        botPrint.innerText = "Try Caesar salad, quinoa salad, and Greek salad.";
    }
    else if (finalInput == "how to improve confidence" || finalInput == "confidence building tips" || finalInput == "boost self esteem") {
        botPrint.innerText = "Set small goals, practice positive self-talk, and face fears.";
    }
    else if (finalInput == "what is cryptocurrency mining" || finalInput == "explain crypto mining" || finalInput == "cryptocurrency mining meaning") {
        botPrint.innerText = "Crypto mining validates transactions and adds them to blockchain.";
    }
    else if (finalInput == "best places to visit in europe" || finalInput == "top european destinations" || finalInput == "famous places europe") {
        botPrint.innerText = "Paris, Rome, Barcelona, and Amsterdam are popular European cities.";
    }
    else if (finalInput == "how to lose belly fat" || finalInput == "belly fat reduction tips" || finalInput == "reduce stomach fat") {
        botPrint.innerText = "Combine cardio, strength training, and healthy diet.";
    }
    else if (finalInput == "best documentaries on netflix" || finalInput == "top netflix docs" || finalInput == "popular documentaries") {
        botPrint.innerText = "'Our Planet' and 'The Social Dilemma' are popular.";
    }
    else if (finalInput == "how to build self discipline" || finalInput == "self discipline tips" || finalInput == "improve discipline") {
        botPrint.innerText = "Set clear goals, create routines, and avoid distractions.";
    }
    else if (finalInput == "how to plan a wedding" || finalInput == "wedding planning tips" || finalInput == "organize a wedding") {
        botPrint.innerText = "Set a budget, book venue early, and prioritize tasks.";
    }
    else if (finalInput == "best documentaries on climate change" || finalInput == "climate change films" || finalInput == "environmental documentaries") {
        botPrint.innerText = "'Before the Flood' and 'Chasing Ice' are insightful.";
    }
    else if (finalInput == "how to start freelancing" || finalInput == "freelancing tips" || finalInput == "begin freelancing") {
        botPrint.innerText = "Create a portfolio, join freelance platforms, and network.";
    }
    else if (finalInput == "how to improve communication skills" || finalInput == "communication tips" || finalInput == "better communication") {
        botPrint.innerText = "Listen actively, be clear, and practice empathy.";
    }
    else if (finalInput == "best places for honeymoon" || finalInput == "honeymoon destinations" || finalInput == "romantic getaways") {
        botPrint.innerText = "Maldives, Bora Bora, and Santorini are ideal honeymoon spots.";
    }
    else if (finalInput == "how to do digital marketing" || finalInput == "digital marketing tips" || finalInput == "learn digital marketing") {
        botPrint.innerText = "Focus on SEO, content marketing, and social media ads.";
    }
    else if (finalInput == "best smartphones under 30000" || finalInput == "budget smartphones" || finalInput == "affordable phones") {
        botPrint.innerText = "Check Xiaomi Redmi Note and Samsung M series.";
    }
    else if (finalInput == "how to improve sleep quality" || finalInput == "better sleep tips" || finalInput == "sleep hygiene") {
        botPrint.innerText = "Maintain regular sleep schedule and avoid screens before bed.";
    }
    else if (finalInput == "how to cook rice perfectly" || finalInput == "rice cooking tips" || finalInput == "best way to cook rice") {
        botPrint.innerText = "Use the right water ratio and let it rest after cooking.";
    }
    else if (finalInput == "how to do effective studying" || finalInput == "study tips" || finalInput == "improve study habits") {
        botPrint.innerText = "Use Pomodoro technique and minimize distractions.";
    }
    else if (finalInput == "best books to read" || finalInput == "top books recommendations" || finalInput == "must read books") {
        botPrint.innerText = "'To Kill a Mockingbird' and '1984' are timeless classics.";
    }
    else if (finalInput == "how to start blogging" || finalInput == "blogging tips" || finalInput == "create a blog") {
        botPrint.innerText = "Choose a niche, write regularly, and promote your posts.";
    }
    else if (finalInput == "how to improve time management" || finalInput == "time management tips" || finalInput == "better time usage") {
        botPrint.innerText = "Prioritize tasks and avoid multitasking.";
    }
    else if (finalInput == "best ways to stay motivated" || finalInput == "motivation tips" || finalInput == "stay motivated") {
        botPrint.innerText = "Set clear goals and reward yourself for achievements.";
    }
    else if (finalInput == "how to learn data science" || finalInput == "data science basics" || finalInput == "learn data analysis") {
        botPrint.innerText = "Learn Python, statistics, and practice with datasets.";
    }
    else if (finalInput == "best breakfast ideas" || finalInput == "healthy breakfast" || finalInput == "easy breakfast recipes") {
        botPrint.innerText = "Try oatmeal, smoothies, and eggs for a healthy start.";
    }
    else if (finalInput == "how to start investing in crypto" || finalInput == "crypto investing tips" || finalInput == "buy cryptocurrency") {
        botPrint.innerText = "Research coins, start small, and use secure wallets.";
    }
    else if (finalInput == "how to do graphic design" || finalInput == "graphic design tips" || finalInput == "learn graphic design") {
        botPrint.innerText = "Learn tools like Photoshop and Illustrator, and practice.";
    }
    else if (finalInput == "best productivity apps" || finalInput == "top apps for productivity" || finalInput == "apps to stay focused") {
        botPrint.innerText = "Try Todoist, Notion, and Forest.";
    }
    else if (finalInput == "how to cook chicken" || finalInput == "chicken cooking tips" || finalInput == "best way to cook chicken") {
        botPrint.innerText = "Cook chicken thoroughly, season well, and rest before serving.";
    }
    else if (finalInput == "best movies for kids" || finalInput == "top kids movies" || finalInput == "children's movies") {
        botPrint.innerText = "'Toy Story', 'Finding Nemo', and 'Frozen' are great kids movies.";
    }
    else if (finalInput == "how to reduce anxiety" || finalInput == "anxiety relief tips" || finalInput == "manage anxiety") {
        botPrint.innerText = "Practice mindfulness, talk to someone, and exercise.";
    }
    else if (finalInput == "best skincare products" || finalInput == "top skincare brands" || finalInput == "recommended skincare") {
        botPrint.innerText = "Look for products with vitamin C, hyaluronic acid, and sunscreen.";
    }
    else if (finalInput == "how to learn photoshop" || finalInput == "photoshop tutorials" || finalInput == "photoshop basics") {
        botPrint.innerText = "Start with layers, masking, and basic retouching.";
    }
    else if (finalInput == "best places to live" || finalInput == "top cities to live" || finalInput == "best places to settle") {
        botPrint.innerText = "Consider cities with good healthcare, education, and job opportunities.";
    }
    else if (finalInput == "how to prepare for interviews" || finalInput == "job interview tips" || finalInput == "interview preparation") {
        botPrint.innerText = "Research company, practice answers, and dress professionally.";
    }
    else if (finalInput == "best romantic songs" || finalInput == "top love songs" || finalInput == "popular romantic music") {
        botPrint.innerText = "'Perfect' by Ed Sheeran and 'All of Me' by John Legend are favorites.";
    }
    else if (finalInput == "how to start learning piano" || finalInput == "piano lessons" || finalInput == "learn piano basics") {
        botPrint.innerText = "Practice scales, learn chords, and play simple songs.";
    }
    else if (finalInput == "best comedy movies" || finalInput == "funny movies" || finalInput == "top comedies") {
        botPrint.innerText = "'The Hangover' and 'Superbad' are hilarious comedies.";
    }
    else if (finalInput == "how to do budgeting" || finalInput == "budgeting tips" || finalInput == "manage personal finance") {
        botPrint.innerText = "Track expenses, set limits, and save regularly.";
    }
    else if (finalInput == "best hiking gear" || finalInput == "top hiking equipment" || finalInput == "hiking essentials") {
        botPrint.innerText = "Good shoes, water bottle, and first aid kit are must-haves.";
    }
    else if (finalInput == "how to do nail art" || finalInput == "nail art tips" || finalInput == "learn nail designs") {
        botPrint.innerText = "Start simple with dotting and stripes using nail polish.";
    }
    else if (finalInput == "best online shopping sites" || finalInput == "top e-commerce websites" || finalInput == "popular shopping platforms") {
        botPrint.innerText = "Amazon, eBay, and Flipkart are popular shopping sites.";
    }
    else if (finalInput == "how to make coffee" || finalInput == "coffee brewing tips" || finalInput == "best coffee recipes") {
        botPrint.innerText = "Use fresh grounds, clean water, and proper brew time.";
    }
    else if (finalInput == "how to be happy" || finalInput == "happiness tips" || finalInput == "how to feel happy") {
        botPrint.innerText = "Practice gratitude, connect with others, and enjoy simple moments.";
    }
    else if (finalInput == "best programming tutorials" || finalInput == "learn coding online" || finalInput == "top coding courses") {
        botPrint.innerText = "Try freeCodeCamp, Codecademy, and Khan Academy.";
    }
    else if (finalInput == "how to improve posture" || finalInput == "posture correction tips" || finalInput == "better posture") {
        botPrint.innerText = "Sit straight, exercise back muscles, and avoid slouching.";
    }
    else if (finalInput == "best online learning platforms" || finalInput == "top e-learning sites" || finalInput == "online education") {
        botPrint.innerText = "Coursera, Udemy, and edX offer quality courses.";
    }
    else if (finalInput == "how to cook healthy meals" || finalInput == "healthy cooking tips" || finalInput == "easy healthy recipes") {
        botPrint.innerText = "Use fresh ingredients, avoid processed foods, and bake or steam.";
    }
    else if (finalInput == "best board games" || finalInput == "popular tabletop games" || finalInput == "fun board games") {
        botPrint.innerText = "'Catan' and 'Ticket to Ride' are popular board games.";
    }
    else if (finalInput == "how to learn dance" || finalInput == "dance tutorials" || finalInput == "best way to learn dance") {
        botPrint.innerText = "Start with basic steps and practice with videos or classes.";
    }
    else if (finalInput == "best places for photography" || finalInput == "photography locations" || finalInput == "top photo spots") {
        botPrint.innerText = "Nature parks, cityscapes, and historic landmarks are great spots.";
    }
    else if (finalInput == "how to start reading habit" || finalInput == "reading tips" || finalInput == "develop reading habit") {
        botPrint.innerText = "Set a daily reading time and choose interesting books.";
    }
    else if (finalInput == "best yoga poses" || finalInput == "yoga for beginners" || finalInput == "easy yoga") {
        botPrint.innerText = "Try downward dog, child's pose, and cat-cow stretches.";
    }
    else if (finalInput == "how to improve memory" || finalInput == "memory improvement tips" || finalInput == "boost memory") {
        botPrint.innerText = "Use mnemonic devices, stay organized, and get enough sleep.";
    }
    else if (finalInput == "best travel apps" || finalInput == "top travel apps" || finalInput == "travel planning apps") {
        botPrint.innerText = "Google Maps, TripIt, and Airbnb apps are helpful.";
    }
    else if (finalInput == "how to make money online" || finalInput == "earn money from home" || finalInput == "online income tips") {
        botPrint.innerText = "Freelance, sell products, and do affiliate marketing.";
    }
    else if (finalInput == "best ways to relax" || finalInput == "relaxation techniques" || finalInput == "stress relief") {
        botPrint.innerText = "Try deep breathing, meditation, and listening to music.";
    }
    else if (finalInput == "how to do SEO" || finalInput == "SEO tips" || finalInput == "learn SEO") {
        botPrint.innerText = "Optimize keywords, improve site speed, and get backlinks.";
    }
    else if (finalInput == "best ways to save money" || finalInput == "saving tips" || finalInput == "manage finances") {
        botPrint.innerText = "Create a budget, avoid unnecessary expenses, and save regularly.";
    }
    else if (finalInput == "how to get fit at home" || finalInput == "home workout tips" || finalInput == "fitness routine") {
        botPrint.innerText = "Use bodyweight exercises and stay consistent.";
    }
    else if (finalInput == "best pet care tips" || finalInput == "pet health advice" || finalInput == "caring for pets") {
        botPrint.innerText = "Provide nutritious food, regular vet checkups, and exercise.";
    }
    else if (finalInput == "how to do public speaking" || finalInput == "public speaking tips" || finalInput == "improve speaking skills") {
        botPrint.innerText = "Practice regularly, know your audience, and use stories.";
    }
    else if (finalInput == "best motivational quotes" || finalInput == "inspirational quotes" || finalInput == "quotes for success") {
        botPrint.innerText = "'Believe you can and you're halfway there.' – Theodore Roosevelt.";
    }
    else if (finalInput == "how to learn cooking" || finalInput == "cooking basics" || finalInput == "easy cooking tips") {
        botPrint.innerText = "Start with simple recipes and practice knife skills.";
    }
    else if (finalInput == "best apps for learning languages" || finalInput == "language learning apps" || finalInput == "learn languages online") {
        botPrint.innerText = "Duolingo, Babbel, and Memrise are popular.";
    }
    else if (finalInput == "how to do meditation" || finalInput == "meditation tips" || finalInput == "learn meditation") {
        botPrint.innerText = "Focus on breath, start with short sessions, and stay consistent.";
    }
    else if (finalInput == "best ways to stay healthy" || finalInput == "health tips" || finalInput == "healthy lifestyle") {
        botPrint.innerText = "Eat balanced meals, exercise regularly, and get enough sleep.";
    }
    else if (finalInput == "how to do video editing" || finalInput == "video editing tips" || finalInput == "learn video editing") {
        botPrint.innerText = "Use software like Adobe Premiere and practice cutting clips.";
    }
    else if (finalInput == "best podcasts to listen" || finalInput == "top podcasts" || finalInput == "popular podcasts") {
        botPrint.innerText = "'The Daily' and 'Serial' are widely listened to.";
    }
    else if (finalInput == "how to start a YouTube channel" || finalInput == "YouTube tips" || finalInput == "create YouTube content") {
        botPrint.innerText = "Choose niche, create consistent content, and engage audience.";
    }
    else if (finalInput == "best ways to reduce weight" || finalInput == "weight loss tips" || finalInput == "lose weight fast") {
        botPrint.innerText = "Combine healthy diet with regular exercise.";
    }
    else if (finalInput == "how to make smoothies" || finalInput == "smoothie recipes" || finalInput == "healthy smoothies") {
        botPrint.innerText = "Blend fruits, veggies, and yogurt or milk.";
    }
    else if (finalInput == "best study music" || finalInput == "music for focus" || finalInput == "concentration music") {
        botPrint.innerText = "Instrumental and classical music help focus.";
    }
    else if (finalInput == "how to start gardening" || finalInput == "gardening tips" || finalInput == "grow plants at home") {
        botPrint.innerText = "Start with easy plants and water regularly.";
    }
    else if (finalInput == "best travel destinations" || finalInput == "top places to travel" || finalInput == "popular travel spots") {
        botPrint.innerText = "Paris, Tokyo, and New York are top destinations.";
    }
    else if (finalInput == "how to learn photography" || finalInput == "photography basics" || finalInput == "photography tips") {
        botPrint.innerText = "Learn composition, lighting, and practice often.";
    }
    else if (finalInput == "best ways to learn math" || finalInput == "math learning tips" || finalInput == "improve math skills") {
        botPrint.innerText = "Practice problems regularly and understand concepts.";
    }
    else if (finalInput == "how to do calligraphy" || finalInput == "calligraphy tips" || finalInput == "learn calligraphy") {
        botPrint.innerText = "Use the right pens and practice strokes.";
    }
    else if (finalInput == "best ways to improve writing" || finalInput == "writing tips" || finalInput == "better writing skills") {
        botPrint.innerText = "Read more, write daily, and get feedback.";
    }
    else if (finalInput == "how to start podcasting" || finalInput == "podcast tips" || finalInput == "create podcast") {
        botPrint.innerText = "Get a good mic, plan episodes, and publish consistently.";
    }
    else if (finalInput == "best ways to learn guitar" || finalInput == "guitar tutorials" || finalInput == "learn guitar basics") {
        botPrint.innerText = "Start with chords, practice daily, and use tutorials.";
    }
    else if (finalInput == "how to do makeup" || finalInput == "makeup tips" || finalInput == "learn makeup basics") {
        botPrint.innerText = "Start with foundation, eyes, and lips.";
    }
    else if (finalInput == "best ways to learn coding" || finalInput == "coding tips" || finalInput == "learn programming") {
        botPrint.innerText = "Practice regularly and build small projects.";
    }
    else if (finalInput == "how to start freelancing" || finalInput == "freelance tips" || finalInput == "begin freelancing") {
        botPrint.innerText = "Create a portfolio, join freelance platforms, and network.";
    }
    else if (finalInput == "how to do yoga" || finalInput == "yoga tips" || finalInput == "learn yoga") {
        botPrint.innerText = "Start with basic poses and breathe deeply.";
    }
    else if (finalInput == "best ways to learn Spanish" || finalInput == "learn Spanish" || finalInput == "Spanish tips") {
        botPrint.innerText = "Practice daily, use apps, and speak with natives.";
    }
    else if (finalInput == "how to improve focus" || finalInput == "focus tips" || finalInput == "better concentration") {
        botPrint.innerText = "Minimize distractions and take breaks regularly.";
    }
    else if (finalInput == "best ways to learn English" || finalInput == "learn english" || finalInput == "english tips") {
        botPrint.innerText = "Practice speaking, reading, and writing daily.";
    }
    else if (finalInput == "how to start meditation" || finalInput == "meditation basics" || finalInput == "meditation for beginners") {
        botPrint.innerText = "Find a quiet place and focus on breathing.";
    }
    else if (finalInput == "best ways to improve creativity" || finalInput == "creativity tips" || finalInput == "boost creativity") {
        botPrint.innerText = "Explore new hobbies and brainstorm regularly.";
    }
    else if (finalInput == "how to do photography" || finalInput == "photography tips" || finalInput == "learn photography") {
        botPrint.innerText = "Understand your camera and practice often.";
    }
    else if (finalInput == "best ways to improve health" || finalInput == "health improvement tips" || finalInput == "healthy habits") {
        botPrint.innerText = "Eat well, exercise, and get enough sleep.";
    }
    else if (finalInput == "how to start coding" || finalInput == "coding basics" || finalInput == "learn to code") {
        botPrint.innerText = "Begin with simple languages like Python and practice daily.";
    }
    else if (finalInput == "best ways to learn programming" || finalInput == "programming tips" || finalInput == "learn programming") {
        botPrint.innerText = "Build projects and study algorithms.";
    }
    else if (finalInput == "how to do journaling" || finalInput == "journaling tips" || finalInput == "start journaling") {
        botPrint.innerText = "Write daily about your thoughts and goals.";
    }
    else if (finalInput == "best ways to improve confidence" || finalInput == "confidence tips" || finalInput == "boost self-esteem") {
        botPrint.innerText = "Practice positive self-talk and set small challenges.";
    }
    else if (finalInput == "how to start exercising" || finalInput == "exercise tips" || finalInput == "fitness for beginners") {
        botPrint.innerText = "Start slow, set goals, and stay consistent.";
    }
    else if (finalInput == "best ways to improve reading skills" || finalInput == "reading improvement" || finalInput == "better reading") {
        botPrint.innerText = "Read daily and summarize what you learn.";
    }
    else if (finalInput == "how to do drawing" || finalInput == "drawing tips" || finalInput == "learn drawing") {
        botPrint.innerText = "Practice basic shapes and shading regularly.";
    }
    else if (finalInput == "best ways to improve listening skills" || finalInput == "listening tips" || finalInput == "better listening") {
        botPrint.innerText = "Focus fully and ask clarifying questions.";
    }
    else if (finalInput == "how to start writing" || finalInput == "writing tips" || finalInput == "begin writing") {
        botPrint.innerText = "Write regularly and read good writers.";
    }
    else if (finalInput == "best ways to improve leadership" || finalInput == "leadership tips" || finalInput == "become a better leader") {
        botPrint.innerText = "Communicate clearly and inspire your team.";
    }
    else if (finalInput == "how to do knitting" || finalInput == "knitting tips" || finalInput == "learn knitting") {
        botPrint.innerText = "Start with basic stitches and practice daily.";
    }
    else if (finalInput == "best ways to learn drawing" || finalInput == "drawing tips" || finalInput == "improve drawing skills") {
        botPrint.innerText = "Sketch daily and study anatomy.";
    }
    else if (finalInput == "how to start traveling" || finalInput == "travel tips" || finalInput == "begin travel") {
        botPrint.innerText = "Plan budget, pack smart, and stay safe.";
    }
    else if (finalInput == "best ways to improve problem-solving" || finalInput == "problem-solving tips" || finalInput == "boost problem-solving") {
        botPrint.innerText = "Break problems down and think creatively.";
    }
    else if (finalInput == "how to do embroidery" || finalInput == "embroidery tips" || finalInput == "learn embroidery") {
        botPrint.innerText = "Start with simple stitches and practice regularly.";
    }
    else if (finalInput == "best ways to learn chess" || finalInput == "chess tips" || finalInput == "learn chess basics") {
        botPrint.innerText = "Learn moves, practice tactics, and play often.";
    }
    else if (finalInput == "how to start photography" || finalInput == "photography basics" || finalInput == "begin photography") {
        botPrint.innerText = "Understand your camera and shoot daily.";
    }
    else if (finalInput == "best ways to learn drawing" || finalInput == "drawing tips" || finalInput == "improve drawing skills") {
        botPrint.innerText = "Practice shading, perspective, and anatomy.";
    }
    else if (finalInput == "how to do calligraphy" || finalInput == "calligraphy tips" || finalInput == "learn calligraphy") {
        botPrint.innerText = "Use proper pens and practice basic strokes.";
    }
    else if (finalInput == "best ways to improve writing" || finalInput == "writing tips" || finalInput == "better writing skills") {
        botPrint.innerText = "Read regularly, write daily, and get feedback.";
    }
    else if (finalInput == "how to start blogging" || finalInput == "blogging tips" || finalInput == "create a blog") {
        botPrint.innerText = "Choose niche, write regularly, and promote posts.";
    }
    else if (finalInput == "best ways to stay motivated" || finalInput == "motivation tips" || finalInput == "stay motivated") {
        botPrint.innerText = "Set clear goals and reward achievements.";
    }
    else if (finalInput == "how to do makeup" || finalInput == "makeup tips" || finalInput == "learn makeup basics") {
        botPrint.innerText = "Start with foundation, eyes, and lips.";
    }
    else if (finalInput == "best ways to learn guitar" || finalInput == "guitar tutorials" || finalInput == "learn guitar basics") {
        botPrint.innerText = "Start with chords, practice daily, and use tutorials.";
    }
    else if (finalInput == "how to start podcasting" || finalInput == "podcast tips" || finalInput == "create podcast") {
        botPrint.innerText = "Get good mic, plan episodes, and publish consistently.";
    }
    else if (finalInput == "best ways to improve confidence" || finalInput == "confidence tips" || finalInput == "boost self-esteem") {
        botPrint.innerText = "Practice positive self-talk and set small challenges.";
    }
    else if (finalInput == "how to start exercising" || finalInput == "exercise tips" || finalInput == "fitness for beginners") {
        botPrint.innerText = "Start slow, set goals, and stay consistent.";
    }
    else if (finalInput == "best ways to learn math" || finalInput == "math learning tips" || finalInput == "improve math skills") {
        botPrint.innerText = "Practice problems regularly and understand concepts.";
    }
    else if (finalInput == "how to do yoga" || finalInput == "yoga tips" || finalInput == "learn yoga") {
        botPrint.innerText = "Start with basic poses and breathe deeply.";
    }
    else if (finalInput == "best ways to improve health" || finalInput == "health improvement tips" || finalInput == "healthy habits") {
        botPrint.innerText = "Eat well, exercise, and get enough sleep.";
    }
    else if (finalInput == "how to start coding" || finalInput == "coding basics" || finalInput == "learn to code") {
        botPrint.innerText = "Begin with simple languages like Python and practice daily.";
    }
    else if (finalInput == "best ways to improve creativity" || finalInput == "creativity tips" || finalInput == "boost creativity") {
        botPrint.innerText = "Explore new hobbies and brainstorm regularly.";
    }
    else if (finalInput == "how to do public speaking" || finalInput == "public speaking tips" || finalInput == "improve speaking skills") {
        botPrint.innerText = "Practice regularly, know your audience, and use stories.";
    }
    else if (finalInput == "best ways to save money" || finalInput == "saving tips" || finalInput == "manage finances") {
        botPrint.innerText = "Create a budget, avoid unnecessary expenses, and save regularly.";
    }
    else if (finalInput == "how to get fit at home" || finalInput == "home workout tips" || finalInput == "fitness routine") {
        botPrint.innerText = "Use bodyweight exercises and stay consistent.";
    }
    else if (finalInput == "best ways to reduce weight" || finalInput == "weight loss tips" || finalInput == "lose weight fast") {
        botPrint.innerText = "Combine healthy diet with regular exercise.";
    }
    else if (finalInput == "how to make smoothies" || finalInput == "smoothie recipes" || finalInput == "healthy smoothies") {
        botPrint.innerText = "Blend fruits, veggies, and yogurt or milk.";
    }
    else if (finalInput == "best ways to improve reading skills" || finalInput == "reading improvement" || finalInput == "better reading") {
        botPrint.innerText = "Read daily and summarize what you learn.";
    }
    else if (finalInput == "how to start gardening" || finalInput == "gardening tips" || finalInput == "grow plants at home") {
        botPrint.innerText = "Start with easy plants and water regularly.";
    }
    else if (finalInput == "best ways to improve leadership" || finalInput == "leadership tips" || finalInput == "become a better leader") {
        botPrint.innerText = "Communicate clearly and inspire your team.";
    }
    else if (finalInput == "how to do knitting" || finalInput == "knitting tips" || finalInput == "learn knitting") {
        botPrint.innerText = "Start with basic stitches and practice daily.";
    }
    else if (finalInput == "best ways to improve listening skills" || finalInput == "listening tips" || finalInput == "better listening") {
        botPrint.innerText = "Focus fully and ask clarifying questions.";
    }
    else if (finalInput == "how to start writing" || finalInput == "writing tips" || finalInput == "begin writing") {
        botPrint.innerText = "Write regularly and read good writers.";
    }
    else if (finalInput == "best ways to improve problem-solving" || finalInput == "problem-solving tips" || finalInput == "boost problem-solving") {
        botPrint.innerText = "Break problems down and think creatively.";
    }
    else if (finalInput == "how to do embroidery" || finalInput == "embroidery tips" || finalInput == "learn embroidery") {
        botPrint.innerText = "Start with simple stitches and practice regularly.";
    }
    else if (finalInput == "best ways to learn chess" || finalInput == "chess tips" || finalInput == "learn chess basics") {
        botPrint.innerText = "Learn moves, practice tactics, and play often.";
    }
    else if (finalInput == "how to start photography" || finalInput == "photography basics" || finalInput == "begin photography") {
        botPrint.innerText = "Understand your camera and shoot daily.";
    }
    else if (finalInput == "best ways to learn drawing" || finalInput == "drawing tips" || finalInput == "improve drawing skills") {
        botPrint.innerText = "Practice shading, perspective, and anatomy.";
    }
    else if (finalInput == "how to do calligraphy" || finalInput == "calligraphy tips" || finalInput == "learn calligraphy") {
        botPrint.innerText = "Use proper pens and practice basic strokes.";
    }
    else if (finalInput == "best ways to improve writing" || finalInput == "writing tips" || finalInput == "better writing skills") {
        botPrint.innerText = "Read regularly, write daily, and get feedback.";
    }
    else if (finalInput == "how to start blogging" || finalInput == "blogging tips" || finalInput == "create a blog") {
        botPrint.innerText = "Choose niche, write regularly, and promote posts.";
    }
    else if (finalInput == "best ways to stay motivated" || finalInput == "motivation tips" || finalInput == "stay motivated") {
        botPrint.innerText = "Set clear goals and reward achievements.";
    }
    else if (finalInput == "reading tips" || finalInput == "develop reading habit" || finalInput == "how to read more") {
        botPrint.innerText = "Set a daily reading time and choose interesting books.";
    }
    else if (finalInput == "best yoga poses" || finalInput == "yoga for beginners" || finalInput == "easy yoga") {
        botPrint.innerText = "Try downward dog, child's pose, and cat-cow stretches.";
    }
    else if (finalInput == "how to improve memory" || finalInput == "memory improvement tips" || finalInput == "boost memory") {
        botPrint.innerText = "Use mnemonic devices, stay organized, and get enough sleep.";
    }
    else if (finalInput == "best travel apps" || finalInput == "top travel apps" || finalInput == "travel planning apps") {
        botPrint.innerText = "Google Maps, TripIt, and Airbnb apps are helpful.";
    }
    else if (finalInput == "how to make money online" || finalInput == "earn money from home" || finalInput == "online income tips") {
        botPrint.innerText = "Freelance, sell products, and do affiliate marketing.";
    }
    else if (finalInput == "best ways to relax" || finalInput == "relaxation techniques" || finalInput == "stress relief") {
        botPrint.innerText = "Try deep breathing, meditation, and listening to music.";
    }
    else if (finalInput == "how to do SEO" || finalInput == "SEO tips" || finalInput == "learn SEO") {
        botPrint.innerText = "Optimize keywords, improve site speed, and get backlinks.";
    }
    else if (finalInput == "best ways to save money" || finalInput == "saving tips" || finalInput == "manage finances") {
        botPrint.innerText = "Create a budget, avoid unnecessary expenses, and save regularly.";
    }
    else if (finalInput == "how to get fit at home" || finalInput == "home workout tips" || finalInput == "fitness routine") {
        botPrint.innerText = "Use bodyweight exercises and stay consistent.";
    }
    else if (finalInput == "best pet care tips" || finalInput == "pet health advice" || finalInput == "caring for pets") {
        botPrint.innerText = "Provide nutritious food, regular vet checkups, and exercise.";
    }
    else if (finalInput == "how to do public speaking" || finalInput == "public speaking tips" || finalInput == "improve speaking skills") {
        botPrint.innerText = "Practice regularly, know your audience, and use stories.";
    }
    else if (finalInput == "best motivational quotes" || finalInput == "inspirational quotes" || finalInput == "quotes for success") {
        botPrint.innerText = "'Believe you can and you're halfway there.' – Theodore Roosevelt.";
    }
    else if (finalInput == "how to learn cooking" || finalInput == "cooking basics" || finalInput == "easy cooking tips") {
        botPrint.innerText = "Start with simple recipes and practice knife skills.";
    }
    else if (finalInput == "best apps for learning languages" || finalInput == "language learning apps" || finalInput == "learn languages online") {
        botPrint.innerText = "Duolingo, Babbel, and Memrise are popular.";
    }
    else if (finalInput == "how to do meditation" || finalInput == "meditation tips" || finalInput == "learn meditation") {
        botPrint.innerText = "Focus on breath, start with short sessions, and stay consistent.";
    }
    else if (finalInput == "best ways to stay healthy" || finalInput == "health tips" || finalInput == "healthy lifestyle") {
        botPrint.innerText = "Eat balanced meals, exercise regularly, and get enough sleep.";
    }
    else if (finalInput == "how to do video editing" || finalInput == "video editing tips" || finalInput == "learn video editing") {
        botPrint.innerText = "Use software like Adobe Premiere and practice cutting clips.";
    }
    else if (finalInput == "best podcasts to listen" || finalInput == "top podcasts" || finalInput == "popular podcasts") {
        botPrint.innerText = "'The Daily' and 'Serial' are widely listened to.";
    }
    else if (finalInput == "how to start a YouTube channel" || finalInput == "YouTube tips" || finalInput == "create YouTube content") {
        botPrint.innerText = "Choose niche, create consistent content, and engage audience.";
    }
    else if (finalInput == "best ways to reduce weight" || finalInput == "weight loss tips" || finalInput == "lose weight fast") {
        botPrint.innerText = "Combine healthy diet with regular exercise.";
    }
    else if (finalInput == "how to make smoothies" || finalInput == "smoothie recipes" || finalInput == "healthy smoothies") {
        botPrint.innerText = "Blend fruits, veggies, and yogurt or milk.";
    }
    else if (finalInput == "best study music" || finalInput == "music for focus" || finalInput == "concentration music") {
        botPrint.innerText = "Instrumental and classical music help focus.";
    }
    else if (finalInput == "how to start gardening" || finalInput == "gardening tips" || finalInput == "grow plants at home") {
        botPrint.innerText = "Start with easy plants and water regularly.";
    }
    else if (finalInput == "best travel destinations" || finalInput == "top places to travel" || finalInput == "popular travel spots") {
        botPrint.innerText = "Paris, Tokyo, and New York are top destinations.";
    }
    else if (finalInput == "how to learn photography" || finalInput == "photography basics" || finalInput == "photography tips") {
        botPrint.innerText = "Learn composition, lighting, and practice often.";
    }
    else if (finalInput == "best ways to learn math" || finalInput == "math learning tips" || finalInput == "improve math skills") {
        botPrint.innerText = "Practice problems regularly and understand concepts.";
    }
    else if (finalInput == "how to do calligraphy" || finalInput == "calligraphy tips" || finalInput == "learn calligraphy") {
        botPrint.innerText = "Use the right pens and practice strokes.";
    }
    else if (finalInput == "best ways to improve writing" || finalInput == "writing tips" || finalInput == "better writing skills") {
        botPrint.innerText = "Read more, write daily, and get feedback.";
    }
    else if (finalInput == "how to start podcasting" || finalInput == "podcast tips" || finalInput == "create podcast") {
        botPrint.innerText = "Get a good mic, plan episodes, and publish consistently.";
    }
    else if (finalInput == "best ways to learn guitar" || finalInput == "guitar tutorials" || finalInput == "learn guitar basics") {
        botPrint.innerText = "Start with chords, practice daily, and use tutorials.";
    }
    else if (finalInput == "how to do makeup" || finalInput == "makeup tips" || finalInput == "learn makeup basics") {
        botPrint.innerText = "Start with foundation, eyes, and lips.";
    }
    else if (finalInput == "best ways to learn coding" || finalInput == "coding tips" || finalInput == "learn programming") {
        botPrint.innerText = "Practice regularly and build small projects.";
    }
    else if (finalInput == "how to start freelancing" || finalInput == "freelance tips" || finalInput == "begin freelancing") {
        botPrint.innerText = "Create a portfolio, join freelance platforms, and network.";
    }
    else if (finalInput == "how to do yoga" || finalInput == "yoga tips" || finalInput == "learn yoga") {
        botPrint.innerText = "Start with basic poses and breathe deeply.";
    }
    else if (finalInput == "best ways to learn Spanish" || finalInput == "learn Spanish" || finalInput == "Spanish tips") {
        botPrint.innerText = "Practice daily, use apps, and speak with natives.";
    }
    else if (finalInput == "how to improve focus" || finalInput == "focus tips" || finalInput == "better concentration") {
        botPrint.innerText = "Minimize distractions and take breaks regularly.";
    }
    else if (finalInput == "best ways to learn English" || finalInput == "learn English" || finalInput == "English tips") {
        botPrint.innerText = "Practice speaking, reading, and writing daily.";
    }
    else if (finalInput == "how to start meditation" || finalInput == "meditation basics" || finalInput == "meditation for beginners") {
        botPrint.innerText = "Find a quiet place and focus on breathing.";
    }
    else if (finalInput == "best ways to improve creativity" || finalInput == "creativity tips" || finalInput == "boost creativity") {
        botPrint.innerText = "Explore new hobbies and brainstorm regularly.";
    }
    else if (finalInput == "how to do photography" || finalInput == "photography tips" || finalInput == "learn photography") {
        botPrint.innerText = "Understand your camera and practice often.";
    }
    else if (finalInput == "best ways to improve health" || finalInput == "health improvement tips" || finalInput == "healthy habits") {
        botPrint.innerText = "Eat well, exercise, and get enough sleep.";
    }
    else if (finalInput == "how to start coding" || finalInput == "coding basics" || finalInput == "learn to code") {
        botPrint.innerText = "Begin with simple languages like Python and practice daily.";
    }
    else if (finalInput == "best ways to learn programming" || finalInput == "programming tips" || finalInput == "learn programming") {
        botPrint.innerText = "Build projects and study algorithms.";
    }
    else if (finalInput == "how to do journaling" || finalInput == "journaling tips" || finalInput == "start journaling") {
        botPrint.innerText = "Write daily about your thoughts and goals.";
    }
    else if (finalInput == "best ways to improve confidence" || finalInput == "confidence tips" || finalInput == "boost self-esteem") {
        botPrint.innerText = "Practice positive self-talk and set small challenges.";
    }
    else if (finalInput == "how to start exercising" || finalInput == "exercise tips" || finalInput == "fitness for beginners") {
        botPrint.innerText = "Start slow, set goals, and stay consistent.";
    }
    else if (finalInput == "best ways to improve reading skills" || finalInput == "reading improvement" || finalInput == "better reading") {
        botPrint.innerText = "Read daily and summarize what you learn.";
    }
    else if (finalInput == "how to do drawing" || finalInput == "drawing tips" || finalInput == "learn to draw") {
        botPrint.innerText = "Practice shapes, shading, and perspective.";
    }
    else if (finalInput == "best ways to learn art" || finalInput == "art learning tips" || finalInput == "improve art skills") {
        botPrint.innerText = "Experiment with mediums and practice regularly.";
    }
    else if (finalInput == "how to do calligraphy" || finalInput == "calligraphy basics" || finalInput == "learn calligraphy") {
        botPrint.innerText = "Use the right pens and practice basic strokes.";
    }
    else if (finalInput == "best ways to improve writing skills" || finalInput == "writing improvement" || finalInput == "better writing") {
        botPrint.innerText = "Write daily and get feedback.";
    }
    else if (finalInput == "how to learn guitar" || finalInput == "guitar basics" || finalInput == "guitar tips") {
        botPrint.innerText = "Practice chords and songs regularly.";
    }
    else if (finalInput == "best ways to stay motivated" || finalInput == "motivation tips" || finalInput == "keep motivated") {
        botPrint.innerText = "Set clear goals and reward yourself.";
    }
    else if (finalInput == "how to start freelancing" || finalInput == "freelance tips" || finalInput == "begin freelancing") {
        botPrint.innerText = "Create profiles on freelance sites and build a portfolio.";
    }
    else if (finalInput == "best ways to manage time" || finalInput == "time management tips" || finalInput == "time management") {
        botPrint.innerText = "Prioritize tasks and avoid multitasking.";
    }
    else if (finalInput == "how to start a blog" || finalInput == "blogging tips" || finalInput == "create a blog") {
        botPrint.innerText = "Pick a niche, write consistently, and promote your posts.";
    }
    else if (finalInput == "best ways to do marketing" || finalInput == "marketing tips" || finalInput == "digital marketing") {
        botPrint.innerText = "Know your audience and use social media effectively.";
    }
    else if (finalInput == "how to start a business" || finalInput == "business tips" || finalInput == "entrepreneurship") {
        botPrint.innerText = "Research your market and create a solid plan.";
    }
    else if (finalInput == "best ways to learn finance" || finalInput == "finance tips" || finalInput == "learn finance") {
        botPrint.innerText = "Understand budgeting, saving, and investing.";
    }
    else if (finalInput == "how to do meditation" || finalInput == "meditation tips" || finalInput == "learn meditation") {
        botPrint.innerText = "Start with short daily sessions and focus on breathing.";
    }
    else if (finalInput == "best ways to reduce stress" || finalInput == "stress relief tips" || finalInput == "relaxation techniques") {
        botPrint.innerText = "Exercise, meditate, and get enough rest.";
    }
    else if (finalInput == "how to start cooking" || finalInput == "cooking tips" || finalInput == "learn cooking") {
        botPrint.innerText = "Start with simple recipes and practice knife skills.";
    }
    else if (finalInput == "best ways to learn photography" || finalInput == "photography tips" || finalInput == "learn photography") {
        botPrint.innerText = "Understand light, composition, and shoot regularly.";
    }
    else if (finalInput == "how to improve public speaking" || finalInput == "public speaking tips" || finalInput == "speak confidently") {
        botPrint.innerText = "Practice in front of a mirror and prepare well.";
    }
    else if (finalInput == "best ways to learn dance" || finalInput == "dance tips" || finalInput == "learn dancing") {
        botPrint.innerText = "Take classes and practice regularly.";
    }
    else if (finalInput == "how to do embroidery" || finalInput == "embroidery tips" || finalInput == "learn embroidery") {
        botPrint.innerText = "Start with simple stitches and practice regularly.";
    }
    else if (finalInput == "best ways to learn chess" || finalInput == "chess tips" || finalInput == "learn chess basics") {
        botPrint.innerText = "Learn moves, practice tactics, and play often.";
    }
    else if (finalInput == "how to start photography" || finalInput == "photography basics" || finalInput == "begin photography") {
        botPrint.innerText = "Understand your camera and shoot daily.";
    }
    else if (finalInput == "best ways to learn drawing" || finalInput == "drawing tips" || finalInput == "improve drawing skills") {
        botPrint.innerText = "Practice shading, perspective, and anatomy.";
    }
    else if (finalInput == "how to do calligraphy" || finalInput == "calligraphy tips" || finalInput == "learn calligraphy") {
        botPrint.innerText = "Use proper pens and practice basic strokes.";
    }
    else if (finalInput == "best ways to improve writing" || finalInput == "writing tips" || finalInput == "better writing skills") {
        botPrint.innerText = "Read regularly, write daily, and get feedback.";
    }
    else if (finalInput == "how to start blogging" || finalInput == "blogging tips" || finalInput == "create a blog") {
        botPrint.innerText = "Choose niche, write regularly, and promote posts.";
    }
    else if (finalInput == "best ways to stay motivated" || finalInput == "motivation tips" || finalInput == "stay motivated") {
        botPrint.innerText = "Set clear goals and reward achievements.";
    }

    else {
        userPrint.innerText = input;
        botPrint.innerText = "Sorry, I didn't understand that. Please ask something else!";
    }
}