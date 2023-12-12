import React from 'react'
import Welcome from "./Body/Welcome";
import Logos from "./Body/Logos";
import MidCont from "./Body/MidCont";
import Review from "./Body/Review"

export default function body() {
  return (
    <>
     <div style={{ backgroundColor: '#fff' }}>
    <Welcome/>
    <Logos/>
    <MidCont/>
    <Review/>
    </div>
    </>
  )
}
