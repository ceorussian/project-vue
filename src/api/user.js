import {listUser} from "../mock-data/data-user";
import { sleep } from "./base";
async function getDataListUser() {
  await sleep();
  return listUser;
}
export default {
  getDataListUser
};
