import { Card, Input, Button } from 'alpaki-ui';
import { useParams } from 'react-router-dom';
import { Formik, ErrorMessage, Form } from 'formik';
import * as Yup from 'yup';

interface LoginFormProps {
    login: string;
    password: string;
    onSubmit: (login: string, password: string) => Promise<void>
}

const AuthorizeValidationSchema = Yup.object().shape({
    login: Yup.string()
        .min(2, 'Too Short!')
        .required('Required'),
    password: Yup.string()
        .min(2, 'Too Short!')
        .required('Required'),
});

export function LoginForm({ login, password, onSubmit }: LoginFormProps) {
    return (
        <Formik validationSchema={AuthorizeValidationSchema} initialValues={{ login, password }} onSubmit={(values) => onSubmit(values.login, values.password)}>
            {
                data => (
                    <Form>
                        <Card>
                            <Input label={"Login"} value={data.values.login} onChange={data.handleChange('login')} />
                            <ErrorMessage name="login" />
                            <Input label={"Password"} type="password" value={data.values.password} onChange={data.handleChange('password')} />
                            <Button type="submit">Login</Button>
                        </Card>
                    </Form>
                )
            }
        </Formik>
    );
}

export function LoginPage() {
    const params = useParams<{ login: string }>();

    return (
        <LoginForm
            login={params.login}
            password={''}
            onSubmit={async (login, password) => {

            }}
        />
    );
}