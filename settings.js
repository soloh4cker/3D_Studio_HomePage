/* YOUR HOMEPAGE SETTINGS
   Paste the FULL GitHub Pages URL between the quotes after each url:.
   Save this file and upload it beside index.html. No build step needed.
   Example: url: "https://soloh4cker.github.io/your-project/"
*/
window.STUDIO_SETTINGS = {
  brandName: "3D Studio", // Change this to your own brand/name if you like.
  studios: [
    {
      name: "Pegboard Studio",
      url: "https://soloh4cker.github.io/skadis_pegboard_studio/", 
      icon: "pegboard",
      artLabel: "A PLACE FOR EVERYTHING",
      category: "Organize your wall",
      description: "Your wall, your layout. Create a pegboard with the size, holes, and screw mounts you need.",
      features: ["Board size", "Hole patterns", "Screw mounts"]
    },
    {
      name: "Shelf Studio",
      url: "https://soloh4cker.github.io/skadis_shelf_studio_3D/", 
      icon: "shelf",
      artLabel: "MAKE ROOM FOR YOUR THINGS",
      category: "Give things a home",
      description: "A shelf that actually fits. Customize SKÅDIS-style shelves, organizers, hooks, and supports.",
      features: ["Shelf styles", "Hooks", "Supports"]
    },
    {
      name: "Model Studio",
      url: "https://soloh4cker.github.io/3D_Model_Studio/", 
      icon: "model",
      artLabel: "START WITH A SIMPLE SHAPE",
      category: "Build your idea",
      description: "Start with shapes. Combine, resize, and hollow them to create a model that's your own.",
      features: ["Editable shapes", "Cutouts", "Hollow shells"]
    }
  ]
};
/* TO ADD ANOTHER TOOL:
   Copy one studio object above, put a comma between objects, and change its
   name, url, description, category, and features. Choose an icon:
   "pegboard", "shelf", or "model". The grid expands automatically.
   Leave url empty for a Coming soon card. Links open in a new tab.
*/
