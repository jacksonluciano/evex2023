/** @jsx jsx */
import styled from '@emotion/styled'

export const AccordionContainer = styled.div(props => ({
  margin: '0 auto',
  maxWidth: props.width ?? '100%',
  width: '100%',
  background: props.isOpen
    ? 'radial-gradient(92.86% 124.53% at 88.14% 108.49%, #FF06B5 3.05%, #F73C6E 29.36%, #E3E3E2 100%)'
    : 'transparent'
  // background: props.isOpen 
  //   ? 'radial-gradient(96.86% 103.53% at 110.14% 116.49%, #FF06B5 3.05%, #F73C6E 29.36%, #E3E3E2 100%)'
  //   : 'transparent',
    
}))

 export const AccordionHeader = styled.div(props => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '50px 35px 25px',
  position: 'relative',
  cursor: 'pointer',

  '.header_content': {
    'h3': {
      fontFamily: 'bw_gradual_demobold',
      fontSize: '56px',
      fontWeight: 700,
      lineHeight: '67.2px',
      textAlign: 'left',
      margin: 0,
    }
  },

  '.header_button': {
    width: '57px',
    height: '60px',
    backgroundColor: '#f5f5f5',
    border: '2px solid #000',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transform: props.isOpen ? 'rotate(180deg)' : 'rotate(0deg)'
  },

  '&::after': {
    content: '""',
    position: 'absolute',
    width: '100%',
    height: '2px',
    left: 0,
    bottom: 0,
    background: '#000'
  },

  '@media (max-width: 768px)': {
    padding: '20px',

    '.header_content' : {
      'h3': {
        fontSize: '40px',
      }
    },

    '.header_button': {
      width: '45px',
      height: '48px'
    }
  }
}))

export const AccordionCollapse = styled.div(props => ({
  height: props.open ? 'fit-content' : '0px',
  opacity: props.open ? '1' : '0',
  transition: 'height 0.3s ease-in-out, opacity 0.2s ease',

  '.body_informations': {
    display: 'flex',
    flexDirection: 'column',
    gap: '40px',
    padding: '50px 35px',

    'a': {
      color: '#000000',
      fontFamily: 'bw_gradual_demomedium',
      fontSize: '30px',
      fontWeight: 300,
      lineHeight: '36px',
      textAlign: 'left',
      textDecoration: 'underline',
    }
  },

  '@media (max-width: 768px)': {
    '.body_informations': {
      gap: '20px',

      'a': {
        fontSize: '18px'
      }
    }
  }
}))