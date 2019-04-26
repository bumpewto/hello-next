const RC_SITE_KEY = "6LeBGKAUAAAAAPPaOcbRMOicd2vw1j5GtMI4FVvJ";

export const RCTag = () => (
  <>
    <script
      id="rc-js"
      async
      src={`https://www.google.com/recaptcha/api.js?render=${RC_SITE_KEY}`}
    />
    <script
      dangerouslySetInnerHTML={{
        __html: `
          grecaptcha.ready(function() {
            grecaptcha.execute(${RC_SITE_KEY}, {action: 'homepage'}).then(function(token) {
               ...
            });`
      }}
    />
  </>
);
