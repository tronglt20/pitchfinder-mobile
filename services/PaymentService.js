import axios from "./axios";

const ConsumePaymentResultAPI = (orderId, message, resultCode) => {
  return axios.get("/payment/momo/result", {
    params: {
      orderId,
      message,
      resultCode,
    },
  });
};

export { ConsumePaymentResultAPI };
