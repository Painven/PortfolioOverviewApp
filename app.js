var app = new Vue({
    el: "#app",
    data: {
        message: "from view",
        selectedProject: {},
        projects: [],
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
    mounted: async function () {
        let d = this;
        await fetch("./projects.json")
            .then((response) => response.json())
            .then((json) => {
                this.projects = json;
                this.selectedProject = this.projects[0];
            });
    },
});
