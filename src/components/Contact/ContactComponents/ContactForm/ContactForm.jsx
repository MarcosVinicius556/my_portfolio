import Form from 'react-bootstrap/Form';
import './contact-form.css';

function ContactForm(){
    return(
        <div className="contact-form">
            <Form>
                <Form.Group className="mb-3" controlId="inputName">
                    <Form.Label>Nome</Form.Label>
                    <Form.Control type="email" placeholder="Seu nome..." />
                </Form.Group>
                <Form.Group className="mb-3" controlId="inputEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="mail@example.com" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="inputMessage">
                    <Form.Label>Mensagem</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                </Form.Group>
            </Form>
        </div>
    );
}

export default ContactForm;