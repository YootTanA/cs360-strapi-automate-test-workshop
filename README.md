

## This repository contains meterial for CS360 class 1/2024.




create a file  `./tests/hello/index.js`

    const request = require("supertest");
    
    it("should return Hello World!", async () => {
      const response = await request(strapi.server.httpServer)
        .get("/api/public/hello")
        .then((data) => {
          console.log(data.text);
          expect(data.status).toBe(200);
          expect(data.text).toBe("Hello World!");
        });
    });

