var person = {
    firstName : 'Raghav',
    lastName : 'MJ',
    email : 'raghav@gmail.com',
    phone: 123,
    age : 29,
    isPreferred : false,
    profession : {
        compName : 'Fortune 500',
        desig:'SE'
    },
    skills: ['C', 'C++', 'Adobe SDKs', 'JS', 'TS']
}

var json = {
	"firstName": "Raghav",
	"lastName": "MJ",
	"email": "raghav@gmail.com",
	"phone": 123,
	"age": 29,
	"isPreferred": false,
	"profession": {
		"compName": "Fortune 500",
		"desig": "SE"
	},
	"skills": ["C", "C++", "Adobe SDKs", "JS", "TS"]
}

// From JS Object to JSON String -> var jsonString = JSON.stringify(person);
// From JSON String to JS Object -> var origObject = JSON.parse(jsonString);

// FrontEnd -> JSON -> BackEnd
// FrontEnd <- JSON <- BackEnd