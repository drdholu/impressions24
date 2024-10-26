// import { gsap } from 'gsap';

// export class Preloader {
// 	constructor() {
// 		this.body = document.body;
// 		this.preloader = this.createHtml('span', ['preloader'], this.body);
// 		this.preloader.inner = this.createHtml( 'span', ['preloader-inner'],	this.preloader );
// 		this.preloader.circle = this.createHtml( 'span', ['preloader-circle'], this.preloader.inner );
// 		this.preloader.content = this.createHtml( 'div', [ 'preloader-content' ], this.preloader );
// 		this.setContent()
// 		this.splitContent( this.preloader.content )
// 		this.gsap();
// 		// ...
// 	}

// 	setContent() {
// 		this.preloader.content.innerHTML = "<p class='preloader-content-text'>BY THE ARTIST FOR THE ARTIST</p>"
// 	}
// 	splitContent(element) {
// 		const words = element.innerText.split( ' ' );
// 		element.children[ 0 ].innerHTML = words.map(word => `<span>${word}</span>`).join(' ')
// 	}

// 	createHtml(tag = '', classNames = [], parent = '') {
// 		const el = document.createElement(tag);
// 		el.classList.add(...classNames);
// 		return parent.appendChild(el);
// 	}



// 	gsap() {
// 		const timing = 2;
// 		const tl = gsap.timeline();
// 		const spans = this.preloader.content.querySelectorAll( 'span' )
// 		tl.set(this.body, {overflow: 'hidden'})
// 		tl.set( [ ...spans ], { opacity: 0, transform: 'translateY(-25px)', } );
// 		spans.forEach( ( span, index ) => {
// 			let duration = Math.max( 0.5, span.innerText.length * 0.16 )
// 			let overlap = 0
// 			if (index > 0) {
// 				overlap = .5
// 			}
// 			tl.to( span, {
// 				opacity: 1,
// 				transform: 'translateY(0)',
// 				duration: duration,
// 				ease: 'circ.out'
// 			}, `-=${overlap}`)
// 			tl.to( span, {
// 				opacity: 0,
// 				duration: .5,
// 				delay : .25,
// 				ease: 'circ.out'
// 			} );
// 		})
// 		tl.set( '.preloader-inner', { borderWidth: 200 + 'vw', transform: 'translate(0) scale(0.5)', });
// 		tl.set('.preloader-circle', { borderWidth: 0 });
// 		tl.to('.preloader-inner', {
// 			duration: timing,
// 				transform: 'scale(1)',
// 				borderWidth: 50 + 'vw',
// 			ease: 'circ.out'
// 		} );
// 		tl.to(
// 			'.preloader-circle',
// 			{
// 				duration: timing,
// 				borderWidth: 50 + 'vw',
// 				ease: 'circ.out'
// 			},
// 			`-=${timing}` // Overlap the previous animation
// 		);
// 		tl.set( '.preloader', { display: 'none' } )
// 		tl.set( this.body, { overflow: 'auto' } )

// 		// ...
// 	}
// }


import gsap from 'gsap';
import React, { useLayoutEffect, useRef } from 'react'

const Preloader = ({ children }) => {

    const comp = useRef(null);
    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            const t1 = gsap.timeline()
            t1.from("#intro-slider", {
                xPercent: "-100",
                duration: 1.6,
                delay: 0.3,
            })
                .from(["#title-1", "#title-2", "#title-3", "#title-4"], {
                    opacity: 0,
                    y: "+=30",
                    stagger: 0.5,
                })
                .to(["#title-1", "#title-2", "#title-3", "#title-4"], {
                    opacity: 0,
                    y: "-=30",
                    delay: 0.3,
                    stagger: 0.5,
                })
                .to("#intro-slider", {
                    xPercent: "-100",
                    duration: 1.3,
                })
                .from("#welcome", {
                    opacity: 0,
                    duration: 0.5,
                })
        }, comp)


        return () => ctx.revert();
    }, [])
    return (
        <div className='relative font-sans' ref={comp}>
            <div
                id='intro-slider'
                className='absolute top-0 left-0 flex flex-col items-center justify-center w-full h-screen gap-10 p-10 tracking-tight z-100 bg-gray-50'>
                <h1 className='text-5xl font-bold md:text-9xl' id='title-1'>BY</h1>
                <h1 className='text-5xl font-bold md:text-9xl' id='title-2'>THE ARTIST</h1>
                <h1 className='text-5xl font-bold md:text-9xl' id='title-3'>FOR</h1>
                <h1 className='text-5xl font-bold md:text-9xl' id='title-4'>THE ARTIST</h1>
            </div>
                {/* <h1 id='welcome' className='font-bold text-gray-100 text-9xl'>Welcome.</h1> */}
            {children}
        </div>
    )
}

export default Preloader