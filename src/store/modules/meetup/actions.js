export function addRequest(title, description, date, location, banner_id) {
    return {
        type: '@meetup/ADD_REQUEST',
        payload: { title, description, date, location, banner_id },
    };
}
