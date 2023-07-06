import axios from "./axios";

const OrderAPI = (storeId, price, note) => {
  return axios.post("/order/customer", {
    storeId,
    price,
    note,
  });
};

const ConfirmPaymentAPI = () => {
  return axios.post("/order/customer/confirm");
};

export { OrderAPI, ConfirmPaymentAPI };
