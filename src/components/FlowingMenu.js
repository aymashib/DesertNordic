import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const FlowingMenu = () => {
  const menuRef = useRef(null);
  const menuItems = ['Concept', 'Inspiration', 'Ethos', 'Craftsmanship'];

  useEffect(() => {
    const menu = menuRef.current;
    const items = menu.querySelectorAll('.menu-item');

    gsap.to(items, {
      opacity: 0.5,
      stagger: 0.1,
      scrollTrigger: {
        trigger: menu,
        start: 'top center',
        end: 'bottom center',
        toggleActions: 'play none none reverse'
      }
    });

    items.forEach((item) => {
      item.addEventListener('mouseenter', () => {
        gsap.to(item, { opacity: 1, x: -10, duration: 0.3 });
      });

      item.addEventListener('mouseleave', () => {
        gsap.to(item, { opacity: 0.5, x: 0, duration: 0.3 });
      });
    });
  }, []);

  return (
    <nav
      ref={menuRef}
      style={{
        position: 'fixed',
        right: '2rem',
        top: '50%',
        transform: 'translateY(-50%)',
        zIndex: 1000,
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem'
      }}
    >
      {menuItems.map((item) => (
        <div
          key={item}
          className="menu-item"
          style={{
            color: '#4A2F24',
            cursor: 'pointer',
            fontSize: '14px',
            letterSpacing: '2px',
            fontWeight: 400,
            textTransform: 'uppercase'
          }}
        >
          {item}
        </div>
      ))}
    </nav>
  );
};

export default FlowingMenu;