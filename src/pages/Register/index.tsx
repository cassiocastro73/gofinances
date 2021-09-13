import React, {useState} from 'react';

import { Input } from '../../Components/Form/Input';
import { Button } from '../../Components/Form/Button';
import { TransactionTypeButton } from '../../Components/Form/TransactionTypeButton';



import {
    Container,
    Header,
    Title,
    Form,
    Fields,
    TransactionType

} from './styles';



export function Register(){
    const [transactionType, setTransactionType] = useState('');

    function handleTransactionTypeSelect(type: 'up' | 'down'){
        setTransactionType(type);
    }

    return(
            <Container>
                <Header>
                    <Title>
                        Cadastro
                    </Title>
                </Header>

                <Form>
                    <Fields>
                        <Input
                        placeholder = "Nome"/>

                        <Input
                        placeholder = "Preço"/>

                        <TransactionType>

                            <TransactionTypeButton
                                type = 'up'
                                title="income"
                                onPress = {() => handleTransactionTypeSelect('up')}
                            />

                            <TransactionTypeButton
                                type = 'down'
                                title="outcome"
                                onPress = {() => handleTransactionTypeSelect('down')}
                            />

                        </TransactionType>
                    </Fields>

                    <Button title = "Enviar"/>
                    
                    
                </Form>

            </Container>
    );
}