export const apiHandler = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: "Publishers API",
      },
      null,
      2
    ),
  };
};
