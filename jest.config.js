module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  transform: {
    "^.+\\.jsx?$": "babel-jest"
  },
  snapshotSerializers: ["enzyme-to-json/serializer"]
};
