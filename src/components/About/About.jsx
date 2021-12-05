import './About.css'
import styled from "styled-components";

const About = () => {

const ImgContainer = styled.img`
  color:blue;
`

    return (
        <>
            <div className="about-header">
                <ImgContainer className="photo" src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcR_BSXPlBjoBeJruSaCamv7kQuMNjoIIWX0CITXUVoapFCbRM9g"  alt=""/>
            </div>
        </>
    )
}

export default About