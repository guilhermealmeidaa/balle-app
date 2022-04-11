import styled from 'styled-components/native'
import { Feather } from '@expo/vector-icons';

export default{

    eventsContainer: styled.View`
        flex: 1;
        background-color: ${({theme}) => theme.COLORS.BACKGROUND };
    `,
    eventsHeader: styled.View`
        width: 85%;
        height: 30%;
        margin-left: auto;
        margin-right: auto;
        margin-top: 40px;
        display: flex;
        flex-direction: row;

    `,
    eventsHeaderText: styled.View`
        width: 75% ;
        height: 100%;
        justify-content: center;
    `,
    textTitle: styled.Text`
        font-family: ${({theme}) => theme.FONTS.E_BOLD};
        color: ${({theme}) => theme.COLORS.LETTER_DEFAULT};
        font-size: 35px;
        margin-bottom: 15px;
        letter-spacing: 2px;
        line-height: 40px;
    `,
    textSubTitle: styled.Text`
        font-family: ${({theme}) => theme.FONTS.E_REGULAR};
        color: ${({theme}) => theme.COLORS.LETTER_GREY};
        font-size: 16px;
        letter-spacing: 0.5px;
        line-height: 25px;
        max-width: 250px;
    `,
    eventsHeaderButton: styled.Pressable`
        width: 25%;
        height: 20%;
        margin-left: auto;
        margin-top: 70px;
        flex-direction: row;
        justify-content: flex-end;
        
    `,
    icon: styled(Feather)`
        font-size: 20px;
        color: ${({theme}) => theme.COLORS.LETTER_GREY};
    `,
    backText: styled.Text`
        font-size: 15px;
        color: ${({theme}) => theme.COLORS.LETTER_GREY};
    `,
    eventsMain: styled.ScrollView`
        width: 100%;
    `,
    eventsMainContainer: styled.View`
        width: 90%;
        height: 250px;
        border-radius: 10px;
        margin: auto;
        background-color: #FFF;
        margin-bottom: 30px;
    `,
    eventsMainContainerInside: styled.View`
        width: 90%;
        margin: auto;
    `,
    eventsDate: styled.Text`
        color: ${({theme}) => theme.COLORS.LETTER_ORANGE};
        font-family: ${({theme}) => theme.FONTS.E_BOLD};
        margin-bottom: 15px;

    `,
    eventsTime: styled.Text`
        color: ${({theme}) => theme.COLORS.LETTER_ORANGE};
        font-family: ${({theme}) => theme.FONTS.E_MEDIUM};
    `,
    eventsTitle: styled.Text`
        color: ${({theme}) => theme.COLORS.LETTER_BLACK};
        font-family: ${({theme}) => theme.FONTS.E_EXTRABOLD};
        font-size: 25px;
        line-height: 30px;
        margin-bottom: 15px;
    `,
    eventsSubtitle: styled.Text`
        color: ${({theme}) => theme.COLORS.LETTER_SUBTITLE};
        font-family: ${({theme}) => theme.FONTS.E_REGULAR};
        line-height: 20px;
        margin-bottom: 15px;
    `,
    eventsDescription: styled.View`
        
    `,
    eventsDescriptionContainer: styled.View`
        flex-direction: row;
        justify-content: space-between;
    `,
    eventsDescriptionOrg: styled.Text`
        font-family: ${({theme}) => theme.FONTS.E_MEDIUM};
        color: ${({theme}) => theme.COLORS.LETTER_BLACK};
        font-size: 12px;
        margin-bottom: 10px;

    `,
    eventsDescriptionLink: styled.Text`
        font-family: ${({theme}) => theme.FONTS.E_MEDIUM};
        color: ${({theme}) => theme.COLORS.LETTER_BLACK};
        font-size: 12px;
    `,
    descriptionBold: styled.Text`
        font-family: ${({theme}) => theme.FONTS.E_BOLD};
    `,
    eventsDescriptionAcess: styled.TouchableHighlight`
        width: 30px;
        height: 30px;
        align-items: center;
        justify-content: center;
        border-radius: 8px;
        
    `,
    icon2: styled(Feather)`
        font-size: 25px;
        color: ${({theme}) => theme.COLORS.LETTER_ORANGE};
    `,

}