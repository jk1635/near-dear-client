import { useNavigate } from 'react-router-dom';

import styled from '@emotion/styled';

import Icon from '@common/components/Icon.tsx';
import Text from '@common/components/Text.tsx';

import Search from './Search';

interface HeaderProps {
    title?: string;
    showBackButton?: boolean;
    showLogo?: boolean;
    showRightItems?: boolean;
}

const Header = ({ title, showBackButton = false, showLogo = false, showRightItems = false }: HeaderProps) => {
    const navigate = useNavigate();

    const handleBack = () => navigate(-1);

    return (
        <HeaderContainer>
            <LeftItems>
                {showBackButton && (
                    <HeaderIconBox>
                        <Icon size={1.25} onClick={handleBack} cursor>
                            arrow_back_ios
                        </Icon>
                    </HeaderIconBox>
                )}
                {showLogo && (
                    <HeaderIconBox>
                        <Icon size={1.5} cursor>
                            deceased
                        </Icon>
                    </HeaderIconBox>
                )}
                <div>
                    <Text variant="large_text">{title}</Text>
                </div>
            </LeftItems>
            {showRightItems && <Search />}
            <RightItems>
                {showRightItems && (
                    <>
                        <HeaderIconBox>
                            <Icon size={1.5} cursor>
                                check_box_outline_blank
                            </Icon>
                        </HeaderIconBox>
                        <HeaderIconBox>
                            <Icon size={1.5} cursor>
                                check_box_outline_blank
                            </Icon>
                        </HeaderIconBox>
                    </>
                )}
            </RightItems>
        </HeaderContainer>
    );
};

const HeaderContainer = styled.header`
    position: fixed;
    top: 0;
    left: 50%;
    z-index: 999;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 3.5rem;
    min-width: var(--min-width);
    max-width: var(--max-width);
    padding: 0 1.5rem;
    background-color: ${({ theme }) => theme.colors.white};
    transform: translateX(-50%);
    justify-content: space-between;
`;

const LeftItems = styled.div`
    display: flex;
    align-items: center;
`;

const RightItems = styled.div`
    display: flex;
    align-items: center;
`;

const HeaderIconBox = styled.div`
    padding: 0.25rem;
`;

export default Header;
