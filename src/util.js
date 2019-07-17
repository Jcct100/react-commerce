export default {
  formatCurrency: function(num) {
    return "S" + Number(num.toFixed(2)).toLocaleString() + " ";
  }
};
