let activeArr = []
let selectArr = []
let displayArr = []
let displayTextArr = []
let answersArr = []
let otherAnswersArr = []
let goBackBtn = ""
let imgList = ""
let selectionOpen = false
let gameActive = false
let answered = false
let difficulty = 2
let round = 0
let gameLimit = 0
let score = 0

const gameBtnDisplay = document.getElementById("game-btn-container")
const topicBtnDisplay = document.getElementById("topic-btn-container")
const cardsContainer = document.querySelector(".cards-container")
const questionImageContainer = document.querySelector(".question-image-container")
const questionTextBox = document.querySelector(".question-text")
const resultBox = document.querySelector(".result-container")


function buildTextBox() {
    questionTextBox.innerHTML = ""
    for ( let i = 0; i < difficulty; i++ ) {
        questionTextBox.innerHTML += `<button class="question-text-button"></button>`
    } 
}
buildTextBox()


const difficultySelect = document.getElementById("difficulty-btn")

difficultySelect.addEventListener("click",function(){
    if ( !gameActive ) {
    if ( difficulty === 2 ) {
        difficulty = 3
        difficultySelect.textContent = "Medium (3)"
        buildTextBox()
    } else if ( difficulty === 3 ) {
        difficulty = 4
        difficultySelect.textContent = "Hard(4)"
        buildTextBox()
    } else if ( difficulty === 4 ) {
        difficulty = 5
        difficultySelect.textContent = "Very Hard(5)"
        buildTextBox()
    } else if ( difficulty === 5 ) {
        difficulty = 2
        difficultySelect.textContent = "Easy(2)"
        buildTextBox()
    }
}
})




const feelingsArr = ["./images/feelings/img1.png","./images/feelings/img2.png", "./images/feelings/img3.png", "./images/feelings/img4.png", "./images/feelings/img5.png", "./images/feelings/img6.png", "./images/feelings/img7.png", "./images/feelings/img8.png", "./images/feelings/img9.png","./images/feelings/img10.png"]
const feelingsTextArr = ["fine", "good", "great", "happy", "sad", "tired", "sleepy", "busy", "hungry", "thirsty"]
const numbersArr = ["./images/numbers/img1.png","./images/numbers/img2.png", "./images/numbers/img3.png", "./images/numbers/img4.png", "./images/numbers/img5.png", "./images/numbers/img6.png", "./images/numbers/img7.png", "./images/numbers/img8.png", "./images/numbers/img9.png", "./images/numbers/img10.png", "./images/numbers/img11.png", "./images/numbers/img12.png"]
const numbersTextArr = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve"]
const weatherArr = ["./images/weather/img1.png","./images/weather/img2.png", "./images/weather/img3.png", "./images/weather/img4.png", "./images/weather/img5.png", "./images/weather/img6.png"]
const weatherTextArr = ["sunny", "cloudy", "rainy", "snowy", "cold", "hot"]
const colorArr = ["./images/colours/img1.png","./images/colours/img2.png", "./images/colours/img3.png", "./images/colours/img4.png", "./images/colours/img5.png", "./images/colours/img6.png", "./images/colours/img7.png", "./images/colours/img8.png", "./images/colours/img9.png","./images/colours/img10.png"]
const colorTextArr = ["black", "blue", "brown", "green", "orange", "pink", "purple", "red", "white", "yellow"]
const shapesArr = ["./images/shapes/img1.png","./images/shapes/img2.png", "./images/shapes/img3.png", "./images/shapes/img4.png", "./images/shapes/img5.png", "./images/shapes/img6.png", "./images/shapes/img7.png", "./images/shapes/img8.png"]
const shapesTextArr = ["circle", "cross", "diamond", "heart", "rectangle", "square", "star", "triangle"]
const sportsArr = ["./images/sports/img1.png","./images/sports/img2.png", "./images/sports/img3.png", "./images/sports/img4.png", "./images/sports/img5.png", "./images/sports/img6.png", "./images/sports/img7.png", "./images/sports/img8.png","./images/sports/img9.png","./images/sports/img10.png","./images/sports/img11.png","./images/sports/img12.png","./images/sports/img13.png"]
const sportsTextArr = ["baseball", "softball", "basketball", "volleyball", "dodgeball", "soccer", "tennis", "table tennis", "badminton", "track and field", "swimming", "skating", "skiing"]
const foodsArr = ["./images/foods/img1.png","./images/foods/img2.png", "./images/foods/img3.png", "./images/foods/img4.png", "./images/foods/img5.png", "./images/foods/img6.png", "./images/foods/img7.png", "./images/foods/img8.png", "./images/foods/img9.png", "./images/foods/img10.png", "./images/foods/img11.png", "./images/foods/img12.png", "./images/foods/img13.png", "./images/foods/img14.png", "./images/foods/img15.png", "./images/foods/img16.png", "./images/foods/img17.png", "./images/foods/img18.png", "./images/foods/img19.png"]
const foodsTextArr = ["rice", "rice ball", "curry and rice", "grilled fish", "bread", "sandwich", "pancakes", "pizza", "hamburger", "hot dog", "french fries", "fried chicken", "sausage", "steak", "omelet", "spaghetti", "pie", "salad", "soup"]
const dessertsArr = ["./images/desserts/img1.png","./images/desserts/img2.png", "./images/desserts/img3.png", "./images/desserts/img4.png", "./images/desserts/img5.png", "./images/desserts/img6.png", "./images/desserts/img7.png", "./images/desserts/img8.png"]
const dessertsTextArr = ["cake", "parfait", "pudding", "ice cream", "shaved ice", "chocolate", "popcorn", "snack food"]
const drinksArr = ["./images/drinks/img1.png","./images/drinks/img2.png", "./images/drinks/img3.png", "./images/drinks/img4.png", "./images/drinks/img5.png", "./images/drinks/img6.png", "./images/drinks/img7.png", "./images/drinks/img8.png"]
const drinksTextArr = ["coffee", "tea", "green tea", "orange juice", "soda", "milk", "water", "mineral water"]
const fruitsvegetablesArr = ["./images/fruitsvegetables/img1.png","./images/fruitsvegetables/img2.png", "./images/fruitsvegetables/img3.png", "./images/fruitsvegetables/img4.png", "./images/fruitsvegetables/img5.png", "./images/fruitsvegetables/img6.png", "./images/fruitsvegetables/img7.png", "./images/fruitsvegetables/img8.png", "./images/fruitsvegetables/img9.png", "./images/fruitsvegetables/img10.png", "./images/fruitsvegetables/img11.png", "./images/fruitsvegetables/img12.png", "./images/fruitsvegetables/img13.png", "./images/fruitsvegetables/img14.png", "./images/fruitsvegetables/img15.png", "./images/fruitsvegetables/img16.png", "./images/fruitsvegetables/img17.png", "./images/fruitsvegetables/img18.png", "./images/fruitsvegetables/img19.png", "./images/fruitsvegetables/img20.png", "./images/fruitsvegetables/img21.png", "./images/fruitsvegetables/img22.png", "./images/fruitsvegetables/img23.png", "./images/fruitsvegetables/img24.png", "./images/fruitsvegetables/img25.png", "./images/fruitsvegetables/img26.png", "./images/fruitsvegetables/img27.png"]
const fruitsvegetablesTextArr = ["apple", "banana", "bean", "brocolli", "cabbage", "carrot", "cherry", "corn", "cucumber", "eggplant", "grapes", "green pepper", "kiwi fruit", "lemon", "lettuce", "melon", "mushroom", "nut", "onion", "orange", "peach", "pineapple", "potato", "spinach", "strawberry", "tomato", "watermelon"]
const ingredientsArr = ["./images/ingredients/img1.png","./images/ingredients/img2.png", "./images/ingredients/img3.png", "./images/ingredients/img4.png", "./images/ingredients/img5.png", "./images/ingredients/img6.png", "./images/ingredients/img7.png", "./images/ingredients/img8.png", "./images/ingredients/img9.png", "./images/ingredients/img10.png"]
const ingredientsTextArr = ["beef", "chicken", "pork", "bacon", "ham", "cheese", "egg", "fish", "salmon", "octopus"]
const mealsArr = ["./images/meals/img1.png","./images/meals/img2.png", "./images/meals/img3.png"]
const mealsTextArr = ["breakfast", "lunch", "dinner"]
const tastesArr = ["./images/tastes/img1.png","./images/tastes/img2.png", "./images/tastes/img3.png", "./images/tastes/img4.png", "./images/tastes/img5.png", "./images/tastes/img6.png", "./images/tastes/img7.png", "./images/tastes/img8.png", "./images/tastes/img9.png", "./images/tastes/img10.png"]
const tastesTextArr = ["bitter", "sweet", "salty", "sour", "spicy", "delicious", "soft", "hard", "cold", "hot"]
const animalsArr = ["./images/animals/img1.png","./images/animals/img2.png", "./images/animals/img3.png", "./images/animals/img4.png", "./images/animals/img5.png", "./images/animals/img6.png", "./images/animals/img7.png", "./images/animals/img8.png", "./images/animals/img9.png", "./images/animals/img10.png", "./images/animals/img11.png", "./images/animals/img12.png", "./images/animals/img13.png", "./images/animals/img14.png", "./images/animals/img15.png", "./images/animals/img16.png", "./images/animals/img17.png", "./images/animals/img18.png", "./images/animals/img19.png", "./images/animals/img20.png", "./images/animals/img21.png", "./images/animals/img22.png", "./images/animals/img23.png", "./images/animals/img24.png"]
const animalsTextArr = ["bear", "polar bear", "elephant", "tiger", "lion", "zebra", "gorilla", "monkey", "horse", "camel", "cow", "sheep", "pig", "panda", "koala", "penguin", "dog", "cat", "rabbit", "mouse", "snake", "frog", "bird", "eagle"]
const seaanimalsArr = ["./images/seaanimals/img1.png","./images/seaanimals/img2.png", "./images/seaanimals/img3.png", "./images/seaanimals/img4.png", "./images/seaanimals/img5.png", "./images/seaanimals/img6.png", "./images/seaanimals/img7.png", "./images/seaanimals/img8.png"]
const seaanimalsTextArr = ["whale", "shark", "dolphin", "sea turtle", "fish", "squid", "jellyfish", "shrimp"]
const bugsArr = ["./images/bugs/img1.png","./images/bugs/img2.png", "./images/bugs/img3.png", "./images/bugs/img4.png"]
const bugsTextArr = ["ant", "butterfly", "grasshopper", "spider"]
const natureArr = ["./images/nature/img1.png","./images/nature/img2.png", "./images/nature/img3.png", "./images/nature/img4.png", "./images/nature/img5.png", "./images/nature/img6.png", "./images/nature/img7.png", "./images/nature/img8.png", "./images/nature/img9.png", "./images/nature/img10.png", "./images/nature/img11.png", "./images/nature/img12.png"]
const natureTextArr = ["desert", "forest", "island", "lake", "mountain", "pond", "river", "savanna", "sea", "wetlands", "flower", "tree"]
const monthsArr = ["./images/months/img1.png","./images/months/img2.png", "./images/months/img3.png", "./images/months/img4.png", "./images/months/img5.png", "./images/months/img6.png", "./images/months/img7.png", "./images/months/img8.png", "./images/months/img9.png", "./images/months/img10.png", "./images/months/img11.png", "./images/months/img12.png"]
const monthsTextArr = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
const seasonsArr = ["./images/seasons/img1.png","./images/seasons/img2.png", "./images/seasons/img3.png", "./images/seasons/img4.png"]
const seasonsTextArr = ["spring", "summer", "fall", "winter"]
const timesofdayArr = ["./images/timesofday/img1.png","./images/timesofday/img2.png", "./images/timesofday/img3.png", "./images/timesofday/img4.png"]
const timesofdayTextArr = ["morning", "afternoon", "evening", "night"]
const daysArr = ["./images/days/img1.png","./images/days/img2.png", "./images/days/img3.png", "./images/days/img4.png","./images/days/img5.png", "./images/days/img6.png", "./images/days/img7.png"]
const daysTextArr = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
const countriesArr = ["./images/countries/img1.png","./images/countries/img2.png", "./images/countries/img3.png", "./images/countries/img4.png", "./images/countries/img5.png", "./images/countries/img6.png", "./images/countries/img7.png", "./images/countries/img8.png", "./images/countries/img9.png", "./images/countries/img10.png", "./images/countries/img11.png", "./images/countries/img12.png", "./images/countries/img13.png", "./images/countries/img14.png", "./images/countries/img15.png", "./images/countries/img16.png", "./images/countries/img17.png", "./images/countries/img18.png", "./images/countries/img19.png", "./images/countries/img20.png", "./images/countries/img21.png", "./images/countries/img22.png", "./images/countries/img23.png", "./images/countries/img24.png", "./images/countries/img25.png", "./images/countries/img26.png"]
const countriesTextArr = ["America", "Australia", "Brazil", "Canada", "China", "Egypt", "France", "Germany", "Ghana", "India", "Italy", "Japan", "Kenya", "Korea", "Mongolia", "Morocco", "Norway", "Peru", "Russia", "Singapore", "Spain", "Sweden", "Thailand", "Turkey", "U.K.", "Vietnam"]
const familyArr = ["./images/family/img1.png","./images/family/img2.png", "./images/family/img3.png", "./images/family/img4.png", "./images/family/img5.png", "./images/family/img6.png", "./images/family/img7.png"]
const familyTextArr = ["grandfather", "grandmother", "mother", "father", "brother", "me", "sister"]
const peopleArr = ["./images/people/img1.png","./images/people/img2.png", "./images/people/img3.png", "./images/people/img4.png"]
const peopleTextArr = ["boy", "girl", "friends", "classmates"]
const personalitiesArr = ["./images/personalities/img1.png","./images/personalities/img2.png", "./images/personalities/img3.png", "./images/personalities/img4.png", "./images/personalities/img5.png", "./images/personalities/img6.png", "./images/personalities/img7.png"]
const personalitiesTextArr = ["active", "brave", "friendly", "funny", "gentle", "kind", "strong"]
const actions1Arr = ["./images/actions1/img1.png","./images/actions1/img2.png", "./images/actions1/img3.png", "./images/actions1/img4.png", "./images/actions1/img5.png", "./images/actions1/img6.png", "./images/actions1/img7.png", "./images/actions1/img8.png", "./images/actions1/img9.png", "./images/actions1/img10.png", "./images/actions1/img11.png", "./images/actions1/img12.png", "./images/actions1/img13.png", "./images/actions1/img14.png", "./images/actions1/img15.png", "./images/actions1/img16.png", "./images/actions1/img17.png", "./images/actions1/img18.png", "./images/actions1/img19.png", "./images/actions1/img20.png", "./images/actions1/img21.png", "./images/actions1/img22.png", "./images/actions1/img23.png", "./images/actions1/img24.png", "./images/actions1/img25.png"]
const actions1TextArr = ["sing", "run", "jump", "dance", "swim", "skate", "go", "stop", "turn", "eat", "drink", "cook", "bake", "clean", "buy", "ride", "travel", "study", "teach", "speak", "listen", "read", "write", "talk", "draw"]
const pastactionsArr = ["./images/pastactions/img1.png","./images/pastactions/img2.png", "./images/pastactions/img3.png", "./images/pastactions/img4.png", "./images/pastactions/img5.png"]
const pastactionsTextArr = ["went", "ate", "saw", "enjoyed", "had"]
const actions2Arr = ["./images/actions2/img1.png","./images/actions2/img2.png", "./images/actions2/img3.png", "./images/actions2/img4.png", "./images/actions2/img5.png", "./images/actions2/img6.png", "./images/actions2/img7.png", "./images/actions2/img8.png", "./images/actions2/img9.png", "./images/actions2/img10.png", "./images/actions2/img11.png", "./images/actions2/img12.png", "./images/actions2/img13.png", "./images/actions2/img14.png", "./images/actions2/img15.png"]
const actions2TextArr = ["like", "want", "look", "see", "play", "practice", "try", "enjoy", "get", "have", "make", "help", "join", "live", "think"]
const dailyactivitiesArr = ["./images/dailyactivities/img1.png","./images/dailyactivities/img2.png", "./images/dailyactivities/img3.png", "./images/dailyactivities/img4.png", "./images/dailyactivities/img5.png", "./images/dailyactivities/img6.png", "./images/dailyactivities/img7.png", "./images/dailyactivities/img8.png", "./images/dailyactivities/img9.png", "./images/dailyactivities/img10.png", "./images/dailyactivities/img11.png", "./images/dailyactivities/img12.png", "./images/dailyactivities/img13.png", "./images/dailyactivities/img14.png", "./images/dailyactivities/img15.png", "./images/dailyactivities/img16.png", "./images/dailyactivities/img17.png"]
const dailyactivitiesTextArr = ["get up", "brush my teeth", "take out the garbage", "get the newspaper", "eat breakfast", "go to school", "study English", "eat lunch", "go home", "play soccer", "walk my dog", "do my homework", "eat dinner", "wash the dishes", "take a bath", "watch TV", "go to bed"]
const frequencyArr = ["./images/frequency/img1.png","./images/frequency/img2.png", "./images/frequency/img3.png", "./images/frequency/img4.png"]
const frequencyTextArr = ["always", "usually", "sometimes", "never"]
const bodyArr = ["./images/body/img1.png","./images/body/img2.png", "./images/body/img3.png", "./images/body/img4.png", "./images/body/img5.png", "./images/body/img6.png", "./images/body/img7.png", "./images/body/img8.png", "./images/body/img9.png", "./images/body/img10.png", "./images/body/img11.png", "./images/body/img12.png"]
const bodyTextArr = ["head", "face", "shoulder", "hand", "knee", "eye", "ear", "nose", "teeth", "mouth", "leg", "toes"]
const clothesArr = ["./images/clothes/img1.png","./images/clothes/img2.png", "./images/clothes/img3.png", "./images/clothes/img4.png", "./images/clothes/img5.png", "./images/clothes/img6.png", "./images/clothes/img7.png", "./images/clothes/img8.png", "./images/clothes/img9.png", "./images/clothes/img10.png"]
const clothesTextArr = ["tshirt", "shirt", "vest", "sweater", "uniform", "pants", "cap", "hat", "gloves", "socks"]
const buildingsArr = ["./images/buildings/img1.png","./images/buildings/img2.png", "./images/buildings/img3.png", "./images/buildings/img4.png", "./images/buildings/img5.png", "./images/buildings/img6.png", "./images/buildings/img7.png", "./images/buildings/img8.png", "./images/buildings/img9.png", "./images/buildings/img10.png", "./images/buildings/img11.png", "./images/buildings/img12.png", "./images/buildings/img13.png", "./images/buildings/img14.png", "./images/buildings/img15.png", "./images/buildings/img16.png", "./images/buildings/img17.png", "./images/buildings/img18.png", "./images/buildings/img19.png", "./images/buildings/img20.png", "./images/buildings/img21.png", "./images/buildings/img22.png", "./images/buildings/img23.png", "./images/buildings/img24.png", "./images/buildings/img25.png", "./images/buildings/img26.png", "./images/buildings/img27.png", "./images/buildings/img28.png", "./images/buildings/img29.png"]
const buildingsTextArr = ["house", "elementary school", "junior high school", "park", "library", "museum", "city hall", "hospital", "bus stop", "station", "police station", "fire station", "gas station", "post office", "bookstore", "convenience store", "department store", "restaurant", "supermarket", "flower shop", "castle", "shrine", "temple", "amusement park", "aquarium", "stadium", "zoo", "bridge", "street"]
const directionsArr = ["./images/directions/img1.png","./images/directions/img2.png", "./images/directions/img3.png", "./images/directions/img4.png", "./images/directions/img5.png", "./images/directions/img6.png", "./images/directions/img7.png"]
const directionsTextArr = ["go", "straight", "turn", "right", "left", "block", "see"]
const locationsArr = ["./images/locations/img1.png","./images/locations/img2.png", "./images/locations/img3.png", "./images/locations/img4.png"]
const locationsTextArr = ["by", "in", "on", "under"]
const vehiclesArr = ["./images/vehicles/img1.png","./images/vehicles/img2.png", "./images/vehicles/img3.png", "./images/vehicles/img4.png", "./images/vehicles/img5.png", "./images/vehicles/img6.png", "./images/vehicles/img7.png", "./images/vehicles/img8.png", "./images/vehicles/img9.png", "./images/vehicles/img10.png"]
const vehiclesTextArr = ["bus", "car", "taxi", "truck", "train", "subway", "ship", "boat", "airplane", "bike"]
const schoolArr = ["./images/school/img1.png","./images/school/img2.png", "./images/school/img3.png", "./images/school/img4.png", "./images/school/img5.png", "./images/school/img6.png", "./images/school/img7.png", "./images/school/img8.png", "./images/school/img9.png", "./images/school/img10.png", "./images/school/img11.png"]
const schoolTextArr = ["classroom", "library", "music room", "gym", "playground", "swimming pool", "teachers office", "school nurses office", "school principals office", "entrance", "restroom"]
const subjectsArr = ["./images/subjects/img1.png","./images/subjects/img2.png", "./images/subjects/img3.png", "./images/subjects/img4.png", "./images/subjects/img5.png", "./images/subjects/img6.png", "./images/subjects/img7.png", "./images/subjects/img8.png", "./images/subjects/img9.png", "./images/subjects/img10.png", "./images/subjects/img11.png"]
const subjectsTextArr = ["English", "Japanese", "caligraphy", "social studies", "math", "science", "music", "arts and crafts", "home economics", "p.e", "moral education"]
const instrumentsArr = ["./images/instruments/img1.png","./images/instruments/img2.png", "./images/instruments/img3.png", "./images/instruments/img4.png", "./images/instruments/img5.png", "./images/instruments/img6.png", "./images/instruments/img7.png", "./images/instruments/img8.png"]
const instrumentsTextArr = ["recorder", "harmonica", "triangle", "piano", "guitar", "violin", "drum", "xylophone"]
const stationaryArr = ["./images/stationary/img1.png","./images/stationary/img2.png", "./images/stationary/img3.png", "./images/stationary/img4.png", "./images/stationary/img5.png", "./images/stationary/img6.png", "./images/stationary/img7.png", "./images/stationary/img8.png", "./images/stationary/img9.png", "./images/stationary/img10.png", "./images/stationary/img11.png", "./images/stationary/img12.png"]
const stationaryTextArr = ["crayon", "marker", "pen", "pencil", "pencil case", "pencil sharpener", "eraser", "ruler", "glue", "scissors", "stapler", "notebook"]
const commonitemsArr = ["./images/commonitems/img1.png","./images/commonitems/img2.png", "./images/commonitems/img3.png", "./images/commonitems/img4.png", "./images/commonitems/img5.png", "./images/commonitems/img6.png", "./images/commonitems/img7.png", "./images/commonitems/img8.png", "./images/commonitems/img9.png", "./images/commonitems/img10.png", "./images/commonitems/img11.png", "./images/commonitems/img12.png", "./images/commonitems/img13.png", "./images/commonitems/img14.png", "./images/commonitems/img15.png", "./images/commonitems/img16.png", "./images/commonitems/img17.png", "./images/commonitems/img18.png", "./images/commonitems/img19.png", "./images/commonitems/img20.png", "./images/commonitems/img21.png", "./images/commonitems/img22.png", "./images/commonitems/img23.png", "./images/commonitems/img24.png", "./images/commonitems/img25.png", "./images/commonitems/img26.png", "./images/commonitems/img27.png", "./images/commonitems/img28.png"]
const commonitemsTextArr = ["ball", "bat", "racket", "bag", "plastic bag", "basket", "box", "cup", "watch", "clock", "book", "textbook", "comic book", "computer", "calendar", "map", "pictures", "umbrella", "present", "treasure", "desk", "chair", "wheelchair", "table", "bath", "bed", "wall", "window"]
const activitiesArr = ["./images/activities/img1.png","./images/activities/img2.png", "./images/activities/img3.png", "./images/activities/img4.png", "./images/activities/img5.png", "./images/activities/img6.png", "./images/activities/img7.png", "./images/activities/img8.png", "./images/activities/img9.png", "./images/activities/img10.png", "./images/activities/img11.png", "./images/activities/img12.png", "./images/activities/img13.png", "./images/activities/img14.png"]
const activitiesTextArr = ["camping", "fishing", "hiking", "shopping", "reading", "running", "jogging", "kite flying", "top spinning", "cards", "rock paper scissors", "tag", "jump rope", "unicycle"]
const schooleventsArr = ["./images/schoolevents/img1.png","./images/schoolevents/img2.png", "./images/schoolevents/img3.png", "./images/schoolevents/img4.png", "./images/schoolevents/img5.png", "./images/schoolevents/img6.png", "./images/schoolevents/img7.png", "./images/schoolevents/img8.png", "./images/schoolevents/img9.png", "./images/schoolevents/img10.png", "./images/schoolevents/img11.png", "./images/schoolevents/img12.png", "./images/schoolevents/img13.png"]
const schooleventsTextArr = ["field trip", "school trip", "chorus contest", "drama festival", "music festival", "school festival", "volunteer day", "sports day", "swimming meet", "fire drill", "summer vacation", "entrance ceremony", "graduation ceremony"]
const yearlyeventsArr = ["./images/yearlyevents/img1.png","./images/yearlyevents/img2.png", "./images/yearlyevents/img3.png", "./images/yearlyevents/img4.png", "./images/yearlyevents/img5.png", "./images/yearlyevents/img6.png", "./images/yearlyevents/img7.png", "./images/yearlyevents/img8.png", "./images/yearlyevents/img9.png", "./images/yearlyevents/img10.png"]
const yearlyeventsTextArr = ["birthday", "new years day", "dolls festival", "april fools day", "childrens day", "star festival", "fireworks", "halloween", "christmas day", "new years eve"]
const conditionsArr = ["./images/conditions/img1.png","./images/conditions/img2.png", "./images/conditions/img3.png", "./images/conditions/img4.png", "./images/conditions/img5.png", "./images/conditions/img6.png", "./images/conditions/img7.png", "./images/conditions/img8.png", "./images/conditions/img9.png", "./images/conditions/img10.png", "./images/conditions/img11.png", "./images/conditions/img12.png"]
const conditionsTextArr = ["big", "small", "long", "short", "new", "old", "easy", "difficult", "same", "different", "fast", "slow"]
const descriptionsArr = ["./images/descriptions/img1.png","./images/descriptions/img2.png", "./images/descriptions/img3.png", "./images/descriptions/img4.png", "./images/descriptions/img5.png", "./images/descriptions/img6.png", "./images/descriptions/img7.png", "./images/descriptions/img8.png", "./images/descriptions/img9.png", "./images/descriptions/img10.png", "./images/descriptions/img11.png", "./images/descriptions/img12.png", "./images/descriptions/img13.png", "./images/descriptions/img14.png", "./images/descriptions/img15.png"]
const descriptionsTextArr = ["good", "great", "nice", "fantastic", "wonderful", "beautiful", "cool", "cute", "favorite", "interesting", "exciting", "famous", "popular", "international", "fun"]
const jobsArr = ["./images/jobs/img1.png","./images/jobs/img2.png", "./images/jobs/img3.png", "./images/jobs/img4.png", "./images/jobs/img5.png", "./images/jobs/img6.png", "./images/jobs/img7.png", "./images/jobs/img8.png", "./images/jobs/img9.png", "./images/jobs/img10.png", "./images/jobs/img11.png", "./images/jobs/img12.png", "./images/jobs/img13.png", "./images/jobs/img14.png", "./images/jobs/img15.png", "./images/jobs/img16.png", "./images/jobs/img17.png", "./images/jobs/img18.png", "./images/jobs/img19.png", "./images/jobs/img20.png", "./images/jobs/img21.png", "./images/jobs/img22.png", "./images/jobs/img23.png", "./images/jobs/img24.png", "./images/jobs/img25.png"]
const jobsTextArr = ["artist", "musician", "singer", "comedian", "doctor", "nurse", "dentist", "vet", "zookeeper", "cook", "baker", "florist", "farmer", "police officer", "fire fighter", "pilot", "flight attendant", "bus driver", "astronaut", "teacher", "scientist", "programmer", "baseball player", "soccer player", "figure skater"]
const clubactivitiesArr = ["./images/clubactivities/img1.png","./images/clubactivities/img2.png", "./images/clubactivities/img3.png", "./images/clubactivities/img4.png", "./images/clubactivities/img5.png", "./images/clubactivities/img6.png", "./images/clubactivities/img7.png", "./images/clubactivities/img8.png", "./images/clubactivities/img9.png", "./images/clubactivities/img10.png", "./images/clubactivities/img11.png", "./images/clubactivities/img12.png", "./images/clubactivities/img13.png", "./images/clubactivities/img14.png", "./images/clubactivities/img15.png", "./images/clubactivities/img16.png", "./images/clubactivities/img17.png", "./images/clubactivities/img18.png"]
const clubactivitiesTextArr = ["baseball team", "softball team", "basketball team", "volleyball team", "soccer team", "tennis team", "table tennis team", "badminton team", "track and field team", "gynmastics team", "art club", "drama club", "broadcasting club", "cooking club", "newspaper club", "photography club", "brass band", "chorus"]

const allImagesArr = feelingsArr.concat(numbersArr).concat(weatherArr).concat(colorArr).concat(shapesArr).concat(sportsArr).concat(foodsArr).concat(dessertsArr).concat(drinksArr).concat(fruitsvegetablesArr).concat(ingredientsArr).concat(mealsArr).concat(tastesArr).concat(animalsArr).concat(seaanimalsArr).concat(bugsArr).concat(natureArr).concat(monthsArr).concat(seasonsArr).concat(timesofdayArr).concat(daysArr).concat(countriesArr).concat(familyArr).concat(peopleArr).concat(personalitiesArr).concat(actions1Arr).concat(pastactionsArr).concat(actions2Arr).concat(dailyactivitiesArr).concat(frequencyArr).concat(bodyArr).concat(clothesArr).concat(buildingsArr).concat(directionsArr).concat(locationsArr).concat(vehiclesArr).concat(schoolArr).concat(subjectsArr).concat(instrumentsArr).concat(stationaryArr).concat(commonitemsArr).concat(activitiesArr).concat(schooleventsArr).concat(yearlyeventsArr).concat(conditionsArr).concat(descriptionsArr).concat(jobsArr).concat(clubactivitiesArr)
const allTextArr = feelingsTextArr.concat(numbersTextArr).concat(weatherTextArr).concat(colorTextArr).concat(shapesTextArr).concat(sportsTextArr).concat(foodsTextArr).concat(dessertsTextArr).concat(drinksTextArr).concat(fruitsvegetablesTextArr).concat(ingredientsTextArr).concat(mealsTextArr).concat(tastesTextArr).concat(animalsTextArr).concat(seaanimalsTextArr).concat(bugsTextArr).concat(natureTextArr).concat(monthsTextArr).concat(seasonsTextArr).concat(timesofdayTextArr).concat(daysTextArr).concat(countriesTextArr).concat(familyTextArr).concat(peopleTextArr).concat(personalitiesTextArr).concat(actions1TextArr).concat(pastactionsTextArr).concat(actions2TextArr).concat(dailyactivitiesTextArr).concat(frequencyTextArr).concat(bodyTextArr).concat(clothesTextArr).concat(buildingsTextArr).concat(directionsTextArr).concat(locationsTextArr).concat(vehiclesTextArr).concat(schoolTextArr).concat(subjectsTextArr).concat(instrumentsTextArr).concat(stationaryTextArr).concat(commonitemsTextArr).concat(activitiesTextArr).concat(schooleventsTextArr).concat(yearlyeventsTextArr).concat(conditionsTextArr).concat(descriptionsTextArr).concat(jobsTextArr).concat(clubactivitiesTextArr)




const feelingsBtn = document.getElementById("feelings")
const weatherBtn = document.getElementById("weather")
const colorsBtn = document.getElementById("colors")
const sportsBtn = document.getElementById("sports")
const shapesBtn = document.getElementById("shapes")
const foodsBtn = document.getElementById("foods")
const drinksBtn = document.getElementById("drinks")
const dessertsBtn = document.getElementById("desserts")
const fruitsvegetablesBtn = document.getElementById("fruitsvegetables")
const ingredientsBtn = document.getElementById("ingredients")
const mealsBtn = document.getElementById("meals")
const tastesBtn = document.getElementById("tastes")
const animalsBtn = document.getElementById("animals")
const seaanimalsBtn = document.getElementById("seaanimals")
const bugsBtn = document.getElementById("bugs")
const natureBtn = document.getElementById("nature")
const monthsBtn = document.getElementById("months")
const seasonsBtn = document.getElementById("seasons")
const timesofdayBtn = document.getElementById("timesofday")
const daysBtn = document.getElementById("days")
const countriesBtn = document.getElementById("countries")
const familyBtn = document.getElementById("family")
const peopleBtn = document.getElementById("people")
const personalitiesBtn = document.getElementById("personalities")
const actions1Btn = document.getElementById("actions1")
const pastactionsBtn = document.getElementById("pastactions")
const actions2Btn = document.getElementById("actions2")
const dailyactivitiesBtn = document.getElementById("dailyactivities")
const frequencyBtn = document.getElementById("frequency")
const bodyBtn = document.getElementById("body")
const clothesBtn = document.getElementById("clothes")
const buildingsBtn = document.getElementById("buildings")
const directionsBtn = document.getElementById("directions")
const locationsBtn = document.getElementById("locations")
const vehiclesBtn = document.getElementById("vehicles")
const schoolBtn = document.getElementById("school")
const subjectsBtn = document.getElementById("subjects")
const instrumentsBtn = document.getElementById("instruments")
const stationaryBtn = document.getElementById("stationary")
const commonitemsBtn = document.getElementById("commonitems")
const activitiesBtn = document.getElementById("activities")
const schooleventsBtn = document.getElementById("schoolevents")
const yearlyeventsBtn = document.getElementById("yearlyevents")
const conditionsBtn = document.getElementById("conditions")
const descriptionsBtn = document.getElementById("descriptions")
const jobsBtn = document.getElementById("jobs")
const clubactivitiesBtn = document.getElementById("clubactivities")

const quickStart = document.getElementById("quick-start")
const clearBtn = document.getElementById("clear")
const renderBtn = document.getElementById("render-btn")
const playAgainButton = document.getElementById("play-again-button")
const menuButton = document.getElementById("menu-button")

feelingsBtn.addEventListener("click",() => beginSelection(feelingsArr))
weatherBtn.addEventListener("click",() => beginSelection(weatherArr))
colorsBtn.addEventListener("click",() => beginSelection(colorArr))
sportsBtn.addEventListener("click",() => beginSelection(sportsArr))
shapesBtn.addEventListener("click",() => beginSelection(shapesArr))
foodsBtn.addEventListener("click",() => beginSelection(foodsArr))
dessertsBtn.addEventListener("click",() => beginSelection(dessertsArr))
drinksBtn.addEventListener("click",() => beginSelection(drinksArr))
fruitsvegetablesBtn.addEventListener("click",() => beginSelection(fruitsvegetablesArr))
ingredientsBtn.addEventListener("click",() => beginSelection(ingredientsArr))
mealsBtn.addEventListener("click",() => beginSelection(mealsArr))
tastesBtn.addEventListener("click",() => beginSelection(tastesArr))
animalsBtn.addEventListener("click",() => beginSelection(animalsArr))
seaanimalsBtn.addEventListener("click",() => beginSelection(seaanimalsArr))
bugsBtn.addEventListener("click",() => beginSelection(bugsArr))
natureBtn.addEventListener("click",() => beginSelection(natureArr))
monthsBtn.addEventListener("click",() => beginSelection(monthsArr))
seasonsBtn.addEventListener("click",() => beginSelection(seasonsArr))
timesofdayBtn.addEventListener("click",() => beginSelection(timesofdayArr))
daysBtn.addEventListener("click",() => beginSelection(daysArr))
countriesBtn.addEventListener("click",() => beginSelection(countriesArr))
familyBtn.addEventListener("click",() => beginSelection(familyArr))
peopleBtn.addEventListener("click",() => beginSelection(peopleArr))
personalitiesBtn.addEventListener("click",() => beginSelection(personalitiesArr))
actions1Btn.addEventListener("click",() => beginSelection(actions1Arr))
pastactionsBtn.addEventListener("click",() => beginSelection(pastactionsArr))
actions2Btn.addEventListener("click",() => beginSelection(actions2Arr))
dailyactivitiesBtn.addEventListener("click",() => beginSelection(dailyactivitiesArr))
frequencyBtn.addEventListener("click",() => beginSelection(frequencyArr))
bodyBtn.addEventListener("click",() => beginSelection(bodyArr))
clothesBtn.addEventListener("click",() => beginSelection(clothesArr))
buildingsBtn.addEventListener("click",() => beginSelection(buildingsArr))
directionsBtn.addEventListener("click",() => beginSelection(directionsArr))
locationsBtn.addEventListener("click",() => beginSelection(locationsArr))
vehiclesBtn.addEventListener("click",() => beginSelection(vehiclesArr))
schoolBtn.addEventListener("click",() => beginSelection(schoolArr))
subjectsBtn.addEventListener("click",() => beginSelection(subjectsArr))
instrumentsBtn.addEventListener("click",() => beginSelection(instrumentsArr))
stationaryBtn.addEventListener("click",() => beginSelection(stationaryArr))
commonitemsBtn.addEventListener("click",() => beginSelection(commonitemsArr))
activitiesBtn.addEventListener("click",() => beginSelection(activitiesArr))
schooleventsBtn.addEventListener("click",() => beginSelection(schooleventsArr))
yearlyeventsBtn.addEventListener("click",() => beginSelection(yearlyeventsArr))
conditionsBtn.addEventListener("click",() => beginSelection(conditionsArr))
descriptionsBtn.addEventListener("click",() => beginSelection(descriptionsArr))
jobsBtn.addEventListener("click",() => beginSelection(jobsArr))
clubactivitiesBtn.addEventListener("click",() => beginSelection(clubactivitiesArr))

function beginSelection(arr) {
    if (!selectionOpen) {
        reSelect(arr)
        renderSelect("select-container", arr)
        selectionOpen = true
    }
}

function reSelect(arr) {
    selectArr = activeArr.filter( (x) => arr.includes(x) )
    activeArr = activeArr.filter( (x) => !arr.includes(x) )
}

function renderSelect(targetDiv, arr){
    gameBtnDisplay.className = "hide-me"
    topicBtnDisplay.className = "hide-me"
    let currentDiv = document.getElementById(targetDiv)
    currentDiv.innerHTML = `<div class="inner-btn-menu"><button id="selectall" onClick="selectAll()">All</button><button id="clearselection" onClick="selectClear()">Clear</button><button id="closewindow" onClick="passSelect()">Confirm and Go Back</button></div>`
    for ( let i = 0; i < arr.length; i++) {
    currentDiv.innerHTML += `<div class="img-box"><img class="select-img unselected" src="${arr[i]}"></div>`
    imgList = document.querySelectorAll(`.select-img`)
    imgList.forEach( (img) => {
        let reselectImg = img.getAttribute("src")
        if (selectArr.includes(reselectImg) ) {
            img.classList.add("selected")
            img.classList.remove("unselected")
        }
        img.addEventListener("click",function() {
            let currentImg = img.getAttribute("src")
            if ( img.classList.contains("unselected") ) {
                currentImg = img.getAttribute("src")
                selectArr.push(currentImg)
                img.classList.add("selected")
                img.classList.remove("unselected")
            } else {
                currentImg = img.getAttribute("src")
                let deselectNum = selectArr.indexOf(currentImg)
                let deselector = selectArr.splice( deselectNum, 1)
                img.classList.remove("selected")
                img.classList.add("unselected")
            }
        }) 
    })
    } 
}

function selectAll() {
    selectArr = []
    imgList = document.querySelectorAll(`.select-img`)
    imgList.forEach( (img) => {
        let currentImg = img.getAttribute("src")
        selectArr.push(currentImg)
        img.classList.add("selected")
        img.classList.remove("unselected")
    })
}

function selectClear() {
    selectArr = []
    imgList = document.querySelectorAll(`.select-img`)
    imgList.forEach( (img) => {
        let currentImg = img.getAttribute("src")
        img.classList.remove("selected")
        img.classList.add("unselected")
    })
}

function passSelect() {
    activeArr = activeArr.concat(selectArr)
    selectArr = []
    let currenterDiv = document.getElementById("select-container")
    currenterDiv.innerHTML = ""
    selectionOpen = false
    gameBtnDisplay.className = ""
    topicBtnDisplay.className = ""
    
}

quickStart.addEventListener("click",function(){
    activeArr = activeArr.concat(feelingsArr).concat(numbersArr).concat(weatherArr).concat(colorArr).concat(shapesArr).concat(sportsArr).concat(foodsArr).concat(dessertsArr).concat(drinksArr).concat(fruitsvegetablesArr).concat(ingredientsArr).concat(mealsArr).concat(tastesArr).concat(animalsArr).concat(seaanimalsArr).concat(bugsArr).concat(natureArr).concat(monthsArr).concat(seasonsArr).concat(timesofdayArr).concat(daysArr).concat(countriesArr).concat(familyArr).concat(peopleArr).concat(personalitiesArr).concat(actions1Arr).concat(pastactionsArr).concat(actions2Arr).concat(dailyactivitiesArr).concat(frequencyArr).concat(bodyArr).concat(clothesArr).concat(buildingsArr).concat(directionsArr).concat(locationsArr).concat(vehiclesArr).concat(schoolArr).concat(subjectsArr).concat(instrumentsArr).concat(stationaryArr).concat(commonitemsArr).concat(activitiesArr).concat(schooleventsArr).concat(yearlyeventsArr).concat(conditionsArr).concat(descriptionsArr).concat(jobsArr).concat(clubactivitiesArr)
    renderGame(activeArr)
})

renderBtn.addEventListener("click", function(){
    if (activeArr.length >= 1) {
    renderGame(activeArr)
    }
})

clearBtn.addEventListener("click",function(){
    clearAll()
})

playAgainButton.addEventListener("click",function() {
    renderGame(activeArr)
    resultBox.classList.add("reduced")
})

menuButton.addEventListener("click",function() {
    clearAll()
    resultBox.classList.add("reduced")
})

const nextButton = document.querySelector(".next-button")
nextButton.addEventListener("click", function() {
    if ( answered ) {
    if ( round < gameLimit ) {
    renderNext()
    } else {
        renderLast()
    }
}
})

function renderGame(arr){
    let textButtons = document.querySelectorAll(".question-text-button")
    textButtons.forEach( (x) => {
    x.addEventListener("click",function() {
        let questionImage = document.querySelector(".question-image")
        let currentImgSrc = questionImage.getAttribute("src")
        let imageIndex = allImagesArr.indexOf(currentImgSrc)
        let imageText = allTextArr[imageIndex]
        let answerAndNumber = x.textContent
        let splitArr = answerAndNumber.split(" ")
        splitArr.shift()
        splitArr = splitArr.join(" ")
        if ( splitArr.includes(imageText) ) {
            if (!answered) {
            score++
            }
            answered = true
            x.classList.add("correct-answer")
        } else {
            answered = true
            x.classList.add("wrong-answer")
        }
    })
    })
    gameActive = true
    difficultySelect.classList.add("unavailable")
    round = 0
    score = 0
    answersArr = []
    displayArr = []
    displayTextArr = []
    answered = false
    let allTextBoxes = document.querySelectorAll(".question-text-button")
    allTextBoxes.forEach( (x) => {
        x.textContent = ""
        x.className = "question-text-button"
    })
    displayArr = arr.sort( () => { return 0.5 - Math.random() } )
    displayArr = displayArr.slice(0, 10)
    gameLimit = displayArr.length
    displayArr = displayArr.sort( () => { return 0.5 - Math.random() } )
    for ( let i = 0; i < displayArr.length; i++) {
        let getImage = displayArr[i]
        let getImageIndex = allImagesArr.indexOf(getImage)
        let getText = allTextArr[getImageIndex]
        displayTextArr.push( getText )
    }
    questionImageContainer.innerHTML = `<img class="question-image" src="${displayArr[0]}">`
    answersArr.push( displayTextArr[0] )
    if ( difficulty < 4 ) {
    otherAnswersArr = displayTextArr.slice(1, 10)
    otherAnswersArr = otherAnswersArr.sort(  () => { return 0.5 - Math.random() } )
    otherAnswersArr = otherAnswersArr.slice(0, difficulty - 1)
    answersArr = answersArr.concat(otherAnswersArr)
    } else {
        console.log(otherAnswersArr)
        otherAnswersArr = allTextArr.filter( (x) => !answersArr.includes(x) )
        console.log(otherAnswersArr)
        otherAnswersArr = otherAnswersArr.sort(  () => { return 0.5 - Math.random() } )
        otherAnswersArr = otherAnswersArr.slice(0, difficulty - 1)
        console.log(otherAnswersArr)
        answersArr = answersArr.concat(otherAnswersArr)        
    }
    answersArr = answersArr.sort( () => {return 0.5 - Math.random() } )

    for ( let i = 0; i < answersArr.length; i++ ) {
        let currentTextBox = questionTextBox.children[i]
        currentTextBox.className = "question-text-button"
        if ( answersArr[i].length > 15 ) {
            currentTextBox.classList.add("verylong")
        } else if ( answersArr[i].length >= 6 ) {
            currentTextBox.classList.add("long")
        }
        currentTextBox.textContent = (i+1) + "." + " " + answersArr[i]
    }
    cardsContainer.classList.remove("reduced")
    topicBtnDisplay.classList.add("hide-me")
    round++
}

function renderNext() {
    answersArr = []
    answered = false
    let allTextBoxes = document.querySelectorAll(".question-text-button")
    allTextBoxes.forEach( (x) => {
        x.textContent = ""
        x.className = "question-text-button"
    })
    displayArr.shift()
    displayTextArr.push(displayTextArr[0])
    displayTextArr.shift()
    questionImageContainer.innerHTML = `<img class="question-image" src="${displayArr[0]}">`
    answersArr.push( displayTextArr[0] )
    if ( difficulty < 4 ) {
    otherAnswersArr = displayTextArr.slice(1, 10)
    otherAnswersArr = otherAnswersArr.sort(  () => { return 0.5 - Math.random() } )
    otherAnswersArr = otherAnswersArr.slice(0, difficulty - 1)
    answersArr = answersArr.concat(otherAnswersArr)
    } else {
        console.log(otherAnswersArr)
        otherAnswersArr = allTextArr.filter( (x) => !answersArr.includes(x) )
        console.log(otherAnswersArr)
        otherAnswersArr = otherAnswersArr.sort(  () => { return 0.5 - Math.random() } )
        otherAnswersArr = otherAnswersArr.slice(0, difficulty - 1)
        console.log(otherAnswersArr)
        answersArr = answersArr.concat(otherAnswersArr)        
    }
    answersArr = answersArr.sort( () => {return 0.5 - Math.random() } )

    for ( let i = 0; i < answersArr.length; i++ ) {
        let currentTextBox = questionTextBox.children[i]
        currentTextBox.className = "question-text-button"
        if ( answersArr[i].length > 15 ) {
            currentTextBox.classList.add("verylong")
        } else if ( answersArr[i].length >= 6 ) {
            currentTextBox.classList.add("long")
        }
        currentTextBox.textContent = (i+1) + "." + " " + answersArr[i]
    }
    cardsContainer.classList.remove("reduced")
    topicBtnDisplay.classList.add("hide-me")
    round++
}

function renderLast() {
    resultBox.classList.remove("reduced")
    let scoreDisplay = document.getElementById("score")
    scoreDisplay.textContent = `You scored ${score}/${gameLimit}`
    gameActive = false
    difficultySelect.classList.remove("unavailable")
}

function clearAll() {
    cardsContainer.classList.add("reduced")
    resultBox.classList.add("reduced")
    let currenterDiv = document.getElementById("select-container")
    currenterDiv.innerHTML = ""
    activeArr = []
    displayArr = []
    selectArr = []
    score = 0
    gameActive = false
    difficultySelect.classList.remove("unavailable")
    topicBtnDisplay.classList.remove("hide-me")
    document.querySelectorAll(`.toggleOn`).forEach( (x) => {
    x.className = "toggleOff"
    })
}
