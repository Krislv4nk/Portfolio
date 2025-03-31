// import { useState, useEffect, useRef } from 'react';
// import FOG from 'vanta/dist/vanta.fog.min';

// export const MyFog = () => {
//   const [vantaEffect, setVantaEffect] = useState(null);
//   const myRef = useRef(null);

//   useEffect(() => {
//     if (!vantaEffect && myRef.current) {
//       setVantaEffect(
//         FOG({
//           el: myRef.current,
//           mouseControls: true,
//           touchControls: true,
//           gyroControls: false,
//           minHeight: 200.0,
//           minWidth: 200.0,
//           highlightColor: 0x6c1393,
//           midtoneColor: 0xf739ca,
//           lowlightColor: 0x275fe0,
//           baseColor: 0x272525,
//           speed: 0.8,
//         })
//       );
//     }
//     return () => {
//       if (vantaEffect) vantaEffect.destroy();
//     };
//   }, [vantaEffect]);

//   return <div ref={myRef} style={{ width: "100%", height: "100vh" }}>
//     Foreground content goes here
//   </div>;
// };
