import styled from 'styled-components';

export const Container = styled.div`
    max-width: 900px;
    margin-bottom: 20px;

    label {
        cursor: pointer;
        position: relative;

        img {
            height: 300px;
            max-width: 900px;
            width: 100%;
            border-radius: 4px;
            background: #000;

            &:hover {
                border: 1px dashed rgba(255, 255, 255, 0.7);
            }
        }

        input {
            display: none;
        }

        span {
            display: none;
        }

        &:hover span {
            display: block;
            position: absolute;
            color: #fff;
            bottom: 150px;
            left: 50%;
            color: rgba(255, 255, 255, 0.7);
        }
    }
`;
