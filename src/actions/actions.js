export const action = (text) => {
    return {
        type: 'ADD_TASK',
        task: {id: Date.now(), text: text}
    }
};

export const toggleTask = (id) => {
    return {
        type: 'TOGGLE_TASK',
        id
    }
};

export const removeTask = (id) => {
    return {
        type: 'REMOVE_TASK',
        id
    }
};

