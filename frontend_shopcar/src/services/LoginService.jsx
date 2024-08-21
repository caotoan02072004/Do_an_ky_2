import * as http from "../common/http-common";

const URLAPI = `http://localhost:8080/login`;

export const findByAccount = async () => {
  try {
    const res = await http.get(`${ URLAPI }`);
    return [res, null];
  } catch (error) {
    return [null, error];
  }
}

export const login = async (data) => {
    try {
      const res = await http.save(`${URLAPI}`, data);
      return [res, null];
    } catch (error) {
      return [null, error];
    }
};
