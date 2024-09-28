/* ==========================
   File Name: [project.jsx]
   Student’s Name: Thadee Sidyumunsi
   Student ID: 301432375
   Date: 9/25/204
   ========================== */

export default function Project() {
    return (
      <>
      <div className = "Welcome" >

      <h2>My Projects</h2>
        
        <div className="Projects">
        <h3>Harmony Spa</h3>
        <p><img src= "/images/Harmony_spa.png" className="ProjectsImg"></img></p>
        <p>‘Harmony Spa’ is a demo site. The site was a spa website that allowed users to see the spa services and pricing while allowing users to provide feedback/reviews. 
          My responsibilities for the project were to; implement the form, design the website, and correct any syntax errors found while developing the project.
           </p>

        </div>
        
        <div className="Projects">
        <h3>Pizza Order</h3>
        <p><img src= "/images/Pizza_order.png" className="ProjectsImg"></img></p>
        <p>'Pizza Order' is a windows application project that was developed using C#. The project was to demonstrate pizza ordering system. Customers input their Name, phone number, 
          Address, and there choice of pizza. The app will then take all the information and generate a random order#, Order total, and Order summary. All the code for the application 
          was done by me.</p>

        </div>

        <div className="Projects">
        <h3>Pokemon API</h3>
        <p><img src= "/images/pokemon api.png" className="ProjectsImg"></img></p>
        <p>'Pokemon API' is a website to to showcase over 100 pokemons. 
          Using the Pokemon API i can get the pokemon detail and user may see any pokemon details by simply clicking on the pokemon
          of their choice. I was tasked with Implamenting the javascript for the website which included; using the API, and organizing the layout.
        </p>

        </div>
        
      
      </div>
       

        
      </>
    );
  }



