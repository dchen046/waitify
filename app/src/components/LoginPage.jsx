import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Button from 'react-bootstrap/Button';

const LoginPage = () => {
    return (
        <div>
            <h4>Please Log In</h4>
            <LoginForm />
        </div>
    );
}

const LoginForm = () => {
    const handleLogin = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        let url = `http://localhost:3000/auth`;
        for (const [key, value] of formData.entries()) {
            url += `/${value}`;
        }

    }

    return (
        <div className=''>
            <Form
                onSubmit={handleLogin}
                id='login-form'
            >
                <FloatingLabel
                    controlId="email"
                    label="Email address"
                    className="mb-3"
                >
                    <Form.Control type="email" name='email' placeholder="name@example.com" autoComplete='off' />
                </FloatingLabel>

                <FloatingLabel
                    controlId="password"
                    label="Password"
                    className="mb-3"
                >
                    <Form.Control type="password" name='password' placeholder="password" />
                </FloatingLabel>

                <Button as="input" type="submit" value="Login" className='w-100' />
            </Form>
            <hr></hr>
            <div>
                <p> Don&apos;t Have An Account?</p>
                <Button variant='secondary' href='/signup' value='Sign Up' className='w-100'>Sign Up</Button>
            </div>
        </div>
    );
}

export default LoginPage;