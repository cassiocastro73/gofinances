import React from "react";
import { HighlightCard } from "../../Components/HighlightCard";
import { 
    Container,
     Header,
     UserWrapper,
     UserInfo,
     Photo,
     User,
     UserGreetings,
     UserName,
     Icon,
     HighlightCards
} from './styles';



export function Dashboard(){
    return(
        <Container>
            <Header>
                <UserWrapper >
                    <UserInfo>
                        <Photo source = {{ uri: 'https://avatars.githubusercontent.com/u/56850671?v=4' }}/>
                        <User>
                            <UserGreetings>
                                Olá,
                            </UserGreetings>
                            <UserName>
                                Cássio
                            </UserName>
                        </User>
                    </UserInfo>
                    <Icon name = "power"/>
                </UserWrapper>
            </Header>
            
            <HighlightCards>
                <HighlightCard/>
                <HighlightCard/>
                <HighlightCard/>
            </HighlightCards>
        </Container>
    )
}

