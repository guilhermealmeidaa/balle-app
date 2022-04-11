import styled from 'styled-components/native'
import { Feather } from '@expo/vector-icons';

export default{

    container: styled.SafeAreaView`
        width: 100%;
        height: 100%;
        background-color: #282828;
        display: flex;
    `,
    greetingHello: styled.View`
        width: 70%;
        margin-left: auto;
        margin-right: auto;
        height: 10%;
        margin-top: 80px;
        display: flex;
        align-items: flex-start;
        justify-content: center;
    `,
    greetingHelloText: styled.Text`
        font-size: 40px;
        color: #FFF;
        font-family: ${({ theme }) => theme.FONTS.E_BOLD} ;
    `,
    greetingTextOrange: styled.Text`
        color: ${({ theme }) => theme.COLORS.LETTER_ORANGE};
    `,
    greetingSlogan: styled.View`
        width: 70%;
        height: 15%;
        margin-left: auto;
        margin-right: auto;
        align-items: flex-start;
        justify-content: center;
        
    `,
    greetingSloganText: styled.Text`
        font-size: 20px;
        max-width: 200px;
        color: #C6C6C6;
        letter-spacing: 2px;
        line-height: 30px;
        font-family: ${({ theme }) => theme.FONTS.E_REGULAR} ;

    `,
    textOrange: styled.Text`
        background-color: #FF5100;
    `,
    greetingImageContainer: styled.View`
        width: 80%;
        margin-left: auto;
        margin-right: auto;
    `,
    greetingImage: styled.Image`

    `,
    greetingButton: styled.TouchableHighlight`
        width: 50px;
        height: 50px;
        margin: auto;
        border-radius: 10px;
        background-color: ${({theme}) => theme.COLORS.LETTER_ORANGE};
        justify-content: center;
        align-items: center;
    `,
    icon: styled(Feather)`
        font-size: 30px;
        color: #FFF;
    `
}