import React from "react";
import style from "./styles";
import { Linking } from 'react-native';
import { useNavigation } from "@react-navigation/native";


export function Post1() {
    const navigation = useNavigation();
    return (

        <style.postContainer>
            <style.postHeader>
                <style.headerInformations>
                    <style.headerInformationsDate>02/MAR</style.headerInformationsDate>
                    <style.headerInformationsHour>19:00</style.headerInformationsHour>
                </style.headerInformations>
                <style.eventsHeaderButton
                    onPress={() => navigation.navigate('Events')}>
                    <style.icon
                        name="arrow-left" />
                    <style.backText>Voltar</style.backText>
                </style.eventsHeaderButton>
            </style.postHeader>

            <style.postMain>
                <style.postMainTitle>Criando interfarces muito malucas com o Figma!</style.postMainTitle>
                <style.postMainSubtitle>Você pode criar interfaces malucas que dispertam sua criativade. Usando de recursos do próprio figma, como seus plugins.</style.postMainSubtitle>
                <style.postMainOrg>Organizado por: <style.postMainOrgBold>Comunidade Ballerini</style.postMainOrgBold></style.postMainOrg>
            </style.postMain>

            <style.postLink>

                <style.postLinkTitle>Link do Evento</style.postLinkTitle>

                <style.postLinkContainer>

                    <style.postLinkText>meet.google/12345</style.postLinkText>

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