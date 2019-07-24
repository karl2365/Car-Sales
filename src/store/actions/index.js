export const ADD_FEATURE = 'ADD_FEATURE';
export const REMOVE_FEATURE = 'REMOVE_FEATURE';


export const addFeature = addedFeature => {
    return { type: ADD_FEATURE, payload: addedFeature};

}

export const removeFeature = removedFeature => {
    return {type: REMOVE_FEATURE, payload: removedFeature}
}

