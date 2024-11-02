import React, { useState } from 'react'
import Container from '../Container';
import Flex from '../Flex';
const CirculerProgressBar = () => {

const [value] = useState(70);
const [valueTwo] = useState(85);
const [valueThree] = useState(60);
const [valueFour] = useState(40);
  return (

    <section className='mt-[120px]'>
      <Container>
        <Flex className='justify-center'>
<div className='w-[430px] '>
<div className='ml-20'
    role="progressbar"
    aria-valuenow={value}
    aria-valuemin="0"
    aria-valuemax="100"
    style={{ '--value': value }}
  ></div>
  <h1 className='ml-[90px] pt-5 font-openSans font-semibold text-[26px] text-fontColor'>Graphic Design</h1>
</div>

<div className='w-[430px] '>
<div className='ml-20'
    role="progressbar"
    aria-valuenow={valueTwo}
    aria-valuemin="0"
    aria-valuemax="100"
    style={{ '--value': valueTwo }}
  ></div>
  <h1 className=' ml-[100px] pt-5 font-openSans font-semibold text-[26px] text-fontColor'>Web Designing</h1>
</div>

<div className='w-[430px] '>
<div className='ml-20'
    role="progressbar"
    aria-valuenow={valueThree}
    aria-valuemin="0"
    aria-valuemax="100"
    style={{ '--value': valueThree }}
  ></div>
  <h1 className='ml-[100px] pt-5 font-openSans font-semibold text-[26px] text-fontColor'>Brand Designing</h1>
</div>

<div className='w-[430px] '>
<div className='ml-20'
    role="progressbar"
    aria-valuenow={valueFour}
    aria-valuemin="0"
    aria-valuemax="100"
    style={{ '--value': valueFour }}
  ></div>
  <h1 className='ml-[75px] pt-5 font-openSans font-semibold text-[26px] text-fontColor'>Web Development</h1>
</div>
</Flex>
      </Container>

    </section>

  )
}

export default CirculerProgressBar