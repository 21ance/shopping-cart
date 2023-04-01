// mock database

//new arrival
import newarrival from "./men-new-arrival.json";

//shirts
import casual from "./shirts/casual.json";
import shortsleeve from "./shirts/shortsleeve.json";
import longsleeve from "./shirts/longsleeve.json";
import denim from "./shirts/denim.json";
import flannel from "./shirts/flannel.json";

const db = (() => {
  return { newarrival, casual, shortsleeve, longsleeve, denim, flannel };
})();

export default db;
