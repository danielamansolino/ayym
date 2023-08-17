// import React from 'react';
// import './MobileNavBar.css'

// const MobileNavBar = () => {
//     const navigationLinks = [
//       { imageSource: 'https://imgur.com/UZqm54M.png', link: '/' },
//       { imageSource: 'https://imgur.com/UZqm54M.png', link: '/about' },
//       { imageSource: 'https://imgur.com/UZqm54M.png', link: '/services' },
//       { imageSource: 'https://imgur.com/UZqm54M.png', link: '/contact' },
//     ];
  
//     const handleLinkPress = (link) => {
//       // Implement your navigation logic here
//       // Example: Use window.location.href = link; for simple navigation
//     };
  
//     return (
//       <div className="mobile-nav-bar">
//         <div className="nav-bar-images">
//           {navigationLinks.map((link, index) => (
//             <a
//               key={index}
//               className="nav-bar-item"
//               href={link.link}
//               onClick={(e) => {
//                 e.preventDefault();
//                 handleLinkPress(link.link);
//               }}
//             >
//               <img src={link.imageSource} alt={`Link ${index}`} className="nav-bar-image" />
//             </a>
//           ))}
//         </div>
//       </div>
//     );
//   };
  
//   export default MobileNavBar;
 
import React from 'react';
import './MobileNavBar.css'

const MobileNavBar = () => {
  const navigationLinks = [
    { imageSource: 'https://imgur.com/zArMutS.png', link: '/' },
    { imageSource: 'https://imgur.com/BCsVY0h.png', link: '/expense' },
    { imageSource: 'https://imgur.com/qnq098B.png', link: '/statistics' },
    { imageSource: 'https://imgur.com/DuXX0lP.png', link: '/settings' },
  ];

  return (
    <div className="mobile-nav-bar">
      <div className="nav-bar-images">
        {navigationLinks.map((link, index) => (
          <a key={index} className="nav-bar-item" href={link.link}>
            <img src={link.imageSource} alt={`Link ${index}`} className="nav-bar-image" />
          </a>
        ))}
      </div>
    </div>
  );
};

export default MobileNavBar;
