const twitter = {
    name: "Irving Jaramillo",
    user: "Die_Kraken",
    follows: 20,
    followers: 11,
    getUserAndFollowers: function (){
        return this.user +"/"+ this.followers
    }
}

const facebook = {
    user: "Irving Jaramillo",
    friends: 1327,
    followers: 16,
    getUserAndFriends: function (){
        return this.user +"/"+ this.friends
    }
}

const uber = {
    user: "Irving Jaramillo",
    stars: 4.88,
}

console.log(`Las estadisticas del usuario de twiter usuario/seguidores son: ${twitter.getUserAndFollowers()} 
de Facebook usuario/amigos son: ${facebook.getUserAndFriends()} Uber usuario/estrellas son ${uber.user +"/"+ uber.stars}`)
