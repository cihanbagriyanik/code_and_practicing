const counterReducer = (state = { counterSonuc: 0 }, action1) => {
  // console.log(action1);
  switch (action1.type) {
    case "ARTTIR":
      return { counterSonuc: state.counterSonuc + 1, text1: action1.payload1 };

    case "SIFIRLA":
      return { counterSonuc: 0, text1: action1.payload1 };

    case "AZALT":
      return { counterSonuc: state.counterSonuc - 1 };

    default:
      return state;
  }
};

export default counterReducer;
