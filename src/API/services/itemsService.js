import { $http } from "../axios";

class ItemsService {
  LIMIT_ITEMS = 8;
  getItems(title, category, sortBy, order, page) {
    return $http.get(
      `items?title=${title}&category=${category}&sortBy=${sortBy}&order=${order}&page=${page}&limit=${this.LIMIT_ITEMS}`
    );
  }
}

export const itemsAPI = new ItemsService();
