import React from 'react'
import { SelectStyled } from '../styled/selectStyled'

export const SelectPlanetas = () => {
    return (
        <div>
             <SelectStyled>
                <option>Escolha um planeta</option>
                <option>Mercúrio</option>
                <option>Vênus</option>
                <option>Terra</option>
                <option>Marte</option>
                <option>Júpiter</option>
                <option>Saturno</option>
                <option>Urano</option>
                <option>Netuno</option>

            </SelectStyled>
        </div>
    )
}