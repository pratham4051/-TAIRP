exports.handler = async (event) => {
  const yourString = "hello there, this is uppercase function."

  // TODO implement
  const response = {
    statusCode: 200,
    body: JSON.stringify(
    yourString.toUpperCase()
    )
  };
  return response;
};

