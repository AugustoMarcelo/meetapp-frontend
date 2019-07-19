import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
    max-width: 900px;
    margin: 50px auto;

    form {
        display: flex;
        flex-direction: column;

        input {
            background: rgba(0, 0, 0, 0.2);
            border: 0;
            border-radius: 4px;
            height: 44px;
            padding: 0 15px;
            color: #fff;
            margin: 0 0 10px;
            transition: border 0.2s;

            &:focus {
                border: 1px solid #cecece;
            }

            &::placeholder {
                color: rgba(255, 255, 255, 0.5);
            }
        }

        textarea {
            background: rgba(0, 0, 0, 0.2);
            border: 0;
            border-radius: 4px;
            height: 200px;
            padding: 0 15px;
            color: #fff;
            margin: 0 0 10px;
            transition: border 0.2s;

            &:focus {
                border: 1px solid #cecece;
            }

            &::placeholder {
                padding: 15px 0;
                color: rgba(255, 255, 255, 0.5);
            }
        }

        button {
            align-self: flex-end;
            padding: 11px;
            margin-top: 10px;
            height: 42px;
            background: #f94d6a;
            color: #fff;
            border: 0;
            border-radius: 4px;
            font-size: 16px;
            transition: background 0.2s;

            &:hover {
                background: ${darken(0.08, '#f94d6a')};
            }
        }
    }
`;
