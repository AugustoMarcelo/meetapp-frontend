import React from 'react';
import { useDispatch } from 'react-redux';
import { Form, Input, Textarea } from '@rocketseat/unform';

import BannerInput from './BannerInput';
import { Container } from './styles';

import { addRequest } from '~/store/modules/meetup/actions';

export default function Create() {
    const dispatch = useDispatch();

    function handleSubmit({ title, description, date, location, banner_id }) {
        dispatch(addRequest(title, description, date, location, banner_id));
    }

    return (
        <Container>
            <Form onSubmit={handleSubmit}>
                <BannerInput name="banner_id" />

                <Input name="title" placeholder="Meetup title" />
                <Textarea
                    name="description"
                    type="textarea"
                    placeholder="Meetup description"
                />
                <Input name="date" placeholder="Meetup date" />
                <Input name="location" placeholder="Meetup location" />
                <button type="submit">Save</button>
            </Form>
        </Container>
    );
}
