const initialState = [{id: Date.now(), text: 'test', done: false}];

export default (state = initialState, action) => {
        console.log(action);
        if (action.type === "ADD_TASK") {
            return [...state, {
                id: Date.now(),
                text: action.task.text,
                done: false
            }];
        }
        if ( action.type === "TOGGLE_TASK" ) {
            return state.map((item) => {
                if(item.id === +action.id) {
                    item.done = !item.done;
                }
                return item;
            })
        }
        if ( action.type === "REMOVE_TASK" ) {
            return state.filter((item) => {
                if(item.id !== +action.id) {
                   return item;
                }
            })
        }
        else {
            return state;
        }

};