import React, {useState} from 'react';
import { Modal } from 'react-native';


import { Input } from '../../Components/Form/Input';
import { Button } from '../../Components/Form/Button';
import { TransactionTypeButton } from '../../Components/Form/TransactionTypeButton';
import { CategorySelectButton } from '../../Components/Form/CategorySelectButton';

import {CategorySelect} from '../CategorySelect';

import {
    Container,
    Header,
    Title,
    Form,
    Fields,
    TransactionType,

} from './styles';



export function Register(){
    const [category, setCategory] = useState({
        key:'category',
        name: 'Categoria',

    });
    const [transactionType, setTransactionType] = useState('');
    const [categoryModalOpen, setCategoryModalOpen] =useState(false);


    function handleTransactionTypeSelect(type: 'up' | 'down'){
        setTransactionType(type);
    }

    
    function handleOpenSelectCategoryModal(){
        setCategoryModalOpen(true);
    };


    function handleCloseSelectCategoryModal(){
        setCategoryModalOpen(false);
    };


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
                                isActive = {transactionType === 'up'}
                            />

                            <TransactionTypeButton
                                type = 'down'
                                title="outcome"
                                onPress = {() => handleTransactionTypeSelect('down')}
                                isActive = {transactionType === 'down'}
                            />

                        </TransactionType>
                        <CategorySelectButton 
                            title = 'Categoria'
                            onPress ={handleOpenSelectCategoryModal}
                        
                        />
                    </Fields>

                    <Button title = "Enviar"/>
                    
                    
                </Form>

                <Modal visible={categoryModalOpen}>
                    <CategorySelect 
                        category={category}
                        setCategory={setCategory}
                        closeSelectCategory={handleCloseSelectCategoryModal}
                    
                    />

                </Modal>
            </Container>
    );
}