import React from 'react'
import axios from 'axios'

const useFormField = (initialValue = '') => {
    const [value, setValue] = React.useState(initialValue)
    const onChange = React.useCallback((e) => setValue(e.target.value), [])
    return { value, onChange }
}

export const MessageSendingForm = () => {
    const emailField = useFormField()
    const textField = useFormField()

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('/mailer/send_test', {
            email: emailField.value,
            text: textField.value
        }).then(res => console.log(res)).catch(err => console.log(err))
    }

    return (
        <React.Fragment>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor='email'>Email</label>
                    <input type='email' id='email' {...emailField} />
                </div>
                <div>
                    <label htmlFor='text'>Password</label>
                    <input type='text' id='message' {...textField} />
                </div>
            </form>
            <button onClick={handleSubmit}>Send Email</button>
        </React.Fragment>
    );
}
