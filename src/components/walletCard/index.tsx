import React, { useMemo } from 'react'
import { Container } from './styles'
import dollarImg from '../../assets/dollar.svg'
import arrowUpImg from '../../assets/arrow-up.svg'
import arrowDownImg from '../../assets/arrow-down.svg'
import CountUp from 'react-countup'

interface IWalletCardProps {
    title: string;
    amount: number;
    footerlabel: string;
    icon: 'dollar' | 'arrowUp' | 'arrowDown';
    color: string;
}

const WalletCard: React.FC<IWalletCardProps> = ({
    title,
    amount,
    footerlabel,
    icon,
    color,
}) => {
    const iconSelected = useMemo(() => {
        switch (icon) {
            case 'dollar':
                return dollarImg;
            
            case 'arrowUp':
                return arrowUpImg;

            case 'arrowDown':
                return arrowDownImg;

            default:
                return undefined;
        }
    }, [icon])

  return (
    <Container color={color}>
        <span> {title} </span>
        <h1>
            <CountUp
                end={amount}
                prefix={"R$ "}
                separator="."
                decimal=","
                decimals={2}
            />
        </h1>
        <small>{footerlabel}</small>
        <img src={iconSelected} alt={title} />
    </Container>
  )
}

export default WalletCard;