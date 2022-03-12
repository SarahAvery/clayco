import AboutStyled from "./Styles";

const AboutPage = () => {
  return (
    <AboutStyled>
      <h2>About Us</h2>
      <div className="paragraph">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id temporibus blanditiis excepturi itaque fugiat
          placeat possimus provident eaque qui facilis facere accusantium dicta, voluptate ipsa quae voluptas
          perferendis consectetur error!
        </p>
      </div>
      <div className="paragraph aside">
        <img src="./img/body-vases.jpg" alt="body vase" />
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, voluptatum necessitatibus, voluptate
            placeat, aliquid consequuntur beatae vitae quaerat fugit id maxime sint praesentium quae magnam debitis
            explicabo non voluptatibus delectus! Modi dicta tenetur explicabo atque, quo earum a quos dolores debitis.
          </p>
          <p>
            Asperiores pariatur dolore laboriosam nisi quas perspiciatis ipsam sapiente et doloribus ad. Neque itaque,
            ipsa quas dolorem in deserunt! Est sunt quis consequuntur odit suscipit animi nobis accusamus dicta
            molestias nam. Soluta qui accusamus quae sapiente? Quasi temporibus neque ex quam modi soluta, doloremque
            magnam ut vel possimus doloribus.
          </p>
          <p>
            Rem reiciendis neque saepe odio illo optio vero dolorum aliquam dolore sapiente quia necessitatibus ratione
            consequuntur voluptate delectus unde voluptates voluptatem, maxime pariatur. Magnam, obcaecati accusantium
            praesentium odio porro dolorum!
          </p>
        </div>
      </div>
    </AboutStyled>
  );
};

export default AboutPage;
