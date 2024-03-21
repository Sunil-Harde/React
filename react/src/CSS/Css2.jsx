import React, { useState } from 'react';
import image from './Photo/img6.jpg';
import './Css1.css';

function Css() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={darkMode ? 'dark-mode' : 'light-mode'}>
      <nav className={`navbar1 ${darkMode ? 'navbar-dark' : ''}`}>
        <div className="white">KR
            <button onClick={toggleDarkMode}>Dark</button>
        </div>
        <div className="black">
          <div className='red'><a href="">Home</a></div>
          <div className='red'><a href="">About</a></div>
          <div className='red'><a href="">Gallery</a></div>
          <div className='red'><a href="">Contact</a></div>
          <div className='red'>
          </div>
          <div className='red'><input type="text" placeholder='search' /></div>
        </div>
      </nav>

      <div className='username'>
        <div className='username1'>
          <h1>Sunil Harde</h1>
          <h2>Web Devloper</h2>
          <button>Print</button>
        </div>
      </div>
      <div className='img'><img src={image} alt="" /></div>

      <div className='aboutskill'>
        <div className="about">
          <h1>About</h1>
          <p>Lorem ipsum dolor, sit amet Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est quibusdam itaque vel, officia cupiditate similique ex veritatis inventore adipisci totam porro quam quos consequatur ut, vitae exercitationem facilis earum esse. consectetur adipisicing elit. Aperiam dolor tempore fugit inventore error omnis distinctio illo exercitationem nemo? Natus velit fuga libero veniam obcaecati consequuntur, debitis dolorem laborum odit.</p>
        </div>

        <div className="skill">
          <h1>Skill</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam iste quaerat doloremque enim dolorum. Natus sit quaerat aspernatur ducimus. Veritatis architecto vel quos exercitationem porro accusantium sunt dolores mollitia nemo!
            Cumque repellendus veritatis cupiditate, impedit asperiores totam voluptatem recusandae corporis quibusdam, provident, similique iste quaerat expedita minus laboriosam ut? Ipsa suscipit officiis impedit quis quas, aliquid eum? Praesentium, eum molestias.
            Maxime eos eligendi sit? Voluptatem optio quaerat, eum laborum iusto corporis officia, placeat explicabo eligendi ducimus neque, reiciendis cumque tempora quas eius iure debitis nobis harum fuga? Sequi, placeat expedita!
            Quibusdam, facere, provident nihil temporibus aliquam vel dicta facilis ex fuga cumque sit dolorem, libero non ea placeat quod animi recusandae neque? Vero esse, possimus veniam modi et itaque ab!
            Suscipit velit porro doloribus aliquam. Cum ipsum necessitatibus repudiandae vel magni? Quas natus, laboriosam quo suscipit delectus enim eaque neque, soluta autem laudantium doloremque. Recusandae atque nostrum porro voluptatem possimus? adipisicing elit. Sed tempore, nesciunt dignissimos harum unde error cumque debitis placeat quia quo sint! Fugiat dolores modi adipisci vel rerum deserunt, laborum quidem!
          </p>
          <div className='colume1'>
            <div className="focus">
              <h2>MY FOCUS</h2>
              <p><b>UI/UX Desing</b></p>
              <p><b>Responsive Desingn</b></p>
              <p><b>Web Desingn</b></p>
              <p><b>Mobile App Desingn</b></p>
            </div>
              
            <div className="container">
              <div className="html "> <div className="skillset2">HTML</div></div>
            </div>

            <div className="container">
                <div className="css "> <div className="skillset2">CSS</div></div>
            </div>

            <div className="container">
              <div className="javascript "> <div className="skillset2">JavaScript</div></div>
            </div>
              
            <div className="container">
                <div className="react "> <div className="skillset2">React</div></div>
            </div>

            <div className="container">
               <div className="java "> <div className="skillset2">Java</div></div>
            </div>
                
            <div className="container">
              <div className="python"> <div className="skillset2">Python</div></div>
            </div>

          </div>
         </div>

      </div>

      <div className="card">
        <div className="card1">
          <div className="cardname">Web Design</div>
          <div className="cardname">Mobile Design</div>
          <div className="cardname">Logo Design</div>
          <div className="cardname">Web Application Development</div>
          <div className="cardname">Mobile Application Development</div>
          <div className="cardname">PWA Development</div>
        </div>
      </div>

      <div className='footer1'>
        <div className="col1">
          <h2>GET TOUCH</h2>
          <h5>Gmail: S@gmail.com</h5>
          <h5>CON: 7517458725</h5>
        </div>
        <div className="col2">
          <h2><button>CONTACT ME</button></h2>
        </div>
        <div className="col3">
          <p>Copyright @ 2019 KR</p>
        </div>
      </div>
    </div>
  );
}

export default Css;
