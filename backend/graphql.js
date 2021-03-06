const {ApolloServer, gql} = require('apollo-server-lambda');

const typeDefs = gql`	
	type Query {
		hello: String
	}
`;

const resolvers = {
	Query : {
		hello: () => "Hello World"
	}

}

const server = new ApolloServer({
	typeDefs,
	resolvers,
	context: ({ event, context }) => ({
		headers: event.headers,
		functionName: context.functionName,
		event,
		context,
	})
});

exports.graphqlHandler = server.createHandler({
	cors: {
		origin: true,
		credentials: true,
	},
});