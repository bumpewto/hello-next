import styled from "styled-components";

const Frame = styled.div`
  width: ${props => props.width};
  /* overflow: hidden; */
  /* display: flex; */
  /* justify-content: center;
  align-items: center; */

  picture {
    width: 100%;
  }

  img {
    object-fit: cover;
    width: 100%;
    height: ${props => props.height};
    object-position: ${props => props.position};
  }
`;

const Image = ({
  width,
  height,
  zoom,
  position,
  srcset0,
  srcset600,
  srcset1000,
  alt
}) => (
  <Frame width={width} height={height} zoom={zoom} position={position}>
    <picture>
      <source media="(min-width: 1000px)" srcSet={srcset1000 || srcset0} />
      <source media="(min-width: 600px)" srcSet={srcset600 || srcset0} />
      <source media="(min-width: 0px)" srcSet={srcset0} />
      <img alt={alt || ""} />
    </picture>
  </Frame>
);

export default Image;
