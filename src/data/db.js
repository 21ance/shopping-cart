// mock database

//new arrival
import new_arrival from "./men-new-arrival.json";

//shirts
import casual from "./shirts/casual.json";
import shortsleeve from "./shirts/shortsleeve.json";
import longsleeve from "./shirts/longsleeve.json";
import denim from "./shirts/denim.json";
import flannel from "./shirts/flannel.json";

// hoodies and sweatshirt
import hoodies from "./hoodies/hoodies.json";
import printed from "./hoodies/printed.json";
import sweatshirt from "./hoodies/sweatshirt.json";

// trousers
import linen from "./trousers/linen.json";
import chinos from "./trousers/chinos.json";
import joggers from "./trousers/joggers.json";
import cargo from "./trousers/cargo.json";

// jeans
import tapered from "./jeans/tapered.json";
import skinny from "./jeans/skinny.json";
import slim from "./jeans/slim.json";
import regular from "./jeans/regular.json";
import loose from "./jeans/loose.json";

// shoes
import slippers from "./shoes/slippers.json";
import sneakers from "./shoes/sneakers.json";
import sandals from "./shoes/sandals.json";
import boots from "./shoes/boots.json";
import loafers from "./shoes/loafers.json";

const db = (() => {
  return {
    new_arrival,
    casual,
    shortsleeve,
    longsleeve,
    denim,
    flannel,
    hoodies,
    printed,
    sweatshirt,
    linen,
    chinos,
    joggers,
    cargo,
    tapered,
    skinny,
    slim,
    regular,
    loose,
    slippers,
    sneakers,
    sandals,
    boots,
    loafers,
  };
})();

export default db;
