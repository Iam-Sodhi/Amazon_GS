export const initialState = {
  basket: [],
  user: null,
};

export const findSubtotal = (basket) =>
  basket?.reduce((acc, item) => item.price + acc, 0);

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
        case "EMPTY_CART":
          return{
            ...state,
            basket:[],
          }
      case "REMOVE_FROM_CART":
        // const index=state.basket.findIndex(
        //   (basketItem)=> basketItem.id===action.id
        // );
        // let newBasket=[...state.basket];
        // if(index>=0){
        //   newBasket.splice(index,1);
        // }
        // else{
        //   console.warn(`Cant remove product (id: ${action.id}) as its not in the basket!`);
        // }
        return {
          ...state,   //will delete every item with that id
          basket: state.basket.filter(item=> item.id!==action.id)
          //we use index here
          // ...state,
          // basket:newBasket,
        };
        case "SET_USER":
          return {
            ...state,
            user: action.user,
          }
    default:
      return state;
  }
};
export default reducer;
