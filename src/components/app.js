import React from 'react';
import ContactList from './contact_list';
import ContactForm from './contact_form'

class App extendsComponent {
    constructor(props) {
        super(props);
    }
    <div className="container">
        <h1 className="text-center">Address Book</h1>
        <div className="row">
            <div className="col-4">
                <ContactForm/>
            </div>
            <ContactList/>
        </div>
    </div>
};

