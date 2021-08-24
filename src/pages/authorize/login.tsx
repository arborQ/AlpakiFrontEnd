import { validateUser } from 'services/authorize-service';
import { Card, Input, Button } from 'alpaki-ui';
import { Link, useParams } from 'react-router-dom';
import { Formik, Form } from 'formik';
import Icon from 'images/lama.svg';
import * as Yup from 'yup';
import { useUserContext } from '@/context/user-context';

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
        <div className="flex place-content-center">
            <div className="sm:w-3/5 md:w-2/5 w-4/5 max-w-sm">

                <Formik validationSchema={AuthorizeValidationSchema} initialValues={{ login, password }} onSubmit={async (values) => {
                    await onSubmit(values.login, values.password);
                }}>
                    {
                        ({ values, handleChange, isSubmitting }) => (
                            <Form>
                                <Card>
                                    <div className="flex place-content-center pb-4">
                                        <img src={Icon} alt="Alpaki Logo" className="w-2/5" />
                                    </div>
                                    <Input label={"Login"} autoComplete="off" value={values.login} onChange={handleChange('login')} />
                                    <Input label={"Password"} type="password" value={values.password} onChange={handleChange('password')} />
                                    <Button type="submit" isProcessing={isSubmitting}>Login</Button>
                                    <div className="flex flex-col">
                                        <span className="text-center font-thin">or</span>
                                        <Link to="/authorize/register" className="text-alternative text-center">Create new account</Link>
                                    </div>
                                </Card>
                            </Form>
                        )
                    }
                </Formik>
            </div>
        </div>
    );
}

export function LoginPage() {
    const params = useParams<{ login: string }>();
    const userContext = useUserContext();
    
    return (
        <LoginForm
            login={params.login}
            password={''}
            onSubmit={async (login, password) => {
                const token = await validateUser(login, password);
                userContext.setAuthorizeToken(token);
            }}
        />
    );
}