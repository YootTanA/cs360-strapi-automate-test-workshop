module.exports = {
  routes: [
    {
      method: "GET",
      path: "/public/hello",
      handler: "public.hello",
      config: {
        auth: false, // enables the public route
      },
    },
  ],
};
