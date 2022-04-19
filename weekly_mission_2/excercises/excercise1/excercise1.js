const repo = {
    name: "LaunchX",
    author: "carlogilmar",
    language: "JavaScript",
    numberOfCommits: 100,
    stars: 199,
    forks: 299,
    issues_open: 10,
    issues_close: 10,
    getTotalIssues: function(){
      return this.issues_open + this.issues_close
    },
    getGeneralInfo: function(){
      return `This repository ${this.name} was created by ${this.author}`
    }
   }
   
   console.log("Nombre del repo:" + repo.name)
   console.log("Issues totales: " + repo.getTotalIssues())
   console.log(repo.getGeneralInfo())

const issue = {
    title: "Issues",
    repositoryNameAssociated: "LaunchX",
    status: "open",
    numberOfComments: 20,
    labels: 5,
    author: "irvingjaramillo",
    dateCreated: Date(),
    lastUpdated: Date(),
    getTitleAndAuthor: function(){
        return `Nombre del issue es: ${this.title} y el autor es: ${this.author}` 
    },
    getGeneralInfo: function(){
        return `El issue ${this.title} creado por ${this.author} fue creado en ${this.dateCreated} y modificado en ${this.lastUpdated}`
    }
}

console.log(issue.getTitleAndAuthor())
console.log(issue.getGeneralInfo())

const PullRequest = {
    title: "Pull",
    branchName: "main",
    dateCreated: Date(),
    status: "open",
    repositoryNameAssociated: "LaunchX",
    getStatus: function(){
        return  `El estatus es: ${this.status}`
    },
    getTitleAndAuthor: function(){
        return `El título es ${this.title} y el autor es `
    }
}

console.log(PullRequest.getStatus())
console.log(PullRequest.getTitleAndAuthor() + issue.author)