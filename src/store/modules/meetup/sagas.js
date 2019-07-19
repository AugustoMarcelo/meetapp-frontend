import { takeLatest, call, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import history from '~/services/history';
import api from '~/services/api';

export function* addMeetup({ payload }) {
    try {
        const { title, description, date, location, banner_id } = payload;

        yield call(api.post, 'meetups', {
            title,
            description,
            date,
            location,
            banner_id,
        });

        history.push('/dashboard');
    } catch (error) {
        toast.error('Failed. Check your data.');
    }
}

export default all([takeLatest('@meetup/ADD_REQUEST', addMeetup)]);
