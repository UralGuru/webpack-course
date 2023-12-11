import treePng from '@/assets/tree.png';
import christmasJpg from '@/assets/christmas.jpg';

const About = () => {
  return (
    <>
        About
        <div>
          <img src={treePng} alt="Tree" />
        </div>
        {treePng}
        <div>
          <img src={christmasJpg} alt="christmasJpg" />
        </div>
        {christmasJpg}
    </>
  );
};

export default About;