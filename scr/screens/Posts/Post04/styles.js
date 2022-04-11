import styled from 'styled-components/native'
import { Feather } from '@expo/vector-icons';

export default {

    postContainer: styled.View`
        flex: 1;
        background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
    `,
    postHeader: styled.View`
        width: 85%;  
        margin-right: auto;
        margin-left: auto;
        margin-top: 90px;
        height: 10%;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        
    `,
    headerInformations: styled.View`
        flex-direction: column;
    `,
    headerInformationsDate: styled.Text`
        color: ${({ theme }) => theme.COLORS.LETTER_ORANGE};
        font-family: ${({ theme }) => theme.FONTS.E_BOLD};
        font-size: 20px;
        margin-bottom: 8px;
    `,
    headerInformationsHour: styled.Text`
        color: ${({ theme }) => theme.COLORS.LETTER_ORANGE};
        font-family: ${({ theme }) => theme.FONTS.E_MEDIUM};
        font-size: 20px;
    `,
    eventsHeaderButton: styled.Pressable`
        flex-direction: row;
    `,
    icon: styled(Feather)`
        font-size: 20px;
        color: ${({ theme }) => theme.COLORS.LETTER_GREY};
    `,
    backText: styled.Text`
        font-size: 15px;
        color: ${({ theme }) => theme.COLORS.LETTER_GREY};
    `,
    postMain: styled.View`
        width: 85%;
        margin-left: auto;
        margin-right: auto;
        margin-top: 15px;
    `,
    postMainTitle: styled.Text`
        color: ${({theme}) => theme.COLORS.LETTER_DEFAULT};
        font-family: ${({theme}) => theme.FONTS.E_EXTRABOLD};
        font-size: 30px;
        line-height: 43px;
        margin-bottom: 15px;
    `,
    postMainSubtitle: styled.Text`
        color: ${({theme}) => theme.COLORS.LETTER_SUBTITLE};
        font-family: ${({theme}) => theme.FONTS.E_REGULAR};
        font-size: 13px;
        line-height: 20px;
        line-height: 28px;
        margin-bottom: 29px;
    `,
    postMainOrg: styled.Text`
        font-family: ${({theme}) => theme.FONTS.E_MEDIUM};
        color: ${({theme}) => theme.COLORS.LETTER_DEFAULT};
        font-size: 12px;
        margin-bottom: 10px;
    `,
    postMainOrgBold: styled.Text`
        font-family: ${({theme}) => theme.FONTS.E_BOLD};
    `,
    postLink: styled.View`
        width: 85%;
        margin-left: auto;
        margin-right: auto;
        align-items: center;
        margin-top: 60px;

    `,
    postLinkTitle: styled.Text`
        color: ${({theme}) => theme.COLORS.LETTER_DEFAULT};
        font-family: ${({theme}) => theme.FONTS.E_EXTRABOLD};
        font-size: 22px;
        margin-bottom: 30px;
    `,
    postLinkContainer: styled.View`
        background-color: #323232;
        width: 100%;
        height: 50px;
        border-radius: 5px;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    `,
    postLinkText: styled.Text`
        color: ${({theme}) => theme.COLORS.LETTER_DEFAULT};
        font-family: ${({theme}) => theme.FONTS.E_SEMIBOLD};
        margin-left: 15px;
    `,
    postLinkButtom: styled.TouchableHighlight`
        background-color: #17553A;
        width: 28px;
        height: 28px;
        align-items: center;
        justify-content: center;
        border-radius: 8px;
        margin-right: 15px;
    `,
    iconRight: styled(Feather)`
        color: #A2FFCC;
    `,


}