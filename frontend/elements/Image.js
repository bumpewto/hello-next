const Image = ({ srcset0, srcset600, srcset1000, src, alt }) => (
  <picture>
    <source media="(min-width: 0px)" srcset={srcset0 || src} />
    <source media="(min-width: 600px)" srcset={srcset600 || srcset0} />
    <source media="(min-width: 1000px)" srcset={srcset1000 || srcset0} />
    <img src={src} alt={alt || ""} />
  </picture>
);

export default Image;
