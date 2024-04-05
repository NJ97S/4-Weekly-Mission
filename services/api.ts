const BASE_URL = process.env.NEXT_PUBLIC_BASE_API_URL;

async function getData(path: string) {
  try {
    const response = await fetch(BASE_URL + path);
    if (response.ok) {
      const result = await response.json();
      return result;
    } else {
      throw new Error(`API returned status ${response.status}`);
    }
  } catch (error) {
    console.error("Error fetching data", error);
    throw error;
  }
}

export function getSampleUserData() {
  return getData("/api/sample/user");
}

export function getSampleFolderData() {
  return getData("/api/sample/folder");
}
