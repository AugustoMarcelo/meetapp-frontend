import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import DatePicker from 'react-datepicker';
import pt from 'date-fns/locale/pt';
import * as Yup from 'yup';

import BannerInput from './BannerInput';
import { Container } from './styles';

import { addRequest } from '~/store/modules/meetup/actions';

const schema = Yup.object().shape({
    title: Yup.string().required('Title is required'),
    description: Yup.string().required('Description is required'),
    location: Yup.string().required('Location is required'),
    banner_id: Yup.number().required('Banner is required'),
});

export default function Create() {
    const [newDate, setNewDate] = useState(new Date());
    const dispatch = useDispatch();

    function handleSubmit({ title, description, location, banner_id }) {
        dispatch(addRequest(title, description, newDate, location, banner_id));
    }

    function handleChange(selectedDate) {
        setNewDate(selectedDate);
    }

    return (
        <Container>
            <Form schema={schema} onSubmit={handleSubmit}>
                <BannerInput name="banner_id" />

                <Input name="title" placeholder="Meetup title" />
                <Input
                    name="description"
                    multiline
                    placeholder="Meetup description"
                />
                {/* <Input name="date" placeholder="Meetup date" /> */}
                <DatePicker
                    name="date"
                    todayButton="Hoje"
                    selected={newDate}
                    onChange={handleChange}
                    showTimeSelect
                    timeFormat="HH:mm"
                    timeIntervals={15}
                    dateFormat="dd/MM/yyyy H:mm"
                    timeCaption="Horário"
                    placeholderText="Meetup date"
                    locale={pt}
                />

                <Input name="location" placeholder="Meetup location" />
                <button type="submit">Save</button>
            </Form>
        </Container>
    );
}
