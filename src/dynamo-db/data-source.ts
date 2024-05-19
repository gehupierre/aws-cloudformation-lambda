import * as aws from "aws-sdk";
import bluebird from "bluebird";

aws.config.setPromisesDependency(bluebird);

export const dynamoDb = new aws.DynamoDB.DocumentClient();
