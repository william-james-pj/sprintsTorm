import styled from 'styled-components/native'

import { fonts } from 'src/styles/fonts'

type ComponentsProps = {
  isRight: boolean
}

type BeforeProps = {
  isLeveBefore: boolean
}

type AfterProps = {
  isLeveAfter: boolean
}

export const ViewWrapper = styled.View`
  width: 100%;
  height: 122px;

  padding: 0 16px 0 0;

  flex-direction: row;
  gap: 32px;
`

export const ViewLevelContainer = styled.View`
  height: 100%;

  flex-direction: row;
  align-items: flex-end;
  gap: 8px;
`

export const ViewLevel = styled.View<BeforeProps>`
  background: ${({ theme, isLeveBefore }) =>
    isLeveBefore ? theme.colors.primary : 'rgba(64, 75, 93, 0.6)'};
  width: 20px;
  height: 100%;
`

export const TextLevelNumber = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-size: ${fonts.size.xs};
  font-family: ${fonts.type.text600};
  margin-bottom: -8px;
`

export const ViewContentContainer = styled.View`
  flex: 1;

  padding: 16px 0;
`

export const ViewCard = styled.View`
  background: ${({ theme }) => theme.colors.card};
  flex: 1;

  border-radius: 8px;
  overflow: hidden;
`

export const ViewCardContent = styled.View<ComponentsProps>`
  flex: 1;

  padding: 0px 16px;

  flex-direction: ${({ isRight }) => (isRight ? 'row-reverse' : 'row')};
  align-items: center;
  gap: 8px;
`

export const ViewCardContainer = styled.View`
  flex: 0.8;

  align-items: center;
  justify-content: center;
`

export const ViewTextContainer = styled.View<ComponentsProps>`
  flex-direction: column;
  align-items: ${({ isRight }) => (isRight ? 'flex-end' : 'flex-start')};
  flex: 1.2;
  gap: 4px;
`

export const TextTitle = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-size: ${fonts.size.sm};
  font-family: ${fonts.type.text600};
`

export const TextDescription = styled.Text<ComponentsProps>`
  color: ${({ theme }) => theme.colors.disabled};
  font-size: 6px;
  font-family: ${fonts.type.text400};
  text-align: ${({ isRight }) => (isRight ? 'right' : 'left')};
`

export const ViewAward = styled.View`
  background: ${({ theme }) => theme.colors.background};

  padding: 8px 12px;
  border-radius: 4px;

  flex-direction: column;
  align-items: center;
  gap: 2px;
`

export const TextAward = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-size: ${fonts.size.xxs};
  font-family: ${fonts.type.text600};
`
