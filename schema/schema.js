//Contains all the knowledge for GraphQL 
//What properties each object has and how each object is related to each other.

const graphql = require('graphql');

const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt
} = graphql;

const UserType = new GraphQLObjectType({
    name: 'User',
    fields: {
        id: {type: GraphQLString},
        firstName: {type: GraphQLString},
        age: {type: GraphQLInt }
    }
})


const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        user:{
            type: 'UserType',
            args: {id: {type: GraphQLString }},
            resolve(parentValue,args){

            }
        }
    }
})