const GA_TRACKING_ID = process.env.GA_TRACKING_ID;

export const GTagScript = () => {
  let intercept = () => {
    const qs = document.querySelector("#GTM-js");
    if (qs !== null) {
      qs.addEventListener("load", () => {
        console.log("GTM loaded");
      });
    }
  };

  return (
    <>
      <script
        id="gtm-js"
        async
        src={`https://www.googletagmanager.com/gtm.js?id=${GA_TRACKING_ID}`}
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}');
            (${intercept.toString()})()
            `
        }}
      />
    </>
  );
};

export const GTagNoScript = () => (
  <>
    <noscript>
      <iframe
        src={`https://www.googletagmanager.com/ns.html?id=${GA_TRACKING_ID}`}
        height="0"
        width="0"
        style={{ display: "none", visibility: "hidden" }}
      />
    </noscript>
  </>
);
