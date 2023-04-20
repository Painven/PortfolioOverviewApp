var app = new Vue({
    el: "#app",
    data: {
        message: "from view",
        selectedProject: {},
        projects: [
            {
                id: 1,
                name: "Project 1",
                screenshotsFolderName: "project1",
                description:
                    "Excepteur fugiat officia laboris mollit cupidatat. Eiusmod cupidatat ullamco aute et sint cupidatat magna laboris incididunt magna minim proident laboris exercitation. Labore Lorem quis fugiat exercitation commodo amet esse ipsum laborum ut consequat. Officia officia sunt aute reprehenderit ea minim nostrud. Tempor et occaecat officia cillum. Anim et et aliqua velit nisi occaecat reprehenderit magna qui magna sunt veniam. Commodo pariatur proident laboris non eiusmod ipsum dolor. Tempor mollit sint non eu elit nulla. ",
                details_page: "https://github.com/painven/project1",
                tags: ["WPF", "MVVM"],
                last_update: "02.01.2023",
                screenshots: [
                    {
                        filename: "1.jpg",
                        description: "Описание того что на скриншоте",
                    },
                    {
                        filename: "1.jpg",
                        description: "Описание того что на скриншоте",
                    },
                    {
                        filename: "1.jpg",
                        description: "Описание того что на скриншоте",
                    },
                    {
                        filename: "1.jpg",
                        description: "Описание того что на скриншоте",
                    },
                    {
                        filename: "1.jpg",
                        description: "Описание того что на скриншоте",
                    },
                    {
                        filename: "1.jpg",
                        description: "Описание того что на скриншоте",
                    },
                ],
            },
            {
                id: 2,
                name: "Project 2",
                screenshotsFolderName: "project2",
                description:
                    "Excepteur fugiat officia laboris mollit cupidatat. Eiusmod cupidatat ullamco aute et sint cupidatat magna laboris incididunt magna minim proident laboris exercitation. Labore Lorem quis fugiat exercitation commodo amet esse ipsum laborum ut consequat. Officia officia sunt aute reprehenderit ea minim nostrud. Tempor et occaecat officia cillum. Anim et et aliqua velit nisi occaecat reprehenderit magna qui magna sunt veniam. Commodo pariatur proident laboris non eiusmod ipsum dolor. Tempor mollit sint non eu elit nulla. ",
                details_page: "https://github.com/painven/project2",
                tags: ["Blazor", "Telegram"],
                last_update: "01.01.2023",
                screenshots: [
                    {
                        filename: "1.jpg",
                        description: "Описание того что на скриншоте",
                    },
                ],
            },
        ],
    },
    methods: {
        getScreenshotFullPathForProject(fileName, project) {
            return (
                "/screenshots/" + project.screenshotsFolderName + "/" + fileName
            );
        },
        changeActiveProject(newProject) {
            this.selectedProject = newProject;
        },
    },
    mounted: function () {
        this.selectedProject = this.projects[0];
    },
});
