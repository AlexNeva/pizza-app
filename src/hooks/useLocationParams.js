import { useLocation, useSearchParams } from "react-router-dom";
import qs from "qs";

export const useLocationParams = () => {
  const location = useLocation();
  const params = qs.parse(location.search.replace("?", ""));
  const [_, setSearchParams] = useSearchParams();

  return [params, setSearchParams];
};
