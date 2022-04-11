import React from "react";
import style from "./styles";
import { Linking } from 'react-native';
import { useNavigation } from "@react-navigation/native";


export function Post4() {
    const navigation = useNavigation();
    return (

        <style.postContainer>
            <style.postHeader>
                <style.headerInformations>
                    <style.headerInformationsDate>05/MAR</style.headerInformationsDate>
                    <style.headerInformationsHour>10:00</style.headerInformationsHour>
                </style.headerInformations>
                <style.eventsHeaderButton
                    onPress={() => navigation.navigate('Events')}>
                    <style.icon
                        name="arrow-left" />
                    <style.backText>Voltar</style.backText>
                </style.eventsHeaderButton>
            </style.postHeader>

            <style.postMain>
                <style.postMainTitle>Qual sua área de desenvolvimento ideal?</style.postMainTitle>
                <style.postMainSubtitle>Um bate-papo com Devs especialistas para te ajudar a descobrir que área do desenvolvimento você se identifica mais.</style.postMainSubtitle>
                <style.postMainOrg>Organizado por: <style.postMainOrgBold>Comunidade Ballerini</style.postMainOrgBold></style.postMainOrg>
            </style.postMain>

            <style.postLink>

                <style.postLinkTitle>Link do Evento</style.postLinkTitle>

                <style.postLinkContainer>

                    <style.postLinkText>meet.google/28739</style.postLinkText>

                    <style.postLinkButtom
                    onPress={() => Linking.openURL('https://meet.google.com')}>
                        <style.iconRight
                            name="arrow-right" />
                    </style.postLinkButtom>
                </style.postLinkContainer>

            </style.postLink>

        </style.postContainer>
    )
}