export async function fetchContext(context, callback) {
  try {
    let response = await fetch(context)

    response.json().then((value) => {
      callback(value);
    })

  } catch(error) {
    throw new Error(error)
  }
}

export function checkIsJson(str) {
  try {
    JSON.parse(str);
  } catch (e) {
    return false;
  }
  return true;
}