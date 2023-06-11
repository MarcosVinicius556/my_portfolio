import Form from 'react-bootstrap/Form';
import { useReducer } from 'react';
import { EmailReducer } from './EmailReducer';
import './contact-form.css';

const emailObj = {
    from_name: '',
    message: '',
    email: '',
}

function ContactForm(){
    const reducer = useReducer(EmailReducer, emailObj);
    const[ ,dispatch ] = reducer;

    return(
        <div className="contact-form">
            <Form>
                <Form.Group className="mb-3" controlId="inputName">
                    <Form.Label className='form-label'>Nome</Form.Label>
                    <Form.Control type="email" placeholder="Seu nome..." onChange={ (e)  => dispatch({ type: 'alteraNome', payload: e.target.value }) }/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="inputEmail">
                    <Form.Label className='form-label'>Email</Form.Label>
                    <Form.Control type="email" placeholder="mail@example.com" onChange={ (e)  => dispatch({ type: 'alteraEmail', payload: e.target.value }) }/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="inputMessage">
                    <Form.Label className='form-label'>Mensagem</Form.Label>
                    <Form.Control as="textarea" rows={3} placeholder='Me conte sobre o que você gostaria de conversar?' onChange={ (e)  => dispatch({ type: 'alteraMensagem', payload: e.target.value }) }/>
                </Form.Group>
                <input type="submit" value="Enviar" className='submit-button' onClick={(e) => dispatch({ type:"enviaMensagem", payload: e })}/>
            </Form>
        </div>
    );
}

export default ContactForm;