import React from "react";
import style from "./styles";
import { useNavigation } from "@react-navigation/native";

export function Events() {
    const navigation = useNavigation();
    return (

        <style.eventsContainer>

            <style.eventsHeader>

                <style.eventsHeaderText>

                    <style.textTitle>Eventos disponíveis </style.textTitle>
                    <style.textSubTitle>Selecione o evento desejado. E espere sua data!</style.textSubTitle>

                </style.eventsHeaderText>
                <style.eventsHeaderButton
                    onPress={() => navigation.navigate('Home')}>
                    <style.icon
                        name="arrow-left" />
                    <style.backText>Voltar</style.backText>
                </style.eventsHeaderButton>
            </style.eventsHeader>

            <style.eventsMain>
                <style.eventsMainContainer>
                    <style.eventsMainContainerInside>

                        <style.eventsDate>02/MAR <style.eventsTime>19:00</style.eventsTime></style.eventsDate>
                        <style.eventsTitle>Criando interfaces muito malucas com o Figma!</style.eventsTitle>
                        <style.eventsSubtitle>Você pode criar interfaces malucas que dispertam sua criativade. Usando de recursos do próprio figma, como seus plugins.</style.eventsSubtitle>
                        <style.eventsDescriptionContainer>

                            <style.eventsDescription>
                                <style.eventsDescriptionOrg> Organizado por: <style.descriptionBold>Comunidade Ballerini</style.descriptionBold></style.eventsDescriptionOrg>
                                <style.eventsDescriptionLink> Link do evento: <style.descriptionBold>meet.google/evento-1</style.descriptionBold></style.eventsDescriptionLink>
                            </style.eventsDescription>
                            <style.eventsDescriptionAcess
                            onPress={() => navigation.navigate('Post1')}>
                                <style.icon2
                                    name="arrow-right" />
                            </style.eventsDescriptionAcess>
                        </style.eventsDescriptionContainer>

                    </style.eventsMainContainerInside>
                </style.eventsMainContainer>


                <style.eventsMainContainer>
                    <style.eventsMainContainerInside>

                        <style.eventsDate>03/MAR <style.eventsTime>10:00</style.eventsTime></style.eventsDate>
                        <style.eventsTitle>Entendendo o Z-Pattern</style.eventsTitle>
                        <style.eventsSubtitle>Conheça como o olho humano observa um website a partir dos conceitos hierarquicos do Z-Pattern.</style.eventsSubtitle>
                        <style.eventsDescriptionContainer>

                            <style.eventsDescription>
                                <style.eventsDescriptionOrg> Organizado por: <style.descriptionBold>Comunidade Ballerini</style.descriptionBold></style.eventsDescriptionOrg>
                                <style.eventsDescriptionLink> Link do evento: <style.descriptionBold>meet.google/evento-2</style.descriptionBold></style.eventsDescriptionLink>
                            </style.eventsDescription>
                            <style.eventsDescriptionAcess
                            onPress={() => navigation.navigate('Post2')}>
                                <style.icon2
                                    name="arrow-right" />
                            </style.eventsDescriptionAcess>
                        </style.eventsDescriptionContainer>

                    </style.eventsMainContainerInside>
                </style.eventsMainContainer>


                <style.eventsMainContainer>
                    <style.eventsMainContainerInside>

                        <style.eventsDate>04/MAR <style.eventsTime>17:00</style.eventsTime></style.eventsDate>
                        <style.eventsTitle>Formulário com HTML e CSS!</style.eventsTitle>
                        <style.eventsSubtitle>Aprenda a como criar um formulário do zero, apenas com HTML, CSS e um pouco de Javascript</style.eventsSubtitle>
                        <style.eventsDescriptionContainer>

                            <style.eventsDescription>
                                <style.eventsDescriptionOrg> Organizado por: <style.descriptionBold>Comunidade Ballerini</style.descriptionBold></style.eventsDescriptionOrg>
                                <style.eventsDescriptionLink> Link do evento: <style.descriptionBold>meet.google/evento-2</style.descriptionBold></style.eventsDescriptionLink>
                            </style.eventsDescription>
                            <style.eventsDescriptionAcess
                            onPress={() => navigation.navigate('Post3')}>
                                <style.icon2
                                    name="arrow-right" />
                            </style.eventsDescriptionAcess>
                        </style.eventsDescriptionContainer>

                    </style.eventsMainContainerInside>
                </style.eventsMainContainer>


                <style.eventsMainContainer>
                    <style.eventsMainContainerInside>

                        <style.eventsDate>05/MAR <style.eventsTime>10:00</style.eventsTime></style.eventsDate>
                        <style.eventsTitle>Qual sua área de desenvolvimento ideal?</style.eventsTitle>
                        <style.eventsSubtitle>Um bate-papo com Devs especialistas para te ajudar a descobrir que área do desenvolvimento você se identifica mais.</style.eventsSubtitle>
                        <style.eventsDescriptionContainer>

                            <style.eventsDescription>
                                <style.eventsDescriptionOrg> Organizado por: <style.descriptionBold>Comunidade Ballerini</style.descriptionBold></style.eventsDescriptionOrg>
                                <style.eventsDescriptionLink> Link do evento: <style.descriptionBold>meet.google/evento-2</style.descriptionBold></style.eventsDescriptionLink>
                            </style.eventsDescription>
                            <style.eventsDescriptionAcess
                            onPress={() => navigation.navigate('Post4')}>
                                <style.icon2
                                    name="arrow-right" />
                            </style.eventsDescriptionAcess>
                        </style.eventsDescriptionContainer>

                    </style.eventsMainContainerInside>
                </style.eventsMainContainer>


            </style.eventsMain>




        </style.eventsContainer>



    )

}