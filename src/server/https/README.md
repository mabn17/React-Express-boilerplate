# About the certificates

These certificates are not trusted and are only used for local development for more information on how to use and generate your own check out [timonwebs article](https://timonweb.com/posts/running-expressjs-server-over-https/).

If you run the the application with the 'dev' option, it will not work. This is the case since the server and the cli are litsenting to two different ports (3000 and 8080). So if you want to test this, try running the `yarn start` option insted. Https will automaticly redirect you to port 443 but http is still set to lisen to 8080.
