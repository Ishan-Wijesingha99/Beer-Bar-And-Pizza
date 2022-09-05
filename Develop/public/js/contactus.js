const findstore = async () => {
  document.location.replace("/findstore");
};
document.querySelector("#findstore").addEventListener("click", findstore);

const feedback = async () => {
  document.location.replace("/feedback");
};
document.querySelector("#feedback").addEventListener("click", feedback);

const media = async () => {
  document.location.replace("/mediaenquiry");
};
document.querySelector("#media").addEventListener("click", media);

const investorrelations = async () => {
  document.location.replace("/investorrelations");
};
document.querySelector("#investor").addEventListener("click", investorrelations);
