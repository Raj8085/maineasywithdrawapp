
// const HeroSection = () => {
//   return (
//     <section className="relative w-full h-screen overflow-hidden">
//       {/* Background Video */}
//       <video
//         className="absolute top-0 left-0 w-full h-full object-cover"
//         src="/herovedio.mp4"
//         autoPlay
//         loop
//         muted
//         playsInline
//       />
//       {/* Overlay */}
//       <div className="absolute inset-0  bg-opacity-60"></div>
//     </section>
//   );
// };
// export default HeroSection;


const HeroSection = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden">
  {/* Background Video */}
  <video
    className="absolute top-0 left-0 w-full h-full object-cover"
    src="/herovedio.mp4"
    autoPlay
    loop
    muted
    playsInline
  />

  {/* Dark Overlay for better text visibility */}
  <div className="absolute inset-0 bg-black bg-opacity-40"></div>

  {/* Content: Text on Video */}
  <div className="relative z-10 container mx-auto px-4 h-full flex pt-[10%] justify-start">
    <div className="text-white max-w-3xl">
      <h1 className="text-4xl md:text-5xl font-bold leading-tight salsa-font">
        YOUR ONE-STOP DESTINATION <br />
        FOR DIGITAL CARDS &amp; CREDIT SOLUTION
      </h1>
      <p className="mt-4 md:mt-12 text-lg md:text-xl ">
        Access All Your Favorite Digital Cards – Plus Bitcoin – All in One Place
      </p>
    </div>
  </div>
</section>

  );
};

export default HeroSection;