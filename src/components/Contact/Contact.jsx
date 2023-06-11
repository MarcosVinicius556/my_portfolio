import ContactForm from './ContactComponents/ContactForm/ContactForm';
import './contact.css';

function Contact() {
    return(
        <section className="contact-me">
            <h1 className='contact-title'>Entre em contato!</h1>
            <ContactForm />
        </section>
    );
}

export default Contact;