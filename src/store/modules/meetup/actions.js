export function addRequest(title, description, date, location, banner_id) {
    return {
        type: '@meetup/ADD_REQUEST',
        payload: { title, description, date, location, banner_id },
    };
}

export function editRequest(id) {
    return {
        type: '@meetup/EDIT_REQUEST',
        payload: { id },
    };
}

export function cancelRequest(id) {
    return {
        type: '@meetup/CANCEL_REQUEST',
        payload: { id },
    };
}
