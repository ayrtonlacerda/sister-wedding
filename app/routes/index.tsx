import React, { useRef, useEffect } from 'react'
import { Link, animateScroll as scroll, Element, scroller } from 'react-scroll'
/**
 * https://tailwindcss.com/docs/height
 */

function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms)
  })
}

function debounce(func, delay = 250) {
  let timerId
  return (...args) => {
    clearTimeout(timerId)
    timerId = setTimeout(() => {
      func.apply(this, args)
    }, delay)
  }
}

export default function Index() {
  return (
    <div
      className="overflow-y-scroll snap-y snap-mandatory"
      id="containerElement"
    >
      <section
        id="section1"
        //ref={section1}
        onScroll={(e) => console.log('1->', e.currentTarget)}
        onScrollCapture={(e) => console.log(e.currentTarget)}
        className="snap-start"
      >
        <div className="bg-blue-500 h-screen w-screen"></div>
      </section>
      <section
        id="section2"
        //ref={section2}
        className="snap-start"
      >
        <div className=" bg-red-500  h-screen w-screen "></div>
      </section>

      <section
        id="section3"
        className=" bg-green-500  h-screen w-screen snap-start"
      />
    </div>
  )
}

/* 
  return (
    <html className="scroll-smooth">
      <Element name="test1">
        <section
          //ref={section1}
          className="container bg-blue-500 flex-1 h-screen w-screen "
        />
      </Element>
      <Element name="test2">
        <div
          //ref={section2}
          className="container bg-red-500  flex-1 h-screen w-screen"
        />
      </Element>

      <section
        id="3"
        className="container bg-green-500  flex-1 h-screen w-screen"
      />
    </html>
  )

*/
