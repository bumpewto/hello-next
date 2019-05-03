import { useState, useEffect } from "react";
import styled from "styled-components";
import { useTransition, animated } from "react-spring";

const Image = styled(animated.img)`
  img {
    filter: blur(25px);
  }
`;

const ProgressiveImage = ({ url }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const handleLoad = () => setIsLoaded(true);
  }, [isLoaded]);

  const transitions = useTransition(isLoaded, null, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });

  const FinalImage = () => <animated.img src={url} onLoad={handleLoad()} />;
  const BlurredImage = () => <Image src={`${url}?lqip`} />;

  return transitions.map(({ loaded, key, props }) =>
    (loaded ? <FinalImage key={key} style={props} /> : <BlurredImage key={key} style={props} />));
};

export default ProgressiveImage;
