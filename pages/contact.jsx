import React from 'react'
import FormControl from '../components/FormControl'
import PageLayout from '../components/PageLayout'

export default function contact() {
    return (
        <PageLayout>
            <form>
                <header>
                    <h1>Contacter nous</h1>
                </header>
                <main>
                <FormControl name="email" label="E-mail"/>
                <FormControl name="message" label="Message" type="textarea"/>
                </main>
                <footer>
                    <button type="submit">Envoyer</button>
                </footer>
            </form>
        </PageLayout>
    )
}
