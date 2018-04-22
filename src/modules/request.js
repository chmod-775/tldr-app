export const getData = async (type, key) => {
  return {};
}


export const getMockData = async (type, key) => {
  await new Promise((resolve) => {
    setTimeout(resolve, 3000);
  })
  return {};
}
