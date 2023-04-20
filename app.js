var app = new Vue({
    el: "#app",
    data: {
        message: "from view",
        projects: [
            {
                name: "project1",
                tags: ["WPF", "MVVM"],
                id: 1,
            },
            {
                name: "project2",
                tags: ["Blazor", "Telegram"],
                id: 2,
            },
            {
                name: "project3",
                tags: ["PHP", "JS"],
                id: 3,
            },
            {
                name: "project4",
                tags: ["VueJS", "HTML"],
                id: 4,
            },
        ],
    },
});
