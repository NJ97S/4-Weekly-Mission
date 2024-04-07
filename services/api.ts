import apiClient from "@/lib/axios";

export async function getSampleUserData() {
  try {
    const response = await apiClient.get("/api/sample/user");
    return response.data;
  } catch (error) {
    throw new Error("유저 정보를 불러올 수 없습니다.");
  }
}

export async function getSampleFolderData() {
  try {
    const response = await apiClient.get("/api/sample/folder");
    return response.data;
  } catch (error) {
    throw new Error("폴더 정보를 불러올 수 없습니다.");
  }
}

export async function postSigninValidation(body: object) {
  try {
    const response = await apiClient.post("/api/sign-in", body);
    return response.data;
  } catch (error) {
    throw new Error("회원 정보를 확인하는 데 실패했습니다.");
  }
}
