import * as http from "../common/http-common";

const URLAPI = `http://localhost:8080/car`;

export const findAllCar = async () => {
    try {
        const res = await http.get(`${URLAPI}`);
        return [res, null];
    } catch (error) {
        return [null, error];
    }
};