import React from "react";
import style from "./styles";
import { Linking } from 'react-native';
import { useNavigation } from "@react-navigation/native";


export function Post2() {
    const navigation = useNavigation();
    return (

        <style.postContainer>
            <style.postHeader>
                <style.headerInformations>
                    <style.headerInformationsDate>03/MAR</style.headerInformationsDate>
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
                <style.postMainTitle>Entendendo o Z-Pattern</style.postMainTitle>
                <style.postMainSubtitle>Conheça como o olho humano observa um website a partir dos conceitos hierarquicos do Z-Pattern</style.postMainSubtitle>
                <style.postMainOrg>Organizado por: <style.postMainOrgBold>Comunidade Ballerini</style.postMainOrgBold></style.postMainOrg>
            </style.postMain>

            <style.postLink>

                <style.postLinkTitle>Link do Evento</style.postLinkTitle>

                <style.postLinkContainer>

                    <style.postLinkText>meet.google/23456</style.postLinkText>

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