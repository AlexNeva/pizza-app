import { $http } from "../axios";

export default class ItemsService {
  LIMIT_ITEMS = 8;
  getItems(title, category, sortBy, order, page) {
    return $http.get(
      `items?title=${title}&category=${category}&sortBy=${sortBy}&order=${order}&page=${page}&limit=${LIMIT_ITEMS}`
    );
  }
}
