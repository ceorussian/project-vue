import {listRole} from "../mock-data/data-role";
import { sleep } from "./base";
async function getDataListRole() {
  await sleep();
  return listRole;
}
export default {
    getDataListRole
};
