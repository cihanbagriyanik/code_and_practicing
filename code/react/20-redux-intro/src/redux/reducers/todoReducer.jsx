const initial = {
  gorevler: [
    { id: 0, yazi: "Redux Çalışıyoruz" },
    { id: 1, yazi: "köpekleri gezdir" },
  ],
};
const todoReducer = (state = initial, action) => {
  switch (action.type) {
    case "EKLE":
      return {
        gorevler: [...state.gorevler, { id: 3, yazi: action.payload }],
      };

    case "SIL":
      return {
        gorevler: state.gorevler.filter((b) => b !== action.payload),
      };

    default:
      return state;
  }
};

export default todoReducer;
