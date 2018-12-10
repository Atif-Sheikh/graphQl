const graphql = require("graphql");
const _ = require("lodash");
const IceCream = require("../models/icecream");

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLSchema,
  GraphQLList,
  GraphQLNonNull,
  GraphQLID
} = graphql;

const IceCreameType = new GraphQLObjectType({
  name: "IceCreame",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    color: { type: GraphQLString },
    type: { type: GraphQLString },
  })
}); 

const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    addIceCream: {
      type: IceCreameType,
      args: {
        name: { type: new GraphQLNonNull(GraphQLString) },
        type: { type: new GraphQLNonNull(GraphQLString) },
        color: { type: new GraphQLNonNull(GraphQLString) }
      },
      resolve(parent, args) {
        let Icecream = new IceCream({
          name: args.name,
          type: args.type,
          color: args.color
        });
        return Icecream.save();
      }
    },
    deleteIceCream: {
      type: IceCreameType,
      args: {
        id: {
          type: new GraphQLNonNull(GraphQLString)
        }
      },
      resolve(parent, args) {
        const removedIceCream = IceCream.findById(args.id).exec();
        if(!removedIceCream){
          throw new Error("Error");
        }
        return removedIceCream;
      }
    },
    updateIceCream: {
      type: IceCreameType,
      args: {
        id: {
          type: new GraphQLNonNull(GraphQLString)
        },
        name: {
          type: new GraphQLNonNull(GraphQLString)
        },
        type: {
          type: new GraphQLNonNull(GraphQLString)
        },
        color: {
          type: new GraphQLNonNull(GraphQLString)
        },
      }
    },
  }
});

module.exports = new GraphQLSchema({
  query: RootQueryType,
  mutation: Mutation
});
