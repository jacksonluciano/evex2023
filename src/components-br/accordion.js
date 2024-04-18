/** @jsx jsx */
import React, { useState } from 'react'
import { jsx } from '@emotion/react'
import Arrow from '@/images-br/arrow-icon.svg'
import {
  AccordionContainer,
  AccordionHeader,
  AccordionCollapse
} from '../assets/styles-br/accordion.styles'

const Accordion = ({ accordionHeader, accordionBody }) => {
  const [openAccordion, setOpenAccordion] = useState(false)

  return (
    <AccordionContainer width='630px' isOpen={openAccordion}>
      <AccordionHeader
        onClick={() => setOpenAccordion(prevState => !prevState)}
        isOpen={openAccordion}
      >
        <div className='header_content'>
          {accordionHeader}
        </div>
        <div className='header_button'>
          <img src={Arrow} alt='ícone' />
        </div>
      </AccordionHeader>

      <AccordionCollapse open={openAccordion}>
        <div className='body_informations'>
          {accordionBody}
        </div>
      </AccordionCollapse>
    </AccordionContainer>
  )
}

export default Accordion