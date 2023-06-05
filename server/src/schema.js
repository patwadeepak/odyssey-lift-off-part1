const gql = require("graphql-tag");

const typeDefs = gql`
    "A track is a group of Modules that teaches about a specific topic"
    type Track {
        id: ID!

        "Title of the track"
        title: String!

        "Author"
        author: Author!

        "Thumbnail for the track"
        thumbnail: String

        "Length of the track"
        length: Int

        "Number of modules present in the track"
        modulesCount: Int
    }

    "Author of a track or module"
    type Author {
        id: ID!

        "Name"
        name: String!

        "Picture"
        photo: String
    }

    type Query {
    "Get tracks array for homepage grid"
    tracksForHome: [Track!]!
}
`;

module.exports = typeDefs;