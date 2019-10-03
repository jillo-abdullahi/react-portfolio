const portfolioData = {
    topProjects: [
        {
            id: "1",
            name: "your weather",
            icon: "images/thunder.svg",
            url: "https://your-weather-90.firebaseapp.com/",
            source: "https://github.com/jillo-abdullahi/your-weather",
            description: "A weather application for current weather along with a 7-day forecast.",
            stacks : ['React','Redux', 'DarkSky API', 'Firebase'],

        },
        {
            id: "6",
            name: "CN Jokes",
            icon: "images/cn-jokes.gif",
            url: "http://cn-jokes.s3-website.us-east-2.amazonaws.com",
            source: "https://github.com/jillo-abdullahi/chuck-norris-jokes",
            description: "A web app with lots of Chuck Norris jokes to brighten your day :-)",
            stacks : ['React', 'Redux', 'AWS S3', 'ICDN.com API'],
        },
        {
            id: "3",
            name: "stackoverflow lite api",
            icon: "images/stackoverflow-lite.gif",
            url: "https://stackoverflowlite-api.herokuapp.com/",
            source: "https://github.com/jillo-abdullahi/stackoverflow-lite-api",
            description: "An API where people can ask questions and provide answers.",
            stacks : ['Python', 'Flask', 'Swagger', 'Heroku'],

        }],
    otherProjects: [
        {
            id: "2",
            name: "github search",
            icon: "images/github-search.gif",
            url: "https://jillo-abdullahi.github.io/Github-Search/",
            source: "https://github.com/jillo-abdullahi/Github-Search",
            description: "A search application to find users on Github.",
            stacks : ['HTML/CSS', 'VanillaJS', 'Github API', 'Github Pages'],

        },
        {
            id: "4",
            name: "random quotes",
            icon: "images/random-quotes.gif",
            url: "https://jillo-abdullahi.github.io/Random-Quote-Machine/",
            source: "https://github.com/jillo-abdullahi/Random-Quote-Machine",
            description: "A machine that generates random awesome quotes for your tweeting pleasure :)",
            stacks : ['HTML/CSS', 'VanillaJS', 'forismatic.com API', 'Github Pages'],
        },
        {
            id: "5",
            name: "book a meal api",
            icon: "images/book-a-meal.gif",
            source: "https://github.com/jillo-abdullahi/book-a-meal",
            description: "An API that allows customers to make food orders",
            stacks : ['Python', 'Flask', 'Github Pages'],
        }
        ],
    socialLinks : {
                github: "https://github.com/jillo-abdullahi",
                linkedIn: "https://www.linkedin.com/in/jilloabdullahi/",
                resume: "https://drive.google.com/file/d/1ZF1SMpfgo0Z7q6wZ13POSeh5FZDzWb_Z/view?usp=sharing"
            }
}

export default portfolioData;