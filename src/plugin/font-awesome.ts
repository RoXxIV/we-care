import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
/**
 * Importe et ajoute globalement les icones font-awesome
 * solid & free
 */
import { faMoon,faCheckCircle, faStar, faAppleAlt, faAirFreshener,faStarHalfAlt, faHome, faIgloo} from "@fortawesome/free-solid-svg-icons";

library.add(faMoon,faCheckCircle, faStar,faAppleAlt, faAirFreshener,faStarHalfAlt, faHome, faIgloo);

export { FontAwesomeIcon };
