const initialstate =[
    {
        items:1,
        price:100
    }
]

const quantity = (state = initialstate, action) => {
    // let currentstate = state.items;
    // if(currentstate < 1){
    //     state.items = 1
    // }
    console.log(state)

        switch (action.type) {
            case 'INCREMENT':
                return state.items + 1 & state.price * 2;
            case 'DECREMENT':
                return state.items -1 & state.price - 100;
            default:
                return state;
        }
    }
export default quantity;