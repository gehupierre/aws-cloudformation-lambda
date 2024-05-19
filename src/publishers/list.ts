import { dynamoDb } from "@db/data-source";

export const list = (event, context, callback) => {
  const params = {
    TableName: process.env.PUBLISHER_TABLE,
    ProjectionExpression: "id, firstName, lastName",
  };

  const onScan = (err, data) => {
    if (err) {
      console.log(
        "Scan failed to load data. Error JSON:",
        JSON.stringify(err, null, 2)
      );
      callback(err);
    } else {
      return callback(null, {
        statusCode: 200,
        body: JSON.stringify({
          publishers: data.Items,
        }),
      });
    }
  };

  dynamoDb.scan(params, onScan);
};
