import React from "react";
import style from "./styles";
import { Linking } from 'react-native';
import { useNavigation } from "@react-navigation/native";


export function Post3() {
    const navigation = useNavigation();
    return (

        <style.postContainer>
            <style.postHeader>
                <style.headerInformations>
                    <style.headerInformationsDate>04/MAR</style.headerInformationsDate>
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
                <style.postMainTitle>Formulário com HTML e CSS!</style.postMainTitle>
                <style.postMainSubtitle>Aprenda a como criar um formulário do zero, apenas com HTML, CSS e um pouco de Javascript</style.postMainSubtitle>
                <style.postMainOrg>Organizado por: <style.postMainOrgBold>Comunidade Ballerini</style.postMainOrgBold></style.postMainOrg>
            </style.postMain>

            <style.postLink>

                <style.postLinkTitle>Link do Evento</style.postLinkTitle>

                <style.postLinkContainer>

                    <style.postLinkText>meet.google/77832</style.postLinkText>

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